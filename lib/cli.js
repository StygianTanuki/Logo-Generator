const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { log } = require('console');
const { Circle, Triangle, Square } = require("./shapes"); //require file//
class CLI {
  constructor() {
    this.title = '';


    // Tasks array
    this.tasks = [];
  }
  run() {
    return inquirer

    // Begin questions for the user.
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'What three characters do you want the logo to contain?',
        },

        {
          type: 'input',
          name: 'textColor',
          message: 'Enter the color for the text',
        },

        {
          type: 'list',
          name: 'shape',
          message: 'What shape would you like?',
          choices: ['circle', 'triangle', 'square']
        },

        {
          type: 'input',
          name: 'shapeColor',
          message: 'What shape color would you like?',
        },
      ])
    
      // Answer and response for each selection

      .then((answers) => {
        console.log(answers);

        if(answers.shape == "circle"){

          const newObject = new Circle(answers.shapeColor, answers.textColor, answers.text);

          const svgContent = newObject.generateSVG()

          console.log(svgContent)

          fs.writeFile("./examples/sample.svg", svgContent, function() {
            console.log("Circle was created.");
          })

        } else if(answers.shape == "triangle") {

          const newObject = new Triangle(answers.shapeColor, answers.textColor, answers.text);

          const svgContent = newObject.generateSVG()

          console.log(svgContent)

          fs.writeFile("./examples/sample.svg", svgContent, function() {
            console.log("Triangle was created.");
          })


        } else if(answers.shape == "square") {

          const newObject = new Square(answers.shapeColor, answers.textColor, answers.text);

          const svgContent = newObject.generateSVG()

          console.log(svgContent)

          fs.writeFile("./examples/sample.svg", svgContent, function() {
            console.log("Square was created.");
          })
          
        }

        // Catches errors if needed.
      })
      .catch((err) => {
        console.log(err);
        console.log('An error has occured.');
      });
  }

}

module.exports = CLI;