<?php include "conn.php"; ?>
<?php
if($_REQUEST["sub"]=="发布")｛

      $tw="";
      $nr="";
      $tw=trim($_POST['question']);
      $nr=CheckInput($_REQUEST["description"]);
      if(enmpty($zt)){
        echo"<script>alert('问题不能为空！')；</script>";
        return false;｝
        $sql="insert into question( Question, Qcontent) values('".$tw."','".$nr."')";
        $conn->exec($sql);
        echo"<script>alert('问题发布成功！');history.back();</script>";
      }
      ?>



