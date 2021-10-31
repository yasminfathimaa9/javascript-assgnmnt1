// function for calulating percentage of total marks

function percentage(maths,english,science,social,hindi){
 

    var totalmarks = maths + english + science + social + hindi;
    var y= totalmarks/500 * 100;
    return y;
}
var result=percentage(80, 80 , 70 , 60 , 80);
console.log(result);


// function to print even or odd number

function evenorOdd(num){
    if(num%2==0) {
        return "Even number";
    }
    else
    {
      return "Odd number";

    }
}
var reslt = evenorOdd(6);
console.log(reslt);


// function for reverse a string
function reverseString(str)
{
    return str.split("").reverse().join("");
    
            
}
var res=reverseString("college");
console.log(res);