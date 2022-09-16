console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function PrintOdds(count){
    for(let i = 0; i <= count; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}
PrintOdds(220);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let aboveSixteen = "You can drive"; 
let belowSixteen = "You need to wait a bit longer";
function CheckAge(age){
    if (age >= 16){
        console.log(aboveSixteen);
    }
    else {
        console.log(belowSixteen);
    }
}
CheckAge(18);

console.log("Exercise 3\n===============\n")
function Quadrant(x, y){
    
        if(x > 0 && y > 0){
             console.log("you are in quad 1");
        }           
        else if(x < 0 && y > 0){            
            console.log("you are in quad 2");
        }
        else if(x < 0 && y < 0){           
            console.log("you are in quad 3")
        }
        else if(x > 0 && y < 0){            
            console.log("you are in quad 4");
        }
        else if( x == 0 && y > 0  ){        
            console.log("You are 0 horizontally and between quad 1 and 2");
        }
        else if(x == 0 && y < 0) {         
            console.log("You are 0 horizontally and between quad 3 and 4");
        }
        else if(x < 0 && y == 0){           
            console.log("You are 0 vertically and bewtween quad 2 and 3");
        }
        else if(x > 0 && y == 0){            
            console.log("You are 0 vertically and bewtween quad 1 and 4");
        }
        else{
            console.log("i assume both are zero and you are in the center")
        }
        //var xAxis = prompt("Enter your position on x");
        //var yAxis = prompt("Enter your position on y");
    }
Quadrant(15, 6);
// Exercicse 4
console.log("=====Exercise 4=====")
function Triangle(side1, side2, side3){
    if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1){
        console.log("This is not a valid triangle")
    }
    else if (side1 == side2 && side2 == side3 && side1 == side3){
        console.log("This is an equilateral");
    }
    else if(side1 == side2 || side2 == side3 || side1 == side3){
        console.log("This is an isosceles");
    }
    else{
        console.log("This is a scalene")
    }
}
Triangle(19,14,6)
// Exercise 5
console.log("=====Exercise 5=======")
function CellPhonePlan(planLimit, day, usage){
    var planUsage = usage / planLimit;
    var daily = planLimit / 30;
    var used = daily * day;
    if(usage > used){
        console.log("You have exceeded daily use");
    }
    else if(usage < used){
        console.log("You have a surplus of data");
    }
    else if(usage == used){
        console.log("You are on track");
    }
    console.log(`You are on the ${day} day out of 30.\n 
     Your average daily use is ${usage / day}. \n 
     you have ${planLimit - usage }% left \n
     you have used ${planUsage}% of your data. `)
}
CellPhonePlan(100, 15 ,56);