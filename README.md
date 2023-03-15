oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mongo-cli
$ mongo-cli COMMAND
running command...
$ mongo-cli (--version)
mongo-cli/0.0.0 darwin-x64 node-v16.13.0
$ mongo-cli --help [COMMAND]
USAGE
  $ mongo-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
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

_See code: [dist/commands/hello/index.ts](https://github.com/haighis/mongo-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.7/src/commands/help.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.0/src/commands/plugins/index.ts)_

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
