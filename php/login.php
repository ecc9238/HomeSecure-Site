<?php
/* User login process, checks if user exists and password is correct */

// Escape email to protect against SQL injections
$username = $mysqli->escape_string($_POST['username']);
$result = $mysqli->query("SELECT * FROM users WHERE username='$username'");

if ( $result->num_rows == 0 ){ // User doesn't exist
    $_SESSION['message'] = "User with that email doesn't exist!";
    header("location: php/error.php");
}
else { // User exists
    $user = $result->fetch_assoc();

    if ( password_verify($_POST['psw'], $user['password']) ) {
        
        $_SESSION['email'] = $user['email'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['active'] = $user['active'];
        
        // This is how we'll know the user is logged in
        $_SESSION['logged_in'] = true;

        header("location: php/profile.php");
    }
    else {
        $_SESSION['message'] = "You have entered wrong password, try again!";
        header("location: php/error.php");
    }
}

