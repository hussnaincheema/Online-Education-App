import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function UserData() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    try {
      const res = await fetch('https://thapatechnical.github.io/userapi/users.json');
      const realData = res.json();
      setMyData(realData);
      //setIsLoaded(false);
      console.log("Real Data is----------",realData);
    } catch (e) {
      console.log("Error is-------",e);
    }
  };

  useEffect(() => getUserData(), []);

  const showUserData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={{ uri: item.image }}
          />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}>Bio-Data</Text>
            <Text style={styles.idNo}>
              {item.id < 10 ? `#0{item.id}` : `#{item.id}`}
            </Text>
          </View>

          <View style={styles.mainContain}>
            <Text style={styles.myName}> Name: {item.name} </Text>
            <Text style={styles.myName}> E-mail: {item.email} </Text>
            <Text style={styles.myName}> Mobile: {item.mobile} </Text>
            <Text style={styles.myName}>Website: {item.website}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.mainHeader}>{`# List of Students`}</Text>
      <FlatList
        keyExtractor={(item) => { item.id }}
        data={myData}
        renderItem={showUserData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    minHeight: "100%",
    backgroundColor: "#ebedee",
    paddingVertical: 50,
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 20,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    justifyContent: "space-between",
    backgroundColor: "#353535",
  },
  idNo: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.5)",
    paddingRight: 10,
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
  },
  mainHeader: {
    fontSize: 30,
    textAlign: "center",
    color: "#a18ce5",
    top: 50,
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
    textTransform: "capitalize",
  },

})