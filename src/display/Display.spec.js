// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each'; //add this line to all your tests

import Display from './Display';

describe('<Display />', () => {
    it.skip('renders without crashing', () => {
        render(<Display />);
  })
  
  it.skip('renders a Div with Unlocked', () => {
    const {getByText} = render(<Display />)

    getByText(/unlocked/i)
  })

  it.skip('renders a Div with Open', () => {
    const {getByText} = render(<Display />)

    getByText(/open/i)
  })

})