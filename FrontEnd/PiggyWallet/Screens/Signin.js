import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import SafeAreaView from 'react-native-safe-area-view';
import Login from './Login';


export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nic:'',
        name:'',
        email:'',
        password:''
    };
  }

  saveCustomer = () => {

    fetch('http://192.168.8.105:3000/user/saveuser', {
    method: 'POST',
    body: JSON.stringify({
      nic: this.state.nic ,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }),
    headers: {
       Accept : 'application/json',
      'Content-type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json),
    this.props.navigation.navigate(Login),
    alert("Successfully Registered")
    );
  }



  render() {
    return (
        
        <SafeAreaView style={styles.container1}>
        <Content style={styles.SignBG}>

            <Text style={styles.textsign}>Sign Up</Text>

            <Text style={styles.CreateAccount}>Create your account</Text>

          <Form onSubmit = {this.submitHandler}>
            <Item style={styles.inputfield}>
              <Input placeholder=" NIC"  value={this.state.nic}
                          type = "text"
                          name = "nic"
                          onChangeText={(value) => {
                              this.setState({
                                nic: value
                              })
                          }}/>
            </Item>
            <Item style={styles.inputfield}>
              <Input placeholder=" Name" value={this.state.name}
                          type = "text"
                          name = "name"
                          onChangeText={(value) => {
                              this.setState({
                                name: value
                              })
                          }}/>
            </Item>
            <Item style={styles.inputfield}>
              <Input placeholder="Email" value={this.state.email}
                          type = "text"
                          name = "email"
                          onChangeText={(value) => {
                              this.setState({
                                email: value
                              })
                          }}/>
            </Item>
            <Item style={styles.inputfield} >
              <Input placeholder="Password" value={this.state.password}
                          type = "text"
                          name = "password"
                          onChangeText={(value) => {
                              this.setState({
                                password: value
                              })
                          }}/>
            </Item>
            <Button style={styles.containerr} onPress={this.saveCustomer}
                        type = "submit">
            <Text>Continue</Text>
          </Button>
          </Form>
        </Content>
        </SafeAreaView>

      
    );
  }
}
const styles = StyleSheet.create({
    containerr:{
      marginTop:40,
      alignSelf:'stretch',
      backgroundColor: '#FFA400',
      borderRadius:30,
      justifyContent:'center',
      marginRight:15,
      marginLeft:15
    },

    inputfield:{
      borderRadius:30,
      backgroundColor:'#e0e0e0',
      marginTop:5,
      marginRight:10,
      height:40,
    },

    SignBG:{
      backgroundColor:'#F4D03F'
    },

    textsign:{
      marginLeft:20,
      marginBottom:10,
      marginTop:10,
      fontSize:22,
      fontWeight:'bold'
    },

    CreateAccount:{
      marginLeft:20,
      marginBottom:20
     

    },

    container1: {
        flex: 1,
      },

      
})
