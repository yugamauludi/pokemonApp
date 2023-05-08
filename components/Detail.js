import React, { useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../assets/styles";
import { pokemonColors } from "../store/action";
import About from "./reusable/about";
import Stats from "./reusable/baseStats";
import Moves from "./reusable/moves";


export default function Detail({ navigation, route }) {
    const item = route.params
    const [menu, setMenu] = useState("About")

    const pokemonColor = pokemonColors[item.type];
    const bgStyles = { ...styles.container, backgroundColor: pokemonColor };

    const listMenuInfo = [
        {
            option: "About"
        },
        {
            option: "Base Stats"
        },
        {
            option: "Evolution"
        },
        {
            option: "Moves"
        },
    ]

    const setMenuOption = menu => {
        return setMenu(menu)
    }

    const btnActive = {
        color: pokemonColor,
    }

    return (
        <View style={bgStyles}>
            <Text style={styles.textTitleDetail}>{item.name}</Text>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap", marginLeft: 20, marginRight: 30 }}>
                    {item.types ?
                        item.types.map((type, idx) => {
                            return (
                                <View key={idx} style={{ backgroundColor: "#fff", opacity: .2, borderRadius: 15, alignSelf: "baseline", margin: 5 }}>
                                    <Text style={{ color: "black", padding: 5, opacity: 1, fontWeight: "bold", fontSize: 20, marginLeft: 10, marginRight: 10 }}>{type.type.name}</Text>
                                </View>
                            )
                        })
                        : <View></View>}

                </View>
                <View style={{ paddingRight: 20 }}>
                    <Text style={{ color: "#fff", opacity: .8, fontWeight: "bold", fontSize: 22 }}>
                        #{`${item.id}`.padStart(3, 0)}
                    </Text>
                </View>
            </View>
            <View style={{
                alignItems: "center",
                elevation: 5
            }}>
                <Image
                    style={styles.detailImagePokemon}
                    source={{ uri: item.imgUrl }}
                />
            </View>
            <View style={styles.containerMoves}>
                <SafeAreaView style={styles.detailContainerInfo}>
                    <View style={styles.detailListTab}>
                        {
                            listMenuInfo.map(e => {
                                return (
                                    <TouchableOpacity key={e.option} style={[styles.detailBtnTab, menu === e.option && { borderBottomWidth: 1, borderBottomColor: pokemonColor }]}
                                        onPress={() => setMenuOption(e.option)}
                                    >
                                        <Text style={[styles.detailTextTab, menu === e.option && btnActive]}>{e.option}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <View>
                        <View style={{ paddingBottom: 80 }}>
                            {menu === 'Moves' ?
                                <Moves item={item}></Moves> : <View></View>
                            }

                            {menu === "About" ?
                                <About item={item}></About> : <View></View>
                            }

                            {menu === "Base Stats" ?
                                <Stats item={item}></Stats> : <View></View>
                            }
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}