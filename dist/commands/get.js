"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const index_1 = require("../client/index");
const Global_1 = require("../Global");
//import {ApplicationInstallApi} from 'apps-js-client/apps'
//import { Application, Install, ApplicationService, ApplicationShell, ApplicationShellService, CancelablePromise, Kind, KindService } from '../client'
class Get extends core_1.Command {
    async run() {
        var _a;
        //const {args2 } = await this.parse(Get)
        const { args, flags } = await this.parse(Get);
        let apiServerResult = [];
        let wellKnownKinds = Global_1.Global.WellKnownKinds;
        //let response = await ApplicationService.findApplications() as Application[];    
        //let test = CancelablePromise<Array<ApplicationInstall>>
        //const responseData = await ApplicationInstallApi.findApplicationInstalls().execute({ url: 'https://localhost:7878' }) //MyApi.myFunction().execute(destination);
        const name = (_a = flags.name) !== null && _a !== void 0 ? _a : 'world';
        let kind = args.kind;
        let isValid = wellKnownKinds.indexOf(kind) > -1;
        // Validate args kind is a well known kind
        if (!isValid) {
            this.warn(new Error(`Kind provided is not a well known Mango Kind: ${args.kind}`));
            //this.log(`Kind provided is not a well known Mango Kind: ${args.getArgs}`)
        }
        let uiTableColumns = {};
        //console.log('REsulots ', response, ' args ', args)
        // this.log(`hello ${name} testing ${response[0]} from /Users/johnhaigh/Projects/mango-platform/cli/space-cli/src/commands/get.ts`)
        // output in table
        if (kind) {
            switch (kind) {
                case "ShellType":
                    // only show active applications
                    // user can pass --all to show all
                    apiServerResult = await index_1.ShellTypeService.findShellTypes();
                    uiTableColumns = { id: { header: 'Identifer' }, classification: { header: 'Classification' }, subClassification: { header: 'Sub Classification' }, fileReference: { header: 'File Ref' }, description: { header: "Desc" } };
                    break;
                case "Application":
                    // only show active applications
                    // user can pass --all to show all
                    apiServerResult = await index_1.ApplicationService.findApplications();
                    uiTableColumns = { applicationName: { header: 'Name' }, applicationUrl: { header: 'Url' }, installedInstanceCode: { header: 'Instance Code' } };
                    break;
                case "ApplicationShell":
                    apiServerResult = await index_1.ApplicationShellService.findApplicationShells();
                    uiTableColumns = { applicationShellName: { header: 'Name' }, shellTypeId: { header: 'Shell Type Identifier' }, installedInstanceCode: { header: 'Instance Code' } };
                    break;
                case "Install":
                    apiServerResult = await index_1.InstallService.findApplicationInstalls();
                    uiTableColumns = { created: { header: 'Created' }, uri: { header: 'Uri' }, code: { header: 'Code' }, status: { header: 'Status' } };
                    break;
                case "Kind":
                    apiServerResult = await index_1.KindService.findKinds();
                    uiTableColumns = { name: { header: 'Name' }, description: { header: 'Description' } };
                    break;
                default:
                // code block
            }
            core_1.ux.table(apiServerResult, uiTableColumns);
            //console.log(response2)
            if (apiServerResult.length == 0) {
                this.log(`No entries`);
            }
        }
    }
}
exports.default = Get;
Get.enableJsonFlag = true;
Get.description = 'Display one or many resources';
// static examples = [
//   '<%= config.bin %> <%= command.id %>',
// ]
Get.examples = [
    `$ mango-cli get applications`,
];
Get.flags = {
    // flag with a value (-n, --name=VALUE)
    name: core_1.Flags.string({ char: 'n', description: 'kind to print' }),
    // flag with no value (-f, --force)
    force: core_1.Flags.boolean({ char: 'f' }),
    ...core_1.ux.table.flags()
};
Get.args = {
    kind: core_1.Args.string({ name: 'get', description: 'get' }),
};
