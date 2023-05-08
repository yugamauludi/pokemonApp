import { StyleSheet, Platform, Dimensions } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
        // padding: 10,
    },
    content: {
        flex: 1,
        backgroundColor: "#f4f4f4",
    },

    containerMoves: {
        top: 200,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flex: 1,
        paddingTop: 30,
        position: 'relative'
    },
    button: {
        borderRadius: 30,
        left: 5,
        right: 5,
        color: "gray",
    },
    navbarContainer: {
        padding: 10,
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textNavbar: {
        fontSize: 20
    },
    textTitle: {
        fontSize: 40,
        margin: 10,
        marginBottom: 15,
        fontWeight: 'bold',
        color: "black"
    },
    textTitleDetail: {
        fontSize: 50,
        margin: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        color: "#fff"
    },
    textPokemonCard: {
        fontSize: 10
    },
    imagePokemonCard: {
        width: 10,
        height: 10
    },
    cardImagePokemon: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,

    },
    detailImagePokemon: {
        alignItems: "center",
        elevation: 5,
        height: 210,
        width: 210,
        position: 'absolute',
    },
    detailContainerInfo: {
        flex: 1,
        paddingHorizontal: 10
    },
    detailListTab: {
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: 20
    },
    detailBtnTab: {
        width: Dimensions.get('window').width / 4,
        flexDirection: "row",
        borderBottomColor: 'gray',
        borderBottomWidth: .5,
        padding: 10,
        justifyContent: "center"
    },
    detailTextTab: {
        fontSize: 15,
        color: "gray",
        fontWeight: "bold",
    },
    detailBtnTabActive: {
        backgroundColor: "blue"
    },
    card: {
        flex: 1,
        height: 140,
    },
    cardTypeText: {
        color: "black",
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        opacity: 1
    },
    cardTypeContainer:{
        backgroundColor: "#fff", 
        opacity:.2, 
        borderRadius: 10, 
        alignSelf: "baseline", 
        margin: 1
    },
    cardSpacing: {
        flex: 1,
        padding: 5,
    },
    card__name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        paddingTop: 10,
    },
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 5 : 0,
    },

    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    aboutTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        marginLeft: 30,
        color: "grey",
        opacity: .7,
        width: 120,
    },
    aboutText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "grey",
    },
    statsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft: 30,
        color: "grey",
        opacity: .7,
        width: 120,
    },
    statsText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        color: "grey",
        width: 80
    },

})