import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from "react-native";
import style from "./style";
import AsyncStorage from '@react-native-community/async-storage'
import LinearGradient from "react-native-linear-gradient"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            mata: true
        };
        const value = AsyncStorage.getItem('token').then((value) => {
            console.log(value);
            if (value !== null) {
                this.props.navigation.navigate('Home');
            } else {
                this.props.navigation.navigate('Register');
            }
        });
    }

    mengambilUser = () => {
        fetch('http://restful-api-laravel-7.herokuapp.com/api/todo/', {
            method: 'GET',
            Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0ZnVsLWFwaS1sYXJhdmVsLTcuaGVyb2t1YXBwLmNvbVwvYXBpXC9sb2dpbiIsImlhdCI6MTYwMjc0NzExMiwiZXhwIjoxNjAyNzUwNzEyLCJuYmYiOjE2MDI3NDcxMTIsImp0aSI6IjF1dnlWOUo2WGozSjFZVEMiLCJzdWIiOjMsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.3maViXFLfM05pr5pALhnSOsFKJHoggJxwQB_mmVDuNs',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    componentDidMount() {
        this.mengambilUser();
    }

    Login = () => {
        const { email, password } = this.state;
        var dataToSend = { email: email, password: password };

        var formBody = [];
        for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        fetch('http://restful-api-laravel-7.herokuapp.com/api/login', {
            method: 'POST',
            body: formBody,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                const { token } = responseJson;
                if (token) {
                    AsyncStorage.setItem('token', JSON.stringify(token));
                    this.props.navigation.navigate('Home');
                } else {
                    alert('Pastikan Email dan Password BENAR!');
                }
            })
            .catch((error) => {
                alert('Pastikan Email dan Password BENAR!');
            });
    };
    ubaheye = () => {
        const eyey = !this.state.mata
        this.setState({ mata: eyey })
    }
    render() {
        return (
            <View>
                <LinearGradient
                    colors = {["#037ffc", "#52fade"]}
                    style={style.imagebackground}>
                    <View>
                        <View style={style.view1}>
                            <Text style={style.text1}>Sign In</Text>
                            <View style={style.view2}>
                                <Image
                                    source={require("../assets/orang.png")}
                                    style={style.image2}
                                />
                                <TextInput
                                    placeholder="Username Atau Email"
                                    style={style.text2}
                                    onChangeText={(email) => this.setState({ email })}
                                />
                            </View>
                            <View style={style.view2}>
                                <Image
                                    source={require("../assets/gembok.png")}
                                    style={style.image2}
                                />
                                <TextInput
                                    secureTextEntry={this.state.mata}
                                    placeholder="Password"
                                    style={style.text2}
                                    onChangeText={(password) => this.setState({ password })}
                                />
                                <TouchableOpacity onPress={() => this.ubaheye()}>
                                    <Image
                                        source={this.state.mata ? require("../assets/eyeClosed.png") : require("../assets/eyeOpened.png")}
                                        style={style.image5}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => this.Login()} style={style.view3}>
                                <Text style = {{opacity:0.7}}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Forgot")}>
                                <Text style={style.text3}>Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={style.text4}>__________________________</Text>
                        <View style={style.view4}>
                            <Text style={style.text5}>Don't a have account ?</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
                                <Text style={style.text6}>REGISTER NOW</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

export default Login;