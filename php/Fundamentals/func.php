<?php

function printHello(){
    echo 'Hello';
}

function sayIt($yourName, $loudly = 'loud'){
    echo $yourName.' '.$loudly;
}

function add($num, $num2 = 0){
    return $num + $num2;
}

$phrase = 'I like to eat apples';
$phrase = str_replace('apples','orange',$phrase);
//echo $phrase;

$name_array  = array('Brad','Bob','Mike','Sarah','Michelle');
print_r($name_array);

$name_string = implode(', ',$name_array);
echo $name_string;
echo PHP_EOL;
$car_string = 'toyota,ford,nissan,dodge,kia,mazda';

echo $car_string;
echo PHP_EOL;

$car_array= explode(',',$car_string);
print_r($car_array);
echo PHP_EOL;
echo ucwords('hello world');
echo PHP_EOL;
echo strtolower('Hello WORLD');
echo PHP_EOL;

ECHO count($car_array);
echo PHP_EOL;
sort($car_array);
print_r($car_array);