describe('Create form page', () => {
  it('should be able to add a new form element', () => {
    cy.visit('/create');

    cy.get('app-editable-form-element').should('have.length', 1);
    cy.get('.add-element-btn').click();

    const updatedFormElements = cy.get('app-editable-form-element');
    updatedFormElements.should('have.length', 2);

    const newFormElementLabel = updatedFormElements.last().find('app-editable-label > input');
    newFormElementLabel.should('have.value', 'New Field');
    newFormElementLabel.should('have.focus');
  });
});
