import defaultStyles from "@/styles/defaultStyles";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";


export default function Index() {

  type dataType = {
      id: string; //refer to the unique indentifier
      title: string; //text we will show in list
  }
  //using all caps bc DATA array will not change during its use
  const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "First Item"},
    {id: "3", title: "First Item"},
    {id: "4", title: "First Item"},
  ];

//create a simple function telling me what was selected
const selectedList = (item: dataType) => {
  console.log(item.title);
  setSelectedID(item.id);
};
const [selectedId, setSelectedID] = useState<string>("1");

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlistRow}>
              <FlatList
              data = {DATA}
              keyExtractor = {(item: dataType) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectedList(item)}>
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              )}
              />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  flatlistRow:{
    backgroundColor: 'pink',
    margin: 15,
    alignItems: 'center',

  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
