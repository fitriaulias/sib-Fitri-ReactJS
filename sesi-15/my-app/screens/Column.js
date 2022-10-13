import { View, Text, Button, StyleSheet } from "react-native"
import { useState } from 'react'



function ColumnScreen({ route }) {
    const [style1, setStyle1] = useState(true)
    const [style2, setStyle2] = useState(false)
    const [style3, setStyle3] = useState(false)    

    const handleStyle = (text) => {
        if (text === "style1"){
            setStyle1(true)
            setStyle2(false)
            setStyle3(false)
        } else if (text === "style2"){
            setStyle1(false)
            setStyle2(true)
            setStyle3(false)
        } else {
            setStyle1(false)
            setStyle2(false)
            setStyle3(true)
        }
    }

    const ViewStyle1 = style1 ? 
        (
        <View style={styles.style1Box}>
            <View style={styles.style1Box1} />
            <View style={styles.style1Box2} />
            <View style={styles.style1Box3} />
        </View>
        )
    : null

    const ViewStyle2 = style2 ? 
        (
        <View style={styles.style2Box}>
            <View style={styles.style2Box1} />
            <View style={styles.style2Box2} />
            <View style={styles.style2Box3} />
        </View>
        )
    : null

    const ViewStyle3 = style3 ? 
        (
        <View style={styles.style3Box}>
            <View style={styles.style3Box1} />
            <View style={styles.style3Box2} />
            <View style={styles.style3Box3} />
        </View>
        )
    : null

    return (
    <View style={styles.container}>
        <View style={{ paddingTop: 10, alignItems: "center"}}>
            <Text>Welcome Pages Column</Text>
            <Text>{route.params.name} Pages</Text>
        </View>

        <View styles={styles.rowButton}>
            <View styles={styles.viewButton}>
                <Button 
                    title="Style 1"
                    color="#b5838d"
                    onPress={() => handleStyle("style1")}
                    />
            </View>
            <View styles={styles.viewButton}>
                <Button 
                    title="Style 1"
                    color="#e5989b"
                    onPress={() => handleStyle("style2")}
                    />
            </View>
            <View styles={styles.viewButton}>
                <Button 
                    title="Style 1"
                    color="#ffb4a2"
                    onPress={() => handleStyle("style3")}
                    />
            </View>
        </View>

        <ViewStyle1 />
        <ViewStyle2 />
        <ViewStyle3 />
    </View>
  )
}

export default ColumnScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    viewButton: {
      flex: 1,
      margin: 5
    },
    rowButton: {
    flexDirection: "row",
    margin: 10
    },

    style1Box: {
        flex: 1
    },
    style2Box: {
        flex: 1
    },
    style3Box: {
        flex: 1,
        flexDirection: 'row',
    },

    style1Box1: {
        flex: 1,
        backgroundColor: "#b5838d"
    },
    style1Box2: {
        flex: 1,
        backgroundColor: "#e5989b"
    },
    style1Box3: {
        flex: 1,
        backgroundColor: "#ffb4a2"
    },

    style2Box1: {
        flex: 1,
        backgroundColor: "#b5838d"
    },
    style2Box2: {
        flex: 1,
        backgroundColor: "#e5989b"
    },
    style2Box3: {
        flex: 1,
        backgroundColor: "#ffb4a2"
    },

    style3Box1: {
        backgroundColor: "#b5838d",
        flex: 1
    },
    style3Box2: {
        flex: 1,
        backgroundColor: "#e5989b"
    },
    style3Box3: {
        flex: 1,
        backgroundColor: "#ffb4a2"
    }
  });