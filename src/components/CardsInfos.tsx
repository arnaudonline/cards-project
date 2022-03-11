import React from "react";
import { View, Image, Text } from "react-native";

interface Infos {
    image: string,
    name: string,
    gender: string,
    age: number,
    birthdy: string,
    height: number,
    nationality: string,
    net_worth: number,
    occupation: string[]
};

const CardsInfos = (infos:Infos) => {
  return (
    <View>
      <Image source={{uri: infos.image}} />
      <View>
        <Text>{infos.name}</Text>
        <View>
          <View>
            <Text>Gender</Text>
            <Text>{infos.gender}</Text>
          </View>
          <View>
            <Text>Age</Text>
            <Text>{infos.age}</Text>
          </View>
          <View>
            <Text>Birthday</Text>
            <Text>{infos.birthdy}</Text>
          </View>
          <View>
            <Text>Height</Text>
            <Text>{infos.height}</Text>
          </View>
        </View>
        <View>
        <View>
            <Text>Nationality: </Text>
            <Text>{infos.nationality}</Text>
        </View>
        <View>
            <Text>Net worth: </Text>
            <Text>{infos.net_worth}</Text>
        </View>
        </View>
        <View>
            <Text>Occupation</Text>
            <Text>{infos.occupation}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardsInfos;