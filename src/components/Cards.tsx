import React from "react";
import { View } from "react-native";
import Data from "../data/celebrity.json";
import CardsInfos from "./CardsInfos";

const Cards = () => {
  return (
    <View>
      {Data.map((data, key) => {
      return (
        <CardsInfos {...data} key={key} />
      );
    })};
    </View>
    );
};

export default Cards;