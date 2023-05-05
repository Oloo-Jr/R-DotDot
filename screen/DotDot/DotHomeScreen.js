import React, {useState,useRef,useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Card from '../../components/card';
import { Dimensions } from 'react-native';
import TitleText from '../../components/TitleText';
import MapView, { PROVIDER_GOOGLE, } from 'react-native-maps';
import * as Location from 'expo-location';


const DotHomeScreen =({ navigation }) => {

    const [latlng, setLatLng] = useState({})

    const checkPermission = async () => {
      const hasPermission = await Location.requestForegroundPermissionsAsync();
      if (hasPermission.status === 'granted') {
        const permission = await askPermission();
        return permission
      }
      return true
    };
  
    const askPermission = async () => {
      const permission = await Location.requestBackgroundPermissionsAsync();
      return permission.status === 'granted';
    };
  
  
    const getLocation = async () => {
      try {
        const { granted } = await Location.requestBackgroundPermissionsAsync();
        if (!granted) return;
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
        setLatLng({ latitude: latitude, longitude: longitude })
      } catch (err) {
  
      }
    }
  
    const _map = useRef(1);
  
    useEffect(() => {
      checkPermission();
      getLocation()
      console.log(latlng)
        , []
    })
   
    return (


        <View style={styles.container}>


<View style={styles.buttonView}>
            <TouchableOpacity   onPress={() => { navigation.navigate("DotGigScreen", { state: 0 }) }}>

                <Card style={styles.button}>

                    
                        <TitleText style={styles.buttonText}>Check Requests</TitleText>
                    

                </Card>

            </TouchableOpacity>
            </View>


            <MapView
                ref={_map}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={true}
                followsUserLocation={true}
                
            > 
        
            </MapView>


        </View>





    )
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
       // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        flex: 1,
        
        
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 48,
       shadowOpacity: 0.2,
    },
    buttonView: {


        zIndex: 30,
        position: 'absolute',
        bottom: 92,
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 48,
        
    },

    buttonText: {
      //  fontWeight: 'bold',
        fontFamily: 'Lexend-light'
        
    },
    map: {
        height: "100%",
        width: "100%",
      },



});

export default DotHomeScreen;