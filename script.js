let name= 'Barnabas';


console.log( `Hello, my dear ${name}`);

/* jquery part*/


$('p').html('The <strong> jQuery </strong> part has started')

$('h1').css('background', 'red')

$('h2').toggleClass('green')
$('p').toggleClass('green')
$('p').toggleClass('green')


$('main').append('<p id="first">Added element</p>')
$('main').append('<p id="second">Added second element</p>')

$('#first').remove();

$('#add-button').click(() => {
   console.log($('main p'));
$('main').append('<p>Added a new p tag</p>')

});

/* function removeFunction(){
    $('main p').remove
} */

let removeFunction = ()=>{
    $('main p:last-child').remove();
}

$('#remove-button').click(removeFunction);


/* last part
conditions and loops */

let age = 35   ;

if ( age > 18 ){
    console.log('This person can drink.');
    /* statements 
    !- not equal!
    nem lesz egyenlő ha felkiáltójel van!*/
}else{
console.log('this is a kid, no alcohol.');
}


/* loops!!!!
used for repeatedly do the same time, just like for 100th times, it can be hard sometimes
first is the most useful
 */



/* $('main').append('<div class="box"></div>');
$('main div:last-child').css('background', 'orange')
$('main').append('<div class="box"></div>');
$('main div:last-child').css('background', 'yellow')
$('main').append('<div class="box"></div>');
$('main div:last-child').css('background', 'purple')
$('main').append('<div class="box"></div>');
$('main div:last-child').css('background', 'blue')
$('main').append('<div class="box"></div>');
$('main div:last-child').css('background', 'green')
 */
let colors = ['orange', 'yellow', 'purple', 'blue', 'green'];  
colors.push('magenta');

 colors.forEach((color)=>{
    $('main').append('<div class="box"></div>');
    $('main div:last-child').css('background', color)
 });






for(let i = 0; i < 100; i = i + 1 ) {
    console.log('Current number' + i);
}










 
/* 123
123
5+5
10
10*10
100
let age;
undefined
age+2
NaN
age =33
33
age+8
41
age=25
25
age+8
33
age=33-10
23
age=age+10
33
let name
undefined
name = Barni
VM368:1 Uncaught ReferenceError: Barni is not defined
    at <anonymous>:1:1
(anonymous) @ VM368:1
name = 'Barni'
"Barni"
name= "Adam"
"Adam"
name =`backtick shortcut`
"backtick shortcut"
let greeting = "Hello 'Everyone'!"
undefined
'This is a quote from someone: "The qoute"'
"This is a quote from someone: "The qoute""
'hello"
VM712:1 Uncaught SyntaxError: Invalid or unexpected token
'hello'
"hello"
"whatsup?"
"whatsup?"
'You can use both: 'and "'
VM845:1 Uncaught SyntaxError: Unexpected identifier
"Hello" + "Adam"
"HelloAdam"
"Hello" + "Adam, who is " + age + "years old"
"HelloAdam, who is 33years old"
Hello" + " Adam, who is " + age + "years old"
VM954:1 Uncaught SyntaxError: Unexpected string
name = 'Barni'
"Barni"
`Hello ${name}, who is ${age} years old`
"Hello Barni, who is 33 years old"
year = 21
21
`Hello ${name}, who is ${age} years old`
"Hello Barni, who is 33 years old"
age =21
21
`Hello ${name}, who is ${age} years old`
"Hello Barni, who is 21 years old"
"hello" + " world"
"hello world"
let something = 12;
undefined
something
12
greeting
"Hello 'Everyone'!"
let oldEnoughToDrive = true
undefined
oldEnoughToDrive = false
false
"true && (false || (true && false))
VM1696:1 Uncaught SyntaxError: Invalid or unexpected token
"true && (false || (true && false))"
"true && (false || (true && false))"
let x = 5
undefined
x = "hello"
"hello"
x = true
true
let comment = "First Comment!"
undefined
let comment2 = "Second Commen, hello"
undefined
let comments = ["First Comment!", "second Comment"];
undefined
comments
(2) ["First Comment!", "second Comment"]
comment2 + "barni"
"Second Commen, hellobarni"
comments[1] + " barni"
"second Comment barni"
name
"Barni"
name.length
5
name = Barnabas Kovacs
VM2309:1 Uncaught SyntaxError: Unexpected identifier
name = "Barnabas Kovacs"
"Barnabas Kovacs"
name.length
15
name.substring
ƒ substring() { [native code] }
name.substring(7)
"s Kovacs"
name.string(8)
VM2491:1 Uncaught TypeError: name.string is not a function
    at <anonymous>:1:6
(anonymous) @ VM2491:1
name.substring(8)
" Kovacs"
name.toUpperCase()
"BARNABAS KOVACS"
comments 
(2) ["First Comment!", "second Comment"]
comments.length
2
comments.push("third comment")
3
comments
(3) ["First Comment!", "second Comment", "third comment"]
comments[0]
"First Comment!"
let person = {}
undefined
let person = {
firstname: 'Barni'
lastname: 'Kovacs
email: 'a.barnabas@gmail.com'
age:21,
oldEnoughToDrive: true
}
VM2982:3 Uncaught SyntaxError: Unexpected identifier
let person = {
firstname: 'Barni'
lastname: 'Kovacs'
email: 'a.barnabas@gmail.com'
age:21,
oldEnoughToDrive: true
}
VM2986:3 Uncaught SyntaxError: Unexpected identifier
let person = {
firstName: 'Barni'
lastName: 'Kovacs'
email: 'a.barnabas@gmail.com'
age:21,
oldEnoughToDrive: true
}
VM2995:3 Uncaught SyntaxError: Unexpected identifier
let person={ firstName: 'Barni',
lastname: 'Kovacs',
email: barnika95@gmail.com,
age: 21,
oldEnoughToDrive: true,
}
VM3168:3 Uncaught SyntaxError: Invalid or unexpected token
let person = {
firstname: 'Barni',
lastname: 'Kovacs',
email: 'a.barnabas@gmail.com',
age:21,
oldEnoughToDrive: true
}
undefined
person
{firstname: "Barni", lastname: "Kovacs", email: "a.barnabas@gmail.com", age: 21, oldEnoughToDrive: true}
person.email
"a.barnabas@gmail.com"
person.age
21
person.age +20
41
person.favoriteColor = 'blue'
"blue"
person
{firstname: "Barni", lastname: "Kovacs", email: "a.barnabas@gmail.com", age: 21, oldEnoughToDrive: true, …}firstname: "Barni"lastname: "Kovacs"email: "a.barnabas@gmail.com"age: 21oldEnoughToDrive: truefavoriteColor: "blue"__proto__: Object
person.email = 'a.barnabas.kovacs@gmail.com"
VM3558:1 Uncaught SyntaxError: Invalid or unexpected token
person.email = 'a.barnabas.kovacs@gmail.com'
"a.barnabas.kovacs@gmail.com"
let persons = [person, person person]
VM3617:1 Uncaught SyntaxError: Unexpected identifier
let persons = [person, person, person]
undefined
persons
(3) [{…}, {…}, {…}]
person.favoriteColor = ['green', 'orange']
(2) ["green", "orange"]
 */