import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, FlatList, ScrollView, SafeAreaView, RefreshControl } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, CardItem, Text, Left, Body, Right, Button, Title, Footer, FooterTab, Icon } from 'native-base';


export default class ExpensesScren extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            refreshing: false,
        }

    }



    getData(nic) {

        return fetch('http://192.168.8.105:3000/exchange/oneexchange/' + nic)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,

                }, function () {
                });

            })
            .catch((error) => {
                console.error(error);
            });
    }
    flatlistref = null;
    render() {
        const { nic } = this.props.route.params
        return (
            <Container style={styles.root}>
                <Button style={styles.RecodsButton}
                    onPress={() => {
                        this.getData(nic)
                    }}
                >
                    <Text style={{fontSize:18}}>View Records</Text>
                </Button>
                <View style={{ flex: 1 }}>

                    <FlatList
                        ref={(ref) => this.flatlistref = ref}
                        style={styles.Fatlist}
                        data={this.state.dataSource}
                        renderItem={({ item }) =>
                            <View style={styles.Card}>

                                <Text style={styles.Date}>{item.date}</Text>
                                <Text style={styles.Value}>{item.value}</Text>
                                <Text style={styles.Type}>Expense Or InCome : {item.type}</Text>
                                <Text style={styles.Category}>Transaction Category : {item.category}</Text>
                            </View>

                        }

                        keyExtractor={(item, index) => index.toString()} />

                </View>
            </Container>

        )
    }
}


const styles = StyleSheet.create({
Card:{
    marginTop:25,
    backgroundColor:'#F9FC9F'
},
Date:{
    
    fontSize:18,
    marginLeft:8
},

Value:{
    marginTop:20,
    marginLeft:20
},

Type:{
    marginTop:10,
    marginLeft:20
},

Category:{
    marginTop:10,
    marginLeft:20 
},

RecodsButton:{
    
    backgroundColor: '#ffa400',
      alignSelf:'stretch',
      borderRadius:30,
      marginTop:10,
      justifyContent:'center'
},

root:{
    top:10,
    backgroundColor:'#F4D03F'
      },
    
})