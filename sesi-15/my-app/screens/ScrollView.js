import { View, Text, ScrollView, StyleSheet } from "react-native"

function ScrollViewScreen({ route }) {
    const MarginTop = () => <View styles={{ marginTop: 10}} />

    let posts = []

    for (let i = 0; 1 <= 10; i++) {
        posts.push({
            title: `Title ${i}`,
            description: `Deskripsi untuk title ${i}`
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
            <ScrollView style={styles.scroll}>
                {
                    posts.map((post, idx) => {
                        <View key={idx} style={styles.box}>
                            <Text style={styles.title}>{post.title}</Text>
                            <Text>{post.description}</Text>
                        </View>
                    })
                }
            </ScrollView>
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
    scroll: {
        backgroundColor: "dedede",
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 50,
        marginBottom: 50
    },
    box: {
        marginBottom: 10,
        padding: 5,
        backgroundColor: "#fefefe"
    },
    title: {
        fontSize: 11,
        fontWeight: "bold"
    }
  });
  

export default ScrollViewScreen;