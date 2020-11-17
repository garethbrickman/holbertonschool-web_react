import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App', () => {
    test('renders without crashing', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists());
});
  test('renders Notifications component', () => {
    const wrapper = shallow(<App />);
    const notifs = wrapper.find(Notifications);

    expect(notifs).to.have.lengthOf(1);
  });

  test('renders Header component', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find(Header);

    expect(header).to.have.lengthOf(1);
  });

  test('renders Login component', () => {
    const wrapper = shallow(<App />);
    const login = wrapper.find(Login);

    expect(login).to.have.lengthOf(1);
  });

  test('renders Footer component', () => {
    const wrapper = shallow(<App />);
    const footer = wrapper.find(Footer);

    expect(footer).to.have.lengthOf(1);
  });
  test('course list NOT displayed by default', () => {
    const wrapper = shallow(<App />);
    const courseList = wrapper.find(CourseList);

    expect(courseList).to.have.lengthOf(0);
  });

  test('if logged in, course list is displayed and login form is NOT', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);

    const login = wrapper.find(Login);
    const courseList = wrapper.find(CourseList);

    expect(login).to.have.lengthOf(0);
    expect(courseList).to.have.lengthOf(1);
  });
  // TODO: implement below test with chai-spies if possible

/*   test('logout keyboard shortcut works', () => {
    const map = {};
    window.addEventListener = jest.fn((ev, cb) => {
      map[ev] = cb;
    });

    window.alert = jest.fn();

    const testProps = {
      logOut: jest.fn()
    };
    const wrapper = shallow(<App {...testProps} />);

    map.keydown({ key: 'Control' });
    map.keydown({ key: 'h' });

    expect(testProps.logOut).to.have.been.called();
    expect(window.alert).to.have.been.called.with('Logging you out');
  }); */
});