import * as React from 'react';
import {
    Text, ScrollView
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'
import Card from './Card'
import { IAlbum } from '../Shared/album-interface'

interface IAlbumList {
    albums: Array<IAlbum>;
}


export default class AlbumList extends React.Component<void, IAlbumList>{

    constructor() {
        super();
        this.state = { albums: [] }
        this.renderAlbums = this.renderAlbums.bind(this);
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: (response.data as IAlbum[]) }));
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} artist={album.artist} title={album.title} url={album.url} image={album.image} thumbnail_image={album.thumbnail_image} />);
    }

    render() {
        return (
            <ScrollView >
               {this.renderAlbums()}
            </ScrollView>
        );
    }
}