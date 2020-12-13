import React from 'react';
import {mount} from 'enzyme';
import About from './About';

const setup = (props={}) => {
    return mount(<About {...props} />)
}

describe('Testing About', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = setup()
    });

    it('Check snapshot for about', () => {
        expect(wrapper).toMatchSnapshot();
    })
})