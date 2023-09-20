import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Hussnain Cheema</Text>
      <Text style={styles.paraStyle}>I am React Native Developer🤩</Text>

      <View>
        <Image 
        style={styles.imgStyle}
        source={require("../assets/HussnainProfile.jpg")}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={styles.paraStyle}>I am an energetic and imaginative young React Native developer. I
        am able to work alongside other talented IT professionals in creating
        Apps to the very highest standards. Right now I am looking for a
        position of React Native with an exciting company that wants to attract
        talented people.</Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on Social Network</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL("https://www.linkedin.com/in/hussnain-cheema-711016186/")}>
          <Image 
            style={styles.iconStyle}
            source={require("../assets/Linkedin.png")}
          />
       </TouchableOpacity>

       <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL("https://www.facebook.com/profile.php?id=100011657684339")}>
          <Image 
            style={styles.iconStyle}
            source={require("../assets/Facebook.png")}
          />
       </TouchableOpacity>

       <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL("https://www.youtube.com/channel/UCBkJltnfUR21-LoiZHB3IWg")}>
          <Image 
            style={styles.iconStyle}
            source={require("../assets/Youtube.png")}
          />
       </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 10,
    fontFamily: "JosefinSans_700Bold",
    color: "#4c5dab"
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 22,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginVertical: 15,
    fontFamily: "JosefinSans_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
})