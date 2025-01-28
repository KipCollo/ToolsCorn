# Kubernetes

Kubernetes (k8s) is an open source container orchestration platform that automates deployment, scaling and management of containerized apps.It allows devs to focus on writing code while kubernetes handles underlying infrusturcture. Uses declarative configuration files to speify apps and can automatically scale apps based on femands, handle failures and manage networking and storage

NOTE:- Kubernetes is Greek for pilot or helmsman (the person holding the ship’s steering wheel). People pronounce Kubernetes in a few different ways.
Many pronounce it as Koo-ber-nay-tace, while others pronounce it more like Koo-ber-netties. No matter which form you use, people will understand what you mean.

Kubernetes abstracts away the hardware infrastructure and exposes your whole data-center as a single enormous computational resource. It allows you to deploy and run
your software components without having to know about the actual servers underneath. When deploying a multi-component application through Kubernetes, it selects a server for each component, deploys it, and enables it to easily find and communicate with all the other components of your application

This makes Kubernetes great for most on-premises datacenters, but where it starts to shine is when it’s used in the largest datacenters, such as the ones built and oper-
ated by cloud providers. Kubernetes allows them to offer developers a simple platform for deploying and running any type of application, while not requiring the cloud provider’s own sysadmins to know anything about the tens of thousands of apps running on their hardware.

Kubernetes is Open Source Container Orchestration Engine developed by Google.It is now managed by Cloud Native Computing Foundation(CNCF)

## KUBERNETES architecture

Kubernetes cluster is split into two parts:

1. The Kubernetes Control Plane
2. The (worker) nodes

### COMPONENTS OF THE CONTROL PLANE

The Control Plane is what controls and makes the whole cluster function. The components that make up the Control Plane are:-

1. The etcd - distributed persistent storage
2. The API server - Accepts REST commands to interact with Cluster resources.
3. The Scheduler - Regulate tasks on slave nodes
4. The Controller Manager
These components store and manage the state of the cluster, but they aren’t what runs the application containers.

### COMPONENTS RUNNING ON THE WORKER NODES

The task of running your containers is up to the components running on each worker node:

1. The Kubelet
2. The Kubernetes Service Proxy (kube-proxy)
3. The Container Runtime (Docker, rkt, or others)

### ADD-ON COMPONENTS

Beside the Control Plane components and the components running on the nodes, a few add-on components are required for the cluster to provide everything discussed
so far. This includes

1. The Kubernetes DNS server
2. The Dashboard
3. An Ingress controller
4. Heapster
5. The Container Network Interface network plugin

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

To see the adds-on in minikube use the command:-

```bash
minikube addson list
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

## Managing pods’ computational resources

Requesting resources for a pod’s containers:- When creating a pod, you can specify the amount of CPU and memory that a container needs (these are called requests) and a hard limit on what it may consume(known as limits). They’re specified for each container individually, not for the pod as a whole. The pod’s resource requests and limits are the sum of the requests and limits of all its containers.

- ENABLING HEAPSTER:- If you’re running a cluster in Google Kubernetes Engine, Heapster is enabled by default. If you’re using Minikube, it’s available as an add-on and can be enabled with the following command:

```bash
minikube addons enable heapster
```

To run Heapster manually in other types of Kubernetes clusters, you can refer to instructions located at <https://github.com/kubernetes/heapster.>

After enabling Heapster, you’ll need to wait a few minutes for it to collect metrics before you can see resource usage statistics for your cluster, so be patient.

- DISPLAYING CPU AND MEMORY USAGE FOR CLUSTER NODES:- Running Heapster in your cluster makes it possible to obtain resource usages for nodes and individual pods through the kubectl top command. To see how much CPU and memory is being used on your nodes, you can run the command shown in
the following listing.

```bash
kubectl top node
```

This shows the actual, current CPU and memory usage of all the pods running on the node, unlike the kubectl describe node command, which shows the amount of CPU
and memory requests and limits instead of actual runtime usage data.

- DISPLAYING CPU AND MEMORY USAGE FOR INDIVIDUAL PODS:- To see how much each individual pod is using, you can use the kubectl top pod command, as shown in the following listing.

```bash
kubectl top pod --all-namespaces
```

The outputs of both these commands are fairly simple, so you probably don’t need me
to explain them, but I do need to warn you about one thing. Sometimes the top pod
command will refuse to show any metrics and instead print out an error like this:

```bash
kubectl top pod
W0312 22:12:58.02188515126 top_pod.go:186] Metrics not available for pod default/kubia-3773182134-63bmb, age: 1h24m19.021873823s
error: Metrics not available for pod default/kubia-3773182134-63bmb, age:1h24m19.021873823s
```

If this happens, don’t start looking for the cause of the error yet. Relax, wait a while,and rerun the command—it may take a few minutes, but the metrics should appear
eventually. The kubectl top command gets the metrics from Heapster, which aggregates the data over a few minutes and doesn’t expose it immediately.

TIP To see resource usages across individual containers instead of pods, you can use the --containers option.

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

## Setting up an alias and command-line completion for kubectl

You’ll use kubectl often. You’ll soon realize that having to type the full command every time is a real pain. Before you continue, take a minute to make your life easier
by setting up an alias and tab completion for kubectl.

- CREATING AN ALIAS: Here’s how you define one. Add the following line to your ~/.bashrc or equivalent file:

alias k=kubectl

NOTE You may already have the k executable if you used gcloud to set up the cluster.

## KUBERNETES DASHBOARD

The dashboard allows you to list all the Pods, ReplicationControllers, Services, and other objects deployed in your cluster, as well as to create, modify, and delete them.

- ACCESSING THE DASHBOARD WHEN RUNNING KUBERNETES IN GKE:- If you’re using Google Kubernetes Engine, you can find out the URL of the dashboard through the kubectl cluster-info command:

```bash
kubectl cluster-info | grep dashboard
```

If you open this URL in a browser, you’re presented with a username and password prompt. You’ll find the username and password by running the following command:

```bash
gcloud container clusters describe {resource-name} | grep -E "(username|password):"
```

- ACCESSING THE DASHBOARD WHEN USING MINIKUBE:- To open the dashboard in your browser when using Minikube to run your Kubernetes cluster, run the following command:

```bash
minikube dashboard
```

The dashboard will open in your default browser. Unlike with GKE, you won’t need to enter any credentials to access it.

## INSTALLATION

- Installation option for Kubernetes:-

1. Kubernetes Managed service:- Amazon EKS,Google Kubernetes Engine,Azure Kubernetes Service(AKS)
2. Use Minikube
3. Manual Installation- Install diff component individually -Master Node,Worker Node.
