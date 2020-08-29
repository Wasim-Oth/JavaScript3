const log = console.log;
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const url = 'https://dog.ceo/api/breeds/image/random';
const body = document.querySelector('body');
const ul = document.querySelector('#ul');
const li = document.createElement('li');
const img = document.createElement('img');

btn.addEventListener('click', function(){
const xhr = new XMLHttpRequest();

xhr.onreadystatechange =  () => {
if (xhr.readyState === 4) {
    let data = JSON.parse(xhr.response);
    img.src= data.message;
    li.appendChild(img);
    ul.appendChild(li);
    body.appendChild(ul);
    // img.style.width = '400px';
}
};

xhr.onerror = function (err){
    console.warn(err);
};

xhr.open('GET', url, true);
xhr.send()

})


btn2.addEventListener('click', function(){
axios.get(url).then(response => {
    img.src=  response.data.message;
    li.appendChild(img);
    ul.appendChild(li);
    body.appendChild(ul);
});
})

