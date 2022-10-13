import { View, Text, TextInput } from "react-native"

function ProfileScreen({ route }) {
    const MarginTop = () => <View styles={{ marginTop: 10}} />


  return (
    <View style={styles.container}>
        <View style={styles.content}>        
            <Text>Welcome Pages Profile</Text>
            <Text>{route.params.name} Pages</Text>
        </View>
        <MarginTop />
        <View>
            <Text>More text</Text>
            <View>
              <Text style={{ textAlign: "center" }}>More more text</Text>
              <MarginTop />
              <Image 
                source={{
                    uri: "https://i.pinimg.com/564x/cb/76/9c/cb769cc4f6d62f0eb7600c7e3be5c1b1.jpg"
                }}
                style={{ width: 200, height: 200}}
            />
            <Text style={{textAlign: "center", fontSize: 24, color: "#dedede"}}>Kiki's delivery service</Text>
            <MarginTop />
            <TextInput
            style = {{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
            }} 
            placeholder="Type here..."/>
            </View>
            
            
            
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    },
    content: {
      alignItems: "center"
    },
    rowButton: {
      flexDirection: "row",
      margin: 10
    }
  });
  

export default ProfileScreen;