(function(){
    let codes = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8], i, j, x, y;
    for(y = codes.length; y;){j = Math.floor(Math.random() * y);x = codes[--y];codes[y] = codes[j];codes[j] = x;}
    for(j = 0; j < 16; j++) document.getElementById('pole').innerHTML += '<a pic="' + codes[j] + '" class="pic' + codes[j] + ' hidden" pic=""> </a>';
    let check = false, selpic = 0, sela, steps = 0, open = 0, timer, a = document.getElementsByTagName('a');
    for(let i = 0; i < a.length; i++){
        a[i].addEventListener('click', function(e){
            steps++;
            let el = e.target;
            el.className = el.className.replace('hidden', '');
            setTimeout(function(){
                if(check){
                    check = false;
                    if(el.getAttribute('pic') == selpic){
                        console.log()
                        open++;
                        while (document.getElementsByClassName(el.className)[0]) {
                         document.getElementsByClassName(el.className)[0].remove();
                         }
                        if(open == 8){
                            alert('You win! Steps: ' + steps);
                        }
                    }
                    else{
                        sela.className += ' hidden'; el.className += ' hidden';
                    }
                }
                else{
                    selpic = el.getAttribute('pic'); sela = el; check = true;
                }
            }, 100);
        });
    }
})();