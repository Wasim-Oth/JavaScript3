// Exercise A
  
  async function getData(url){
      try{
      const response = await fetch (url)
      const data = await response.json()
      console.log(data)
      } catch (error) {console.log(error)}
  }
  getData('https://randomfox.ca/floof/');



  // Exercise B
  const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
  
    async function makeAllCaps(array) {
        try{
            let capsArray =  await array.map(word =>{ 
            if (typeof word === 'string'){
               return word.toUpperCase(); 
             } else {
            throw 'Error: Not all items in the array are strings!'
             } 
        })
        console.log(capsArray)
     } catch (error) {console.log(error)}   
    }
  makeAllCaps(arrayOfWords)