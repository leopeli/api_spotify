import { expect } from 'chai';
import { 
    search,
    searchAlbuns,
    searchArtist,
    searchTrack,
    searchPlaylist } from '../src/main'

describe('Spotify Wrapper', () => {
    describe('Search', () => {
        context('Smoke tests', () => {
            it('should exist the search method', () => {
                expect(search).to.exist;
            });
            it('should exist the searchAlbuns', () => {
                expect(searchAlbuns).to.exist;
            })
            it('should exist the searchArtist', () => {
                expect(searchArtist).to.exist;
            })
            it('should exist the searchTrack', () => {
                expect(searchTrack).to.exist;
            })
            it('should exist the searchPlaylist', () => {
                expect(searchPlaylist).to.exist;
            })
        })
    })
})