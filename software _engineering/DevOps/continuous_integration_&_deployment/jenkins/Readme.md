# Jenkins

Jenkins is a self-contained, open-source automation server which can be used to automate all sorts of tasks related to building, testing and deploying software.i.e Continuous Intergration, Continuous Delivery,Continuus Testing and Continuous Deployment.
Jenkins is a Continuous Integration/Continuous Delivery or Deployment (CI/CD)tool in DevOps. Jenkins and its plugins is developed in the “Java” language. It implements the CI/CD workflows using pipelines or automation.Formerly known as Hudson, it was renamed after Oracle bought Hudson and decided to develop it as the proprietary software. Jenkins remained under the MIT license and is highly valued for its simplicity, flexibility, and versatility

Can be installed through native system packages, Docker or standalone by any machine running Java Runtime Environment.

Jenkins is developed in the Java language. It implements the CI/CD workflows using pipelines or automation.
Jenkins works on Master-Slave architecture. This means you have to set up two nodes named Master & Slave. On the Master node, you will configure Jenkins with Java, while on Slave, you have to install Java only.

## Installation

*Docker*:-

```sh
docker run -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts
```


## Components

`Jenkin job(Project)` - Contains a unique name,description,parameters,build steps and post-build actions.A user-configured description of the work that Jenkins will manage.
`Jenkins parameters` can be anything: environment variables, interactive values, pre-defined values, links, triggers, and so on. Their primary purpose is to assist the builds. They are also responsible for triggering pre-build activities and post-build activities.
A `Jenkins build` can be anything from a simple Windows batch command to a complex Perl script. The range is extensive, which include Shell, Perl, Ruby, and Python scripts or even Maven and Ant builds.
There can be number of build steps inside a Jenkins job and all of them run in sequence.
`Post-build` actions are parameters and settings that define the subsequent steps to be performed after a build. Some post-build actions can be configured to perform various activities depending on conditions.For example, we can have a post-build action in our current job, which in the event of a successful build starts another Jenkins job.
`Jenkins pipeline`, in simple terms, is a group of multiple Jenkins jobs that run in sequence or in parallel or a combination of both.
`Jenkins plugins` are software pieces that enhance the Jenkins' functionality. Plugins after installation, manifest in the form of either system settings or parameters inside a Jenkins job.There is a special section inside the Jenkins master server to manage plugins.


**Jenkins architecture**:- It employs master slave architecture.
Jenkins becomes overloaded sooner than it seems. Even in case of a small (micro) service, the build can take a few minutes. That means that one team committing frequently can easily kill the Jenkins instance.For that reason, unless the project is really small,Jenkins should not execute builds at all,but delegate them to the `slave(agent) instances`. The `Jenkins master` and it can delegate to the Jenkins agents.

In a distributed builds environment, the Jenkins master is responsible for:
1. Receiving build triggers (for example, after a commit to GitHub)
2. Sending notifications (for example, email or HipChat message sent after the build failure)
3. Handling HTTP requests (interaction with clients)
4. Managing the build environment (orchestrating the job executions on slaves).

The build agent is a machine that take care of everything that happens after the build is started.Agents should also be as generic as possible. For instance, if we have different projects: one in Java, one in Python, and one in Ruby, then it would be perfect if each agent could build any of these projects. In such a case, the agents can be interchanged, which helps to optimize the usage of resources.


*Configuring agents*:-

- `Communication protocols` - In order for the master and the agent to communicate, the bi-directional connection has to be established.There are different options how it can be initiated:
	1. SSH: Master connects to slave using the standard SSH protocol. Jenkins has an SSH-client built-in, so the only requirement is the SSHD server configured on slaves. This is the most convenient and stable method because it uses standard Unix mechanisms.
	2. Java Web Start: Java application is started on each agent machine and the TCP connection is established between the Jenkins slave application and the master Java application. This method is often used if the agents are inside the firewalled network and the master cannot initiate the connection.
	3. Windows service: The master registers an agent on the remote machine as a Windows service. This method is discouraged since the setup is tricky and there are limitations on the graphical interfaces usage.

- `Setting agents`:- At the low level, agents communicate with the Jenkins master always using one of the protocols described above. However, at the higher level, we can attach slaves to the master in various ways. The differences concern two aspects:
	- static versus dynamic: The simplest option is to add slaves permanently in the Jenkins master. The drawback of such solution is that we always need to manually change something if we need more (or less) slave nodes. A better option is to dynamically provision slaves as they are needed.
	- specific versus general-purpose: Agents can be specific (for example, different agents for the projects based on Java 7 and different agents for Java 8) or general-purpose (an agent acts as a Docker host and a pipeline is built inside a Docker container).

These differences resulted in four common strategies how agents are configured:
1. Permanent agents
2. Permanent Docker agents
3. Jenkins Swarm agents
4. Dynamically provisioned Docker agents


## Projects

- Create Pipeline to Build and Push Docker Image for a Microservice

## Steps

- Step 01 - Introduction and Launching Jenkins as Docker Container
- Step 02 - Initializing Jenkins Plugins and Creating Github Repo
- Step 03 - Setting up Docker and Maven in Jenkins and First Pipeline Run
- Step 04 - Understanding Scripted Pipelines in Jenkins
- Step 05 - Understanding Declarative Pipelines in Jenkins - Stages
- Step 06 - Using Docker Images as Jenkins Pipeline Agents
- Step 07 - Review Pipeline Syntax and Understanding Variables
- Step 08 - Configuring Jenkins Pipeline Path with Docker and Maven Tools
- Step 09 - Running Unit Tests and Integration Tests in Jenkins Pipelines - 1
- Step 10 - Running Unit Tests and Integration Tests in Jenkins Pipelines - 2
- Step 11 - Build and Push Docker Image in Jenkins Pipelines - 1 
- Step 12 - Build and Push Docker Image in Jenkins Pipelines - 2

```Jenkins
node {
	stage('Build') {
		echo "Build"
	}
	stage('Test') {
		echo "Test"
	}
}
```


`Scripted syntax` refers to the initial way that pipelines-as-code have been done in Jenkins. It is an imperative style, meaning it is based on defining the logic and the program flow in the pipeline script itself. It is also more dependent on the Groovy language and Groovy constructs—especially for things like error checking and dealing with exceptions.
`Declarative syntax` is a newer option in Jenkins. Pipelines coded in the declarative style are arranged in clear sections that describe (or “declare”) the states and outcomes we want in the major areas of the pipeline, rather than focusing on the logic to accomplish it. The following code example shows a pipeline written in scripted syntax on top and a similar one written in declarative syntax underneath:

```Jenkins
// Scripted Pipeline
node('worker_node1') {
stage('Source') { // Get code
// get code from our Git repository
git 'git@diyvb2:/home/git/repositories/workshop.git'
}
stage('Compile') { // Compile and do unit testing
// run Gradle to execute compile and unit testing
sh "gradle clean compileJava test"
}
}

// Declarative Pipeline
pipeline {
agent {label 'worker_node1'}
stages {
stage('Source') { // Get code
steps {
// get code from our Git repository
git 'git@diyvb2:/home/git/repositories/workshop.git'
}
}
stage('Compile') { // Compile and do unit testing
steps {
// run Gradle to execute compile and unit testing
sh "gradle clean compileJava test"
}
}
}
}
```

## Continuous Integration

**pipelines**:- A pipeline is a sequence of automated operations that usually represents a part of software delivery and the quality assurance process. It can be simply seen as a chain of scripts providing the following additional benefits:
- `Operation grouping`: Operations are grouped together into stages (also known as gates or quality gates) that introduce a structure into the process and clearly defines the rule: if one stage fails, no further stages are executed.
- `Visibility`: All aspects of the process are visualized, which help in quick failure analysis and promotes team collaboration.
- `Feedback`: Team members learn about any problems as soon as they occur, so they can react quickly.

A Jenkins pipeline consists of two kinds of elements: stages and steps.

Trigger----->stage--->stage----Notifications

The following are the basic pipeline elements:
1. `Step`: A single operation (tells Jenkins what to do, for example, checkout code from repository, execute a script).
2. `Stage`: A logical separation of steps (groups conceptually distinct sequences of steps, for example, Build, Test, and Deploy) used to visualize the Jenkins pipeline progress.

```
pipeline {
	agent any
	stages {
		stage('First Stage') {
			steps {
				echo 'Step 1. Hello World'
			}
		}
		stage('Second Stage') {
			steps {
				echo 'Step 2. Second time Hello'
				echo 'Step 3. Third time Hello'
			}
		}	
	}
}
```

The pipeline has no special requirements in terms of environment (any slave agent), and it executes three steps inside two stages.


**Triggers and Notifications**:-

- *Triggers*:- An automatic action to start the build is called the pipeline trigger. In Jenkins, there are many options to choose from; however, they all boil down to three types:
	1. External
	2. Polling SCM (Source Control Management)
	3. Scheduled build

`External`:- They means that Jenkins starts the build after it's called by the notifier, which can be the other pipeline build, the SCM system (for example, GitHub), or any remote script.

```
		trigger
GitHub --------------> Jenkins
```

GitHub triggers Jenkins after a push to the repository and the build is started.
To configure the system this way, we need the following setup steps:
1. Install the GitHub plugin in Jenkins.
2. Generate a secret key for Jenkins.
3. Set the GitHub web hook and specify the Jenkins address and key.

In the case of the most popular SCM providers, dedicated Jenkins plugins are always provided.
There is also a more generic way to trigger Jenkins via the REST call to the endpoint `<jenkins_url>/job/<job_name>/build?token=<token>`. For security reasons, it requires setting token in Jenkins and then using it in the remote script.
Jenkins must be accessible from the SCM server. In other words, if we use the public GitHub to trigger Jenkins, then our Jenkins server must be public as well. This also applies to the generic solution; the <jenkins_url> address must be accessible.


`Polling SCM`:- Jenkins periodically calls GitHub and checks if there was any push to the repository. Then, it starts the build. It may sound counter-intuitive, however, there are at least two good cases for using this method:
- Jenkins is inside the firewalled network (which GitHub does not have access to).
- Commits are frequent and the build takes a long time, so executing a build after every commit would cause an overload.

```
		    poll SCM
GitHub <---------------------- Jenkins
```

The configuration of poll SCM is also somehow simpler because the way to connect from Jenkins to GitHub is already set up (Jenkins checks out the code from GitHub, so it needs to have access). We can set up an automatic trigger by adding the triggers declaration (just after agent) to the pipeline:

```
triggers {
	pollSCM('* * * * *')
}
```

After running the pipeline manually for the first time, the automatic trigger is set. Then, it checks GitHub every minute, and for new commits, it starts a build. To test that it works as expected, you can commit and push anything to the GitHub repository and see that the build starts.
We used the mysterious `* * * * *` as an argument to pollSCM. It specifies how often Jenkins should check for new source changes and is expressed in the cron-style string format.

`Scheduled build`:- Scheduled trigger means that Jenkins runs the build periodically, no matter if there was any commit to the repository or not.
The implementation of Scheduled build is exactly the same as polling SCM. The only difference is that the keyword cron is used instead of pollSCM. This trigger method is rarely used for the commit pipeline but applies well to nightly builds (for example, complex integration testing executed at nights).


*Notifications*:- Jenkins provides a lot of ways to announce its build status. What's more, as with everything in Jenkins, new notification types can be added using plugins.

`Email`:- The most classic way to notify about the Jenkins build status is to send emails.
The configuration of the email notification is very simple; it's enough to:
1. Have the SMTP server configured
2. Set its details in Jenkins (in Manage Jenkins | Configure System)
3. Use mail to instruction in the pipeline

The pipeline configuration can be as follows:

```
post {
	always {
		mail to: 'team@company.com',
		subject: "Completed Pipeline: ${currentBuild.fullDisplayName}",
		body: "Your build completed, please check: ${env.BUILD_URL}"
	}
}
```

Note that all notifications are usually called in the post section of the pipeline, which is executed after all steps, no matter whether the build succeeded or failed. We used the always keyword; however, there are different options:
1. always: Execute regardless of the completion status
2. changed: Execute only if the pipeline changed its status
3. failure: Execute only if the pipeline has the failed status
4. success: Execute only if the pipeline has the success status
5. unstable: Execute only if the pipeline has the unstable status (usually caused by test failures or code violations)


## Continuous Delivery

Continuous Delivery is the ability to get changes of all types — including new features, configuration changes, bug fixes, and experiments—into production, or into the hands of users, safely and quickly in a sustainable way.
