# Mango CLI

## Build

`npm run build`

## Running

`./bin/run`

## Generate Mango Api Server JS Client
- Run the Mango Api Server Java Application on port 7878
`npm run generate-client` will create the Mango Api Server JS Client at the location `src\test\client`
which allows you to view the JS Client Model and Services.
- Copy the Mango Api Server JS Client from `src\test\client` to its final resting place at `src\client`
- TODO move the Mango Api Server JS Client so some other sensible location

## Supplying Commands

`./bin/run get Application` 
`./bin/run create Application --file application.yaml`

## Supplying Flags
`./bin/run create Application --file application.yaml`

## Create Application Shell
./bin/run create ApplicationShell -f sample_yamls/application_shell.yaml

# TODO
- cli create application_shell command with code generation for angular using a basic foundation that is the default foundation in mango that allows an application shell to load a single application.
- cli create application_shell command with code generation for angular using a foundation_id that gets the foundation template
- move mango api server js client to its own github source code repo in a new js project
- enable yaml to json for apply/create command in mango cli
- enable mango configure to call setup Mango Api Server Java Application
## Mango Configure
### Login 
- use pupeteer to open a browser and ask the user to login

<!-- toc -->
* [Mango CLI](#mango-cli)
* [TODO](#todo)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mango-cli
$ mongo-cli COMMAND
running command...
$ mongo-cli (--version)
mango-cli/0.0.0 darwin-x64 node-v16.13.0
$ mongo-cli --help [COMMAND]
USAGE
  $ mongo-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mongo-cli configure [FILE]`](#mongo-cli-configure-file)
* [`mongo-cli create [KIND]`](#mongo-cli-create-kind)
* [`mongo-cli get [KIND]`](#mongo-cli-get-kind)
* [`mongo-cli hello PERSON`](#mongo-cli-hello-person)
* [`mongo-cli hello world`](#mongo-cli-hello-world)
* [`mongo-cli help [COMMANDS]`](#mongo-cli-help-commands)
* [`mongo-cli plugins`](#mongo-cli-plugins)
* [`mongo-cli plugins:install PLUGIN...`](#mongo-cli-pluginsinstall-plugin)
* [`mongo-cli plugins:inspect PLUGIN...`](#mongo-cli-pluginsinspect-plugin)
* [`mongo-cli plugins:install PLUGIN...`](#mongo-cli-pluginsinstall-plugin-1)
* [`mongo-cli plugins:link PLUGIN`](#mongo-cli-pluginslink-plugin)
* [`mongo-cli plugins:uninstall PLUGIN...`](#mongo-cli-pluginsuninstall-plugin)
* [`mongo-cli plugins:uninstall PLUGIN...`](#mongo-cli-pluginsuninstall-plugin-1)
* [`mongo-cli plugins:uninstall PLUGIN...`](#mongo-cli-pluginsuninstall-plugin-2)
* [`mongo-cli plugins update`](#mongo-cli-plugins-update)

## `mongo-cli configure [FILE]`

Configure Mango Platform Settings

```
USAGE
  $ mongo-cli configure [FILE] [--setup]

ARGUMENTS
  FILE  file to read

FLAGS
  --setup  Mango System-Initial-Setup

DESCRIPTION
  Configure Mango Platform Settings

EXAMPLES
  $ mongo-cli configure
```

_See code: [dist/commands/configure.ts](https://github.com/haighis/mango-cli/blob/v0.0.0/dist/commands/configure.ts)_

## `mongo-cli create [KIND]`

Create a resource from a file or from stdin.

```
USAGE
  $ mongo-cli create [KIND] [-f <value>]

ARGUMENTS
  KIND  create

FLAGS
  -f, --file=<value>  file to read

DESCRIPTION
  Create a resource from a file or from stdin.

EXAMPLES
  $ mongo-cli create -f path/file.yaml
```

_See code: [dist/commands/create.ts](https://github.com/haighis/mango-cli/blob/v0.0.0/dist/commands/create.ts)_

## `mongo-cli get [KIND]`

Display one or many resources

```
USAGE
  $ mongo-cli get [KIND] [--json] [-n <value>] [-f] [--columns <value> | -x] [--sort <value>] [--filter
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
  $ mongo get applications
```

_See code: [dist/commands/get.ts](https://github.com/haighis/mango-cli/blob/v0.0.0/dist/commands/get.ts)_

## `mongo-cli hello PERSON`

Say hello

```
USAGE
  $ mongo-cli hello PERSON -f <value>

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

_See code: [dist/commands/hello/index.ts](https://github.com/haighis/mango-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `mongo-cli hello world`

Say hello world

```
USAGE
  $ mongo-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ mongo-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

## `mongo-cli help [COMMANDS]`

Display help for mongo-cli.

```
USAGE
  $ mongo-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mongo-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.8/src/commands/help.ts)_

## `mongo-cli plugins`

List installed plugins.

```
USAGE
  $ mongo-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mongo-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.3/src/commands/plugins/index.ts)_

## `mongo-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mongo-cli plugins:install PLUGIN...

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
  $ mongo-cli plugins add

EXAMPLES
  $ mongo-cli plugins:install myplugin 

  $ mongo-cli plugins:install https://github.com/someuser/someplugin

  $ mongo-cli plugins:install someuser/someplugin
```

## `mongo-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mongo-cli plugins:inspect PLUGIN...

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
  $ mongo-cli plugins:inspect myplugin
```

## `mongo-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mongo-cli plugins:install PLUGIN...

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
  $ mongo-cli plugins add

EXAMPLES
  $ mongo-cli plugins:install myplugin 

  $ mongo-cli plugins:install https://github.com/someuser/someplugin

  $ mongo-cli plugins:install someuser/someplugin
```

## `mongo-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ mongo-cli plugins:link PLUGIN

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
  $ mongo-cli plugins:link myplugin
```

## `mongo-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mongo-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mongo-cli plugins unlink
  $ mongo-cli plugins remove
```

## `mongo-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mongo-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mongo-cli plugins unlink
  $ mongo-cli plugins remove
```

## `mongo-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mongo-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mongo-cli plugins unlink
  $ mongo-cli plugins remove
```

## `mongo-cli plugins update`

Update installed plugins.

```
USAGE
  $ mongo-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
