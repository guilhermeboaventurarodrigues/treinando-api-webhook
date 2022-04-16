let form = document.getElementById('form')
URL = 'https://webhook.site/b4e642ea-05f8-461f-af70-09e2b6a7bf3b'

form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('name').value,
    email = document.getElementById('email').value,
    idade = document.getElementById('idade').value,
    senha = document.getElementById('senha').value
    data = {
        name,
        email,
        idade,
        senha
    };
    fetch(URL, {
        method : 'POST',
        body: JSON.stringify(data)
    })
    .then(res => res.JSON())
    .then(data => data.message)
})