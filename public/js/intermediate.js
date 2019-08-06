/**
 * random generator --> Math.random();
 * produces: 16 decimal place number  form
 * from 0 to 0.9999999999999999
 * never reaches 1
 * 
 */

 var n = Math.random();
 //alert(n); // different 0.n numbers but not above 0


 /**
  * 
  * So how to do it above 0 ?
  * 
  */

  var loveScore = Math.random();
  var y = Math.floor(loveScore*6) +1; // this can be above 0 and without decimals
  //the + 1 is added so it gives us 1 to 6 random numbers like a dice, and not 0 to 5;
  


  /**
   * 
   * Love Calculator program
   * 
   */

  //prompt(" his name: ");
  //prompt("her name: ");
  var love = Math.random()*100;
  var loveScore = Math. floor(love)+1;
  
 

  if(loveScore>=1 && loveScore<=30){  // --_> better way (loveSvore <=30)
    //alert("Love score is " + loveScore + "%, Not really compatiable");

  }else if(loveScore>=31 && loveScore<=70){

    //alert("Love score is "+ loveScore + "%, it can work!");
  }else {

    //alert("Love Score is "+ loveScore+ "%, you guys are perfect!");

  }



  /**
   * 
   * Array exercises: ARRAYS
   * 
   * create a guest list and ask the name of the guest and check is is in the list or not.
   * inlcudes("") --> checkes if its parameter is present in the list or not 
   */

   //var guestList = ["Angela", "Jack", "Areeb", "Azhar"];

  //var newGuest= prompt ("Name please: ");

   if(guestList.includes(newGuest)){

      //console.log("Welcome "+ newGuest);
   }else {

      //console.log("Leave NOW");
   }


   /**
    * 
    * INTERVIEW QUESTION: fizz and buzz
    * 
    * 
    * Task1: create a funtion that adds a sequence of number one by one in an array everytime is called so:
    * [1]--> [1,2]-->[1,2,3] etc... this will help to avoid doing push everyime to ad somthing 
    * USE push(); in the function 
    * 
    * Taks 2: all the divisible of 3 will return fizz
    *   ------ alll the divisible of 5 will return buzz
    *     --------all the divisible of 3 and 5 will return fizzBuzz
    * 
    *  the order of all the if statements are really important 
    * 
    * IMPORTANT TASK: Studyand execises more on the order of if statements --> BOTH IN JAVA AND JS 
    * 
    * second lecture: looping 
    * add while() we will only have to cal the function ones to check "100" values of the arrays
    * look below.    
    */

    var output = [];
    //var count = 1; // -->if you add this the in the array
   function fizzBuzz(){

   while(num<=100){ 
    if(num % 3 === 0 && num % 5===0){
      output.push("fizzBuzz");
    }else if(num % 5===0){
      output.push("buzz");
    }else if (num % 3 === 0){
      output.push("fizz");
    } else{
      output.push(num); // by calling this count will add 1 everytime --->but it needs to be increased to next sequence:
    }
    num++;

  }
      console.log(output);
    
     // increases everytime is called.


   }


  /**
   * use array to compose the 99 bottles of beer song.
   */

   var bottles=[];
    var num = 100;
    
    function  beer(){
      while (num>=0){
        if (num===0){

          bottles.push("No more bottles of beer on the wall, no more bottles of beer.\n"  + 
          "Go to the store and buy some more, 99 bottles of beer of the wall\n");
        } else {
          x = num-1;

        bottles.push( num + " bottles on the wall, "+ num + " bottles of beer.\n" +
        " Take on down and pass it around. " +  x +" beer on the wall.\n" )
        }
        num--;
        
      }
      console.log(bottles);
     
    }

    /**
     * 
     *COMPETITIVE ARRAY CODES,  
     */

  // add a[0]+a[0], a[1]+b[1] etc.. 
  // the one with higher value gets 1 point, if both value are same, no one gets the point 
  // it return an array of points with 2 values --->[1,2] 
function compareTriplets(a, b) {
    var points = [0,0];

    for (var i = 0; i <a.length ; i++) {
        if (a[i] > b[i]) {
            points[0] += 1;
        } else if (a[i] < b[i]) {
            points[1] += 1;

        }
    }
    

    return points;


}


// next task is to add all the diagonal numbers of an 2D array 
// look on the small notebook for explanation 
// this methods is o(n) --> is totally possible to use nested loop for column and rows as normal 
// and add if statement but that would be O(n^2)

function diagonalSum(a) //a is a 2d array [][]
{

  var firstDiagonal = 0; 
  var secondDiagonal = 0;
  
  for(var i = 0; i<a.length;i++){

    firstDiagonal+=a[i][i];
    secondDiagonal+=a[i][a.length-i-1];
  }
   

}




// algorithm to to count the length of all negative, positive and zero elements 
// in an array
// further more its findng its ratio or avarage by dividing it with the total 
//length of the array --> so[1,2,2,0,-1,-5] --> there are 3 positves --> 3/6
/**
 * 
 *  static void plusMinus(int[] arr) {
  double positve = 0.0; double negative=0.0; double zero=0.0;
 
   for(int i = 0; i<arr.length; i++ ){
       if(arr[i]>0){
         positve++;

       }else if (arr[i]<0){

            negative++;
           
       }else if (arr[i]==0){
          zero++;
           
       }
       
   }
    System.out.println(positve/arr.length);
        System.out.println(negative/arr.length);
        System.out.println(zero/arr.length);
           
    

}
**/
/**
 * understand and explain the code or the algorithm 
 * step by step:
 */
/**static int[] reverseArray(int[] a) { 
  for(int i=0; i<a.length/2; i++){
      int temp = a[i];
      a[i]=a[a.length-i-1];
      a[a.length-i-1]=temp;
  }
  return a;


}**/





  
    