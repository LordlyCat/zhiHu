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



//提问按钮
quiz.addEventListener('click', function () {

    board.style.display = 'block';
  
}, false);

quizs.addEventListener('click', function () {

    board.style.display = 'block';
    return false;
  
}, false);


function out () {
    board.style.display = 'none'; 
};

furcation.addEventListener('click', out, false);
cancel.addEventListener('click', out, false);

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


//评论回复功能
var commentBox = document.querySelector('commentWindow');
var commentText = document.querySelector('.commentText');
var interaction = document.querySelectorAll('.interaction a');
var replay = document.querySelector('.replay');



//格式化日期
function date(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var mi = date.getMinutes();
    m = m > 9 ? m : '0' + m;
    return y + '-' + m + '-' + d + ' ' + h + ':' + mi;
}

interaction[1].onclick = function () {
    commentText.style.display = 'block';
    commentText.style.height = '50px';
    commentText.style.color = 'black';
    replay.style.display = 'block';
    commentText.focus();
}


/*if (commentText.value === '') {
    commentText.onblur = function  () {
        commentText.style.display = 'none';
        replay.style.display = 'none';
    }
}*/



/*commentText.onblur = function () {
    commentText.style.display = 'none';
    replay.style.display = 'none';
}*/    

replay.addEventListener('click', function () {
    var lol = document.querySelector('.lol');
    var words = commentText.value
    var wordsBox = document.createElement('div');


    if (words.length !== 0) {
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
        lol.appendChild(wordsBox);

        //收起并清空输入框
        this.style.display = 'none';
        commentText.style.display = 'none';
        commentText.value = "";
    }
    else {
        alert('评论内容不能为空！');
    }

    


}, false);

