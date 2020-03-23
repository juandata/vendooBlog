import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';


it('App should render correctly', () => {
    const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
  });

  it('App should render correctly with mount', () => {
    const component = mount(<App/>);
    expect(component).toMatchSnapshot();
    component.unmount()
  });