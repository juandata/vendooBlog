import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';
import {createSerializer} from 'enzyme-to-json';


it('NavBar should render correctly with no props', () => {
    const component = shallow(<NavBar/>);
    
    expect(createSerializer(component)).toMatchSnapshot();
  });