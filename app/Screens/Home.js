import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../Config/Colors'

export default function Home() {
    const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";
    return (
        <View style={styles.Container}>
            <Image
                style={styles.homeHeader}
                source={require('../assets/Home-Image.jpg')}
            />
            <View style={styles.descriptionPart}>
                <Text style={styles.homeText}>Welcome to</Text>
                <Text style={styles.homeTextTwo}>E-learning App</Text>
                <Text style={styles.homeDescription}>{description}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    descriptionPart: {
        //marginTop: -70, 
        textAlign: 'center',
        justifyContent: "center", 
        display: "flex",
        marginHorizontal: 20,
    },
    homeHeader: {
        position: 'relative',
        top: -50,
        width: '90%',
        height: '35%',
        borderRadius: 25,
        borderColor: Colors.darkblue,
        borderWidth: 5,
    },
    homeText: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        //marginTop: "25",
    },
    homeTextTwo: {
        textTransform: 'uppercase',
        color: Colors.darkblue,
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
    },
    homeDescription: {
        fontSize: 20,
        textAlign: "left", 
        lineHeight: 22,   
    }
})