///----------Number from 0 to 100
let n=0
while (n<100) {
    n++;
    console.log(n)
    
}

//---------------------numbers divisible by 3
let x=0
while (x<100) {

    if (x%3=== 0) {
      
        console.log( x,'FIZZ');
    }
    x++;
    
}
//---------------------numbers divisible by 5

let y=0

while (y<100) {

    if (y%5=== 0) {
      
        console.log( y,'Buzz');
    }
    y++;
    
}

//---------------------numbers divisible by 3 and 5
let z=0
let k=0
while (z<100 , k<100) {

    if (z%3=== 0 && k%5=== 0) {
      
        console.log( z,k,'Fizz','Buzz');
    }
    z++;
    k++;
}

//---------------------numbers not divisible by 3 or 5

let i=0 

while (i<100 ) {

    if (i%3!= 0 && i%5!= 0) {
      
        console.log(i);
    }
    i++;
}