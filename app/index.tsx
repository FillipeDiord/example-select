import React, { useState } from "react";
import { Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { cars, nameCars } from "../mock/data";

export default function Index() {
  const [selectedCarColor, setSelectedCarColor] = useState("");
  const [filteredNameCars, setFilteredNameCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState();

  function filterNameCarsByFirstLetter(selectedColor) {
    const firstLetter = cars
      .find((car) => car.key === selectedColor)
      ?.value.charAt(0)
      .toLowerCase();
    if (firstLetter) {
      const filteredCars = nameCars.filter((car) =>
        car.value.toLowerCase().startsWith(firstLetter)
      );
      setFilteredNameCars(filteredCars as array);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>Example</Text>

      <View>
        <SelectList
          data={cars}
          setSelected={(color) => {
            setSelectedCarColor(color);
            filterNameCarsByFirstLetter(color);
          }}
          search={false}
        />
      </View>

      <View>
        <SelectList data={filteredNameCars} setSelected={setSelectedCar} />
      </View>
    </View>
  );
}
