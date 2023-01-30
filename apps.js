


// დაწერე კოდი და იპოვე ყველაზე მაღალი რიცხვი

let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];  
let largest = arr[0];
for(let i=0;i<arr.length;i++){
   largest = arr[i]>largest ? arr[i]:largest;
}
console.log(largest) 





// მოცემულია რიცხვები და გაამრავლე ერთმანეთზე
let arr1 = [3,45,23,78,34];
let arr2 = [4,2,34,4,12,1];

function findProd(arr1, arr2) {
  let arrProd = arr1.length>arr2.length ? arr1 : arr2;
  for(let i=0; i < Math.min(arr1.length, arr2.length); i++){
     arrProd[i] = arr1[i] * arr2[i]; 
  }
  return arrProd;
}

console.log(findProd(arr1,arr2))




const animals = ["bear","wolf","tiger","lion"]



if (animals.includes("wolf")) {
    console.log("wolves found")
} else {
    console.log("no wolves found")
}

//თუ მასივში იქნება მგელი დამიკონსოლოგე მგელი