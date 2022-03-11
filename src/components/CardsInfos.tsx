import React from "react";
import { View, Image, Text } from "react-native";

interface Infos {
  image: string;
  name: string;
  gender: string;
  age: number;
  is_alive: boolean;
  birthdy: string;
  height: number;
  nationality: string;
  net_worth: number;
  occupation: string[];
}

const CardsInfos = (infos: Infos) => {
  const firstLetterUpper = (my_name: string) => {
    const newName = my_name.split(" ");
    return newName.map((e) => {
      return e.charAt(0).toUpperCase() + e.slice(1) + " ";
    });
  };

  return (
    <View>
      <Image
        source={require(`../media/images/${infos.image}`)}
        style={{ height: 120, width: 120 }}
      />
      <View>
        <Text>{firstLetterUpper(infos.name)}</Text>
        <View>
          <View>
            <Text>Gender</Text>
            <Text>{firstLetterUpper(infos.gender)}</Text>
          </View>
          <View>
            <Text>Age</Text>
            <Text>
              {infos.age}({infos.is_alive ? "Alive" : "Dead"})
            </Text>
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
            <Text>{infos.nationality.toUpperCase()}</Text>
          </View>
          <View>
            <Text>Net worth: </Text>
            <Text>{Intl.NumberFormat("en-US").format(infos.net_worth)}$</Text>
          </View>
        </View>
        <View>
          <Text>Occupation</Text>
          <Text>{infos.occupation.join(", ").replace(/_/g, " ")}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardsInfos;
