//q1

var city=prompt('enter a city name')
if (city==='karachi'){
    alert('welcome to the city of lights')
}
else{
    alert('Darkest city islamabad')
}


//q2

var gender=prompt('enter your gender')
if(gender==='male'){
    alert('godd morning sir')
}
else{
    alert('godd morning madam')
}

//q3

var color=prompt('enter signal color')
if(color==='red'){
    alert('must stop')
}
else if(color==='yellow'){
    alert('ready to move')
}
else if(color==='green'){
    alert('move now')
}


//q4


var fuel=+prompt('enter your fuel in litres')
if(fuel<0.25){
    alert('please refill your fuel tank')
}
else {
    alert('you are good to go')
}


//q5
a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// //b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


// //c

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// //d

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// //e
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }



//     //f
//     if("car" < "cat"){
//         alert("car is smaller than cat");
//         }



//q6


 var math=+prompt('enter marks in math')
 var eng=+prompt('enter marks in english')
 var sci=+prompt('enter marks in science')
 var tmark=+prompt('enter total marks')
var percentage=(math+eng +sci)/tmark*100
 document.write('total marks:'+tmark+"<br>")
 document.write('marks obtained:'+(math+eng +sci)+"<br>")
 document.write('percentage:'+percentage+'%'+"<br>")



   if(percentage>=80){
   document.write('grade:A-one'+"<br>")
   document.write('Remarks:Excellent'+"<br>")
  }
  else if(percentage>=70 && percentage<80){
      document.write('grade:A'+"<br>")
      document.write('Remarks:good'+"<br>")
     } 
  else if(percentage>=60 && percentage<70){
      document.write('grade:B'+"<br>")
      document.write('Remarks:Parh lia kro'+"<br>")
     } 
  else if(percentage<60){
      document.write('grade:fail'+"<br>")
      document.write('Remarks:Sharam kr lo yaar'+"<br>")
     } 

//q7

var num=+prompt('enter a number')
if(num===4){
    document.write('Bingo!correct answer')
}
else if(num==5){
    document.write('close enough')
}
else(
    document.write('try again')
)


//q8

var num=+prompt('enter a number')
var rem=num%3
if (rem==0){
    document.write('this number is divisible by 3')
}
else{
    document.write('ths number is not divisible by 3')
}





//q9


var num=+prompt('enter a number')
 var rem=num%2
if (rem==0){
    document.write('this is an even number')
}
else{
    document.write('this is an odd number')
}








//q10
var temp=+prompt('enter temp in celsius')
if(temp>=40){
    document.write('It is too hot outside.')
}
else if(temp>=30 && temp<40){
    document.write('The Weather today is Normal.')
}
if(temp>=20 && temp<30){
    document.write('Today’s Weather is cool.')
}
if(temp>=10 && temp<20){
    document.write('OMG! Today’s weather is so Cool')
}





//q11


var num1=+prompt('enter 1st number')
var num2=+prompt('enter 2nd number')
var sign=prompt('enter an operator i.e:+,-,*,/')
if(sign=='+'){
    document.write(num1+sign+num2+'='+(num1+num2))
}
else if(sign=='-'){
    document.write(num1+sign+num2+'='+(num1-num2))
}
if(sign=='*'){
    document.write(num1+sign+num2+'='+(num1*num2))
}
if(sign=='/'){
    document.write(num1+sign+num2+'='+(num1/num2))
}

































