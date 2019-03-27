import { allPurposeFetch } from './allPurposeFetch'

describe('allPurposeFetch', () => {
    let mockUrl;
    let mockData;
    let response
    beforeEach(() => {
        response = {status: 'success', data: {name: "How to Train Your Dragon: The Hidden World", id: 166428, poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg", release_date: "2019-01-03", vote_average: 7.7}}
    
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
           json:() => Promise.resolve(response)
        }))
        mockUrl = 'www.url.com'
        mockData = [{name: "How to Train Your Dragon: The Hidden World", id: 166428, poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg", release_date: "2019-01-03", vote_average: 7.7},
        {name: "Captain Marvel", id: 299537, poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", release_date: "2019-03-06", vote_average: 7.3}]  
    })

    it('calls fetch with the correct url', () => {
        allPurposeFetch(mockUrl)
        expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })

    it('returns data with a successful fetch', async () => {
        const mockResponse = await allPurposeFetch(mockUrl)
        expect(mockResponse).toEqual(response)
    })

    it('should do some error handling on a failed attempt', async () => {
        window.fetch = jest.fn().mockImplementation(() => {
            Promise.reject(new Error('Fetch failed.'))
            // later, it will dispatch an action and we'll verify that it has been handled
            expect(allPurposeFetch(mockUrl)).rejects.toEqual(new Error('Fetch failed.'))
        })
    })
})