window.onload = function () {

    var publish = document.querySelector('button');
    var article = document.querySelector('.article');
    var input = document.querySelector('input');
    
    function issue () {
        var heading = input.value;
        var text = article.innerHTML;

        window.location.href='home.html?id=100';
        

        console.log(text);
    }

    publish.addEventListener('click', issue, false);

    //工具栏
    /*var tools = document.querySelectorAll('span');

    for (var j = 0; j < tools.length; j++) {
        
        tools[j].onclick = function (e) {

            e = e || window.event;
            var el = e.srcElement;

            switch (el.className) {

            case 'one':
                bold();
                break;

            case 'two':
                alert('1');
                break;

            case 'three':
                alert('2');
                break;
            }  
                 
        }    
    }*/

    

}
