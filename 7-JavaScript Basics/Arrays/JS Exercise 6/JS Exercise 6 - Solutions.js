// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift(); // CORRECT

// 2. Sort the array in order.
array.sort(); // CORRECT

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi"); // CORRECT

// 4. Remove "Apples" from the array.
array.splice(0, 1); // CORRECT

// 5. Sort the array in reverse order.
array.reverse(); // CORRECT

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0]; // CORRECT, took a while though, kept forgetting about apples
