"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const Buttom = (props) => {
    return (React.createElement(react_native_1.TouchableOpacity, {onPress: props.onPress, style: [styles.buttomStyle]}, 
        React.createElement(react_native_1.Text, {style: [styles.textStyle]}, 
            " ", 
            props.children)
    ));
};
const styles = react_native_1.StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttomStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Buttom;
