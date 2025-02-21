// signup form

let signup = document.getElementById('signup');

signup.addEventListener('submit',(e)=>{

    e.preventDefault();

    let uname = document.getElementById('name').value;
    let uemail = document.getElementById('email').value;
    let ucountry = document.getElementById('country').value;
    let uphone = document.getElementById('phone').value;
    let upassword = document.getElementById('password').value;

    let student = {
        uname,
        uemail,
        ucountry,
        uphone,
        upassword
    }

    console.log(student);
})

// signin form

let signin = document.getElementById('signin');

signin.addEventListener('submit',(e)=>{

    e.preventDefault();

    let name = document.getElementById('signin-name').value;
    let email = document.getElementById('signin-email').value;
    let password = document.getElementById('signin-password').value;

    let stud = {
        name,
        email,
        password
    }

    console.log(stud);

})