// Fetch data from json file
<?php
    $jsondata = file_get_contents("movies.json");
    $json = json_decode($jsondata,true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Movies</title>
</head>
<style>
    h1{text-align: center;}
    h4{margin:0; padding: 5px;background:#f4f4f4;}
    h5{list-style: none;padding-left: 5px;}
    #container{width: 600px; margin:auto;overflow:hidden;}
</style>
<body>
<div id="container">
    <h1>My Favorits Movies</h1>
    <ul>
        <?php
        foreach ($json['movies'] as $key => $value){
            echo '<h4>'.$value['title'].'</h4>';
            echo '<h5>'.$value['year'].'</h5>';
            echo '<h5>'.$value['genre'].'</h5>';
            echo '<h5>'.$value['director'].'</h5>';
        }

        ?>

    </ul>
</div>
</body>
</html>