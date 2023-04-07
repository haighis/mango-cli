import { Command } from '@oclif/core';
export default class Get extends Command {
    static enableJsonFlag: boolean;
    static description: string;
    static examples: string[];
    static flags: {
        columns: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        sort: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        filter: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        csv: import("@oclif/core/lib/interfaces").Flag<boolean>;
        output: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        extended: import("@oclif/core/lib/interfaces").Flag<boolean>;
        'no-truncate': import("@oclif/core/lib/interfaces").Flag<boolean>;
        'no-header': import("@oclif/core/lib/interfaces").Flag<boolean>;
        name: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        force: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
    };
    static args: {
        kind: import("@oclif/core/lib/interfaces/parser").Arg<string | undefined, Record<string, unknown>>;
    };
    run(): Promise<void>;
}
