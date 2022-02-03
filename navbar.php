<?php $activePage = basename($_SERVER['PHP_SELF'], ".php");?>
<!--Navigation Bar-->
<div class="navbar">
    <a href="index.php"><img class="navbar" src="files/logo.png" alt="Clickable image that links to homepage"></a>
	<a class="navbar <?=($activePage == 'index') ? 'active_link':'';?>" href="index.php">Home</a>
	<a class="navbar <?=($activePage == 'projects') ? 'active_link':'';?>" href="projects.php">Project Experience</a>
	<a class="navbar <?=($activePage == 'resume') ? 'active_link':'';?>" href="resume.php">Résumé/Skills</a>
	<a class="navbar <?=($activePage == 'files') ? 'active_link':'';?>" href="files.php">Files</a>
</div>
