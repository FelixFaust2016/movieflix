import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import { FC } from "react";
import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { images } from "@/constants/images";

export const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative pl-5">
        <Image
          source={{
            uri: poster_url,
          }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />

        <View className="absolute -bottom-0.5 -left-1.5 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text className="font-bold text-white text-6xl">{index + 1}</Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>
        <Text
          className="text-light-200 text-sm font-bold mt-2"
          numberOfLines={1}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};
