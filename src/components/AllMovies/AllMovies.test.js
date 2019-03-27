import React from 'react'
import Movie from '../Movie/Movie'
import { AllMovies } from '../AllMovies/AllMovies';
import { shallow } from 'enzyme'

describe("AllMovies", () => {
  let wrapper;

  it.skip('should match the snapshot', () => {
    wrapper = shallow(<AllMovies />)
    expect(wrapper).toMatchSnapshot();
  })

  describe('allMovies', () => {
    it('should return an array of Movie components', () => {
      const mockMovies = {movies:[
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
      ]}
      const movieCards = mockMovies.movies.map((movie) => {
        return <Movie key={movie.id} {...movie} />
      }) 
      const expected = <div className="movie-display-container">{movieCards}</div>
      const results = AllMovies(mockMovies)
      expect(results).toEqual(expected)
    })
  })
});
