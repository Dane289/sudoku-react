import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SudokuGame from './SudokuGame';
Enzyme.configure({ adapter: new Adapter() });

describe("test reset", () => {
    test("state is reset to 0 time", () => {
        var game = mount(<SudokuGame/>);
        game.setState({timeInSeconds:20,
                        newGame:false});
        expect(game.state().timeInSeconds).toEqual(20);

        game.find()
        expect(game.state().timeInSeconds).toEqual(0);
    });
} );