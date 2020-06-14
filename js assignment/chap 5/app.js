// //q1


  var num1=+prompt('enter first number')
  var num2=+prompt('enter sec number')
  sum=num1+num2;
  document.write('sum of '+num1+' and '+num2+ ' is '+sum)


// //q2


  var num1=+prompt('enter first number')
  var num2=+prompt('enter sec number')
  sub=num1-num2;
  document.write('differ of '+num1+' and '+num2+ ' is '+sub)



  var num2=+prompt('enter sec number')
  var num1=+prompt('enter first number')
  mul=num1*num2;
  document.write('prod. of '+num1+' and '+num2+ ' is '+mul)



  var num1=+prompt('enter first number')
  var num2=+prompt('enter sec number')
  div=num1/num2;
  document.write('div. of '+num1+' and '+num2+ ' is '+div)



  var num1=+prompt('enter first number')
  var num2=+prompt('enter sec number')
  mod=num1%num2;
  document.write('modulus of '+num1+' and '+num2+ ' is '+mod)



//q3



 var num=+prompt('enter a number')
 document.write('initial value:'+num+"<br/>")
 num++;
 document.write('Value after increment is: '+num+"<br/>");
 num=num+7;
 document.write('Value after addition is: '+num+"<br/>");
 num--;
 document.write('Value after decrement is: '+num+"<br/>");
 document.write('the remainder is:'+num%3)




//q4


 var tick=+prompt('ENter no of tickets');
 document.write('total cost to buy '+tick+' tickets is '+(tick*600));



//q5


  num=+prompt('enter a number');
  document.write('table of '+num+"<br/");
  for(var i=0 ; i<=10 ; i++)
  {  
      document.write(num+'x'+i+'='+num*i+"<br/>")
  }


//q6

 var cel=+prompt('enter temp in celsius')
 var fah=+prompt('enter temp in fahrenheit')
 var tempf=(cel*9/5)+32
 var tempc=(fah-32)*5/9
 document.write(cel+'c is '+tempf+"<br/>")
 document.write(fah+'f is '+tempc)  

//q7

 var item1q=+prompt('quatity of item 1')
 var item2q=+prompt('quatity of item 2')

 var item1=650
 
 var item2=100
 var cost=item1*item1q+item2*item2q+100
 document.write('Price of item 1 is '+item1+"<br/>")
 document.write('quantity of item 1 is '+item1q+"<br/>")

 document.write('Price of item 2 is '+item2+"<br/>")
 document.write('quantity of item 2 is '+item2q+"<br/>")
 document.write('shipping charges are 100'+"<br/>")
 document.write('total cost of your order is'+cost)


//q7


 var obtmarks=+prompt('enter obtained marks')
 var tmarks=+prompt('enter total marks')

 document.write('marks obtained:'+obtmarks+"<br/>")
 document.write('total obtained:'+tmarks+"<br/>")
 document.write('percentage='+(obtmarks/tmarks*100))


//q8


 var dollar=+prompt('enter money in dollars')
 var riyal=+prompt('enter money in riyal')

 document.write('total money in pkr'+dollar*104.80+"<br/>")
 document.write('total money in pkr'+riyal*28)


//q9

 var num=+prompt('enter a num')
 document.write('add 5:'+(num+5)+"<br/>"+'mult by 10:'+(num*10)+"<br/>"+'div by 2:'+(num/2))


