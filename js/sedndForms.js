const form = document.querySelector('.form-test-drive');
const api = "https://jsonplaceholder.typicode.com";
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let data = {};

    for (let { name, value } of form.elements) name && (data[name] = value);

    fetch(api + '/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.status === 200 || response.status === 201) return response.json();
        throw new Error(response.status); 
    })
    .then(data => {
        alert('Данные успешно сохранены');
        form.reset();
    })
    .catch(error => alert('Произошла ошибка, статус: ' + error.message));
});
