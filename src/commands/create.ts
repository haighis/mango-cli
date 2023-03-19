import {Args, Command, Flags} from '@oclif/core'
import * as yaml from 'js-yaml'
import * as fs from 'fs'

//const yaml = require('js-yaml');

export default class Create extends Command {
  static description = 'Create a resource from a file or from stdin.'

  static examples = [
    '<%= config.bin %> <%= command.id %> -f path/file.yaml',
  ]

  static flags = {
    // flag with a value (-n, --file=VALUE)
    file: Flags.string({char: 'f', description: 'file to read'}),
    // flag with no value (-f, --force)
    //force: Flags.boolean({char: 'f'}),
  }

  // static args = {
  //   file: Args.string({description: 'file to read'}),
  // }

  static args = {
    kind: Args.string({ name: 'create', description: 'create'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Create)

    // let wellKnownKinds = ['kind','application','application_shell','item','artifact','application_install','backpack','software_catalog','software_group']
    // let isValid = wellKnownKinds.indexOf(args.kind!) > -1;
    
    // // Validate args kind is a well known kind
    // if(!isValid) {
    //   this.warn(new Error(`Kind provided is not a well known Mango Kind: ${args.kind}`))
    //   //this.log(`Kind provided is not a well known Mango Kind: ${args.getArgs}`)
    // }

  const doc = yaml.loadAll(fs.readFileSync(`${flags.file}`, 'utf8')) as any[];
  // Process one or more kinds in array
  console.log(doc);

  /// Application Shell - default no foundation id
  // generate installed instance code,
  // grab application shell from artifact? 
  // scaffold code for angular
  // extract code from zip file to current directory
  // set installed instance code in code
  

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
}
