/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {

  // SET UP: do something before each 'it' test aka unit test
  beforeEach(function() {
    var fixture = 
    '<div id="fixture">' +
      '<input id="x" type="text">' + 
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

    window.calculator.init();
  });

  // TEAR DOWN: do something after each
  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  it('should return 5 for 2 + 3', function() {
    document.getElementById('x').value = '2';
    document.getElementById('y').value = '3';
    
    document.getElementById('add').click();
    document.getElementById('equal').click();
    
    expect(document.getElementById('result').innerHTML).toBe('5');
  });
  
  it('should return 3 for 5 - 2', function() {
      document.getElementById('x').value = '5';
      document.getElementById('y').value = '2';
      
      document.getElementById('subtract').click();
      document.getElementById('equal').click()
      
      expect(document.getElementById('result').innerHTML).toBe('3');
  });
  
  it('should return 12 for 3 * 4', function() {
      document.getElementById('x').value = '3';
      document.getElementById('y').value = '4';
      
      document.getElementById('multiply').click();
      document.getElementById('equal').click()
      
      expect(document.getElementById('result').innerHTML).toBe('12');
  });
  
  it('should return 2 for 10 / 5', function() {
      document.getElementById('x').value = '10';
      document.getElementById('y').value = '5';
      
      document.getElementById('divide').click();
      document.getElementById('equal').click()
      
      expect(document.getElementById('result').innerHTML).toBe('2');
  });

   
});