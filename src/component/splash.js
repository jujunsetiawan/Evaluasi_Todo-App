import React from "react";
import { View, Text, Image, ImageBackground, ActivityIndicator } from "react-native";
import LinearGradient from "react-native-linear-gradient"
import style from "./style"
import Navigation from "./navigation"

class Splash extends React.Component {
    constructor() {
        super()
        this.state = {role: true}
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({role: false})
        }, 2000);
    }

    render() {
        if (this.state.role) {
            return (
                <View>
                    <LinearGradient
                        colors = {["#037ffc", "#52fade"]}
                        style={style.imagebackground}>
                        <ActivityIndicator size="large" color="dodgerblue" />
                        <Text style={style.text7}>Loading...</Text>
                    </LinearGradient>
                </View>
            )
        } else {
            return <Navigation/>
        }
    }
}

export default Splash;