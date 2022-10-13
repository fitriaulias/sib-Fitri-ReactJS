import { View, Text, FlatList } from "react-native"

function FlatListScreen({ route }) {
    const MarginTop = () => <View styles={{ marginTop: 10}} />

    let posts = []

    for (let i = 0; 1 <= 10; i++) {
        posts.push({
            title: `Title ${i}`,
        })
    }

  return (
    <View style={styles.container}>
        <View style={styles.content}>        
            <Text>Welcome Pages ScrollView</Text>
            <Text>{route.params.name} Pages</Text>
        </View>
        <MarginTop />
        <View style={styles.content}>
            <FlatList
            data={posts}
            renderItem={( item ) => {
            <Text style={styles.item}>{item.title}</Text> }}

            
            
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
    },
    item: {
        padding: 10,
        fontSize: 20,
        height: 50
    }
  });
  

export default FlatListScreen;