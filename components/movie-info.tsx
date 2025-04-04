import { FC } from "react";
import { View, Text } from "react-native";

export const MovieInfo: FC<{
  label: string;
  value?: string | number | null;
}> = ({ label, value }) => {
  return (
    <View className="flex-col items-start justify-center mt-5">
      <Text className="text-light-200 font-normal text-sm">{label}</Text>
      <Text className="text-light-100 font-bold text-sm">{value || "N/A"}</Text>
    </View>
  );
};
