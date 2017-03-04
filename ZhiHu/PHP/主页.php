
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>首页 - 知乎</title>
    <link rel="stylesheet" type="text/css" href="../CSS/home.css">
</head>
<body>

    <div class="header">
        <div class="zhiHu">
            知乎
        </div>

        <input type="test" name="search" value=" ">

        <div class="searchLogo">
            <img src="../img/search.png" alt="LOGO">
        </div>

        <div class="shouYe">首页</div>
        <div class="faXian">发现</div>
        <div class="xiaoXi">消息</div>
        <div class="quiz">提问</div>

        <div class="me">ME</div>
        <div class="meHover">
            <div class="cat">ME</div>
            <div class="cat"><img src="../img/bust.png" alt="">我的主页</div>
            <div class="cat"><img src="../img/envelope.png" alt="">私信</div>
            <div class="cat"><img src="../img/set.png" alt="">设置</div>
            <div class="cat"><img src="../img/logout.png" alt="">退出</div>
        </div>
    </div>

    <div class="board">
        <div class="one">
            <p>提问</p>
            <img src="../img/furcation.png" alt="" class="furcation">
        </div>
        <input type="text" class="question" name="yourQuestion" value="" placeholder="写下你的问题">
        <p class="two">问题说明（可选）:</p>
        <textarea> </textarea>
        <p class="choose">选择话题</p>
        <input type="text" class="topic" name="yourQuestion" value="" placeholder="搜索话题">
        <button type="reset" class="cancel">取消</button>
        <button type="submit" class="submit">发布</button>
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
    </div>


    <div id="wrapper">
        <!-- 左半边 -->
        <div class="leftMainBody">

            <!-- 个人导航 -->
            <div class="guidance">
                <div class="portrait"><img src="../img/04.jpg" alt=""></div>
                 <div class="triangle"></div>
                <div class="threeWay">
                    <div class="one">               
                        <img src="../img/questionMark.png" alt="" class="questionMark">
                    </div>    
                    <a href="#" class="quizs">提问</a>
        
                    <div class="two">
                        <img src="../img/answer.png" alt="" class="answer">
                    </div>
                    <a href="#">回答</a>
        
                    <div class="three">
                        <img src="../img/write.png" alt="">
                    </div>    
                    <a href="#">写文章</a>
        
                    <a href="#" id="draft">草稿</a>
                              
                </div>
            </div>

            <!-- 话题栏 -->
            <div class="homeTopics">
                <div class="words">按已关注的话题阅读:</div>
                <a href="#">书籍推荐</a>
            </div>
            <hr/>
            
            <div class="newTrends">
                <div class="new">
                    <img src="../img/trends.png" alt="">
                </div>    
                <p>最新动态</p>
                <?php
session_start();
if($_SESSION['username']==""){
    Header("Location: login.php");
}
//注销登陆 
//session_unset(); 
//session_destroy(); 
?>
<?php include "conn.php"; ?>
<?php
$pageNo = 1; /**页码**/
$pageSize = 10; /**页大小**/
$pageCount = 0;    /**共多少页**/
$totalNum = 0; /**总记录数**/

$pageNo = $_REQUEST["page"];
if(empty($pageNo)){
    $pageNo = 1;
}
if(!is_numeric($pageNo)){
    $pageNo = 1;
}
if($pageNo<1){
    $pageNo = 1;
}

$pageNo = intval($pageNo);

$sql = "select count(*) as totalNum from Question";
$rs = $conn->query($sql);
$row = $rs->fetch();
$totalNum = $row["totalNum"];

$pageCount = intval($totalNum/$pageSize);
if($totalNum%$pageSize>0){
    $pageCount = $pageCount+1;
}
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>提问分页</title>
</head>

<body>
        <td width="15%">提问标题</td>
        <td width="5%">提问时间</td>
        <?php
        if($_SESSION['purview']=="83"){
            echo "<td width='8%'>操作</td>";
        }
        ?>
    </tr>
    <?php
    if($pageNo==1){
        $sql = "select top ".$pageSize." * from Question order by QuestionID desc";
    }
    else{
        $sql = "select top ".$pageSize." * from Question where QuestionID not in(select top ".($pageNo-1)*$pageSize." QuestionID from Question order by QuestionID desc) order by QuestionID desc";
    }
    $rs = $conn->query($sql);
    while($row=$rs->fetch()){
    foreach ($conn->query($sql) as $row){
    <tr>
        <td><?php echo $row["QuestionTitle"] ?></td>
        <td><a href="<?php echo $row["HtmlUrl"] ?>" target="_blank"></a></td>
        <td><?php echo date("Y-m-d",strtotime($row["QuestionUpdateTime"])) ?></td>
    </tr>
    }
    ?>
</table>
<p>
    <?php
    function iif($arg_1,$arg_2,$arg_3){
        if($arg_1){
            return $arg_2;
        }
        else{
            return $arg_3;
        }
    }
    ?>
    <a href="index.php?page=1">首页</a>
    <a href="index.php?page=<?php echo iif($pageNo<=1,1,$pageNo-1); ?>">上一页</a>
    <a href="index.php?page=<?php echo iif($pageNo>=$pageCount,$pageCount,$pageNo+1); ?>">下一页</a>
    <a href="index.php?page=<?php echo $pageCount ?>">尾页</a>
</p>
</body>
</html>
            </div> 
            <hr/>

            <div id="lists">

                <div class="box">
                    <img class="head" src="../img/02.jpg" alt="头像">
                    <div class="content">                       
                        <div class="mainContent">
                            <p class="title">来自话题:<a href="#">生活</a></p>
                            <span class="user" style="display: block;"><a href="#">LordlyCat :</a></span>
                            <p class="text" style="display: block;">
                                江南三月雨微茫，罗伞叠烟湿幽香。﻿
                                夏日微醺正可人，却傍佳木趁荫凉。﻿
                                霜风清和更初霁，轻蹙蛾眉锁朱窗。﻿
                                怜卿一片相思意，犹恐流年拆鸳鸯。
                            </p>
                            <img class="illustration" src="../img/01.jpg" alt="">
                        </div>
                        <div class="time" style="font-size: 13px;color: gray;display: inline-block;">02-18 19:25</div>

                        <div class="interaction">
                            <a class="zang" style="margin-left: 10px;" href="#">
                            <img src="../img/赞.png" alt=""> 赞</a>
                            <a class="com" href="#"><img src="../img/评论.png" alt=""> 评论</a>
                            <a class="share" href="#"><img src="../img/分享.png" alt=""> 分享</a>
                            <a class="shuocang" href="#"><img src="../img/收藏.png" alt=""> 收藏</a>
                            <?php include "conn.php"; ?>
<?php
if($_REQUEST["sub"]=="//发表回答")｛

      $name="";
      $content="";
      $name=CheckInput($_REQUEST["name"]);
      $content=CheckInput($_REQUEST["content"]);
      $datatime=data("Y-m_d H:i:s");
      if(enmpty($name)){
        echo"<script>alert('回答者不能为空！')；</script>";
        return false;}
      if(empty($content)){
        echo "<script>alert('回答内容不能为空！');</script>";
        return false;}
        $sql="insert into Answer( AnswerName, AnswerContent,time) values('".$name."','".$content."',,'".$datatime."')";
        $conn->exec($sql);
        echo"<script>alert('编辑成功！');window.location.href='index.php';</script>";
      }
      ?>
                        </div>    

                        <div class="commentWindow">
                            <!-- <div class="commentBox">
                                <img src="../img/img1.jpg" alt="">
                                <div class="wordsBox">
                                    <span class="user">我 :</span>
                                    <span class="words">233</span>
                                </div>
                                <div class="time">
                                    <span>02-19 17 : 00</span>
                                </div>                                                        
                            </div> -->
                            <div class="lol">
                                
                            </div>
                            <textarea class="commentText"></textarea>
                            <button class="replay">发表</button>   
                        </div>
                   </div>
                </div>

                <div class="box">
                    <img class="head" src="../img/02.jpg" alt="头像">
                    <div class="content">                       
                        <div class="mainContent">
                            <p class="title">来自话题:<a href="#">生活</a></p>
                            <span class="user" style="display: block;"><a href="#">LordlyCat :</a></span>
                            <p class="text" style="display: block;">
                                江南三月雨微茫，罗伞叠烟湿幽香。﻿
                                夏日微醺正可人，却傍佳木趁荫凉。﻿
                                霜风清和更初霁，轻蹙蛾眉锁朱窗。﻿
                                怜卿一片相思意，犹恐流年拆鸳鸯。
                            </p>
                            <img class="illustration" src="../img/01.jpg" alt="">
                        </div>
                        <div class="time" style="font-size: 13px;color: gray;display: inline-block;">02-18 19:25</div>

                        <div class="interaction">
                            <a class="zang" style="margin-left: 10px;" href="#">
                            <img src="../img/赞.png" alt=""> 赞</a>
                            <a class="com" href="#"><img src="../img/评论.png" alt=""> 评论</a>
                            <a class="share" href="#"><img src="../img/分享.png" alt=""> 分享</a>
                            <a class="shuocang" href="#"><img src="../img/收藏.png" alt=""> 收藏</a>
                        </div>    

                        <div class="commentWindow">
                            <!-- <div class="commentBox">
                                <img src="../img/img1.jpg" alt="">
                                <div class="wordsBox">
                                    <span class="user">我 :</span>
                                    <span class="words">233</span>
                                </div>
                                <div class="time">
                                    <span>02-19 17 : 00</span>
                                </div>                                                        
                            </div> -->
                            <div class="lol">
                                
                            </div>
                            <textarea class="commentText"></textarea>
                            <button class="replay">发表</button>   
                        </div>
                   </div>
                </div>

   
            </div>

        </div>


        <!-- 右半边 -->
        <!-- <div class="rightMainbody">
            
        
        </div> -->

    </div>

<script type="text/javascript" src = "../JS/home.js"></script>

</body>
</html>