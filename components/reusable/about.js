import React, {useState, useEffect} from "react";
import { Text, View,  } from "react-native";
import styles from "../../assets/styles";

export default function About(props) {
    const {item} = props
    const [abilities, setAbilities] = useState([])

    useEffect(() => {
        function getAbility() {
            let arr = []
            for (let i = 0; i < item.abilities.length; i++) {
                arr.push(item.abilities[i].ability.name)
            }
            return setAbilities(arr)
        }

        getAbility()
    }, [])

    return (
        <View>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.aboutTitle}>Species</Text>
                <Text style={styles.aboutText}>{item.species}</Text>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.aboutTitle}>Height</Text>
                <Text style={styles.aboutText}>{item.height} ''</Text>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.aboutTitle}>Weight</Text>
                <Text style={styles.aboutText}>{item.weight} lbs</Text>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.aboutTitle}>Abilities</Text>
                <Text style={styles.aboutText}>{abilities.join(', ')}</Text>
            </View>
        </View>
    )
}