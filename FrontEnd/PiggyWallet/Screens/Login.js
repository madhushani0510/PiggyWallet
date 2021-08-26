import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import SafeAreaView from 'react-native-safe-area-view';
import Signin from './Signin';
import Home from './Home';
import DashBoard from './DashBoard';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nic: '',
      password: ''
    };
  }

  getData = () => {
    fetch('http://192.168.8.105:3000/user/oneuser/' + this.state.nic, { method: 'GET' })
      .then((response) => response.json())
      .then((json) => this.Passwordmatch(json.password))

  }
// Homepage *************************************************************************************************
  Passwordmatch = (password) => {
    if (this.state.password == password) {
      console.log("Load DashBoard Screen")
      //   this.storeData()
      this.props.navigation.navigate('DashBoard', { nic: this.state.nic })
      //   this.props.navigation.navigate('ReportScreen)
      //   this.clear();
    } else {
      console.log("not logged in");
      alert("Incorrect Password");
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state);
  }

  LoginScreenoo = () => {
    this.props.navigation.navigate(Signin);
  }

  render () {
    return (

      <SafeAreaView style={styles.container1}>
        <Content style={styles.AppBG}>
          <Text style={styles.LoginSt}>Piggy Wallet</Text>
          <Text style={styles.LoginCon}>Please Log in to Continue</Text>
          <Image
                style={styles.PiggyLog} 
                source={require('../assets/piggylogin.png')}
                />

          <Form onSubmit={this.submitHandler}>
            <Item>
              <Input style={styles.containerrNIC} placeholder="NIC" value={this.state.nic}
                type="text"
                name="nic"
                onChangeText={(value) => {
                  this.setState({
                    nic: value
                  })
                }} />
            </Item>
            <Item last>
              <Input style={styles.containerrPassword} placeholder="Password" value={this.state.password}
                type="text"
                name="password"
                onChangeText={(value) => {
                  this.setState({
                    password: value
                  })
                }} />
            </Item>
            <Button style={styles.containerr1} onPress={this.getData}
              type="submit">
              <Text style={{fontSize:15,color:'#FFFFFF', fontWeight:'bold'}}>Login</Text>
            </Button>
            <Button style={styles.containerr2} onPress={this.LoginScreenoo}
              type="submit">
              <Text style={{fontSize:15,color:'#FFFFFF', fontWeight:'bold'}}>Sign Up</Text>
            </Button>
           
          </Form>
        </Content>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  containerr1: {
    marginTop:30,
        alignSelf:'stretch',
        backgroundColor: '#FFA400',
        borderRadius:30,
        justifyContent:'center',
        marginRight:15,
        marginLeft:15,
        height:38
        
  },

  containerr2: {
    marginTop:15,
        alignSelf:'stretch',
        backgroundColor: '#FFA400',
        borderRadius:30,
        justifyContent:'center',
        marginRight:15,
        marginLeft:15,
        height:38
        
  },
  container1: {
    flex: 1,
  },

  containerrNIC:{
    backgroundColor: '#f0f4c3',
    justifyContent:'center',
    marginTop:20,
    borderRadius:30,
    marginRight:15,
    height:38
  },

  containerrPassword:{
    backgroundColor: '#f0f4c3',
    justifyContent:'center',
    marginTop:10,
    borderRadius:30,
    marginRight:15,
    height:38
    

  },

  AppBG:{
    backgroundColor:'#F4D03F'
  },
  LoginSt:{
    color:'#000000',
    fontSize:30,
    marginLeft:90,
    marginTop:12,
    fontWeight:'bold'
  },

  LoginCon:{
    color:'#757575',
    fontSize:18,
    marginLeft:70,
    marginTop:5,
  },
 
  PiggyLog: {
    width: 280,
    height: 280,
    marginLeft:30,
    
},


 
})

