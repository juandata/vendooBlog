import React from 'react';
import { shallow } from 'enzyme';
import MainTitle from './MainTitle';


it('MainTitle should render correctly with no props', () => {
    const component = shallow(<MainTitle/>);
    
    expect(component).toMatchSnapshot();
  });