import Header from './Header'
import React from 'react'
import { shallow } from 'enzyme'

describe('Header', () => {
    let wrapper;
    it('matches the snapshot', () => {
        wrapper = shallow(<Header />)
        expect(wrapper).toMatchSnapshot()
    })
})