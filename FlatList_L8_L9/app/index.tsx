import ListItemSseparator from "@/components/ListItemSeperator";
import { DATA, dataType } from "@/data/appData";
import colors from "@/styles/colors";
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

 

//create a simple function telling me what was selected
const selectedList = (item: dataType) => {
  console.log(item.title);
  setSelectedID(item.id);
};
const [selectedId, setSelectedID] = useState<string>("1");

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>title wgat it is</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlistRow}>
              <FlatList
              data = {DATA}
              extraData = {selectedId}
              keyExtractor = {(item: dataType) => item.id}
              ItemSeparatorComponent={() => 
                <ListItemSseparator color={colors.text.dark} />}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectedList(item)}>
                  <View style={[styles.flatlistRow,
                    {
                      backgroundColor: item.id === selectedId
                      ? colors.primary
                      : colors. secondary
                    }
                  ]}>
                    <Text style = {[styles.titleText,
                      {
                        color:
                        item.id === selectedId
                        ? colors.text.light
                        : colors.text.dark
                      }
                      ]}/>
                  
                  <Text>{item.title}</Text>
                  </View>
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
  //  margin: 15,
    padding: 5,
  
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

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
