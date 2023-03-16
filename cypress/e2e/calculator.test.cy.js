describe('Calculator', function() {
  beforeEach(function() {
    cy.visit('/'); // assuming your app is served on localhost:3000
    cy.get('#fixture').as('fixture');
    cy.get('@fixture').find('#x').as('x');
    cy.get('@fixture').find('#y').as('y');
    cy.get('@fixture').find('#add').as('add');
    cy.get('@fixture').find('#subtract').as('subtract');
    cy.get('@fixture').find('#multiply').as('multiply');
    cy.get('@fixture').find('#divide').as('divide');
    cy.get('@fixture').find('#square-root').as('square-root');
    cy.get('@fixture').find('#change-sign').as('change-sign');
    cy.get('@fixture').find('#memory-recall').as('memoryRecall');
    cy.get('@fixture').find('#memory-minus').as('memoryMinus');
    cy.get('@fixture').find('#memory-plus').as('memoryPlus');
    cy.get('@fixture').find('#on-off-clear').as('onOffClear');
    cy.get('@fixture').find('#percent').as('percent');
    cy.get('@fixture').find('#equal').as('equal');
    cy.get('@fixture').find('#result').as('result');  
  });

  afterEach(function() {
    cy.get('@fixture').should('exist').then($fixture => {
      $fixture.remove();
    });
  });

  describe('Basic Operations', function() {
    describe('addition', function() {
      it('should return 5 for 2 + 3', function() {
        cy.get('@x').type('2');
        cy.get('@y').type('3');
        cy.get('@add').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '5');
      });
  })
    
    describe('subtraction', function() {
      it('should return 3 for 5 - 2', function() {
        cy.get('@x').type('5');
        cy.get('@y').type('2');
        cy.get('@subtract').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '3');
      })
    })

    describe('multiplication', function() {
      it('should return 12 for 3 * 4', function() {
        cy.get('@x').type('3');
        cy.get('@y').type('4');
        cy.get('@multiply').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '12');
      })
    })

    describe('division', function() {
      it('should return 2 for 10 / 5', function() {
        cy.get('@x').type('10');
        cy.get('@y').type('5');
        cy.get('@divide').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '2');
      });
    })
  })
  
  describe('Basic Operations Edge Cases', function() {
 
    describe('addition', function() {

      it('should handle large numbers correctly', function() {
        cy.get('@x').type('999999999999999');
        cy.get('@y').type('999999999999999');
        cy.get('@add').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '1999999999999998');
      });

      it('should handle a negative number correctly (-5+3 = -2)', function() {
        cy.get('@x').type('-5');
        cy.get('@y').type('3');
        cy.get('@add').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '-2');
      });

      it('should handle two negative numbers correctly (-5 + -6 = -11)', function() {
        cy.get('@x').type('-5');
        cy.get('@y').type('-6');
        cy.get('@add').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '-11');
      });

    })

    describe('subtraction', function() {

      it('should handle large numbers correctly', function() {
        cy.get('@x').type('999999899698588775999999');
        cy.get('@y').type('97658689999999999999');
        cy.get('@subtract').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '999902241008588776000000');
      });

      it('should handle negative numbers correctly (-5 - -2 = -3)', function() {
        cy.get('@x').clear().type('-5');
        cy.get('@y').clear().type('-2');
        cy.get('@subtract').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '-3');
      }); 
  
      it('should handle negative results with subtraction (3 - 5 = -2) ', function() {
        cy.get('@x').type('3');
        cy.get('@y').type('5');
        cy.get('@subtract').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '-2');
      })    
    })
 
    describe('multiplication', function() {
      
      it('should handle large numbers', function() {
        const x = '12345678901234567890';
        const y = '9876543210';
        cy.get('@x').type(x);
        cy.get('@y').type(y);
        cy.get('@multiply').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', (BigInt(x) * BigInt(y)).toString());
      })


      it('should handle negative numbers with multiplication (-2 * 3 = -6)', function() {
        cy.get('@x').type('-2');
        cy.get('@y').type('3');
        cy.get('@multiply').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '-6');
      })

      it('should handle negative numbers with multiplication (-5 * -2 = 10)', function() {  
        cy.get('@x').clear().type('-5');
        cy.get('@y').clear().type('-2');
        cy.get('@multiply').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '10');
      })
    })

    describe('division', function() {
      it('should return an "Infinity" message when dividing by zero', function() {
        cy.get('@x').type('5');
        cy.get('@y').type('0');
        cy.get('@divide').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', 'Infinity');
      });

      it('should handle repeating decimal result', function() {
        cy.get('@x').type('1');
        cy.get('@y').type('3');
        cy.get('@divide').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '0.3333333333333333');
      })

      it('should handle negative numbers (-6 / 3 = -2)', function() {
        cy.get('@x').type('-6');
        cy.get('@y').type('3');
        cy.get('@divide').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '-2');
      })

      it('should handle negative numbers (5 / -2 = -2.5)', function() {
        cy.get('@x').clear().type('5');
        cy.get('@y').clear().type('-2');
        cy.get('@divide').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '-2.5');
      })

      it('should handle two negative numbers (-8 / -2 = 4)', function() {
        cy.get('@x').clear().type('-8');
        cy.get('@y').clear().type('-2');
        cy.get('@divide').click();
        cy.get('@equal').click();
        cy.get('@result').should('have.text', '4');
      })
    })

  })

});
