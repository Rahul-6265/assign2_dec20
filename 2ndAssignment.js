// Write a program to have 3 variables (all three are number) and output the highest/greatest/maximum of all three.

var num1=100;
var num2=105;
var num3=110;
if(num1>num2){
    if(num1>num3){
    console.log(num1, "is highest number")
    }
    else{
        console.log(num3, "is highest number")
    }
}
    else{
        if(num2>num3){
            console.log(num2, "is highest number")
        }
        else{
            console.log(num3, "is highest number")
        }
    }
    
