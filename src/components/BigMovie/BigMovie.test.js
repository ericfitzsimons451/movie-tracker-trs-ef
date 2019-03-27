import React from 'react'
import { shallow } from 'enzyme'
import BigMovie from '../BigMovie/BigMovie'

describe('BigMovie', () => {
    let wrapper;
    it('should render the snapshot', () => {
        const mockMovie = {
            name: "Master Z: Ip Man Legacy",
            id: 450001,
            poster_path: "/2WfjB6FUDTIBVI2y02UGbnHR82s.jpg",
            release_date: "2018-12-20",
            vote_average: 5.5,
            overview:
            "After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going about his business, he gets into a fight with a foreigner by the name of Davidson, who is a big boss behind the bar district. Tin Chi fights hard with Wing Chun and earns respect."
          }
        wrapper = shallow(<BigMovie movie={mockMovie} />)
        expect(wrapper).toMatchSnapshot()
    })
})