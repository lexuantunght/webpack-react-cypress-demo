import React from 'react';

describe('The homepage', () => {
    it('success loading', () => {
        cy.visit('/');
    });
});
