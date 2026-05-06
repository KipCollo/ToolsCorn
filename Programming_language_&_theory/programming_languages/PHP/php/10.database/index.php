<?php
// $conn = "postegres@localhost:5432/security";
// pg_connect($conn);

// $con = new mysqli("127.0.0.1", "root", "root");
$con = mysqli_connect("127.0.0.1", "root", "root", "hms");
// echo $con->host_info;

$query = "select * from room_beds";
$data = $con->query($query);

while (list($room_bed_no, $room_master_id, $bed_name, $nStatus, $patient_no, $InActive) = $data->fetch_row())
    printf("Bed NO ID: %d Room ID: %s: Bed Name: %s, Bed Status: %s, Patient No: %d Active: %d \n <br/>", $room_bed_no, $room_master_id, $bed_name, $nStatus, $patient_no, $InActive);
// $data = mysqli_query($con, $query);
// foreach ($data as $res) {
//     echo $res['id'];
// }

// $insert = "insert into room_beds( room_master_id, bed_name, nStatus, patient_no, InActive) values (16, 'RM-101-1', 'Vacant', 0, 0)";
// $con->query($insert);
$delete = "delete from room_beds where room_bed_id=331";
$con->query($delete);