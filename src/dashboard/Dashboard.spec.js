// Test away
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each'; //add this line to all your tests

import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display';

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />);
    })


    //----clicking Close Gate Btn to start
    it('when closed gate clicked, (Display: open) becomes (Display: closed), "closed gate" btn becomes open gate btn {lock Gate btn becomes enabled}', () => {
        const { getByText } = render(<Dashboard />);
        const btn = getByText(/close gate/i);
        fireEvent.click(btn);
        getByText(/closed/i);
        getByText(/open gate/i);
        
    })

      //----clicking Close Gate Btn Twice
      it('when closed gate clicked, (Display: open) becomes (Display: closed), "closed gate" btn becomes open gate btn {lock Gate btn becomes enabled}', () => {
        const { getByText } = render(<Dashboard />);
        const btn = getByText(/close gate/i);
        
        fireEvent.click(btn);
        getByText(/Closed/);
        const btn2 = getByText(/open gate/i)
        fireEvent.click(btn2);
        getByText(/Open/);
        
    })

    //----clicking Close Gate Btn & THEN Clicking Lock Gate Btn
    it('when lock gate clicked, (Display: Unlocked) becomes (Display: locked), "lock gate" btn becomes "unlock gate" btn {open gate becomes disabled}', () => {
        const { getByText } = render(<Dashboard />);
        const btn = getByText(/close gate/i);
        const btn2 = getByText(/lock gate/i)
        fireEvent.click(btn);
        fireEvent.click(btn2)
        getByText(/locked/i);
        getByText(/unlock gate/i);
        
    })

})