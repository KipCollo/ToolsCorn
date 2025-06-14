# Openstack Heat

`Heat` is a product of the Openstack Foundation and is the main tool of the Openstack Orchestration program.Heat uses template files in the form of text files to deploy and set up multiple cloud resources of the desired IT infrastructure.

The infrastructure resources that can be used include: servers, volumes etc. The Openstack Telemetry is also supported by Heat so that the user can include in the
template file a scaling groups a possible resource. In addition, the user can declare the connections and the dependencies between the resources. Heat uses these
relationships in order to call the Openstack APIs that are responsible for the creation of the infrastructure, as prescribed by the user. The user can easily change the
infrastructure by simply modifying the template file, and then Heat takes all the necessary steps to adjust the infrastructure to the desired state. Heat also deletes all the unused resources after application finishes its execution.

Heat supports an Openstack-native Rest API as well as a Cloud Formation-compatible Query API and the Heat template files are highly integrated with popular software
configuration management tools such as Puppet and Chef. The Heat team is currently making the Heat template format compatible with the AWS Cloud Formation template
format, so that many existing Cloud Formation templates can also be run on Openstack.
