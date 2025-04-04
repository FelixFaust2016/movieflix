import { MovieInfo } from "@/components";
import { icons } from "@/constants/icons";
import { fetchMovieDetails } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";

export default function Details() {
  const { id } = useLocalSearchParams();

  const { data, loading, error } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  return (
    <View className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>
        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-xl">{data?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-sm text-light-300 ">
              {data?.release_date.split("-")[0]}
            </Text>
            <Text className="text-sm text-light-200 ">{data?.runtime}m</Text>
          </View>
          <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image source={icons.star} className="size-4" />
            <Text className="text-sm text-white font-bold uppercase">
              {Math.round(data?.vote_average ?? 0)}/10
            </Text>
            <Text className="text-sm text-light-200 font-bold">
              ({data?.vote_count} votes)
            </Text>
          </View>

          <MovieInfo label="Overview" value={data?.overview} />
          <MovieInfo
            label="Genres"
            value={data?.genres?.map((g) => g.name).join("-") || "N/A"}
          />
          <View className="flex flex-row justify-between w-1/2">
            <MovieInfo
              label="Budget"
              value={`$${data?.budget! / 1_000_000} million`}
            />
            <MovieInfo
              label="Revenue"
              value={`$${(
                Math.round((data?.revenue ?? 0) / 10000) / 100
              ).toFixed(2)} million`}
            />
          </View>
          <MovieInfo
            label="Production Companies"
            value={
              data?.production_companies
                ?.map((company) => company.name)
                .join("-") || "N/A"
            }
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={router.back}
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex-row items-center justify-center z-50"
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor={"#fff"}
        />
        <Text className="text-white font-semibold text-base">Go back</Text>
      </TouchableOpacity>
    </View>
  );
}
