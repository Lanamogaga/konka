<?php
header("Content-type: text/html; charset=utf-8");
/* 1、连接数据库 */
include_once "./connectDB.php";
$program_char = "utf8";mysqli_set_charset( $db,$program_char );

$user_id = $_REQUEST["user_id"];

/* 多表查询 */
$sql = "SELECT cart.*,goods.title,goods.goodid,goods.src,goods.dis,goods.price FROM cart , goods WHERE cart.good_id = goods.goodid AND user_id=$user_id";

$result = mysqli_query($db,$sql);

$data = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($data,true);
?>