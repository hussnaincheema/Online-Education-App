import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../api/Courseapi'


export default function Course({navigation}) {
  const courseCard = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.cardHeader}>{item.title}</Text>
          <Text style={styles.cardDesc}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress = { () => navigation.navigate("CourseDetails", { courseId : item.id, }) }>
              <Text style={styles.buttonText}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={Courses}
        renderItem={courseCard}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  cardHeader: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#344055",
    textTransform: "uppercase",
    paddingBottom: 15,
    textAlign: "center",

  },
  cardDesc: {
    textAlign: "center",
    paddingBottom: 15,
    fontSize: 16,
    color: "#7d7d7d",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingHorizontal: 18,
    paddingVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#eee",
  },

});