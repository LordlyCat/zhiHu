var a = document.querySelectorAll("a");
var login_form = document.querySelector(".login_form");
var register_form = document.querySelector(".register_form");
var btn = document.querySelector(".submit");


/*a[0].addEventListener('mouseover', function () {
    this.style.color = '#0F88EB';
}, false);

a[1].addEventListener('mouseover', function () {
    this.style.color = '#0F88EB';
}, false);

a[0].addEventListener('click', function () {
    this.style.color = 'pink';
    a[1].style.color = 'lightblue';
}, false);

a[1].addEventListener('click', function () {
    this.style.color = 'pink';
    a[0].style.color = 'lightblue';
}, false);*/


a[0].onclick = function () {
    login_form.style = "display: none";
    register_form.style = "display: block";
    this.style.color = '#0F88EB';
    a[1].style.color = 'lightblue';
};

a[1].onclick = function () {
    login_form.style = "display: block";
    register_form.style = "display: none";
    this.style.color = '#0F88EB';
    a[0].style.color = 'lightblue';
};


//AJAX..................................
var register = document.querySelector('#register');
var login = document.querySelector('#login');
var inputs_register = register_form.querySelectorAll('input');
var inputs_login = login_form.querySelectorAll('input');


//注册请求提交后的行为
function get ( data ) {

    //console.log( data );

    if (data == "incomplete") {

        alert('请填写完全');
        
    }else if (data == "already exist") {
        alert('此用户已存在');

    }else if (data == "success") {
        alert('注册成功!');
        window.location.href = '../HTML/home.html';

    }else if (data == "fail") {
        alert('注册失败，请重试');

    }else if (data == "differ") {
        alert('确认密码与密码不一致。');
    }
    
};

//注册的AJAX
function useAJAX_register () {

    var username = inputs_register[0].value;
    var password = inputs_register[1].value;
    var check = inputs_register[2].value;

    ajax({
        method: 'POST',
        url: '../myPHP/register.php',
        data: {
            'newuser': username,
            'newpwd': password,
            'cpwd': check,
        },
        success: get,
    });
};

//登录请求提交后的行为
function if_login (data) {

    //console.log(data)

    if (data == "success") {
        alert('登录成功！');
        window.location.href = '../HTML/home.html';

    }else if (data == "fail") {
        alert('登录失败，请重试！');
    }
};


//登录的AJAX
function useAJAX_login () {

    var username = inputs_login[0].value;
    var password = inputs_login[1].value;
    var captcha = inputs_login[2].value;

    console.log(username);
    console.log(password);
    //var captcha = inputs[2].value;

    ajax({
        method: 'POST',
        url: '../myPHP/login.php',
        data: {
            'username': username,
            'password': password,
            
        },
        success: if_login,
    });
};

register.addEventListener('click',useAJAX_register , false);
login.addEventListener('click',useAJAX_login , false);

