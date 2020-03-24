import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import {createSerializer} from 'enzyme-to-json';


it('App should render correctly', () => {
    const component = shallow(<App/>);
    expect(createSerializer(component)).toMatchSnapshot();
  });

  it('App should render correctly with mount', () => {
    const component = mount(<App/>);
    expect(createSerializer(component)).toMatchSnapshot();
    component.unmount()
  });