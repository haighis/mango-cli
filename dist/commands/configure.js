"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const index_1 = require("../client/index");
// System-Initial-Setup
// Context 
// Pre-requisites - user must be authenticated. todo 
class Configure extends core_1.Command {
    async run() {
        const { args, flags } = await this.parse(Configure);
        //const name = flags.name ?? 'world'
        //this.log(`hello ${name} from /Users/johnhaigh/Projects/mango-platform/cli/space-cli/src/commands/configure.ts`)
        // if (args.file) {
        //   this.log(`you input --force and --file: ${args.file}`)
        // }
        if (flags.setup) {
            let apiServerResult = await index_1.SetupService.postSetup({ name: "", kind: "", namespace: "" });
            this.log(`Ran Mango Platform ${apiServerResult.name} `);
        }
    }
}
exports.default = Configure;
Configure.description = 'Configure Mango Platform Settings';
Configure.examples = [
    '<%= config.bin %> <%= command.id %>',
];
Configure.flags = {
    // flag with a value (-n, --name=VALUE)
    setup: core_1.Flags.boolean({ description: 'Mango System-Initial-Setup' }),
    // flag with no value (-f, --force)
    //force: Flags.boolean({char: 'f'}),
};
Configure.args = {
    file: core_1.Args.string({ description: 'file to read' }),
};
