import React, { Component } from 'react'
import { Text, View, TextInput, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native'
import style from "./style"
import LinearGradient from "react-native-linear-gradient"

class Todo1 extends Component {
    constructor() {
        super()
        this.state = {
            todo: ["saya", "dia", "kamu"],
            text: "",
            cheklist: false
        }
    }

    addtodo() {
        const { text, todo } = this.state
        if (text == "") {
            alert("Harap Di Isi")
        } else {
            this.setState({
                todo: [text, ...todo]
            })
        }
    }

    removetodo(index) {
        const { todo } = this.state
        this.setState({
            todo: todo.filter((value, id) => id != index)
        })
    }

    chek() {
        this.setState({
            cheklist: !this.state.cheklist
        })
    }
    render() {
        return (
            <View>
                <LinearGradient
                    colors = {["#037ffc", "#52fade"]}
                    style={style.imagebackground2}>
                    <View style={style.view8}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>TODO 1</Text>
                    </View>
                    <ScrollView style={style.view9}>
                        <Text style={style.text1}>ADD TODO</Text>
                        <View style={style.view11}>
                            <Image
                                source={require("../assets/pencil.png")}
                                style={{ width: 15, height: 15 , marginLeft: 10}}
                            />
                            <TextInput
                                style={{ borderColor: "white", marginTop: 6, width: 200 }}
                                placeholder="Add Todo"
                                onChangeText={(inputan) => this.setState({ text: inputan })}
                            />
                            <TouchableOpacity
                                onPress={() => this.addtodo()}
                                style={style.view10}>
                                <Text style={{ color: "white" }}>Add</Text>
                            </TouchableOpacity>
                        </View>
                        {this.state.todo.map((value, index) => (
                            <View key={index} style={style.view12}>
                                <View style={{ justifyContent: "space-between", flexDirection: "row", marginLeft: 10 }}>
                                    <Image
                                        source={require("../assets/list.png")}
                                        style={{ width: 15, height: 15 }}
                                    />
                                    <Text style={{ marginLeft: 10 }}>{value}</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", width: 33, marginRight: 7 }}>
                                    <TouchableOpacity onPress={() => this.chek()}>
                                        <Image
                                            source={this.state.cheklist ? require("../assets/checkboxfilled.png") : require("../assets/kotak.png")}
                                            style={{ width: 15, height: 15 }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.removetodo(index)}>
                                        <Image
                                            source={require("../assets/trash.png")}
                                            style={{ width: 15, height: 15 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </LinearGradient>
            </View>
        )
    }
}

export default Todo1;
