import React from "react"
import { NavigationContainer, useLinkProps } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {createDrawerNavigator} from "@react-navigation/drawer"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Login from "./login"
import Home from "./home"
import Register from "./register"
import Forgot from "./forgotpassword"
import DrawerContent from "./drawer"
import Todo1 from "./todo1"
import Todo2 from "./todo2"
import Todo3 from "./todo3"
import Profile from "./profile"

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();

const Bawah = () => {
    return(
        <Bottom.Navigator>
            <Bottom.Screen name = "Home" component = {Home}/>
            <Bottom.Screen name = "Todo1" component = {Todo1}/>
            <Bottom.Screen name = "Todo2" component = {Todo2}/>
            <Bottom.Screen name = "Todo3" component = {Todo3}/>
            <Bottom.Screen name = "Profile" component = {Profile}/>
        </Bottom.Navigator>
    )
}

const RootDrawer = () => {
    return (
        <Drawer.Navigator drawerContent = {(props) => <DrawerContent {...props}/>}>
            <Drawer.Screen name = "Home" component = {Bawah}/>
        </Drawer.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={RootDrawer} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation;