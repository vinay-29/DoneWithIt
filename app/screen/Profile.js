import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

function Profile(props) {
    return (
       
<View style={styles.root}>
        <LinearGradient 
         colors={["#0033ff","#6bc1ff"]}
         style={{height: "20%"}}
        />

<View style={{alignItems:"center",marginTop:-50}}>
<Image style={{width: 150 , height: 150, borderRadius:75}}
        source={require('../assets/MyBike.jpg')}
          />
</View>

<Text style= {{ fontSize: 25, color: "#000" }}> Hello Friends </Text>
        
</View>
    );
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    topBox: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 18,
    marginTop: 0,
        width: 200,
        height: 80,
    backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    otherContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    backgroundColor: 'green',
    },
});

export default Profile;