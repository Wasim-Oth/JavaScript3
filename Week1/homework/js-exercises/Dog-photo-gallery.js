 const url = 'https://dog.ceo/api/breeds/image/random'
 const body = document.body

  //create 2 buttons and append them to the body
  const buttonXMLHttp = document.createElement('button')
  buttonXMLHttp.innerText= 'show photo with XMLHttp'
  const buttonAxios = document.createElement('button')
  buttonAxios.innerText= 'show photo with axios'
  body.appendChild(buttonXMLHttp)
  body.appendChild(buttonAxios)

  //create div (photosContainer) to append the photos in it
  const photosContainer = document.createElement('div')
  body.appendChild(photosContainer)
  
  //XMLHttp request
  buttonXMLHttp.addEventListener('click', function(){
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange =  () => {
  if (xhr.readyState === 4) {
      let data = JSON.parse(xhr.response);
      const img = document.createElement('img');
      img.src= data.message;
      img.style.cssText= "width:200px; height:200px; margin:10px"
      photosContainer.appendChild(img); 
  }
  };
  xhr.onerror = function (err){
      console.log(`ops something went wrong with XMLHttp request ${err}`);
  }; 
  xhr.open('GET', url, true);
  xhr.send()
  })
  
  // axios request
  buttonAxios.addEventListener('click', function(){
  axios.get(url).then(response => {
      const img = document.createElement('img');
      img.src=  response.data.message;
      img.style.cssText= "width:200px; height:200px; margin:10px"
      photosContainer.appendChild(img);
  })
  .catch (error => {
    console.log(`ops something went wrong with axios request ${error}`)
  })
  })
  
