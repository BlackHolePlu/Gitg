// function greet(name) {
//     console.log(`hello ${name} :)`);
// }

// let name = prompt('enter a name')

// greet(name);


// function add(a, b) {
//     console.log(a + b);
// }

// add(parseInt(prompt('введите')), parseInt(prompt('введите')))


// function add(num1, num2) {
//     let result = num1 + num2
//     return result;
// }

// let x = add(2, 3)
// console.log(x);

// let x = function (num) {
//     return num * num;
// }

// console.log(x(4));


// function multi(n, callback){
//     let result = n * 2;
//     callback(result);
// }

// function LogResult(result){
//     console.log(result);
// }

// multi(2,LogResult)

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++){

//         for (let j = 2; j < i; j++){
//             if(i % j == 0) continue nextPrime;
//         }

//         console.log(i);
//     }
// }

// showPrimes(11)

// function minInt(a, b) {
//     let result = (a > b) ? b : (a < b) ? a : false;
//     return result;
// }


// document.write(minInt(parseInt(prompt()), parseInt(prompt())))

// const users = {
//     name: 'uluk',
//     age: 17,
//     addres: 'Bishkek'
// }


// console.log(users.age);

const user = {
    name: 'John',
    surName: 'Smith'
}

user.name = ' Pete';
console.log(user.name,'\n',user.surName);


delete user.name
console.log(user);