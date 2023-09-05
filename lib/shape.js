class Shape {
    constructor(color, textColor, text) {
      this.color = color;
      this.textColor = textColor;
      this.text = text;
    }
  }
  
  // Creates a Circle shape
  class Circle extends Shape {
    
    generateSVG() {
      const svgContent = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="50" style="fill:${this.color};"/><text x="100" y="110" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text></svg>`;
      return svgContent;
    }
  }

  // Creates a Triangle Shape
  class Triangle extends Shape {
    
    generateSVG() {
      const svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,0 0,100 100,100" style="fill:${this.color};"/><text x="49" y="60" text-anchor="middle" font-size="30" fill="${this.textColor}">${this.text}</text></svg>`;
      return svgContent;
    }
  }

  // Creates a Square shape
  class Square extends Shape {
    generateSVG() {
      const svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" style="fill:${this.color};"/><text x="23" y="60" font-size="30px" fill="${this.textColor}">${this.text}</text></svg>`;
      return svgContent;
    }
  }
  
  // Allows the shapes to be exported to other parts of the code
  module.exports = {
    Circle,
    Triangle,
    Square,
  };