const registerBtn = document.getElementById('registerBtn');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submitBtn');
let first_name = document.getElementById('first_name');
let last_name = document.getElementById('last_name')

registerBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    form.classList.remove('none');
})

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    form.classList.add('none');
    if(first_name.value!="" && last_name.value!=""){
    alert(`Welcome ${first_name.value} ${last_name.value} !`);
    } else{
        alert(`Missing values!`);
    }
})