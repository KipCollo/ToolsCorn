let lname: string ='Collins';

let nums: Array<number> = [1, 2, 3];

let result = nums
   .map(num => num * 2)
   .filter(num => num > 2)
   .forEach(num => console.log(num));
