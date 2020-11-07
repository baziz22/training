//Loop practise

<?php
$j = 0;
do {
    echo 'this is do number ' . $j . "<br />";
    $j++;
} while($j < 5);

include 'classes/car.php';

// Create an object or a new object.
// ➘ This is called instantiate a class.
$car1 = new Car('HOnda', 'Accord', 'Red');



$car1 -> start();
echo PHP_EOL;
//$car1 -> setMake('Velvo');
echo $car1 -> getMake();