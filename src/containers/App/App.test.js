import { App, mapDispatchToProps, mapStateToProps} from "./App";
import { storeMovies, storeUsers } from "../../actions";
import mockFetchedData from "../../mockData";
import { shallow } from "enzyme";
import React from "react";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);

  })
  describe("App", () => {
    it('should render the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  });

  describe("cleanMovies", () => {
    it("should take in an array of movies and return a cleaned array", () => {
      const movies = mockFetchedData;
      const expected = [
        {
          name: "How to Train Your Dragon: The Hidden World",
          id: 166428,
          poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
          release_date: "2019-01-03",
          vote_average: 7.8,
          overview:
            "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind."
        },
        {
          name: "Master Z: Ip Man Legacy",
          id: 450001,
          poster_path: "/2WfjB6FUDTIBVI2y02UGbnHR82s.jpg",
          release_date: "2018-12-20",
          vote_average: 5.5,
          overview:
            "After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going about his business, he gets into a fight with a foreigner by the name of Davidson, who is a big boss behind the bar district. Tin Chi fights hard with Wing Chun and earns respect."
        }
      ];

      const results = wrapper.instance().cleanMovies(movies);
      expect(results).toEqual(expected);
    });
  });

  describe('cleanUsers', () => {
    it('should accept an array of users and return an array of emails', () => {
      const mockUsers = [
        {
          id: 1, 
          name: "Taylor", 
          password: "password", 
          email: "tman2272@aol.com"
        }, {
          id: 2, 
          name: "James", 
          password: "123", 
          email: "james@gmail.com"
        }
      ]
        const expected = ['tman2272@aol.com', 'james@gmail.com']
        const results = wrapper.instance().cleanUsers(mockUsers)
        expect(results).toEqual(expected)
    })
  })

  describe('mapStateToProps', () => {
    const mockState = {
      movies:[
        {
          name: "How to Train Your Dragon: The Hidden World",
          id: 166428,
          poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
          release_date: "2019-01-03",
          vote_average: 7.8,
          overview:
            "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind."
        },
        {
          name: "Master Z: Ip Man Legacy",
          id: 450001,
          poster_path: "/2WfjB6FUDTIBVI2y02UGbnHR82s.jpg",
          release_date: "2018-12-20",
          vote_average: 5.5,
          overview:
            "After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going about his business, he gets into a fight with a foreigner by the name of Davidson, who is a big boss behind the bar district. Tin Chi fights hard with Wing Chun and earns respect."
        }
      ],
      favorites: []
    }
    const expected = {
      movies:[
        {
          name: "How to Train Your Dragon: The Hidden World",
          id: 166428,
          poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
          release_date: "2019-01-03",
          vote_average: 7.8,
          overview:
            "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind."
        },
        {
          name: "Master Z: Ip Man Legacy",
          id: 450001,
          poster_path: "/2WfjB6FUDTIBVI2y02UGbnHR82s.jpg",
          release_date: "2018-12-20",
          vote_average: 5.5,
          overview:
            "After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going about his business, he gets into a fight with a foreigner by the name of Davidson, who is a big boss behind the bar district. Tin Chi fights hard with Wing Chun and earns respect."
        }
      ],
      favorites: []
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })

  describe("mapDispatchToProps", () => {
    it("should call dispatch with action.storeMovies and a payload of movies", () => {
      //setup
      const mockDispatch = jest.fn()
      const mockMovies = [{ title: "Aquaman" }, { title: "Triple Frontier" }];
      const actionToDispatch = storeMovies(mockMovies);
      const mappedProps = mapDispatchToProps(mockDispatch)

      //execution
      mappedProps.storeMovies(mockMovies);

      //expectation
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
  // describe('mapDispatchToProps', () => {
  //   it('should call dispatch with action.storeUsers and a payload of users', () => {
  //     const mockDispatch = jest.fn()  
  //     const mockUsers = [
  //         {
  //           id: 1, 
  //           name: "Taylor", 
  //           password: "password", 
  //           email: "tman2272@aol.com"
  //         }, {
  //           id: 2, 
  //           name: "James", 
  //           password: "123", 
  //           email: "james@gmail.com"
  //         }
  //       ]
  //       const actionToDispatch = storeUsers(mockUsers)
  //       const mappedProps = mapDispatchToProps(mockDispatch)
  //       mappedProps.storeUsers(mockUsers)
  //       expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  //     })
  //   })
  // })

  describe("fetchMovies", () => {});
});
