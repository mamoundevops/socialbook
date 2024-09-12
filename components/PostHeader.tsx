import { PostProps } from "@/constants/types";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PostHeader = ({ postItem }: PostProps) => {
  const styles = StyleSheet.create({
    post: {
      backgroundColor: "#fff",
      marginVertical: 5,
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
    subtitle: {
      color: "gray",
    },
    icon: {
      marginLeft: "auto",
    },
    headerImage: {
      color: "#808080",
      bottom: -90,
      left: -35,
      position: "absolute",
    },
    titleContainer: {
      flexDirection: "row",
      gap: 8,
    },
  });
  // const post = {
  //   id: "p1",
  //   createdAt: "4 m",
  //   User: {
  //     id: "u1",
  //     image:
  //       "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  //     name: "Vadim Savin",
  //   },
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  //   image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  //   numberOfLikes: 11,
  //   numberOfShares: 2,
  // };
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: postItem.User.image }}
        style={styles.profileImage}
      />
      <View>
        <Text style={styles.name}>{postItem.User.name}</Text>
        <Text style={styles.subtitle}>{postItem.createdAt}</Text>
      </View>
      <Entypo
        name="dots-three-horizontal"
        size={18}
        color="gray"
        style={styles.icon}
      />
    </View>
  );
};

export default PostHeader;
