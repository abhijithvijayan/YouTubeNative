import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import YouTube from 'react-native-youtube';

const API_KEY = 'AIzaSyA5xhQLGprAZoa5tRqq5QutDfuE_rksPrU';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    vids: {
        paddingBottom: 80,
        width: 320,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    vidItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    vidText: {
        padding: 20,
        color: '#000',
    },
});

export default class YouTubeVideo extends Component {
    static navigationOptions = {
        headerType: 'Youtube',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTitleStyle: {
            color: '#000',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <YouTube
                    videoId={this.props.navigation.state.params.youtubeId}
                    play
                    fullscreen
                    loop={false}
                    apiKey={API_KEY}
                    onReady={e => {
                        return this.setState({ isReady: true });
                    }}
                    onChangeState={e => {
                        return this.setState({ status: e.state });
                    }}
                    onChangeQuality={e => {
                        return this.setState({ quality: e.quality });
                    }}
                    onError={e => {
                        return this.setState({ error: e.error });
                    }}
                    style={{ alignSelf: 'stretch', height: 300 }}
                />
                <View style={styles.vids}>
                    <View style={styles.vidItems}>
                        <Image
                            source={require('./assets/got.jpg')}
                            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
                        />
                        <Text style={styles.vidText}>{this.props.navigation.state.params.title}</Text>
                        <Icon name="more-vert" size={20} color="#555" />
                    </View>
                </View>
            </View>
        );
    }
}
