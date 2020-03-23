import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import buttonBackgroundImg from './assets/buttonBackground.svg';


it('Button should render correctly with no props', () => {
    const component = shallow(<Button />);
    expect(component).toMatchSnapshot();
  });

  it('Button mouseover should make image effect with given props', () => {
    const component = shallow(
        <Button Img={buttonBackgroundImg} />
    );
    component
      .simulate('mouseenter');
    expect(component).toMatchSnapshot();
    component.unmount();
  });