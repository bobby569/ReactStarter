import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../src/components/app';

describe('App', () => {
    const rendered = renderer.create(<App />);

    it('renders something', () => {
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
