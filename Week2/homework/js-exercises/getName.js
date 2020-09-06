

// const getAnonName = (firstName, callback) => {

//     setTimeout(() => {
//       if (!firstName)
//         return callback(new Error("You didn't pass in a first name!"));
  
//       const fullName = `${firstName} Doe`;
  
//       return callback(fullName);
//     }, 2000);
//   };
  
//   getAnonName('John', console.log);


function getAnonName (firstName) {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            if (firstName){
                let fullName = `${firstName} othman`;
                resolve(fullName)
            } else {
                let error = "you didn't pass in a first name!";
                reject (error)
            }
        }, 2000)
    })
}

getAnonName('wasim')
.then(name => console.log(name))
.catch(err => console.log(err))
