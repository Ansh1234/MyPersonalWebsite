<?php
print_r($_POST);
$name=$_POST['Name'];
$comment = $_POST['Comment'];
$imageurl  = $_POST['ImageUrl'];

$con = mysql_connect("localhost:8090","root","cxps123");

if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

 mysql_select_db("QuestionAnswer");
$insert="insert into Comments values('$name','$comment','$imageurl')";
$result=mysql_query($insert);
if(!$result)
{
	die('Insertion Error'.mysql_error());
}

mysql_close($con);
?>
