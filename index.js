const branches = [
  {name: "air force", saying: "hua", dates: 1999, end: 2000},
  {name: "army", saying: "hooah", dates: 1700, end: 2664},
  {name: "marine corps", saying: "oorah", dates: 1775, end: 1761},
  {name: "navy", saying: "hooyah", dates: 1324, end: 2345},
];

const ages = [12, 43, 64, 1, 34, 76, 99, 0, 234, 4564, 4, 23, 12, 39, 16];

/**************FILTER METHOD (SOME FOR LOOPS AND FOR EACH) *****************/
//dates between 1700 and 1799 filter method
//const get70sFilter = branches.filter(branch => (branch.dates >= 1700 && branch.dates <= 1799))

//branches that lasted over 10 years es5
// const tenYearsFilter = branches.filter(function(tenyrs){
//   if((tenyrs.end - tenyrs.dates > 10)){
//     console.log(tenyrs);
//   }
// })

//branches that lasted over 10 years filter method
//const tenYearsFilter = branches.filter(tenyrs => (tenyrs.end - tenyrs.dates> 10))
//console.log(tenYearsFilter)

//console.log(get70sFilter)

//iterating through branches array with for loop
// // for(let i = 0; i < branches.length; i++){
// //   console.log(branches[i])
// // }

// //forEach, synchronous

// // branches.forEach(function(branches) {
// //   console.log(branches)
// // })

// //filter
// let drinkingAge = 21;
// ages.filter(function(age){
//   if(age > drinkingAge){
//     console.log(age)
//   }
// })

// const canIDrink = ages.filter(age => age >= drinkingAge)
// console.log(canIDrink)

//ages over || == 21 with for loop
// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//   if(ages[i] >= drinkingAge){
//     canDrink.push(ages[i])
//   }
// }

// console.log(canDrink)

/***************MAP METHOD ************************/


//create array of branches (creates a new array)
// const branchesArray = branches.map(function(branch){
//   return branch.name
// })

// console.log(branchesArray)

//square each number in age array
// const squaredNum = ages.map(function(age) {
//   return age*age
// })

//arrow function of above syntax
// const squaredNum = ages.map(age => age*age)

// console.log(squaredNum)

// //sorts ages big to small
// const sortedAgesSmallToBig = ages.sort((a,b) => a-b);
// console.log(sortedAgesSmallToBig)

// const sortedAgesBigtoSmall = ages.sort((a,b) => b-a);
// console.log(sortedAgesBigtoSmall)

/*************************REDUCE METHOD **************************/

//for loop to add all elements of age array together
// let sumOfAges = 0;
// for(let i = 0; i < ages.length; i++){
//   sumOfAges += ages[i]
// }
// console.log(sumOfAges);

//same as above with reduce method
// const agedSumm = ages.reduce(function(total, age) {
//   return total + age;
// }, 0)

//arrow function with reduce method
const agedSumm = ages.reduce((total, age) => total + age);
console.log(agedSumm)