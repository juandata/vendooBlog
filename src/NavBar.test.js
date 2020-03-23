import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';


it('NavBar should render correctly with no props', () => {
    const component = shallow(<NavBar/>);
    
    expect(component).toMatchSnapshot();
  });