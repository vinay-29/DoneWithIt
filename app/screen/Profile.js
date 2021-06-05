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
        
</View>
    );
}

const styles = StyleSheet.create({
    root:{
        flex:1
    }
});

export default Profile;