import Context, { ContextInput } from "./db/models/Context";

export class Global {
    public static WellKnownKinds: string[] = ['Account','Credential','Context','Kind','Application','ShellType','ApplicationShell','Item','Artifact','Install','Backpack','SoftwareCatalog','SoftwareGroup'];
    public static requireLetterAndNumber = (value: any) => {
        if (/\w/.test(value) && /\d/.test(value)) {
          return true;
        }
        return 'Password need to have at least a letter and a number';
    };
}