var Sub_Btn = document.getElementById('Register');
var Status = document.querySelector('.status');
var Users;
if(!localStorage.getItem('Users')){
    Users=[];
}
else{
    Users = JSON.parse(localStorage.getItem('Users'))
}
console.log(Users)

Sub_Btn.addEventListener('click', function(){
    var User = {
        Username: document.getElementById('username').value,
        Email: document.getElementById('email').value,
        Password:document.getElementById('password').value
    }
    if(User.Email.length == 0 || User.Password.length == 0 || User.Username.length == 0){
        Success(false , "All inputs is required")
    }
    else{
        if(ValidateAcc(User))
        {
            Users.push(User);
            localStorage.setItem("Users" , JSON.stringify(Users));
            Success(true , "Success")
        }
        else{
            Success(false , "Email already exists")
        }
        
    }
    
})
function ValidateAcc(user){
    var valid = true;
    for (var i = 0; i < Users.length; i++) {
        if(Users[i].Email.toLowerCase() == user.Email.toLowerCase())
        {
            valid = false;
        }
    }
    return valid;
}
function Success(done , text){
    if(done)
    {
        Status.classList.remove('d-none');
        Status.classList.remove('text-danger');
        Status.classList.add('text-success');
    }
    else{
        Status.classList.remove('d-none');
        Status.classList.remove('text-success');
        Status.classList.add('text-danger');
        
    }
    Status.innerHTML = text;
}