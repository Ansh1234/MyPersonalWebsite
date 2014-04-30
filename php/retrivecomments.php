<?php


$con = mysql_connect("localhost:8090","root","cxps123");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("QuestionAnswer");

$result=mysql_query('Select * from Comments');
if(!$result)
{
	die('Invalid query'.mysql_error());
}


$arr=array();
while($row=mysql_fetch_array($result))
{
	$arr[]=$row;
}

echo json_encode($arr);



mysql_close($con);
?>
