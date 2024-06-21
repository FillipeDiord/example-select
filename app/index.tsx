import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { cars, nameCars } from "../mock/data";

export default function Index() {
  const [selectedCarColor, setSelectedCarColor] = useState("");
  const [filteredNameCars, setFilteredNameCars] = useState([]);
  const [selectedCarName, setSelectedCarName] = useState('');

  useEffect(() => {
    setSelectedCarName('');
  }, [selectedCarColor]);

  function filterNameCarsByFirstLetter(selectedColor: string) {
    const firstLetter = cars
      .find((car) => car.key === selectedColor)
      ?.value.charAt(0)
      .toLowerCase();
    if (firstLetter) {
      const filteredCars = nameCars.filter((car) =>
        car.value.toLowerCase().startsWith(firstLetter)
      );
      setFilteredNameCars(filteredCars);
      setSelectedCarName(null);
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
          setSelected={(color: string) => setSelectedCarColor(color)}
          onSelect={() => filterNameCarsByFirstLetter(selectedCarColor)}
          search={false}
        />
      </View>

      <View>
        <SelectList
          data={filteredNameCars}
          setSelected={setSelectedCarName}
        />
      </View>
    </View>
  );
}
