var Sub_Btn = document.getElementById('login');
var Status = document.querySelector('.status');
var Users;
var LogUser;
if(!localStorage.getItem('Users')){
    Users=[];
}
else{
    Users = JSON.parse(localStorage.getItem('Users'))
}
if(!localStorage.getItem('LogUser')){
    LogUser=[];
}
else{
    LogUser = JSON.parse(localStorage.getItem('LogUser'))
    window.location.href = "home.html";
}
console.log(LogUser)
Sub_Btn.addEventListener('click', function(){
    
    var User = {
        Email: document.getElementById('email').value,
        Password:document.getElementById('password').value
    }
    if(User.Email.length == 0 || User.Password.length == 0){
        Success(false , "All inputs is required")
    }
    else{
        if(GetUser(User))
        {
            localStorage.setItem("LogUser" , JSON.stringify(LogUser));
            Success(true , "Success")
        }
        else{
            Success(false , "Wrong In Email Or Password")
        }
    }
   
    
})
function GetUser(user){
    var valid = false;
    for (var i = 0; i < Users.length; i++) {
        if(Users[i].Email.toLowerCase() == user.Email.toLowerCase() &&  Users[i].Password.toLowerCase() == user.Password.toLowerCase())
        {
            valid = true;
            LogUser = {
                Username: Users[i].Username,
                Email: Users[i].Email,
                Password: Users[i].Password
            };
        }
    }
    return valid;
}
function Success(done , text){
    if(done)
    {
        window.location.href = "home.html";
    }
    else{
        Status.classList.remove('d-none');
        Status.classList.add('text-danger');
        
    }
    Status.innerHTML = text;
}