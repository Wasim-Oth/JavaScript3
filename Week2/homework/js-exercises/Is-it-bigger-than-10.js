function checkDoubleDigits(num) {
    return new Promise ((resolve, reject) =>{
        
        setTimeout(() => {
            num = Math.floor(Math.random() * 100)
                if (num > 10){
                resolve (`The number ${num} is bigger than 10!`)
                } else {
                    reject(`The number ${num} is samller than 10!`)
                }
            }, 1000)
        })
    }
checkDoubleDigits()
.then (res => console.log(res))
.catch (err => console.log(err))
