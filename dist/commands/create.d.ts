import { Command } from '@oclif/core';
import { ApplicationShell } from '../client';
export default class Create extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        file: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
    };
    static args: {
        kind: import("@oclif/core/lib/interfaces/parser").Arg<string | undefined, Record<string, unknown>>;
    };
    run(): Promise<void>;
    CreateApplicationShell(appShell: ApplicationShell[]): Promise<void>;
    downloadFile(url: string): void;
}
