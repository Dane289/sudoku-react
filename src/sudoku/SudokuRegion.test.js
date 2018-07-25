import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import SudokuRegion from './SudokuRegion'

it('renders without error', () => {
    let div = document.createElement("div");
    ReactDOM.render(<SudokuRegion
        sudokuBoard={Array.apply(null, Array(82)).map(Number.prototype.valueOf,0)}
        regionNo={[0,0]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
