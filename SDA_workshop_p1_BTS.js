
// Input: List of mixed fruits

// Output: three lists; one for apples, one for oranges, and the remaining for unsorted fruit. 

// Algorithm:
// Step 1: Create three lists empty lists; one for apples, another for oranges, and the last one for unsorted fruit.
// Step 2: Create a looping mechanism that will go through the mixed fruits.
// Step 3a: Inside of the loop, if the loop comes across a fruit that is named "apple",
// remove it from the list and insert it into the apples list. 
// Step 3b: if the loop comes across a fruit with the value of a "orange", remove it from the 
// list and put it inside the new orange list.
// Step 3C: If it's anything else, put the item in the unsorted list. 
// Step 4: return the lists of fruits. 

function separateFruits(fruits) {
    let apples = [];
    let oranges = [];
    let unsorted = [];

    for (let i = 0; i < fruits.length; i++) {
        let fruit = fruits[i];

        if (fruit === 'apple') {
            apples.push(fruit);
        } else if (fruit === 'orange') {
            oranges.push(fruit);
        } else {
            unsorted.push(fruit);
        }
    }
    return [apples, oranges, unsorted];
}

let fruits = ["apple", "orange", "apple", "orange", "apple", "orange", "tomato"];
let separatedFruits = separateFruits(fruits);
console.log("Apples: ", separatedFruits[0]);
console.log("Oranges: ", separatedFruits[1]);
console.log("Unsorted: ", separatedFruits[2]);

// The Big-O notation for this program will be O(N) - n being the data we are working with.
// because we only have one list it will only need to run the program once. 