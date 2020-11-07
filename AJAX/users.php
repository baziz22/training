<?php
    include_once ('connected.php');

    if($dbSuccess) {
        echo " success";
        $query = 'SELECT * FROM users';

        // Get Result
        $result = mysqli_query('$conn', $query);

        // Fetch Data
        $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
        //echo $users;
        echo json_encode($users);
    }