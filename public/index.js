document.addEventListener('DOMContentLoaded', function() {
    //get the name from the url and display it
    var url = window.location.href;
    var name = url.split('?name=')[1];
    console,name;
    if(name==null){
        name='we';
    }
    document.getElementById('sentername').innerHTML = name;
    console.log('Hello world!, will shortly add music');});

    document.getElementById('sentyours').addEventListener('click',function(){
       document.location.href = 'senter.html';
    });