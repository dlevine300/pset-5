window.onload = function () {
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

const sayHello = function () {
	const canvas = document.getElementById('student-canvas-1');
	const ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);


	do {
		var input = prompt('Message: ')
		if (input.length > 50) {
			alert('Your message is too long. Keep it under 50 characters')
		}
	} while (input.length > 50)

	ctx.font = '48px sans-serif';
	ctx.strokeText(input, 30, 70, 994);
};

/*
 * Exercise 2.
 */

const drawRectangle = function () {
	const canvas = document.getElementById('student-canvas-2');
	const ctx1 = canvas.getContext('2d');
	ctx1.clearRect(0, 0, canvas.width, canvas.height);

	do {
		var width = prompt('Width: ')
		var height = prompt('Height: ')
		var x = prompt('X: ')
		var y = prompt('Y: ')
		if (width == null || height == null || x == null || y == null) {
			break;
		}
		if (!(width == null) && !(height == null) && !(x == null) && !(y == null)) {
			ctx1.beginPath();
			ctx1.rect(x, y, width, height);
			ctx1.closePath();
			ctx1.stroke();
		}
		if (width > 1024 || width < 1) {
			alert("Your width must be between 1 and 1024.")
		} else if (height > 512 || height < 1) {
			alert("Your height must be between 1 and 512.")
		} else if (x < 1 || x > 1024) {
			alert("Your x-coordinate must be between 1 and 1024.")
		} else if (y < 1 || y > 512) {
			alert("Your y-coordinate must be between 1 and 512.")
		} else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
			alert("One of your values is not a number.")
		} else if (Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512) {
			alert("Your rectangle won't fit on the canvas.")
		}
	} while (width > 1024 || width < 1 || height > 512 || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y))
};
/*
 * Exercise 3.
 */

const drawColoredRectangle = function () {
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

const drawTriangle = function () {
	const canvas = document.getElementById('student-canvas-4');
	const ctx3 = canvas.getContext('2d');
	ctx3.clearRect(0, 0, canvas.width, canvas.height);

	do {
		var side1 = (prompt('Side 1: '))
		var side2 = (prompt('Side 2: '))
		var side3 = (prompt('Side 3: '))
		var triangleHeight = Math.min(side1, side2, side3)
		var triangleHypotenuse = Math.max(side1, side2, side3)
		var triangleBase = Math.sqrt(triangleHypotenuse * triangleHypotenuse - triangleHeight * triangleHeight)

		if (triangleBase <= 1 && triangleBase <= 1 && triangleHypotenuse <= 1) {
			break;
		}
		side1 = Number(side1)
		side2 = Number(side2)
		side3 = Number(side3)
		if (triangleBase * triangleBase + triangleHeight * triangleHeight != triangleHypotenuse * triangleHypotenuse || triangleBase == 0 || triangleHeight == 0 || triangleHypotenuse == 0 || side1 + side2 + side3 - triangleHypotenuse - triangleHeight != triangleBase) {
			alert("That's not a valid right triangle")
			if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
				alert("One of your sides is not a number.")
			}
			if ((triangleBase > 1024) || (triangleHeight > 512) || (triangleHypotenuse > 524288)) {
				alert("Your triangle won't fit on the canvas.")
			}
		}
	} while ((Math.floor(triangleBase) * Math.floor(triangleBase) + triangleHeight * triangleHeight != triangleHypotenuse * triangleHypotenuse));
	if ((triangleBase * triangleBase + triangleHeight * triangleHeight == triangleHypotenuse * triangleHypotenuse) && (triangleBase < 1024 && triangleHeight < 512 && triangleHypotenuse < 1145) && (triangleBase != 0 && triangleHeight != 0 && triangleHypotenuse != 0) && (triangleBase != null && triangleHeight != null && triangleHypotenuse != null)) {
		triangleHeight = triangleHeight + 25
		triangleBase = triangleBase + 25
		ctx3.beginPath();
		ctx3.moveTo(25, 25);
		ctx3.lineTo(25, triangleHeight);
		ctx3.lineTo(triangleBase, triangleHeight)
		ctx3.lineTo(25, 25)
		ctx3.stroke();
	}
};


/*
 * Exercise 5.
 */

const drawFace = function () {
	const canvas = document.getElementById('student-canvas-5');
	const ctx4 = canvas.getContext('2d');
	ctx4.clearRect(0, 0, canvas.width, canvas.height);

	do {
		var radius = (prompt("Radius: "))
		if (radius == null) {
			break;
		}
		if (radius < 32) {
			alert('Your radius must be at least 32.')
		}
		if (radius > 256) {
			alert("Your smiley face won't fit on the canvas.")
		}
		if (isNaN(radius)) {
			alert('Your radius is not a number.')
		}
	} while (radius > 256 || isNaN(radius) || radius < 32)
	var mouth = 0.7 * radius
	var eyes = 0.15 * radius
	ctx4.beginPath();
	ctx4.arc(512, 256, radius, 0, 2 * Math.PI);
	ctx4.stroke();
	ctx4.closePath();
	ctx4.beginPath();
	ctx4.arc(512, 256, mouth, 0, Math.PI);
	ctx4.stroke();
	ctx4.closePath();
	ctx4.beginPath();
	ctx4.arc(512 - 0.4 * radius, 256 - 0.4 * radius, eyes, 0, 2 * Math.PI);
	ctx4.stroke();
	ctx4.closePath();
	ctx4.beginPath();
	ctx4.arc(512 + 0.4 * radius, 256 - 0.4 * radius, eyes, 0, 2 * Math.PI);
	ctx4.stroke();
	ctx4.closePath();
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function () {
	const canvas = document.getElementById('student-canvas-6');
  const ctx5 = canvas.getContext('2d');

  do {
    var side = (prompt("Side: "))
    if (side == null) {
      break;
    } else if (side < 1) {
      alert("Your block size must be at least 1.")
    } else if (side >= 101) {
      alert("Your pyramid won't fit on the canvas")
    } else if (isNaN(side)) {
      alert("Your block size is not a number.")
    }
  } while (isNaN(side) || side >= 101 || side < 1)
  for ( i = 1 ; i <= 5 ; i++) {
            name = ( i - 1 ) * ( side / 2 );
            for ( j = i ; j <= 5; j++ ) {
                ctx5.strokeRect( 10 + ( ( j - 1 ) * side ) - name, 512 - 10 - ( i  * side ), side, side);
              }
            }
          };
