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
        
            change[0].innerHTML = '<input type="text">' +
                        '<button>确定</button>' +
                        '<button>取消</button>';
            }


    revise[1].onclick = function () {
        
            change[1].innerHTML = '<input type="text">' +
                        '<button>确定</button>' +
                        '<button>取消</button>';
            }

    revise[2].onclick = function () {
        
            change[2].innerHTML = '<input type="text">' +
                        '<button>确定</button>' +
                        '<button>取消</button>';
            }
            

    revise[3].onclick = function () {
        
            change[3].innerHTML = '<input type="text">' +
                        '<button>确定</button>' +
                        '<button>取消</button>';
            }

    revise[4].onclick = function () {
        
            change[4].innerHTML = '<input type="text">' +
                        '<button class = "submit">确定</button>' +
                        '<button>取消</button>';
            }
            

/*function cat (a,b) {
     a.onclick = function () {
        
        b.innerHTML = '<input type="text">' +
                        '<button class = "submit">确定</button>' +
                        '<button>取消</button>';
        }
}*/

var submit = document.querySelectorAll('.submit');

submit[0].onclick = function () {
    alert('233');
}

