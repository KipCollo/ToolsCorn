# Ansible

Ansible is an open-source automation tool used for configuration management,application deployment,cloud provisioning,intra-service orchestration and task automation.When used as configuration management tool,it is used to store current state of our systems and help us maintain that state,makes changes and deployments faster,removing potential for human error.

Ansible is another powerful configuration management tool. The uniqueness of Ansible compared to other management tools is that it is also used for deployment and
orchestration. Ansible is especially developed to be simple, secure, reliable and easy to learn. It offers a variety of features for an expert user but it is equally accessible to less skilled users.

`Configuration Management`:It is a process for maintaining computer systems,servers and software in desired consistent state.

Ansible does not use agents, and no additional software should be installed on the remote servers in order to manage them. Ansible manages the remote machines by
using the remote management frameworks that already exists natively on the OS, for instance, SSH for Linux and UNIX machines and WinRM for Windows machines. The absence of agents results in less resource consumption on the managed machines when Ansible is not operating on them. Ansible also improves security by functioning in a push-based model where the remote machines receive only the necessary parts of the code (called modules), and the remote machines cannot interact or interfere with the
configuration of the other machines. These features made Ansible suitable for high
security and high performance systems.

In Ansible, the definition files to configure, automate and manage the IT infrastructure are called Playbooks. These files are written in YAML format and they describe how to perform an operation by clearly stating what should be done by each component of the infrastructure. Each Playbook consists of a list of plays that describe the automation process to a set of hosts, called the inventory. Each play includes several tasks that refer to a single host or a group of hosts in the inventory. Each task calls a module,which is a small piece of code that performs a specific job. The tasks vary from simple jobs to complex operations. Ansible can also enclose Playbook tasks into units known as roles. Ansible uses roles to apply commonly used configurations in several scenariosin a rapid and easy way.

Ansible was developed in a way that facilitates extensibility. The user has always the possibility of extending the native 450+ Ansible modules by writing his own modules.The built-in modules are written in Python and PowerShell, but the user can use any programming language to develop new ones, with the only restriction that they have JSON as input format and produce JSON as output format. In addition, Ansible can be extended to support dynamic inventory, which allows the Playbooks to be executed on a group of machines and infrastructure that are not constant and statically defined, but can run a public or private cloud provider that supports the dynamic creation and deletion of the resources. Ansible supports most of the well-known cloud providers and can always be extended to support new providers by simply writing a custom program (in any programming language) that gives a JSON inventory definition as output.

Ansible is an open source project promoted by Red Hat. The paid commercial version ofAnsible is called Red Hat Ansible Tower, and offers management to complex multi-tier
deployments by adding control and technical support to Ansible supported systems.

## How Ansible Works

A user is using Ansible to configure three Ubuntu-based web servers to run nginx. She has written an Ansible script called webservers.yml. In Ansible, a script is called a play‐book. A playbook describes which hosts (what Ansible calls remote servers) to configure, and an ordered list of tasks to perform on those hosts. In this example, the hosts are web1, web2, and web3, and the tasks are things such as:
• Install nginx
• Generate an nginx configuration file
• Copy over the security certificate
• Start the nginx service

Ansible will make SSH connections in parallel to web1, web2, and web3. It will execute the first task on the list on all three hosts simultaneously.
It’s important to note that:
• Ansible runs each task in parallel across all hosts.
• Ansible waits until all hosts have completed a task before moving to the next task.
• Ansible runs the tasks in the order that you specify them.

Ansible works by connecting to nodes and pushing out small programs called "Ansible modules" to perform the required tasks.These programs are written to be resource models of desired state of system.Ansible then executes these modules and remove them when finished.

`Ansible modules` can be written in any language that can return JSON.There's also various Python APIs for extending Ansible's connection types(SSH is not the ony transport)

## Ansible Concepts

- Control Node:- Any machine with Ansible installed.We can run Ansible commands and playbooks by invoking the ansible or ansible-playbook command from any control node.we can use any computer that has Python installed as control node.However we cannot use a window machine as a control node.We can have multiple control node as well.

- Collections:- Are a distribution format for Ansible content that can include playbooks,roles,modules and plugins.We can install and use collections through Ansible Galaxy.

- Tasks:- Are unit of actions in Ansible.We can execute a single task once with ad hoc command.

- Playbooks:- Ordered list of tasks,saved so we can run those tasks in that order repeatedly.Can include variables,tasks.Are written in YAML and are easy to read,share and write.

- Managed Nodes:- Are network devices,servers that are managed by Ansible Managed nodes can also be called *hosts*.Ansible is not installed on managed nodes.

- Inventory:- A list of managed nodes.An inventory fie is also referred as *hostfile*.Can specify info like IP address for each managed nodes.Typically located at /etc/ansible/host, provide a custom inventory path using *-i* parameter when running commands & playbooks.

- Modules:- Units of code Ansible executes.Each module has a particular use,from administering users on a specific type of database to managing VLAN interfaces on specific type of network device.We can invoke a single module with a task,or invoke several diff modules in a playbook.

## Installing Ansible

you can install it using pip, Python’s package manager. You can install it as root by running:

```bash
sudo pip install ansible
```

If you don’t want to install Ansible as root, you can safely install it into a Python virtualenv. If you’re not familiar with virtualenvs, you can use a newer tool called pipsi that will automatically install Ansible into a virtualenv for you:

```bash
wget https://raw.githubusercontent.com/mitsuhiko/pipsi/master/get-pipsi.py
python get-pipsi.py
pipsi install ansible
```

If you go the pipsi route, you’ll need to update your PATH environment variable to include ~/.local/bin. Some Ansible plug-ins and modules might require additional Python libraries. If you’ve installed with pipsi, and you wanted to install docker-py (needed by the Ansible Docker modules) and boto (needed by the Ansible EC2 modules), you’d do it like this:

```bash
cd ~/.local/venvs/ansible
source bin/activate
pip install docker-py boto
```

If you’re feeling adventurous and want to use the bleeding-edge version of Ansible,you can grab the development branch from GitHub:

```bash
git clone https://github.com/ansible/ansible.git --recursive
```

If you’re running Ansible from the development branch, you’ll need to run these commands each time to set up your environment variables, including your PATH
variable so that your shell knows where the ansible and ansible-playbooks programs are.

```sh
cd ./ansible
source ./hacking/env-setup
```

Ansible uses /etc/ansible/hosts as the default location for the inventory file.

## Playbooks

A play
A playbook is the term that Ansible uses for a configuration management script.The ansible-playbook command executes playbooks. To run the playbook, do:

```bash
ansible-playbook web-notls.yml
```

Ansible playbooks are written in YAML syntax. YAML is a file format similar in intent to JSON, but generally easier for humans to read and write.
Executes modules in a sequence.


```yaml
# Create a jenkins job
- hosts: webservers
  remote_user: root
- jenkins_jon:
  config: "{{ lookup('file`, 'templates/test.xml')}}"
  name: test
  password: admin
  url: http://localhost:8080
  user: admin
```

```yaml
- hosts: database
  remote_user: root

- name: create table
  postgesql_table:
    table: user

- name: set ownership 
  postgresql_table:
    name: user
    owner: dev
```

## Inventory

The collection of hosts that Ansible knows about is called the `inventory`.
**The Inventory File**:- The default way to describe your hosts in Ansible is to list them in text files, called inventory files. A very simple inventory file might just contain a list of hostnames

Ansible uses your local SSH client by default, which means that it will understand any aliases that you set up in your SSH config file.This does not hold true if you configure Ansible to use the Paramiko connection plug-in instead of the default SSH plug-in.

There is one host that Ansible automatically adds to the inventory by default: localhost. Ansible understands that localhost refers to your local machine, so it will interact with it directly rather than connecting by SSH.
Although Ansible adds the localhost to your inventory automatically, you have to have at least one other host in your inventory file;otherwise, ansible-playbook will terminate with the error: `ERROR: provided hosts list is empty`
In the case where you have no other hosts in your inventory file,you can explicitly add an entry for localhost like this:`localhost ansible_connection=local`.

```yaml
10.24.0.100

[webservers]
10.24.0.1
10.24.0.2

[database]
10.24.0.7
10.24.0.8
```

- ansible_connection
Ansible supports multiple transports, which are mechanisms that Ansible uses to connect to the host. The default transport, smart, will check to see if the locally installed SSH client supports a feature called ControlPersist. If the SSH client supports Control‐Persist, Ansible will use the local SSH client. If the SSH client doesn’t support

## Step By Step Details

- Step 01 - Creating EC2 Instances for Ansible - Manually and with Terraform
- Step 02 - Setting Ansible Project with cfg and ansible hosts
- Step 03 - Playing with Ansible Commands
- Step 04 - Playing with Ansible Host File and Custom Groups
- Step 05 - Creating an Ansible Playbook for Ping
- Step 06 - Understanding Ansible Terminology - Control Node, Managed Nodes, Inventory
- Step 07 - Creating New Ansible Playbook for Executing Shell Commands
- Step 08 - Playing with Ansible Variables
- Step 09 - Creating New Ansible Playbook for Understanding Ansible Facts
- Step 10 - Creating New Ansible Playbook for Installing Apache and Serving HTML
- Step 11 - Reuse and Executing Multiple Ansible Playbooks
- Step 12 - Understanding Conditionals and Loops with Ansible
- Step 13 - Configuring EC2 Dynamic Inventory with Ansible
- Step 14 - Creating AWS EC2 Instances with Ansible
- Step 15 - Providing Declarative Configuration with Ansible
- Step 16 - Deleting all AWS EC2 Instances

### Prerequisites

- 3 EC2 Instances

  - 2 using Terraform
  - 1 Manually
  - You can use which ever approach you are comfortable with

- EC2 Keys - `ls ~/aws/aws_keys/default-ec2.pem`

- AWS CLI - `aws configure`

```sh
# or
export AWS_ACCESS_KEY_ID=**************
export AWS_SECRET_ACCESS_KEY=**************
```

- boto3 and botocore - For EC2 Dynamic Inventory and Creating EC2 Instances

```sh
# TEst
python
# boto3 quick start
> import boto3
> client = boto3.client('ec2')
```

### Create EC2 Instances using Terraform

```sh
cd terraform/backup/09-multiple-ec2-instances
export AWS_ACCESS_KEY_ID=**************
export AWS_SECRET_ACCESS_KEY=**************
terraform init
terraform apply
ls ~/aws/aws_keys/ # Make sure that the keys file is present
```

### Ansible Commands

```sh
cd /in28Minutes/git/devops-master-class/ansible 
ansible --version
ansible -m ping all
ansible all -a "whoami"
ansible all -a "uname"
ssh -vvv -i ~/aws/aws_keys/default-ec2.pem ec2-user@3.83.104.44
ls ~/aws/aws_keys/default-ec2.pem
chmod 400 /Users/rangaraokaranam/aws/aws_keys/default-ec2.pem
ansible all -a "uname"
ansible all -a "uname -a"
ansible all -a "pwd"
ansible all -a "python --version"
ansible dev -a "python --version"
ansible qa -a "python --version"
ansible first -a "python --version"
ansible groupofgroups -a "python --version"
ansible devsubset -a "python --version"
ansible --list-host all
ansible --list-host dev
ansible --list-host first
ansible --list-host \!first
ansible --list-host qa:dev
ansible-playbook playbooks/01-ping.yml
ansible-playbook playbooks/02-shell.yml 
ansible-playbook playbooks/03-variables.yml 
ansible-playbook playbooks/03-variables.yml -e variable1=CommandLineValue
ansible-playbook playbooks/04-ansible-facts.yml 
ansible-playbook playbooks/05-install-apache.yml 
ansible-playbook playbooks/06-playbooks.yml 
ansible-playbook playbooks/06-playbooks.yml --list-tasks
ansible-playbook playbooks/06-playbooks.yml --list-hosts
ansible-playbook playbooks/06-playbooks.yml --list-tags
ansible-playbook -l dev playbooks/01-ping.yml
ansible-playbook playbooks/07-conditionals-and-loops.yml 
ansible-inventory --list
ansible-inventory --graph
ansible-playbook playbooks/08-dynamic-inventory-ping.yml 
ansible-playbook playbooks/09-create-ec2.yml 

```

Ansible Tower - UI dashboard.
