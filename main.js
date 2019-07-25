const square = document.querySelector('div');
document.body.appendChild(square);

let size = 100;
let grow = true;

square.style.width = size + 'px';
square.style.height = size + 'px';
square.style.backgroundColor = 'pink';


window.addEventListener('scroll', function(){
    if(grow == true){
    size +=5
    square.style.width = size +"px";
    square.style.height = size +"px";
    
    }
    else{
    size -=5
    square.style.width = size +"px";
    square.style.height = size +"px";
    }
    if(size >= window.innerHeight / 2){
        grow = false
        
    }
    else if(size == 0){
        grow = true
    }
    if(size >= 200){
        square.style.backgroundColor = "green";
        square.style.borderRadius = "50%";
      
    }
    else{
        square.style.backgroundColor = "pink";
        square.style.borderRadius = "0%";
    }
   
})