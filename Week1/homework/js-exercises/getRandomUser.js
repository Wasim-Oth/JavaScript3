const log = console.log;
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const url = 'https://www.randomuser.me/api';

btn.addEventListener('click', function(){
const xhr = new XMLHttpRequest();



xhr.onreadystatechange =  () => {
if (xhr.readyState === 4) {
    // log('good')
    let data = JSON.parse(xhr.response);
    // let name = data.results[0].name;
    log('XMLHttp' + ': '+ data.results[0].name.first);
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
log('axios friends' +': '+ response.data.results[0].name.first)
});
})

