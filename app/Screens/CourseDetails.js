import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Courses from '../api/Courseapi';

export default function CourseDetails({ navigation, route }) {
  const id = route.params.courseId;
  //console.log(id);

  const selectedCourse = Courses.find((element) => {
    return id == element.id;
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <View>
          <Image
            style={styles.cardImage}
            source={selectedCourse.image}
            resizeMode="contain"
          />
        </View>
       
        <Text style={styles.cardHeader}>{selectedCourse.title}</Text>
        <Text style={styles.cardDesc}>{selectedCourse.description}</Text>
        <Text style={styles.cardcourse}>{selectedCourse.course1}</Text>
        <Text style={styles.cardcourse}>{selectedCourse.course2}</Text>
        <Text style={styles.cardcourse}>{selectedCourse.course3}</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.price}> {selectedCourse.price} </Text>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Course")}>
            <Text style={styles.buttonText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    shadowOffset: { width: 0, height: 0 },
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
  cardcourse: {
    textAlign: "center",
    paddingBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#7d7d7d",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#809fff",
  },

});