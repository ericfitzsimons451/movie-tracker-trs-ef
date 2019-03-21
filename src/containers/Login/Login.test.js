import Login from '../Login/Login'
import { shallow } from 'enzyme'
import React from 'react'
import { matchDispatchToProps} from 'react-redux'

describe('Login', () => {
    let wrapper;
    it('should have initial state', () => {
        wrapper = shallow(<Login />)
        
    })
    it('should match the snapshot', () => {
        wrapper = shallow(<Login />)
        expect(wrapper).toMatchSnapshot()
    })


    describe('handleChange', () => {
        it('should live-update state with changes from buttons', () => {

        })
    })
    

})

describe('matchDispatchToProps', () => {
    it('should dispatch a loginUser-action when the props object function is called', () => {
        const mockDispatch = jest.fn()
        mockLogin
        mappedprops
        actiontodispatch
    })
})