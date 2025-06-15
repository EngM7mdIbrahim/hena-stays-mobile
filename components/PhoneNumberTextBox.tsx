import React, { useState } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  Text,
  Pressable,
} from "react-native";
import { TextBox, TextBoxProps } from "./TextBox";
import { countries } from "@constants";

// Example country data

interface PhoneNumbrTextBoxProps
  extends Omit<TextBoxProps, "onChangeText" | "value"> {
  value: string;
  onChangeText: (value: string) => void;
}

export function parsePhoneNumber(fullValue: string) {
  const found = countries.find((c) => fullValue.startsWith(c.code));
  if (found) {
    return {
      countryCode: found.code,
      phoneNumber: fullValue.slice(found.code.length),
    };
  }
  // fallback: use default country
  return {
    countryCode: countries[0].code,
    phoneNumber: fullValue,
  };
}

export const PhoneNumberTextBox = ({
  value,
  onChangeText,
  ...props
}: PhoneNumbrTextBoxProps) => {
  const { countryCode, phoneNumber } = parsePhoneNumber(value);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [search, setSearch] = useState("");

  // Detect country code as user types
  const handleTextChange = (text: string) => {
    onChangeText(`${countryCode}${text}`);
  };

  // Filter countries by search
  const filteredCountries = countries.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase()) ||
      (item.flag && item.flag.includes(search))
  );

  return (
    <View className="flex-row items-center">
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="px-3 self-stretch items-center justify-center bg-gray-200 rounded-lg mr-2"
      >
        <Text className="text-base">
          {selectedCountry.flag} {countryCode}{" "}
        </Text>
      </TouchableOpacity>
      <TextBox
        {...props}
        passedClassName="flex-1"
        value={phoneNumber}
        onChangeText={handleTextChange}
        keyboardType="phone-pad"
      />
      <Modal visible={modalVisible} transparent animationType="fade">
        <Pressable
          onPress={() => setModalVisible(false)}
          className="flex-1 bg-black/60 justify-center items-center"
        >
          <Pressable>
            <View className="bg-white rounded-xl p-5 w-72 max-h-96">
              <TextBox
                placeholder="Search country..."
                value={search}
                onChangeText={setSearch}
                passedClassName="mb-3"
              />
              <FlatList
                data={filteredCountries}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedCountry(item);
                      setModalVisible(false);
                      onChangeText(`${item.code}${phoneNumber}`);
                    }}
                    className="py-2"
                  >
                    <Text className="text-base">
                      {item.flag} {item.name} ({item.code})
                    </Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text className="text-blue-600 mt-3 text-center">Close</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};
