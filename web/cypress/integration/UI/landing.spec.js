/// <reference types="cypress" />

const largura = [1200, 1090]

largura.forEach(largura => {
    context(`Landing Page - ${largura}px`, () => {
        beforeEach(() => {
            cy.visit('/');
            //cy.viewport('width', 'height')
            cy.viewport(largura, 900)
            cy.log('Largura: ', largura)
        });
        it('Navegar para o cadastro de aulas', () => {
            cy.get('a[class="give-classes"]').click();
            cy.url().should('contain', 'give-classes')
        });

        it('Navegar para pesquisa de professores', () => {
            cy.get('a[class="study"]').click();
            cy.url().should('contain', 'study')
        });
    });
})