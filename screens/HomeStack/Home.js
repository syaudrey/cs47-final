import { StyleSheet, Text, View, Button, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import MapView from 'react-native-maps';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Restaurant from './Restaurant'
import { collection, getDocs } from "firebase/firestore";


const Home = () => {
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);
  
  // const [songData, setSongData] = useState({});

  // // Adding document to a collection
  // const addDocument = async () => {
  //   // You will pass in your own document ID (song-2) in this instance with `setDoc`
  //   // await setDoc(doc(db, "songs", "song-2"), {
  //   //   title: "Out of Time",
  //   //   artist: "The Weeknd"
  //   // });

  //   // Firebase will autogenerate a document ID when using `addDoc`
  //   const docRef = await addDoc(collection(db, "songs"), {
  //     title: "Dawn FM",
  //     country: "The Weeknd"
  //   });

  //   console.log(docRef.id);
  // };

  // // Retrieiving a document from Firestore
  // const getDocument = async () => {
  //   const docRef = doc(db, "songs", "song-1");
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     setSongData(docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // };

  // Get all documents from a collection
  const getAllDocuments = async () => {
    let allDocs = await getDocs(collection(db, "restaurants"));

    // Printing out the array of documents (objects), probably put this in state variable
    // [ {title: Dawn FM, artist: The Weeknd }, ... ]
    let updated = (allDocs.docs.map((document) => {
      return document.data();
    }))
    // let updatedRestaurants = getAllDocuments();
    // console.log(updated);
    setRestaurants(updated);
    // console.log("hello");
  };
  // // Update document with a new field 
  // const updateDocument = async () => {
  //   const song1Ref = doc(db, "songs", "song-1");

  //   // add a field
  //   await updateDoc(song1Ref, {
  //     duration: 1000
  //   });
  // };

  useEffect(() => {
    getAllDocuments();
  }, []);

  // // onSnapshot listens for changes in the database and will automatically re-run the console.log when the data changes
  // useEffect(() => {
  //   const unsub = onSnapshot(doc(db, "songs", "song-1"), (doc) =>
  //     console.log("current data: ", doc.data())
  //   );

  //   // Cleanup - we have to cleanup because we are subscribing and listening, we don't want to keep the subscription if we move off the screen
  //   return unsub;
  // }, []);
  const renderRestaurant = ({item, navigation}) => {
    return (
      <Restaurant
        imageUrl={item.imageUrl}
        name={item.name}
        distance={item.distance}
        category={item.category}
        yelp={item.yelp}
        walkthrough={item.walkthrough}
        operatingDays={item.operatingDays}
        operatingHours={item.operatingHours}
        address={item.address}
        phone={item.phone} />
        // navigation={navigation}/>
    );
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.mapView}>
        <MapView
          style={{...StyleSheet.absoluteFillObject}}
          initialRegion={{
          latitude: 37.4275,
          longitude: -122.1697,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
          }}
        />
      </View>

      <View style={styles.locationView}>
        <Ionicons name="location-outline" size={25}></Ionicons>
        <Text style={styles.locationText}> Stanford, CA 94305</Text>
      </View>

      <View style={styles.menuBar}>
        <View style={{flex: 2, flexDirection: "row" }}>
          <Text style={styles.filterText}>Recommended For You </Text>
          <Ionicons name="chevron-down-outline" size={25}></Ionicons>
        </View>
        <Ionicons name="search-outline" size={25}></Ionicons>
      </View>

      <View style={styles.flatlistView}>
        <FlatList 
          data={restaurants}
          renderItem={({item}) => renderRestaurant({item})}
          keyExtractor={(item) => item.name} 
        />
      </View>
      
    </View>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  mapView: {
    // ...StyleSheet.absoluteFillObject,
    backgroundColor: "lightblue",
    flex: 3,
    width: "100%",
    height: "20%",
    //  height: "10%"
  },
  button: {
    // flex: 3,
  },
  locationView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1%",
    // backgroundColor: "gray"
  },
  locationText: {
    fontSize: 18,
    textDecorationLine: 'underline'
  },
  menuBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
    paddingBottom: "1%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  filterText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  flatlistView: {
    flex: 12,
    paddingLeft: "5%",
    paddingRight: "5%",
  },

});
