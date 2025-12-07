# Maven

Maven is a powerful build automation tool primarily used for Java projects.It simplifies the process of building, managing dependencies, and documenting your project.
Maven uses a Project Object Model (POM) file to describe the project’s configuration,dependencies, build process.

Maven is a project management tool which encompasses a project object model, a set of standards, a project lifecycle, a dependency management system, and logic for executing plugin goals at defined phases in a lifecycle. When you use Maven, you describe your project using a well-defined project object model, Maven can then apply cross-cutting logic from a set of shared (or custom) plugins.

Maven is an attempt to apply patterns to a project's build infrastructure in order to promote comprehension and productivity by providing a clear path in the use of best practices. Maven is essentially a project management and comprehension tool and as such provides a way to help with managing:

1. Builds
2. Documentation
3. Reporting
4. Dependencies
5. SCMs
6. Releases
7. Distribution

## Why Maven

1. Dependency Management: Automatically handles project dependencies, ensuring your project has all the required libraries.
2. Build Automation: Simplifies the build process, making it easy to compile, test, package, and deploy your application.
3. Project Structure: Enforces a standard project structure, making it easier for developers to understand and contribute to the project.
4. Integration with IDEs: Seamlessly integrates with popular IDEs like IntelliJ IDEA, Eclipse, and NetBeans.

## Maven Installation

`Verify Java installation`:- Maven works with all certified java cvompatible development kits, and a few non-certified implementations of java.
Maven’s download measures in at roughly 1.5 MiB, it has attained such a slim download size because the core of Maven has been designed to retrieve plugins and dependencies from a remote repository on-demand. When you start using Maven, it will start to download plugins to a local repository.

## Maven Structure and Components

Maven provides default behaviours for projects.Without customization,source code is assumed to be in `${basedir}/src/main/java` and resources are assumed to be in `${basedir}/src/main/resources`.
Test are assumed to be in `${basedir}/src/test` and a project is assumed to produce a JAR file.
Maven assumes that you want the compile byte code to `${basedir}/target/classes` and then create a distributable JAR file in `${basedir}/target`.
Maven’s adoption of convention over configuration goes farther than just simple directory locations, Maven’s core plugins apply a common set of conventions for compiling source code, packaging distributions, generating web sites, and many other processes.

```java
my-app/
  src/
    main/
        java/ //Application/Library sources
        resources/ //Configuration file and other resources
        webapp/ //Web application resources(for WAR packaging)
    test/
        java/
        resources/
pom.xml //Project Object Model(POM) file
target/ //Output directory for built artifiacts
```

## Project Object Model

The POM is where a project’s identity and structure are declared, builds are configured, and projects are related to one another. The presence of a pom.xml file defines a Maven project.

- POM:-
    1. POM Relationships:-
        - Coordinate:-
            1. groupId
            2. artifactId
            3. version
        - Multi-Module
        - Inheritance
        - Dependencies
    2. General Project Information:-
        - General
        - Contributors
        - Licences
    3. Build Settings:-
        - build:-
            1. directories
            2. extensions
            3. resources
            4. plugins
        - reporting
    4. Build Environment:-
        - Environment information
        - Maven Environment:-
            1. Profiles.

The POM contains four categories of description and configuration:

- `General project information`:- This includes a project's name,the URL for a project,the sponsoring organization, and a list of developers and contributors along with license for a project.
- `Build settings`:- we customize the behavior of the default Maven build. We can change the location of source and tests, we can add new plugins, we can attach plugin goals to the lifecycle, and we can customize the site generation parameters.
- `Build Environment`:- The build environment consists of profiles that can be activated for use in different environments. For example, during development you may want to deploy to a development server, whereas in production you want to deploy to a production server. The build environment customizes the build settings for specific environments and is often supplemented by a custom settings.xml in ~/.m2.
- `POM relationships`:- A project rarely stands alone; it depends on other projects, inherits POM settings from parent projects, defines its own coordinates, and may include submodules.

**The Super POM**:- All Maven project POMs extend the Super POM, which defines a set of defaults shared by all projects. This Super POM is a part of the Maven installation. Depending on the Maven version it can be found in the maven-x.y.z-uber.jar or maven-model-builder-xy.z.jar file in ${M2_HOME}/lib. If you look in this JAR file, you will find a file named pom-4.0.0.xml under the org.apache.maven.model package.
It is also published on the Maven reference site that is available for each version of Maven separately and e.g. for Maven 3.1.1 it can be found with the Maven Model Builder documentation.

```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <name>Maven Default Project</name>

    <repositories>
        <repository>
            <id>central</id>
            <name>Maven Repository Switchboard</name>
            <layout>default</layout>
            <url>http://repo1.maven.org/maven2</url>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </repository>
    </repositories>

    <pluginRepositories>
        <pluginRepository>
            <id>central</id>
                <name>Maven Plugin Repository</name>
                <url>http://repo1.maven.org/maven2</url>
                <layout>default</layout>
                <snapshots>
                    <enabled>false</enabled>
                </snapshots>
                <releases>
                    <updatePolicy>never</updatePolicy>
                </releases>
        </pluginRepository>
    </pluginRepositories>

    <build>
        <directory>${project.basedir}/target</directory>
        <outputDirectory>
            ${project.build.directory}/classes
        </outputDirectory>
        <finalName>${project.artifactId}-${project.version}</finalName>
        <testOutputDirectory>
            ${project.build.directory}/test-classes
        </testOutputDirectory>
        <sourceDirectory>
            ${project.basedir}/src/main/java
        </sourceDirectory>
        <scriptSourceDirectory>src/main/scripts</scriptSourceDirectory>
        <testSourceDirectory>
            ${project.basedir}/src/test/java
        </testSourceDirectory>
        <resources>
            <resource>
                <directory>${project.basedir}/src/main/resources</directory>
            </resource>
        </resources>
        <testResources>
            <testResource>
                <directory>${project.basedir}/src/test/resources</directory>
            </testResource>
        </testResources>

        <pluginManagement>
            <plugins>
                <plugin>
                    <artifactId>maven-antrun-plugin</artifactId>
                    <version>1.3</version>
                </plugin>
                <plugin>
                    <artifactId>maven-assembly-plugin</artifactId>
                    <version>2.2-beta-2</version>
                </plugin>
                <plugin>
                    <artifactId>maven-clean-plugin</artifactId>
                    <version>2.2</version>
                </plugin>
                <plugin>
                    <artifactId>maven-compiler-plugin</artifactId>
                    <version>2.0.2</version>
                </plugin>
                <plugin>
                    <artifactId>maven-dependency-plugin</artifactId>
                    <version>2.0</version>
                </plugin>
                <plugin>
                    <artifactId>maven-deploy-plugin</artifactId>
                    <version>2.4</version>
                </plugin>
                <plugin>
                    <artifactId>maven-ear-plugin</artifactId>
                    <version>2.3.1</version>
                </plugin>
                <plugin>
                    <artifactId>maven-ejb-plugin</artifactId>
                    <version>2.1</version>
                </plugin>
                <plugin>
                    <artifactId>maven-install-plugin</artifactId>
                    <version>2.2</version>
                </plugin>
                <plugin>
                    <artifactId>maven-jar-plugin</artifactId>
                    <version>2.2</version>
                </plugin>
                <plugin>
                    <artifactId>maven-javadoc-plugin</artifactId>
                    <version>2.5</version>
                </plugin>
                <plugin>
                    <artifactId>maven-plugin-plugin</artifactId>
                    <version>2.4.3</version>
                </plugin>
                <plugin>
                    <artifactId>maven-rar-plugin</artifactId>
                    <version>2.2</version>
                </plugin>
                <plugin>
                    <artifactId>maven-release-plugin</artifactId>
                    <version>2.0-beta-8</version>
                </plugin>
                <plugin>
                    <artifactId>maven-resources-plugin</artifactId>
                    <version>2.3</version>
                </plugin>
                <plugin>
                    <artifactId>maven-site-plugin</artifactId>
                    <version>2.0-beta-7</version>
                </plugin>
                <plugin>
                    <artifactId>maven-source-plugin</artifactId>
                    <version>2.0.4</version>
                </plugin>
                <plugin>
                    <artifactId>maven-surefire-plugin</artifactId>
                    <version>2.4.3</version>
                </plugin>
                <plugin>
                    <artifactId>maven-war-plugin</artifactId>
                    <version>2.1-alpha-2</version>
                </plugin>
            </plugins>
        </pluginManagement>

        <reporting>
            <outputDirectory>target/site</outputDirectory>
        </reporting>
</project>
```

- **The Super POM** defines some standard configuration variables that are inherited by all projects.
    1. The default Super POM defines a single remote Maven repository with an ID of central. This is the Central Repository that all Maven clients are configured to read from by default. This setting can be overridden by a custom settings.xml file. Note that the default Super POM has disabled snapshot artifacts on the Central Repository. If you need to use a snapshot repository, you will need to customize repository settings in your pom.xml or in your settings.xml.
    2. The Central Repository also contains Maven plugins. The default plugin repository is the central Maven repository. Snapshots are disabled, and the update policy is set to “never,” which means that Maven will never automatically update a plugin if a new version is released.
    3. The build element sets the default values for directories in the Maven Standard Directory layout.
    4. Starting in Maven 2.0.9, default versions of core plugins have been provided in the Super POM. This was done to provide some stability for users that are not specifying versions in their POMs. In newer versions some of this has been migrated out of the file. However you can still see the versions that will be used in your project using mvn help:effective-pom.

All Maven POMs inherit defaults from the Super POM.

- **The Simplest POM**:-

```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.sonatype.mavenbook.ch08</groupId>
    <artifactId>simplest-project</artifactId>
    <version>1</version>
</project>
```

Such a simple POM would be more than adequate for a simple project—e.g., a Java library that produces a JAR file. It isn’t related to any other projects, it has no dependencies, and it lacks basic information such as a name and a URL. If you were to create this file and then create the subdirectory src/main/java with some source code, running mvn package would produce a JAR in target/simple-project-1.jar.

- **The Effective POM**:- Executing the effective-pom goal should print out an XML document capturing the merge between the Super POM and the POM from The Simplest POM.

```sh
mvn help:effective-pom
```

- **Real POMs**:-The POM is always in a file named pom.xml in the base directory of a Maven project. This XML document can start with the XML declaration, or you can choose to omit it. All values in a POM are captured as XML elements.
`POM (Project Object Model) File`:- The pom.xml is the heart of a Maven project. It contains details like project information, dependencies, plugins, build profiles, etc.Key sections include:-
    1. GroupId: Identifies the project uniquely across all projects (typically your organization).
    2. ArtifactId: The name of the project.
    3. Version: The project’s version.
    4. Dependencies: Specifies the external libraries required by the project.
- Maven Lifecycle:- Maven defines a standard build lifecycle consisting of phases like:-
    1. Validate: Validate the project is correct and all necessary information is available.
    2. Compile: Compile the source code.
    3. Test: Run unit tests.
    4. Package: Package the compiled code into a distributable format (e.g., JAR,WAR).
    5. Install: Install the package into the local repository.
    6. Deploy: Deploy the package to a remote repository for sharing with other developers.
- Maven Plugins:- Maven plugins execute during the build lifecycle. Common plugins include:
    1. maven-compiler-plugin: Compiles Java code.
    2. maven-surefire-plugin: Runs unit tests.
    3. maven-jar-plugin: Packages the project as a JAR file.
pom.xml contains the Project Object Model (POM) for this project. The POM is the basic unit of work in Maven.This is important to remember because Maven is inherently project-centric in that everything revolves around the notion of a project.

POM contains every important piece of information about your project and is essentially one-stop-shopping for finding anything related to your project.

1. project- This is the top-level element in all Maven pom.xml files.
2. modelVersion This element indicates what version of the object model this POM is using. The version of the model itself changes very infrequently but it is mandatory in order to ensure stability of use if and when the Maven developers deem it necessary to change the model.
3. groupId This element indicates the unique identifier of the organization or group that created the project. The groupId is one of the key identifiers of a project and is typically based on the fully qualified domain name of your organization. For example org.apache.maven.plugins is the designated groupId for all Maven plugins.
4. artifactId This element indicates the unique base name of the primary artifact being generated by this project.The primary artifact for a project is typically a JAR file. Secondary artifacts like source bundles also use the artifactId as part of their final name. A typical artifact produced by Maven would have the form <artifactId>-<version>.<extension> (for example, myapp-1.0.jar ).
5. version This element indicates the version of the artifact generated by the project. Maven goes a long way to help you with version management and you will often see the SNAPSHOT designator in a version, which indicates that a project is in a state of development. We will discuss the use of snapshots (./index.html#what-is-a-snapshot-version) and how they work further on in this guide.
6. name This element indicates the display name used for the project. This is often used in Maven's generated documentation.
7. url This element indicates where the project's site can be found. This is often used in Maven's generated documentation.
8. properties This element contains value placeholders accessible anywhere within a POM.
9. dependencies This element's children list dependencies (/pom.html#dependencies). The cornerstone of the POM.
10. build This element handles things like declaring your project's directory structure and managing plugins.

The pom.xml file is divided into several key sections:

1. Model Version: Specifies the POM model version.
2. GroupId, ArtifactId,Version: Unique identifiers for the project.
3. Properties: Defines custom properties like Java version.
4. Dependencies: Lists the libraries required by the project.
5. Build: Contains plugins that define the build process.
6. Repositories: Specifies locations from which Maven should download dependencies.
7. Profiles: Allows different build configurations for different environments (e.g., development, production).


`Project Versions` - A project’s version number is used to group and order releases. Maven versions contain the following parts: major version, minor version, incremental version, and qualifier. In a version, these parts correspond to the following format:

<major version>.<minor version>.<incremental version>-<qualifier>

The qualifier exists to capture milestone builds: alpha and beta releases, and the qualifier is separated from the major, minor, and incremental versions by a hyphen.

Version Build Numbers - Maven is supposed to treat the number after the qualifier as a build number. In other words, the qualifier should be "alpha", and the build number should be 2. Even though Maven has been designed to separate the build number from the qualifier, this parsing is currently broken. As a result, "alpha-2" and "alpha-10" are compared using a String comparison, and "alpha-10" comes before "alpha-2" alphabetically. To get around this limitation, you will need to left-pad your qualified build numbers. If you use "alpha-02" and "alpha-10" this problem will go away, and it will continue to work once Maven properly parses the version build number.

SNAPSHOT Versions - Maven versions can contain a string literal to signify that a project is currently under active development. If a version contains the string “-SNAPSHOT,” then Maven will expand this token to a date and time value converted to UTC (Coordinated Universal Time) when you install or release this component.For example, if your project has a version of “1.0-SNAPSHOT” and you deploy this project’s artifacts to a Maven repository, Maven would expand this version to “1.0-20080207-230803-1” if you were to deploy a release at 11:08 PM on February 7th,2008 UTC. In other words, when you deploy a snapshot, you are not making a release of a software component; you are releasing a snapshot of a component at a specific time.

As a default setting, Maven will not check for SNAPSHOT releases on remote repositories. To depend on SNAPSHOT releases, users must explicitly enable the ability to download snapshots using a repository or pluginRepository element in the POM.
When releasing a project, you should resolve all dependencies on SNAPSHOT versions to dependencies on released versions. If a project depends on a SNAPSHOT, it is not stable as the dependencies may change over time.
Artifacts published to non-snapshot Maven repositories such as http://repo1.maven.org/maven2 cannot depend on SNAPSHOT versions, as Maven’s Super POM has snapshot’s disabled from the Central repository. SNAPSHOT versions are for development only.

`Project Dependencies`:- Maven can manage both internal and external dependencies. An external dependency for a Java project might be a library such as Plexus, the Spring Framework, or Log4J. An internal dependency is illustrated by a web application project depending on another project that contains service classes, model objects, or persistence logic.

```xml
<dependencies>
    <dependency>
        <groupId>org.codehaus.xfire</groupId>
        <artifactId>xfire-java5</artifactId>
        <version>1.2.5</version>
    </dependency>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>3.8.1</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>servlet-api</artifactId>
        <version>2.4</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

The first dependency is a compile dependency on the XFire SOAP library from Codehaus. You would use this type of dependency if your project depended on this library for compilation, testing, and during execution. The second dependency is a test-scoped dependency on JUnit. You would use a test-scoped dependency when you need to reference this library only during testing. The last dependency in Project Dependencies is a dependency on the Servlet 2.4 API. The last dependency is scoped as a provided dependency. You would use a provided scope when the application you are developing needs a library for compilation and testing, but this library is supplied by a container at runtime

Dependency Scope:- Scope controls which dependencies are available in which classpath, and which dependencies are included with an application.

1. compile - is the default scope; all dependencies are compile-scoped if a scope is not supplied. compile dependencies are available in all classpaths, and they are packaged.
2. provided dependencies - are used when you expect the JDK or a container to provide them. For example, if you were developing a web application, you would need the Servlet API available on the compile classpath to compile a servlet, but you wouldn’t want to include the Servlet API in the packaged WAR; the Servlet API JAR is supplied by your application server or servlet container. provided dependencies are available on the compilation classpath (not runtime). They are not transitive, nor are they packaged.
3. runtime dependencies - are required to execute and test the system, but they are not required for compilation. For example, you may need a JDBC API JAR at compile time and the JDBC driver implementation only at runtime.
4. test-scoped dependencies - are not required during the normal operation of an application, and they are available only during test compilation and execution phases.
5. The system scope - is similar to provided except that you have to provide an explicit path to the JAR on the local file system. This is intended to allow compilation against native objects that may be part of the system libraries. The artifact is assumed to always be available and is not looked up in a repository.If you declare the scope to be system, you must also provide the systemPath element. Note that this scope is not recommended (you should always try to reference dependencies in a public or custom Maven repository).

Dependency Version Ranges - You can specify a range of versions that would satisfy a given dependency. For example, you can specify that your project depends on version 3.8 or greater of JUnit, or anything between versions 1.2.10 and 1.2.14 of JUnit. You do this by surrounding one or more version numbers with the following characters:
- (, ) - Exclusive quantifiers
- [, ] - Inclusive quantifiers

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>[3.8,4.0)</version>
    <scope>test</scope>
</dependency>
```

Once you’ve adopted Maven at your super complex enterprise and you have two hundred and twenty inter-related Maven projects, you are going to start wondering if there is a better way to get a handle on dependency versions.
If every single project that uses a dependency like the MySQL Java connector needs to independently list the version number of the dependency, you are going to run into problems when you need to upgrade to a new version.Because the version numbers are distributed throughout your project tree, you are going to have to manually edit each of the pom.xml files that reference a dependency to make sure that you are changing the version number everywhere. Even with find, xargs, and awk, you are still running the risk of missing a single POM.
Luckily, Maven provides a way for you to consolidate dependency version numbers in the dependencyManagement element. You’ll usually see the dependencyManagement element in a top-level parent POM for an organization or project. Using the `dependencyManagement` element in a pom.xml allows you to reference a dependency in a child project without having to explicitly list the version. Maven will walk up the parent-child hierarchy until it finds a project with a dependencyManagement element, it will then use the version specified in this dependencyManagement element.

```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.sonatype.mavenbook</groupId>
    <artifactId>a-parent</artifactId>
    <version>1.0.0</version>
    ...
    <dependencyManagement>
      <dependencies>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.2</version>
            <scope>runtime</scope>
        </dependency>
     <dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
    </dependencies>
</project>
```

Dependency management in a top-level POM is different from just defining a dependency on a widely shared parent POM. For starters, all dependencies are inherited.
Instead of adding in unnecessary dependencies, using dependencyManagement allows you to consolidate and centralize the management of dependency versions without adding dependencies which are inherited by all children. In other words, the dependencyManagement element is equivalent to an environment variable which allows you to declare a dependency anywhere below a project without specifying a version number.

`Coordinates`:-  define a unique location for a project. Projects are related to one another using Maven Coordinates.
project-a doesn’t just depend on project-b; a project with a groupId, artifactId, and version depends on another project with a groupId, artifactId, and version. To review, a Maven Coordinate is made up of three components:

1. groupId - A groupId groups a set of related artifacts. Group identifiers generally resemble a Java package name. For example, the groupId org.apache.maven is the base groupId for all artifacts produced by the Apache Maven project.
2. artifactId - The artifactId is the project’s main identifier. When you generate an artifact, this artifact is going to be named with the artifactId. When you refer to a project, you are going to refer to it using the artifactId. The artifactId, groupId combination must be unique. In other words, you can’t have two separate projects with the same artifactId and groupId; artifactId s are unique within a particular groupId.
3. version - When an artifact is released, it is released with a version number. This version number is a numeric identifier such as "1.0", "1.1.1", or "1.1.2-alpha-01". You can also use what is known as a snapshot version. A snapshot version is a version for a component which is under development, snapshot version numbers always end in SNAPSHOT; for example, "1.0-SNAPSHOT", "1.1.1-SNAPSHOT", and "1-SNAPSHOT".
4. classifier - You would use a classifier if you were releasing the same code but needed to produce two separate artifacts for technical reasons. For example, if you wanted to build two separate artifacts of a JAR, one compiled with the Java 1.4 compiler and another compiled with the Java 6 compiler, you might use the classifier to produce two separate JAR artifacts under the same groupId:artifactId:version combination. If your project uses native extensions, you might use the classifier to produce an artifact for each target platform. Classifiers are commonly used to package up an artifact’s sources, JavaDocs or binary assemblies.


Maven will need to download all the plugins and related dependencies it needs to fulfill the command.

## The Build Lifecycle

In Maven the "verbs" are goals packaged in Maven plugins which are tied to a phases in a build lifecycle. A Maven lifecycle consists of a sequence of named phases:
prepare-resources, compile, package, and install among other. There is phase that captures compilation and a phase that captures packaging. There are pre- and post- phases which can be used to register goals which must run prior to compilation, or tasks which must be run after a particular phase. When you tell Maven to build a project, you are telling Maven to step through a defined sequence of phases and execute any goals which may have been registered with each phase.

A build lifecycle is an organized sequence of phases that exist to give order to a set of goals. Those goals are chosen and bound by the packaging type of the project being acted upon. There are three standard lifecycles in Maven: clean, default (sometimes called build) and site.

`Clean Lifecycle (clean)`:- Running mvn clean invokes the clean lifecycle which consists of three lifecycle phases:
1. pre-clean
2. clean
3. post-clean

The interesting phase in the clean lifecycle is the clean phase. The Clean plugin’s clean goal (clean:clean) is bound to the clean phase in the clean lifecycle. The clean:clean goal deletes the output of a build by deleting the build directory. If you haven’t customized the location of the build directory it will be the `${basedir}/target` directory as defined by the Super POM.
When you execute the clean:clean goal you do not do so by executing the goal directly with mvn clean:clean, you do so by executing the clean phase of the clean lifecycle. Executing the clean phase gives Maven an opportunity to execute any other goals which may be bound to the pre-clean phase.
Simply running the clean:clean goal will not execute the lifecycle at all, but specifying the clean phase will use the clean lifecycle and advance through the three lifecycle phases until it reaches the clean phase.


`Default Lifecycle (default)`:- It is a general model of a build process for a software application. The first phase is validate and the last phase is deploy.
1. validate - Validate the project is correct and all necessary information is available to complete a build.
2. generate-sources - Generate any source code for inclusion in compilation.
3. process-sources - Process the source code, for example to filter any values.
4. generate-resources - Generate resources for inclusion in the package.
5. process-resources - Copy and process the resources into the destination directory, ready for packaging.
6. compile - Compile the source code of the project.
7. process-classes - Post-process the generated files from compilation, for example to do bytecode enhancement on Java classes.
8. generate-test-sources - Generate any test source code for inclusion in compilation.
9. process-test-sources - Process the test source code, for example to filter any values.
10. generate-test-resources - Create resources for testing.
11. process-test-resources - Copy and process the resources into the test destination directory.
12. test-compile - Compile the test source code into the test destination directory.
13. test - Run tests using a suitable unit testing framework.These tests should not require the code be packaged or deployed.
14. prepare-package - Perform any operations necessary to prepare a package before the actual packaging. This often results in an unpacked, processed version of the package (coming in Maven 2.1+).
15. package - Take the compiled code and package it in its distributable format, such as a JAR, WAR, or EAR.
16. pre-integration-test - Perform actions required before integration tests are executed. This may involve things such as setting up the required environment.
17. integration-test - Process and deploy the package if necessary into an environment where integration tests can be run.
18. post-integration-test - Perform actions required after integration tests have been executed. This may include cleaning up the environment.
19. verify - Run any checks to verify the package is valid and meets quality criteria.
20. install - Install the package into the local repository, for use as a dependency in other projects locally.
21. deploy - Copies the final package to the remote repository for sharing with other developers and projects (usually only relevant during a formal release).


`Site Lifecycle (site)`:- Maven does more than build software artifacts from project, it can also generate project documentation and reports about the project, or a collection of projects. Project documentation and site generation have a dedicated lifecycle which contains four phases:
1. pre-site
2. site
3. post-site
4. site-deploy

The default goals bound to the site lifecycle is:
1. site - site:site
2. site-deploy -site:deploy

The packaging type does not usually alter this lifecycle since packaging types are concerned primarily with artifact creation, not with the type of site generated. The Site plugin kicks off the execution of Doxia document generation and other report generation plugins. You can generate a site from a Maven project by running the following command:

```sh
mvn site
```

## Maven Lifecycle

Maven defines a standard build lifecycle consisting of phases like:

1. Validate: Validate the project is correct and all necessary information is available.
2. Compile: Compile the source code.
3. Test: Run unit tests.
4. Package: Package the compiled code into a distributable format (e.g., JAR,WAR).
5. Install: Install the package into the local repository.
6. Deploy: Deploy the package to a remote repository for sharing with other developers.

## Maven Plugins

Maven plugins execute during the build lifecycle. Common plugins include:

1. maven-compiler-plugin: Compiles Java code.
2. maven-surefire-plugin: Runs unit tests.
3. maven-jar-plugin: Packages the project as a JAR file.

## Dependencies Management

Maven manages project dependencies using a hierarchical approach:

- `Direct Dependencies`: Defined in the dependencies section of the POM file.
- `Transitive Dependencies`: Dependencies of your dependencies are automatically included.
- `Dependency Scopes`: Define the visibility and availability of dependencies, such as compile, test, provided, and runtime.

## How Maven Works

1. Reading POM: Maven starts by reading the pom.xml.
2. Dependency Resolution: Maven resolves the dependencies specified in the POM file by downloading them from the specified repositories.
3. Build Execution: Maven executes the build phases in order, executing the corresponding plugins.
4. Lifecycle Phases: Maven follows the lifecycle phases to validate, compile, test, package, and deploy the project.

## Maven Archetypes

An archetype is a template for a Maven project which is used by the Maven Archetype plugin to create new projects.
Archetypes are useful for open source projects such as Apache Wicket or Apache Cocoon which want to present end-users with a set of baseline projects that can be used as a foundation for new applications. Archetypes can also be useful within an organization that wants to encourage standards across a series of similar and related projects. If you work in an organization with a large team of developers who all need to create projects which follow a similar structure, you can publish an archetype that can be used by all other members of the development team. You can create a new project from an archetype using the Maven Archetype plugin from the command line or by using the project creation wizard in the m2eclipse plugin.

You can use an archetype by invoking the generate goal of the Archetype plugin via the command-line or with m2eclipse.

`Using an Archetype from the Command Line`:- To create our first Maven project we are going to use Maven's archetype mechanism. An archetype is defined as an original pattern or model from which all other things of the same kind are made. In Maven, an archetype is a template of a project which is combined with some user input to produce a working Maven project that has been tailored to the user's requirements.

The following command line can be used to generate a project from the quickstart archetype.

```bash
mvn -B archetype:generate \
        -DgroupId=com.mycompany.app \
        -DartifactId=my-app \
        -Dversion=1.0-SNAPSHOT \
        -DpackageName=org.sonatype.mavenbook \
        -DarchetypeArtifactId=maven-archetype-quickstart \
        -DarchetypeVersion=1.4
```

Once you have executed this command, you will notice a few things have happened. First, you will notice that a directory named my-app has been created for the new project, and this directory contains a file named pom.xml that should look like this:

```xml
 <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

<modelVersion>4.0.0</modelVersion>
<groupId>com.kipcollo</groupId>
<artifactId>my-app</artifactId>
<version>0.0.1-SNAPSHOT</version>

<name>my-app</name>
<!-- FIXME change it to the project's website -->
<url>http://www.example.com</url>

<properties>
<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
<maven.compiler.source>1.7</maven.compiler.source>
<maven.compiler.target>1.7</maven.compiler.target>
</properties>

<dependencies>
<dependency>
<groupId>junit</groupId>
<artifactId>junit</artifactId>
<version>4.11</version>
<scope>test</scope>
</dependency>
</dependencies>

<build>
<pluginManagement><!-- lock down plugins versions to avoid using Maven defaults(may be moved to parent pom) -->
... lots of helpful plugins
</pluginManagement>
</build>
 </project>
```

`Using the Interactive generate Goal`:- The simplest way to use the Maven Archetype plugin to generate a new Maven project from an archetype is to run the archetype:generate goal in interactive mode. When interactiveMode is set to true, the generate goal will present you with a list of archetypes and prompt you to select an archetype and supply the necessary identifiers. Since the default value of the parameter interactiveMode is true, all you have to do to generate a new Maven project is run mvn archetype:generate.

```sh
mvn archetype:generate
```

The first thing that the archetype:generate goal does in interactive mode is print out a list of archetypes that it is aware of. The Maven Archetype plugin ships with an archetype catalog which includes a reference to all of the standard, simple Maven archetypes (10-18). The plugin’s archetype catalog also contains a number of references to compelling third-party archetypes such as archetypes which can be used to create AppFuse projects, Confluence and JIRA plugins, Wicket applications, Scala applications, and Groovy projects.

Once you select an archetype, the Maven Archetype plugin downloads the archetype, and then asks you to supply the following values for your new project:
- groupId
- artifactId
- version
- package

Once this interactive portion of the archetype:generate goal execution is finished, the Maven Archetype plugin will generate the project in a directory named after the artifactId you supplied.

**Available Archetypes**:- As more and more projects adopt Maven, more and more artifacts are being published by projects as a way to provide users with a quick way of creating projects from existing templates.

- `Common Maven Archetypes`:- Some of the most straightforward Maven archetypes are contained in the org.apache.maven.archetypes groupId. Most of the basic archetypes under org.apache.maven.archetypes are very basic templates that include few options.You’ll use them only to provide the most basic features that distinguish a Maven project from a non-Maven project.
The following archetypes can be found in the groupId org.apache.maven.archetypes:
1. maven-archetype-quickstart - The quickstart archetype is a simple project with JAR packaging and a single dependency on JUnit. After generating a project with the quickstart archetype, you will have a single class named App in the default package with a main() method that prints "Hello World!" to standard output. You will also have a single JUnit test class named AppTest with a testApp() method with a trivial unit test.
2. maven-archetype-webapp - This archetype creates a simple project with WAR packaging and a single dependency on JUnit. ${basedir}/src/main/webapp contains a simple shell of a web application: an index.jsp page and the simplest possible web.xml file. Even though the archetype includes a dependency on JUnit, this archetype does not create any unit tests.
3. maven-archetype-mojo - This archetype creates a simple project with maven-plugin packaging and a single mojo class named MyMojo in the project’s default package. The MyMojo class contains a touch goal which is bound to the process-resources phase, it creates a file named touch.txt in the target/ directory of the new project when it is executed. The new project will have a dependency on maven-plugin-api and JUnit.


## Maven Wrappers

mvn wrapper creates Maven Wrapper files so a project can build with a fixed Maven version without requiring Maven installed on the system.

```bash
mvn -N io.takari:maven:wrapper
```

Generated files:

mvnw
mvnw.cmd
.mvn/wrapper/maven-wrapper.jar
.mvn/wrapper/maven-wrapper.properties

Use wrapper instead of system Maven:

```bash
./mvnw clean install
```

This locks the Maven version and stabilizes builds across machines.
