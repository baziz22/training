<?php
$host = 'sql303.epizy.com';
$user = 'epiz_25551035';
$pw = 'cy01gk23';
$db = 'epiz_25551035_ajaxtest';
$conn = mysqli_connect($host,$user,$pw);
$dbSelected = mysqli_select_db($conn, $db);
$dbSuccess = false;
if (!$conn){ // Connect and Test MySQL and specific DB ( return $dbSuccess = T/F)
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
//echo 'connected';
}else{
    if($dbSelected){
        echo "Connected! ";
        $dbSuccess = true;
    }else {
        echo "DB selected Failed <br /><br />";
    }
}
