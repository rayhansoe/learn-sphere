import React from 'react'
import Footer from './footer'
import { AllLinks } from '@/types/constants'

describe('<Footer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Footer links={AllLinks} />)
    cy.get('[data-cy="footer-item"]').last().should('exist').and('be.visible').contains("Our Teams")
  })
})