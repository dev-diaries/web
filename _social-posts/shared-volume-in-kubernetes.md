---
layout: social-post
type: "SocialPosts"
title: "Shared Volume In Kubernetes - Using hostPath"
cover-image: /assets/images/shared-volumes-k8s.png
image: /assets/images/.gif
excerpt: "Since data by nature in a container doesn't persist it is useful to be able to use a volume to allow data to persist across deployments. We wrote about this in our Docker post and it is a bit different in Kubernetes."
date: 2020-09-23
categories: [intermediate, kubernetes, docker, virtualization, storage, volumes]
instagram-id:
docs: https://kubernetes.io/docs/concepts/storage/volumes/#hostpath
---
{:.center}
# {{ page.title }}

{:.post-content}
Since data by nature in a container doesn't persist it is useful to be able to
use a volume to allow data to persist across deployments. We wrote about this
in [Docker](/social-posts/docker-volumes/) and it is a bit different in Kubernetes.
Multiple pods can share a data volume and can also reattach data volumes if a pod
is scheduled on a different node. In most cases the assumption is that you are
using some kind of cloud provider which comes with the ability to provide the storage
mechanism for a volume.

{:.post-content}
A <a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes/" target="_blank">persistent volume (PV)</a>
"is a storage resource that is created and managed by the Kubernetes API that can exist
beyond the lifetime of an individual pod."
(<a href="https://docs.microsoft.com/en-us/azure/aks/concepts-storage#persistent-volumes">Source - Azure Docs</a>)
A PersistentVolumeClaim is the type of StorageClass with a particular access mode, and size
that is directly tied to a Persistent Volume and allows you to request the desired
storage type.

{:.post-content}
Similar to our Docker example that we mentioned in the beginning, for our Kubernetes
example we want to map a volume from the host node's filesystem into a pod. As mentioned earlier
we'll need a PersistentVolume (PV) and PersistentVolumeClaim (PVC) and a pod or deployment
that references the volume.

{% highlight yaml %}
# my-app-pv.yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-app-volume
  labels:
    type: local
spec:
  storageClassName: manual-my-app
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/home/my-user/my-app/data"

# my-app-pvc.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-app-volume
spec:
  storageClassName: manual-my-app
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi

# my-app-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        ports:
          - containerPort: 80
        volumeMounts:
        - mountPath: /my-app/data
          name: my-app-volume
      volumes:
      - name: my-app-volume
        persistentVolumeClaim:
          claimName: my-app-volume
{% endhighlight %}


{:.image .center}
![]({{page.image}})

{:.post-content}
Read more about it <a href="{{page.docs}}" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
