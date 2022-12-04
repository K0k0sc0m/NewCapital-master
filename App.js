
import React from 'react';   
import { StyleSheet ,  View , Pressable , Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import { Text , Image, Button , Divider } from 'react-native-elements';

export default function App() {


  return (

    <NavigationContainer>
    
      <View style={styles.container}>

        <View style={styles.header}>
          <Image style={styles.logo} source={require('./img/smalllogo.png')} />
          <Text style={styles.cname}>New Capital</Text>
          <Button 
            title='Log In' 
            color='#525df9'
            onPress={() => Alert.alert('Button with adjusted color pressed')} >
          </Button>
        </View>

        <Divider style={styles.divider}></Divider>
        
        <Picker
          style={styles.dropdown}>
          <Picker.Item label='Feature Request (Exchange)' value='Feature Request (Exchange)'/>
          <Picker.Item label='Listing Request (Exchange)' value='Listing Request (Exchange)'/>
          <Picker.Item label='Feature Request (Source Force)' value='Feature Request (Source Force)'/>
          <Picker.Item label='TWINS Coin Suggestions' value='TWINS Coin Suggestions'/>
          <Picker.Item label='FIX Coin Suggestions' value='FIX Coin Suggestions'/>
        </Picker>

        <View style={styles.main}>

          <Text style={styles.mtxt}>Give Feedback</Text>

          <View style={styles.feedbacks}>
            <View style={styles.row}>

              <Pressable style={styles.button}>
                <Text style={styles.btntxt}>Feature Request (Exchange)</Text>
              </Pressable>

              <Pressable style={styles.button}  >
                <Text style={styles.btntxt}>Listing Request (Exchange)</Text>
              </Pressable>

              <Pressable style={styles.button} >
                <Text style={styles.btntxt}>Feature Request (Source Force)</Text>
              </Pressable>

            </View>

            <View style={styles.row}>

              <Pressable style={styles.button} >
                <Text style={styles.btntxt}>TWINS Coin Suggestions</Text>
              </Pressable>

              <Pressable style={styles.button} >
                <Text style={styles.btntxt}>FIX Coin Suggestions</Text>
              </Pressable>

            </View>

          </View>

          <Text style={styles.mtxt}>Give Feedback</Text>
          <View style={styles.feedbacks}>

            <View style={styles.row}>

              <Pressable style={styles.button1}>
                <Text style={styles.dotblue}></Text>
                <Text style={styles.btntxt}>Planned</Text>
              </Pressable>

              <Pressable style={styles.button1}>
                <Text style={styles.dotviolet}></Text>
                <Text style={styles.btntxt}>In Progress</Text>
              </Pressable>

              <Pressable style={styles.button1}>
                <Text style={styles.dotgreen}></Text>
                <Text style={styles.btntxt}>Complete</Text>
              </Pressable>

            </View>

          </View>

        </View>

      </View>

    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: '5rem',
    marginRight: '5rem',
    alignContent: 'center',
    
  },

  row: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  header: {
    marginTop: '2rem',
    paddingBottom: '2rem',
    paddingRight: '1rem',
    flexDirection: 'row',
  },

  divider: {
    color: 'grey',
  },

  logo: {
    marginLeft: '1%',
    height: 40,
    width: 40,
  },

  cname: {
    marginTop: '0.3rem',
    marginLeft: '1rem',
    marginRight: 'auto',
    wordSpacing: '0.3rem',
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 25,
  },

  dropdown: {
    marginTop: '1rem',
    height: 40, 
    width: 320,
    fontFamily: 'SFUIDisplay-Bold', 
    fontWeight: 500,
    letterSpacing: '0.1rem',
    wordSpacing: '0.3rem',
    fontSize: 18,
    cursor: 'pointer',
  },

  main: {
    marginTop: '5rem',
  },

  mtxt: {
    marginLeft: '2rem',
    marginBottom: '1rem',
    fontFamily: 'SFUIDisplay-Bold',
    fontWeight: 500,
    letterSpacing: '0.1rem',
    wordSpacing: '0.3rem',
    fontSize: 20,
    color: '#888',
  },

  feedbacks: {
    marginLeft: '1rem',
    marginBottom: '3rem',
  },

  button: {
    width: '25rem',
    marginTop: '2rem',
    marginLeft: '5%',
    marginRight: '5%',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 8px darkgrey',
  },

  button1: {
    flexDirection: 'row',
    width: '25rem',
    marginTop: '2rem',
    marginLeft: '5%',
    marginRight: '5%',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 8px darkgrey',
  },

  btntxt: {
    fontFamily: 'SFUIDisplay-Bold',
    fontWeight: 500,
    letterSpacing: '0.1rem',
    wordSpacing: '0.3rem',
    fontSize: 18,
  },

 dotblue: {
  backgroundColor: '#1fa0ff',
  marginTop: 6,
  marginRight: 20,
  width: '8px',
  height: '8px',
  borderRadius: '100%',
 },

 dotviolet: {
  backgroundColor: '#c17aff',
  marginTop: 6,
  marginRight: 20,
  width: '8px',
  height: '8px',
  borderRadius: '100%',
 },

 dotgreen: {
  backgroundColor: '#6dd345',
  marginTop: 6,
  marginRight: 20,
  width: '8px',
  height: '8px',
  borderRadius: '100%',
 },

});
