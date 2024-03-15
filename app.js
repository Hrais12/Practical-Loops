///----------Number from 0 to 100
let a=0
while (a<100) {
    a++;
    console.log(a)
    
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

///////////////////////////////////PART 2


// let n=2
// while (n<100) {
    
//     for (let h = 2; h < n; h++) {
//     if (n%h===0) {

//         continue
//     } else {
//         console.log('prime', n)
        
//     }
//     n++;
//     }
    
// }

let n = 8; // Arbitrary number

while (true) {
    n++;
    let isPrime = true;

    for (let i = 2; i*i <= n ; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("The next prime number after", n - 1, "is", n);
        break;
    }
}

