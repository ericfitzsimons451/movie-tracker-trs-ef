import { Login }  from "../Login/Login";
import { shallow } from "enzyme";
import React from "react";
import { updateState } from "../Login/Login";
import { loginUser } from '../../actions'

describe.skip("Login", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />)
  })

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip("should have default state", () => {
    const mockDefaultState = {
      name: "",
      email: "",
      password: "",
      errorMsg: "",
      newUserName: "",
      newUserEmail: "",
      newUserPassword: "",
      createUser: false
    }
    
    wrapper = shallow(<Login />, { disableLifecycleMethods: true })
    expect(wrapper.state()).toEqual(mockDefaultState)
  });

  describe.skip("handleChange", () => {
    let wrapper;
    it("should live-update state with changes from buttons", () => {
      wrapper = shallow(<Login />)
      // const mockEvent = { preventDefault: () => {} }
      // const mockState = {
      //   name: '',
      //   // email: ''
      // }
      wrapper.instance().handleChange()
      // expect(mockState('name')).toEqual('a')
      
    });
  });

  describe.skip('handleSubmit', () => {
    const mockEventPreventDefault = { preventDefault: () => {} }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({name: '', email: ''})
    }))

  })

  describe.skip('updateState', () => {

    const setState = jest.fn()
    wrapper.instance().updateState()
    expect(setState).toHaveBeenCalled()
  })
});

describe.skip("mapDispatchToProps", () => {
  it("should dispatch action.loginUser with a payload of user data", () => {
    const mockDispatch = jest.fn();
    const mockUserData = {
      email: "tman2272@aol.com",
      id: 1,
      name: "Taylor"
    }
    const actionToDispatch = loginUser(mockUserData)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.loginUser(mockUserData)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

  describe('mapStateToProps', () => {
    const mockState = {
      user: {
        email: "tman2272@aol.com",
        id: 1,
        name: "Taylor"
      },
      allUsers: ['tman2272@aol.com', 'igotobedearly@gmail.com']
    }

    const expected = {
      user: {
        email: "tman2272@aol.com",
        id: 1,
        name: "Taylor"
      },
      allUsers: ['tman2272@aol.com', 'igotobedearly@gmail.com']
    }

    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })

  
});
