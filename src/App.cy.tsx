//@ts-nocheck
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />)
  })

  it('first tab is selected by default', () => {
    cy.mount(<App />)
    cy.get("[role=tablist] [role=tab]").first().should('have.attr', 'aria-selected', 'true')
  })

  it('displays content of clicked tab', () => {
    cy.mount(<App />)

    // First tab is selected by default
    cy.get("[role=tablist] [role=tab]").eq(1).should('have.attr', 'aria-selected', 'false')
    cy.get("[data-test-id=heading]").should('have.text', 'Heading One')

    // Click on second tab
    cy.get("[role=tablist] [role=tab]").eq(1).click()

    // Second tab is selected
    cy.get("[role=tablist] [role=tab]").eq(1).should('have.attr', 'aria-selected', 'true')
    cy.get("[data-test-id=heading]").should('have.text', 'Heading Two')
  })
})