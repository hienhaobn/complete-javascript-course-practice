//////////////////////////////
// Lecture: Hoisting
// caculateAge(1999); // 21

// function caculateAge(year) {
//     console.log(2020 - year);
// }


// retirement(1999);

// var retirement = function(year) {
//     console.log(65 - (2020 - year));
// }

// variables
// console.log(age)
// var age = 23;


// function foo() {
//     console.log(age);
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age); 
// variable here gets stored in the global
// execution context object right so in the
// variable object of the global execution
// context object sounds a bit confusing
// right but if you go through the last
// lectures again then it will make a lot
// of sense so again this age variable is
// declared in this global execution
// context object and then this foo
// function here gets its own execution
// context object in which we can also
// store an age variable
// can read the same name it really doesn't
// matter because tears are two completely
// different variables this variable age is
// defined in a variable object of the
// execution context object of the foo
// function while this age variable is
// defined in the variable object of the
// global execution context object so each
// one gets its own variable object so we
// have two different variables and so the
// results when we print them are different 

/////////////////////////////////////////////////////
// Lecture: The this keyword
// calculateAge(1999)

// function calculateAge(year) {
//     console.log(2021 - year); // window object
//     console.log(this);
// }

var jonh = {
    name: 'John',
    yearOfBirth: 1998,
    calculateAge: function() {
        console.log(this);
        console.log(this.yearOfBirth);

        function innerFunction() {
            console.log(this); // points to the object that is calling the method
        }

        innerFunction(); // Window object
    }
}

/*
    giai thich innderFunction:
*/

jonh.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,

}

mike.calculateAge = jonh.calculateAge;
mike.calculateAge(); // 1984 and window object
/*
    this variable is only assigned value when the object calls the method
    , so if is wouldn't be like this then this this variable here would always
    be John right. Because it;s in fact attached to the John object but when we now call
    the same method from the Mike method object then the this becomes the Mike object.
    So again the this keyword obly become something as soon as the method gets
    called and this is something really
*/