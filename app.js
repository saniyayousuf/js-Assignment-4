////////// Chapter No 21-25 (string method)///////////

// var name1 = prompt('Enter your first name','');
// var name2 = prompt('Enter your last name','');
// var fullName = name1 + name2
// alert(fullName +  "  "+ "welcome to this page");

////

// var modelNumber =prompt ("Enter your favourite mobile model");
// document.write("My favorite Mobile Phone is :"+"  "+modelNumber +"<br>"+"  "+ "Length of Strings is :"+" "+
// modelNumber.length+"<br>"+"<br>")

////


// var country =  "Pakistani";
// var countryIndex =country.slice(7,8)
// document.write("<br>"+"String :"+" "+country+"<br>"+"index of 'n' is "+"  " +"7"+"<br>"+"<br>")

////


// var variable ="Hello World"
// var indexVariable = variable.lastIndexOf("l");
// document.write("<br>"+"String : Hello World"+"<br>"+"Last index of 'l' :"+" "+ indexVariable+"<br>"+"<br>")


// /////

// var country1 =  "Pakistani";
// var index = country1.charAt("i")
// document.write("<br>"+""+"String :"+" "+country1+"<br>"+" "+"Character at index  3 is :"+" "+index+"<br>"+"<br>")

/////


// var city1 = Hyderabad;
// city1 = city1.replace(Hydera,"Islam")
// document.write("<br>"+""+"city :"+" "+"Hyderabad"+ "<br>"+" "+"After replacement :"+" "+"Islamabad"+"<br>"+"<br>")

///

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message =message.replace(/and/g,"&")
// document.write(message+"<br>")


///

// var number1 = "472";
// number1  = number1.parseInt(number1)
// document.write("<br>"+" "+"value : 472"+"<br>"+"Type : string"+"<br>"+"value : 472"+"<br>"+"Type : number"+"<br>"+"<br>")


///

// var nuts = prompt("Enter your favourite nuts","");
// nuts1 = nuts.toUpperCase()
// document.write("<br>"+" "+"user input :"+" "+nuts+"<br>"+" "+"Upper case :"+" "+nuts1+"<br>"+"<br>")

///

// var random = prompt("Enter yours","");
// randoms = random.toCamelCase()
// document.write("<br>"+" "+"user input :"+" "+random+"<br>"+" "+"title case :"+" "+randoms+"<br>"+"<br>")

/////

// var _num = 35.36 ;
// $num =( parseInt(_num)+"36")
// document.write("<br>"+" "+"Number : "+" "+_num+"<br>"+" "+"result :"+" "+"3536"+"<br>"+"<br>")

///


// var password = +prompt("Enter a password ","")
// alert("please enter a valid password")

////


// var university = "University of Karachi";
// var  array = university.split("");
// console.log(array)
// document.write("u"+"<br>"+"n"+"<br>"+"i"+"<br>"+"v"+"<br>"+"e"+"<br>"+"r"+"<br>"+"s"+"<br>"+"i"+"<br>"+"t"+"<br>"+"y"+"<br>"+"<br>"+"o"+"<br>"+"f"+"<br>"+"<br>"+
// "k"+"<br>"+"a"+"<br>"+"r"+"<br>"+"a"+"<br>"+"c"+"<br>"+"h"+"<br>"+"i" +"<br>"+"<br>")

////

// var ipt =prompt("Enter your name ","")
// var ipt_ =ipt.at(-1)
// document.write("<br>"+" "+"User Input "+" " + ipt +"<br>"+" "+"last character of input :"+" "+ipt_+"<br>"+"<br>")

/////

// var text ="The quick brown fox jumps over the lazy dog";
// var newText = text.chars(the)
// console.log(newText)
//////////////////////////////////////////////////////////////////////


////////////// Chapter No :26-30 (MATH METHODS )////////////////////////////

// var userNumber=+prompt("enter your lucky number in deciaml","");
// var roundNumber =Math.round(userNumber);
// var floorNumber = Math.floor(userNumber);
// var ceilNumber = Math.ceil (userNumber)

// document.write("Number :"+"  "+userNumber+"<br>"+" "+"Round Off value :"+" "+roundNumber+"<br>"+" "+"floor value :"+" "+floorNumber+"<br>"+" "+"ceil value :"+" " +ceilNumber+"<br>"+"<br>")


////



// userNumber1=+prompt("enter your lucky number in negative  deciaml","");
// var roundNumber1 =Math.round(userNumber1);
// var floorNumber1 = Math.floor(userNumber1);
// var ceilNumber1 = Math.ceil (userNumber1)

// document.write("Number :"+"  "+userNumber1+"<br>"+" "+"Round Off value :"+" "+roundNumber1+"<br>"+" "+"floor value :"+" "+floorNumber1+"<br>"+" "+"ceil value :"+" " +ceilNumber1+"<br>"+"<br>")

//////

// var randomNumbers =Math.random()
// randomNumbers =(Math.ceil(randomNumbers*6))
// document.write("Random dice value is "+randomNumbers+"<br>"+"<br>")


//////


// var num$ =Math.random();
// num$ =(Math.floor(num$*2))
// if(num$ == 1){
//     document.write(1+"<br>"+" "+"random coin vaue : Tail"+"<br>"+"<br>")
// }
// else{
//     document.write(2+"<br>"+" "+" Random coin value is : head"+"<br>"+"<br>" )
// }
// ////


// var numBers = (Math.floor(Math.random()*100))
// document.write("random number between 1 and 100 :"+" "+numBers+"<br>"+"<br>")


/////


// var weight =prompt("Enter your weight","");
// weight =parseFloat(weight)
// document.write("The weigt of user is "+" " +weight+"<br>"+"<br>")


////


// var secretNumber =8;
// var userNumber_ =+prompt("guess the secret Number between 1 - 10","");
// if( userNumber_ ==secretNumber){
//     document.write("congratulations , you guess the correct word"+"<br>" )
// }
// else{
//     document.write("better luck, next time"+"<br>")
// }

//////////////////////////////////////////////////////////////////////

///////////////// Chapter No 31 - 34 (DATE METHODs)/////////////////////////////////////



// var date = new Date()
// document.write(date)

//////


// var now = new Date ()
// var month =now.getMonth()
// var monthArray = ["january",'february','march','april','may','june','july','august','september','october','november','december']
// var today = monthArray[month]
// alert(today)

////

// var now1 = new Date ()
// var day =now1.getDay()
// var daysArray = ["Sun",'Mon','Tue','Wed','Thur','Fri','Sat']
// var today = daysArray[day]
// alert(today)


/////


// var now1 = new Date ()
// var day =now1.getDay()
// var daysArray = ["Sun",'Mon','Tue','Wed','Thur','Fri','Sat']
// var today = daysArray[day]
// if(day == Sun & Sat){
//     alert("It's a fun day ")
// }



/////

// var now_ =new Date()
// var date =now_.getDate()
// if(date >16){
//     alert("“First fifteen  days of the month”")
// }
// else{
//     alert("“last fifteen  days of the month”")   
// }

//////

// var now$ = new Date ()
// var time =(now$.getTime()/60000)
// document.write("<br>"+now$+"<br>")
// document.write ("Elapsed minutes since, January 1, 1970"+" "+ time+"<br>"+"<br>")

///

// var now2 =new Date()
// var hours= now2.getHours()
// if(hours == 00 || 12){
//     document.write("it's AM")
// }
// else{
//     document.write("it's PM")
// }

/////


// var laterDate = new Date ("Thurs Dec 31 , 2020")
// console.log(laterDate)

/////
// var nOW =new Date()
// var time = nOW.getTime()

// var noW =new Date("june 18, 2015")
// var Date = noW.getTime()

// var diff =(time  - Date )
// var diff1= (diff / (1000 * 60 * 60 * 24 ))

// var lastDate = Math.floor(diff1)
// document.write("<br>"+lastDate +" "+" days have passed since 1st Ramadan .2015"+"<br>")

///////////


// var xyz =new Date("april 22, 2023")
// var abc = new Date ( "april 22 , 2023")
// document.write(" "+"<br>"+"'Current Date:'"+" "+xyz+"<br>"+" "+"1 hour ago , it was"+" "+abc)

/////

// var onw = new Date ()
// var time =onw.getTime()

// var birthDate =new Date(prompt("Enter your date of birth ","april 18 , 2005"))
// var birthDate$ =birthDate.getFullYear()
// var birthDate_ = birthDate.getTime()


// var difference = time -birthDate_
// var age =(difference/(1000 * 60 * 60 * 24 * 365))
// var age = Math.floor(age)
// alert( "your age is "+" "+age+ "\n"+" "+"Your birth year is "+" "+birthDate$)


///////

// var c_name = prompt("Enter your full name","")
// var c_name =c_name.toUpperCase()

// var month = prompt("Enter current month","")
// var month =month.toUpperCase()

// var units = 510
// // var units= units.toFixed(0)

// var charges = 16.625
// var charges = charges.toFixed(0)

// var amount =units *charges
// // var amount = amount.toFixed(0)

// var surCharges = 200

// var grossAmout =amount + surCharges

// document.write(" "+"<br>"+"<h1> K-Electric Bill <h1/>")
// document.write(" "+"<br>"+"Customer Name :"+" "+c_name)
// document.write(" "+"<br>"+"Month :"+" "+month)
// document.write(" "+"<br>"+"Number of units :"+" "+units)
// document.write(" "+"<br>"+"Charges per unit :"+" "+charges)
// document.write(" "+"<br>")
// document.write(" "+"<br>"+"Net Amount Payable (within Due Date) :"+" "+amount)
// document.write(" "+"<br>"+"Late payment surcharge :"+surCharges)
// document.write(" "+"<br>"+"Gross Amount payable :"+grossAmout)

/////


///////////////// Chapter  35 - 38 (FUNCTION)//////////////////

// var currentDate = new Date()
// document.write (currentDate)

///


// var firstName = prompt(" Rnter your  first name","")
// var LastName = prompt(" Rnter your  last name","")
// alert("Welcome to our website"+" "+firstName+" "+LastName )

/////

// function sumOfNumbers(){
//     var num1 =+prompt("enter any number")
//     var num2 =+prompt("enter again number")
//     var sum = num1 + num2 
//     alert ("The sum of you number is "+" "+sum)
// }
// sumOfNumbers(18)

/////


// function multiplyBy()
// {
//        var  num1 =+prompt("Enter any number")
//         var num2 = +prompt("Enter any number")
//         var operation1 = num1  * num2
//         document.write(" "+"<br>"+"The result after mulplication is "+" "+operation1)
// }
// multiplyBy(0)
// function divideBy() 
// { 
//         var num1 =+prompt("Enter yor number")
//         var num2 =+prompt("Enter yor number");
//         var operation2 = num1 / num2;
//         document.write(" "+"<br>"+"The result after division is "+" "+operation2)
// }
// divideBy(1)

////
//method1////
// var userNumber_ = +prompt("Enter you bonus number")
// var userNumber_ =Math.pow(userNumber_,2)
// document.write("The square of you bonus number is "+" "+userNumber_)


////
////Method2/////

// var userNumber_ = +prompt("Enter you bonus number")
// var userNumber_ = userNumber_ *userNumber_
// document.write("The square of you bonus number is "+" "+userNumber_)
////


////method 3////

// var num = +prompt("Enter you bonus number") 
// function square(num){
    // return num * num;
//   }


/////

// var num = +prompt("Enter any number")
// function factorialize(num) 
// { if (num === 0 || num === 1) return 1;
//      for (var i = num - 1; i >= 1; i--) { num *= i; }
//       return num;
//  } 
//  factorialize(5);
// console.log (num)

// function letter(){
//     var arg1 = "webdesigning"
//     var arg2 = 3.0
//     var sum = arg1 + arg2
//     document.write(sum)
// }
// letter("a")



// function calcCircumference(){
//     var radius1 = 70
//     var circumference = 2 * 3.141 *radius1
//     document.write("the circumferernce is "+" "+circumference+"<br>")
// }
// calcCircumference("abc")

// function calcArea(){
//     var radius2 = 15
//     var ares =  3.141 *radius2 *radius2
//     document.write("the area is "+" "+ares)
// }
// calcArea("xyz")





///////////// Chapter NO : 38 - 42 (FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOP)//////////////

// var number$ = +prompt("Enter a number")
// var power = +prompt("Enter a number")
// var finalAnswer = Math.pow(number$,power)
// alert("your answer is"+" "+finalAnswer)


// var a = +prompt("Enter side 'a' of triangle")
// var b = +prompt("Enter side 'b' of triangle")
// var c = +prompt("Enter side 'c' of triangle")
// var Sides =((a + b + c) /2)
// var a1 =Sides - a
// var b1 =Sides - b
// var c1 =Sides - c
// var areaOfTriangle = (Sides * a1 * b1 * c1)
// alert("The area of triangle is "+ " "+ areaOfTriangle)




// function main(){
//     var marks1 =+prompt("Enter your subject 1 marks")
//     var marks2 =+prompt("Enter your subject 2 marks")
//     var marks3 =+prompt("Enter your subject 3 marks")
//     var average =(marks1 + marks2 + marks3) /3     
//     var percentage =(((marks1 + marks2 + marks3) / 300 *100))
    
//     document.write("Subject 1 marks ="+ " "+marks1 + "<br>")
//     document.write("Subject 2 marks ="+ " "+marks2 + "<br>")
//     document.write("Subject 3 marks ="+ " "+marks3 + "<br>")
//     document.write ("The average is "+" "+ average +"<br>")
//     document.write("The Percentage is "+" "+percentage)
// }

// main(1)


// function index(){
//     var names = "saniya"
//     var indexName =names.indexOf("a")
//    console.log(indexName)
//     if (indexName !== -1){
//         names =names.slice(0,indexName)+"z"+names.slice(indexName + 1)
//         document.write(names)
//     }

// }
// index(12)

/////////////////////////////////////////////////////////////////////////////////////






















