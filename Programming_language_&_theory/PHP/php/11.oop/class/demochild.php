<?php

include 'demo.php';
 class DemoChild extends Demo{

    function __construct(){
        parent::__construct();
        print "Child Initialised";
    }
}