"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const http = require("http");
const fsExtra = require("fs-extra");
const superagent = require("superagent");
const admZip = require("adm-zip");
const Global_1 = require("../Global");
const client_1 = require("../client");
// const https = require('https');
// const fs = require('fs');
// const path = require('path');
//const yaml = require('js-yaml');
class Create extends core_1.Command {
    async run() {
        const { args, flags } = await this.parse(Create);
        let wellKnownKinds = Global_1.Global.WellKnownKinds;
        let kind = args.kind;
        let isValid = wellKnownKinds.indexOf(kind) > -1;
        //let shellTypeId = flags.shell_type_id;
        // Validate args kind is a well known kind
        if (!isValid) {
            this.warn(new Error(`Kind provided is not a well known Mango Kind: ${args.kind}`));
        }
        // Provide support for single yaml document creation 
        const doc = yaml.loadAll(fs.readFileSync(`${flags.file}`, 'utf8'));
        // // Process one or more kinds in array
        // console.log(doc);
        /// Application Shell - default no foundation id
        // generate installed instance code,
        // grab application shell from artifact? 
        // scaffold code for angular
        // extract code from zip file to current directory
        // set installed instance code in code
        if (kind) {
            switch (kind) {
                case "Application":
                case "ApplicationShell":
                    // Get the shell_type_id flag
                    //let appShell: ApplicationShell = doc as unknown as ApplicationShell;
                    let appShell = doc;
                    this.CreateApplicationShell(appShell);
                    break;
                case "Install":
                case "ShellType":
                    let shellTypes = doc;
                    shellTypes.forEach(async (item) => {
                        await client_1.ShellTypeService.postShellType(item);
                    });
                    break;
                case "Kind":
                default:
                // code block
            }
        }
        // let apiServerResult = await ApplicationService.postApplication(doc);
        // console.log('res after post ', apiServerResult)
        //   // yaml.loadAll(flags.file, function (doc: any) {
        //   //   console.log(doc);
        //   // });
        //   const name = flags.name ?? 'world'
        //   this.log(`hello ${name} from /Users/johnhaigh/Projects/mango-platform/cli/mango-cli/src/commands/create.ts`)
        //   if (args.kind) {
        //     this.log(`you input --file: ${flags.file} kind ${args.kind} `)
        //   }
    }
    async CreateApplicationShell(appShell) {
        // what do we return from this method? errors etc? boolean if success or else 
        // Call mango api server to create app shell and return a instance code
        //console.log(' app shell ', appShell[0].applicationShellTypeId, ' appShell.applicationShellTypeId ', appShell)
        // Get App Shell Type by applicationShellTypeId
        let appShellType = await client_1.ShellTypeService.findById(appShell[0].shellTypeId);
        // let appShell: ApplicationShell = {
        //   applicationShellName: '',
        //   installedInstanceCode: '',
        //   namespace: '',
        //   applicationShellTypeId: 
        // };
        let appShellCreated = await client_1.ApplicationShellService.postApplicationShell(appShell[0]);
        //console.log('shell type ', appShellType);
        // Get App Shell Zip. 
        //this.downloadFile(appShellType.fileReference);
        // Unzip to local temp location
        const source = appShellType.fileReference;
        const zipfile = path.basename(source);
        let extension = path.extname(source);
        let fullFileInfo = path.basename(source);
        let onlyFilename = path.basename(fullFileInfo, extension);
        let finalFolderName = appShellCreated.applicationShellName.replace(/\s+/g, "_");
        superagent
            .get(source)
            .on('error', function (error) {
            console.log(error);
        })
            .pipe(fs.createWriteStream(zipfile))
            .on('finish', function () {
            var _a;
            // add code below to here
            var zip = new admZip(zipfile);
            zip.extractAllTo('./temp');
            let instanceCode = (_a = appShellCreated.installedInstanceCode) !== null && _a !== void 0 ? _a : 'NOT_FOUND';
            // Write instance code to AppShell GlobalConstants
            const content = `export class GlobalConstants \n { \n \t public static ApplicationInstanceKey: string = "${instanceCode}"; \n }`;
            fs.writeFileSync(`./temp/${onlyFilename}/src/app/global.ts`, content);
            fs.rename(`./temp/${onlyFilename}`, `./temp/${finalFolderName}`, function (error) {
                if (error) {
                    throw error;
                }
                else {
                    console.log("success!");
                }
            });
            // Copy from temp location to user current location wherever that is
            fsExtra.copy('./temp', '.', function (error) {
                if (error) {
                    throw error;
                }
                else {
                    console.log("success!");
                }
            });
            fsExtra.remove('./temp', function (error) {
                if (error) {
                    throw error;
                }
                else {
                    console.log("success!");
                }
            });
            // Move file to location user specified with flag file_location
        });
        this.log(`No entries`);
        // Copy to user current location
    }
    downloadFile(url) {
        const filename = path.basename(url);
        http.get(url, (res) => {
            const fileStream = fs.createWriteStream(filename);
            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                console.log('Download finished');
            });
        });
    }
}
exports.default = Create;
Create.description = 'Create a resource from a file or from stdin.';
Create.examples = [
    '<%= config.bin %> <%= command.id %> -f path/file.yaml',
];
Create.flags = {
    // flag with a value (-n, --file=VALUE)
    file: core_1.Flags.string({ char: 'f', description: 'file to read' }),
    //  shell_type_id: Flags.string({long: 'shell_type_id', description: 'Shell Type Identifier'}),
    // flag with no value (-f, --force)
    //force: Flags.boolean({char: 'f'}),
};
// static args = {
//   file: Args.string({description: 'file to read'}),
// }
Create.args = {
    kind: core_1.Args.string({ name: 'create', description: 'create' }),
};
