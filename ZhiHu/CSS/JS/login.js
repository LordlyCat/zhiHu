var login = document.querySelectorAll("a");
var login_form = document.querySelector(".login_form");
var register_form = document.querySelector(".register_form");
var btn = document.querySelector(".submit");


login[0].onclick = function () {
    login_form.style = "display: none";
    register_form.style = "display: block";
};

login[1].onclick = function () {
    login_form.style = "display: block";
    register_form.style = "display: none";
};


btn.addEventListener('click', function () {

	var input = document.querySelectorAll('input');

    input[0].value = "请输入姓名";
}, false);
