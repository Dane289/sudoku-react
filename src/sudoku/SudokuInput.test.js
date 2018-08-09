import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import {mount} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import SudokuInput from './SudokuInput'

it('renders without error', () => {
    let div = document.createElement("div");
    ReactDOM.render(<SudokuInput board={[0]} locationX={0} locationY={0}/>, div)
    ReactDOM.unmountComponentAtNode(div);
});
it('displays 9', () => {
    const input = shallow(<SudokuInput board={[0,1,9,3,4]} locationX={0} locationY={2}/>);
    expect(input.find('input').props().value).toEqual(9);
});

it('displays __empty', () => {
    const input = shallow(<SudokuInput board={[0,1,0,3,4]} locationX={0} locationY={2}/>);
    expect(input.find('input').props().value).toEqual("");
});

it('calls the state change', () => {
    var spy = sinon.spy();
    const input = mount(<SudokuInput board={[0,0,0]} locationX={0} locationY={0} changeHandler={spy} />);
    input.find('input').simulate('focus');
    input.find('input').simulate('change');
    input.find('input').simulate('blur');
    expect(spy.callCount).toEqual(1)
})