import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class param extends Component {
    render() {
        const {username} = this.props.route.params
        return (
            <View>
                <Text>nama : {username}</Text>
            </View>
        )
    }
}

export default param;
