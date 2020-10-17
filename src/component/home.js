import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Animated, ScrollView } from 'react-native';
import style from "./style"
import LinearGradient from "react-native-linear-gradient"

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            cheklist: true
        }
    }
    chek() {
        this.setState({
            cheklist: !this.state.cheklist
        })
    };
    render() {
        return (
            <View>
                <LinearGradient
                    colors={["#037ffc", "#52fade"]}
                    style={style.imagebackground}>
                    <ScrollView>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require("../assets/profile.png")}
                                style={{ height: 60, width: 60, marginLeft: 15, marginTop: 20 }}
                            />
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 28, color: "white" }}>   Hi Fulan,</Text>
                                <Text style={{ opacity: 0.4, color: "white" }}>    How're you to day ?</Text>
                            </View>
                        </View>
                        <View style={style.view21}>
                            <Image
                                source={require("../assets/search.png")}
                                style={{ height: 20, width: 20, marginTop: 10, marginLeft: 10 }}
                            />
                            <TextInput
                                style={{ borderColor: "white", marginTop: 6, width: 200, marginLeft: 10 }}
                                placeholder="Search your target....."></TextInput>
                        </View>
                        <Text style={style.text14}>Your Target</Text>
                        <View style={style.view22}>
                            <Image
                                source={require("../assets/pencil.png")}
                                style={{ height: 20, width: 20, marginTop: 10, marginLeft: 10 }}
                            />
                            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>Membuat Aplikasi Muslim List</Text>
                            <View style={{ flexDirection: "row", marginLeft: 80 }}>
                                <TouchableOpacity onPress = {() => this.chek()}>
                                    <Image
                                         source={this.state.cheklist ? require("../assets/checkboxfilled.png") : require("../assets/kotak.png")}
                                        style={{ height: 20, width: 20, marginTop: 10, marginRight: 3 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/trash.png")}
                                        style={{ height: 20, width: 20, marginTop: 10 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.view22}>
                            <Image
                                source={require("../assets/pencil.png")}
                                style={{ height: 20, width: 20, marginTop: 10, marginLeft: 10 }}
                            />
                            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>Membuat Aplikasi Muslim List</Text>
                            <View style={{ flexDirection: "row", marginLeft: 80 }}>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/checkboxfilled.png")}
                                        style={{ height: 20, width: 20, marginTop: 10, marginRight: 3 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/trash.png")}
                                        style={{ height: 20, width: 20, marginTop: 10 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.view22}>
                            <Image
                                source={require("../assets/pencil.png")}
                                style={{ height: 20, width: 20, marginTop: 10, marginLeft: 10 }}
                            />
                            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>Membuat Aplikasi Muslim List</Text>
                            <View style={{ flexDirection: "row", marginLeft: 80 }}>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/checkboxfilled.png")}
                                        style={{ height: 20, width: 20, marginTop: 10, marginRight: 3 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/trash.png")}
                                        style={{ height: 20, width: 20, marginTop: 10 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.view22}>
                            <Image
                                source={require("../assets/pencil.png")}
                                style={{ height: 20, width: 20, marginTop: 10, marginLeft: 10 }}
                            />
                            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>Membuat Aplikasi Muslim List</Text>
                            <View style={{ flexDirection: "row", marginLeft: 80 }}>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/checkboxfilled.png")}
                                        style={{ height: 20, width: 20, marginTop: 10, marginRight: 3 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/trash.png")}
                                        style={{ height: 20, width: 20, marginTop: 10 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.view22}>
                            <Image
                                source={require("../assets/pencil.png")}
                                style={{ height: 20, width: 20, marginTop: 10, marginLeft: 10 }}
                            />
                            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>Membuat Aplikasi Muslim List</Text>
                            <View style={{ flexDirection: "row", marginLeft: 80 }}>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/checkboxfilled.png")}
                                        style={{ height: 20, width: 20, marginTop: 10, marginRight: 3 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/trash.png")}
                                        style={{ height: 20, width: 20, marginTop: 10 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.view22}>
                            <Image
                                source={require("../assets/pencil.png")}
                                style={{ height: 20, width: 20, marginTop: 10, marginLeft: 10 }}
                            />
                            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>Membuat Aplikasi Muslim List</Text>
                            <View style={{ flexDirection: "row", marginLeft: 80 }}>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/checkboxfilled.png")}
                                        style={{ height: 20, width: 20, marginTop: 10, marginRight: 3 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/trash.png")}
                                        style={{ height: 20, width: 20, marginTop: 10 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.view22}>
                            <Image
                                source={require("../assets/pencil.png")}
                                style={{ height: 20, width: 20, marginTop: 10, marginLeft: 10 }}
                            />
                            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>Membuat Aplikasi Muslim List</Text>
                            <View style={{ flexDirection: "row", marginLeft: 80 }}>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/checkboxfilled.png")}
                                        style={{ height: 20, width: 20, marginTop: 10, marginRight: 3 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/trash.png")}
                                        style={{ height: 20, width: 20, marginTop: 10 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.view22}>
                            <Image
                                source={require("../assets/pencil.png")}
                                style={{ height: 20, width: 20, marginTop: 10, marginLeft: 10 }}
                            />
                            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>Membuat Aplikasi Muslim List</Text>
                            <View style={{ flexDirection: "row", marginLeft: 80 }}>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/checkboxfilled.png")}
                                        style={{ height: 20, width: 20, marginTop: 10, marginRight: 3 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/trash.png")}
                                        style={{ height: 20, width: 20, marginTop: 10 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.view22}>
                            <Image
                                source={require("../assets/pencil.png")}
                                style={{ height: 20, width: 20, marginTop: 10, marginLeft: 10 }}
                            />
                            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>Membuat Aplikasi Muslim List</Text>
                            <View style={{ flexDirection: "row", marginLeft: 80 }}>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/checkboxfilled.png")}
                                        style={{ height: 20, width: 20, marginTop: 10, marginRight: 3 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require("../assets/trash.png")}
                                        style={{ height: 20, width: 20, marginTop: 10 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </View>
        )
    }
}

export default Home;
