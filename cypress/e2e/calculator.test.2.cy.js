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

  describe('Square root', function() {
    it('should calculate the square root of a number', () => {
      cy.get('@x').type('25')
      cy.get('@square-root').click()
      cy.get('@result').should('have.text', '5')
    })
  })

  describe('Change sign', function() {
    it('should change the sign of a number', () => {
      cy.get('@x').type('-3')
      cy.get('@change-sign').click()
      cy.get('@result').should('have.text', '3')
    })
  })

  describe('Memory', function() {
    it('should add a number to memory', () => {
      cy.window().then((win) => {
        win.memory = 0
      })
      cy.get('@x').type('7')
      cy.get('@memoryPlus').click()
      cy.window().its('memory').should('equal', 7)
    })
  
    it('should subtract a number from memory', () => {
      cy.window().then((win) => {
        win.memory = 10
      })
      cy.get('@x').type('4')
      cy.get('@memoryMinus').click()
      cy.window().its('memory').should('equal', 6)
    })
  
    it('should recall the memory value', () => {
      cy.window().then((win) => {
        win.memory = 10
      })
      cy.get('@memoryRecall').click()
      cy.get('@result').should('have.text', '10')
    })
  })
  
  describe('Clear', function() {
    it('should clear the calculator', () => {
      cy.get('@x').type('2')
      cy.get('@onOffClear').click()
      cy.get('@x').should('have.value', '')
      cy.get('@y').should('have.value', '')
      cy.get('@result').should('be.empty')
      cy.window().its('memory').should('equal', 0)
    })
  })

  describe('Percentage', function() {
    it('should calculate the percentage of a number', () => {
      cy.get('@x').type('20')
      cy.get('@percent').click()
      cy.get('@result').should('have.text', '0.2')
    })
  })

  describe('equal', function() {
    it('should call the appropriate operator function based on selectedOperator', () => {
      cy.window().then((win) => {
        win.selectedOperator = 'add'
      })
      cy.get('@x').type('2')
      cy.get('@y').type('3')
      cy.get('@equal').click()
      cy.get('@result').should('have.text', '5')
    })
  })

  describe('invalid inputs', function() {
    it('should calculate zero for invalid x value', () => {
      cy.get('@x').type('hello')
      cy.get('@y').type('2')
      cy.get('@add').click()
      cy.get('@equal').click()
      cy.get('@result').should('have.text', '0')
    })
  
    it('should calculate zero for invalid y value', () => {
      cy.get('@x').type('1')
      cy.get('@y').type('goodbye')
      cy.get('@add').click()
      cy.get('@equal').click()
      cy.get('@result').should('have.text', '0')
    })

    it('should calculate zero for invalid x and y values', function() {
      cy.get('@x').type('foo');
      cy.get('@y').type('bar');
      cy.get('@add').click();
      cy.get('@equal').click();
      cy.get('@result').should('have.text', '0');
    })
  })


})