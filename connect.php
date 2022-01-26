<?php
//Connect to DATABASE

//For security, required PHP should "die" if SAFE_TO_RUN is not defined
if (!defined('SAFE_TO_RUN')) {
    //Stops this file from being run directly, displays warning 
    die(basename(__FILE__) . ' cannot be executed directly');
}

//Obtain credentials from credentials.php
require 'credentials.php';

//Validates credentials
if (empty($database_user)) {
    die('$database_user in credentials.php is not set');
}
if (empty($database_password)) {
    die('$database_password in credentials.php is not set');
}

//Connect to the server and selects the database
$database = mysqli_connect($database_host, $database_user, $database_password);
if (!$database) {
    echo '<pre>host: ' . htmlspecialchars($database_host) . '</pre>';
    echo '<pre>user: ' . htmlspecialchars($database_user) . '</pre>';
    echo '<pre>password: ' . htmlspecialchars($database_password) . '</pre>';
    die('Unable to connect to database');
}

if (!$database->select_db($database_name)) {
    echo '<pre>name: ' . htmlspecialchars($database_name) . '</pre>';
    die('Unable to select database: ' . $database->error);
}