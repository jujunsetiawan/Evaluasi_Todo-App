import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';

class Todo3 extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      todos: [],
      loading: true,
      photo: '',
      task: '',
      desc: '',
      modal: false,
    };
  }

  addTodo() {
    const todo = {
      task: this.state.task,
      desc: this.stack.desc,
      is_done: 0,
    };
    fetch('http://restful-api-laravel-7.herokuapp.com/api/todo', {
      method: 'POST',
      body: this.createFormData(this.state.photo, todo),
      headers: {
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('upload succes', response);
        alert('Upload success!');
      })
      .catch((error) => {
        console.log('upload error', error);
        alert('Upload failed!');
      });
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  setLoading(loading) {
    this.setState({loading: loading});
  }

  createFormData = (photo, body) => {
    const data = new FormData();

    data.append('image', {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === 'android'
          ? photo.uri
          : photo.uri.replace('file://', ''),
    });

    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });

    console.log(data);
    return data;
  };

  getToken() {
    AsyncStorage.getItem('token')
      .then((token) => {
        if (token !== null) {
          this.setState({token: token});
        } else {
          this.logOut();
        }
      })
      .then(() => this.getTodos());
    //setelah token muncul maka ambil data todo
  }

  getTodos() {
    this.setLoading(true);
    console.log(this.state.token);
    fetch('http://restful-api-laravel-7.herokuapp.com/api/todo/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const {status} = responseJson;
        if (status) {
          alert(status);
          this.logOut();
        } else {
          this.setState({todos: responseJson});
          console.log(responseJson);
          this.setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // checkTodo(id) {
  //   this.setLoading(true);

  //   //mengambil data dari state intuk difilter berdasarkan id
  //   const todo = this.state.todos.find((todo) => todo.id == id);

  //   //ganti kondisi todo
  //   todo.is_done = !todo.is_done;

  //   console.log(todo);

  //   //update todo berdasarkan data yg di update
  //   fetch(`http://restful-api-laravel-7.herokuapp.com/api/todo/${id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify(todo),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${this.state.token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       this.getTodos();
  //     });
  // }

  deleteTodo(id) {
    this.setLoading(true);
    fetch(`http://restful-api-laravel-7.herokuapp.com/api/todo/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const {status} = json;
        if (status == 'success') {
          this.getTodos();
        } else {
          alert('Gagal menghapus');
        }
      });
  }
  componentDidMount() {
    this.getToken();
  }

  logOut() {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View >
        {/* <Modal visible={true}>
          <View>
            <Text> Todo3 </Text>
            <Text onPress={() => this.handleChoosePhoto()}>Upload image </Text>

            <Image
              source={{uri: this.state.photo.uri}}
              style={{width: 100, height: 100}}
            />
            <Button title="Add Todo" onPress={() => this.handleChoosePhoto()} />
          </View>
        </Modal> */}
        <ScrollView >
          <Text >What's Up, Jujun </Text>
          <View>
            <View >
              <Text >TODAY TASKS</Text>
              <View>
                {this.state.loading ? (
                  <ActivityIndicator color="red" />
                ) : this.state.todos.length === 0 ? (
                  <Text>Kosong</Text>
                ) : (
                  this.state.todos.map((todo, index) => (
                    <View
                      key={todo.id}
                      style={{alignItems: 'flex-start'}}>
                      <Image
                        source={{
                          uri: `http://restful-api-laravel-7.herokuapp.com/img/${todo.image}`,
                        }}
                        style={{width: 64, height: 64, borderRadius: 10}}
                      />
                      <View style={{marginHorizontal: 8, flex: 1}}>
                        <Text >{todo.task}</Text>
                        <Text >{todo.desc}</Text>
                        <Text >
                          {todo.is_done ? 'sudah' : 'belum'}
                        </Text>
                      </View>

                      <TouchableOpacity
                        onPress={() => this.deleteTodo(todo.id)}>
                        <Image
                          source={require('../assets/trash.png')}
                          style = {{height: 50, width:50}}
                        />
                      </TouchableOpacity>
                    </View>
                  ))
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Todo3;
