<?php

$num = 2;
$foo = $num ." be";
$bar = "or not " .$num. " be";

echo $foo . ' ' . $bar . "\n";

echo $num * $num * $num;

$arr = [
    "first" => "Tom",
    "second" => "Bipin",
    "best" => "DS"

];

$arr2 = [1,1,2,3,5,8];

if (true) {
echo "\nTRUE\n";

}

while(true) {
// This way it doesn't actually do anything
    break;
}

# This is also a comment
/* This is
a multiple
line comment */

// echo "<ul>";
// foreach($arr as $key=>$val) {
//     echo "<li>".$key ." is ".$val."</li>";
// }
// echo "</ul>";

function printAndEncode( $val) {
    echo json_encode(
        $val, 
        JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR
    );
}


// turning array into json
echo json_encode(
    $arr, 
    JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR
);

// Naming conventions
// JS & PHP : camelCase - do this
// HTML & CSS: kebab-case
// C# : snake_case






















