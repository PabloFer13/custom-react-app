import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('<App />', () => {
  it('should render', () => {
    const rendered = renderer.create(<App />);
    expect(rendered).toMatchSnapshot();
  });
});
