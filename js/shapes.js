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
    document.getElementById("Rectangle").onclick = drawRectangle;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  const canvas = document.getElementById('student-canvas-1');
    const canvas_ctx = canvas.getContext('2d');
    canvas_ctx.clearRect(0, 0, canvas.width, canvas.height);


    do {
      var input = prompt('Message: ')
      if (input.length > 50) {
        alert('Your message is too long. Keep it under 50 characters')
      }
    } while(input.length > 50)

    canvas_ctx.font = '48px sans-serif';
    canvas_ctx.strokeText(input, 30, 70, 994);
};

/*
 * Exercise 2.
 */

 const drawRectangle = function() {
   const canvas = document.getElementById('student-canvas-2');
     const canvas_ctx1 = canvas.getContext('2d');
     canvas_ctx1.clearRect(0, 0, canvas.width, canvas.height)

     do {
       //figure out how end process if user clicks cancel
       var input_Width = prompt('Width: ')
       var input_Height = prompt('Height: ')
       var input_X = prompt('X: ')
       var input_Y = prompt('Y: ')
     } while (input_X.length < 1 || input_Y.length < 1 || input_Width.length < 1 || input_Height.length < 1);

     canvas_ctx1.strokeRect(input_X, input_Y, input_Width, input_Height);
   };
/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    // write your exercise 3 code here
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

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
