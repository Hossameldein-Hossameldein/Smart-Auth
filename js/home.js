var LogUser;
if(!localStorage.getItem('LogUser')){
    window.location.href = "index.html";
}
else{
    LogUser = JSON.parse(localStorage.getItem('LogUser'))
    document.getElementById('title').innerHTML = `Welcome ${LogUser.Username}`;
    document.getElementById('logout').addEventListener('click' , function(){
        localStorage.removeItem('LogUser');
        window.location.href = "index.html";
    })
}