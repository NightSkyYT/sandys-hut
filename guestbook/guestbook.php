<?php

$name = htmlspecialchars($_POST["name"]);
$website = htmlspecialchars($_POST["website"]);
$message = nl2br(htmlspecialchars($_POST["message"]));

$entry = "<b>$name</b>";

if ($website != "") {
    $entry .= " (<a href='$website'>$website</a>)";
}

$entry .= "<br>$message<br><hr>";

file_put_contents("entries.html", $entry, FILE_APPEND);

header("Location: index.html");
exit;

?>