/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {

  // inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture = '<div id="fixture"><input id="x" type="text">' + 
      '<input id="y" type="text">' + 
      '<input id="add" type="button" value="Add Numbers">' +
      '<input id="subtract" type="button" value="Subtract Numbers">' +
   		'<input id="multiply" type="button" value="Multiply Numbers">' +
   		'<input id="divide" type="button" value="Divide Numbers">' +
   		'<input id="square-root" type="button" value="Square Root">' +
   		'<input id="change-sign" type="button" value="Change Sign">' +
   		'<input id="memory-recall" type="button" value="Memory Recall">' +
   		'<input id="memory-minus" type="button" value="Memory Minus">' +
   		'<input id="memory-plus" type="button" value="Memory Plus">' +
   		'<input id="on-off-clear" type="button" value="On/Off/Clear">' +
   		'<input id="percent" type="button" value="Percent"></input>' +
      '<input id="equal" type="button" value="Equal">' +
      'Result: <span id="result" /> ' + 
    '</div>';

    document.body.insertAdjacentHTML(
      'afterbegin', 
      fixture);
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  // call the init function of calculator to register DOM elements
  beforeEach(function() {
    window.calculator.init();
  });

  describe('Square root', function() {
    it('should calculate the square root of a number', function() {
      // Set the input value
      document.getElementById('x').value = '25';
      // Trigger the click event on the square-root button
      document.getElementById('square-root').click();
      // Check that the result is correct
      expect(document.getElementById('result').innerHTML).toEqual('5');
    });
  });

  describe('Change sign', function() {
    it('should change the sign of a number', function() {
      // Set the input value
      document.getElementById('x').value = '-3';
      // Trigger the click event on the change-sign button
      document.getElementById('change-sign').click();
      // Check that the result is correct
      expect(document.getElementById('result').innerHTML).toEqual('3');
    });
  });

  describe('Memory', function() {
    it('should add a number to memory', function() {
      // Set the memory value
      memory = 0;
      // Set the input value
      document.getElementById('x').value = '7';
      // Trigger the click event on the memory-plus button
      document.getElementById('memory-plus').click();
      // Check that the memory value is correct
      expect(memory).toEqual(7);
    });

    it('should subtract a number from memory', function() {
      // Set the memory value
      memory = 10;
      // Set the input value
      document.getElementById('x').value = '4';
      // Trigger the click event on the memory-minus button
      document.getElementById('memory-minus').click();
      // Check that the memory value is correct
      expect(memory).toEqual(6);
    });

    it('should recall the memory value', function() {
      // Set the memory value
      memory = 10;
      // Trigger the click event on the memory-recall button
      document.getElementById('memory-recall').click();
      // Check that the result is correct
      expect(document.getElementById('result').innerHTML).toEqual('10');
    });
  });

  describe('Clear', function() {
    it('should clear the calculator', function() {
      // Set the input value
      document.getElementById('x').value = '2';
      // Trigger the click event on the on-off-clear button
      document.getElementById('on-off-clear').click();
      // Check that the calculator is cleared
      expect(document.getElementById('x').value).toEqual('');
      expect(document.getElementById('y').value).toEqual('');
      expect(document.getElementById('result').innerHTML).toEqual('');
      expect(memory).toEqual(0);
    });
  });

  describe('Percentage', function() {
    it('should calculate the percentage of a number', function() {
      // Set the input values
      document.getElementById('x').value = '20';
      // Trigger the click event on the percent button
      document.getElementById('percent').click();
      // Check that the result is correct
      expect(document.getElementById('result').innerHTML).toEqual('0.2');
    });
  });

  describe('equal', function() {
    it('should call the appropriate operator function based on selectedOperator', function() {
      selectedOperator = 'add';
      document.getElementById('x').value = '2';
      document.getElementById('y').value = '3';
      
      document.getElementById('equal').click();
      expect(document.getElementById('result').innerHTML).toEqual('5');
    });
  });

  it('should calculate zero for invalid x value', function() {
    document.getElementById('x').value = 'hello';
    document.getElementById('y').value = 2;
    document.getElementById('add').click();
    document.getElementById('equal').click()
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

  it('should calculate zero for invalid y value', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 'goodbye';
    document.getElementById('add').click();
    document.getElementById('equal').click()
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

});