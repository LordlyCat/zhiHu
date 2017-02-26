<?php
$dbhost ="127.0.0.1";
$dbuser = "root";
$dbpwd = "root";
$dbname = "zhihu";
$charName = "utf8";

try {
    $conn = new PDO("mysql:host=$dbhost;port=3306;dbname=$dbname", $dbuser, $dbpwd, array(PDO::MYSQL_ATTR_INIT_COMMAND => "set names utf8"));
    //echo "数据库链接成功！"; 
}
catch(PDOException $e){
    echo $e->getMessage();
}
?>