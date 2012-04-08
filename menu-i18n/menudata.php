<?php
header('Content-type: text/javascript');
echo "MathJax.Menu.ITEM.prototype.labelTranslations =\n";
include $_GET["include"];
echo ";\n"; 
echo "MathJax.Ajax.loadComplete(\"http://".$_SERVER['SERVER_NAME']
        .$_SERVER['REQUEST_URI']."\");\n";
?>

