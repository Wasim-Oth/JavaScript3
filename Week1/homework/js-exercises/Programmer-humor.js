const log = console.log;
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const url = 'https://xkcd.now.sh/?comic=latest';
const body = document.querySelector('body');
const img = document.createElement('img');

btn.addEventListener('click', function(){
const xhr = new XMLHttpRequest();

xhr.onreadystatechange =  () => {
if (xhr.readyState === 4) {
    // log('good')
    let data = JSON.parse(xhr.response);
    img.src=  data.img;
    // log(img)
    body.appendChild(img);
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
    // log(response.data.img)
    img.src=  response.data.img;
    body.appendChild(img);
});
})

