import * as React from 'react';
import {
    View,
    Text
} from 'react-native';
import Header from './header'
import AlbumList from './AlbumList'


const {Component} = React;

export default class InicioCurso extends Component<void, void>{

    render() {
        return (
            <View style={{ flex:1 }}>
                <Header headerText={'Albums'} />
                <AlbumList />
            </View>
        );
    }
}