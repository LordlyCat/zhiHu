<?php include "conn.php"; ?>
<?php
if($_REQUEST["sub"]=="登录"){
    $UserName="";
    $Pwd="";
    $UserName = CheckInput($_REQUEST["username"]);
    $Pwd = CheckInput($_REQUEST["password"]);

    if(empty($UserName)){
        //$Err=$Err."用户名不能为空！";
        echo "<script>alert('用户名不能为空！');</script>";
        return false;
    }

    if(empty($Pwd)){
        echo "<script>alert('密码不能为空！');</script>";
        return false;
    }｀

    $sql = "select * from Users where UserName='".$UserName."' and UserPassword='".$Pwd."'";
    $rs = $conn->query($sql);
    $row=$rs->fetch();
    if(empty($row["UserName"])){
        echo "请正确输入用户名和密码！";
        return false;
    }
    else{
        session_start();
        $_SESSION['username']=$row["UserName"];
        $_SESSION['purview']=$row["Purview"];
        Header("Location: index.php");
    }
    ob_end_flush();
}
if($_REQUEST["sub"]=="注册"){
    $UserName="";
    $Pwd="";
    $UserName = CheckInput($_REQUEST["username"]);
    $Pwd = CheckInput($_REQUEST["password"]);

    if(empty($UserName)){
        //$Err=$Err."用户名不能为空！";
        echo "<script>alert('用户名不能为空！');</script>";
        return false;
    }

    if(empty($Pwd)){
        echo "<script>alert('密码不能为空！');</script>";
        return false;
    }

    $sql = "insert into login(user,password) values('".$UserName."',".$Pwd."'");
    $conn->query($sql);
    echo"<script>alerk('注册成功！');window.location.href='index.php'</script>";
}
?>