import { useState } from "react";
import {
  Button,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

export default function NewPost() {
  const [description, setDescription] = useState("");

  const [image, setImage] = useState<string | null>(null);

  const onPost = () => {
    console.warn("Posting: ", description);
    setDescription("");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text>Create Post Screen</Text>

          <View style={styles.header}>
            <Image source={{ uri: user.image }} style={styles.profileImage} />
            <Text style={styles.name}>{user.name}</Text>
            <Entypo
              onPress={pickImage}
              name="images"
              size={24}
              color="limegreen"
              style={styles.icon}
            />
          </View>
          <TextInput
            placeholder="What's on your mind?"
            // set the value of the TextInput to the value from state
            value={description}
            // When user types, TextInput will call the onChangeText callback with the new value
            onChangeText={setDescription}
            style={styles.input}
            multiline
          />

          {image && <Image source={{ uri: image }} style={styles.image} />}
          <Button onPress={onPost} title="Post" disabled={!description} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    paddingTop: 80,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  input: {},
  buttonContainer: {
    marginTop: "auto",
  },
  icon: {
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
});
