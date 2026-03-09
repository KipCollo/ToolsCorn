<?php
// $conn = "postegres@localhost:5432/security";
// pg_connect($conn);

// $con = new mysqli("127.0.0.1", "root","root");
$con = mysqli_connect("127.0.0.1", "root","root","grocerry");
echo $con->host_info;

$query = "select * from admin";
$data = mysqli_query($con,$query);
foreach($data as $res){
    echo $res['id'];
}