<?php
//phpinfo();
printf("I want to achieve some goals in %d %s", 30, "weeks");

// $heavyweight = "Lennox Lewis";
// $lightweight = "Floyd Mayweather";
// echo $heavyweight, " and ", $lightweight, " are great fighters.";

$ip_address = "127.0.0.1";
if (!filter_var($ip_address, FILTER_VALIDATE_IP)) {
    echo "Invalid IP";
} else {
    echo "Valid IP";
}
?>