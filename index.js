 const signInBtn=document.getElementById('signInBtn');
    
    signInBtn.addEventListener('click', function(){
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    console.log(username, password);

        if(username === 'admin' && password === "admin123"){
            window.location.assign("mainPage.html")
        }
        else{
            alert("Wrong info")
        }
    })