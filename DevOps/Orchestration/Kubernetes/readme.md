# Kubernetes

Kubernetes (k8s) is an open source container orchestration platform that automates deployment, scaling and management of containerized apps.It allows devs to focus on writing code while kubernetes handles underlying infrusturcture. Uses declarative configuration files to speify apps and can automatically scale apps based on femands, handle failures and manage networking and storage

NOTE:- Kubernetes is Greek for pilot or helmsman (the person holding the ship’s steering wheel). People pronounce Kubernetes in a few different ways.
Many pronounce it as Koo-ber-nay-tace, while others pronounce it more like Koo-ber-netties. No matter which form you use, people will understand what you mean.

Kubernetes abstracts away the hardware infrastructure and exposes your whole data-center as a single enormous computational resource. It allows you to deploy and run
your software components without having to know about the actual servers underneath. When deploying a multi-component application through Kubernetes, it selects a server for each component, deploys it, and enables it to easily find and communicate with all the other components of your application

This makes Kubernetes great for most on-premises datacenters, but where it starts to shine is when it’s used in the largest datacenters, such as the ones built and oper-
ated by cloud providers. Kubernetes allows them to offer developers a simple platform for deploying and running any type of application, while not requiring the cloud provider’s own sysadmins to know anything about the tens of thousands of apps running on their hardware.

## MINIKUBE

Minikube is a tool that sets up a single-node cluster that’s great for both testing Kubernetes and developing apps locally.Minikube is a single binary that needs to be downloaded and put onto your path. It’s available for OSX, Linux, and Windows.

Once you have Minikube installed locally, you can immediately start up the Kubernetes cluster with the command in the following listing.

```bash
minikube start
```

You can run minikube ssh to log into the Minikube VM and explore it from the inside. For example, you may want to see what processes are running on the node.

```bash
minikube ssh
```

## KUBERNETES CLIENT (KUBECTL)

To interact with Kubernetes, you also need the kubectl CLI client. Again, all you need to do is download it and put it on your path.

To verify your cluster is working, you can use the kubectl cluster-info command shown in the following listing.

```bash
kubectl cluster-info
```

This shows the cluster is up. It shows the URLs of the various Kubernetes components,including the API server and the web console.

The simplest way to deploy your app is to use the kubectl run command, which will create all the necessary components without having to deal with JSON or YAML. This
way, we don’t need to dive into the structure of each object yet. Try to run the image you created and pushed to Docker Hub earlier. Here’s how to run it in Kubernetes:

```bash
kubectl run <name> --image=<imageName>--port=8080 --generator=run/v1
```

The --image part obviously specifies the container image you want to run, and the --port=8080 option tells Kubernetes that your app is listening on port
8080. The last flag (--generator) does require an explanation, though. Usually, you won’t use it, but you’re using it here so Kubernetes creates a ReplicationController
instead of a Deployment.

- When you ran the kubectl command, it created a new ReplicationController object in the cluster by sending a REST HTTP request to the Kubernetes API server.
The ReplicationController then created a new pod, which was then scheduled to one of the worker nodes by the Scheduler. The Kubelet on that node saw that the pod was
scheduled to it and instructed Docker to pull the specified image from the registry because the image wasn’t available locally. After downloading the image, Docker created and ran the container.

The term scheduling means assigning the pod to a node. The pod is run immediately, not at a time in the future as the term might lead you to believe.

With your pod running, how do you access it? We mentioned that each pod gets its own IP address, but this address is internal to the cluster and isn’t accessible from
outside of it. To make the pod accessible from the outside, you’ll expose it through a Service object. You’ll create a special service of type LoadBalancer, because if you create a regular service (a ClusterIP service), like the pod, it would also only be accessible from inside the cluster. By creating a LoadBalancer-type service, an external load balancer will be created and you can connect to the pod through the load balancer’s public IP.

To create the service, you’ll tell Kubernetes to expose the ReplicationController you created earlier:

```bash
kubectl expose rc <name> --type=LoadBalancer --name <service-name>
```

The expose command’s output mentions a service name. Services are objects like Pods and Nodes, so you can see the newly created Service object by running the kubectl get services command:-

```bash
kubectl get services
```

This will create a public IP address that can be accessed publicly.

Minikube doesn’t support LoadBalancer services, so the service will never get an external IP. But you can access the service anyway through its
external port.You can get the IP and port through which you can access the service by running minikube service command.

```bash
minikube service <service-name>
```

## PODS

Kubernetes doesn’t deal with individual containers directly. Instead, it uses the concept of multiple co-located containers. This group of containers is called a Pod.

A pod is a group of one or more tightly related containers that will always run together on the same worker node and in the same Linux namespace(s). Each pod
is like a separate logical machine with its own IP, hostname, processes, and so on, running a single application. The application can be a single process, running in a
single container, or it can be a main application process and additional supporting processes, each running in its own container. All the containers in a pod will appear
to be running on the same logical machine, whereas containers in other pods, even if they’re running on the same worker node, will appear to be running on a different one.

Instead of deploying containers individually,you always deploy and operate on a pod of containers. We’re not implying that a pod always includes more than one container—it’s common for pods to contain only a single container. The key thing about pods is that when a pod does contain multiple containers, all of them are always run on a single worker node—it never spans multiple worker nodes.

It contains only a single container, but generally a pod can contain as many containers as you want.The pod has its own unique private IP address and hostname.

Because you can’t list individual containers, since they’re not standalone Kubernetes objects, you can list pods instead:-

```bash
kubectl get pods
```

To see more information about the pod, you can also use the kubectl describe pod command:-

```bash
kubectl describe pods
```

- Creating pods from YAML or JSON descriptors:- Pods and other Kubernetes resources are usually created by posting a JSON or YAML manifest to the Kubernetes REST API endpoint. Also, you can use other, simpler ways of creating resources, such as the kubectl run command, but they usually only allow you to configure a limited set of properties, not all. Additionally, defining all your Kubernetes objects from YAML files makes it possible to store them in a version control system, with all the benefits it brings.

The pod definition consists of a few parts.

1. There’s the Kubernetes API version used in the YAML and the type of resource the YAML is describing.
2. Metadata includes the name, namespace, labels, and other information about the pod.
3. Spec contains the actual description of the pod’s contents, such as the pod’s containers, volumes, and other data.
4. Status contains the current information about the running pod, such as what condition the pod is in, the description and status of each container, and the
pod’s internal IP and other basic info.

The status part contains read-only runtime data that shows the state of the resource at a given moment. When creating a new pod, you never need to provide the status part.

```yaml
apiVersion: v1 #Descriptor conforms to version v1 of Kubernetes API
kind: Pod # You’re describing a pod
metadata:
  name: {PodName} #The name of the pod
spec:
  containers:
  - image: {AppImage} #Container image to create the container from
  name: {ContainerName} # Name of the container
  ports:
  - containerPort: 8080 #The port the app is listening on
  protocol: TCP
```

- SPECIFYING CONTAINER PORTS:- Specifying ports in the pod definition is purely informational. Omitting them has no effect on whether clients can connect to the pod through the port or not. If the container is accepting connections through a port bound to the 0.0.0.0 address, other pods can always connect to it, even if the port isn’t listed in the pod spec explicitly. But it makes sense to define the ports explicitly so that everyone using your cluster can quickly see what ports each pod exposes. Explicitly defining ports also allows you to assign a name to each port, which can come in handy.

- Using kubectl create to create the pod:- To create the pod from your YAML file, use the kubectl create command:

```bash
kubectl create -f {name}.yaml
```

The kubectl create -f command is used for creating any resource (not only pods) from a YAML or JSON file.

- RETRIEVING THE WHOLE DEFINITION OF A RUNNING POD:- After creating the pod, you can ask Kubernetes for the full YAML of the pod. You’ll see it’s similar to the YAML you saw earlier. You’ll learn about the additional fields appearing in the returned definition in the next sections. Go ahead and use the following command to see the full descriptor of the pod:

```bash
kubectl get po kubia-manual -o yaml
```

If you’re more into JSON, you can also tell kubectl to return JSON instead of YAML like this (this works even if you used YAML to create the pod):

```bash
kubectl get po kubia-manual -o json
```

## REPLICATIONCONTROLLER

It makes sure there’s always exactly one instance of your pod running. Generally, ReplicationControllers are used to replicate pods (that is, create multiple copies of a pod) and keep them running.

If you dodn’t specify how many pod replicas you want, so the ReplicationController creates a single one. If your pod were to disappear for any reason, the
ReplicationController would create a new pod to replace the missing one.

One of the main benefits of using Kubernetes is the simplicity with which you can scale your deployments. Let’s see how easy it is to scale up the number of pods. You’ll
increase the number of running instances to three.

```bash
kubectl get replicationcontroller
```

To scale up the number of replicas of your pod, you need to change the desired replica count on the ReplicationController like this:

```bash
kubectl scale rc kubia --replicas=3
```

## SERVICE

To understand why you need services, you need to learn a key detail about pods. They’re ephemeral. A pod may disappear at any time—because the node it’s running on has failed, because someone deleted the pod, or because the pod was evicted from an otherwise healthy node. When any of those occurs, a missing pod is replaced with a new one by the ReplicationController, as described previously. This new pod gets a different IP address from the pod it’s replacing. This is where services come in—to solve the problem of ever-changing pod IP addresses, as well as exposing multiple pods at a single constant IP and port pair.

When a service is created, it gets a static IP, which never changes during the lifetime of the service. Instead of connecting to pods directly, clients should connect to the service through its constant IP address. The service makes sure one of the pods receives the connection, regardless of where the pod is currently running (and what its IP address is).

Services represent a static location for a group of one or more pods that all provide the same service. Requests coming to the IP and port of the service will be forwarded to the IP and port of one of the pods belonging to the service at that moment.

They act as a load balancer standing in front of multiple pods. When there’s only one pod, services provide a static address for the single pod. Whether a service is backed by a single pod or a group of pods,those pods come and go as they’re moved around the cluster, which means their IP addresses change, but the service is always there at the same address. This makes it easy for clients to connect to the pods, regardless of how many exist and how often they change location.

## Using kubectl explain to discover possible API object fields

When preparing a manifest, you can either turn to the Kubernetes reference documentation at <http://kubernetes.io/docs/api> to see which attributes are
supported by each API object, or you can use the kubectl explain command.

For example, when creating a pod manifest from scratch, you can start by asking kubectl to explain pods:

```bash
kubectl explain pods
```

Kubectl prints out the explanation of the object and lists the attributes the object can contain. You can then drill deeper to find out more about each attribute. For
example, you can examine the spec attribute like this:

```bash
kubectl explain pod.spec
```

## Projects

- Hello World REST API
- 2 Microservices - Currency Exchange and Currency Conversion

## Steps

- Step 01 - Getting Started with Docker, Kubernetes and Google Kubernetes Engine
- Step 02 - Creating Google Cloud Account
- Step 03 - Creating Kubernetes Cluster with Google Kubernete Engine (GKE)
- Step 04 - Review Kubernetes Cluster and Learn Few Fun Facts about Kubernetes
- Step 05 - Deploy Your First Spring Boot Application to Kubernetes Cluster
- Step 06 - Quick Look at Kubernetes Concepts - Pods, Replica Sets and Deployment
- Step 07 - Understanding Pods in Kubernetes
- Step 08 - Understanding ReplicaSets in Kubernetes
- Step 09 - Understanding Deployment in Kubernetes
- Step 10 - Quick Review of Kubernetes Concepts - Pods, Replica Sets and Deployment
- Step 11 - Understanding Services in Kubernetes
- Step 12 - Quick Review of GKE on Google Cloud Console
- Step 13 - Understanding Kubernetes Architecture - Master Node and Nodes
- Step 14 - Understand Google Cloud Regions and Zones
- Step 15 - Installing GCloud
- Step 16 - Installing Kubectl
- Step 17 - Understand Kubernetes Rollouts
- Step 18 - Generate Kubernetes YAML Configuration for Deployment and Service
- Step 19 - Understand and Improve Kubernetes YAML Configuration
- Step 20 - Using Kubernetes YAML Configuration to Create Resources
- Step 21 - Understanding Kubernetes YAML Configuration - Labels and Selectors
- Step 22 - Quick Fix to reduce release downtime with minReadySeconds
- Step 23 - Understanding Replica Sets in Depth - Using Kubernetes YAML Config
- Step 24 - Configure Multiple Kubernetes Deployments with One Service
- Step 25 - Playing with Kubernetes Commands - Top Node and Pod
- Step 26 - Delete Hello World Deployments
- Step 27 - Quick Introduction to Microservices - CE and CC
- Step 28 - Deploy Microservices to Kubernetes
- Step 29 - Understand Environment Variables created by Kubernetes for Services
- Step 30 - Microservices and Kubernetes Service Discovery - Part 1
- Step 31 - Microservices and Kubernetes Service Discovery - Part 2 DNS
- Step 32 - Microservices Centralized Configuration with Kubernetes ConfigMaps
- Step 33 - Simplify Microservices with Kubernetes Ingress - Part 1
- Step 34 - Simplify Microservices with Kubernetes Ingress - Part 2
- Step 35 - Delete Kubernetes Clusters

## Commands

```bash
docker run -p 8080:8080 in28min/hello-world-rest-api:0.0.1.RELEASE

kubectl create deployment hello-world-rest-api --image=in28min/hello-world-rest-api:0.0.1.RELEASE
kubectl expose deployment hello-world-rest-api --type=LoadBalancer --port=8080
kubectl scale deployment hello-world-rest-api --replicas=3
kubectl delete pod hello-world-rest-api-58ff5dd898-62l9d
kubectl autoscale deployment hello-world-rest-api --max=10 --cpu-percent=70
kubectl edit deployment hello-world-rest-api #minReadySeconds: 15
kubectl set image deployment hello-world-rest-api hello-world-rest-api=in28min/hello-world-rest-api:0.0.2.RELEASE

gcloud container clusters get-credentials in28minutes-cluster --zone us-central1-a --project solid-course-258105
kubectl create deployment hello-world-rest-api --image=in28min/hello-world-rest-api:0.0.1.RELEASE
kubectl expose deployment hello-world-rest-api --type=LoadBalancer --port=8080
kubectl set image deployment hello-world-rest-api hello-world-rest-api=DUMMY_IMAGE:TEST
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl set image deployment hello-world-rest-api hello-world-rest-api=in28min/hello-world-rest-api:0.0.2.RELEASE
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl get componentstatuses
kubectl get pods --all-namespaces

kubectl get events
kubectl get pods
kubectl get replicaset
kubectl get deployment
kubectl get service

kubectl get pods -o wide

kubectl explain pods
kubectl get pods -o wide

kubectl describe pod hello-world-rest-api-58ff5dd898-9trh2

kubectl get replicasets
kubectl get replicaset

kubectl scale deployment hello-world-rest-api --replicas=3
kubectl get pods
kubectl get replicaset
kubectl get events
kubectl get events --sort-by=.metadata.creationTimestamp

kubectl get rs
kubectl get rs -o wide
kubectl set image deployment hello-world-rest-api hello-world-rest-api=DUMMY_IMAGE:TEST
kubectl get rs -o wide
kubectl get pods
kubectl describe pod hello-world-rest-api-85995ddd5c-msjsm
kubectl get events --sort-by=.metadata.creationTimestamp

kubectl set image deployment hello-world-rest-api hello-world-rest-api=in28min/hello-world-rest-api:0.0.2.RELEASE
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl get pods -o wide
kubectl delete pod hello-world-rest-api-67c79fd44f-n6c7l
kubectl get pods -o wide
kubectl delete pod hello-world-rest-api-67c79fd44f-8bhdt

kubectl get componentstatuses
kubectl get pods --all-namespaces

gcloud auth login
kubectl version
gcloud container clusters get-credentials in28minutes-cluster --zone us-central1-a --project solid-course-258105

kubectl rollout history deployment hello-world-rest-api
kubectl set image deployment hello-world-rest-api hello-world-rest-api=in28min/hello-world-rest-api:0.0.3.RELEASE --record=true
kubectl rollout undo deployment hello-world-rest-api --to-revision=1

kubectl logs hello-world-rest-api-58ff5dd898-6ctr2
kubectl logs -f hello-world-rest-api-58ff5dd898-6ctr2

kubectl get deployment hello-world-rest-api -o yaml
kubectl get deployment hello-world-rest-api -o yaml > deployment.yaml
kubectl get service hello-world-rest-api -o yaml > service.yaml
kubectl apply -f deployment.yaml
kubectl get all -o wide
kubectl delete all -l app=hello-world-rest-api

kubectl get svc --watch
kubectl diff -f deployment.yaml
kubectl delete deployment hello-world-rest-api
kubectl get all -o wide
kubectl delete replicaset.apps/hello-world-rest-api-797dd4b5dc

kubectl get pods --all-namespaces
kubectl get pods --all-namespaces -l app=hello-world-rest-api
kubectl get services --all-namespaces
kubectl get services --all-namespaces --sort-by=.spec.type
kubectl get services --all-namespaces --sort-by=.metadata.name
kubectl cluster-info
kubectl cluster-info dump
kubectl top node
kubectl top pod
kubectl get services
kubectl get svc
kubectl get ev
kubectl get rs
kubectl get ns
kubectl get nodes
kubectl get no
kubectl get pods
kubectl get po

kubectl delete all -l app=hello-world-rest-api
kubectl get all

kubectl apply -f deployment.yaml 
kubectl apply -f ../currency-conversion/deployment.yaml 
```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "4"
  creationTimestamp: "2020-01-28T12:40:25Z"
  generation: 5
  labels:
    app: hello-world-rest-api
  name: hello-world-rest-api
  namespace: default
  resourceVersion: "4926"
  selfLink: /apis/extensions/v1beta1/namespaces/default/deployments/hello-world-rest-api
  uid: 5b515896-41cb-11ea-8e69-42010a80009c
spec:
  progressDeadlineSeconds: 600
  replicas: 2
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: hello-world-rest-api
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: hello-world-rest-api
    spec:
      containers:
      - image: in28min/hello-world-rest-api:0.0.1.RELEASE
        imagePullPolicy: IfNotPresent
        name: hello-world-rest-api
        resources: {}
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
status:
  availableReplicas: 3
  conditions:
  - lastTransitionTime: "2020-01-28T12:41:15Z"
    lastUpdateTime: "2020-01-28T12:41:15Z"
    message: Deployment has minimum availability.
    reason: MinimumReplicasAvailable
    status: "True"
    type: Available
  - lastTransitionTime: "2020-01-28T12:40:25Z"
    lastUpdateTime: "2020-01-28T12:57:52Z"
    message: ReplicaSet "hello-world-rest-api-58ff5dd898" has successfully progressed.
    reason: NewReplicaSetAvailable
    status: "True"
    type: Progressing
  observedGeneration: 5
  readyReplicas: 3
  replicas: 3
  updatedReplicas: 3
---
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: "2020-01-28T12:40:28Z"
  labels:
    app: hello-world-rest-api
  name: hello-world-rest-api
  namespace: default
  resourceVersion: "1250"
  selfLink: /api/v1/namespaces/default/services/hello-world-rest-api
  uid: 5d6a09ca-41cb-11ea-8e69-42010a80009c
spec:
  clusterIP: 10.0.8.24
  externalTrafficPolicy: Cluster
  ports:
  - nodePort: 32208
    port: 8080
    protocol: TCP
    targetPort: 8080
  selector:
    app: hello-world-rest-api
  sessionAffinity: None
  type: LoadBalancer
status:
  loadBalancer:
    ingress:
    - ip: 35.193.152.162
```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: hello-world-rest-api
  name: hello-world-rest-api
  namespace: default
spec:
  replicas: 3
  minReadySeconds: 45
  selector:
    matchLabels:
      app: hello-world-rest-api
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: hello-world-rest-api
    spec:
      containers:
      - image: in28min/hello-world-rest-api:0.0.3.RELEASE
        imagePullPolicy: IfNotPresent
        name: hello-world-rest-api
      restartPolicy: Always
      terminationGracePeriodSeconds: 30
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: hello-world-rest-api
  name: hello-world-rest-api
  namespace: default
spec:
  ports:
  - nodePort: 32208
    port: 8080
    protocol: TCP
    targetPort: 8080
  selector:
    app: hello-world-rest-api
  sessionAffinity: None
  type: LoadBalancer
```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: hello-world-rest-api
    version: v1
  name: hello-world-rest-api-v1
  namespace: default
spec:
  replicas: 2
  minReadySeconds: 45
  selector:
    matchLabels:
      app: hello-world-rest-api
      version: v1
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: hello-world-rest-api
        version: v1
    spec:
      containers:
      - image: in28min/hello-world-rest-api:0.0.1.RELEASE
        imagePullPolicy: IfNotPresent
        name: hello-world-rest-api
      restartPolicy: Always
      terminationGracePeriodSeconds: 30
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: hello-world-rest-api
    version: v2
  name: hello-world-rest-api-v2
  namespace: default
spec:
  replicas: 2
  minReadySeconds: 45
  selector:
    matchLabels:
      app: hello-world-rest-api
      version: v2
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: hello-world-rest-api
        version: v2
    spec:
      containers:
      - image: in28min/hello-world-rest-api:0.0.2.RELEASE
        imagePullPolicy: IfNotPresent
        name: hello-world-rest-api
      restartPolicy: Always
      terminationGracePeriodSeconds: 30
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: hello-world-rest-api
  name: hello-world-rest-api
  namespace: default
spec:
  ports:
  - nodePort: 32208
    port: 8080
    protocol: TCP
    targetPort: 8080
  selector:
    app: hello-world-rest-api
    version: v2
  sessionAffinity: None
  type: LoadBalancer
```

## Services: Enabling clients to discover and talk to pods

A Kubernetes Service is a resource you create to make a single, constant point of entry to a group of pods providing the same service. Each service has an IP address
and port that never change while the service exists. Clients can open connections to that IP and port, and those connections are then routed to one of the pods backing
that service. This way, clients of a service don’t need to know the location of individual pods providing the service, allowing those pods to be moved around the cluster
at any time.

Connections to the service are load-balanced across all the backing pods.

## Setting up an alias and command-line completion for kubectl

You’ll use kubectl often. You’ll soon realize that having to type the full command every time is a real pain. Before you continue, take a minute to make your life easier
by setting up an alias and tab completion for kubectl.

- CREATING AN ALIAS: Here’s how you define one. Add the following line to your ~/.bashrc or equivalent file:

alias k=kubectl

NOTE You may already have the k executable if you used gcloud to set up the cluster.
