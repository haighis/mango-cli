import { Command } from '@oclif/core';
export default class Configure extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        setup: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
    };
    static args: {
        file: import("@oclif/core/lib/interfaces/parser").Arg<string | undefined, Record<string, unknown>>;
    };
    run(): Promise<void>;
}
