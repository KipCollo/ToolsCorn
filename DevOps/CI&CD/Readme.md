# Continuous Integration/Continuous Delivery (CI/CD)

`Continuous Integration` is the first part of the process and describes the permanent building and testing of the written code. High automation and usage of version control allows multiple developers and teams to work on the same code base.

`Continuous Delivery` is the second part of the process and automates the deployment of the pre-built software. In cloud environments, you will often see that software is deployed to Development or Staging environments, before it gets released and delivered to a production system.

To automate the whole workflow, you can use a CI/CD pipeline, which is actually nothing more than the scripted form of all the steps involved, running on a server or even in a container. Pipelines should be integrated with a version control system that manages changes to the code base.

Every time a new revision of your code is ready to be deployed, the pipeline starts to execute scripts that build your code, run tests, deploy them to servers and even perform security and compliance checks.Besides the generic scripting of the pipeline steps, modern CI/CD tools have a lot more functionality like direct interaction and feedback from a system like Kubernetes.

Popular CI/CD tools include:

1. Spinnaker
2. GitLab
3. Jenkins
4. Jenkins X
5. Tekton CD
6. ArgoCD
