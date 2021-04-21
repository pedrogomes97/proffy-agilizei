/// <reference types="cypress" />

import React from 'react'

import Textarea from '../../src/components/Textarea';
import { mount } from 'cypress-react-unit-test'
import { BrowserRouter as Router } from 'react-router-dom'

context('TextArea component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/Textarea/styles.css'
    it('deve renderizado com sucesso', () => {
        const name = "bio"
        const label = "Biografia"

        mount(
            <Router>
                <Textarea
                    name= { name }
                    label= { label }
                />
            </Router>
            , 
            {
                stylesheets: [baseCss, indexCss]
            }
        )

        cy.get('label').as('label')
        cy.get('#bio').as('bio')

        cy.get('@label').should('have.text', label);
        cy.get('@bio').then(($elemento) =>{
            // cy.log($elemento.css('width'))
            // cy.log($elemento.css('background-color'))
            // cy.log($elemento.css('border-radius'))
            // cy.log($elemento.css('border'))
            expect($elemento.css('background-color')).to.be.equal('rgb(248, 248, 252)')
            expect($elemento.css('border-radius')).to.be.equal('8px')
            expect($elemento.css('border')).to.be.equal('1px solid rgb(230, 230, 240)')
        });
    });
});
