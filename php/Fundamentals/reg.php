<?php

$x = 4;

if ($x < 4){
    echo $x. ' is less than 4';
}else if ($x > 4) {
    echo $x. ' is greater than 4';
}else {
    echo $x. ' equals to 4';
}
echo PHP_EOL;
switch($x){
    case 3:
        echo $x. ' is less than 4';
        break;
    case 4:
        echo $x. ' equals to 4';
        break;
    default:
        echo $x. ' is greater than 4';
}


