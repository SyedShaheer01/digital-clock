var time=document.getElementById("m-time")


setInterval(()=>{
    var digital=new Date();
    time.innerHTML=digital.toLocaleTimeString();

},1000)





