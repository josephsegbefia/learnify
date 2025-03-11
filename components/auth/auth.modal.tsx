import { View, Text, Pressable, Image, Platform } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { windowWidth, windowHeight, fontSizes } from "@/themes/app.constant";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";

export default function AuthModal() {
  const configureGoogleSignIn = () => {
    if (Platform.OS === "ios") {
      GoogleSignin.configure({
        iosClientId: process.env.EXPO_PUBLIC_IOS_GOOGLE_API_KEY,
      });
    }
  };
  const googleSignIn = async () => {};
  return (
    <BlurView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Pressable
        style={{
          width: windowWidth(420),
          height: windowHeight(250),
          marginHorizontal: windowWidth(50),
          backgroundColor: "#fff",
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={(e) => e.stopPropagation()}
      >
        <Text
          style={{
            fontSize: fontSizes.FONT35,
            fontFamily: "Poppins_700Bold",
          }}
        >
          Join Learnify
        </Text>
        <Text
          style={{
            fontSize: fontSizes.FONT17,
            paddingTop: windowHeight(5),
            fontFamily: "Poppins_300Light",
          }}
        >
          It's easier than you think
        </Text>
        <View
          style={{
            paddingVertical: windowHeight(10),
            flexDirection: "row",
            gap: windowWidth(20),
          }}
        >
          <Pressable onPress={() => googleSignIn()}>
            <Image
              source={require("@/assets/images/onboarding/google.png")}
              style={{
                width: windowWidth(40),
                height: windowHeight(40),
                resizeMode: "contain",
              }}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require("@/assets/images/onboarding/github.png")}
              style={{
                width: windowWidth(40),
                height: windowHeight(40),
                resizeMode: "contain",
              }}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require("@/assets/images/onboarding/apple.png")}
              style={{
                width: windowWidth(40),
                height: windowHeight(40),
                resizeMode: "contain",
              }}
            />
          </Pressable>
        </View>
      </Pressable>
    </BlurView>
  );
}
