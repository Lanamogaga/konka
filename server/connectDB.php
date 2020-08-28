<?php
header("Content-type: text/html; charset=utf-8");

$db = mysqli_connect("127.0.0.1", "root", "", "konka");
// mysqli_set_charset($db,'utf-8');



if (!$db) {
  die('连接错误: ' . mysqli_error($db));
}
?>