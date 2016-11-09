"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const Card_1 = require('./Card');
const CardSection_1 = require('./CardSection');
const Buttom_1 = require('./Buttom');
const AlbumDetail = (props) => {
    return (React.createElement(Card_1.default, null, 
        React.createElement(CardSection_1.default, null, 
            React.createElement(react_native_1.View, {style: [styles.thumbailContainerStyle]}, 
                React.createElement(react_native_1.Image, {style: [styles.thumbnailStyle], source: { uri: props.thumbnail_image }})
            ), 
            React.createElement(react_native_1.View, {style: [styles.headerContentStyle]}, 
                React.createElement(react_native_1.Text, {style: [styles.headerTextStyle]}, props.title), 
                React.createElement(react_native_1.Text, null, props.artist))), 
        React.createElement(CardSection_1.default, null, 
            React.createElement(react_native_1.Image, {style: [styles.imageStyle], source: { uri: props.image }})
        ), 
        React.createElement(CardSection_1.default, null, 
            React.createElement(Buttom_1.default, {onPress: () => react_native_1.Linking.openURL(props.url)}, " Buy Now ")
        )));
};
const styles = react_native_1.StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        width: null,
        flex: 1
    },
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AlbumDetail;
