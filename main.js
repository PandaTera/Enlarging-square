const div = document.createElement('div');

let grow = true;

let size = 10 //wielkość kwadratu
div.style.width = size + 'px';
div.style.height = size + 'px';
div.style.backgroundColor = 'blue';

document.body.appendChild(div);

window.addEventListener('scroll', function (){
    if(grow){
 size+= 5
 div.style.width = size + 'px';
 div.style.height = size + 'px';
 div.style.borderRadius = '0%';
    }else{
        size-=5
        div.style.width = size + 'px';
 div.style.height = size + 'px';
 
    }
    if(size >=window.innerWidth/2 ){
        grow = !grow;
        div.style.backgroundColor = 'yellow';
        div.style.borderRadius = '50%';
       
    }
    else if(size<=0){
        grow = true;
               div.style.backgroundColor = 'blue';
    }
   
})