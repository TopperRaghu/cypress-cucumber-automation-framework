// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ========== CLICK COMMANDS ==========

Cypress.Commands.add('clickAndOpenLink_InSameTab', (selector) => {
    cy.get(selector).invoke('removeAttr', 'target').click();
});

Cypress.Commands.add('clickElement', (selector) => {
    cy.get(selector).should('be.visible').click();
});

Cypress.Commands.add('clickElementWithForce', (selector) => {
    cy.get(selector).click({ force: true });
});

Cypress.Commands.add('doubleClickElement', (selector) => {
    cy.get(selector).should('be.visible').dblclick();
});

Cypress.Commands.add('rightClickElement', (selector) => {
    cy.get(selector).rightclick();
});

// ========== FORM COMMANDS ==========

Cypress.Commands.add('fillInput', (selector, value) => {
    cy.get(selector).should('be.visible').clear().type(value);
});

Cypress.Commands.add('clearInput', (selector) => {
    cy.get(selector).clear();
});

Cypress.Commands.add('selectDropdownByValue', (selector, value) => {
    cy.get(selector).select(value);
});

Cypress.Commands.add('selectDropdownByText', (selector, text) => {
    cy.get(selector).select(text);
});

Cypress.Commands.add('selectCheckbox', (selector) => {
    cy.get(selector).check();
});

Cypress.Commands.add('deselectCheckbox', (selector) => {
    cy.get(selector).uncheck();
});

Cypress.Commands.add('selectRadioButton', (selector) => {
    cy.get(selector).check({ force: true });
});

// ========== VISIBILITY & WAIT COMMANDS ==========

Cypress.Commands.add('waitForElement', (selector, timeout = 5000) => {
    cy.get(selector, { timeout: timeout }).should('be.visible');
});

Cypress.Commands.add('waitForElementToDisappear', (selector, timeout = 5000) => {
    cy.get(selector, { timeout: timeout }).should('not.exist');
});

Cypress.Commands.add('verifyElementExists', (selector) => {
    cy.get(selector).should('exist');
});

Cypress.Commands.add('verifyElementVisible', (selector) => {
    cy.get(selector).should('be.visible');
});

Cypress.Commands.add('verifyElementNotVisible', (selector) => {
    cy.get(selector).should('not.be.visible');
});

Cypress.Commands.add('verifyElementHasText', (selector, text) => {
    cy.get(selector).should('contain', text);
});

Cypress.Commands.add('verifyElementValue', (selector, value) => {
    cy.get(selector).should('have.value', value);
});

// ========== TEXT & VALUE COMMANDS ==========

Cypress.Commands.add('getElementText', (selector) => {
    return cy.get(selector).invoke('text');
});

Cypress.Commands.add('getElementValue', (selector) => {
    return cy.get(selector).invoke('val');
});

Cypress.Commands.add('getElementAttribute', (selector, attribute) => {
    return cy.get(selector).invoke('attr', attribute);
});

// ========== HOVER & FOCUS COMMANDS ==========

Cypress.Commands.add('hoverElement', (selector) => {
    cy.get(selector).trigger('mouseover');
});

Cypress.Commands.add('focusElement', (selector) => {
    cy.get(selector).focus();
});

// ========== TABLE & LIST COMMANDS ==========

Cypress.Commands.add('getTableRowCount', (tableSelector) => {
    return cy.get(`${tableSelector} tbody tr`).its('length');
});

Cypress.Commands.add('getTableCellValue', (tableSelector, row, col) => {
    return cy.get(`${tableSelector} tbody tr:nth-child(${row}) td:nth-child(${col})`).invoke('text');
});

Cypress.Commands.add('getListItemCount', (listSelector) => {
    return cy.get(`${listSelector} li`).its('length');
});

// ========== MODAL/DIALOG COMMANDS ==========

Cypress.Commands.add('closeModal', (closeButtonSelector) => {
    cy.get(closeButtonSelector).click();
});

Cypress.Commands.add('verifyModalVisible', (modalSelector) => {
    cy.get(modalSelector).should('be.visible');
});

Cypress.Commands.add('verifyModalText', (modalSelector, text) => {
    cy.get(modalSelector).should('contain', text);
});

// ========== SCROLL COMMANDS ==========

Cypress.Commands.add('scrollToElement', (selector) => {
    cy.get(selector).scrollIntoView();
});

Cypress.Commands.add('scrollTop', () => {
    cy.scrollTo('top');
});

Cypress.Commands.add('scrollBottom', () => {
    cy.scrollTo('bottom');
});

// ========== URL & NAVIGATION COMMANDS ==========

Cypress.Commands.add('verifyCurrentURL', (url) => {
    cy.url().should('include', url);
});

Cypress.Commands.add('verifyCurrentURLExact', (url) => {
    cy.url().should('eq', url);
});

// ========== CSS & ATTRIBUTE COMMANDS ==========

Cypress.Commands.add('verifyElementHasClass', (selector, className) => {
    cy.get(selector).should('have.class', className);
});

Cypress.Commands.add('verifyElementHasAttribute', (selector, attribute, value) => {
    cy.get(selector).should('have.attr', attribute, value);
});

Cypress.Commands.add('verifyElementDisabled', (selector) => {
    cy.get(selector).should('be.disabled');
});

Cypress.Commands.add('verifyElementEnabled', (selector) => {
    cy.get(selector).should('be.enabled');
});

// ========== UPLOAD & FILE COMMANDS ==========

Cypress.Commands.add('uploadFile', (inputSelector, filePath) => {
    cy.get(inputSelector).selectFile(filePath);
});

// ========== UTILITY COMMANDS ==========

Cypress.Commands.add('waitSeconds', (seconds) => {
    cy.wait(seconds * 1000);
});

Cypress.Commands.add('logMessage', (message) => {
    cy.log(`✓ ${message}`);
});