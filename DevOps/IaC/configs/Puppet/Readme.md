# Puppet

`Puppet` is another popular configuration management tool that helps organize and configure servers. Puppet executes the configuration plans through an abstraction layer that describes the configuration elements as generic objects.

The user has to declare the resources and their attributes and that are given to Puppet as input to properly configure the resources. Puppet receives the catalog of the
described resources and compares the existing state of the resources with the described one. Then it decides which actions need to be taken in order to reach an agreement
between the requested state and the current state of the resources. This approach is declarative [22], since the user declares how the configuration should look like and then Puppet takes all the necessary actions to reach that intended configuration. This is the main difference with Chef, which follows a procedural approach in which the user has to describe the necessary steps to reach the desired state.

In Puppet, the resource definition files are called manifests and are written in a DSL, quite similar to Ruby. However, the user cannot simply write Ruby code in the manifests and have them executed. The manifests can be executed over and over again resulting to the same results that always match the described state.

Puppet has two main components for configuring servers: the puppet agent and the puppet master. The puppet program itself is called Puppet agent when it runs in a
daemon mode on the server. The puppet master is a daemon that runs on the master server of the cluster and defines which configurations would apply to which server and
also stores all the configuration information in a central location. The puppet agent asks the configurations from the puppet master at specific time intervals, and when there is a need of change the puppet agent actually implements the change. The communication between these two components is performed over a secure encrypted channel by using the SSL protocol.
