function name(){
    console.log("Hello world");
};
name();
function name2(firstname, lastname){
    console.log("The firstname is " +firstname+ "  your lastname is "+lastname);
};
name2("abebe", "kebede");
//function areadR(w,h){
  //  var area=w*h;
    //return area;
    //console.log("The area is "+ area);
//};
//areadR(4,12);

//function volume(l){

 //   var area=areadR(4,12);
 //   var vol= area*l;
//    console.log(vol);
//};
//volume(20);
//function arrayy(arr1,arr2){
 //   arr1.sort();
// arr2.sort();
 //   if(arr1[0]>arr2[0] && arr1[arr1.length-1]<arr2[arr2.length-1]){
 //       return true;

 //   }
 //   else{
 //       return false;
 //   }
//}
//arrayy([2,3],[3,5]);


// function grade(g){
//     var n=3;
//     //var bo=0;
//     if(g<18){
//         console.log("grade should be greater than18");
//     }
//     else{
//         if(g>18 && g%5==0){
//             console.log(g);
//         }
//         else if(g>18 && g%5>=n){
//             console.log(g);
//         }
//         else if(g>18 && g%5<=n){
//             console.log(g+g%5);
//         }
//         else{
//             console.log("Please enter the grade");
//         }
//     }
// }
// grade(72);
// function sortt(a){
//    let num=a;
//    checker=true;
//    while(checker){
//     checker=false;
//    for(let i=0; i<num.length-1; i++){
//     if(num[i]>num[i+1]){
//         checker=true;
//         let temp=num[i];
//         num[i]=num[i+1];
//         num[i+1]=temp;
//     }
//    }
// }
// return num;
// }
// let ars=sortt([1,5,3,4,2]);
// console.log(ars);


// var aa=document.getElementById("blue");
// console.log(aa);
// aa.blue="white";
// var a = document.querySelector("#gray")
// console.log(a)
// var am = document.querySelector(".green")
// console.log(am)
// am.className="gren"
// am.nodeValue="yellow"

// var ab=document.getElementsByClassName("green")
// console.log(ab)
// ab[0].values="blue";


//challenges count the number of true in the given array
// function arrayCount(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === true) {
//             result.push(arr[i]);
//         }

//     }
//     return result.length;
//    }

//    console.log(arrayCount([true, false,true, true]))

// // using for loop
// function arrayCount(arr) {
//     let count = 0;
//     for(let element of arr) if(element===true) count++;
//     return count;
// }

// console.log(arrayCount([false,false,true,false,true]))


//RegEx Exercise an empty string
// let str1="Mery had a little lamb";
// alert(/^Mery/.test(str1));
// alert(/lamb&/.test(str1));


/*
Tile Teamwork Tactics
In a board game, a piece may advance 1-6 tiles forward
depending on the number rolled on a six-sided dice.
If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Given you and your friend's tile number, create a
function that returns if it's possible to earn a bonus
when you roll the dice.

Examples
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false
Notes
You cannot move backward (which is why example #3 doesn't work).
If you are already on the same tile, return false,
as you would be advancing away.
Expect only positive integer inputs.
*/

// const possible = (a, b) => {
//     let x = a;
//     let y = b;
//     for (let i = 1; i <= 6; i++) {
//       x += 1;
//       if (x === y) {
//         return true;
//       }
//     }
//     return false;
//   };

//   console.log(possible(3, 7));
//   console.log(possible(1, 9));



/*
Left Shift by Powers of Two
The left shift operation is similar to multiplication by powers
of two.

Sample calculation using the left shift operator (<<):

10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20
Write a function that mimics (without the use of <<) the left
shift operator and returns the result from the two given integers.

Examples
shiftToLeft(5, 2) ➞ 20

shiftToLeft(10, 3) ➞ 80

shiftToLeft(-32, 2) ➞ -128

shiftToLeft(-6, 5) ➞ -192

shiftToLeft(12, 4) ➞ 192

shiftToLeft(46, 6) ➞ 2944
*/

// const shiftToLeft = (a, b) => {
//     let x;
//     x = a * Math.pow(2, b);
//     return x;
//   };
//   console.log(shiftToLeft(5, 2));
//   console.log(shiftToLeft(10, 3));
//   console.log(shiftToLeft(-32, 2));
//   console.log(shiftToLeft(-6, 5));
//   console.log(shiftToLeft(12, 4));
//   console.log(shiftToLeft(46, 6));


//   function getlength(number) {
//     return number.toString().length;
// }
// var a=getlength(124536)
// console.log(a)
 //or
//  n = 1;
// if ( i >= 100000000 ) { n += 8; i /= 100000000; }
// if ( i >= 10000     ) { n += 4; i /= 10000; }
// if ( i >= 100       ) { n += 2; i /= 100; }
// if ( i >= 10        ) { n += 1; }

function numDigits(x) {
    return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
  }
 var s= numDigits(56874189)
 console.log(s)






