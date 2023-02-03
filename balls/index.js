// import './node_modules/p5/lib/p5.js';
const containerElement = document.getElementById('p5-container');

const sketch = (p) => {
  const height = p.windowHeight;
  const width = p.windowWidth;
  const centerY = height/2;
  const centerX = width/2;
  let score = 0;
  let count = 0;
  const max = 100;
  let gameState = 0;

  let foods = [];
  // let x = 100;
  // let y = 100;

  class StartPrompt {
    constructor () {
      this.display = () => {
        const text = `
          Click the balls to make them disappear! 
          How many can you get??
          Click anywhere to start
        `
        p.fill(255)
        p.textAlign(p.CENTER)
        p.text(text, centerX, centerY);
      }
    }
  }

  class ScoreScreen {
    constructor () {
      this.display = () => {
        const text = `
          Your score was ${score}!
          Click anywhere to try again
        `
        p.fill(255)
        p.textAlign(p.CENTER)
        p.text(text, centerX, centerY);
      }
    }
  }



  class Food {
    constructor(x, y, defaultDiameter){

      this.diameter = p.random(35,200) ?? defaultDiameter;

      this.changeY = p.random(-2,2); 
      this.changeX =  p.random(-2,2);

      this.x = x ?? p.random(0, width - this.diameter);
      this.y = y ?? p.random(0, height - this.diameter);
      this.previous = foods[foods.length - 1] ?? null;
      const r = p.random(255); // r is a random number between 0 - 255
      const g = p.random(100,200); // g is a random number betwen 100 - 200
      const b = p.random(100); // b is a random number between 0 - 100

      this.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;

      this.display = () => {
        p.noStroke();
        this.y = this.y + this.changeY;
        this.x = this.x + this.changeX;
        p.fill(this.color);
        p.stroke(100, 100, 240);
        p.circle(this.x, this.y, this.diameter);
        this.diameter = this.diameter - .5

        // if(this.previous) {
          // p.stroke(255);
          // p.line(this.x, this.y, this.previous.x, this.previous.y)
        // }

        // p.text(this.color, this.x + 40, this.y);
      }
    }
  }

  p.touchStarted = () => {
    switch (gameState) {
      case 0:
        gameState++;
        break;
      case 1:
        //Check if a food was clicked on;
        for (let i = 0; i < foods.length; i++) {
          if(p.dist(p.mouseX, p.mouseY, foods[i].x, foods[i].y) < foods[i].diameter/2 ) {
            foods.splice(i,1)
            score++
          }
        }
        break;
      case 2:
        gameState = 1;
        count = 0;
        score = 0;
    }


  // foods.push(new Food(p.mouseX, p.mouseY))
}
p.mouseWheel = () => {
  foods.push(new Food())
}

p.setup = function() {
  // alert('Click the balls to make them disappear! How many can you get?')
  p.createCanvas(width, height);
  p.textFont(255)
console.log({height})
console.log({width})

  setInterval(addFood, 100)
};

function addFood(){
  if(foods.length < 15 & count < max) {
    foods.push(new Food())
    count++
  }
}

p.draw = function() {
  p.background(0);
  p.noFill();
  p.rectMode(p.CENTER)
  
  if(gameState === 1 && count === 100 && foods.length === 0) {
    gameState++
  }

  if(gameState === 0) {
    const startPrompt = new StartPrompt();
    startPrompt.display();
  } else if(gameState === 1) {
      
      for (let i = 0; i < foods.length; i++) {
        foods[i].display();
        
        if(foods[i].y + foods[i].diameter/2 >= height || foods[i].y - foods[i].diameter/2 < 0){
          foods[i].changeY = -foods[i].changeY;
        }
        if(foods[i].x + foods[i].diameter/2 >= width || foods[i].x - foods[i].diameter/2 < 0){
          foods[i].changeX = -foods[i].changeX;
        }
        if(foods[i].diameter <= 0) {
          foods.splice(i,1)
        }
      }
      p.fill(255)
      p.text(`Score: ${score}`, 30, 30)
      p.text(`Balls remaining: ${max - count}`, width-75, 30)
    } else if(gameState === 2) {

      const scoreScreen = new ScoreScreen();
      scoreScreen.display();
    }
};
};


new p5(sketch, containerElement);