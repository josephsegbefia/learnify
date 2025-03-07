import * as SecureStore from "expo-secure-store";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Redirect } from "expo-router";

export default function index() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const subscription = async () => {
      const token = SecureStore.getItem("accessToken");
      setLoggedInUser(token ? true : false);
    };

    subscription();
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Redirect href={!loggedInUser ? "/(routes)/onboarding" : "/(tabs)"} />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
