import React from 'react';
import { shallow } from 'enzyme';
import MainTitle from './MainTitle';
import {createSerializer} from 'enzyme-to-json';


it('MainTitle should render correctly with no props', () => {
    const component = shallow(<MainTitle/>);
    
    expect(createSerializer(component)).toMatchSnapshot();
  });