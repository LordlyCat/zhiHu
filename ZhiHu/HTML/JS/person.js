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

var change = document.querySelectorAll('.change');


    
revise[0].onclick = function () {
    var oldtext = change[0].innerHTML;
    change[0].innerHTML = '<input type="text">' +
                        '<button class = "submit">确定</button>' +
                        '<button>取消</button>';
    var submit = document.querySelector('.submit');
    var input = document.querySelector('input');
    var cancel = change[0].lastChild;

    submit.onclick = function () {
        var text = input.value;
        if (text == '') {
            change[0].innerHTML = oldtext;
        }else {
            change[0].innerHTML = text;
        }
               
    }

    cancel.onclick = function () {
        
    }
        
}

revise[1].onclick = function () {
    var oldtext = change[1].innerHTML;
    change[1].innerHTML = '<input type="text">' +
                        '<button class = "submit">确定</button>' +
                        '<button>取消</button>';
    var submit = document.querySelector('.submit');
    var input = document.querySelector('input');
    var cancel = change[1].lastChild;

    submit.onclick = function () {
        var text = input.value;
        if (text == '') {
            change[1].innerHTML = oldtext;
        }else {
            change[1].innerHTML = text;
        }       
    }

    cancel.onclick = function () {
        change[1].innerHTML = oldtext;
    }
        
}

revise[2].onclick = function () {
    var oldtext = change[2].innerHTML;
    change[2].innerHTML = '<input type="text">' +
                        '<button class = "submit">确定</button>' +
                        '<button>取消</button>';
    var submit = document.querySelector('.submit');
    var input = document.querySelector('input');
    var cancel = change[2].lastChild;

    submit.onclick = function () {
        var text = input.value;
        if (text == '') {
            change[2].innerHTML = oldtext;
        }else {
            change[2].innerHTML = text;
        }       
    }

    cancel.onclick = function () {
        change[2].innerHTML = oldtext;
    }
        
}
3
revise[3].onclick = function () {
    var oldtext = change[3].innerHTML;
    change[3].innerHTML = '<input type="text">' +
                        '<button class = "submit">确定</button>' +
                        '<button>取消</button>';
    var submit = document.querySelector('.submit');
    var input = document.querySelector('input');
    var cancel = change[3].lastChild;

    submit.onclick = function () {
        var text = input.value;
        if (text == '') {
            change[3].innerHTML = oldtext;
        }else {
            change[3].innerHTML = text;
        }       
    }

    cancel.onclick = function () {
        change[3].innerHTML = oldtext;
    }
        
}

revise[4].onclick = function () {
    var oldtext = change[4].innerHTML;
    change[4].innerHTML = '<input type="text">' +
                        '<button class = "submit">确定</button>' +
                        '<button>取消</button>';
    var submit = document.querySelector('.submit');
    var input = document.querySelector('input');
    var cancel = change[4].lastChild;

    submit.onclick = function () {
        var text = input.value;
        if (text == '') {
            change[4].innerHTML = oldtext;
        }else {
            change[4].innerHTML = text;
        }       
    }

    cancel.onclick = function () {
        change[4].innerHTML = oldtext;
    }
        
}

/*function cat (a,b) {
     a.onclick = function () {
        
        b.innerHTML = '<input type="text">' +
                        '<button class = "submit">确定</button>' +
                        '<button>取消</button>';
        }
}*/

/*var submit = document.querySelectorAll('.submit');*/
