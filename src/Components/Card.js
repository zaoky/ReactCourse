"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const Card = (props) => {
    return (React.createElement(react_native_1.View, {style: [styles.containerStyle]}, props.children));
};
const styles = react_native_1.StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
