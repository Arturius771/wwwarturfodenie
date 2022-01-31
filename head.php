<?php 
$activePage = basename($_SERVER['PHP_SELF'], ".php");
$title = 'Artúr Foden';
if ($activePage == 'projects'){
    $title = 'Projects';
}
if ($activePage == 'resume'){
    $title = 'Résumé';
}
if ($activePage == 'files'){
    $title = 'Files';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="author" content="Artúr Foden">
	<meta name="description" content="Artúr Foden's Personal Website">
    <title><?=$title;?></title>
    <link rel="stylesheet" href="styles.css">
</head>
