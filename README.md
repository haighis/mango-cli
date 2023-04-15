# Mango CLI

## Build

`npm run build`

## Running

`./bin/run`

## Publish
`npm publish`

## Generate Mango Api Server JS Client
- Run the Mango Api Server Java Application on port 7878
`npm run generate-client` will create the Mango Api Server JS Client at the location `src\test\client`
which allows you to view the JS Client Model and Services.
- Copy the Mango Api Server JS Client from `src\test\client` to its final resting place at `src\client`
- TODO move the Mango Api Server JS Client so some other sensible location

## Supplying Commands

`./bin/run get Application` 
`./bin/run create Application --file application.yaml`

# Step 1 - Register, Login, Define Contexts

`./bin/run create Context --file sample_yamls/context.yaml`

# Step 2 - Set Credentials for Contexts

## Supplying Flags
`./bin/run create Application --file application.yaml`

## Create Application Shell
`./bin/run create ApplicationShell -f sample_yamls/application_shell.yaml`
# TODO
- cli create application_shell command with code generation for angular using a basic foundation that is the default foundation in mango that allows an application shell to load a single application.
- cli create application_shell command with code generation for angular using a foundation_id that gets the foundation template
- enable mango configure to call setup Mango Api Server Java Application
## Mango Configure
### Login 
- use pupeteer to open a browser and ask the user to login

Global libraries
You can run npm list -g to see which global libraries are installed and where they're located. Use npm list -g | head -1 for truncated output showing just the path. If you want to display only main packages not its sub-packages which installs along with it - you can use - npm list --depth=0 which will show all packages and for getting only globally installed packages, just add -g i.e. npm list -g --depth=0.

On Unix systems they are normally placed in /usr/local/lib/node or /usr/local/lib/node_modules when installed globally. If you set the NODE_PATH environment variable to this path, the modules can be found by node.

Windows XP - %USERPROFILE%\AppData\npm\node_modules
Windows 7, 8 and 10 - %USERPROFILE%\AppData\Roaming\npm\node_modules

Non-global libraries
Non-global libraries are installed the node_modules sub folder in the folder you are currently in.

You can run npm list to see the installed non-global libraries for your current location.

When installing use -g option to install globally
npm install -g pm2 - pm2 will be installed globally. It will then typically be found in /usr/local/lib/node_modules (Use npm root -g to check where.)

npm install pm2 - pm2 will be installed locally. It will then typically be found in the local directory in /node_modules







<!-- toc -->
* [Mango CLI](#mango-cli)
* [TODO](#todo)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mango-platform-cli
$ mango-cli COMMAND
running command...
$ mango-cli (--version)
mango-platform-cli/0.0.3 darwin-x64 node-v16.13.0
$ mango-cli --help [COMMAND]
USAGE
  $ mango-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mango-cli configure [FILE]`](#mango-cli-configure-file)
* [`mango-cli create [KIND]`](#mango-cli-create-kind)
* [`mango-cli get [KIND]`](#mango-cli-get-kind)
* [`mango-cli hello PERSON`](#mango-cli-hello-person)
* [`mango-cli hello world`](#mango-cli-hello-world)
* [`mango-cli help [COMMANDS]`](#mango-cli-help-commands)
* [`mango-cli plugins`](#mango-cli-plugins)
* [`mango-cli plugins:install PLUGIN...`](#mango-cli-pluginsinstall-plugin)
* [`mango-cli plugins:inspect PLUGIN...`](#mango-cli-pluginsinspect-plugin)
* [`mango-cli plugins:install PLUGIN...`](#mango-cli-pluginsinstall-plugin-1)
* [`mango-cli plugins:link PLUGIN`](#mango-cli-pluginslink-plugin)
* [`mango-cli plugins:uninstall PLUGIN...`](#mango-cli-pluginsuninstall-plugin)
* [`mango-cli plugins:uninstall PLUGIN...`](#mango-cli-pluginsuninstall-plugin-1)
* [`mango-cli plugins:uninstall PLUGIN...`](#mango-cli-pluginsuninstall-plugin-2)
* [`mango-cli plugins update`](#mango-cli-plugins-update)

## `mango-cli configure [FILE]`

Configure Mango Platform Settings

```
USAGE
  $ mango-cli configure [FILE] [--setup]

ARGUMENTS
  FILE  file to read

FLAGS
  --setup  Mango System-Initial-Setup

DESCRIPTION
  Configure Mango Platform Settings

EXAMPLES
  $ mango-cli configure
```

_See code: [dist/commands/configure.ts](https://github.com/haighis/mango-cli/blob/v0.0.3/dist/commands/configure.ts)_

## `mango-cli create [KIND]`

Create a resource from a file or from stdin.

```
USAGE
  $ mango-cli create [KIND] [-f <value>]

ARGUMENTS
  KIND  create

FLAGS
  -f, --file=<value>  file to read

DESCRIPTION
  Create a resource from a file or from stdin.

EXAMPLES
  $ mango-cli create -f path/file.yaml
```

_See code: [dist/commands/create.ts](https://github.com/haighis/mango-cli/blob/v0.0.3/dist/commands/create.ts)_

## `mango-cli get [KIND]`

Display one or many resources

```
USAGE
  $ mango-cli get [KIND] [--json] [-n <value>] [-f] [--columns <value> | -x] [--sort <value>] [--filter
    <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

ARGUMENTS
  KIND  get

FLAGS
  -f, --force
  -n, --name=<value>  kind to print
  -x, --extended      show extra columns
  --columns=<value>   only show provided columns (comma-separated)
  --csv               output is csv format [alias: --output=csv]
  --filter=<value>    filter property by partial string matching, ex: name=foo
  --no-header         hide table header from output
  --no-truncate       do not truncate output to fit screen
  --output=<option>   output in a more machine friendly format
                      <options: csv|json|yaml>
  --sort=<value>      property to sort by (prepend '-' for descending)

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Display one or many resources

EXAMPLES
  $ mango-cli get applications
```

_See code: [dist/commands/get.ts](https://github.com/haighis/mango-cli/blob/v0.0.3/dist/commands/get.ts)_

## `mango-cli hello PERSON`

Say hello

```
USAGE
  $ mango-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/haighis/mango-cli/blob/v0.0.3/dist/commands/hello/index.ts)_

## `mango-cli hello world`

Say hello world

```
USAGE
  $ mango-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ mango-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

## `mango-cli help [COMMANDS]`

Display help for mango-cli.

```
USAGE
  $ mango-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mango-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.8/src/commands/help.ts)_

## `mango-cli plugins`

List installed plugins.

```
USAGE
  $ mango-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mango-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.3/src/commands/plugins/index.ts)_

## `mango-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mango-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ mango-cli plugins add

EXAMPLES
  $ mango-cli plugins:install myplugin 

  $ mango-cli plugins:install https://github.com/someuser/someplugin

  $ mango-cli plugins:install someuser/someplugin
```

## `mango-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mango-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ mango-cli plugins:inspect myplugin
```

## `mango-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mango-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ mango-cli plugins add

EXAMPLES
  $ mango-cli plugins:install myplugin 

  $ mango-cli plugins:install https://github.com/someuser/someplugin

  $ mango-cli plugins:install someuser/someplugin
```

## `mango-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ mango-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ mango-cli plugins:link myplugin
```

## `mango-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mango-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mango-cli plugins unlink
  $ mango-cli plugins remove
```

## `mango-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mango-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mango-cli plugins unlink
  $ mango-cli plugins remove
```

## `mango-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mango-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mango-cli plugins unlink
  $ mango-cli plugins remove
```

## `mango-cli plugins update`

Update installed plugins.

```
USAGE
  $ mango-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
