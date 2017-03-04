var me = document.querySelector('.me');
var meHover = document.querySelector('.meHover');
var quiz = document.querySelector('.quiz');
var board = document.querySelector('.board');
var mainBody = document.querySelector('.mainBody');
var html = document.querySelector('html');
var furcation = document.querySelector('.furcation');
var cancel = document.querySelector('.cancel');
var submit = document.querySelector('.submit');
var quizs = document.querySelector('.quizs');
var zhiHu = document.querySelector('.zhiHu');


//刷新当前页面
zhiHu.addEventListener('click', function () {
    location.replace('home.html');
}, false);

//改变插图大小
/*function changeSize () {
    var img = document.querySelector('.illustration');

    
    img.style.width = '200px';
    
}
changeSize();*/



me.onmouseover = function () {

    me.style.display = "none";
    meHover.style.display = "block";
};

meHover.onmouseout = function () {
    
    me.style.display = "block";
    meHover.style.display = "none";
};

meHover.onmouseover = function () {

    meHover.style.display = "block";
};


//弹出提问面板。。。。。。。。。。。。

function cover(){
    //获取页面的高度和宽度
    var sWidth = document.body.scrollWidth;
    var sHeight = document.body.scrollHeight;
    
    //获取页面的可视区域高度
    var wHeight = document.documentElement.clientHeight;
    var cover = document.createElement("div");

        cover.id = "cover";
        cover.style.height = sHeight + "px";
        cover.style.width = sWidth +"px";

        document.body.appendChild(cover);

    //点击关闭
    function out () {

        board.style.display = 'none';
        document.body.removeChild(cover);
    }

    furcation.addEventListener('click', out, false);
    cancel.addEventListener('click', out, false);
}

//提问按钮
quiz.addEventListener('click', function () {

    board.style.display = 'block';
    cover();
    return false;
}, false);

quizs.addEventListener('click', function () {

    board.style.display = 'block';
    cover();
    return false;
  
}, false);



submit.addEventListener('click', function () {
    
    var question = document.querySelector('.question');
    var topic = document.querySelector('.topic');

    if (question.value === "") {
        question.value = "请输入你的问题";
        question.style.color = 'red';
    };
    if (topic.value === "") {
        topic.value = "请至少添加一个话题";
        topic.style.color = 'red';
    };

}, false);

var ME = document.querySelector('#me');

ME.addEventListener('click', function () {
    window.open("person.html");
}, false);


//退出登录
var logout = document.querySelector('#logout');

logout.addEventListener('click', function () {
    location.replace('login.html');
}, false);   

//评论回复功能.........................

//格式化日期
function date(date) {
    var Y = date.getFullYear();
    var M = date.getMonth() + 1;
    var D = date.getDate();
    var H = date.getHours();
    var Min = date.getMinutes();

    Min = Min > 9 ? Min : '0' + Min;
    return Y + '-' + Min + '-' + D + ' ' + H + ':' + Min;

}



var lists = document.querySelector('#lists');
var boxes = lists.children;


//评论
function commentBox (box) {

    var input = box.querySelector('.commentText');
    var btn = box.querySelector('.replay');

    input.style.display = 'block';
    input.style.height = '50px';
    input.style.color = 'black';
    btn.style.display = 'block';
    input.focus();
}

function closeComment (box) {
    var input = box.querySelector('.commentText');
    var btn = box.querySelector('.replay');

    input.style.display = 'none';
    input.value = "";
    btn.style.display = 'none';
}


for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',function (el) {

        var a = el.srcElement;

        switch (a.className) {

                //点赞
            case 'zan':
                a.innerHTML = '<img src="../img/赞.png" alt=""> 已赞';
                break;

                //打开评论框
            case 'com':
                commentBox(a.parentNode.parentNode.parentNode);
                a.innerHTML = '<img src="../img/评论.png" alt=""> 收起</a>';
                a.className = 'comed';
                break;

                //收起评论框
            case 'comed':
                closeComment(a.parentNode.parentNode.parentNode);
                a.innerHTML = '<img src="../img/评论.png" alt=""> 评论</a>';
                a.className = 'com';
                break;

                //收藏
            case 'shoucang':
                a.innerHTML = '<img src="../img/收藏.png" alt=""> 已收藏';
                a.className = 'abolish';
                break;
            case 'abolish':
                a.innerHTML = '<img src="../img/收藏.png" alt=""> 收藏';
                a.className = 'shoucang';
        }
    }, false);

    //取消收藏
    boxes[i].addEventListener('mouseover', function (el) {

        var a = el.srcElement;
        if (a.className == 'abolish') {
            a.innerHTML = '<img src="../img/收藏.png" alt=""> 取消收藏';
        }

    }, false);

    boxes[i].addEventListener('mouseout', function (el) {

        var a = el.srcElement;
        if (a.className == 'abolish') {
            a.innerHTML = '<img src="../img/收藏.png" alt=""> 已收藏';
        }

    }, false);


    //发表按钮
    boxes[i].addEventListener('click', function (el) {

        btn = el.srcElement;
        if (btn.className == 'replay') {

            var box = btn.parentNode.parentNode.parentNode;
            var cases = box.querySelector('.cases');
            var input = box.querySelector('.commentText'); 
            var words = input.value
            var wordsBox = document.createElement('div');
            var a = box.querySelector('.comed');

            if (words.length !== 0) {
                //评论区块
                wordsBox.innerHTML = '<div class="commentBox">' + 
                                        '<img src="../img/04.jpg" alt="">' +
                                        '<div class="wordsBox">' +
                                            '<span class="user">我 :</span>' +
                                            '<span class="words">' + words + '</span>'+
                                        '</div>' +
                                        '<div class="time">' +
                                            '<span>' + date(new Date()) + '</span>' +
                                        '</div>' +                                                        
                                    '</div>';
                cases.appendChild(wordsBox);

                //收起并清空输入框 
                btn.style.display = 'none';
                input.style.display = 'none';
                input.value = "";
                a.innerHTML = '<img src="../img/评论.png" alt=""> 评论</a>';
                a.className = 'com';

            }
            else {
                alert('评论内容不能为空！');
            }
        }
        
    }, false);

}

                
        

