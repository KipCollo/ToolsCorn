# Jenkins

Jenkins is a self-contained, open-source automation server which can be used to automate all sorts of tasks related to building, testing and deploying software.i.e Continuous Intergration, Continuous Delivery,Continuus Testing and Continuous Deployment.

Jenkins is a Continuous Integration/Continuous Delivery or Deployment (CI/CD)tool in DevOps. Jenkins is developed in the “Java” language. It implements the CI/CD workflows using pipelines or automation.

Jenkins tool is written in java and its plugins.
Can be installed through native system packages, Docker or standalone by any machine running Java Runtime Environment.

Jenkins works on “Master-Slave” architecture. This means you have to set up two nodes named “Master” & “Slave”. On the “Master” node, you will configure “Jenkins” with “Java”, while on “Slave”, you have to install “Java” only.

## Components

`Jenkin job(Project)` - Contains a unique name,description,parameters,build steps and post-build actions.A user-configured description of the work that Jenkins will manage.

`Jenkins parameters` can be anything: environment variables, interactive values, pre-defined values, links, triggers, and so on. Their primary purpose is to assist the builds. They are also responsible for triggering pre-build activities and post-build activities.

A `Jenkins build` can be anything from a simple Windows batch command to a complex Perl script. The range is extensive, which include Shell, Perl, Ruby, and Python scripts or even Maven and Ant builds.
There can be number of build steps inside a Jenkins job and all of them run in sequence.

`Post-build` actions are parameters and settings that define the subsequent steps to be performed after a build. Some post-build actions can be configured to perform various activities depending on conditions.For example, we can have a post-build action in our current job, which in the event of a successful build starts another Jenkins job.

`Jenkins pipeline`, in simple terms, is a group of multiple Jenkins jobs that run in sequence or in parallel or a combination of both.

`Jenkins plugins` are software pieces that enhance the Jenkins' functionality. Plugins after installation, manifest in the form of either system settings or parameters inside a Jenkins job.
There is a special section inside the Jenkins master server to manage plugins.

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