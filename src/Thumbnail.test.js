import React from 'react';
import { shallow } from 'enzyme';
import Thumbnail from './Thumbnail';
import snowMountainImg from './assets/snowMountains.png';
import {createSerializer} from 'enzyme-to-json';



  it('Thumbnail mouseover should make image effect with given props', () => {
    const component = shallow(
    <Thumbnail Title="Snow Mountains" Likes={10} Date={"12/18/90"} Img={snowMountainImg} />
    );
    component
      .simulate('mouseenter');
    expect(createSerializer(component)).toMatchSnapshot();
    component.unmount();
  });