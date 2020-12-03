import React from 'react';
import { mount } from 'enzyme';
import { expect as expect2 } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';

import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    const wrapper = mount(<Header />, {
      context: {
        user: {
          email: '',
          password: '',
          isLoggedIn: false
        },
        logOut: () => {}
      }
    });

    expect2(wrapper.exists());
  });

  test('renders an image and h1', () => {
    const wrapper = mount(<Header />, {
      context: {
        user: {
          email: '',
          password: '',
          isLoggedIn: false
        },
        logOut: () => {}
      }
    });

    const image = wrapper.find('img');
    const h1 = wrapper.find('h1');

    expect2(image.exists());
    expect2(h1.exists());
  });
});