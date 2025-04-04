import { icons } from "@/constants/icons";
import { FC } from "react";
import { Image, TextInput, View } from "react-native";

export const SearchBar: FC<{
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}> = ({ placeholder, onPress, value, onChangeText }) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};
