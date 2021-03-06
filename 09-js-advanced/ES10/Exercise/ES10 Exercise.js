// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const array2 = array.flat(Infinity - 1).flatMap((num) => num); // Worked, didnt need to map it though :D

// Solution
console.log(array.flat(2));

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [
	["Hello", "young", "grasshopper!"],
	["you", "are"],
	["learning", "fast!"],
];

const greeting2 = greeting.flatMap((str) => str); // Didnt work

// Other solution
console.log(greeting.flatMap((x) => x.join(" ")));

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

const greeting3 = Object.entries(greeting);
greeting.flatMap((str) => str.join(" ")).join(" "); // Works

// Other solution
console.log(greeting.flatMap((x) => x.join(" ")).join(" "));

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

const trapped2 = trapped.flat(Infinity - 1); //Works, when I tried infinity only earlier didnt work? Why I use - 1

//Other solution
console.log(trapped.flat(Infinity));

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = "     cannotfillemailformcorrectly@gmail.com   ";
const userEmail4 = String(userEmail3.trim());
// Works, to be fair though mine removes all empty spaces so maybe using trimend and trimstart smarter

// Other Solution
console.log(userEmail3.trimEnd().trimStart());

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };
const users2 = Object.entries(users); // Perfect :D

//Other solution
const usersArray = Object.entries(users);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const users3 = users.map(user); // Not even close

// Other solution
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2]);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

// Solution
const updatedUsers = Object.fromEntries(updatedUsersArray);
console.log(updatedUsers);

//Ya, need to remember Object.entries turns object into array and Object.fromEntries turns array into object
