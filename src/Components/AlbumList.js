"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const axios_1 = require('axios');
const AlbumDetail_1 = require('./AlbumDetail');
class AlbumList extends React.Component {
    constructor() {
        super();
        this.state = { albums: [] };
        this.renderAlbums = this.renderAlbums.bind(this);
    }
    componentWillMount() {
        axios_1.default.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
    }
    renderAlbums() {
        return this.state.albums.map(album => React.createElement(AlbumDetail_1.default, {key: album.title, artist: album.artist, title: album.title, url: album.url, image: album.image, thumbnail_image: album.thumbnail_image}));
    }
    render() {
        return (React.createElement(react_native_1.ScrollView, null, this.renderAlbums()));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AlbumList;
