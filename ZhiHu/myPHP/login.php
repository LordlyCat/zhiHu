<?php 

$username = $_POST["username"];
$password = $_POST["password"];



//echo $username;
//echo $password;
//$captcha = $_POST["captcha"];

$db = new mysqli('127.0.0.1','root','123','zhiHu');
/*$db->select_db("cat");*/

$result = mysqli_query($db,"SELECT * FROM users ");
$num_results = mysqli_num_rows($result);

for ($i=0; $i < $num_results; $i++) { 
	$row = mysqli_fetch_assoc($result);

	if ($row['username'] === $username && $row['password'] === $password){

		echo "success";
		break;
	}

	if ($i===($num_results - 1)) {
		
		if ($row['username'] != $username || $row['password'] != $password){
		
			echo "fail";
		}	
	}
}

?>