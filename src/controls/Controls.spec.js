// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each'; //add this line to all your tests

import Controls from './Controls';

describe('<Controls />', () => {
    it.skip('renders without crashing', () => {
        render(<Controls />);
  })
})