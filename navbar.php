<?php $activePage = basename($_SERVER['PHP_SELF'], ".php");?>
<!--Navigation Bar-->
<div class="navbar">
    <a class="main_image" href="index.php"><img src="files/logo.png" alt="Clickable image that links to homepage"></a>
	<a class="navbar <?=($activePage == 'index') ? 'active_link':'';?>" href="index.php">Home</a>
	<a class="navbar <?=($activePage == 'projects') ? 'active_link':'';?>" href="projects.php">Projects</a>
	<a class="navbar <?=($activePage == 'resume') ? 'active_link':'';?>" href="resume.php">CV / Skills</a>
	<a class="navbar <?=($activePage == 'files') ? 'active_link':'';?>" href="files.php">Files</a>
</div>
