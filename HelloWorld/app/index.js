import { useState } from "react";
import { View  ,Text, Image ,ImageBackground, ScrollView , Pressable, Modal ,Button} from "react-native";

export default function App() {
const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Pressable onPress={() => setIsModalVisible(true)}>
        <Image source = {{uri: 'https://media.istockphoto.com/id/1302329383/vector/two-chain-links-icon-attach-lock-symbol.jpg?s=612x612&w=0&k=20&c=c-dxZOv-E63rdJJ40lKPbO2wbb9y9jJpZ-s10ArX2l8='}} style={{width: 305, height: 159}}></Image>
      </Pressable>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
          {/* <Image source={{uri: 'https://media.istockphoto.com/id/1302329383/vector/two-chain-links-icon-attach-lock-symbol.jpg?s=612x612&w=0&k=20&c=c-dxZOv-E63rdJJ40lKPbO2wbb9y9jJpZ-s10ArX2l8='}} style={{width: 305, height: 159}}/>  */}
          <ImageBackground source={{ uri: 'https://media.istockphoto.com/id/1302329383/vector/two-chain-links-icon-attach-lock-symbol.jpg?s=612x612&w=0&k=20&c=c-dxZOv-E63rdJJ40lKPbO2wbb9y9jJpZ-s10ArX2l8=' }} style={{ width: 305, height: 159 }}>
            <Text>Inside</Text>
          </ImageBackground>
      </View>
    <Modal visible={isModalVisible}
    onRequestClose={() => setIsModalVisible(false)}
    animationType="slide">
      <View style={{flex: 1, backgroundColor: "green", padding: 60}}>
        <Text>Inside</Text>
        <Button title="Close" onPress={() => setIsModalVisible(false)}></Button></View>
    </Modal>
      </ScrollView>
    </>
  );
}

// in source we have to pass the refrence not the string
    
