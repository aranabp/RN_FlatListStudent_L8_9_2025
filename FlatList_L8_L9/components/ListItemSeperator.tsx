import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
type propsType = {
  color ?: string; //optional color
}
const ListItemSseparator:React.FC<propsType> = ({color}) => {
  return <View 
  style={[styles.separator, 
    {backgroundColor: color || colors.theme.light.text}
  ]}/>;
};

export default ListItemSseparator;

const styles = StyleSheet.create({
  separator: {
    height: 3,
    width: '100%', //100% of width of flatlist
  } as ViewStyle,
});
