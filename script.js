// 1.write a javascript function to check whether an input is string or not

// function checkifstring(givendata){
    
//     if(typeof givendata === "string"){
//         console.log("is a string")
//     }
//     else{
//         console.log("is not a string, it is a "+ typeof givendata)
//     }
// }
// checkifstring("arthik")
// checkifstring(456)
// checkifstring([4,6,8,9])

//2.write a javascript function to check whether a string is blank or not
// function is_blank(str){
//     if(str==""){
//         return true
//     }
//     else{
//         return false
//     }
    
// }
// console.log(is_blank("hiigh"))
// console.log(is_blank(""))
// console.log(is_blank(123))


//3.write a javascript function to split a string and covert into arrray
// var givendata=prompt("enter a data: ")
// function strtoarrray(str){
//     return str.trim().split(" ")
// }
// console.log(strtoarrray(givendata))


//4. write a javascript function  to extract a specified number a character in astring

// function extract_str(str,n){

//    if(typeof str=="string"){
//     return str.slice(0,n)
//    }
//    else{
//     console.log("it is a "+typeof str)
//    }
// }
// console.log(extract_str("arthik",4))
// console.log(extract_str(87,4))

//5.Write a javascript function that hide email address to prevent unauthorized acces
// var emailid="arthiksk64@gmail.com"
// function hide_email(email){
//     var avg,splitted,part1,part2;
//     splitted=email.split("@")
//     //console.log(splitted)
//     part1=splitted[0];
//     //console.log(part1)
//     avg=part1.length/2
//     //console.log(avg)
//     part1=part1.substring(0,(part1.length-avg))
//     //console.log(part1)
//     part2=splitted[1]
//     return part1+"...@"+part2

// }
// console.log(hide_email(emailid))

//6. write a Javascript function to convert a string to abbrevate form
// var myname="gopalya samy"
// function abbrevateform(str){
//     let splited =str.split(" ");
//     let part1=splited[0]
//     let part2=splited[1];
//     return part1+" "+part2.charAt(0)


// }
// console.log(abbrevateform(myname))


//7.write a javascript junction to parameterize a string
// function parameterize(str){
//     let splitted=str.split(" ")
//     return splitted.join("-")

// }
// console.log(parameterize("Arthik from tenkasi"))

//8.write a javascript function that takes string with both upper and lowercase and convert upper tolower,lower to upper
// function convert_case(str){
//     return str.replace(/([a-z]+)|([A-Z]+)/g,function(match,char){
//         return char?match.toUpperCase():match.toLowerCase();
//     })
    
// }
// console.log(convert_case("aRThiK"))
//9.write a javascript function to concatenate a given string in n times

// function concat_str(str,count){
//     return count<1?"undefined":new Array(count+1).join(str)
    
// }
// console.log(concat_str("arthik",3))

//10. write a javascript function to insert a string within a string at a particular postion    

// function insert_str(str1,str2,count){
//     if(count=="undefined"){
//         return str2.concat(str1)

//     }
//     else if(count>=0){
//         return str1.slice(0,count)+str2+str1.slice(count);

//     }
    
// }
// console.log(insert_str(" is a frontend developer","arthik",6))

// //11. write a javascript than can pad left or right a string to get to a determined length
// const paddata=(n1,n2,str)=>{
//     if(typeof n2==="undefined"){
//         return n1
//     }
//     if(str=='l'){
//         return (n1+n2).slice(-n1.length)
//     }
//     else{
//         return (n2+n1).substring(0,n1.length)
//     }

// }
// console.log(paddata('0000',123,'l'))
// console.log(paddata('0000000',123,''))

//12. write a javascript function repeat string multiple time

// function repeat_str(str,count){
//     return count<1?"undefined":new Array(count+1).join(str)
    
// }
// console.log(repeat_str("b",3))

//13.write a javascript function to truncate a string to a certain number of word

// function truncate(str,n){
//   return str.split(" ").slice(0,n).join(" ")
// }
// console.log(truncate("Arthik is a frontend developer create a website",4))

//14.check if a given string is palindrome or not

// function ispalandrome(str){
//     var check=str.split("").reverse().join("")
//     if(str===check){
//         console.log("it is palandrome")
//     }
//     else{
//         console.log("it is not palandrome")
//     }
    

// }
// console.log(ispalandrome("mam"))

//15.find the largest number in array

// let arr=[56,32,8,8]
// function findlargestarr(array){
//     return Math.max(...array)
    
// }
   
// console.log(findlargestarr(arr))

//16.count vowels in a string

// function countvowel(str){
//     return str.match(/[aeiou]/gi)?.length||0

// }
// console.log(countvowel("Arthiik"))

//17.write a javascript program to find first not repeating character in a string
// function nontrepeatstr(str){
//     for(let char of str){
        
//         if(str.indexOf(char)===str.lastIndexOf(char)){
//             return char;
            
//         }
//     }
//     return null;

// }
// console.log(nontrepeatstr("arthik"))
// console.log(nontrepeatstr("aarr"))

//18. Write a JavaScript function called findSecondLargest that takes an array of numbers as input and returns the second largest number in the array. If the array has fewer than two unique numbers, return null.
// function secondLargestNum(arr) {
//     let uniqueNums = [...new Set(arr)]; 
//     uniqueNums.sort((a, b) => b - a);

//     return uniqueNums.length > 1 ? uniqueNums[1] : null; 
// }

// console.log(secondLargestNum([2, 4, 12, 43, 23, 7, 8, 94, 2, 4])); 
// console.log(secondLargestNum([5, 5, 5])); 
// console.log(secondLargestNum([10])); 
// console.log(secondLargestNum([10, 10, 20, 30])); 

//19.Write a JavaScript function called isAnagram that takes two strings as input and returns true if they are anagrams of each other, otherwise returns false.

// function isAnagram(str1,str2){
//     let string1=str1.toLowerCase()
//     let string2=str2.toLowerCase()
//     let sort1=string1.split("").sort().join("")
//     let sort2=string2.split("").sort().join("")
//     if(sort1===sort2){
//         return true
//     }
//     else{
//         return false
//     }
// }


// console.log(isAnagram("Listen", "silent")); 
// console.log(isAnagram("hello", "world")); 
// console.log(isAnagram("evil", "vile")); 
// console.log(isAnagram("aabb", "bbaa")); 
// console.log(isAnagram("test", "ttew")); 

//20.Write a JavaScript function called fibonacci that takes a number n as input and returns the first n numbers in the Fibonacci sequence as an array.
// function fibonacci(n){
//     if(n==0){
//         return []
//     }
//     else if(n==1){
//         return [0]
//     }
//     let fib=[0,1]
//     for(i=2;i<n;i++){
//         fib.push(fib[i-1]+fib[i-2])
//     }
//     return fib;

// }
// console.log(fibonacci(0))
// console.log(fibonacci(4))
// console.log(fibonacci(8))
// console.log(fibonacci(1))
//21.Largest consecutive number in the array
// function consecutivenum(arr){
//     let sorting=arr.sort()
//     console.log(sorting)

// }
// console.log(consecutivenum([1,5,3,2,56,43,4]))


console.log("hi")