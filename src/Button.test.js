import React from 'react';
import { shallow } from 'enzyme';
import {createSerializer} from 'enzyme-to-json';

import Button from './Button';
import buttonBackgroundImg from './assets/buttonBackground.svg';


it('Button should render correctly with no props', () => {
    const component = shallow(<Button />);
    expect(createSerializer(component)).toMatchSnapshot();
  });

  it('Button mouseover should make image effect with given props', () => {
    const component = shallow(
        <Button Img={buttonBackgroundImg} />
    );
    component
      .simulate('mouseenter');
    expect(createSerializer(component)).toMatchSnapshot();
    component.unmount(); 
  });