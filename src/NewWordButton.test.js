import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr } from '../test/testUtils';
import NewWordButton from './NewWordButton';

const defaultProps = { display: false };

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<NewWordButton {...setupProps } />);
}

describe('render', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-new-word-button');
    expect(component.length).toBe(1);
  });
  test('renders no text when `display` prop is false', () => {
    const wrapper = setup({ display: false });
    const component = findByTestAttr(wrapper, 'component-new-word-button');
    expect(component.text()).toBe('');
  });
  test('renders non-empty text when `display` prop is true', () => {
    const wrapper = setup({ display: true, resetAction: () => {} });
    const component = findByTestAttr(wrapper, 'component-new-word-button');
    expect(component.text().length).not.toBe(0);
  });
});
test('does not thow warning with expeced props', () => {
  const expectedProps = { display: false, resetAction: () => {} };
  checkProps(NewWordButton, expectedProps);
});