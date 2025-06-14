# Kubernetes

`Kubernetes (k8s)` is an open source container orchestration platform that automates deployment, scaling and management of containerized apps.It allows devs to focus on writing code while kubernetes handles underlying infrastructure. Uses declarative configuration files to specify apps and can automatically scale apps based on demands, handle failures and manage networking and storage

NOTE:- Kubernetes is Greek for pilot or helmsman (the person holding the ship’s steering wheel). People pronounce Kubernetes in a few different ways.
Many pronounce it as Koo-ber-nay-tace, while others pronounce it more like Koo-ber-netties. No matter which form you use, people will understand what you mean.

Kubernetes abstracts away the hardware infrastructure and exposes your whole data-center as a single enormous computational resource. It allows you to deploy and run
your software components without having to know about the actual servers underneath. When deploying a multi-component application through Kubernetes, it selects a server for each component, deploys it, and enables it to easily find and communicate with all the other components of your application

This makes Kubernetes great for most on-premises datacenters, but where it starts to shine is when it’s used in the largest datacenters, such as the ones built and operated by cloud providers. Kubernetes allows them to offer developers a simple platform for deploying and running any type of application, while not requiring the cloud provider’s own sysadmins to know anything about the tens of thousands of apps running on their hardware.

Kubernetes is Open Source Container Orchestration Engine developed by Google.It is now managed by Cloud Native Computing Foundation(CNCF)

Kubernetes uses Linux container technologies to provide isolation of running applications.

## Key Concepts Terminologies

Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Here are some important concepts and terminologies in Kubernetes:

- Cluster Architecture: The architectural concepts behind Kubernetes.
- Containers: Technology for packaging an application along with its runtime dependencies.
- Workloads: Understand Pods, the smallest deployable compute object in Kubernetes, and the higher-level abstractions that help you to run them.
- Services, Load Balancing, and Networking: Concepts and resources behind networking in Kubernetes.
- Storage: Ways to provide both long-term and temporary storage to Pods in your cluster.
- Configuration: Resources that Kubernetes provides for configuring Pods.
- Cluster Administration: Lower-level detail relevant to creating or administering a Kubernetes cluster.
- Node:- It serves as a worker machine in a kubernetes cluster.It can be a physical computer or a virtual machine.It should contain a kubelet running,container tooling e.g Docker,kube-proxy process running,supervisord

## KUBERNETES architecture

Kubernetes cluster is an instance of Kubernetes.It is split into two parts:

1. The (Master node) - Hosts the Kubernetes Control Plane that controls and manages the whole Kubernetes system.
2. The (worker) nodes - Runs actual applications you deploy.

**COMPONENTS OF THE CONTROL PLANE** - The Control Plane is what controls and makes the whole cluster function.These resources/components are containerized application run as a pod.To list them you can use the command `kubectl get pods -n kube-system`.
The components that make up the Control Plane are:-

1. The etcd - distributed persistent storage for cluster configurations.
2. The API server - Accepts REST commands to interact with Cluster resources.
3. The Scheduler - Regulate tasks on slave nodes i.e assigns worker node to each deployable component of your app.
4. The Controller Manager - Runs on a loop continuously and checks status of a cluster and to make sure things are running properly.
5. Cloud Controller Manager

These components store and manage the state of the cluster, but they aren’t what runs the application containers.


`Control Plane Node` - Control plane nodes in Kubernetes play a critical role in managing the cluster's state and configuration. They are responsible for making global decisions about the cluster (like scheduling), as well as detecting and responding to cluster events (like starting up a new pod when a deployment's replicas field is unsatisfied). Here are the key components of control plane nodes:

1.  API Server - Serves as the front end for the Kubernetes control plane. The API server is responsible for handling requests, validating them, and updating the corresponding objects in the cluster. It exposes the Kubernetes API.
2.  Cluster Data Store – etcd - It’s the only stateful part of the cluster which persists the entire cluster configuration aka desired state and the current state of the cluster.
3.  Controller Manager - Manages controllers that regulate the state of the cluster. Controllers are responsible for maintaining the desired state and handling tasks like node management, replication, and endpoints.Has Node controller,Replication controller,Endpoints controller,Service Account & Token Controller.
4. Scheduler - Assigns pods to nodes based on resource availability, constraints, and other policies. The scheduler makes decisions to ensure that the workload is evenly distributed across the cluster.

The Kubernetes master runs various server and manager processes for the cluster. Among the components of the master node are the kube-apiserver, the kube-scheduler, and the etcd database. As the software has matured, new components have been created to handle dedicated needs, such as the cloud-controller-manager; it handles tasks once handled by the kube-controller-manager to interact with other tools, such as Rancher or DigitalOcean for third-party cluster management and reporting.

There are several add-ons which have become essential to a typical production cluster, such as DNS services. Others are third-party solutions where Kubernetes has not yet developed a local component, such as cluster-level logging and resource monitoring.

`kube-apiserver` - The kube-apiserver is central to the operation of the Kubernetes cluster.
All calls, both internal and external traffic, are handled via this agent. All actions are accepted and validated by this agent, and it is the only agent which connects to the etcd database. As a result, it acts as a master process for the entire cluster, and acts as a frontend of the cluster's shared state. Each API call goes through three steps: authentication, authorization, and several admission controllers.

`kube-scheduler` - The kube-scheduler uses an algorithm to determine which node will host a Pod of containers. The scheduler will try to view available resources (such as available CPU) to bind, and then assign the Pod based on availability and success. The scheduler uses pod-count by default, but complex configuration is often done if cluster-wide metrics are collected.
There are several ways you can affect the algorithm, or a custom scheduler could be used simultaneously instead. A Pod can also be assigned bind to a particular node in the pod spec, though the Pod may remain in a pending state if the node or other declared resource is unavailable.

One of the first configurations referenced during creation is if the Pod can be deployed within the current quota restrictions. If so, then the taints and tolerations, and labels of the Pods are used along with those of the nodes to determine the proper placement. Some is done as an admission controller in the kube-apiserver, the rest is done by the chosen scheduler.

`etcd Database`

The state of the cluster, networking, and other persistent information is kept in an etcd database, or, more accurately, a b+tree key-value store. Rather than finding and changing an entry, values are always appended to the end. Previous copies of the data are then marked for future removal by a compaction process. It works with curl and other HTTP libraries, and provides reliable watch queries.

Simultaneous requests to update a particular value all travel via the kube-apiserver, which then passes along the request to etcd in a series. The first request would update the database. The second request would no longer have the same version number as found in the object, in which case the kube-apiserver would reply with an error 409 to the requester. There is no logic past that response on the server side, meaning the client needs to expect this and act upon the denial to update.

There is a cp database along with possible followers. They communicate with each other on an ongoing basis to determine which will be master, and determine another in the event of failure. While very fast and potentially durable, there have been some hiccups with some features like whole cluster upgrades. The kubeadm cluster creation tool allows easy deployment of a multi-master cluster with stacked etcd or an external database cluster.

The `kube-controller-manager` is a core control loop daemon which interacts with the kube-apiserver to determine the state of the cluster. If the state does not match, the manager will contact the necessary controller to match the desired state. There are several controllers in use, such as endpoints, namespace, and replication. The full list has expanded as Kubernetes has matured.

The cloud-controller-manager interacts with agents outside of the cloud. It handles tasks once handled by kube-controller-manager. This allows faster changes without altering the core Kubernetes control process. Each kubelet must use the --cloud-provider-external settings passed to the binary.

**COMPONENTS RUNNING ON THE WORKER NODES**

The task of running your containers is up to the components running on each worker node:

1. The Kubelet - It starts a container using Container Runtime Interface(CRI).CRI enables it to create containers with engines:- Containerd,CRI-O,Kata containers,AWS Firecracker.It is a Kubernetes node agent that runs on each node.It communicates with API server to see if pods has been assigned to nodes,executes pod containers via container engine,mounts and runs pod volumes and secrets,executes health checks to identify pod/node status.It works in terms of Podspec(YAML file that describes a pod).It takes a st of Podspecs that are provide by kube-apiserver and ensures that containers described in those Podspecs are running and healthy.It only manages containers created by API server not any container running on the node.
2. The Kubernetes Service Proxy (kube-proxy) - Make sure pods and services can communicate.It communicates directly with kube-apiserver.Runs on all worker nodes.Reflects services as defined on each node, and can do simple network stream or round-robin forwarding across set of backends.Has 3 modes:- User space mode,Iptables mode,Ipvs mode.
3. The Container Runtime (Docker, rkt, or others)


`Worker Node (Minion)` - Worker nodes in Kubernetes are the machines (physical or virtual) where your actual applications (containers) run. They are managed by the control plane and perform the requested, necessary workloads. Each worker node is a part of the Kubernetes cluster and has the necessary components to orchestrate and run applications. Here are the key components of a worker node:

1.  Kubelet - An agent running on each node that communicates with the control plane node's API server. It ensures that containers are running in a pod and reports back to the control plane about the node's status.
2. Container Runtime - Responsible for managing the entire container lifecycle on the node. Containerd is one of the leading container runtimes.
3. Kube Proxy - It is a Kubernetes agent installed on every node in the cluster. It is responsible for local cluster networking. It implements local IPTABLES or IPVS rules to handle routing and load-balancing of traffic on the Pod network. It monitors the changes that happen to Service objects and their endpoints. If changes occur, it translates them into actual network rules inside the node. Kube-Proxy is installed as an add-on during the installation process, usually created as a DaemonSet.

All worker nodes run the kubelet and kube-proxy, as well as the container engine, such as containerd or cri-o. Other management daemons are deployed to watch these agents or provide services not yet included with Kubernetes.

The kubelet interacts with the underlying container runtime also installed on all the nodes, and makes sure that the containers that need to run are actually running. The kubelet is the heavy lifter for changes and configuration on worker nodes ( a PodSpec is a JSON or YAML file that describes a pod). It will work to configure the local node until the specification has been met.

Should a Pod require access to storage, Secrets or ConfigMaps, the kubelet will ensure access or creation. It also sends back status to the kube-apiserver for eventual persistence.

The kube-proxy is in charge of managing the network connectivity to the containers. It does so through the use of iptables entries. It also has the userspace mode, in which it monitors Services and Endpoints using a random high-number port to proxy traffic. Use of ipvs can be enabled, with the expectation it will become the default, replacing iptables.

Kubernetes does not have cluster-wide logging yet. Instead, another CNCF project is used, called Fluentd. When implemented, it provides a unified logging layer for the cluster, which filters, buffers, and routes messages.

Cluster-wide metrics is not quite fully mature, so Prometheus is also often deployed to gather metrics from nodes and perhaps some applications.

**ADD-ON COMPONENTS** - Beside the Control Plane components and the components running on the nodes, a few add-on components are required for the cluster to provide everything discussed so far. This includes

1. The Kubernetes DNS server
2. The Dashboard
3. An Ingress controller
4. Heapster
5. The Container Network Interface network plugin

The command `kubectl api-resources` lists all kubernetes resources and their versions.

The API server exposes an API resource called ComponentStatus, which shows the
health status of each Control Plane component. You can list the components and
their statuses with kubectl:

```bash
kubectl get componentstatuses
```

Kubernetes system components communicate only with the API server. They don’t
talk to each other directly. The API server is the only component that communicates
with etcd. None of the other components communicate with etcd directly, but instead
modify the cluster state by talking to the API server.
Connections between the API server and the other components are almost always
initiated by the components But the API server does connect
to the Kubelet when you use kubectl to fetch logs, use kubectl attach to connect to
a running container, or use the kubectl port-forward command.
The kubectl attach command is similar to kubectl exec, but it attaches
to the main process running in the container instead of running an addi-
tional one.

Although the components on the worker nodes all need to run on the same node,
the components of the Control Plane can easily be split across multiple servers. There can be more than one instance of each Control Plane component running to ensure
high availability. While multiple instances of etcd and API server can be active at the
same time and do perform their jobs in parallel, only a single instance of the Sched-
uler and the Controller Manager may be active at a given time—with the others in
standby mode.

The Control Plane components, as well as kube-proxy, can either be deployed on the
system directly or they can run as pod

The Kubelet is the only component that always runs as a regular system compo-
nent, and it’s the Kubelet that then runs all the other components as pods. To run the
Control Plane components as pods, the Kubelet is also deployed on the master.

All the objects you’ve created throughout this book—Pods, ReplicationControllers,
Services, Secrets, and so on—need to be stored somewhere in a persistent manner so
their manifests survive API server restarts and failures. For this, Kubernetes uses etcd,which is a fast, distributed, and consistent key-value store. Because it’s distributed,
you can run more than one etcd instance to provide both high availability and bet-
ter performance.
The only component that talks to etcd directly is the Kubernetes API server. All
other components read and write data to etcd indirectly through the API server. This
brings a few benefits, among them a more robust optimistic locking system as well as
validation; and, by abstracting away the actual storage mechanism from all the other
components, it’s much simpler to replace it in the future. It’s worth emphasizing that
etcd is the only place Kubernetes stores cluster state and metadata.

## Running an application in Kubernetes

To run an application in Kubernetes, you first need to package it up into one or more container images, push those images to an image registry, and then post a description of your app to the Kubernetes API server.
The description includes information such as the container image or images that contain your application components, how those components are related to each other, and which ones need to be run co-located (together on the same node) and which don’t. For each component, you can also specify how many copies (or replicas) you want to run. Additionally, the description also includes which of those components provide a service to either internal or external clients and should be exposed
through a single IP address and made discoverable to the other components.

When the API server processes your app’s description, the Scheduler schedules the specified groups of containers onto the available worker nodes based on computational resources required by each group and the unallocated resources on each node at that moment. The Kubelet on those nodes then instructs the Container Runtime (Docker, for example) to pull the required container images and run the containers.

Once the application is running, Kubernetes continuously makes sure that the deployed state of the application always matches the description you provided. For example, if you specify that you always want five instances of a web server running, Kubernetes will always keep exactly five instances running. If one of those instances stops working properly, like when its process crashes or when it stops responding, Kubernetes will restart it automatically.

Similarly, if a whole worker node dies or becomes inaccessible, Kubernetes will select new nodes for all the containers that were running on the node and run them
on the newly selected nodes.

While the application is running, you can decide you want to increase or decrease the number of copies, and Kubernetes will spin up additional ones or stop the excess ones, respectively. You can even leave the job of deciding the optimal number of copies to Kubernetes. It can automatically keep adjusting the number, based on real-time metrics, such as CPU load, memory consumption, queries per second, or any other metric your app exposes.

To allow clients to easily find containers that provide a specific service, you can tell Kubernetes which containers provide the same service and Kubernetes will expose all of them at a single static IP address and expose that address to all applications running in the cluster. This is done through environment variables, but clients can also look up the service IP through good old DNS. The kube-proxy will make sure connections to the service are load balanced across all the containers that provide the service.
The IP address of the service stays constant, so clients can always connect to its containers, even when they’re moved around the cluster.

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
kubectl get pods --show-labels
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

kubectl scale --replicas=3 <deployment-name>

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

## INSTALLATION

- Installation option for Kubernetes:-

1. Kubernetes Managed service:- Amazon EKS,Google Kubernetes Engine,Azure Kubernetes Service(AKS)
2. Use Minikube
3. Manual Installation- Install diff component individually -Master Node,Worker Node.

## CONTROLLERS

It includes:-

1. ReplicaSets - Ensures that a specified number of replicas for a pod are running at all times.
2. Deployments - Deployment controller provides declarative updates for pods and ReplicaSets.It manages pods i.e Running a ReplicaSets allows to deploy a number of pods and check their status as single unit,scales a ReplicaSets out of the Pods,Pause and Resume deployments to make changes for larger datasets,getting pod status.
3. DaemonSets - Ensures that all nodes run a copy of specific pod.As nodes are added or removed from cluster,a DaemonSet will add or remove required pods.
4. Jobs - A supervisor process for pods carrying out batch jobs.Run individual processes that run once and complete successfully.
5. Services - Allows communication between one set of deployments with another.Includes Internal services,External services,Load balancer services.

## ORGANIZING APPs

1. Labels - They are key/value pairs that are attached to objects like pods, services and deployments.They are for users of Kubernetes to identify attributes fro objects.E.g
    - "release" : "stable","release": "canary"
    - "environment" : "dev", "environment" : "qa", "environment": "production".
    - "tier" : "frontend", "tier" : "backend", "tier" : "cache"
2. Label selectors - Allows you to identify a set of objects.There are 2 kinds - Equality-based selectors(=,!=) and Set-based selectors(IN,NOT IN,EXISTS).Used with kubectl to list and filter objects.
3. Namespaces - Greater for large enterprises.Allows teams to access resources with accountability.Provides scope for names-must be unique in namespaces.

Here's a breakdown of Kubernetes' core functionalities:

1.  Deployment: Kubernetes automates the deployment of containerized applications across a cluster of nodes.
2.  Scaling: It automatically scales applications up or down based on demand, ensuring optimal resource utilization.
3.  Load Balancing: Kubernetes evenly distributes traffic across different instances of your application, ensuring high availability and responsiveness.
4.  Service Discovery: It enables applications to discover and communicate with each other, regardless of their location within the cluster.
5.  Health Monitoring: Kubernetes monitors the health of your applications and automatically restarts them if they fail.
6.  Security: Kubernetes provides a robust security framework for managing access control and protecting your applications.
7.  Self-healing: Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve.
8.  Horizontal scaling: Scale your application up and down with a simple command, with a UI, or automatically based on CPU usage.

Here is a quick look back at Kubernetes' history:

- 2014: Kubernetes originates from Google's internal container management system, Borg.
- 2015: Kubernetes is open sourced under the Apache License 2.0.
- 2016: The Cloud Native Computing Foundation (CNCF) adopts Kubernetes as a graduated project.
- 2017: Kubernetes 1.0 is released, marking a significant milestone in its development.
- 2023: Kubernetes is the dominant container orchestration platform, used by millions of organizations worldwide.

There are several reasons why Kubernetes has become the leading container orchestration platform: 

1.  Open source: Kubernetes is free to use and modify, allowing for customization and integration with various tools and technologies.
2.  Scalable: Kubernetes can manage thousands of containers across multiple nodes, making it suitable for large-scale applications.
3.  Flexible: Kubernetes supports a wide range of container runtimes and container images, offering flexibility in your application development.
4.  Community-driven: Kubernetes has a large and active community of developers and users, providing invaluable support and resources.
5.  Collaboration: DevOps emphasizes breaking down silos between development and operations teams, encouraging shared responsibilities and improved communication.

## Key Components of Kubernetes

Kubernetes is a powerful container orchestration platform that consists of several key components working together to manage and deploy containerized applications.

`Pod` - A pod is the smallest deployable unit in Kubernetes, representing a single instance of a running process in a cluster. Pods encapsulate one or more containers and share network and storage resources.Pods are the smallest deployable units of computing that you can create and manage in Kubernetes.

A Pod (as in a pod of whales or pea pod) is a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers. A Pod's contents are always co-located and co-scheduled, and run in a shared context. A Pod models an application-specific "logical host": it contains one or more application containers which are relatively tightly coupled. In non-cloud contexts, applications executed on the same physical or virtual machine are analogous to cloud applications executed on the same logical host.

`ReplicaSet` - Manages the lifecycle of pods and ensures that a specified number of replicas for a pod are running at all times. It can scale the number of pods up or down based on defined configurations.

`Deployment`  - Provides declarative updates to applications. Users define the desired state and the deployment controller changes the actual state to match the desired state, facilitating updates and rollbacks.

`Service` - Defines a set of pods and a policy to access them. A service allows communication between different sets of pods in the cluster, abstracting the underlying network details.

`Ingress`  - Communication with pod outside i.e over internet.

`Volume` - Manages storage and provides data persistence for containers. Volumes can be attached to pods, allowing data to persist across pod restarts.

`Namespace` - Provides a way to divide cluster resources into multiple virtual clusters. Namespaces are useful for organizing and isolating resources within a cluster.

`ConfigMap and Secret` - ConfigMaps and Secrets are used to manage configuration data and sensitive information (such as passwords or API keys) separately from the application code.

`Kubernetes Dashboard` - A web-based UI for visually managing and monitoring the Kubernetes cluster. It provides a graphical representation of various resources and allows users to interact with the cluster.

Understanding the roles and interactions of these components is crucial for effectively deploying and managing containerized applications in a Kubernetes cluster.

Kubernetes can be an integral part of Continuous Integration/Continuous Delivery (CI/CD), as it offers many of the necessary components.

Continuous Integration - A consistent way to build and test software. Deploying new packages with code written each day, or every hour, instead of quarterly. Tools like Helm and Jenkins are often part of this with Kubernetes.
Continuous Delivery - An automated way to test and deploy software into various environments. Kubernetes handles the lifecycle of containers and connection of infrastructure resources to make rolling updates and rollbacks easy, among other deployment schemes.

Communication to, as well as internally, between components, is API call-driven, which allows for flexibility. Configuration information is stored in a JSON format, but is most often written in YAML. Kubernetes agents convert the YAML to JSON prior to persistence to the database.

NOTE:
Kubernetes is written in Go Language, a portable language which is like a hybridization between C++, Python, and Java. Some claim it incorporates the best (while some claim the worst) parts of each.

In its simplest form, Kubernetes is made of one or more central managers (aka masters) and worker nodes (we will see in a follow-on chapter how you can actually run everything on a single node for testing purposes). The manager runs an API server, a scheduler, various operators and a datastore to keep the state of the cluster, container settings, and the networking configuration.

Kubernetes exposes an API via the API server: you can communicate with the API using a local client called kubectl or you can write your own client. The kube-scheduler sees the API requests for running a new container and finds a suitable node to run that container. Each node in the cluster runs two components: kubelet and kube-proxy. The kubelet systemd service receives spec information for container configuration, downloads and manages any necessary resources and works with the container engine on the local node to ensure the container runs or is restarted upon failure. The kube-proxy pod creates and manages local firewall rules and networking configuration to expose containers on the network.

## The Borg Heritage

What primarily distinguishes Kubernetes from other systems is its heritage. Kubernetes is inspired by Borg - the internal system used by Google to manage its applications (e.g., Gmail, Apps, GCE). 

With Google pouring the valuable lessons they learned from writing and operating Borg for over 15 years into Kubernetes, this makes Kubernetes a safe choice when having to decide on what system to use to manage containers. While a powerful tool, part of the current growth in Kubernetes is making it easier to work with and handle workloads not found in a Google data center.

## The Twelve Factors

These principles provide great guidance to build web applications that can scale easily, can be deployed in the cloud, and whose build is automated. Borg and Kubernetes address these principles as well.

I. Codebase
One codebase tracked in revision control, many deploys
II. Dependencies
Explicitly declare and isolate dependencies
III. Config
Store config in the environment
IV. Backing services
Treat backing services as attached resources
V. Build, release, run
Strictly separate build and run stages
VI. Processes
Execute the app as one or more stateless processes
VII. Port binding
Export services via port binding
VIII. Concurrency
Scale out via the process model
IX. Disposability
Maximize robustness with fast startup and graceful shutdown
X. Dev/prod parity
Keep development, staging, and production as similar as possible
XI. Logs
Treat logs as event streams
XII. Admin processes
Run admin/management tasks as one-off processes

## Benefits

`ACHIEVING BETTER UTILIZATION OF HARDWARE` - By setting up Kubernetes on your servers and using it to run your apps instead of running them manually, you’ve decoupled your app from the infrastructure. When you tell Kubernetes to run your application, you’re letting it choose the most appropriate node to run your application on based on the description of the application’s resource requirements and the available resources on each node.

By using containers and not tying the app down to a specific node in your cluster, you’re allowing the app to freely move around the cluster at any time, so the different app components running on the cluster can be mixed and matched to be packed tightly onto the cluster nodes. This ensures the node’s hardware resources are utilized as best as possible.

The ability to move applications around the cluster at any time allows Kubernetes to utilize the infrastructure much better than what you can achieve manually. Humans aren’t good at finding optimal combinations, especially when the number of all possible options is huge, such as when you have many application components and many server nodes they can be deployed on. Computers can obviously perform this work much better and faster than humans.


`HEALTH CHECKING AND SELF-HEALING` - Having a system that allows moving an application across the cluster at any time is also valuable in the event of server failures. As your cluster size increases, you’ll deal with failing computer components ever more frequently.

Kubernetes monitors your app components and the nodes they run on and automatically reschedules them to other nodes in the event of a node failure. This frees
the ops team from having to migrate app components manually and allows the team to immediately focus on fixing the node itself and returning it to the pool of available hardware resources instead of focusing on relocating the app.

If your infrastructure has enough spare resources to allow normal system operation even without the failed node, the ops team doesn’t even need to react to the failure

`AUTOMATIC SCALING` - Using Kubernetes to manage your deployed applications also means the ops team doesn’t need to constantly monitor the load of individual applications to react to sudden load spikes. As previously mentioned, Kubernetes can be told to monitor the resources used by each application and to keep adjusting the number of running instances of each application.
If Kubernetes is running on cloud infrastructure, where adding additional nodes is as easy as requesting them through the cloud provider’s API, Kubernetes can even
automatically scale the whole cluster size up or down based on the needs of the deployed applications.


## Setting up a Kubernetes cluster

Kubernetes can be run on your local development machine, your own organization’s cluster of machines, on cloud providers providing virtual machines (Google Compute Engine, Amazon EC2, Microsoft Azure, and so on), or by using a managed Kubernetes cluster such as Google Kubernetes Engine (previously known as Google Container Engine).

## Single-node Kubernetes cluster

**MINIKUBE** - Minikube is a tool that sets up a single-node cluster that’s great for both testing Kubernetes and developing apps locally.Minikube is a single binary that needs to be downloaded and put onto your path. It’s available for OSX, Linux, and Windows.

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

## Hosted Kubernetes cluster

If you want to explore a full-fledged multi-node Kubernetes cluster instead, you can use a managed Google Kubernetes Engine (GKE) cluster. This way, you don’t need to manually set up all the cluster nodes and networking, which is usually too much for someone making their first steps with Kubernetes. Using a managed solution such as GKE makes sure you don’t end up with a misconfigured, non-working, or partially working cluster.

## KUBERNETES CLIENT (KUBECTL)

To interact with Kubernetes, you also need the kubectl CLI client. Again, all you need to do is download it and put it on your path.It has a kubeconfig files that has server information and authentication information to access API server.

To verify your cluster is working, you can use the kubectl cluster-info command shown in the following listing.

```bash
kubectl cluster-info
```

This shows the cluster is up. It shows the URLs of the various Kubernetes components,including the API server and the web console.

The simplest way to deploy your app is to use the kubectl run command, which will create all the necessary components without having to deal with JSON or YAML. This
way, we don’t need to dive into the structure of each object yet:-

```bash
kubectl run <name> --image=<imageName>--port=8080 --generator=run/v1
```

The --image part obviously specifies the container image you want to run, and the --port=8080 option tells Kubernetes that your app is listening on port
8080. The last flag (--generator) does require an explanation, though. Usually, you won’t use it, but you’re using it here so Kubernetes creates a ReplicationController
instead of a Deployment.

- When you ran the kubectl command, it created a new ReplicationController object in the cluster by sending a REST HTTP request to the Kubernetes API server.
The ReplicationController then created a new pod, which was then scheduled to one of the worker nodes by the Scheduler. The Kubelet on that node saw that the pod was
scheduled to it and instructed Docker to pull the specified image from the registry because the image wasn’t available locally. After downloading the image, Docker created and ran the container.

The term `scheduling` means assigning the pod to a node. The pod is run immediately, not at a time in the future as the term might lead you to believe.

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

The main and most important component in your system is the pod. It contains only a
single container, but generally a pod can contain as many containers as you want.

ReplicationControllers are used
to replicate pods (that is, create multiple copies of a pod) and keep them running. In
your case, you didn’t specify how many pod replicas you want, so the Replication-
Controller created a single one. If your pod were to disappear for any reason, the
ReplicationController would create a new pod to replace the missing one.

When a service is created, it gets a static IP, which never changes during the lifetime of
the service. Instead of connecting to pods directly, clients should connect to the service
through its constant IP address. The service makes sure one of the pods receives the con-
nection, regardless of where the pod is currently running (and what its IP address is).
Services represent a static location for a group of one or more pods that all provide
the same service. Requests coming to the IP and port of the service will be forwarded
to the IP and port of one of the pods belonging to the service at that moment.

To scale up the number of replicas of your pod, you need to change the desired
replica count on the ReplicationController like this:

```bash
kubectl scale rc kubia --replicas=3
#replicationcontroller "kubia" scaled
```

The services act as a load balancer standing in
front of multiple pods. When there’s only one pod, services provide a static address
for the single pod. Whether a service is backed by a single pod or a group of pods,
those pods come and go as they’re moved around the cluster, which means their IP
addresses change, but the service is always there at the same address. This makes it
easy for clients to connect to the pods, regardless of how many exist and how often
they change location.

If you’ve been paying close attention, you probably noticed that the kubectl get pods
command doesn’t even show any information about the nodes the pods are scheduled
to. This is because it’s usually not an important piece of information.
But you can request additional columns to display using the -o wide option. When
listing pods, this option shows the pod’s IP and the node the pod is running on:

```bash
kubectl get pods -o wide
```

You can also see the node by using the kubectl describe command, which shows
many other details of the pod

```bash
kubectl describe pod kubia-hczji
```


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
