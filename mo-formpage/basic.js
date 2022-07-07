/*const word = 'john';
console.log(typeof word)
const age = 30;
console.log(typeof age)
const ratings = 2.4;
console.log(typeof ratings)
const isCool = true;
console.log(typeof isCool)
const x = null;
console.log(typeof null)
const s = 'Hello world'
console.log(s.toUpperCase())
console.log(s.length)
console.log(s.toLowerCase())
console.log(s.substring (0, 5).toUpperCase())
console.log(s.split (''))
const s = 'technology, computers, internet, code'
console.log(s.split(''))*/
//const numbers = new Array(1, 2, 3, 4, 5)
//console.log(numbers)
//const fruits = ['apples', 'mango', 'grape'];

//console.log(fruits[2, 0])
/*fruits.pop()
fruits.push('italy')
fruits.unshift('dumebi')
fruits.shift()
console.log(fruits)
console.log(fruits.indexOf('mango'))*/
/*const person = {
    firstName : 'moses',
    lastname : 'Dumebi',
    age : 30,
    hobbies : ['music', 'dancing', 'football'],
    address : {
        street : 'Bayduk',
        city : 'akure',
        state : 'Ondo '
    }
      
};
person.email: 'mosesogun11'
console.log(person);
console.log(person.firstName, person.lastname)
console.log(person.hobbies[2])
console.log(person.address.city)*/
/*const todos = [
    {
        id : 1,
        text : 'take out trash',
        isCompleted : true
    },
    {
        id : 2,
        text : 'meeting with boss',
        isCompleted : false
    },
    {
        id : 3,
        text : 'appointment with the doctor',
        isCompleted : true
    }
];
console.log(todos)
console.log(todos[1].text)
for (let i=0; i<todos.length; i++){
    console.log('for loopNumbers : $(1)')
}*/
//for statement
/*for (let i=0;  i<10; i++) {
    console.log('for loopNumber : $(i)');

}*/
//while
/*let i=0;
  while(i<10) {
      console.log('while loopNumber : $(i)')
     i++;
  }*/
/*const x = 10;
if (x==10){
    console.log('x is equal 1o')
}
else{
    console.log('x is not equal 10')
}*/
/*const x = 5;
const  y = 14;
if (x>5 || y>10){
    console.log('x is more than 5 or y is more than 10')
}*/
/*const x = 90;
const color = x>10 ? 'red' : 'blue'
switch(color){
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
        default: 
           
}*/
/*function addNum(num1, num2){
    console.log(num1 + num2)
}
addNum(
    8,2)*/
/*const addNum = num1 => num1 + 5;
console.log(addNum(10))*/
/*const  score =10;
console.log(score)*/
/*const ul = document.querySelector('.items');
 //ul.remove()
//ul.lastElementChild.remove()
ul.firstElementChild.remove()
ul.children[1].innerText = 'Brad'
//ul.lastElementChild.innerHTML = 'hello'
//const btn = document.querySelector('.btn')
//btn.style.background = 'red'
//btn.addEventListener('click', (e) => {
   // e.preventDefault();
    //document.querySelector('#myForm').style.background = '#ccc'
    //console.log('click')
    //console.log(e.target)
    //console.log('click')
})*/
const myform = document.querySelector('#myform')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')
     myform.addEventListener('submit', onSubmit)
     function onSubmit(e){
         e.preventDefault();
        if(nameInput.value==='' || emailInput.value ===''){
            //alert('Please enter All field')
            msg.classList.add('error')
            msg.innerHTML = 'please enter all field'
            setTimeout(() => msg.remove(), 3000)
        } else {
            const li = document.createElement('li')
            li.appendChild(document.createTextNode('${nameInput.value} : ${emailInput.value}'));

            userList.appendChild(li);
            //clear field
            nameInput.value = '';
            emailInput.value = '';
        }
        // console.log(nameInput.value);
     }
    

