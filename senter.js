document.getElementById('senternamebutton').addEventListener('click',function(){
    var name = document.getElementById('snameipt').value;
    if(name.length > 0){
    var url = 'http://127.0.0.1:5500/index.html?name='+name;
    //share the url in whatsapp
    var text = 'Share this link with your friends to send them a message: '+url;
    var whatsappurl = 'whatsapp://send?text='+text;
    window.location.href = whatsappurl;
 }
 else{
     alert('Please enter a name');
    }
 });