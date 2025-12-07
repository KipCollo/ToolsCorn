<?php

include 'enum.php';
function bankAccess(Payment $payment){
    print($payment);
}

$value = Payment::MPESA;

bankAccess($value);

bankAccess(Payment::KCB);