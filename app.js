//Chapter Array
//Question#1
// var ayan =[]

//Queation#2
// var ayan =[
//     {}
// ]

//Question#3
// var ayan =["Ayan"]

// Queation#4
// var ayan =[1]

//Question#5
// var ayan =[true,false]

//Question#6
// var ayan =["Ayan" , 1 , false , true ]

//Question#7
// var education = ["SSC", "HSC" , "BSC" , "BS" , "BCOM" , "MS" , "M.Phil." , "PhD"]
// document.write("<h1>Qualification</h1></br>");
// document.write("1)."+education[0]+"<br>")
// document.write("2)."+education[1]+"<br>")
// document.write("3)."+education[2]+"<br>")
// document.write("4)."+education[3]+"<br>")
// document.write("5)."+education[4]+"<br>")
// document.write("6)."+education[5]+"<br>")
// document.write("7)."+education[6]+"<br>")
// document.write("8)."+education[7]+"<br>")

//Question#8
// var studentName =["Michael" , "John" , "Tony"]
// var studentMarks =[320 , 230 , 480]
// var totalMark = 500;

// var michael = (studentMarks[0]/totalMark)*100
// var john = (studentMarks[1]/totalMark)*100
// var tony = (studentMarks[2]/totalMark)*100

// document.write("Score Of" + " " +studentName[0]+ " " + "is" + " " + studentMarks[0]+ " " + "Percentage:" +michael+"%" +"</br>");
// document.write("Score Of" + " " +studentName[1]+ " " + "is" + " " + studentMarks[1]+ " " + "Percentage:" +john+"%" +"</br>");
// document.write("Score Of" + " " +studentName[2]+ " " + "is" + " " + studentMarks[2]+ " " + "Percentage:" +tony+"%" +"</br>");

//Question#9
//part A
// var colorName = ["Red", "Green"]
// document.write(colorName +"</br>")
// var a = prompt("Enter Color Name")
// colorName.unshift(a)
// document.write(colorName)

//Part B
// var colorName = ["Red", "Green"]
// document.write(colorName +"</br>")
// var a = prompt("Enter Color Name")
// colorName.push(a)
// document.write(colorName +"</br>")

//Part C
// var colorName = ["Red", "Green"]
// document.write(colorName +"</br>")
// var a = prompt("Enter Color Name")
// var b = prompt("ENter Another Color Name")
// colorName.unshift(a,b)
// document.write(colorName +"</br>")

// //Part D
// colorName.shift()
// document.write(colorName +"</br>")

//PArt E
// colorName.pop()
// document.write(colorName +"</br>")

// //Part F
// var indexNum = +prompt("Enetr Index Num")
// var clole =prompt("Enter Color Name")
// colorName[indexNum] = clole
// console.log(colorName)

//Question#11
// var citeis = ["Karachi" , "Lahor" , "Islamabad" , "Quetta" ,"Peshawar"]
// var selectedCities = citeis.splice(0,3)
// document.write(selectedCities)

//Question#12
// var arr = ["This"," is"," my"," cat"];
// document.write(arr.join([]))

//Question#13
// var devices = ["Keyboard","Mouse","Printer"]
// document.write("Device:<br>" + devices +"<br>")
// for(var i=0; i<devices.length;i++){
//         document.write("Out:<br>"+devices[i]+"<br>")
// }

//Question#14
// var devices = ["Keyboard","Mouse","Printer"]
// document.write("Device:<br>" + devices +"<br>")
// for(var i=devices.length-1; i>=0 ;i--){
//         document.write("Out:<br>"+devices[i]+"<br>")
// }

//                 Chapter#17-20
//Question#1
// var arr =[[]]

//Question#2
// var arr =[[0 , 1 , 2 , 3],[1 , 0 , 1 , 2],[2 , 1 , 0 , 1]]
// document.write(arr[0]+"<br>")
// document.write(arr[1]+"<br>")
// document.write(arr[2]+"<br>")

//Question#3
// for(var i=1;i<=10;i++){
//     document.write(i+"<br>")
// }

//Question#4
// var tablenNum = +prompt("Enter Table Number")
// var tableLength = +prompt("Enter Table Length")
// for(var i=1;i<=tableLength;i++){
//     document.write(tablenNum+"x"+i+"="+tablenNum*i+"<br>")
// }

//Question#5
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for(var i = 0; i<fruits.length;i++){
// document.write(fruits[i]+"<br>")
// }
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " " + fruits[i], "<br >")
// } 

//Question#6
//Part A
// for(var i =1;i<=10;i++){
//     document.write(i+",")
// }

//Part B
// for(var i =10;i>=1;i--){
//     document.write(i+",")
// }

//Part C
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

//Part D
// for (var i = 0; i <= 20; i++) {
//         if (i % 2 !== 0) {
//             console.log(i)
//         }
//     }

// Part E
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//     document.write(i+"k")
//     }
// }

//Question#7

// var bakeryItem = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userInput = prompt("Welcome to ABC bakery.What do you want to order")
// console.log(userInput, "userInput")

// var isMatch = false

// for (var i = 0; i < bakeryItem.length; i++) {
//     if (bakeryItem[i] === userInput) {
//         isMatch = true
//         document.write(userInput + " " + "is avaiable at index " + i + " in our bakery <br />")
//         break;
//     }
// }

// if (isMatch === false) {
//     document.write("We are sorry")
// }

// Question#8
// var num = [24, 53, 78, 91, 12]
// var temp = 0


// for (var i = 0; i < num.length; i++) {
//     if (temp < num[i]) {
//         temp = num[i]
//     }
// }

// document.write("largest value of num array is ", temp)

// Question#9
// var num = [24, 53, 78, 91, 12]
// var temp = num[0]

// for (var i = 0; i < num.length; i++) {
//     if (temp > num[i]) {
//         temp = num[i]
//     }
// }

// document.write("smallest value of num array is ", temp)

//Question#10
// for(var i=5; i<=10; i+2){
//     document.write(i+"<br>")
// }