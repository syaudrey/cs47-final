import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions, Platform } from "react-native";
// import colors from "./Themes/colors";

import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function Restaurant({ imageUrl, name, distance, category, yelp, walkthrough }) {
    const navigation = useNavigation();
    // console.log("in restaurant")
    return (
        // Pressable onPress={() => navigation.navigate('PreviewScreen', {previewUrl: previewUrl})}
        <Pressable onPress={() => navigation.navigate('RestaurantPage', {name: name, category: category, distance: distance, yelp: yelp, walkthrough: walkthrough })} style={styles.item}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{uri: imageUrl}}/>
            </View>
            <View style={styles.textView}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.text}>{category}</Text>
                <Text style={styles.text}>{distance} miles away</Text>
                <View style={styles.yelpView}>
                    <Image source={require("../.././assets/yelp.png")} style={styles.yelpIcon}/>
                    <Text style={styles.yelpBoldText}>{yelp}</Text>
                    <Text style={styles.yelpText}> / 5 </Text>
                </View>
            </View>
            {/* <Pressable onPress={() => navigation.navigate('PreviewScreen', {previewUrl: previewUrl})} style={styles.playView} >
                <Ionicons name="play-circle" size={20} color={colors.spotify} />
            </Pressable> */}
            {/* <Pressable onPress={() => navigation.navigate('DetailsScreen', {externalUrl: externalUrl})} style={styles.songRow}>
                <Image style={styles.image} source={{uri: imageUrl}}/>
                <View style={styles.songTitleAndArtist}>
                    <Text style={styles.text} numberOfLines={1}>{title}</Text>
                    <Text style={[styles.text, {color: colors.gray}]} numberOfLines={1} >
                        {artists.map((item) => item.name).join(', ')}
                    </Text>
                </View>
                <View style={styles.songAlbum}>
                    <Text style={styles.text} numberOfLines={1}>{albumName}</Text>
                </View>
                <View style={styles.durationView}>
                    <Text style={styles.text}>{duration}</Text>
                </View>
            </Pressable> */}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: "#F1EBEA",
        borderRadius: 20,
        marginBottom: 12,
    },
    text: {
        color: "black",
        textAlign: 'left',
        fontSize: 16,
        marginBottom: 1,
    },
    imageView: {
        // borderRadius: 20,
        flex: 4,
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: "1%"
    },
    image: {
        // width: Platform.isPad ? 140 : 120,
        // height: Platform.isPad ? 140 : 120,
        // width: "86%",
        width: Dimensions.get('window').width * 0.28,
        height: Dimensions.get('window').height * 0.13,
        margin: 8,
        resizeMode: "cover",
        flex: 3,
        marginLeft: "3%",
        marginRight: "3%",
        flex: 1,
        borderRadius: 16,
        // marginLeft: "7%"
    },
    textView: {
        display: "flex",
        flex: 7,
        // backgroundColor: "yellow",
    },
    nameText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: "4%",
    },
    yelpView: {
        display: "flex",
        flexDirection: "row",
        marginTop: "2%",
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
});