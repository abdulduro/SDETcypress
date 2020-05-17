/// <reference types="cypress" />

describe('Locating Elements', function() {
    it('Verify types of element locators', function() {

        cy.visit("demo.nopcommerce.com") // Opens the link
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") // Search input box
        cy.get(".search-box-button").click() // Click search button
        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click() // Add to cart button
        cy.get("#addtocart_4_EnteredQuantity").clear().type("2") // Quantity
        cy.get("#add-to-cart-button-4[value='Add to cart']").click() // Add to cart button after providing quantity
        cy.wait(6000)
        cy.get(".cart-label").click() //Shopping cart link
        cy.wait(6000)
        cy.get(".product-unit-price").contains("$1,800.00") //Validating point
    })
})