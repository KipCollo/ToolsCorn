<?php
class Bicycle
{
    var $brand;
    var $model;
    var $year;

    var $description;
    public float $weight_kg;

    function name()
    {
        return "brand name is" . "" . $this->brand . " model is" . $this->model . "made in year" . $this->year;
    }
    function weight_lbs()
    {
        return $this->weight_kg * 2.2046226218;
    }
    function set_weight_lbs()
    {
    }

}

$trek = new Bicycle;
$trek->brand = 'Trek';
$trek->model = 'Emonda';
$trek->year = '2017';
$trek->weight_kg = 2.0;

echo $trek->name() . "<br />";

echo $trek->weight_kg . "<br />";
echo $trek->weight_lbs() . "<br />";
?>