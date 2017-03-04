<?php 
$newuser = $_POST["newuser"];
$newpwd = $_POST["newpwd"];
$cpwd = $_POST["cpwd"];

//判断数据是否填写完全
if ($newuser==null||$newpwd==null) {
    echo "<script>
            alert('请填写完全');
            alert('注册失败，请重试');
            window.location.href = '../HTML/login.html';
        </script>";
}else{



    if ($newpwd == $cpwd) {

        $db = new mysqli('127.0.0.1','root','123','zhihu');
        /*$db->select_db("cat");*/

        //判断用户名是否存在
        $result = mysqli_query($db,"SELECT * FROM users WHERE username = '$newuser'");
        $num_results = mysqli_num_rows($result);

        if ($num_results) {
            echo "<script>
                    alert('此用户已存在');
                    window.location.href = '../HTML/login.html';
                </script>";
        }else{
                //把新用户信息存入数据库
            $query = "insert into users(username,password) values('$newuser','$newpwd')";
            $new_result = $db->query($query);

            if($new_result) {
            echo "<script>
                    alert('注册成功');
                    window.location.href = '../HTML/home.html';
                </script>";
            }else{
                echo "<script>
                    alert('注册失败，请重试');
                </script>";
            }   
        }
    }else{
        echo "<script>
                alert('确认密码与密码不一致。注册失败！请重试');
                window.location.href = '../HTML/login.html';
            </script>";
        }
}

 ?>