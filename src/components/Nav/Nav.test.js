import React from 'react'
import { shallow } from 'enzyme'
import Nav from './Nav'

describe('Nav', () => {
    let wrapper
    it('should match the snapshot with all data passed down', () => {
        const props = {
            props: 'props'
        }

//obviously, this is just to show that this is not a great
//way to test a component.  Flesh out props better, but know
//that even though we are getting the props from mapSTP, we can
//we can call them anything that we want in the test file.

        wrapper = shallow(<Nav props={props}/>)
        expect(wrapper).toMatchSnapshot()
    })
    describe('signOut', () => {

    })

    describe('filterFavorites', () => {

    })

    describe('mapStateToProps', () => {

    })

    describe('matchDispatchToProps', () => {

    })
})