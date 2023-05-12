/* 
 * drawTriangle prints a triangle of * with a height of 'triangleSize'
 *
 * @param {number} triangleSize - the height of the triangle to be printed
 */
function drawTriangle(triangleSize) {
   // Outer loop defines the height of the triangle
   for (let i = 0; i < triangleSize; i++) {
     let printStr = "";
     // Inner loop prints the asterisks for each row of the triangle
     for (let j = 0; j <= i; j++) {
       printStr += "*";
     }
     // Prints the current row of the triangle
     console.log(printStr);
   }
 }
 