import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import PostHeader from "./PostHeader";
// import LikeImage from "@/assets/images/like.png";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { PostProps } from "@/constants/types";

const Post = ({ postItem }: PostProps) => {
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
    description: {
      lineHeight: 20,
      padding: 10,
    },
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    footer: {
      paddingHorizontal: 10,
    },
    // Stats Row
    statsRow: {
      flexDirection: "row",
      borderBottomWidth: StyleSheet.hairlineWidth,
      paddingVertical: 10,
      borderColor: "lightgray",
    },
    likeIcon: {
      width: 20,
      height: 20,
      marginRight: 5,
    },
    likedBy: {
      color: "gray",
    },
    shares: {
      color: "gray",
      marginLeft: "auto",
    },
    buttonsRow: {
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-around",
    },
    iconButton: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconButtonText: {
      color: "gray",
      marginLeft: 5,
      fontWeight: "500",
    },
  });
  const [isLiked, setIsLiked] = useState(false);
  return (
    //    {/* Post component */}
    <View style={styles.post}>
      {/* Post Header with details about the author */}
      <View style={styles.header}>
        <PostHeader postItem={postItem} />
      </View>

      {/* Post body with description and image */}
      <Text style={styles.description}>{postItem.description}</Text>

      {postItem.image && (
        <Image
          source={{ uri: postItem.image }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      {/* Post footer with likes and button */}
      <View style={styles.footer}>
        {/* Stats row */}
        <View style={styles.statsRow}>
          <Image
            source={require("@/assets/images/like.png")}
            style={styles.likeIcon}
          />
          <Text style={styles.likedBy}>
            Elon Musk and {postItem.numberOfLikes} others
          </Text>
          <Text style={styles.shares}>{postItem.numberOfShares} shares</Text>
        </View>
      </View>

      <View style={styles.buttonsRow}>
        {/* Like button */}
        <Pressable
          onPress={() => setIsLiked(!isLiked)}
          style={styles.iconButton}
        >
          <AntDesign name="like2" size={18}  color={isLiked ? "royalblue" : "gray"} />
          <Text
            style={[
              styles.iconButtonText,
              { color: isLiked ? "royalblue" : "gray" },
            ]}
          >
            Like
          </Text>
        </Pressable>

        {/* Comment button */}
        <View style={styles.iconButton}>
          <FontAwesome5 name="comment-alt" size={16} color="gray" />
          <Text style={styles.iconButtonText}>Comment</Text>
        </View>

        {/* Share button */}
        <View style={styles.iconButton}>
          <MaterialCommunityIcons name="share-outline" size={18} color="gray" />
          <Text style={styles.iconButtonText}>Share</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
