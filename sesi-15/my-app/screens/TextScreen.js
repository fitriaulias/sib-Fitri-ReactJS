import { View, Text, TextInput, Button } from "react-native"
import { useState } from 'react';

function TextScreen({ route }) {
    const MarginTop = () => <View style={{marginTop: 15}} />
    const [input, setInput] = useState("")

    const handleInput = (text) => {
        setInput(text)
    }

    const handleButton = () => {
        if (input === "") {
            alert("Text belum di input")
        } else {
            alert("Output text anda adalah: " + input)
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text>Welcome Pages Text</Text>
            <Text>{route.params.name} Pages</Text>
        </View>

        <View>
            <Text style={styles.title}>React Native</Text>
        </View>

        <MarginTop />

        <View>
            <Text>Silahkan isi text berikut ini..</Text>
            <TextInput
            styles={{ padding: 5, marginTop: 5, height: 40, backgroundColor: "#dedede", color:"#0f0f0f"}}
            placeholder="Masukkan text disini"
            onChangeText={(text) => handleInput(text)}
            defaultValue={input}
            />

            <Text styles={{ marginTop: 5, fontSize: 15}}>Output text : {input}</Text>
            <MarginTop />
            <Button
            style={{ alignItems: "center"}}
            title="Click Me"
            color="#1d3557"
            onPress={() => handleButton()} />
        </View>
    </View>

   
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15
    },
    content: {
        alignItems: "center"
    },
    rowButton: {
      flexDirection: "row",
      margin: 10
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
  });

export default TextScreen;