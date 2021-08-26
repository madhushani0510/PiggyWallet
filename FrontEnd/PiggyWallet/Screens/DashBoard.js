import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet,Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button} from 'native-base';
import { color } from 'react-native-reanimated';


export default class DashBoard extends Component {

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
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
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
         
    
    
      }
      viewRecord(nic){
        this.props.navigation.navigate('LoadData', { nic: nic })
      }

      addExpense(nic){

        this.props.navigation.navigate('Expenses', { nic: nic })
      }

      addIncome(nic){
        this.props.navigation.navigate('Income', { nic: nic })
      }

   
      render() {


        const { nic } = this.props.route.params
        return (

            
          <SafeAreaView style={styles.container1}>
            <Content style={styles.root}>
            <Text
              style={styles.Title}>Welcome to Piggy Wallet </Text>
               
               <Image
                style={styles.Piggy} 
                source={require('../assets/piggySave.png')}
                />
              <Text
                    style={styles.UserID}>USER ID : {nic}</Text>
              
              <Button style={styles.expenseButton}
                  onPress={()=>{
                    this.addExpense(nic)
                  }}
                >
                <Text style={{fontSize:18}}>Expenses</Text>
                </Button>

                <Button style={styles.incomeButton}
                  onPress={()=>{
                    this.addIncome(nic)
                  }} >
                  <Text style={{fontSize:18}}>Income</Text>
                </Button>

              <Form onSubmit={this.submitHandler}>
                
    
                <Button style={styles.ViewRecords}
                  onPress={()=>{
                    this.viewRecord(nic)
                  }}
                >
                  <Text style={{fontSize:18}}>View Records</Text>
                </Button>
                    
    
              </Form>
            </Content>
          </SafeAreaView>
          
        );
      }
    }




  const styles = StyleSheet.create({
    Title:{
        color:'#000000',
        fontSize: 20,
        marginLeft: 45,
        marginTop: 20,
        marginBottom:20,
        fontFamily:'monospace',
        fontWeight:"bold"
    },
    Piggy: {
                width: 250,
                height: 250,
                marginLeft:50
            },
   
    UserID:{
      marginTop:40,
        marginLeft:15,
        fontSize:15,
        fontWeight: "bold"
    },
    container1: {
      flex: 1,
    },
   
    New:{
      paddingLeft:20,
      borderWidth:1,
      backgroundColor:'#fff'
    },
    expenseButton:{
        marginTop:15,
        alignSelf:'stretch',
        backgroundColor: '#f44336',
        borderRadius:30,
        justifyContent:'center'
        
    },

    incomeButton:{
        marginTop:15,
        alignSelf:'stretch',
        backgroundColor: '#29bf12',
        borderRadius:30,
        justifyContent:'center'
      
    

    },
    ViewRecords: {
      color: '#eb4034',
      backgroundColor: '#FFA400',
      alignSelf:'stretch',
      borderRadius:30,
      marginTop:15,
      justifyContent:'center'
    

    },
    ExButtonText:{
        marginLeft:10,
        
    },
    root:{
  top:10,
  backgroundColor:'#F4D03F'
    }
  
  })
  