// Chapter - (21-25)


// // 1. Write a program that takes two user inputs for first and last name using prompt and merge 
// // them in a new variable titled fullName. Greet the user using his full name.
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// document.write("Good morning " + fullName + "<br>");


// // 2. Write a program to take a user input about his favorite mobile phone model. Find and 
// // display the length of user input in your browser
// var mobileModel = prompt("Enter your favourite mobile model");
// var mobileLength = mobileModel.length;
// document.write("My favourite phone is: " + mobileModel + " Length of String: " + mobileLength);


// // 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the 
// // result in your browser.
// var word = "Pakistani";
// var findN = word.indexOf("n");
// document.write("String: Pakistani <br>");
// document.write("Index of 'n': " + findN <br>");


// // 4. Write a program to find the last index of letter “l” in the word “Hello World” and display
// //  the result in your browser.
// var word = "Hello World";
// var lastL = word.lastIndexOf("l");
// document.write("String: Hello World <br>");
// document.write("Last index of 'l': " + lastL + "<br>");


// // 5. Write a program to find the character at 3rd index in the word “Pakistani” and display
// //  the result in your browser.
// var country = "Pakistani";
// var thirdChar = country.charAt(3);
// document.write("String Pakistani" + "<br>");
// document.write("Character at index 3: " + thirdChar + "<br>");


// // 6. Repeat Q1 using string concat() method.
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(lastName);
// document.write("Good morning " + fullName + "<br>");


// // // 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display 
// // // the result in your browser.
// var word = "Hyderabad";
// var search = word.indexOf("bad");
// if (search !== -1) {
//     newWord = "Islam" + word.slice(search -1);
// }
// document.write("City: " + word + "<br>");
// document.write("Afrer replacement: " + newWord + "<br>");


// // 8. Write a program to replace all occurrences of “and” in the string with “&” and display the 
// // result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message = message.replace(/and/g, "&");
// document.write(message);


// 9. Write a program that converts a string “472” to a number 472. Display the values & types
//    in your browser. (missing)