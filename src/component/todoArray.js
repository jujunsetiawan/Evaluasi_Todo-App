import React, {Component} from 'react';
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import {styles} from '../../styles/styles';

export class TodoArray extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: [
        {
          title: 'Belajar React Native',
          checked: false,
        },
        {
          title: 'Belajar Async Storage',
          checked: false,
        },
        {
          title: 'Belajar API',
          checked: false,
        },
      ],
      selectedIndex: 0,
      showModal: false,
    };
  }

  addTodo() {
    const {input, todos} = this.state;

    if (input == '') {
      alert('Tolong isi');
    } else {
      this.setState({
        todos: [{title: input, checked: false}, ...todos],
      });
    }
  }

  deleteTodo(id) {
    const {todos} = this.state;
    if (todos.length > 0) {
      this.setState({
        todos: todos.filter((todo, index) => index !== id),
      });
    } else {
      this.setState({
        todos: [],
      });
    }
  }

  checkTodo(id) {
    const {todos} = this.state;
    this.setState({
      todos: todos.map((todo, index) => {
        return {
          title: todo.title,
          checked: index == id ? !todo.checked : todo.checked,
        };
      }),
    });
  }

  updateTodo(text) {
    const {todos, selectedIndex} = this.state;
    this.setState({
      todos: todos.map((todo, index) => {
        return {
          title: index != selectedIndex ? todo.title : text,
          checked: todo.chcked,
        };
      }),
    });
  }
  showModal(id) {
    this.setState({selectedIndex: id, showModal: true});
  }

  render() {
    const {todos, selectedIndex, showModal} = this.state;
    return (
      <View style={styles.container}>
        <Text>Todo Array</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={[styles.textInput, {flex: 1}]}
            placeholder="Tell me what to do?"
            onChangeText={(value) => this.setState({input: value})}
          />
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => this.addTodo()}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        {todos.length == 0 ? (
          <View>
            <Text>Kosong</Text>
          </View>
        ) : (
          <View>
            <Modal animationType="slide" transparent={true} visible={showModal}>
              <View style={{margin: 64}}>
                <View style={styles.modalContainer}>
                  <TouchableOpacity
                    onPress={() => this.setState({showModal: false})}
                    style={styles.modalClose}>
                    <Text>X</Text>
                  </TouchableOpacity>
                  <Text>Update Todo</Text>
                  <TextInput
                    onChangeText={(text) => this.updateTodo(text)}
                    value={todos[selectedIndex].title}
                    style={styles.textInput}
                  />
                </View>
              </View>
            </Modal>
            <ScrollView>
              {todos.map((todo, index) => (
                <View style={styles.todoItem} key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      this.showModal(index);
                    }}>
                    <Image
                      source={require('../../assets/icon/underline-button.png')}
                      style={styles.smallIcon}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      flex: 1,
                      textDecorationLine: todo.checked
                        ? 'line-through'
                        : 'none',
                    }}>
                    {todo.title}
                  </Text>
                  <TouchableOpacity onPress={() => this.checkTodo(index)}>
                    <Image
                      source={
                        todo.checked
                          ? require('../../assets/icon/check-box.png')
                          : require('../../assets/icon/blank-check-box.png')
                      }
                      style={styles.smallIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.deleteTodo(index)}>
                    <Image
                      source={require('../../assets/icon/rubbish-bin-delete-button.png')}
                      style={styles.smallIcon}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}

export default TodoArray;