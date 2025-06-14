# Chef

`Chef` is a configuration management tool that helps automate the IT infrastructure.Chef can manage infrastructures in the cloud, on bare metal as well as in a hybrid
environment. Chef is a cloud agnostic tool that works with many popular cloud service providers, such as Microsoft Azure, AWS, Openstack and Cloud Platform. The first
version of Chef was developed in Ruby, however the latest version is partly written in Erlang and Ruby. Chef can support infrastructures up to 10.000 nodes.

The main components that form Chef are:

1. Chef workstation: System that is used by the user to interact with Chef. With the Chef workstation, the user is able to develop cookbooks and recipes, manage
the nodes of the infrastructure, synchronize the chef repository and upload cookbooks and other files to the chef server. The user can interact with the chef server using knife, which is a command line tool. The chef repository stores everything that is related to the chef server and nodes. Chef supports multiple workstations for a single chef server.
2. Chef Client node: A virtual or physical machine that is managed by Chef. Chef can also manage nodes located in the cloud. Each node has to include an agent
known as chef client in order to interact with the chef server. The configuration of a node is performed through a built in tool called Ohai, which is used to describe
the node attributes to the chef client.
3. Chef Server: A system that holds everything that is essential for configuring the nodes. The server stores the cookbooks, the used policies on the nodes and
some metadata that describe the nodes that are managed by Chef. The Chef client which is installed on each node asks for the configuration details, such as
recipes and templates from the server, and then applies the configuration to the specified node.

Chef transforms infrastructure into code by using text files called cookbooks, which are the fundamental unit to configure and distribute policies in Chef. Cookbooks define complete scenarios, and include everything that is essential to run this scenario.
Cookbooks are used to group and organize recipes. Recipes are basically scripts written in Ruby that specify the required resources and the order of their application. Ruby is chosen as the reference language for creating cookbooks, with the support of an extended DSL for specialized resources. The chef client is equipped with a variety of resources to support the most common infrastructure scenarios, nevertheless the DSL can always be extended whenever there is more resources with more capabilities are needed.

Chef comes into two versions: commercial and open source. The commercial version is called Enterprise Chef and offers high availability deployment support. It is equipped
with some additional features regarding security and reporting. The open source version has almost all the features of the commercial version except for the extra security and reporting. In addition, open source Chef does not support the installation of components on multiple servers.
