window.addEventListener('load', function(){
    this.document.getElementById('mike').addEventListener('click',function(){
       window.location.href = "/mike";
    });

    this.document.getElementById('sully').addEventListener('click',function(){
        window.location.href = "/sully";
     });

     this.document.getElementById('boo').addEventListener('click',function(){
        window.location.href = "/boo";
     });

     this.document.getElementById('home').addEventListener('click',function(){
        window.location.href = "/";
     });
});