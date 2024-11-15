//your JS code here. If required.
const submitButton=document.getElementById('submit')
const formContainer=document.querySelector('form');

submitButton.addEventListener('click',(event)=>{
    event.preventDefault();
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const rememberMe=document.getElementById('checkbox');

    const localUsername=window.localStorage.getItem('username');
    console.log(localUsername);
    if(localUsername===null){
        if(rememberMe.checked){
            window.localStorage.setItem('username',JSON.stringify(username));
            window.localStorage.setItem('password',JSON.stringify(password));
        }
        else{
            window.localStorage.removeItem('username');
            window.localStorage.removeItem('password');
        }
        alert("Logged in as.")
    }   
    else if(localUsername!==null){
        const existingButton = document.createElement('button');
        existingButton.textContent = 'Login as existing user';
        existingButton.type = 'button'; 
        formContainer.appendChild(existingButton);

        existingButton.addEventListener('click', () => {
            alert(`Logged in as ${localUsername}`);
        });
    }
})