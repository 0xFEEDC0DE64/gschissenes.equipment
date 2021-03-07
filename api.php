<?php
$files = glob('img/*.{jpg,jpeg,png,gif}', GLOB_BRACE);
$selected = $files[random_int(0, count($files)-1)];
echo $selected;
