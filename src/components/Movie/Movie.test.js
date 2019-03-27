import Movie from "../Movie/Movie";
import React from "react";
import { shallow } from "enzyme";
import { mapStateToProps } from './Movie';

describe.skip("Movie", () => {
  let wrapper;
  it('should match the snapshot with all data passed down', () => {
    const mockProps = {
      name: "How to Train Your Dragon: The Hidden World",
      id: 166428,
      poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
      release_date: "2019-01-03",
      vote_average: 7.8,
      overview:
        "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind."
    },
    wrapper = shallow(<Movie movie={mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })
  // describe("mapStateToProps", () => {
  //   it("should update props from the Store with a user", () => {
  //     const mockUser = {
  //       email: "tman2272@aol.com",
  //       id: 1,
  //       name: "Taylor"
  //     };
  //     const mockState = {
  //       user: mockUser
  //     };
  //     const expectedProps = {
  //       user: {
  //         email: "tman2272@aol.com",
  //         id: 1,
  //         name: "Taylor"
  //       }
  //     };
  //     const mappedProps = mapStateToProps(mockState);
  //     expect(mappedProps).toEqual(expectedProps);
  //   });
  // });

  // describe('addFavorite', () => {})
});
