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
    var testBoard = [0,0,0];
    var newValue = 2;
    const input = mount(<SudokuInput board={testBoard} locationX={0} locationY={0} changeHandler={spy} />);
    var textInput = input.find('input');
    textInput.simulate('focus');
    textInput.simulate('change', {target: { value:  newValue}})
    textInput.simulate('blur');
    expect(spy.callCount).toEqual(1)
    expect(spy.calledWith(testBoard, 0, 0, newValue)).toBeTruthy();
})