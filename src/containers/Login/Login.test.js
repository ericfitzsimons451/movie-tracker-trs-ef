import Login from "../Login/Login";
import { shallow } from "enzyme";
import React from "react";
import { mapDispatchToProps, mapStateToProps, updateState } from "../Login/Login";
import { loginUser } from '../../actions'

describe.skip("Login", () => {
  let wrapper;
  
  it("should have initial state", () => {
    wrapper = shallow(<Login />);
  });

  it("should match the snapshot", () => {
    wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleChange", () => {
    it.skip("should live-update state with changes from buttons", () => {});
  });

  describe('updateState', () => {
    wrapper = shallow(<Login />)
    const setState = jest.fn()
    wrapper.instance().updateState()
    expect(setState).toHaveBeenCalled()
  })
});

describe("maphDispatchToProps", () => {
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
