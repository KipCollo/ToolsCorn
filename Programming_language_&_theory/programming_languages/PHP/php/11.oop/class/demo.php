<?php

class Demo{

    public $value =20;

    function __construct(){
        print "Initialised";
    }

    public function displayValue(){
        // return $this->value;
        echo $this->value;
    }

}
