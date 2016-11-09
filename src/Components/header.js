"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const Header = (props) => {
    return (React.createElement(react_native_1.View, {style: [styles.container]}, 
        React.createElement(react_native_1.Text, {style: [styles.header]}, 
            " ", 
            props.headerText, 
            " ")
    ));
};
const styles = react_native_1.StyleSheet.create({
    header: {
        fontSize: 20,
    },
    container: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3,
        position: 'relative'
    },
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
