<?php

//$conn = mysqli_connect(sql303.epizy.com,epiz_25551035, cy01gk23,epiz_25551035_ajaxtest);
//$conn = mysqli_connect('sql303.epizy.com','epiz_25551035', 'cy01gk23','epiz_25551035_ajaxtest');


include_once ('connected.php');


if($dbSuccess){
    echo 'Processing......';

    if (isset($_GET['firstname'])) {
        echo "GET: Your Name is: " . $_GET['firstname'];
    }

//    if (isset($_POST['firstname'])) {
//        echo "POST: Your Name is: " . $_POST['firstname'];
//    }

    if (isset($_POST['firstname'])) {
        $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);

        $query = "INSERT INTO users(firstname) VALUES ('$firstname')";
        if (mysqli_query($conn, $query)) {
            echo $firstname . " user added!";
        } else {
            // get the actual error
            echo "ERORR: " . mysqli_error($conn);
            // echo "POST: Your Name is: " . $_POST['firstname'];
        }
    }


}
