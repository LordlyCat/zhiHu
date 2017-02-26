window.onload = function () {

    var publish = document.querySelector('button');
    var article = document.querySelector('.article');
    
    function getText () {
        var text = article.innerHTML;
        console.log(text);
    }

    publish.addEventListener('click', getText, false);


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
