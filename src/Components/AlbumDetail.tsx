import * as React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import { IAlbum } from '../Shared/album-interface'
import Buttom from './Buttom'

const AlbumDetail: React.StatelessComponent<IAlbum> = (props) => {
    return (
        <Card>
            <CardSection>
                <View style={[styles.thumbailContainerStyle]} >
                    <Image style={[styles.thumbnailStyle]} source={{ uri: props.thumbnail_image }} />
                </View>
                <View style={[styles.headerContentStyle]} >
                    <Text style={[styles.headerTextStyle]} >{props.title}</Text>
                    <Text>{props.artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={[styles.imageStyle]} source={{ uri: props.image }} />
            </CardSection>

            <CardSection>
                <Buttom  onPress={() => Linking.openURL(props.url)} > Buy Now </Buttom>
            </CardSection>
        </Card>
    );
}

const styles = StyleSheet.create({
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

export default AlbumDetail;