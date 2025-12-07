# Composer

Composer is a dependency manager for PHP that makes it possible to define third-party code packages used by a project that can then be easily installed and updated. It leverages the built-in class autoloading features of PHP, repositories of PHP packages such as » Packagist, and common project layout and coding conventions.
Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.

`Dependency management`:- Composer is not a package manager as Yum or Apt are.It manages them on a per-project basis, installing them in a directory (e.g. vendor) inside your project. By default, it does not install anything globally. Thus, it is a dependency manager. It does however support a "global" project for convenience via the global command.
This idea is not new and Composer is strongly inspired by node's npm and ruby's bundler.
Composer:

1. Enables you to declare the libraries you depend on.
2. Finds out which versions of which packages can and need to be installed, and installs them (meaning it downloads them into your project).
3. You can update all your dependencies in one command.

`System Requirements`

Composer in its latest version requires PHP 7.2.5 to run. A long-term-support version (2.2.x) still offers support for PHP 5.3.2+ in case you are stuck with a legacy PHP version. A few sensitive php settings and compile flags are also required, but when using the installer you will be warned about any incompatibilities.

To use Composer in your project, all you need is a composer.json file. This file describes the dependencies of your project and may contain other metadata as well. It typically should go in the top-most directory of your project/VCS repository. You can technically run Composer anywhere but if you want to publish a package to Packagist.org, it will have to be able to find the file at the top of your VCS repository.

## Install Dependencies

To initially install the defined dependencies for your project, you should run the update command.

```sh
php composer.phar update
```

This will make Composer do two things:

- It resolves all dependencies listed in your composer.json file and writes all of the packages and their exact versions to the composer.lock file, locking the project to those specific versions. You should commit the composer.lock file to your project repo so that all people working on the project are locked to the same versions of dependencies (more below). This is the main role of the update command.
- It then implicitly runs the install command. This will download the dependencies' files into the vendor directory in your project. (The vendor directory is the conventional location for all third-party code in a project). In our example from above, you would end up with the Monolog source files in vendor/monolog/monolog/. As Monolog has a dependency on psr/log, that package's files can also be found inside vendor/.

Installing from composer.lock- If there is already a composer.lock file in the project folder, it means either you ran the update command before, or someone else on the project ran the update command and committed the composer.lock file to the project (which is good).

Either way, running install when a composer.lock file is present resolves and installs all dependencies that you listed in composer.json, but Composer uses the exact versions listed in composer.lock to ensure that the package versions are consistent for everyone working on your project. As a result you will have all dependencies requested by your composer.json file, but they may not all be at the very latest available versions (some of the dependencies listed in the composer.lock file may have released newer versions since the file was created). This is by design, ensuring that your project does not break because of unexpected changes in dependencies.

So after fetching new changes from your VCS repository it is recommended to run a Composer install to make sure the vendor directory is up in sync with your composer.lock file.

``` bash
php composer.phar install
```

## Command-line interface / Commands

To get help from the command-line, call composer or composer list to see the complete list of commands, then --help combined with any of those can give you more information.

As Composer uses symfony/console you can call commands by short name if it's not ambiguous.

php composer.phar dump

calls composer dump-autoload.
Bash Completions#

To install bash completions you can run composer completion bash > completion.bash. This will create a completion.bash file in the current directory.

Then execute source completion.bash to enable it in the current terminal session.

Move and rename the completion.bash file to /etc/bash_completion.d/composer to make it load automatically in new terminals.
Global Options#

The following options are available with every command:

    --verbose (-v): Increase verbosity of messages.
    --help (-h): Display help information.
    --quiet (-q): Do not output any message.
    --no-interaction (-n): Do not ask any interactive question.
    --no-plugins: Disables plugins.
    --no-scripts: Skips execution of scripts defined in composer.json.
    --no-cache: Disables the use of the cache directory. Same as setting the COMPOSER_CACHE_DIR env var to /dev/null (or NUL on Windows).
    --working-dir (-d): If specified, use the given directory as working directory.
    --profile: Display timing and memory usage information
    --ansi: Force ANSI output.
    --no-ansi: Disable ANSI output.
    --version (-V): Display this application version.

Process Exit Codes#

    0: OK
    1: Generic/unknown error code
    2: Dependency solving error code

init#

In the Libraries chapter we looked at how to create a composer.json by hand. There is also an init command available to do this.

When you run the command it will interactively ask you to fill in the fields, while using some smart defaults.

php composer.phar init

Options

    --name: Name of the package.
    --description: Description of the package.
    --author: Author name of the package.
    --type: Type of package.
    --homepage: Homepage of the package.
    --require: Package to require with a version constraint. Should be in format foo/bar:1.0.0.
    --require-dev: Development requirements, see --require.
    --stability (-s): Value for the minimum-stability field.
    --license (-l): License of package.
    --repository: Provide one (or more) custom repositories. They will be stored in the generated composer.json, and used for auto-completion when prompting for the list of requires. Every repository can be either an HTTP URL pointing to a composer repository or a JSON string which is similar to what the repositories key accepts.
    --autoload (-a): Add a PSR-4 autoload mapping to the composer.json. Automatically maps your package's namespace to the provided directory. (Expects a relative path, e.g. src/) See also PSR-4 autoload.

install / i#

The install command reads the composer.json file from the current directory, resolves the dependencies, and installs them into vendor.

php composer.phar install

If there is a composer.lock file in the current directory, it will use the exact versions from there instead of resolving them. This ensures that everyone using the library will get the same versions of the dependencies.

If there is no composer.lock file, Composer will create one after dependency resolution.
Options

    --prefer-install: There are two ways of downloading a package: source and dist. Composer uses dist by default. If you pass --prefer-install=source (or --prefer-source) Composer will install from source if there is one. This is useful if you want to make a bugfix to a project and get a local git clone of the dependency directly. To get the legacy behavior where Composer use source automatically for dev versions of packages, use --prefer-install=auto. See also config.preferred-install. Passing this flag will override the config value.
    --dry-run: If you want to run through an installation without actually installing a package, you can use --dry-run. This will simulate the installation and show you what would happen.
    --download-only: Download only, do not install packages.
    --dev: Install packages listed in require-dev (this is the default behavior).
    --no-dev: Skip installing packages listed in require-dev. The autoloader generation skips the autoload-dev rules. Also see COMPOSER_NO_DEV.
    --no-autoloader: Skips autoloader generation.
    --no-progress: Removes the progress display that can mess with some terminals or scripts which don't handle backspace characters.
    --audit: Run an audit after installation is complete.
    --audit-format: Audit output format. Must be "table", "plain", "json", or "summary" (default).
    --optimize-autoloader (-o): Convert PSR-0/4 autoloading to classmap to get a faster autoloader. This is recommended especially for production, but can take a bit of time to run so it is currently not done by default.
    --classmap-authoritative (-a): Autoload classes from the classmap only. Implicitly enables --optimize-autoloader.
    --apcu-autoloader: Use APCu to cache found/not-found classes.
    --apcu-autoloader-prefix: Use a custom prefix for the APCu autoloader cache. Implicitly enables --apcu-autoloader.
    --ignore-platform-reqs: ignore all platform requirements (php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill these. See also the platform config option.
    --ignore-platform-req: ignore a specific platform requirement(php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill it. Multiple requirements can be ignored via wildcard. Appending a + makes it only ignore the upper-bound of the requirements. For example, if a package requires php: ^7, then the option --ignore-platform-req=php+ would allow installing on PHP 8, but installation on PHP 5.6 would still fail.

update / u / upgrade#

In order to get the latest versions of the dependencies and to update the composer.lock file, you should use the update command. This command is also aliased as upgrade as it does the same as upgrade does if you are thinking of apt-get or similar package managers.

php composer.phar update

This will resolve all dependencies of the project and write the exact versions into composer.lock.

If you only want to update a few packages and not all, you can list them as such:

php composer.phar update vendor/package vendor/package2

You can also use wildcards to update a bunch of packages at once:

php composer.phar update "vendor/*"

If you want to downgrade a package to a specific version without changing your composer.json you can use --with and provide a custom version constraint:

php composer.phar update --with vendor/package:2.0.1

Note that with the above all packages will be updated. If you only want to update the package(s) for which you provide custom constraints using --with, you can skip --with and instead use constraints with the partial update syntax:

php composer.phar update vendor/package:2.0.1 vendor/package2:3.0.*

    Note: For packages also required in your composer.json the custom constraint must be a subset of the existing constraint. The composer.json constraints still apply and the composer.json is not modified by these temporary update constraints.

Options

    --prefer-install: There are two ways of downloading a package: source and dist. Composer uses dist by default. If you pass --prefer-install=source (or --prefer-source) Composer will install from source if there is one. This is useful if you want to make a bugfix to a project and get a local git clone of the dependency directly. To get the legacy behavior where Composer use source automatically for dev versions of packages, use --prefer-install=auto. See also config.preferred-install. Passing this flag will override the config value.
    --dry-run: Simulate the command without actually doing anything.
    --dev: Install packages listed in require-dev (this is the default behavior).
    --no-dev: Skip installing packages listed in require-dev. The autoloader generation skips the autoload-dev rules. Also see COMPOSER_NO_DEV.
    --no-install: Does not run the install step after updating the composer.lock file.
    --no-audit: Does not run the audit steps after updating the composer.lock file. Also see COMPOSER_NO_AUDIT.
    --audit-format: Audit output format. Must be "table", "plain", "json", or "summary" (default).
    --lock: Overwrites the lock file hash to suppress warning about the lock file being out of date without updating package versions. Package metadata like mirrors and URLs are updated if they changed.
    --with: Temporary version constraint to add, e.g. foo/bar:1.0.0 or foo/bar=1.0.0
    --no-autoloader: Skips autoloader generation.
    --no-progress: Removes the progress display that can mess with some terminals or scripts which don't handle backspace characters.
    --with-dependencies (-w): Update also dependencies of packages in the argument list, except those which are root requirements.
    --with-all-dependencies (-W): Update also dependencies of packages in the argument list, including those which are root requirements.
    --optimize-autoloader (-o): Convert PSR-0/4 autoloading to classmap to get a faster autoloader. This is recommended especially for production, but can take a bit of time to run, so it is currently not done by default.
    --classmap-authoritative (-a): Autoload classes from the classmap only. Implicitly enables --optimize-autoloader.
    --apcu-autoloader: Use APCu to cache found/not-found classes.
    --apcu-autoloader-prefix: Use a custom prefix for the APCu autoloader cache. Implicitly enables --apcu-autoloader.
    --ignore-platform-reqs: ignore all platform requirements (php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill these. See also the platform config option.
    --ignore-platform-req: ignore a specific platform requirement(php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill it. Multiple requirements can be ignored via wildcard. Appending a + makes it only ignore the upper-bound of the requirements. For example, if a package requires php: ^7, then the option --ignore-platform-req=php+ would allow installing on PHP 8, but installation on PHP 5.6 would still fail.
    --prefer-stable: Prefer stable versions of dependencies. Can also be set via the COMPOSER_PREFER_STABLE=1 env var.
    --prefer-lowest: Prefer lowest versions of dependencies. Useful for testing minimal versions of requirements, generally used with --prefer-stable. Can also be set via the COMPOSER_PREFER_LOWEST=1 env var.
    --minimal-changes (-m): During a partial update with -w/-W, only perform absolutely necessary changes to transitive dependencies. Can also be set via the COMPOSER_MINIMAL_CHANGES=1 env var.
    --patch-only: Only allow patch version updates for currently installed dependencies.
    --interactive: Interactive interface with autocompletion to select the packages to update.
    --root-reqs: Restricts the update to your first degree dependencies.
    --bump-after-update: Runs bump after performing the update. Set to dev or no-dev to only bump those dependencies.

Specifying one of the words mirrors, lock, or nothing as an argument has the same effect as specifying the option --lock, for example composer update mirrors is exactly the same as composer update --lock.
require / r#

The require command adds new packages to the composer.json file from the current directory. If no file exists one will be created on the fly.

If you do not specify a package, Composer will prompt you to search for a package, and given results, provide a list of matches to require.

php composer.phar require

After adding/changing the requirements, the modified requirements will be installed or updated.

If you do not want to choose requirements interactively, you can pass them to the command.

php composer.phar require "vendor/package:2.*" vendor/package2:dev-master

If you do not specify a version constraint, composer will choose a suitable one based on the available package versions.

php composer.phar require vendor/package vendor/package2

If you do not want to install the new dependencies immediately you can call it with --no-update
Options

    --dev: Add packages to require-dev.
    --dry-run: Simulate the command without actually doing anything.
    --prefer-install: There are two ways of downloading a package: source and dist. Composer uses dist by default. If you pass --prefer-install=source (or --prefer-source) Composer will install from source if there is one. This is useful if you want to make a bugfix to a project and get a local git clone of the dependency directly. To get the legacy behavior where Composer use source automatically for dev versions of packages, use --prefer-install=auto. See also config.preferred-install. Passing this flag will override the config value.
    --no-progress: Removes the progress display that can mess with some terminals or scripts which don't handle backspace characters.
    --no-update: Disables the automatic update of the dependencies (implies --no-install).
    --no-install: Does not run the install step after updating the composer.lock file.
    --no-audit: Does not run the audit steps after updating the composer.lock file. Also see COMPOSER_NO_AUDIT.
    --audit-format: Audit output format. Must be "table", "plain", "json", or "summary" (default).
    --update-no-dev: Run the dependency update with the --no-dev option. Also see COMPOSER_NO_DEV.
    --update-with-dependencies (-w): Also update dependencies of the newly required packages, except those that are root requirements.
    --update-with-all-dependencies (-W): Also update dependencies of the newly required packages, including those that are root requirements.
    --ignore-platform-reqs: ignore all platform requirements (php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill these. See also the platform config option.
    --ignore-platform-req: ignore a specific platform requirement(php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill it. Multiple requirements can be ignored via wildcard.
    --prefer-stable: Prefer stable versions of dependencies. Can also be set via the COMPOSER_PREFER_STABLE=1 env var.
    --prefer-lowest: Prefer lowest versions of dependencies. Useful for testing minimal versions of requirements, generally used with --prefer-stable. Can also be set via the COMPOSER_PREFER_LOWEST=1 env var.
    --minimal-changes (-m): During an update with -w/-W, only perform absolutely necessary changes to transitive dependencies. Can also be set via the COMPOSER_MINIMAL_CHANGES=1 env var.
    --sort-packages: Keep packages sorted in composer.json.
    --optimize-autoloader (-o): Convert PSR-0/4 autoloading to classmap to get a faster autoloader. This is recommended especially for production, but can take a bit of time to run, so it is currently not done by default.
    --classmap-authoritative (-a): Autoload classes from the classmap only. Implicitly enables --optimize-autoloader.
    --apcu-autoloader: Use APCu to cache found/not-found classes.
    --apcu-autoloader-prefix: Use a custom prefix for the APCu autoloader cache. Implicitly enables --apcu-autoloader.

remove / rm / uninstall#

The remove command removes packages from the composer.json file from the current directory.

php composer.phar remove vendor/package vendor/package2

After removing the requirements, the modified requirements will be uninstalled.
Options

    --unused Remove unused packages that are not a direct or indirect dependency (anymore)
    --dev: Remove packages from require-dev.
    --dry-run: Simulate the command without actually doing anything.
    --no-progress: Removes the progress display that can mess with some terminals or scripts which don't handle backspace characters.
    --no-update: Disables the automatic update of the dependencies (implies --no-install).
    --no-install: Does not run the install step after updating the composer.lock file.
    --no-audit: Does not run the audit steps after installation is complete. Also see COMPOSER_NO_AUDIT.
    --audit-format: Audit output format. Must be "table", "plain", "json", or "summary" (default).
    --update-no-dev: Run the dependency update with the --no-dev option. Also see COMPOSER_NO_DEV.
    --update-with-dependencies (-w): Also update dependencies of the removed packages. (Deprecated, is now default behavior)
    --update-with-all-dependencies (-W): Allows all inherited dependencies to be updated, including those that are root requirements.
    --minimal-changes (-m): During an update with -w/-W, only perform absolutely necessary changes to transitive dependencies. Can also be set via the COMPOSER_MINIMAL_CHANGES=1 env var.
    --ignore-platform-reqs: ignore all platform requirements (php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill these. See also the platform config option.
    --ignore-platform-req: ignore a specific platform requirement(php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill it. Multiple requirements can be ignored via wildcard.
    --optimize-autoloader (-o): Convert PSR-0/4 autoloading to classmap to get a faster autoloader. This is recommended especially for production, but can take a bit of time to run so it is currently not done by default.
    --classmap-authoritative (-a): Autoload classes from the classmap only. Implicitly enables --optimize-autoloader.
    --apcu-autoloader: Use APCu to cache found/not-found classes.
    --apcu-autoloader-prefix: Use a custom prefix for the APCu autoloader cache. Implicitly enables --apcu-autoloader.

bump#

The bump command increases the lower limit of your composer.json requirements to the currently installed versions. This helps to ensure your dependencies do not accidentally get downgraded due to some other conflict, and can slightly improve dependency resolution performance as it limits the amount of package versions Composer has to look at.

Running this blindly on libraries is NOT recommended as it will narrow down your allowed dependencies, which may cause dependency hell for your users. Running it with --dev-only on libraries may be fine however as dev requirements are local to the library and do not affect consumers of the package.
Options

    --dev-only: Only bump requirements in "require-dev".
    --no-dev-only: Only bump requirements in "require".
    --dry-run: Outputs the packages to bump, but will not execute anything.

reinstall#

The reinstall command looks up installed packages by name, uninstalls them and reinstalls them. This lets you do a clean install of a package if you messed with its files, or if you wish to change the installation type using --prefer-install.

php composer.phar reinstall acme/foo acme/bar

You can specify more than one package name to reinstall, or use a wildcard to select several packages at once:

php composer.phar reinstall "acme/*"

Options

    --prefer-install: There are two ways of downloading a package: source and dist. Composer uses dist by default. If you pass --prefer-install=source (or --prefer-source) Composer will install from source if there is one. This is useful if you want to make a bugfix to a project and get a local git clone of the dependency directly. To get the legacy behavior where Composer use source automatically for dev versions of packages, use --prefer-install=auto. See also config.preferred-install. Passing this flag will override the config value.
    --no-autoloader: Skips autoloader generation.
    --no-progress: Removes the progress display that can mess with some terminals or scripts which don't handle backspace characters.
    --optimize-autoloader (-o): Convert PSR-0/4 autoloading to classmap to get a faster autoloader. This is recommended especially for production, but can take a bit of time to run so it is currently not done by default.
    --classmap-authoritative (-a): Autoload classes from the classmap only. Implicitly enables --optimize-autoloader.
    --apcu-autoloader: Use APCu to cache found/not-found classes.
    --apcu-autoloader-prefix: Use a custom prefix for the APCu autoloader cache. Implicitly enables --apcu-autoloader.
    --ignore-platform-reqs: ignore all platform requirements. This only has an effect in the context of the autoloader generation for the reinstall command.
    --ignore-platform-req: ignore a specific platform requirement. This only has an effect in the context of the autoloader generation for the reinstall command. Multiple requirements can be ignored via wildcard.

check-platform-reqs#

The check-platform-reqs command checks that your PHP and extensions versions match the platform requirements of the installed packages. This can be used to verify that a production server has all the extensions needed to run a project after installing it for example.

Unlike update/install, this command will ignore config.platform settings and check the real platform packages so you can be certain you have the required platform dependencies.
Options

    --lock: Checks requirements only from the lock file, not from installed packages.
    --no-dev: Disables checking of require-dev packages requirements.
    --format (-f): Format of the output: text (default) or json

global#

The global command allows you to run other commands like install, remove, require or update as if you were running them from the COMPOSER_HOME directory.

This is merely a helper to manage a project stored in a central location that can hold CLI tools or Composer plugins that you want to have available everywhere.

This can be used to install CLI utilities globally. Here is an example:

php composer.phar global require friendsofphp/php-cs-fixer

Now the php-cs-fixer binary is available globally. Make sure your global vendor binaries directory is in your $PATH environment variable, you can get its location with the following command :

php composer.phar global config bin-dir --absolute

If you wish to update the binary later on you can run a global update:

php composer.phar global update

search#

The search command allows you to search through the current project's package repositories. Usually this will be packagist. You pass it the terms you want to search for.

php composer.phar search monolog

You can also search for more than one term by passing multiple arguments.
Options

    --only-name (-N): Search only in package names.
    --only-vendor (-O): Search only for vendor / organization names, returns only "vendor" as a result.
    --type (-t): Search for a specific package type.
    --format (-f): Lets you pick between text (default) or json output format. Note that in the json, only the name and description keys are guaranteed to be present. The rest (url, repository, downloads and favers) are available for Packagist.org search results and other repositories may return more or less data.

show / info#

To list all of the available packages, you can use the show command.

php composer.phar show

To filter the list you can pass a package mask using wildcards.

php composer.phar show "monolog/*"

monolog/monolog 2.4.0 Sends your logs to files, sockets, inboxes, databases and various web services

If you want to see the details of a certain package, you can pass the package name.

php composer.phar show monolog/monolog

name     : monolog/monolog
descrip. : Sends your logs to files, sockets, inboxes, databases and various web services
keywords : log, logging, psr-3
versions : * 1.27.1
type     : library
license  : MIT License (MIT) (OSI approved) https://spdx.org/licenses/MIT.html#licenseText
homepage : http://github.com/Seldaek/monolog
source   : [git] https://github.com/Seldaek/monolog.git 904713c5929655dc9b97288b69cfeedad610c9a1
dist     : [zip] https://api.github.com/repos/Seldaek/monolog/zipball/904713c5929655dc9b97288b69cfeedad610c9a1 904713c5929655dc9b97288b69cfeedad610c9a1
names    : monolog/monolog, psr/log-implementation

support
issues : https://github.com/Seldaek/monolog/issues
source : https://github.com/Seldaek/monolog/tree/1.27.1

autoload
psr-4
Monolog\ => src/Monolog

requires
php >=5.3.0
psr/log ~1.0

You can even pass the package version, which will tell you the details of that specific version.

php composer.phar show monolog/monolog 1.0.2

Options

    --all: List all packages available in all your repositories.
    --installed (-i): List the packages that are installed (this is enabled by default, and deprecated).
    --locked: List the locked packages from composer.lock.
    --platform (-p): List only platform packages (php & extensions).
    --available (-a): List available packages only.
    --self (-s): List the root package info.
    --name-only (-N): List package names only.
    --path (-P): List package paths.
    --tree (-t): List your dependencies as a tree. If you pass a package name it will show the dependency tree for that package.
    --latest (-l): List all installed packages including their latest version.
    --outdated (-o): Implies --latest, but this lists only packages that have a newer version available.
    --ignore: Ignore specified package(s). Can contain wildcards (*). Use it with the --outdated option if you don't want to be informed about new versions of some packages
    --no-dev: Filters dev dependencies from the package list.
    --major-only (-M): Use with --latest or --outdated. Only shows packages that have major SemVer-compatible updates.
    --minor-only (-m): Use with --latest or --outdated. Only shows packages that have minor SemVer-compatible updates.
    --patch-only: Use with --latest or --outdated. Only shows packages that have patch-level SemVer-compatible updates.
    --sort-by-age (-A): Displays the installed version's age, and sorts packages oldest first. Use with the --latest or --outdated option.
    --direct (-D): Restricts the list of packages to your direct dependencies.
    --strict: Return a non-zero exit code when there are outdated packages.
    --format (-f): Lets you pick between text (default) or json output format.
    --ignore-platform-reqs: ignore all platform requirements (php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill these. Use with the --outdated option.
    --ignore-platform-req: ignore a specific platform requirement(php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill it. Multiple requirements can be ignored via wildcard. Use with the --outdated option.

outdated#

The outdated command shows a list of installed packages that have updates available, including their current and latest versions. This is basically an alias for composer show -lo.

The color coding is as such:

    green (=): Dependency is in the latest version and is up to date.
    yellow (~): Dependency has a new version available that includes backwards compatibility breaks according to semver, so upgrade when you can but it may involve work.
    red (!): Dependency has a new version that is semver-compatible and you should upgrade it.

Options

    --all (-a): Show all packages, not just outdated (alias for composer show --latest).
    --direct (-D): Restricts the list of packages to your direct dependencies.
    --strict: Returns non-zero exit code if any package is outdated.
    --ignore: Ignore specified package(s). Can contain wildcards (*). Use it if you don't want to be informed about new versions of some packages
    --major-only (-M): Only shows packages that have major SemVer-compatible updates.
    --minor-only (-m): Only shows packages that have minor SemVer-compatible updates.
    --patch-only (-p): Only shows packages that have patch-level SemVer-compatible updates.
    --sort-by-age (-A): Displays the installed version's age, and sorts packages oldest first.
    --format (-f): Lets you pick between text (default) or json output format.
    --no-dev: Do not show outdated dev dependencies.
    --locked: Shows updates for packages from the lock file, regardless of what is currently in vendor dir.
    --ignore-platform-reqs: ignore all platform requirements (php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill these.
    --ignore-platform-req: ignore a specific platform requirement(php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill it. Multiple requirements can be ignored via wildcard.

browse / home#

The browse (aliased to home) opens a package's repository URL or homepage in your browser.
Options

    --homepage (-H): Open the homepage instead of the repository URL.
    --show (-s): Only show the homepage or repository URL.

suggests#

Lists all packages suggested by the currently installed set of packages. You can optionally pass one or multiple package names in the format of vendor/package to limit output to suggestions made by those packages only.

Use the --by-package (default) or --by-suggestion flags to group the output by the package offering the suggestions or the suggested packages respectively.

If you only want a list of suggested package names, use --list.
Options

    --by-package: Groups output by suggesting package (default).
    --by-suggestion: Groups output by suggested package.
    --all: Show suggestions from all dependencies, including transitive ones (by default only direct dependencies' suggestions are shown).
    --list: Show only list of suggested package names.
    --no-dev: Excludes suggestions from require-dev packages.

fund#

Discover how to help fund the maintenance of your dependencies. This lists all funding links from the installed dependencies. Use --format=json to get machine-readable output.
Options

    --format (-f): Lets you pick between text (default) or json output format.

depends / why#

The depends command tells you which other packages depend on a certain package. As with installation require-dev relationships are only considered for the root package.

php composer.phar depends doctrine/lexer

doctrine/annotations  1.13.3 requires doctrine/lexer (1.*)
doctrine/common       2.13.3 requires doctrine/lexer (^1.0)

You can optionally specify a version constraint after the package to limit the search.

Add the --tree or -t flag to show a recursive tree of why the package is depended upon, for example:

php composer.phar depends psr/log -t

psr/log 1.1.4 Common interface for logging libraries
├──composer/composer 2.4.x-dev (requires psr/log ^1.0 || ^2.0 || ^3.0)
├──composer/composer dev-main (requires psr/log ^1.0 || ^2.0 || ^3.0)
├──composer/xdebug-handler 3.0.3 (requires psr/log ^1 || ^2 || ^3)
│  ├──composer/composer 2.4.x-dev (requires composer/xdebug-handler ^2.0.2 || ^3.0.3)
│  └──composer/composer dev-main (requires composer/xdebug-handler ^2.0.2 || ^3.0.3)
└──symfony/console v5.4.11 (conflicts psr/log >=3) (circular dependency aborted here)

Options

    --recursive (-r): Recursively resolves up to the root package.
    --tree (-t): Prints the results as a nested tree, implies -r.

prohibits / why-not#

The prohibits command tells you which packages are blocking a given package from being installed. Specify a version constraint to verify whether upgrades can be performed in your project, and if not why not. See the following example:

php composer.phar prohibits symfony/symfony 3.1

laravel/framework v5.2.16 requires symfony/var-dumper (2.8.*|3.0.*)

Note that you can also specify platform requirements, for example to check whether you can upgrade your server to PHP 8.0:

php composer.phar prohibits php 8

doctrine/cache        v1.6.0 requires php (~5.5|~7.0)
doctrine/common       v2.6.1 requires php (~5.5|~7.0)
doctrine/instantiator 1.0.5  requires php (>=5.3,<8.0-DEV)

As with depends you can request a recursive lookup, which will list all packages depending on the packages that cause the conflict.
Options

    --recursive (-r): Recursively resolves up to the root package.
    --tree (-t): Prints the results as a nested tree, implies -r.

validate#

You should always run the validate command before you commit your composer.json file (and composer.lock if applicable), and before you tag a release.

It will check if your composer.json is valid. If a composer.lock exists, it will also check if it is up to date with the composer.json.

php composer.phar validate

Options

    --no-check-all: Do not emit a warning if requirements in composer.json use unbound or overly strict version constraints.
    --no-check-lock: Do not emit an error if composer.lock exists and is not up to date.
    --check-lock Check if lock file is up to date (even when config.lock is false)
    --no-check-publish: Do not emit an error if composer.json is unsuitable for publishing as a package on Packagist but is otherwise valid.
    --no-check-version: Do not emit an error if the version field is present.
    --with-dependencies: Also validate the composer.json of all installed dependencies.
    --strict: Return a non-zero exit code for warnings as well as errors.

status#

If you often need to modify the code of your dependencies and they are installed from source, the status command allows you to check if you have local changes in any of them.

php composer.phar status

With the --verbose option you get some more information about what was changed:

php composer.phar status -v

You have changes in the following dependencies:
vendor/seld/jsonlint:
    M README.mdown

self-update / selfupdate#

To update Composer itself to the latest version, run the self-update command. It will replace your composer.phar with the latest version.

php composer.phar self-update

If you would like to instead update to a specific release specify it:

php composer.phar self-update 2.4.0-RC1

If you have installed Composer for your entire system (see global installation), you may have to run the command with root privileges

sudo -H composer self-update

If Composer was not installed as a PHAR, this command is not available. (This is sometimes the case when Composer was installed by an operating system package manager.)
Options

    --rollback (-r): Rollback to the last version you had installed.
    --clean-backups: Delete old backups during an update. This makes the current version of Composer the only backup available after the update.
    --no-progress: Do not output download progress.
    --update-keys: Prompt user for a key update.
    --stable: Force an update to the stable channel.
    --preview: Force an update to the preview channel.
    --snapshot: Force an update to the snapshot channel.
    --1: Force an update to the stable channel, but only use 1.x versions
    --2: Force an update to the stable channel, but only use 2.x versions
    --set-channel-only: Only store the channel as the default one and then exit

config#

The config command allows you to edit Composer config settings and repositories in either the local composer.json file or the global config.json file.

Additionally it lets you edit most properties in the local composer.json.

php composer.phar config --list

Usage#

config [options] [setting-key] [setting-value1] ... [setting-valueN]

setting-key is a configuration option name and setting-value1 is a configuration value. For settings that can take an array of values (like github-protocols), multiple setting-value arguments are allowed.

You can also edit the values of the following properties:

description, homepage, keywords, license, minimum-stability, name, prefer-stable, type and version.

See the Config chapter for valid configuration options.
Options

    --global (-g): Operate on the global config file located at $COMPOSER_HOME/config.json by default. Without this option, this command affects the local composer.json file or a file specified by --file.
    --editor (-e): Open the local composer.json file using in a text editor as defined by the EDITOR env variable. With the --global option, this opens the global config file.
    --auth (-a): Affect auth config file (only used for --editor).
    --unset: Remove the configuration element named by setting-key.
    --list (-l): Show the list of current config variables. With the --global option this lists the global configuration only.
    --file="..." (-f): Operate on a specific file instead of composer.json. Note that this cannot be used in conjunction with the --global option.
    --absolute: Returns absolute paths when fetching *-dir config values instead of relative.
    --json: JSON decode the setting value, to be used with extra.* keys.
    --merge: Merge the setting value with the current value, to be used with extra.* keys in combination with --json.
    --append: When adding a repository, append it (lowest priority) to the existing ones instead of prepending it (highest priority).
    --source: Display where the config value is loaded from.

Modifying Repositories#

In addition to modifying the config section, the config command also supports making changes to the repositories section by using it the following way:

php composer.phar config repositories.foo vcs https://github.com/foo/bar

If your repository requires more configuration options, you can instead pass its JSON representation :

php composer.phar config repositories.foo '{"type": "vcs", "url": "http://svn.example.org/my-project/", "trunk-path": "master"}'

Modifying Extra Values#

In addition to modifying the config section, the config command also supports making changes to the extra section by using it the following way:

php composer.phar config extra.foo.bar value

The dots indicate array nesting, a max depth of 3 levels is allowed though. The above would set "extra": { "foo": { "bar": "value" } }.

If you have a complex value to add/modify, you can use the --json and --merge flags to edit extra fields as json:

php composer.phar config --json extra.foo.bar '{"baz": true, "qux": []}'

### create-project

You can use Composer to create new projects from an existing package. This is the equivalent of doing a git clone/svn checkout followed by a composer install of the vendors.

There are several applications for this:

    You can deploy application packages.
    You can check out any package and start developing on patches for example.
    Projects with multiple developers can use this feature to bootstrap the initial application for development.

To create a new project using Composer you can use the create-project command. Pass it a package name, and the directory to create the project in. You can also provide a version as a third argument, otherwise the latest version is used.

If the directory does not currently exist, it will be created during installation.

php composer.phar create-project doctrine/orm path "2.2.*"

It is also possible to run the command without params in a directory with an existing composer.json file to bootstrap a project.

By default the command checks for the packages on packagist.org.
Options

    --stability (-s): Minimum stability of package. Defaults to stable.
    --prefer-install: There are two ways of downloading a package: source and dist. Composer uses dist by default. If you pass --prefer-install=source (or --prefer-source) Composer will install from source if there is one. This is useful if you want to make a bugfix to a project and get a local git clone of the dependency directly. To get the legacy behavior where Composer use source automatically for dev versions of packages, use --prefer-install=auto. See also config.preferred-install. Passing this flag will override the config value.
    --repository: Provide a custom repository to search for the package, which will be used instead of packagist. Can be either an HTTP URL pointing to a composer repository, a path to a local packages.json file, or a JSON string which similar to what the repositories key accepts. You can use this multiple times to configure multiple repositories.
    --add-repository: Add the custom repository in the composer.json. If a lock file is present, it will be deleted and an update will be run instead of an install.
    --dev: Install packages listed in require-dev.
    --no-dev: Disables installation of require-dev packages.
    --no-scripts: Disables the execution of the scripts defined in the root package.
    --no-progress: Removes the progress display that can mess with some terminals or scripts which don't handle backspace characters.
    --no-secure-http: Disable the secure-http config option temporarily while installing the root package. Use at your own risk. Using this flag is a bad idea.
    --keep-vcs: Skip the deletion of the VCS metadata for the created project. This is mostly useful if you run the command in non-interactive mode.
    --remove-vcs: Force-remove the VCS metadata without prompting.
    --no-install: Disables installation of the vendors.
    --no-audit: Does not run the audit steps after installation is complete. Also see COMPOSER_NO_AUDIT.
    --audit-format: Audit output format. Must be "table", "plain", "json", or "summary" (default).
    --ignore-platform-reqs: ignore all platform requirements (php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill these. See also the platform config option.
    --ignore-platform-req: ignore a specific platform requirement(php, hhvm, lib-* and ext-*) and force the installation even if the local machine does not fulfill it. Multiple requirements can be ignored via wildcard.
    --ask: Ask the user to provide a target directory for the new project.

dump-autoload / dumpautoload#

If you need to update the autoloader because of new classes in a classmap package for example, you can use dump-autoload to do that without having to go through an install or update.

Additionally, it can dump an optimized autoloader that converts PSR-0/4 packages into classmap ones for performance reasons. In large applications with many classes, the autoloader can take up a substantial portion of every request's time. Using classmaps for everything is less convenient in development, but using this option you can still use PSR-0/4 for convenience and classmaps for performance.
Options

    --optimize (-o): Convert PSR-0/4 autoloading to classmap to get a faster autoloader. This is recommended especially for production, but can take a bit of time to run, so it is currently not done by default.
    --classmap-authoritative (-a): Autoload classes from the classmap only. Implicitly enables --optimize.
    --apcu: Use APCu to cache found/not-found classes.
    --apcu-prefix: Use a custom prefix for the APCu autoloader cache. Implicitly enables --apcu.
    --dry-run: Outputs the operations but will not execute anything.
    --no-dev: Disables autoload-dev rules. Composer will by default infer this automatically according to the last install or update --no-dev state.
    --dev: Enables autoload-dev rules. Composer will by default infer this automatically according to the last install or update --no-dev state.
    --ignore-platform-reqs: ignore all php, hhvm, lib-* and ext-* requirements and skip the platform check for these. See also the platform config option.
    --ignore-platform-req: ignore a specific platform requirement (php, hhvm, lib-* and ext-*) and skip the platform check for it. Multiple requirements can be ignored via wildcard.
    --strict-psr: Return a failed exit code (1) if PSR-4 or PSR-0 mapping errors are present. Requires --optimize to work.
    --strict-ambiguous: Return a failed exit code (2) if the same class is found in multiple files. Requires --optimize to work.

clear-cache / clearcache / cc#

Deletes all content from Composer's cache directories.
Options

    --gc: Only run garbage collection, not a full cache clear

licenses#

Lists the name, version and license of every package installed. Use --format=json to get machine-readable output.
Options

    --format: Format of the output: text, json or summary (default: "text")
    --no-dev: Remove dev dependencies from the output

run-script / run#
Options

    --timeout: Set the script timeout in seconds, or 0 for no timeout.
    --dev: Sets the dev mode.
    --no-dev: Disable dev mode.
    --list (-l): List user defined scripts.

To run scripts manually you can use this command, give it the script name and optionally any required arguments.
exec#

Executes a vendored binary/script. You can execute any command and this will ensure that the Composer bin-dir is pushed on your PATH before the command runs.
Options

    --list (-l): List the available Composer binaries.

diagnose#

If you think you found a bug, or something is behaving strangely, you might want to run the diagnose command to perform automated checks for many common problems.

php composer.phar diagnose

archive#

This command is used to generate a zip/tar archive for a given package in a given version. It can also be used to archive your entire project without excluded/ignored files.

php composer.phar archive vendor/package 2.0.21 --format=zip

Options

    --format (-f): Format of the resulting archive: tar, tar.gz, tar.bz2 or zip (default: "tar").
    --dir: Write the archive to this directory (default: ".")
    --file: Write the archive with the given file name.

audit#

This command is used to audit the packages you have installed for possible security issues. It checks for and lists security vulnerability advisories according to the Packagist.org api.

The audit command returns the amount of vulnerabilities found. 0 if successful, and up to 255 otherwise.

php composer.phar audit

Options

    --no-dev: Disables auditing of require-dev packages.
    --format (-f): Audit output format. Must be "table" (default), "plain", "json", or "summary".
    --locked: Audit packages from the lock file, regardless of what is currently in vendor dir.
    --abandoned: Behavior on abandoned packages. Must be "ignore", "report", or "fail". See also audit.abandoned. Passing this flag will override the config value and the environment variable.
    --ignore-severity: Ignore advisories of a certain severity level. Can be passed one or more time to ignore multiple severities.

help#

To get more information about a certain command, you can use help.

php composer.phar help install

Command-line completion#

Command-line completion can be enabled by running the composer completion --help command and following the instructions.
Environment variables#

You can set a number of environment variables that override certain settings. Whenever possible it is recommended to specify these settings in the config section of composer.json instead. It is worth noting that the env vars will always take precedence over the values specified in composer.json.
COMPOSER#

By setting the COMPOSER env variable it is possible to set the filename of composer.json to something else.

For example:

COMPOSER=composer-other.json php composer.phar install

The generated lock file will use the same name: composer-other.lock in this example.
COMPOSER_ALLOW_SUPERUSER#

If set to 1, this env disables the warning about running commands as root/super user. It also disables automatic clearing of sudo sessions, so you should really only set this if you use Composer as a super user at all times like in docker containers.
COMPOSER_ALLOW_XDEBUG#

If set to 1, this env allows running Composer when the Xdebug extension is enabled, without restarting PHP without it.
COMPOSER_AUTH#

The COMPOSER_AUTH var allows you to set up authentication as an environment variable. The contents of the variable should be a JSON formatted object containing http-basic, github-oauth, bitbucket-oauth, ... objects as needed, and following the spec from the config.
COMPOSER_BIN_DIR#

By setting this option you can change the bin (Vendor Binaries) directory to something other than vendor/bin.
COMPOSER_CACHE_DIR#

The COMPOSER_CACHE_DIR var allows you to change the Composer cache directory, which is also configurable via the cache-dir option.

By default, it points to C:\Users\<user>\AppData\Local\Composer (or %LOCALAPPDATA%/Composer) on Windows. On *nix systems that follow the XDG Base Directory Specifications, it points to $XDG_CACHE_HOME/composer. On other *nix systems and on macOS, it points to $COMPOSER_HOME/cache.
COMPOSER_CAFILE#

By setting this environmental value, you can set a path to a certificate bundle file to be used during SSL/TLS peer verification.
COMPOSER_DISABLE_XDEBUG_WARN#

If set to 1, this env suppresses a warning when Composer is running with the Xdebug extension enabled.
COMPOSER_DISCARD_CHANGES#

This env var controls the discard-changes config option.
COMPOSER_FUND#

If set to 0, this env suppresses funding notices when installing.
COMPOSER_HOME#

The COMPOSER_HOME var allows you to change the Composer home directory. This is a hidden, global (per-user on the machine) directory that is shared between all projects.

Use composer config --global home to see the location of the home directory.

By default, it points to C:\Users\<user>\AppData\Roaming\Composer on Windows and /Users/<user>/.composer on macOS. On *nix systems that follow the XDG Base Directory Specifications, it points to $XDG_CONFIG_HOME/composer. On other *nix systems, it points to /home/<user>/.composer.
COMPOSER_HOME/config.json#

You may put a config.json file into the location which COMPOSER_HOME points to. Composer will partially (only config and repositories keys) merge this configuration with your project's composer.json when you run the install and update commands.

This file allows you to set repositories and configuration for the user's projects.

In case global configuration matches local configuration, the local configuration in the project's composer.json always wins.
COMPOSER_HTACCESS_PROTECT#

Defaults to 1. If set to 0, Composer will not create .htaccess files in the Composer home, cache, and data directories.
COMPOSER_MEMORY_LIMIT#

If set, the value is used as php's memory_limit.
COMPOSER_MIRROR_PATH_REPOS#

If set to 1, this env changes the default path repository strategy to mirror instead of symlink. As it is the default strategy being set it can still be overwritten by repository options.
COMPOSER_NO_INTERACTION#

If set to 1, this env var will make Composer behave as if you passed the --no-interaction flag to every command. This can be set on build boxes/CI.
COMPOSER_PROCESS_TIMEOUT#

This env var controls the time Composer waits for commands (such as git commands) to finish executing. The default value is 300 seconds (5 minutes).
COMPOSER_ROOT_VERSION#

By setting this var you can specify the version of the root package, if it cannot be guessed from VCS info and is not present in composer.json.
COMPOSER_VENDOR_DIR#

By setting this var you can make Composer install the dependencies into a directory other than vendor.
COMPOSER_RUNTIME_ENV#

This lets you hint under which environment Composer is running, which can help Composer work around some environment specific issues. The only value currently supported is virtualbox, which then enables some short sleep() calls to wait for the filesystem to have written files properly before we attempt reading them. You can set the environment variable if you use Vagrant or VirtualBox and experience issues with files not being found during installation even though they should be present.
http_proxy or HTTP_PROXY#
HTTP_PROXY_REQUEST_FULLURI#
HTTPS_PROXY_REQUEST_FULLURI#
no_proxy or NO_PROXY#

See the proxy documentation for more details on how to use proxy env vars.
COMPOSER_AUDIT_ABANDONED#

Set to ignore, report or fail to override the audit.abandoned config option.
COMPOSER_MAX_PARALLEL_HTTP#

Set to an integer to configure how many files can be downloaded in parallel. This defaults to 12 and must be between 1 and 50. If your proxy has issues with concurrency maybe you want to lower this. Increasing it should generally not result in performance gains.
COMPOSER_IPRESOLVE#

Set to 4 or 6 to force IPv4 or IPv6 DNS resolution. This only works when the curl extension is used for downloads.
COMPOSER_SELF_UPDATE_TARGET#

If set, makes the self-update command write the new Composer phar file into that path instead of overwriting itself. Useful for updating Composer on a read-only filesystem.
COMPOSER_DISABLE_NETWORK#

If set to 1, disables network access (best effort). This can be used for debugging or to run Composer on a plane or a starship with poor connectivity.

If set to prime, GitHub VCS repositories will prime the cache, so it can then be used fully offline with 1.
COMPOSER_DEBUG_EVENTS#

If set to 1, outputs information about events being dispatched, which can be useful for plugin authors to identify what is firing when exactly.
COMPOSER_NO_AUDIT#

If set to 1, it is the equivalent of passing the --no-audit option to require, update, remove or create-project command.
COMPOSER_NO_DEV#

If set to 1, it is the equivalent of passing the --update-no-dev option to require or the --no-dev option to install or update. You can override this for a single command by setting COMPOSER_NO_DEV=0.
COMPOSER_PREFER_STABLE#

If set to 1, it is the equivalent of passing the --prefer-stable option to update or require.
COMPOSER_PREFER_LOWEST#

If set to 1, it is the equivalent of passing the --prefer-lowest option to update or require.
COMPOSER_MINIMAL_CHANGES#

If set to 1, it is the equivalent of passing the --minimal-changes option to update, require or remove.
COMPOSER_IGNORE_PLATFORM_REQ or COMPOSER_IGNORE_PLATFORM_REQS#

If COMPOSER_IGNORE_PLATFORM_REQS set to 1, it is the equivalent of passing the --ignore-platform-reqs argument. Otherwise, specifying a comma separated list in COMPOSER_IGNORE_PLATFORM_REQ will ignore those specific requirements.

For example, if a development workstation will never run database queries, this can be used to ignore the requirement for the database extensions to be available. If you set COMPOSER_IGNORE_PLATFORM_REQ=ext-oci8, then composer will allow packages to be installed even if the oci8 PHP extension is not enabled.

The composer.json schema#

This chapter will explain all of the fields available in composer.json.
JSON schema#

We have a JSON schema that documents the format and can also be used to validate your composer.json. In fact, it is used by the validate command. You can find it at: https://getcomposer.org/schema.json
Root Package#

The root package is the package defined by the composer.json at the root of your project. It is the main composer.json that defines your project requirements.

Certain fields only apply when in the root package context. One example of this is the config field. Only the root package can define configuration. The config of dependencies is ignored. This makes the config field root-only.

    Note: A package can be the root package or not, depending on the context. For example, if your project depends on the monolog library, your project is the root package. However, if you clone monolog from GitHub in order to fix a bug in it, then monolog is the root package.

Properties#
name#

The name of the package. It consists of vendor name and project name, separated by /. Examples:

    monolog/monolog
    igorw/event-source

The name must be lowercase and consist of words separated by -, . or _. The complete name should match ^[a-z0-9]([_.-]?[a-z0-9]+)*/[a-z0-9](([_.]|-{1,2})?[a-z0-9]+)*$.

The name property is required for published packages (libraries).

    Note: Before Composer version 2.0, a name could contain any character, including white spaces.

description#

A short description of the package. Usually this is one line long.

Required for published packages (libraries).
version#

The version of the package. In most cases this is not required and should be omitted (see below).

This must follow the format of X.Y.Z or vX.Y.Z with an optional suffix of -dev, -patch (-p), -alpha (-a), -beta (-b) or -RC. The patch, alpha, beta and RC suffixes can also be followed by a number.

Examples:

    1.0.0
    1.0.2
    1.1.0
    0.2.5
    1.0.0-dev
    1.0.0-alpha3
    1.0.0-beta2
    1.0.0-RC5
    v2.0.4-p1

Optional if the package repository can infer the version from somewhere, such as the VCS tag name in the VCS repository. In that case it is also recommended to omit it.

    Note: Packagist uses VCS repositories, so the statement above is very much true for Packagist as well. Specifying the version yourself will most likely end up creating problems at some point due to human error.

type#

The type of the package. It defaults to library.

Package types are used for custom installation logic. If you have a package that needs some special logic, you can define a custom type. This could be a symfony-bundle, a wordpress-plugin or a typo3-cms-extension. These types will all be specific to certain projects, and they will need to provide an installer capable of installing packages of that type.

Out of the box, Composer supports four types:

    library: This is the default. It will copy the files to vendor.
    project: This denotes a project rather than a library. For example application shells like the Symfony standard edition, CMSs like the Silverstripe installer or full fledged applications distributed as packages. This can for example be used by IDEs to provide listings of projects to initialize when creating a new workspace.
    metapackage: An empty package that contains requirements and will trigger their installation, but contains no files and will not write anything to the filesystem. As such, it does not require a dist or source key to be installable.
    composer-plugin: A package of type composer-plugin may provide an installer for other packages that have a custom type. Read more in the dedicated article.
    php-ext and php-ext-zend: These names are reserved for PHP extension packages which are written in C. Do not use these types for packages written in PHP.

Only use a custom type if you need custom logic during installation. It is recommended to omit this field and have it default to library.
keywords#

An array of keywords that the package is related to. These can be used for searching and filtering.

Examples:

    logging
    events
    database
    redis
    templating

    Note: Some special keywords trigger composer require without the --dev option to prompt users if they would like to add these packages to require-dev instead of require. These are: dev, testing, static analysis.

    Note: The range of characters allowed inside the string is restricted to unicode letters or numbers, space " ", dot ., underscore _ and dash -. (Regex: '{^[\p{N}\p{L} ._-]+$}u') Using other characters will emit a warning when running composer validate and will cause the package to fail updating on Packagist.org.

Optional.
homepage#

A URL to the website of the project.

Optional.
readme#

A relative path to the readme document. Defaults to README.md.

This is mainly useful for packages not on GitHub, as for GitHub packages Packagist.org will use the readme API to fetch the one detected by GitHub.

Optional.
time#

Release date of the version.

Must be in YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format.

Optional.
license#

The license of the package. This can be either a string or an array of strings.

The recommended notation for the most common licenses is (alphabetical):

    Apache-2.0
    BSD-2-Clause
    BSD-3-Clause
    BSD-4-Clause
    GPL-2.0-only / GPL-2.0-or-later
    GPL-3.0-only / GPL-3.0-or-later
    LGPL-2.1-only / LGPL-2.1-or-later
    LGPL-3.0-only / LGPL-3.0-or-later
    MIT

Optional, but it is highly recommended to supply this. More identifiers are listed at the SPDX Open Source License Registry.

    Note: For closed-source software, you may use "proprietary" as the license identifier.

An Example:

{
    "license": "MIT"
}

For a package, when there is a choice between licenses ("disjunctive license"), multiple can be specified as an array.

An Example for disjunctive licenses:

{
    "license": [
        "LGPL-2.1-only",
        "GPL-3.0-or-later"
    ]
}

Alternatively they can be separated with "or" and enclosed in parentheses;

{
    "license": "(LGPL-2.1-only or GPL-3.0-or-later)"
}

Similarly, when multiple licenses need to be applied ("conjunctive license"), they should be separated with "and" and enclosed in parentheses.
authors#

The authors of the package. This is an array of objects.

Each author object can have following properties:

    name: The author's name. Usually their real name.
    email: The author's email address.
    homepage: URL to the author's website.
    role: The author's role in the project (e.g. developer or translator)

An example:

{
    "authors": [
        {
            "name": "Nils Adermann",
            "email": "naderman@naderman.de",
            "homepage": "https://www.naderman.de",
            "role": "Developer"
        },
        {
            "name": "Jordi Boggiano",
            "email": "j.boggiano@seld.be",
            "homepage": "https://seld.be",
            "role": "Developer"
        }
    ]
}

Optional, but highly recommended.
support#

Various information to get support about the project.

Support information includes the following:

    email: Email address for support.
    issues: URL to the issue tracker.
    forum: URL to the forum.
    wiki: URL to the wiki.
    irc: IRC channel for support, as irc://server/channel.
    source: URL to browse or download the sources.
    docs: URL to the documentation.
    rss: URL to the RSS feed.
    chat: URL to the chat channel.
    security: URL to the vulnerability disclosure policy (VDP).

An example:

{
    "support": {
        "email": "support@example.org",
        "irc": "irc://irc.freenode.org/composer"
    }
}

Optional.
funding#

A list of URLs to provide funding to the package authors for maintenance and development of new functionality.

Each entry consists of the following

    type: The type of funding, or the platform through which funding can be provided, e.g. patreon, opencollective, tidelift or github.
    url: URL to a website with details, and a way to fund the package.

An example:

{
    "funding": [
        {
            "type": "patreon",
            "url": "https://www.patreon.com/phpdoctrine"
        },
        {
            "type": "tidelift",
            "url": "https://tidelift.com/subscription/pkg/packagist-doctrine_doctrine-bundle"
        },
        {
            "type": "other",
            "url": "https://www.doctrine-project.org/sponsorship.html"
        }
    ]
}

Optional.
Package links#

All of the following take an object which maps package names to versions of the package via version constraints. Read more about versions here.

Example:

{
    "require": {
        "monolog/monolog": "1.0.*"
    }
}

All links are optional fields.

require and require-dev additionally support stability flags (root-only). They take the form "constraint@stability flag". These allow you to further restrict or expand the stability of a package beyond the scope of the minimum-stability setting. You can apply them to a constraint, or apply them to an empty constraint if you want to allow unstable packages of a dependency for example.

Example:

{
    "require": {
        "monolog/monolog": "1.0.*@beta",
        "acme/foo": "@dev"
    }
}

If one of your dependencies has a dependency on an unstable package you need to explicitly require it as well, along with its sufficient stability flag.

Example:

Assuming doctrine/doctrine-fixtures-bundle requires "doctrine/data-fixtures": "dev-master" then inside the root composer.json you need to add the second line below to allow dev releases for the doctrine/data-fixtures package :

{
    "require": {
        "doctrine/doctrine-fixtures-bundle": "dev-master",
        "doctrine/data-fixtures": "@dev"
    }
}

require and require-dev additionally support explicit references (i.e. commit) for dev versions to make sure they are locked to a given state, even when you run update. These only work if you explicitly require a dev version and append the reference with #<ref>. This is also a root-only feature and will be ignored in dependencies.

Example:

{
    "require": {
        "monolog/monolog": "dev-master#2eb0c0978d290a1c45346a1955188929cb4e5db7",
        "acme/foo": "1.0.x-dev#abc123"
    }
}

    Note: This feature has severe technical limitations, as the composer.json metadata will still be read from the branch name you specify before the hash. You should therefore only use this as a temporary solution during development to remediate transient issues, until you can switch to tagged releases. The Composer team does not actively support this feature and will not accept bug reports related to it.

It is also possible to inline-alias a package constraint so that it matches a constraint that it otherwise would not. For more information see the aliases article.

require and require-dev also support references to specific PHP versions and PHP extensions your project needs to run successfully.

Example:

{
    "require": {
        "php": ">=7.4",
        "ext-mbstring": "*"
    }
}

    Note: It is important to list PHP extensions your project requires. Not all PHP installations are created equal: some may miss extensions you may consider as standard (such as ext-mysqli which is not installed by default in Fedora/CentOS minimal installation systems). Failure to list required PHP extensions may lead to a bad user experience: Composer will install your package without any errors but it will then fail at run-time. The composer show --platform command lists all PHP extensions available on your system. You may use it to help you compile the list of extensions you use and require. Alternatively you may use third party tools to analyze your project for the list of extensions used.

require#

Map of packages required by this package. The package will not be installed unless those requirements can be met.
require-dev (root-only)#

Map of packages required for developing this package, or running tests, etc. The dev requirements of the root package are installed by default. Both install or update support the --no-dev option that prevents dev dependencies from being installed.
conflict#

Map of packages that conflict with this version of this package. They will not be allowed to be installed together with your package.

Note that when specifying ranges like <1.0 >=1.1 in a conflict link, this will state a conflict with all versions that are less than 1.0 and equal or newer than 1.1 at the same time, which is probably not what you want. You probably want to go for <1.0 || >=1.1 in this case.
replace#

Map of packages that are replaced by this package. This allows you to fork a package, publish it under a different name with its own version numbers, while packages requiring the original package continue to work with your fork because it replaces the original package.

This is also useful for packages that contain sub-packages, for example the main symfony/symfony package contains all the Symfony Components which are also available as individual packages. If you require the main package it will automatically fulfill any requirement of one of the individual components, since it replaces them.

Caution is advised when using replace for the sub-package purpose explained above. You should then typically only replace using self.version as a version constraint, to make sure the main package only replaces the sub-packages of that exact version, and not any other version, which would be incorrect.
provide#

Map of packages that are provided by this package. This is mostly useful for implementations of common interfaces. A package could depend on some virtual package e.g. psr/log-implementation, any library that implements this logger interface would list it in provide. Implementors can then be found on Packagist.org.

Using provide with the name of an actual package rather than a virtual one implies that the code of that package is also shipped, in which case replace is generally a better choice. A common convention for packages providing an interface and relying on other packages to provide an implementation (for instance the PSR interfaces) is to use a -implementation suffix for the name of the virtual package corresponding to the interface package.
suggest#

Suggested packages that can enhance or work well with this package. These are informational and are displayed after the package is installed, to give your users a hint that they could add more packages, even though they are not strictly required.

The format is like package links above, except that the values are free text and not version constraints.

Example:

{
    "suggest": {
        "monolog/monolog": "Allows more advanced logging of the application flow",
        "ext-xml": "Needed to support XML format in class Foo"
    }
}

autoload#

Autoload mapping for a PHP autoloader.

PSR-4 and PSR-0 autoloading, classmap generation and files includes are supported.

PSR-4 is the recommended way since it offers greater ease of use (no need to regenerate the autoloader when you add classes).
PSR-4#

Under the psr-4 key you define a mapping from namespaces to paths, relative to the package root. When autoloading a class like Foo\\Bar\\Baz a namespace prefix Foo\\ pointing to a directory src/ means that the autoloader will look for a file named src/Bar/Baz.php and include it if present. Note that as opposed to the older PSR-0 style, the prefix (Foo\\) is not present in the file path.

Namespace prefixes must end in \\ to avoid conflicts between similar prefixes. For example Foo would match classes in the FooBar namespace so the trailing backslashes solve the problem: Foo\\ and FooBar\\ are distinct.

The PSR-4 references are all combined, during install/update, into a single key => value array which may be found in the generated file vendor/composer/autoload_psr4.php.

Example:

{
    "autoload": {
        "psr-4": {
            "Monolog\\": "src/",
            "Vendor\\Namespace\\": ""
        }
    }
}

If you need to search for a same prefix in multiple directories, you can specify them as an array as such:

{
    "autoload": {
        "psr-4": { "Monolog\\": ["src/", "lib/"] }
    }
}

If you want to have a fallback directory where any namespace will be looked for, you can use an empty prefix like:

{
    "autoload": {
        "psr-4": { "": "src/" }
    }
}

PSR-0#

Under the psr-0 key you define a mapping from namespaces to paths, relative to the package root. Note that this also supports the PEAR-style non-namespaced convention.

Please note namespace declarations should end in \\ to make sure the autoloader responds exactly. For example Foo would match in FooBar so the trailing backslashes solve the problem: Foo\\ and FooBar\\ are distinct.

The PSR-0 references are all combined, during install/update, into a single key => value array which may be found in the generated file vendor/composer/autoload_namespaces.php.

Example:

{
    "autoload": {
        "psr-0": {
            "Monolog\\": "src/",
            "Vendor\\Namespace\\": "src/",
            "Vendor_Namespace_": "src/"
        }
    }
}

If you need to search for a same prefix in multiple directories, you can specify them as an array as such:

{
    "autoload": {
        "psr-0": { "Monolog\\": ["src/", "lib/"] }
    }
}

The PSR-0 style is not limited to namespace declarations only but may be specified right down to the class level. This can be useful for libraries with only one class in the global namespace. If the php source file is also located in the root of the package, for example, it may be declared like this:

{
    "autoload": {
        "psr-0": { "UniqueGlobalClass": "" }
    }
}

If you want to have a fallback directory where any namespace can be, you can use an empty prefix like:

{
    "autoload": {
        "psr-0": { "": "src/" }
    }
}

Classmap#

The classmap references are all combined, during install/update, into a single key => value array which may be found in the generated file vendor/composer/autoload_classmap.php. This map is built by scanning for classes in all .php and .inc files in the given directories/files.

You can use the classmap generation support to define autoloading for all libraries that do not follow PSR-0/4. To configure this you specify all directories or files to search for classes.

Example:

{
    "autoload": {
        "classmap": ["src/", "lib/", "Something.php"]
    }
}

Wildcards (*) are also supported in a classmap paths, and expand to match any directory name:

Example:

{
    "autoload": {
        "classmap": ["src/addons/*/lib/", "3rd-party/*", "Something.php"]
    }
}

Files#

If you want to require certain files explicitly on every request then you can use the files autoloading mechanism. This is useful if your package includes PHP functions that cannot be autoloaded by PHP.

Example:

{
    "autoload": {
        "files": ["src/MyLibrary/functions.php"]
    }
}

Files autoload rules are included whenever vendor/autoload.php is included, right after the autoloader is registered. The order of inclusion depends on package dependencies so that if package A depends on B, files in package B will be included first to ensure package B is fully initialized and ready to be used when files from package A are included.

If two packages have the same amount of dependents or no dependencies, the order is alphabetical.

Files from the root package are always loaded last, and you cannot use files autoloading yourself to override functions from your dependencies. If you want to achieve that we recommend you include your own functions before including Composer's vendor/autoload.php.
Exclude files from classmaps#

If you want to exclude some files or folders from the classmap you can use the exclude-from-classmap property. This might be useful to exclude test classes in your live environment, for example, as those will be skipped from the classmap even when building an optimized autoloader.

The classmap generator will ignore all files in the paths configured here. The paths are absolute from the package root directory (i.e. composer.json location), and support * to match anything but a slash, and ** to match anything. ** is implicitly added to the end of the paths.

Example:

{
    "autoload": {
        "exclude-from-classmap": ["/Tests/", "/test/", "/tests/"]
    }
}

Optimizing the autoloader#

The autoloader can have quite a substantial impact on your request time (50-100ms per request in large frameworks using a lot of classes). See the article about optimizing the autoloader for more details on how to reduce this impact.
autoload-dev (root-only)#

This section allows defining autoload rules for development purposes.

Classes needed to run the test suite should not be included in the main autoload rules to avoid polluting the autoloader in production and when other people use your package as a dependency.

Therefore, it is a good idea to rely on a dedicated path for your unit tests and to add it within the autoload-dev section.

Example:

{
    "autoload": {
        "psr-4": { "MyLibrary\\": "src/" }
    },
    "autoload-dev": {
        "psr-4": { "MyLibrary\\Tests\\": "tests/" }
    }
}

include-path#

    DEPRECATED: This is only present to support legacy projects, and all new code should preferably use autoloading. As such it is a deprecated practice, but the feature itself will not likely disappear from Composer.

A list of paths which should get appended to PHP's include_path.

Example:

{
    "include-path": ["lib/"]
}

Optional.
target-dir#

    DEPRECATED: This is only present to support legacy PSR-0 style autoloading, and all new code should preferably use PSR-4 without target-dir and projects using PSR-0 with PHP namespaces are encouraged to migrate to PSR-4 instead.

Defines the installation target.

In case the package root is below the namespace declaration you cannot autoload properly. target-dir solves this problem.

An example is Symfony. There are individual packages for the components. The Yaml component is under Symfony\Component\Yaml. The package root is that Yaml directory. To make autoloading possible, we need to make sure that it is not installed into vendor/symfony/yaml, but instead into vendor/symfony/yaml/Symfony/Component/Yaml, so that the autoloader can load it from vendor/symfony/yaml.

To do that, autoload and target-dir are defined as follows:

{
    "autoload": {
        "psr-0": { "Symfony\\Component\\Yaml\\": "" }
    },
    "target-dir": "Symfony/Component/Yaml"
}

Optional.
minimum-stability (root-only)#

This defines the default behavior for filtering packages by stability. This defaults to stable, so if you rely on a dev package, you should specify it in your file to avoid surprises.

All versions of each package are checked for stability, and those that are less stable than the minimum-stability setting will be ignored when resolving your project dependencies. (Note that you can also specify stability requirements on a per-package basis using stability flags in the version constraints that you specify in a require block (see package links for more details).

Available options (in order of stability) are dev, alpha, beta, RC, and stable.
prefer-stable (root-only)#

When this is enabled, Composer will prefer more stable packages over unstable ones when finding compatible stable packages is possible. If you require a dev version or only alphas are available for a package, those will still be selected granted that the minimum-stability allows for it.

Use "prefer-stable": true to enable.
repositories (root-only)#

Custom package repositories to use.

By default Composer only uses the packagist repository. By specifying repositories you can get packages from elsewhere.

Repositories are not resolved recursively. You can only add them to your main composer.json. Repository declarations of dependencies' composer.jsons are ignored.

The following repository types are supported:

    composer: A Composer repository is a packages.json file served via the network (HTTP, FTP, SSH), that contains a list of composer.json objects with additional dist and/or source information. The packages.json file is loaded using a PHP stream. You can set extra options on that stream using the options parameter.
    vcs: The version control system repository can fetch packages from git, svn, fossil and hg repositories.
    package: If you depend on a project that does not have any support for Composer whatsoever you can define the package inline using a package repository. You basically inline the composer.json object.

For more information on any of these, see Repositories.

Example:

{
    "repositories": [
        {
            "type": "composer",
            "url": "http://packages.example.com"
        },
        {
            "type": "composer",
            "url": "https://packages.example.com",
            "options": {
                "ssl": {
                    "verify_peer": "true"
                }
            }
        },
        {
            "type": "vcs",
            "url": "https://github.com/Seldaek/monolog"
        },
        {
            "type": "package",
            "package": {
                "name": "smarty/smarty",
                "version": "3.1.7",
                "dist": {
                    "url": "https://www.smarty.net/files/Smarty-3.1.7.zip",
                    "type": "zip"
                },
                "source": {
                    "url": "https://smarty-php.googlecode.com/svn/",
                    "type": "svn",
                    "reference": "tags/Smarty_3_1_7/distribution/"
                }
            }
        }
    ]
}

    Note: Order is significant here. When looking for a package, Composer will look from the first to the last repository, and pick the first match. By default Packagist is added last which means that custom repositories can override packages from it.

Using JSON object notation is also possible. However, JSON key/value pairs are to be considered unordered so consistent behaviour cannot be guaranteed.

{
    "repositories": {
        "foo": {
            "type": "composer",
            "url": "http://packages.foo.com"
        }
    }
}

config (root-only)#

A set of configuration options. It is only used for projects. See Config for a description of each individual option.
scripts (root-only)#

Composer allows you to hook into various parts of the installation process through the use of scripts.

See Scripts for events details and examples.
extra#

Arbitrary extra data for consumption by scripts.

This can be virtually anything. To access it from within a script event handler, you can do:

$extra = $event->getComposer()->getPackage()->getExtra();

Optional.
bin#

A set of files that should be treated as binaries and made available into the bin-dir (from config).

See Vendor Binaries for more details.

Optional.
archive#

A set of options for creating package archives.

The following options are supported:

    name: Allows configuring base name for archive. By default (if not configured, and --file is not passed as command-line argument), preg_replace('#[^a-z0-9-_]#i', '-', name) is used.

Example:

{
    "name": "org/strangeName",
    "archive": {
        "name": "Strange_name"
    }
}

    exclude: Allows configuring a list of patterns for excluded paths. The pattern syntax matches .gitignore files. A leading exclamation mark (!) will result in any matching files to be included even if a previous pattern excluded them. A leading slash will only match at the beginning of the project relative path. An asterisk will not expand to a directory separator.

Example:

{
    "archive": {
        "exclude": ["/foo/bar", "baz", "/*.test", "!/foo/bar/baz"]
    }
}

The example will include /dir/foo/bar/file, /foo/bar/baz, /file.php, /foo/my.test but it will exclude /foo/bar/any, /foo/baz, and /my.test.

Optional.
abandoned#

Indicates whether this package has been abandoned.

It can be boolean or a package name/URL pointing to a recommended alternative.

Examples:

Use "abandoned": true to indicate this package is abandoned. Use "abandoned": "monolog/monolog" to indicate this package is abandoned, and that the recommended alternative is monolog/monolog.

Defaults to false.

Optional.
_comment#

Top level key used as a place to store comments (it can be a string or array of strings).

{
    "_comment": [
        "The package foo/bar was required for business logic",
        "Remove package foo/baz when removing foo/bar"
    ]
}

Defaults to empty.

Optional.
non-feature-branches#

A list of regex patterns of branch names that are non-numeric (e.g. "latest" or something), that will NOT be handled as feature branches. This is an array of strings.

If you have non-numeric branch names, for example like "latest", "current", "latest-stable" or something, that do not look like a version number, then Composer handles such branches as feature branches. This means it searches for parent branches, that look like a version or ends at special branches (like master), and the root package version number becomes the version of the parent branch or at least master or something.

To handle non-numeric named branches as versions instead of searching for a parent branch with a valid version or special branch name like master, you can set patterns for branch names that should be handled as dev version branches.

This is really helpful when you have dependencies using "self.version", so that not dev-master, but the same branch is installed (in the example: latest-testing).

An example:

If you have a testing branch, that is heavily maintained during a testing phase and is deployed to your staging environment, normally composer show -s will give you versions : * dev-master.

If you configure latest-.* as a pattern for non-feature-branches like this:

{
    "non-feature-branches": ["latest-.*"]
}

Then composer show -s will give you versions : * dev-latest-testing.

Optional.

Repositories#

This chapter will explain the concept of packages and repositories, what kinds of repositories are available, and how they work.
Concepts#

Before we look at the different types of repositories that exist, we need to understand some basic concepts that Composer is built on.
Package#

Composer is a dependency manager. It installs packages locally. A package is essentially a directory containing something. In this case it is PHP code, but in theory it could be anything. And it contains a package description which has a name and a version. The name and the version are used to identify the package.

In fact, internally, Composer sees every version as a separate package. While this distinction does not matter when you are using Composer, it's quite important when you want to change it.

In addition to the name and the version, there is useful metadata. The information most relevant for installation is the source definition, which describes where to get the package contents. The package data points to the contents of the package. And there are two options here: dist and source.

Dist: The dist is a packaged version of the package data. Usually a released version, usually a stable release.

Source: The source is used for development. This will usually originate from a source code repository, such as git. You can fetch this when you want to modify the downloaded package.

Packages can supply either of these, or even both. Depending on certain factors, such as user-supplied options and stability of the package, one will be preferred.
Repository#

A repository is a package source. It's a list of packages/versions. Composer will look in all your repositories to find the packages your project requires.

By default, only the Packagist.org repository is registered in Composer. You can add more repositories to your project by declaring them in composer.json.

Repositories are only available to the root package and the repositories defined in your dependencies will not be loaded. Read the FAQ entry if you want to learn why.

When resolving dependencies, packages are looked up from repositories from top to bottom, and by default, as soon as a package is found in one, Composer stops looking in other repositories. Read the repository priorities article for more details and to see how to change this behavior.
Types#
Composer#

The main repository type is the composer repository. It uses a single packages.json file that contains all of the package metadata.

This is also the repository type that packagist uses. To reference a composer repository, supply the path before the packages.json file. In the case of packagist, that file is located at /packages.json, so the URL of the repository would be repo.packagist.org. For example.org/packages.json the repository URL would be example.org.

{
    "repositories": [
        {
            "type": "composer",
            "url": "https://example.org"
        }
    ]
}

packages#

The only required field is packages. The JSON structure is as follows:

{
    "packages": {
        "vendor/package-name": {
            "dev-master": { @composer.json },
            "1.0.x-dev": { @composer.json },
            "0.0.1": { @composer.json },
            "1.0.0": { @composer.json }
        }
    }
}

The @composer.json marker would be the contents of the composer.json from that package version including as a minimum:

    name
    version
    dist or source

Here is a minimal package definition:

{
    "name": "smarty/smarty",
    "version": "3.1.7",
    "dist": {
        "url": "https://www.smarty.net/files/Smarty-3.1.7.zip",
        "type": "zip"
    }
}

It may include any of the other fields specified in the schema.
notify-batch#

The notify-batch field allows you to specify a URL that will be called every time a user installs a package. The URL can be either an absolute path (that will use the same domain as the repository), or a fully qualified URL.

An example value:

{
    "notify-batch": "/downloads/"
}

For example.org/packages.json containing a monolog/monolog package, this would send a POST request to example.org/downloads/ with following JSON request body:

{
    "downloads": [
        {"name": "monolog/monolog", "version": "1.2.1.0"}
    ]
}

The version field will contain the normalized representation of the version number.

This field is optional.
metadata-url, available-packages and available-package-patterns#

The metadata-url field allows you to provide a URL template to serve all packages which are in the repository. It must contain the placeholder %package%.

This field is new in Composer v2, and is prioritised over the provider-includes and providers-url fields if both are present. For compatibility with both Composer v1 and v2 you ideally want to provide both. New repository implementations may only need to support v2 however.

An example:

{
    "metadata-url": "/p2/%package%.json"
}

Whenever Composer looks for a package, it will replace %package% by the package name, and fetch that URL. If dev stability is allowed for the package, it will also load the URL again with $packageName~dev (e.g. /p2/foo/bar~dev.json to look for foo/bar's dev versions).

The foo/bar.json and foo/bar~dev.json files containing package versions MUST contain only versions for the foo/bar package, as {"packages":{"foo/bar":[ ... versions here ... ]}}.

Caching is done via the use of If-Modified-Since header, so make sure you return Last-Modified headers and that they are accurate.

The array of versions can also optionally be minified using Composer\MetadataMinifier\MetadataMinifier::minify() from composer/metadata-minifier. If you do that, you should add a "minified": "composer/2.0" key at the top level to indicate to Composer it must expand the version list back into the original data. See https://repo.packagist.org/p2/monolog/monolog.json for an example.

Any requested package which does not exist MUST return a 404 status code, which will indicate to Composer that this package does not exist in your repository. Make sure the 404 response is fast to avoid blocking Composer. Avoid redirects to alternative 404 pages.

If your repository only has a small number of packages, and you want to avoid the 404-requests, you can also specify an "available-packages" key in packages.json which should be an array with all the package names that your repository contains. Alternatively you can specify an "available-package-patterns" key which is an array of package name patterns (with * matching any string, e.g. vendor/* would make Composer look up every matching package name in this repository).

This field is optional.
providers-api#

The providers-api field allows you to provide a URL template to serve all packages which provide a given package name, but not the package which has that name. It must contain the placeholder %package%.

For example https://packagist.org/providers/monolog/monolog.json lists some package which have a "provide" rule for monolog/monolog, but it does not list monolog/monolog itself.

{
    "providers-api": "https://packagist.org/providers/%package%.json",
}

This field is optional.
list#

The list field allows you to return the names of packages which match a given filter (or all names if no filter is present). It should accept an optional ?filter=xx query param, which can contain * as wildcards matching any substring.

Replace/provide rules should not be considered here.

It must return an array of package names:

{
    "packageNames": [
        "a/b",
        "c/d"
    ]
}

See https://packagist.org/packages/list.json?filter=composer/* for example.

This field is optional.
provider-includes and providers-url#

The provider-includes field allows you to list a set of files that list package names provided by this repository. The hash should be a sha256 of the files in this case.

The providers-url describes how provider files are found on the server. It is an absolute path from the repository root. It must contain the placeholders %package% and %hash%.

These fields are used by Composer v1, or if your repository does not have the metadata-url field set.

An example:

{
    "provider-includes": {
        "providers-a.json": {
            "sha256": "f5b4bc0b354108ef08614e569c1ed01a2782e67641744864a74e788982886f4c"
        },
        "providers-b.json": {
            "sha256": "b38372163fac0573053536f5b8ef11b86f804ea8b016d239e706191203f6efac"
        }
    },
    "providers-url": "/p/%package%$%hash%.json"
}

Those files contain lists of package names and hashes to verify the file integrity, for example:

{
    "providers": {
        "acme/foo": {
            "sha256": "38968de1305c2e17f4de33aea164515bc787c42c7e2d6e25948539a14268bb82"
        },
        "acme/bar": {
            "sha256": "4dd24c930bd6e1103251306d6336ac813b563a220d9ca14f4743c032fb047233"
        }
    }
}

The file above declares that acme/foo and acme/bar can be found in this repository, by loading the file referenced by providers-url, replacing %package% by the vendor namespaced package name and %hash% by the sha256 field. Those files themselves contain package definitions as described above.

These fields are optional. You probably don't need them for your own custom repository.
cURL or stream options#

The repository is accessed either using cURL (Composer 2 with ext-curl enabled) or PHP streams. You can set extra options using the options parameter. For PHP streams, you can set any valid PHP stream context option. See Context options and parameters for more information. When cURL is used, only a limited set of http and ssl options can be configured.

{
    "repositories": [
        {
            "type": "composer",
            "url": "https://example.org",
            "options": {
                "http": {
                    "timeout": 60
                }
            }
        }
    ],
    "require": {
        "acme/package": "^1.0"
    }
}

VCS#

VCS stands for version control system. This includes versioning systems like git, svn, fossil or hg. Composer has a repository type for installing packages from these systems.
Loading a package from a VCS repository#

There are a few use cases for this. The most common one is maintaining your own fork of a third party library. If you are using a certain library for your project, and you decide to change something in the library, you will want your project to use the patched version. If the library is on GitHub (this is the case most of the time), you can fork it there and push your changes to your fork. After that you update the project's composer.json. All you have to do is add your fork as a repository and update the version constraint to point to your custom branch. In composer.json only, you should prefix your custom branch name with "dev-" (without making it part of the actual branch name). For version constraint naming conventions see Libraries for more information.

Example assuming you patched monolog to fix a bug in the bugfix branch:

{
    "repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/igorw/monolog"
        }
    ],
    "require": {
        "monolog/monolog": "dev-bugfix"
    }
}

When you run php composer.phar update, you should get your modified version of monolog/monolog instead of the one from packagist.

Note that you should not rename the package unless you really intend to fork it in the long term, and completely move away from the original package. Composer will correctly pick your package over the original one since the custom repository has priority over packagist. If you want to rename the package, you should do so in the default (often master) branch and not in a feature branch, since the package name is taken from the default branch.

Also note that the override will not work if you change the name property in your forked repository's composer.json file as this needs to match the original for the override to work.

If other dependencies rely on the package you forked, it is possible to inline-alias it so that it matches a constraint that it otherwise would not. For more information see the aliases article.
Using private repositories#

Exactly the same solution allows you to work with your private repositories at GitHub and Bitbucket:

{
    "repositories": [
        {
            "type": "vcs",
            "url":  "git@bitbucket.org:vendor/my-private-repo.git"
        }
    ],
    "require": {
        "vendor/my-private-repo": "dev-master"
    }
}

The only requirement is the installation of SSH keys for a git client.
Git alternatives#

Git is not the only version control system supported by the VCS repository. The following are supported:

    Git: git-scm.com
    Subversion: subversion.apache.org
    Mercurial: mercurial-scm.org
    Fossil: fossil-scm.org

To get packages from these systems you need to have their respective clients installed. That can be inconvenient. And for this reason there is special support for GitHub and Bitbucket that use the APIs provided by these sites, to fetch the packages without having to install the version control system. The VCS repository provides dists for them that fetch the packages as zips.

    GitHub: github.com (Git)
    Bitbucket: bitbucket.org (Git)

The VCS driver to be used is detected automatically based on the URL. However, should you need to specify one for whatever reason, you can use bitbucket, github, gitlab, perforce, fossil, git, svn or hg as the repository type instead of vcs.

If you set the no-api key to true on a github repository it will clone the repository as it would with any other git repository instead of using the GitHub API. But unlike using the git driver directly, Composer will still attempt to use github's zip files.

Please note:

    To let Composer choose which driver to use the repository type needs to be defined as "vcs"
    If you already used a private repository, this means Composer should have cloned it in cache. If you want to install the same package with drivers, remember to launch the command composer clearcache followed by the command composer update to update Composer cache and install the package from dist.
    VCS driver git-bitbucket is deprecated in favor of bitbucket

Bitbucket Driver Configuration#

    Note that the repository endpoint for Bitbucket needs to be https rather than git.

After setting up your bitbucket repository, you will also need to set up authentication.
Subversion Options#

Since Subversion has no native concept of branches and tags, Composer assumes by default that code is located in $url/trunk, $url/branches and $url/tags. If your repository has a different layout you can change those values. For example if you used capitalized names you could configure the repository like this:

{
    "repositories": [
        {
            "type": "vcs",
            "url": "http://svn.example.org/projectA/",
            "trunk-path": "Trunk",
            "branches-path": "Branches",
            "tags-path": "Tags"
        }
    ]
}

If you have no branches or tags directory you can disable them entirely by setting the branches-path or tags-path to false.

If the package is in a subdirectory, e.g. /trunk/foo/bar/composer.json and /tags/1.0/foo/bar/composer.json, then you can make Composer access it by setting the "package-path" option to the sub-directory, in this example it would be "package-path": "foo/bar/".

If you have a private Subversion repository you can save credentials in the http-basic section of your config (See Schema):

{
    "http-basic": {
        "svn.example.org": {
            "username": "username",
            "password": "password"
        }
    }
}

If your Subversion client is configured to store credentials by default these credentials will be saved for the current user and existing saved credentials for this server will be overwritten. To change this behavior by setting the "svn-cache-credentials" option in your repository configuration:

{
    "repositories": [
        {
            "type": "vcs",
            "url": "http://svn.example.org/projectA/",
            "svn-cache-credentials": false
        }
    ]
}

Package#

If you want to use a project that does not support Composer through any of the means above, you still can define the package yourself by using a package repository.

Basically, you define the same information that is included in the composer repository's packages.json, but only for a single package. Again, the minimum required fields are name, version, and either of dist or source.

Here is an example for the smarty template engine:

{
    "repositories": [
        {
            "type": "package",
            "package": {
                "name": "smarty/smarty",
                "version": "3.1.7",
                "dist": {
                    "url": "https://www.smarty.net/files/Smarty-3.1.7.zip",
                    "type": "zip"
                },
                "source": {
                    "url": "http://smarty-php.googlecode.com/svn/",
                    "type": "svn",
                    "reference": "tags/Smarty_3_1_7/distribution/"
                },
                "autoload": {
                    "classmap": ["libs/"]
                }
            }
        }
    ],
    "require": {
        "smarty/smarty": "3.1.*"
    }
}

Typically, you would leave the source part off, as you don't really need it.

If a source key is included, the reference field should be a reference to the version that will be installed. Where the type field is git, this will the be the commit id, branch or tag name.

    Note: It is not recommended to use a git branch name for the reference field. While this is valid since it is supported by git checkout, branch names are mutable so cannot be locked.

Where the type field is svn, the reference field should contain the reference that gets appended to the URL when running svn co.

    Note: This repository type has a few limitations and should be avoided whenever possible:

        Composer will not update the package unless you change the version field.
        Composer will not update the commit references, so if you use master as reference you will have to delete the package to force an update, and will have to deal with an unstable lock file.

The "package" key in a package repository may be set to an array to define multiple versions of a package:

{
    "repositories": [
        {
            "type": "package",
            "package": [
                {
                    "name": "foo/bar",
                    "version": "1.0.0",
                    ...
                },
                {
                    "name": "foo/bar",
                    "version": "2.0.0",
                    ...
                }
            ]
        }
    ]
}

Hosting your own#

While you will probably want to put your packages on packagist most of the time, there are some use cases for hosting your own repository.

    Private company packages: If you are part of a company that uses Composer for their packages internally, you might want to keep those packages private.

    Separate ecosystem: If you have a project which has its own ecosystem, and the packages aren't really reusable by the greater PHP community, you might want to keep them separate to packagist. An example of this would be WordPress plugins.

For hosting your own packages, a native composer type of repository is recommended, which provides the best performance.

There are a few tools that can help you create a composer repository.
Private Packagist#

Private Packagist is a hosted or self-hosted application providing private package hosting as well as mirroring of GitHub, Packagist.org and other package repositories.

Check out Packagist.com for more information.
Satis#

Satis is a static composer repository generator. It is a bit like an ultra- lightweight, static file-based version of packagist.

You give it a composer.json containing repositories, typically VCS and package repository definitions. It will fetch all the packages that are required and dump a packages.json that is your composer repository.

Check the satis GitHub repository and the handling private packages article for more information.
Artifact#

There are some cases, when there is no ability to have one of the previously mentioned repository types online, even the VCS one. A typical example could be cross-organisation library exchange through build artifacts. Of course, most of the time these are private. To use these archives as-is, one can use a repository of type artifact with a folder containing ZIP or TAR archives of those private packages:

{
    "repositories": [
        {
            "type": "artifact",
            "url": "path/to/directory/with/zips/"
        }
    ],
    "require": {
        "private-vendor-one/core": "15.6.2",
        "private-vendor-two/connectivity": "*",
        "acme-corp/parser": "10.3.5"
    }
}

Each zip artifact is a ZIP archive with composer.json in root folder:

unzip -l acme-corp-parser-10.3.5.zip

composer.json
...

If there are two archives with different versions of a package, they are both imported. When an archive with a newer version is added in the artifact folder and you run update, that version will be imported as well and Composer will update to the latest version.
Path#

In addition to the artifact repository, you can use the path one, which allows you to depend on a local directory, either absolute or relative. This can be especially useful when dealing with monolithic repositories.

For instance, if you have the following directory structure in your repository:

...
├── apps
│   └── my-app
│       └── composer.json
├── packages
│   └── my-package
│       └── composer.json
...

Then, to add the package my/package as a dependency, in your apps/my-app/composer.json file, you can use the following configuration:

{
    "repositories": [
        {
            "type": "path",
            "url": "../../packages/my-package"
        }
    ],
    "require": {
        "my/package": "*"
    }
}

If the package is a local VCS repository, the version may be inferred by the branch or tag that is currently checked out. Otherwise, the version should be explicitly defined in the package's composer.json file. If the version cannot be resolved by these means, it is assumed to be dev-master.

When the version cannot be inferred from the local VCS repository, or when you want to override the version, you can use the versions option when declaring the repository:

{
    "repositories": [
        {
            "type": "path",
            "url": "../../packages/my-package",
            "options": {
                "versions": {
                    "my/package": "4.2-dev"
                }
            }
        }
    ]
}

The local package will be symlinked if possible, in which case the output in the console will read Symlinking from ../../packages/my-package. If symlinking is not possible the package will be copied. In that case, the console will output Mirrored from ../../packages/my-package.

Instead of default fallback strategy you can force to use symlink with "symlink": true or mirroring with "symlink": false option. Forcing mirroring can be useful when deploying or generating package from a monolithic repository.

    Note: On Windows, directory symlinks are implemented using NTFS junctions because they can be created by non-admin users. Mirroring will always be used on versions below Windows 7 or if proc_open has been disabled.

{
    "repositories": [
        {
            "type": "path",
            "url": "../../packages/*",
            "options": {
                "symlink": false
            }
        }
    ]
}

Leading tildes are expanded to the current user's home folder, and environment variables are parsed in both Windows and Linux/Mac notations. For example ~/git/mypackage will automatically load the mypackage clone from /home/<username>/git/mypackage, equivalent to $HOME/git/mypackage or %USERPROFILE%/git/mypackage.

    Note: Repository paths can also contain wildcards like * and ?. For details, see the PHP glob function.

You can configure the way the package's dist reference (which appears in the composer.lock file) is built.

The following modes exist:

    none - reference will be always null. This can help reduce lock file conflicts in the lock file but reduces clarity as to when the last update happened and whether the package is in the latest state.
    config - reference is built based on a hash of the package's composer.json and repo config
    auto (used by default) - reference is built basing on the hash like with config, but if the package folder contains a git repository, the HEAD commit's hash is used as reference instead.

{
    "repositories": [
        {
            "type": "path",
            "url": "../../packages/*",
            "options": {
                "reference": "config"
            }
        }
    ]
}

Disabling Packagist.org#

You can disable the default Packagist.org repository by adding this to your composer.json:

{
    "repositories": [
        {
            "packagist.org": false
        }
    ]
}

You can disable Packagist.org globally by using the global config flag:

php composer.phar config -g repo.packagist false

Config#

This chapter will describe the config section of the composer.json schema.
process-timeout#

The timeout in seconds for process executions, defaults to 300 (5mins). The duration processes like git clones can run before Composer assumes they died out. You may need to make this higher if you have a slow connection or huge vendors.

To disable the process timeout on a custom command under scripts, a static helper is available:

{
    "scripts": {
        "test": [
            "Composer\\Config::disableProcessTimeout",
            "phpunit"
        ]
    }
}

allow-plugins#

Defaults to {} which does not allow any plugins to be loaded.

As of Composer 2.2.0, the allow-plugins option adds a layer of security allowing you to restrict which Composer plugins are able to execute code during a Composer run.

When a new plugin is first activated, which is not yet listed in the config option, Composer will print a warning. If you run Composer interactively it will prompt you to decide if you want to execute the plugin or not.

Use this setting to allow only packages you trust to execute code. Set it to an object with package name patterns as keys. The values are true to allow and false to disallow while suppressing further warnings and prompts.

{
    "config": {
        "allow-plugins": {
            "third-party/required-plugin": true,
            "my-organization/*": true,
            "unnecessary/plugin": false
        }
    }
}

You can also set the config option itself to false to disallow all plugins, or true to allow all plugins to run (NOT recommended). For example:

{
    "config": {
        "allow-plugins": false
    }
}

use-include-path#

Defaults to false. If true, the Composer autoloader will also look for classes in the PHP include path.
preferred-install#

Defaults to dist and can be any of source, dist or auto. This option allows you to set the install method Composer will prefer to use. Can optionally be an object with package name patterns for keys for more granular install preferences.

{
    "config": {
        "preferred-install": {
            "my-organization/stable-package": "dist",
            "my-organization/*": "source",
            "partner-organization/*": "auto",
            "*": "dist"
        }
    }
}

    source means Composer will install packages from their source if there is one. This is typically a git clone or equivalent checkout of the version control system the package uses. This is useful if you want to make a bugfix to a project and get a local git clone of the dependency directly.
    auto is the legacy behavior where Composer uses source automatically for dev versions, and dist otherwise.
    dist (the default as of Composer 2.1) means Composer installs from dist, where possible. This is typically a zip file download, which is faster than cloning the entire repository.

    Note: Order matters. More specific patterns should be earlier than more relaxed patterns. When mixing the string notation with the hash configuration in global and package configurations the string notation is translated to a * package pattern.

audit#

Security audit configuration options
ignore#

A list of advisory ids, remote ids or CVE ids that are reported but let the audit command pass.

{
    "config": {
        "audit": {
            "ignore": {
                "CVE-1234": "The affected component is not in use.",
                "GHSA-xx": "The security fix was applied as a patch.",
                "PKSA-yy": "Due to mitigations in place the update can be delayed."
            }
        }
    }
}

or

{
    "config": {
        "audit": {
            "ignore": ["CVE-1234", "GHSA-xx", "PKSA-yy"]
        }
    }
}

abandoned#

Defaults to report in Composer 2.6, and defaults to fail from Composer 2.7 on. Defines whether the audit command reports abandoned packages or not, this has three possible values:

    ignore means the audit command does not consider abandoned packages at all.
    report means abandoned packages are reported as an error but do not cause the command to exit with a non-zero code.
    fail means abandoned packages will cause audits to fail with a non-zero code.

{
    "config": {
        "audit": {
            "abandoned": "report"
        }
    }
}

Since Composer 2.7, the option can be overridden via the COMPOSER_AUDIT_ABANDONED environment variable.

Since Composer 2.8, the option can be overridden via the --abandoned command line option, which overrides both the config value and the environment variable.
use-parent-dir#

When running Composer in a directory where there is no composer.json, if there is one present in a directory above Composer will by default ask you whether you want to use that directory's composer.json instead.

If you always want to answer yes to this prompt, you can set this config value to true. To never be prompted, set it to false. The default is "prompt".

    Note: This config must be set in your global user-wide config for it to work. Use for example php composer.phar config --global use-parent-dir true to set it.

store-auths#

What to do after prompting for authentication, one of: true (always store), false (do not store) and "prompt" (ask every time), defaults to "prompt".
github-protocols#

Defaults to ["https", "ssh", "git"]. A list of protocols to use when cloning from github.com, in priority order. By default git is present but only if secure-http is disabled, as the git protocol is not encrypted. If you want your origin remote push URLs to be using https and not ssh (git@github.com:...), then set the protocol list to be only ["https"] and Composer will stop overwriting the push URL to an ssh URL.
github-oauth#

A list of domain names and oauth keys. For example using {"github.com": "oauthtoken"} as the value of this option will use oauthtoken to access private repositories on github and to circumvent the low IP-based rate limiting of their API. Composer may prompt for credentials when needed, but these can also be manually set. Read more on how to get an OAuth token for GitHub and cli syntax here.
gitlab-domains#

Defaults to ["gitlab.com"]. A list of domains of GitLab servers. This is used if you use the gitlab repository type.
gitlab-oauth#

A list of domain names and oauth keys. For example using {"gitlab.com": "oauthtoken"} as the value of this option will use oauthtoken to access private repositories on gitlab. Please note: If the package is not hosted at gitlab.com the domain names must be also specified with the gitlab-domains option. Further info can also be found here
gitlab-token#

A list of domain names and private tokens. Private token can be either simple string, or array with username and token. For example using {"gitlab.com": "privatetoken"} as the value of this option will use privatetoken to access private repositories on gitlab. Using {"gitlab.com": {"username": "gitlabuser", "token": "privatetoken"}} will use both username and token for gitlab deploy token functionality (https://docs.gitlab.com/ee/user/project/deploy_tokens/) Please note: If the package is not hosted at gitlab.com the domain names must be also specified with the gitlab-domains option. The token must have api or read_api scope. Further info can also be found here
gitlab-protocol#

A protocol to force use of when creating a repository URL for the source value of the package metadata. One of git or http. (https is treated as a synonym for http.) Helpful when working with projects referencing private repositories which will later be cloned in GitLab CI jobs with a GitLab CI_JOB_TOKEN using HTTP basic auth. By default, Composer will generate a git-over-SSH URL for private repositories and HTTP(S) only for public.
disable-tls#

Defaults to false. If set to true all HTTPS URLs will be tried with HTTP instead and no network level encryption is performed. Enabling this is a security risk and is NOT recommended. The better way is to enable the php_openssl extension in php.ini. Enabling this will implicitly disable the secure-http option.
secure-http#

Defaults to true. If set to true only HTTPS URLs are allowed to be downloaded via Composer. If you really absolutely need HTTP access to something then you can disable it, but using Let's Encrypt to get a free SSL certificate is generally a better alternative.
bitbucket-oauth#

A list of domain names and consumers. For example using {"bitbucket.org": {"consumer-key": "myKey", "consumer-secret": "mySecret"}}. Read more here.
cafile#

Location of Certificate Authority file on local filesystem. In PHP 5.6+ you should rather set this via openssl.cafile in php.ini, although PHP 5.6+ should be able to detect your system CA file automatically.
capath#

If cafile is not specified or if the certificate is not found there, the directory pointed to by capath is searched for a suitable certificate. capath must be a correctly hashed certificate directory.
http-basic#

A list of domain names and username/passwords to authenticate against them. For example using {"example.org": {"username": "alice", "password": "foo"}} as the value of this option will let Composer authenticate against example.org. More info can be found here.
bearer#

A list of domain names and tokens to authenticate against them. For example using {"example.org": "foo"} as the value of this option will let Composer authenticate against example.org using an Authorization: Bearer foo header.
platform#

Lets you fake platform packages (PHP and extensions) so that you can emulate a production env or define your target platform in the config. Example: {"php": "7.0.3", "ext-something": "4.0.3"}.

This will make sure that no package requiring more than PHP 7.0.3 can be installed regardless of the actual PHP version you run locally. However it also means the dependencies are not checked correctly anymore, if you run PHP 5.6 it will install fine as it assumes 7.0.3, but then it will fail at runtime. This also means if {"php":"7.4"} is specified; no packages will be used that define 7.4.1 as minimum.

Therefore if you use this it is recommended, and safer, to also run the check-platform-reqs command as part of your deployment strategy.

If a dependency requires some extension that you do not have installed locally you may ignore it instead by passing --ignore-platform-req=ext-foo to update, install or require. In the long run though you should install required extensions as if you ignore one now and a new package you add a month later also requires it, you may introduce issues in production unknowingly.

If you have an extension installed locally but not on production, you may want to artificially hide it from Composer using {"ext-foo": false}.
vendor-dir#

Defaults to vendor. You can install dependencies into a different directory if you want to. $HOME and ~ will be replaced by your home directory's path in vendor-dir and all *-dir options below.
bin-dir#

Defaults to vendor/bin. If a project includes binaries, they will be symlinked into this directory.
data-dir#

Defaults to C:\Users\<user>\AppData\Roaming\Composer on Windows, $XDG_DATA_HOME/composer on unix systems that follow the XDG Base Directory Specifications, and $COMPOSER_HOME on other unix systems. Right now it is only used for storing past composer.phar files to be able to roll back to older versions. See also COMPOSER_HOME.
cache-dir#

Defaults to C:\Users\<user>\AppData\Local\Composer on Windows, /Users/<user>/Library/Caches/composer on macOS, $XDG_CACHE_HOME/composer on unix systems that follow the XDG Base Directory Specifications, and $COMPOSER_HOME/cache on other unix systems. Stores all the caches used by Composer. See also COMPOSER_HOME.
cache-files-dir#

Defaults to $cache-dir/files. Stores the zip archives of packages.
cache-repo-dir#

Defaults to $cache-dir/repo. Stores repository metadata for the composer type and the VCS repos of type svn, fossil, github and bitbucket.
cache-vcs-dir#

Defaults to $cache-dir/vcs. Stores VCS clones for loading VCS repository metadata for the git/hg types and to speed up installs.
cache-files-ttl#

Defaults to 15552000 (6 months). Composer caches all dist (zip, tar, ...) packages that it downloads. Those are purged after six months of being unused by default. This option allows you to tweak this duration (in seconds) or disable it completely by setting it to 0.
cache-files-maxsize#

Defaults to 300MiB. Composer caches all dist (zip, tar, ...) packages that it downloads. When the garbage collection is periodically ran, this is the maximum size the cache will be able to use. Older (less used) files will be removed first until the cache fits.
cache-read-only#

Defaults to false. Whether to use the Composer cache in read-only mode.
bin-compat#

Defaults to auto. Determines the compatibility of the binaries to be installed. If it is auto then Composer only installs .bat proxy files when on Windows or WSL. If set to full then both .bat files for Windows and scripts for Unix-based operating systems will be installed for each binary. This is mainly useful if you run Composer inside a linux VM but still want the .bat proxies available for use in the Windows host OS. If set to proxy Composer will only create bash/Unix-style proxy files and no .bat files even on Windows/WSL.
prepend-autoloader#

Defaults to true. If false, the Composer autoloader will not be prepended to existing autoloaders. This is sometimes required to fix interoperability issues with other autoloaders.
autoloader-suffix#

Defaults to null. When set to a non-empty string, this value will be used as a suffix for the generated Composer autoloader. If set to null, the content-hash value from the composer.lock file will be used if available; otherwise, a random suffix will be generated.
optimize-autoloader#

Defaults to false. If true, always optimize when dumping the autoloader.
sort-packages#

Defaults to false. If true, the require command keeps packages sorted by name in composer.json when adding a new package.
classmap-authoritative#

Defaults to false. If true, the Composer autoloader will only load classes from the classmap. Implies optimize-autoloader.
apcu-autoloader#

Defaults to false. If true, the Composer autoloader will check for APCu and use it to cache found/not-found classes when the extension is enabled.
github-domains#

Defaults to ["github.com"]. A list of domains to use in github mode. This is used for GitHub Enterprise setups.
github-expose-hostname#

Defaults to true. If false, the OAuth tokens created to access the github API will have a date instead of the machine hostname.
use-github-api#

Defaults to true. Similar to the no-api key on a specific repository, setting use-github-api to false will define the global behavior for all GitHub repositories to clone the repository as it would with any other git repository instead of using the GitHub API. But unlike using the git driver directly, Composer will still attempt to use GitHub's zip files.
notify-on-install#

Defaults to true. Composer allows repositories to define a notification URL, so that they get notified whenever a package from that repository is installed. This option allows you to disable that behavior.
discard-changes#

Defaults to false and can be any of true, false or "stash". This option allows you to set the default style of handling dirty updates when in non-interactive mode. true will always discard changes in vendors, while "stash" will try to stash and reapply. Use this for CI servers or deploy scripts if you tend to have modified vendors.
archive-format#

Defaults to tar. Overrides the default format used by the archive command.
archive-dir#

Defaults to .. Default destination for archives created by the archive command.

Example:

{
    "config": {
        "archive-dir": "/home/user/.composer/repo"
    }
}

htaccess-protect#

Defaults to true. If set to false, Composer will not create .htaccess files in the Composer home, cache, and data directories.
lock#

Defaults to true. If set to false, Composer will not create a composer.lock file and will ignore it if one is present.
platform-check#

Defaults to php-only which only checks the PHP version. Set to true to also check the presence of extension. If set to false, Composer will not create and require a platform_check.php file as part of the autoloader bootstrap.
secure-svn-domains#

Defaults to []. Lists domains which should be trusted/marked as using a secure Subversion/SVN transport. By default svn:// protocol is seen as insecure and will throw, but you can set this config option to ["example.org"] to allow using svn URLs on that hostname. This is a better/safer alternative to disabling secure-http altogether.
bump-after-update#

Defaults to false and can be any of true, false, "dev" or "no-dev". If set to true, Composer will run the bump command after running the update command. If set to "dev" or "no-dev" then only the corresponding dependencies will be bumped.
allow-missing-requirements#

Defaults to false. Ignores error during install if there are any missing requirements - the lock file is not up to date with the latest changes in composer.json.

Runtime Composer utilities#

While Composer is mostly used around your project to install its dependencies, there are a few things which are made available to you at runtime.

If you need to rely on some of these in a specific version, you can require the composer-runtime-api package.
Autoload#

The autoloader is the most used one, and is already covered in our basic usage guide. It is available in all Composer versions.
Installed versions#

composer-runtime-api 2.0 introduced a new Composer\InstalledVersions class which offers a few static methods to inspect which versions are currently installed. This is automatically available to your code as long as you include the Composer autoloader.

The main use cases for this class are the following:
Knowing whether package X (or virtual package) is present#

\Composer\InstalledVersions::isInstalled('vendor/package'); // returns bool
\Composer\InstalledVersions::isInstalled('psr/log-implementation'); // returns bool

As of Composer 2.1, you may also check if something was installed via require-dev or not by passing false as second argument:

\Composer\InstalledVersions::isInstalled('vendor/package'); // returns true assuming this package is installed
\Composer\InstalledVersions::isInstalled('vendor/package', false); // returns true if vendor/package is in require, false if in require-dev

Note that this can not be used to check whether platform packages are installed.
Knowing whether package X is installed in version Y#

    Note: To use this, your package must require "composer/semver": "^3.0".

use Composer\Semver\VersionParser;

\Composer\InstalledVersions::satisfies(new VersionParser, 'vendor/package', '2.0.*');
\Composer\InstalledVersions::satisfies(new VersionParser, 'psr/log-implementation', '^1.0');

This will return true if e.g. vendor/package is installed in a version matching 2.0.*, but also if the given package name is replaced or provided by some other package.
Knowing the version of package X#

    Note: This will return null if the package name you ask for is not itself installed but merely provided or replaced by another package. We therefore recommend using satisfies() in library code at least. In application code you have a bit more control and it is less important.

// returns a normalized version (e.g. 1.2.3.0) if vendor/package is installed,
// or null if it is provided/replaced,
// or throws OutOfBoundsException if the package is not installed at all
\Composer\InstalledVersions::getVersion('vendor/package');

// returns the original version (e.g. v1.2.3) if vendor/package is installed,
// or null if it is provided/replaced,
// or throws OutOfBoundsException if the package is not installed at all
\Composer\InstalledVersions::getPrettyVersion('vendor/package');

// returns the package dist or source reference (e.g. a git commit hash) if vendor/package is installed,
// or null if it is provided/replaced,
// or throws OutOfBoundsException if the package is not installed at all
\Composer\InstalledVersions::getReference('vendor/package');

Knowing a package's own installed version#

If you are only interested in getting a package's own version, e.g. in the source of acme/foo you want to know which version acme/foo is currently running to display that to the user, then it is acceptable to use getVersion/getPrettyVersion/getReference.

The warning in the section above does not apply in this case as you are sure the package is present and not being replaced if your code is running.

It is nonetheless a good idea to make sure you handle the null return value as gracefully as possible for safety.

A few other methods are available for more complex usages, please refer to the source/docblocks of the class itself.
Knowing the path in which a package is installed#

The getInstallPath method to retrieve a package's absolute install path.

    Note: The path, while absolute, may contain ../ or symlinks. It is not guaranteed to be equivalent to a realpath() so you should run a realpath on it if that matters to you.

// returns an absolute path to the package installation location if vendor/package is installed,
// or null if it is provided/replaced, or the package is a metapackage
// or throws OutOfBoundsException if the package is not installed at all
\Composer\InstalledVersions::getInstallPath('vendor/package');

    Available as of Composer 2.1 (i.e. composer-runtime-api ^2.1)

Knowing which packages of a given type are installed#

The getInstalledPackagesByType method accepts a package type (e.g. foo-plugin) and lists the packages of that type which are installed. You can then use the methods above to retrieve more information about each package if needed.

This method should alleviate the need for custom installers placing plugins in a specific path instead of leaving them in the vendor dir. You can then find plugins to initialize at runtime via InstalledVersions, including their paths via getInstallPath if needed.

\Composer\InstalledVersions::getInstalledPackagesByType('foo-plugin');

    Available as of Composer 2.1 (i.e. composer-runtime-api ^2.1)

Platform check#

composer-runtime-api 2.0 introduced a new vendor/composer/platform_check.php file, which is included automatically when you include the Composer autoloader.

It verifies that platform requirements (i.e. php and php extensions) are fulfilled by the PHP process currently running. If the requirements are not met, the script prints a warning with the missing requirements and exits with code 104.

To avoid an unexpected white page of death with some obscure PHP extension warning in production, you can run composer check-platform-reqs as part of your deployment/build and if that returns a non-0 code you should abort.

The default value is php-only which only checks the PHP version.

If you for some reason do not want to use this safety check, and would rather risk runtime errors when your code executes, you can disable this by setting the platform-check config option to false.

If you want the check to include verifying the presence of PHP extensions, set the config option to true. ext-* requirements will then be verified but for performance reasons Composer only checks the extension is present, not its exact version.

lib-* requirements are never supported/checked by the platform check feature.
Autoloader path in binaries#

composer-runtime-api 2.2 introduced a new $_composer_autoload_path global variable set when running binaries installed with Composer. Read more about this on the vendor binaries docs.

This is set by the binary proxy and as such is not made available to projects by Composer's vendor/autoload.php, which would be useless as it would point back to itself.
Binary (bin-dir) path in binaries#

composer-runtime-api 2.2.2 introduced a new $_composer_bin_dir global variable set when running binaries installed with Composer. Read more about this on the vendor binaries docs.

This is set by the binary proxy and as such is not made available to projects by Composer's vendor/autoload.php.

Libraries#

This chapter will tell you how to make your library installable through Composer.
Every project is a package#

As soon as you have a composer.json in a directory, that directory is a package. When you add a require to a project, you are making a package that depends on other packages. The only difference between your project and a library is that your project is a package without a name.

In order to make that package installable you need to give it a name. You do this by adding the name property in composer.json:

{
    "name": "acme/hello-world",
    "require": {
        "monolog/monolog": "1.0.*"
    }
}

In this case the project name is acme/hello-world, where acme is the vendor name. Supplying a vendor name is mandatory.

    Note: If you don't know what to use as a vendor name, your GitHub username is usually a good bet. Package names must be lowercase, and the convention is to use dashes for word separation.

Library Versioning#

In the vast majority of cases, you will be maintaining your library using some sort of version control system like git, svn, hg or fossil. In these cases, Composer infers versions from your VCS, and you should not specify a version in your composer.json file. (See the Versions article to learn about how Composer uses VCS branches and tags to resolve version constraints.)

If you are maintaining packages by hand (i.e., without a VCS), you'll need to specify the version explicitly by adding a version value in your composer.json file:

{
    "version": "1.0.0"
}

    Note: When you add a hardcoded version to a VCS, the version will conflict with tag names. Composer will not be able to determine the version number.

VCS Versioning#

Composer uses your VCS's branch and tag features to resolve the version constraints you specify in your require field to specific sets of files. When determining valid available versions, Composer looks at all of your tags and branches and translates their names into an internal list of options that it then matches against the version constraint you provided.

For more on how Composer treats tags and branches and how it resolves package version constraints, read the versions article.
Lock file#

For your library you may commit the composer.lock file if you want to. This can help your team to always test against the same dependency versions. However, this lock file will not have any effect on other projects that depend on it. It only has an effect on the main project.

If you do not want to commit the lock file, and you are using git, add it to the .gitignore.
Publishing to a VCS#

Once you have a VCS repository (version control system, e.g. git) containing a composer.json file, your library is already composer-installable. In this example we will publish the acme/hello-world library on GitHub under github.com/username/hello-world.

Now, to test installing the acme/hello-world package, we create a new project locally. We will call it acme/blog. This blog will depend on acme/hello-world, which in turn depends on monolog/monolog. We can accomplish this by creating a new blog directory somewhere, containing a composer.json:

{
    "name": "acme/blog",
    "require": {
        "acme/hello-world": "dev-master"
    }
}

The name is not needed in this case, since we don't want to publish the blog as a library. It is added here to clarify which composer.json is being described.

Now we need to tell the blog app where to find the hello-world dependency. We do this by adding a package repository specification to the blog's composer.json:

{
    "name": "acme/blog",
    "repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/username/hello-world"
        }
    ],
    "require": {
        "acme/hello-world": "dev-master"
    }
}

For more details on how package repositories work and what other types are available, see Repositories.

That's all. You can now install the dependencies by running Composer's install command!

Recap: Any git/svn/hg/fossil repository containing a composer.json can be added to your project by specifying the package repository and declaring the dependency in the require field.
Publishing to packagist#

Alright, so now you can publish packages. But specifying the VCS repository every time is cumbersome. You don't want to force all your users to do that.

The other thing that you may have noticed is that we did not specify a package repository for monolog/monolog. How did that work? The answer is Packagist.

Packagist is the main package repository for Composer, and it is enabled by default. Anything that is published on Packagist is available automatically through Composer. Since Monolog is on Packagist, we can depend on it without having to specify any additional repositories.

If we wanted to share hello-world with the world, we would publish it on Packagist as well.

You visit Packagist and hit the "Submit" button. This will prompt you to sign up if you haven't already, and then allows you to submit the URL to your VCS repository, at which point Packagist will start crawling it. Once it is done, your package will be available to anyone!
Light-weight distribution packages#

Some useless information like the .github directory, or large examples, test data, etc. should typically not be included in distributed packages.

The .gitattributes file is a git specific file like .gitignore also living at the root directory of your library. It overrides local and global configuration (.git/config and ~/.gitconfig respectively) when present and tracked by git.

Use .gitattributes to prevent unwanted files from bloating the zip distribution packages.

// .gitattributes
/demo export-ignore
phpunit.xml.dist export-ignore
/.github/ export-ignore

Test it by inspecting the zip file generated manually:

git archive branchName --format zip -o file.zip

    Note: Files would be still tracked by git just not included in the zip distribution. This only works for packages installed from dist (i.e. tagged releases) coming from GitHub, GitLab or Bitbucket.
