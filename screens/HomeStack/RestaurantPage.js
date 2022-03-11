import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Button, Pressable, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

import InstaStory from "../../react-native-insta-story/index";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { db } from "../../firebase";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import Dish from "./Dish";
import Modal from "react-native-modal";
import FilterModal from "./FilterModal";
import SortModal from "./SortModal";
import SelectDropdown from 'react-native-select-dropdown'


const RestaurantPage = ({ navigation, route }) => {
  const params = route.params
  useEffect(() => {
    navigation.setOptions({ headerTitle: params.name, });
  })
  const [dishes, setDishes] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [allDishes, setAllDishes] = useState([]);
  const [category, setCategory] = useState("Mains");
  const [restrictions, setRestrictions] = useState([]);
  const [diets, setDiets] = useState([]);
  const [chosenRestrictions, setChosenRestrictions] = useState([]);
  const [chosenDiets, setChosenDiets] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [actionTriggered, setActionTriggered] = useState('');
  const [sortBy, setSortBy] = useState('');

  // console.log("hi", params.operatingDays)

  const getDishesInCat = async ( newCat ) => {
    // let allDocs = await getDocs(collection(db, params.name).collection(db, "menu").collection(db, category));
    // console.log(category)
    // setCategory("Mains"); // all dishes
    // let allDocs = await getDocs(collection(db, "restaurants").doc(db, "restaurant-1").collection(db, "mains"));
    // let allDocs = await getDocs(doc(db, "restaurants", "restaurant-1").collection(db, "mains"));
    let allDocs = await getDocs(collection(db, "restaurants", params.name, newCat));
    // doc(db, "rooms", "roomA", "messages", "message1");
    
    // let allDocs = await getDocs(db.collection("restaurants").document("restaurant-1").collection("mains"));

    // db.collection('rooms').doc('roomA').collection('messages').doc('message1');
    // Printing out the array of documents (objects), probably put this in state variable
    // [ {title: Dawn FM, artist: The Weeknd }, ... ]
    let updated = (allDocs.docs.map((document) => {
      return document.data();
    }))
    // let updatedRestaurants = getAllDocuments();
    // console.log("updated: ")
    // console.log(updated);
    setDishes(updated);
    setAllDishes(updated);
    
    // console.log("all:")
    // console.log(allDishes)
    // console.log("hello");
  };

  // Retrieiving a document from Firestore
  let userName = "user";
  const getPreferences = async (userName) => {
    const docRef = doc(db, "users", "user");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // setSongData(docSnap.data());
      const updatedRestrictions = [...new Set([...restrictions, ...docSnap.data().restrictions])]
      const updatedDiets = [...new Set([...diets, ...docSnap.data().diets])]
      // console.log(updatedRestrictions)
      // console.log(updatedDiets)
      setRestrictions(updatedRestrictions);
      setDiets(updatedDiets);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  

  // console.log("original............");
  // console.log(chosenRestrictions);
  // console.log(chosenDiets);
  useEffect(() => {
    // getDishesInCat("Mains");    // change to All
    getPreferences("user");
    // setChosenRestrictions(["why", "sad"]);
  }, []);

  useEffect(() => {
    getDishesInCat(category);
  }, [category]);

  const renderDishes = ({item, navigation}) => {
    // console.log("dishes: ")
    // console.log(dishes)
    return (
      <Dish
        imageUrl={item.imageUrl}
        name={item.name}
        price={item.price} />
        // navigation={navigation}/>
    );
  }

  
  

  // useEffect(() => {
  //   console.log(sortBy)
  // }, [sortBy]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const applyFilters = () => {
    setModalVisible(!isModalVisible);
    let combinedRestrictions = chosenRestrictions
    let combinedDiets = chosenDiets
    if (toggle == true) {
      combinedRestrictions = [...new Set([...restrictions, ...chosenRestrictions])]
      combinedDiets = [...new Set([...diets, ...chosenDiets])]
    }
    // console.log("yo")
    // console.log(combinedRestrictions)
    // console.log(combinedDiets)
    // console.log("hi")
    // let copy = allDishes
    
    // console.log("set:")
    // console.log(copy)
    // setDishes(copy)
    // console.log("dishes:")
    // console.log(dishes)
    let updated = allDishes.filter(dish => !combinedRestrictions.some(r => dish.restrictions.includes(r)));
    // const updated = dishes.filter(checkRestrictions);
    // console.log(updated)
    // setDishes(updated)
    updated = updated.filter(dish => combinedDiets.every(val => dish.diets.includes(val)));
    // console.log("updated dishes:")
    // console.log(updated)
    setDishes(updated)
  };

  const applySort = () => {
    setModalVisible(!isModalVisible);
    if (sortBy === "Popularity") {
      // console.log("try change")
      // setDishes(dishes.sort((a, b) => (a.popularity > b.popularity ? 1 : -1)))
      dishes.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))   
    } else if (sortBy === "Wait time") {
      dishes.sort((a, b) => (a.wait > b.wait ? 1 : -1))   
    } else if (sortBy === "Price: low to high") {
      dishes.sort((a, b) => (a.price > b.price ? 1 : -1))
    } else if (sortBy === "Price: high to low") {
      dishes.sort((a, b) => (a.price < b.price ? 1 : -1))
    }
  };

  // let category = "mains";
  // getAllDocuments(category);
  // console.log("RESTO PAGE")
  // console.log(chosenRestrictions)
  // console.log(chosenDiets)
  // console.log("yoyo", params.operatingDays)
  const categories = ["All Dishes", "Appetizers", "Mains", "Sides", "Desserts", "Drinks"]
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{params.category}</Text>
        <View style={styles.bottomHeaderView}>
          <Text style={styles.text}>{params.distance} miles away</Text>
          <View style={styles.yelpView}>
            <Image source={require("../../assets/yelp.png")} style={styles.yelpIcon}/>
            <Text style={styles.yelpBoldText}>{params.yelp}</Text>
            <Text style={styles.yelpText}> / 5 </Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.containerMiddle}>
        <View style={styles.walkthroughView}>
          <Pressable style={styles.restaurantInfoView} onPress={() => navigation.navigate('MoreInfo', {name: params.name, category: params.category, distance: params.distance, yelp: params.yelp, walkthrough: params.walkthrough, operatingDays: params.operatingDays, operatingHours: params.operatingHours, address: params.address, phone: params.phone })}>
            <Text style={styles.restaurantInfoText}>MORE INFORMATION</Text>
          </Pressable>
          <View style={styles.walkthroughTitleView}>
            <Text style={styles.sectionText}>WALKTHROUGH</Text>
            <Pressable style={styles.galleryView}  onPress={() => navigation.navigate('Gallery', {name: params.name, walkthrough: params.walkthrough })}>
              <Ionicons name="grid-outline" size={18} style={styles.galleryIcon}></Ionicons>
              <Text style={styles.galleryText}>GALLERY</Text>
            </Pressable>
          </View>
          <View style={styles.walkthroughFlatlistView}>
            <InstaStory data={params.walkthrough}
                duration={10}
                // onStart={item => console.log(item)}
                // onClose={item => console.log('close: ', item)}
                // customSwipeUpComponent={<View></View>}
                style={{marginTop: "2%"}}/>
          </View>
        </View>
        
        <View style={styles.menuView}>
          <Text style={styles.sectionText}>MENU</Text>
          <View style={styles.subtitlesView}>
            {/* <View style={styles.dropdownView}>
              <Text style={styles.dishTypeText}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
              <Ionicons name="chevron-down-outline" size={22}></Ionicons>
            </View> */}
            <View style={styles.dropdownView}>
              <SelectDropdown
                data={categories}
                onSelect={(selectedItem, index) => {
                  // setCategory(selectedItem);
                  // console.log(selectedItem, category)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  // useEffect(() => {
                  //   setCategory(selectedItem);
                  // }, []);
                  setCategory(selectedItem);
                  // console.log("after", selectedItem, category)
                  
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item
                }}
                buttonStyle={{width: "80%", height: "90%", backgroundColor: "white", left: -16}}
                buttonTextStyle={styles.dishTypeText}
                defaultButtonText="All Dishes"
                rowStyle={{height: 28}}
                rowTextStyle={{textAlign: "left"}}
                renderDropdownIcon={() => <Ionicons name="chevron-down-outline" size={22}></Ionicons>}
              />
            </View>
            {/* <SelectDropdown
              data={categories}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              buttonStyle={{width: "40%", height: "90%"}}
              defaultButtonText="All"
            /> */}
            <View style={styles.filterSortViews}>
              <Text style={styles.filterSortText}>Filter</Text>
              <Pressable onPress={() => {
                  setModalVisible(true);
                  setActionTriggered('filter');
                }}>
                <Ionicons name="add-outline" size={22}></Ionicons>
              </Pressable>
            </View>
            <View style={styles.filterSortViews}>
              <Text style={styles.filterSortText}>Sort</Text>
              <Pressable onPress={() => {
                  setModalVisible(true);
                  setActionTriggered('sort');
                }}>
                <Ionicons name="add-outline" size={22}></Ionicons>
              </Pressable>
            </View>

            <Modal isVisible={isModalVisible} style={{ margin: 0 }}>
              <>{actionTriggered === 'filter' ?
                <View style={styles.modalView}>
                  <Pressable onPress={toggleModal}>
                    <Text style={styles.xOut}> x </Text>
                  </Pressable>
                  <View style={styles.filterSortHeaderView}>
                    <Text style={styles.filterSortHeaderText}>Filter</Text>
                  </View>
                  <FilterModal isEnabled={toggle}
                              setIsEnabled={setToggle} 
                              chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
                  <Pressable onPress={applyFilters}>
                    <View style={styles.button}>
                      <Text style={styles.buttonTitle}>APPLY FILTERS</Text>
                    </View>
                  </Pressable>
                </View> :
              actionTriggered === 'sort' ?
                <View style={styles.modalView}>
                  <Pressable onPress={toggleModal}>
                    <Text style={styles.xOut} > x </Text>
                  </Pressable>
                  <View style={styles.filterSortHeaderView}>
                    <Text style={styles.filterSortHeaderText}>Sort By</Text>
                  </View>
                  <SortModal changeSortBy={setSortBy} sortBy={sortBy} />
                  <Pressable onPress={applySort}>
                    <View style={styles.button}>
                      <Text style={styles.buttonTitle}>APPLY SORT</Text>
                    </View>
                  </Pressable>
                {/* <FilterModal/> */}
              </View> :
              null}</>
            </Modal>

          </View>
          {/* <FlatList 
            data={dishes}
            renderItem={({item}) => renderDishes({item})}
            keyExtractor={(item) => item.name} 
            numColumns={2} /> */}
        </View>
        <View style={styles.menuflatlistView}>
          <FlatList 
              data={dishes}
              renderItem={({item}) => renderDishes({item})}
              keyExtractor={(item) => item.name} 
              numColumns={2} />
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};


export default RestaurantPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    // paddingHorizontal: "5%",
  },
  containerMiddle: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
    // flex: 18,
    // width: "100%",
    paddingHorizontal: "5%",
    paddingBottom: "3%",
  },
  menuflatlistView: {
    flex: 1,
    width: "100%",
    marginTop: "4%",
    // paddingLeft: "5%",
    // height: "100%",
    // backgroundColor: "green",
  },
  walkthroughFlatlistView: {
    flex: 10,
    width: "100%",
    marginBottom: "5%",
    // paddingLeft: "5%",
    // height: "100%",
    // backgroundColor: "green",
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  text: {
    color: "black",
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 1,
    // fontFamily: "Avenir",
  },
  header: {
    backgroundColor: '#f8b432',
    // flex: 1,
    height: "8%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: "100%",
    paddingLeft: "14%",
    paddingRight: "10%",
    paddingTop: "1%",
    paddingBottom: "4%",
  },
  bottomHeaderView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  yelpView: {
    display: "flex",
    flexDirection: "row",
  },
  yelpIcon: {
      width: 20,
      height: 20,
      marginRight: 5,
      // marginTop: 4,
  },
  yelpBoldText: {
      color: "#c41200",
      textAlign: 'left',
      fontSize: 16,
      fontWeight: "bold",
  },
  yelpText: {
      color: "#c41200",
      textAlign: 'left',
      fontSize: 16,
  },
  walkthroughView: {
    flex: 4,
    // backgroundColor: "green",
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    // paddingLeft: "5%",
    // paddingRight: "5%",
    marginTop: "3%",
    marginBottom: "4%",
  },
  walkthroughTitleView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  galleryView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    // backgroundColor: "gray"
  },
  galleryIcon: {
    marginRight: "4%",
    // flex: 1,
  },
  galleryText: {
    fontSize: 16,
    textDecorationLine: 'underline',
    // flex: 4,
  },
  restaurantInfoView: {
    // flex: 6,
    height: "18%",
    backgroundColor: "#F1EBEA",
    // backgroundColor: "yellow",
    justifyContent: "center",
    width: "100%",
    borderRadius: 10,
    marginBottom: "3%",
    // marginLeft: "5%",
    // marginRight: "5%",
  },
  restaurantInfoText: {
    color: "black",
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
  },
  menuView: {
    flex: 1,
    // backgroundColor: "purple",
    width: "100%",
    // paddingLeft: "0%",
    // paddingRight: "5%",
  },
  sectionText: {
    color: "black",
    textAlign: 'left',
    fontSize: 26,
    // marginBottom: 1,
    fontWeight: "bold",
    // paddingLeft: "5%",
  }, 
  dishTypeText: {
    color: "black",
    textAlign: 'left',
    fontSize: 18,
    marginRight: 5,
    fontWeight: "bold",
  },
  subtitlesView: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    
  },
  dropdownView: {
    flex: 4,
    display: "flex",
    flexDirection: "row",
    // marginBottom: "1%",
    // paddingLeft: "5%",
    // paddingRight: "5%",
  },
  filterSortViews: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    marginLeft: 18,
    // paddingRight: "5%",
    // backgroundColor: "yellow",
  },
  filterSortText: {
    color: "black",
    textAlign: 'left',
    fontSize: 18,
    marginRight: 2,
    marginLeft: 3,
  },
  modalView: {
    // flex: 1,
    // display: "flex",
    // flexDirection: "row",
    height: "100%",
    width: "100%",
    backgroundColor: "#F1EBEA",
    borderRadius: 36,
    // marginLeft: 0,
    marginTop: "24%",
  },
  xOut: {
    fontSize: 28,
    marginLeft: "4%",
    marginTop: "4%",

  },
  filterSortHeader: {
    display: "flex",
    flexDirection: "row",

  },
  filterSortHeaderText: {
    color: "black",
    // textAlign: 'center',
    fontSize: 24,
    marginRight: 2,
    marginLeft: 4,
    fontWeight: "500",
    // position: 'absolute',
    // marginTop: 60,
    // top: Dimensions.get('window').height,
  }, 
  filterSortHeaderView: {
    // color: "black",
    // textAlign: 'center',
    position: 'absolute',
    top: "2%",
    // left: 0,
    alignSelf: 'center',
    justifyContent: 'center', 
    alignItems: 'center',
    // marginTop: 60,
    // top: Dimensions.get('window').height,
  }, 
  button: {
    backgroundColor: '#f8b432',
    borderRadius: 10,    
    height: 42,   
    width: Dimensions.get('window').width * 0.8,
    marginLeft: "10%",
    marginRight: 100,
    // marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    bottom: 130,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold', 
    color: "black",
  },

});