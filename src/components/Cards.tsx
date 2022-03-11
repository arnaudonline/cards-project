import React from "react";
import { View, Image, Text } from "react-native";

interface Infos {
    image: string,
    name: string,
    gender: string,
    age: number,
    birthday: string,
    height: number,
    nationality: string,
    net_worth: number,
    occupation: string[]
};

const Cards = (props:Infos) => {
  return (
    <View>
      <Image source={{uri: props.image}} />
      <View>
        <Text>{props.name}</Text>
        <View>
          <View>
            <Text>Gender</Text>
            <Text>{props.gender}</Text>
          </View>
          <View>
            <Text>Age</Text>
            <Text>{props.age}</Text>
          </View>
          <View>
            <Text>Birthday</Text>
            <Text>{props.birthday}</Text>
          </View>
          <View>
            <Text>Height</Text>
            <Text>{props.height}</Text>
          </View>
        </View>
        <View>
        <View>
            <Text>Nationality: </Text>
            <Text>{props.nationality}</Text>
        </View>
        <View>
            <Text>Net worth: </Text>
            <Text>{props.net_worth}</Text>
        </View>
        </View>
        <View>
            <Text>Occupation</Text>
            <Text>{props.occupation}</Text>
        </View>
      </View>
    </View>
  );
};

export default Cards;
