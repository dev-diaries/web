---
layout: post
title:  "Getting to know kubernetes"
date:   2020-10-01 11:13:12 +0800
type: "GettingStarted"
image: /assets/images/kubernetes.png
excerpt: "You've probably heard of Kubernetes aka k8s if you've chatted about devops or containerization. Is it just the shiny new(ish) thing? Let's take a look into what it is and what we can do with it."
tags: [kubernetes]
categories: [intermediate, getting-started, intro, kubernetes, containerization, devops]
---

{:.center}
# {{ page.title }}

{:.post-date .center}
## {{ page.date | date_to_long_string }}

{:.js-read-time .time .center}
.

{:.intro}
Kubernetes, first and foremost is an open source platform for automating container operations.
It allows you to automate deployments and scale and manage your containzerized applications.
In order to run containers, k8s uses a container runtime. Most commonly Docker
is used, but it also supports others such as <a href="https://cri-o.io/" target="_blank">CRI-O</a>
and <a href="https://containerd.io/" target="_blank">Containerd</a>.

<div class="resources-container" markdown="1">
{:.resources-title}
## Our favorite guides

{:.resources-content}
* [Kubernetes Official Documentation: What is Kubernetes](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)
* [Freecodecamp: A Friendly introduction to k8s](https://www.freecodecamp.org/news/a-friendly-introduction-to-kubernetes-670c50ce4542/)
* [Dev.to: Sendil Kumar N: Kubernetes for everyone](https://dev.to/sendilkumarn/kubernetes-for-everyone-opb)
</div>

{:.image .center}
![k8s image]({{page.image}})


## What is it?

{:.post-content}
Kubernetes is quite powerful and the list of what it can do is long:

{:.links}
- Service discovery and load balancing - handles traffic routing to your containers
- Storage orchestration - we touch on sharing volumes in Kubernetes in our post "[Shared Volume in Kubernetes - Using hostPath](http://localhost:4000/social-posts/shared-volume-in-kubernetes/)"
- Automated rollouts and rollbacks - match a described desired state for your containers
- Automatic bin packing - set how much CPU and RAM a container can use
- Self-healing - automatically restarts failed containers, kills dead ones, and replaces containers
- Secret and configuration management


## Concepts

{:.post-content}
Kubernetes has a concept of objects which operate on a
<a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/" target="_blank">"record of intent"</a>
which means once you create an object k8s will work to ensure that object exists.
Said another way, you provide a desired state and k8s will look to match that described
desired state. The basic objects to know are:
- Pod: can be a one or more containers that share storage and network resouruces and
a specification for how to run the container. If you're thinking in Docker concepts
a Pod is similar to a group of Docker containers with shared namespaces and shared
filesystem volumes. You'll typically create a pod by describing a Deployment or a job.
A pod runs on a <a href="https://kubernetes.io/docs/concepts/architecture/nodes/" target="_blank">node</a> which can be a virtual or physical machine.
- Service: defines a logical set of Pods and policies used to access them. A service
solves the problem of keeping track of IP addresses so that workloads can connect
to each other. A pod is typically targeted by a service using a selector:

{% highlight html %}
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
{% endhighlight %}

{:.post-content}
And see the deployment file that will provide the pod:

{% highlight html %}
apiVersion: apps/v1
kind: Deployment
metadata:
  name: MyApp
spec:
  replicas: 1
  selector:
    matchLabels:
      app: MyApp
  template:
    metadata:
      labels:
        app: MyApp
{% endhighlight %}

{:.post-content}
There are controllers provided by k8s which are built upon basic k8s objects:

{:.links}
- ReplicaSet - ensures that a specified number of Pod replicas are running at any given time
- Deployment - as mentioned above, a deployment is used to provide declarative updates for Pods and/or
ReplicaSets.
- Job - used to perform some task and exist after successfully completing their
work or after a given period of time.


## Docker vs. Kubernetes

{:.post-content}
Docker provides a standard for packaging and distributing containerized applications. Kubernetes
provides a framework for coordinate and schedule these applications. Docker runs on a single
node while k8s is designed to run across a cluster. By default Docker uses host-private
networking so containers can talk to each other only if they're on the same machine.
Therefore in order for Docker containers to communicate across nodes certain ports must
be allocated on the machine's IP and then forwarded or proxied to the containers. This can prove to be
difficult to manage and coordinate at scale. In k8s each pod gets its own cluster-private
IP address so explicit links between pods isn't needed to connect them. When running
a pod with a service a tool called
<a href="https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/" target="_blank">kubelet</a> adds a set of environment variables
for each active Service.

{:.post-content}
In general when talking about the two, Docker can be seen as a potential
ground on which k8s sits and is built upon.

{:.post-content}
Hungry for more kubernetes content and resources? Check out <a href="https://github.com/ramitsurana/awesome-kubernetes" target="_blank">Awesome kubernetes</a>
for all of the k8s resources you could ever dream of!

