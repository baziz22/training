<?php

include 'func.php';

printHello();
echo PHP_EOL;
sayIt('Bader' );
echo "\n";
echo add(6, 8);

// include, include_once, require, require_once
// The biggest different is how handles error if files if
// it can't find the file.
// include : the rest of the script will still go on.
// require : the entire script halts and you just get an error.