# Saltstack

`Saltstack` is a configuration management tool that is also used for orchestrating the infrastructure. It configures, changes and updates the IT infrastructure through a central repository. It can operate on physical, virtual and cloud servers.

Like the previous IaC tools, Saltstack aims to automate the administrative and code deployment tasks and reduce the chance of human error, by removing the manual
processes as much as possible. In order to achieve that, Saltstack uses both the push and the pull method to configure the servers. It pulls configuration files and code from a central repository such as Github, and then it pushes these files to the servers remotely.

Saltstack has two main components: the Salt master and the Salt minion. The master is the central server and all minions are connected to it to get instructions. The connection between the master and the minions is encrypted based on cryptographic hashes. The minions can be commanded by the master after using public key authentication. The minions can run without a master, but the full potential of Saltstack is leveraged in a master-minions network. The user can push updates and configuration files through the master to the minions, or schedule the minions to check the master at specific time slots and pull available updates and configurations.

The Saltstack’s management architecture is highly event-driven and offers self-dependence and healing to the system, as it leverages both the push and pull methods for updating and recovering from errors.

Saltstack includes some other important features, such as the Salt reactors, agents,minions, grains and pillars. The Salt reactors are responsible for listening for new events on the minions, while the Salt agents use secure shell to run commands on the target nodes. The minions are agents themselves that are installed on the remote servers to push commands. The Salt grains provide valuable information about the managed servers and the Salt pillars are the configuration files.

Saltstack is different from the other configuration management tools because it is fast and can operate in a multithreaded manner, so that it can perform multiple tasks
simultaneously. In addition, Saltstack is developed in Python and uses it to write the configuration scripts. However, it can also render scripts developed in other languages such as YAML and JSON. That makes Saltstack a language agnostic tool that is easily accessible to a wide audience of software developers.

Saltstack is an open source framework that is operated from the Command Line Interface (CLI). The paid edition is called Saltstack Enterprise and comes with some
additional features, such as a GUI support and the support for Windows, macOS and Solaris servers. The Enterprise version can also store the events in a database, offering an auditable history of the events to the user.