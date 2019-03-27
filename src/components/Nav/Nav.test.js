import React from 'react'
import { shallow } from 'enzyme'
import Nav from './Nav'
import { mapStateToProps, mapDispatchToProps } from '../Nav/Nav'
import { loginUser } from '../../actions'

describe('Nav', () => {
    let wrapper
    it('should match the snapshot with all data passed down', () => {
        const mockUserData = {
            email: "tman2272@aol.com",
            id: 1,
            name: "Taylor"
        }
        
        const props = {
            user: mockUserData,
            favorites: [
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
            movies: [
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
            ]
        }
        wrapper = shallow(<Nav props={props}/>)
        expect(wrapper).toMatchSnapshot()
    })
    describe('signOut', () => {
        it('should call loginUser', () => {
            wrapper = shallow(<Nav />)
            const mockEvent = {event: () => {}}
            const mockData = {
                name: "",
                email: ""
            }
            const mockLoginUser = jest.fn()
            wrapper.instance().signOut(mockEvent)
            expect(mockLoginUser).toHaveBeenCalledWith(mockData)
        })
        it('should call storeFavorites', () => {
            wrapper = shallow(<Nav />)
            const mockEvent = {event: () => {}}
            const mockStoreFavorites = jest.fn()
            wrapper.instance().signOut(mockEvent)
            expect(mockStoreFavorites).toHaveBeenCalledWith([])
        })
    })

    describe('validateLogin', () => {
        it('should update state when there is no user email', () => {
            const mockProps = {
                user: {
                    name: "",
                    email: ""
                }
            }
            const mockEvent = { event: () => {} }
            wrapper = shallow(<Nav props={mockProps} />)
            wrapper.instance().validateLogin(mockEvent)
            expect(wrapper.state('errorMsg')).toEqual('You must be signed in to view favorites')
        })

        it('should update state when there is a user email', () => {
            const mockProps = {
                user: {
                    name: "",
                    email: "johnnyAwesome@awesome.com"
                }
            }
            const mockEvent = { event: () => {} }
            wrapper = shallow(<Nav props={mockProps} />)
            wrapper.instance().validateLogin(mockEvent)
            expect(wrapper.state('errorMsg')).toEqual('')
        })      
    })

    describe('mapStateToProps', () => {
        it('should mapStateToProps, yo!', () => {
            const mockState = {
                user: {
                    email: "tman2272@aol.com",
                    id: 1,
                    name: "Taylor"
                },
                favorites: [
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
                movies: [
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
            }
            const mappedProps = mapStateToProps(mockState)
            expect(mappedProps).toEqual(mockState)
        })
       
    })

    describe('matchDispatchToProps', () => {
        it('should mapDispatchToProps', () => {
            const mockDispatch = jest.fn()
            const mockUserData = {
                email: "tman2272@aol.com",
                id: 1,
                name: "Taylor"
            }
            const actionToDispatch = loginUser(mockUserData)
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.loginUser(mockUserData)
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })
})