class Abdulkareem {
    constructor(name, age, gender, city, family, work, hasaAnimal){
        this.name = name
        this.age = age
        this.gender = gender
        this.city = city
        this.family= family
        this.work = work
        this.hasaAnimal= hasaAnimal
        }

        //methods
        animals(type){
            this.type= type
            return `${this.name} has a ${this.type}`
        }

        task(){
            this.task= 'make houses'
            return `${this.name} is a ${this.work} his jop is to ${this.task}`
        }
        food(){
            this.food= 'dates'
            return `${this.name} eets ${this.food}`
        }  
        smoke(){
            this.smoke = 'water pipe'
            return `${this.name} smokes ${this.smoke}`
        }
    }
    

class Adel {
    constructor(type, name, age, color){
        this.type= type
        this.name= name
        this.age= age
        this.color= color
    }

    aboutAdel(food, job ){
        this.food = food
        this.job = job
        return `Usually ${this.name} eats ${this.food} or ${this.job}`
    }
}

const abdlah = new Abdulkareem('Abdulkareem', 35, 'man', 'Riyadh', ['wife', 'first child', 'second child', 'third child'], 'construction worker', true)
console.log(abdlah)
console.log(abdlah.animals('horse'))

const adel = new Adel('horse', 'Adel', 15, 'brown')
console.log(adel)
console.log(adel.aboutAdel('grass', 'helps transport materials for Abdulkareem'))
