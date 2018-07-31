import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import Timer from './timer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Timer timeInSeconds={0}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays minutes:seconds ', () => {
    const timer = shallow(<Timer timeInSeconds={70}/>);
    expect(timer.text()).toEqual("1:10");
});

it('displays 0:07 ', () => {
    const timer = shallow(<Timer timeInSeconds={7}/>);
    expect(timer.text()).toEqual("0:07");
});

it('displays 59:59 ', () => {
    const timer = shallow(<Timer timeInSeconds={3599}/>);
    expect(timer.text()).toEqual("59:59");
});

it('displays 1:00:00 ', () => {
    const timer = shallow(<Timer timeInSeconds={3600}/>);
    expect(timer.text()).toEqual("1:00:00");
});