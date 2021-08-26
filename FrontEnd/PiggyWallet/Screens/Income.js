import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { color } from 'react-native-reanimated';

export default class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Income',
      uid: '',
      category: '',
      value: '',
      date: null,
      descrpiton: ''
    };
  }
  componentDidMount() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    var todayo = mm + '/' + dd + '/' + yyyy;
    this.setState({
        date:todayo
    })
    console.log(todayo);
}
  addDailyRecord(nic) {
    fetch('http://192.168.8.105:3000/exchange/saveexchange', {
      method: 'POST',
      body: JSON.stringify({

        uid: nic,
        type: this.state.type,
        category: this.state.category,
        value: this.state.value,
        date: this.state.date,
        descrpiton: this.state.descrpiton

      }),
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      alert("Successfully Added")

  }
  
  viewRecord(nic){
    this.props.navigation.navigate('LoadData', { nic: nic })
  }
  
  render() {
    const { nic } = this.props.route.params
    return (
      <SafeAreaView style={styles.container1}>
        <Content style={styles.root}>
          <Text style={styles.UserID}>User ID : {nic}</Text>
          <Image
                style={styles.Income} 
                source={require('../assets/Income.png')}
                />

          <Form onSubmit={this.submitHandler}>
            <Item  style={styles.InputFeilds}>
              <Input placeholder='Amount'
                style={styles.New}
                value={this.state.value}
                type="text"
                name="value"
                onChangeText={(value) => {
                  this.setState({
                    value: value
                  })
                }}
              />
            </Item>

            <Item style={styles.InputFeilds}>
              <Input placeholder='Description'
                style={styles.New}
                value={this.state.descrpiton}
                type="text"
                name="descrpiton"
                onChangeText={(value) => {
                  this.setState({
                    descrpiton: value
                  })
                }}

              />
            </Item>

            <Item  style={styles.InputFeilds}>
              <Input placeholder='Category'
                style={styles.New}
                value={this.state.category}
                type="text"
                name="category"
                onChangeText={(value) => {
                  this.setState({
                    category: value
                  })
                }}
              />
            </Item>
            <Item  style={styles.InputFeilds}>
              <Input placeholder='Type'
                style={styles.New}
                value={this.state.type}
                type="text"
                name="type"
                onChangeText={(value) => {
                  this.setState({
                    type: value
                  })
                }}
              />
            </Item>
            <Button style={styles.containerAdd}
              onPress={()=>{
                this.addDailyRecord(nic)
              }}
            >
              <Text>Add A Record</Text>
            </Button>

            <Button style={styles.containerView}
              onPress={()=>{
                this.viewRecord(nic)
              }}
            >
              <Text>View Records</Text>
            </Button>


          </Form>
        </Content>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  UserID:{
    marginLeft:15,
    fontSize:15,
    fontWeight: "bold"
},

  
containerAdd: {
  marginTop:20,
      alignSelf:'stretch',
      backgroundColor: '#FFA400',
      borderRadius:30,
      marginRight:10,
      marginLeft:10,
      justifyContent:'center'
},

containerView: {
  marginTop:10,
      alignSelf:'stretch',
      backgroundColor: '#FFA400',
      borderRadius:30,
      marginRight:10,
      marginLeft:10,
      justifyContent:'center'
},
  container1: {
    flex: 1,
  },
  InputFeilds:{
    borderRadius:30,
    backgroundColor:'#e0e0e0',
    marginTop:5,
    marginRight:10,
    height:40,
  },
  
  root:{
    top:10,
    backgroundColor:'#F4D03F'
  },
  Income: {
    width: 300,
    height: 300,
    marginLeft:30
    
},

})

