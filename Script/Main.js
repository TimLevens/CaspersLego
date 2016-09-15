window.addEventlistner('load',checkwidth);

 function checkwidth(){
   if(window.innerWidth > 1300){
       document.getElementsByClassName('subdiv').style.marginLeft = '13%';
   }else{
       leftMargin = window.innerWidth / 2 - 300;
       document.getElementsByClassName('subdiv').style.marginLeft = this.leftMagin;
   }

 }
