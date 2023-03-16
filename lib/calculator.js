'use strict';

window.calculator = window.calculator || {};

var memory = 0;
var selectedOperator = null;

(function() {
	var getIntById = function(id) {
		return parseInt(document.getElementById(id).value, 10);
	};

	var add = function() {
		var  sum = getIntById('x') + getIntById('y');
		memory = sum;
		document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
	};

	var subtract = function() {
		var sub = getIntById('x') - getIntById('y');
		memory = sub;
		document.getElementById('result').innerHTML = isNaN(sub) ? 0 : sub;
	};

	var multiply = function() {
		var mul = getIntById('x') * getIntById('y');
		memory = mul;
		document.getElementById('result').innerHTML = isNaN(mul) ? 0 : mul;
	};

	var divide = function() {
		var div = getIntById('x') / getIntById('y');
		memory = div;
		document.getElementById('result').innerHTML = isNaN(div) ? 0 : div;
	};

    var squareRoot = function() {
    	var x = getIntById('x');
		memory = x;
    	document.getElementById('result').innerHTML = Math.sqrt(x);
    };
    
    var changeSign = function() {
    	var x = getIntById('x');
    	document.getElementById('result').innerHTML = -x;
    };
    
    
    var memoryRecall = function() {
    	document.getElementById('result').innerHTML = memory;
    };
    
    var memoryMinus = function() {
    	var x = getIntById('x');
    	memory -= x;
		document.getElementById('result').innerHTML = memory;
    };
    
    var memoryPlus = function() {
    	var x = getIntById('x');
    	memory += x;
		document.getElementById('result').innerHTML = memory;
    };
    
    var onOffClear = function() {
    	document.getElementById('x').value = '';
    	document.getElementById('y').value = '';
    	document.getElementById('result').innerHTML = '';
    	memory = 0;
    };
    
    var percent = function() {
    	var x = getIntById('x');
    	document.getElementById('result').innerHTML = (x / 100);
    };

	var equal = function() {
    	switch (selectedOperator) {
    		case 'add':
    			add();
    			break;
    		case 'subtract':
    			subtract();
    			break;
    		case 'multiply':
    			multiply();
    			break;
    		case 'divide':
    			divide();
    			break;
    	}
    };

	

	window.calculator.init = function() {
    	document.getElementById('add').addEventListener('click', function(){selectedOperator = 'add';});	
    	document.getElementById('subtract').addEventListener('click', function(){selectedOperator = 'subtract';});
    	document.getElementById('multiply').addEventListener('click', function(){selectedOperator = 'multiply';});
    	document.getElementById('divide').addEventListener('click', function(){selectedOperator = 'divide';});
    	document.getElementById('square-root').addEventListener('click', squareRoot);
    	document.getElementById('change-sign').addEventListener('click', changeSign);
    	document.getElementById('memory-recall').addEventListener('click', memoryRecall);
    	document.getElementById('memory-minus').addEventListener('click', memoryMinus);
    	document.getElementById('memory-plus').addEventListener('click', memoryPlus);
    	document.getElementById('on-off-clear').addEventListener('click', onOffClear);
    	document.getElementById('percent').addEventListener('click', percent);
		document.getElementById('equal').addEventListener('click', equal);
	};

})();