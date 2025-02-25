import { FlatList, SafeAreaView } from "react-native";
import data from "@/assets/data/posts.json";
import Post from "@/components/Post";

export default function Feed() {
  return (
    <SafeAreaView>
      {/* <ScrollView>
        {data.map((item) => {
          return <Post postItem={item} key={item.id} />;
        })}
      </ScrollView> */}

      <FlatList
        data={data}
        renderItem={({ item }) => <Post postItem={item} />}
      />
    </SafeAreaView>
  );
}
