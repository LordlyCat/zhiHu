var boxes = document.querySelectorAll('.box');
var revise = document.querySelectorAll('.revise');




function display () {
    for(var i = 0; i < boxes.length; i++){
        boxes[i].onmouseover = function () {
            for(var j = 0; j < revise.length; j++){
                revise[j].style.display = 'block';
            }
        }
    }
}
display();

function moveout () {
    for(var i = 0; i < boxes.length; i++){
        boxes[i].onmouseout = function () {
            for(var j = 0; j < revise.length; j++){
                revise[j].style.display = 'none';
            }
        }
    }   
}
moveout();

var information = document.querySelector('.information');
var boxes = information.children;


for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function (el) {

        var e = el.srcElement;

        if (e.className == 'revise') {

            var box = e.parentNode;
            var info = box.querySelector('.info');
            var oldtext = info.innerHTML;

            info.innerHTML = '<input type="text">' +
                        '<button class = "submit">确定</button>' +
                        '<button>取消</button>';

            var submit = box.querySelector('.submit');
            var input = box.querySelector('input');
            var cancel = info.lastChild;


            submit.onclick = function () {
                var text = input.value;
                if (text == '') {
                    info.innerHTML = oldtext;
                }else {
                    info.innerHTML = text;
                }       
            }

            cancel.onclick = function () {
                info.innerHTML = oldtext;
            }
        }
        
    }, false);
}


