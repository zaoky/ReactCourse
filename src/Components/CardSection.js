"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const CardSection = (props) => {
    return (React.createElement(react_native_1.View, {style: [styles.containerStyle]}, props.children));
};
const styles = react_native_1.StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardSection;
