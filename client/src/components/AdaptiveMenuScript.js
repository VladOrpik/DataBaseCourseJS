window.addEventListener("DOMContentLoaded", function(){
    let opened = false;
    const burgerIcon = document.querySelector('.mobileMenuVersion');
    const appBar = document.querySelector('.AppBar');
    const sectionsMenu = document.querySelector('.sectionsMenu');
    const buttons = document.querySelectorAll('.sectionsMenu button');
    const burgerLineFirst = document.querySelector('.AppBar .mobileMenuVersion .firstSpan');
    const burgerLineSecond = document.querySelector('.AppBar .mobileMenuVersion .secondSpan');
    const burgerLineThird = document.querySelector('.AppBar .mobileMenuVersion .thirdSpan');
    window.addEventListener("click", function(e){
       if(e.target != appBar && e.target != sectionsMenu && e.target !=burgerIcon && e.target !=burgerLineFirst && e.target !=burgerLineSecond && e.target !=burgerLineThird){
           console.log(e.target);
         if(opened == true){
                opened=false;
                burgerLineFirst.style.animation ="none";
                burgerLineSecond.style.opacity = "1";
                burgerLineThird.style.animation = "none";
                buttons.forEach(button =>{
                    button.style.display = "none";
                    console.log(opened);
                });
                appBar.style.height = "60px";
                console.log("CLOSED");
         }
       }
    });
    window.addEventListener("resize", function(){
        if(window.innerWidth>635){
            buttons.forEach(button =>{
            button.style.display = "inline";
            appBar.style.height = "60px";
// Анимация иконки бургерного меню
            burgerLineFirst.style.animation ="none";
            burgerLineSecond.style.opacity = "1";
            burgerLineThird.style.animation = "none";
            appBar.style.opacity="1";
            opened=false;

         });
        } else{
            if(opened == true){
                buttons.forEach(button =>{
                button.style.display = "block";
                // button.style.pointerEvents = "none";
             });
            }else{
                buttons.forEach(button =>{
                    button.style.display = "none";
                    // button.style.pointerEvents = "none";
                 });
            }
        }   
    });

    console.log(buttons[0]);
    burgerIcon.addEventListener('click', function(){
        if(opened == false){
            opened = true;
            buttons.forEach(button =>{
               button.style.display = "block";
            });
            // Анимация иконки бургерного меню
            burgerLineFirst.style.animation = "burgerTransformFirst 1 .3s forwards";
            burgerLineSecond.style.opacity = "0";
            burgerLineThird.style.animation = "burgerTransformSecond 1 .3s forwards";
            
            appBar.style.opacity="0.9";
            appBar.style.height = "200px";
            console.log("OPENED");
        }else{
            opened = false;
            burgerLineFirst.style.animation ="none";
            burgerLineSecond.style.opacity = "1";
            burgerLineThird.style.animation = "none";
            buttons.forEach(button =>{
                button.style.display = "none";
             });
            appBar.style.opacity="1";
            appBar.style.height = "60px";
            console.log("CLOSED");
        }
        
      
   });
}); 
