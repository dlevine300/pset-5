window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored_rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  const canvas = document.getElementById('student-canvas-1');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    do {
      var input = prompt('Message: ')
      if (input.length > 50) {
        alert('Your message is too long. Keep it under 50 characters')
      }
    } while(input.length > 50)

    ctx.font = '48px sans-serif';
    ctx.strokeText(input, 30, 70, 994);
};

/*
 * Exercise 2.
 */

 const drawRectangle = function() {
   const canvas = document.getElementById('student-canvas-2');
   const ctx1 = canvas.getContext('2d');
   ctx1.clearRect(0, 0, canvas.width, canvas.height);

   do {
     var width = prompt('Width: ')
     var height = prompt('Height: ')
     var x = prompt('X: ')
     var y = prompt('Y: ')
     if ((width == null) || (height == null) || (x == null) || (y == null)){
       break;
     }
     if (width > 1024 || width < 1) {
       alert('Your width must be between 1 and 1024.')
     }
     if (height > 512 || height < 1) {
       alert('Your height must be between 1 and 512.')
     }
     if (x < 1 || x > 1024) {
       alert('Your x-coordinate must be between 1 and 1024.')
     }
     if (y < 1 || y > 512) {
       alert('Your y-coordinate must be between 1 and 512.')
     }
     if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
       alert('One of your values is not a number.')
     }
   } while (width > 1024 || width < 1 || height > 512 || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y))

   ctx1.rect(x, y, width, height);
   ctx1.stroke();
 };
/*
 * Exercise 3.
 */

 const drawColoredRectangle = function() {
   const canvas = document.getElementById('student-canvas-3');
   const ctx2 = canvas.getContext('2d');
   ctx2.clearRect(0, 0, canvas.width, canvas.height);

   do {
     var input_color = (prompt("Color: "))
     if (input_color == null) {
       break;
     }
     color = String(input_color)
     var input_color = input_color.toLowerCase()
     if (color != "red" && color != "orange" && color != "yellow" && color != "green" && color != "blue" && color != "purple" && color != "black") {
       alert(color + " is not a supported color.")
     }
   } while (color != "red" && color != "orange" && color != "yellow" && color != "green" && color != "blue" && color != "purple" && color != "black")

   if (input_color != null) {
     ctx2.fillStyle = color;
     ctx2.fillRect(10, 10, 100, 50);
   }
 };

/*
 * Exercise 4.
 */

 const drawTriangle = function() {
   
}


/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
