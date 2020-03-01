import React from 'react';
import {shallow} from 'enzyme';

import Avatar from './Avatar';

const shallowWrapper = (props={}) => {
  return shallow(<Avatar  {...props}/>)
};

// it renders without errors
it('it renders without errors.', () => {
    let wrapper = shallowWrapper();
    expect(wrapper.find('[data-test="avatar"]')).toHaveLength(1);
});

// it renders display prop
it.each([
    'A',
    1,
    <div>I am a div</div>
])('renders display prop', display => {
    let wrapper = shallowWrapper({display});
    expect(wrapper.contains(display)).toBeTruthy();
});