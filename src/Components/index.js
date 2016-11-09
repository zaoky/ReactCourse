"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const header_1 = require('./header');
const AlbumList_1 = require('./AlbumList');
const { Component } = React;
class InicioCurso extends Component {
    render() {
        return (React.createElement(react_native_1.View, {style: { flex: 1 }}, 
            React.createElement(header_1.default, {headerText: 'Albums'}), 
            React.createElement(AlbumList_1.default, null)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InicioCurso;
