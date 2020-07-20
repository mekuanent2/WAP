String.prototype.filter = function(badWords){
    return this.split(' ').filter(word => !badWords.includes(word)).join(' ')
}

Array.prototype.bubbleSort = function() {
    for (var i = 0; i < this.length; i++) { 
        for (var j = 0; j < (this.length - i - 1); j++) { 
            if(this[j] > this[j+1]) {
                var tmp = this[j];  
                this[j] = this[j+1]; 
                this[j+1] = tmp; 
            }
        }        
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log("Greetings, my name is "+ this.name +" and I am " + this.age + " years old");
    }

    salute(){
        console.log("“Good morning!, and in case I dont see you good afternoon, good evening and good night!")
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age)
    }

    teach(subject){
        console.log(this.name + " is now teaching " + subject);
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age)
        this.major = major;
    }

    greeting(){
        console.log("Hey, my name is "+ this.name +" and I am studying " + this.major);
    }

}

class Professor extends Person{
    constructor(name, age, department) {
        super(name, age)
        this.department = department;
    }

    greeting(){
        console.log("Good day, my name is "+ this.name +" and I am in the " + this.department + " department.");
    }

}

console.log('Hi this is a bad day that has more sick information yet to uncover'.filter(['bad', 'sick']));

items = [2,4,1,2,4,1,5];
items.bubbleSort()
console.log(items);

teacher = new Teacher("Jane", 29)
teacher.teach("Math");

student = new Student("Nina", 19, "CS")
student.salute();
student.greeting();

prof = new Professor("Esther", 42, "CS")
prof.salute();
prof.greeting();