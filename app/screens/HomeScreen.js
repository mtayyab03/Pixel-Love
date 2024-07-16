import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Platform,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons, FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// Components
import Screen from "../components/Screen";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

const HomeScreen = () => {
  const coinList = [
    {
      id: 1,
      money: "+20",
      day: "Day 1",
    },
    {
      id: 2,
      money: "+20",
      day: "Day 2",
    },
    {
      id: 3,
      money: "+25",
      day: "Day 3",
    },
    {
      id: 4,
      money: "+25",
      day: "Day 4",
    },
    {
      id: 5,
      money: "+30",
      day: "Day 5",
    },
    {
      id: 6,
      money: "+30",
      day: "Day 6",
    },
    {
      id: 7,
      money: "+30",
      day: "Day 7",
    },
    {
      id: 8,
      money: "+40",
      day: "Day 8",
    },
    {
      id: 9,
      money: "+40",
      day: "Day 9",
    },
    {
      id: 10,
      money: "+40",
      day: "Day 10",
    },
  ];
  const beginnerCoinList = [
    {
      id: 1,
      title: "Get reward notifications",
      money: "20",
    },
    {
      id: 2,
      title: "Get reward sharing",
      money: "20",
    },
    {
      id: 3,
      title: "Get reward review",
      money: "100",
    },
    {
      id: 4,
      title: "Complete your profile",
      money: "50",
    },
    {
      id: 5,
      title: "Complete Book of Love",
      money: "50",
    },
    {
      id: 6,
      title: "Follow us on Instagram",
      money: "50",
    },
    {
      id: 7,
      title: "Follow us on Tik Tok",
      money: "50",
    },
    {
      id: 8,
      title: "Confirm email",
      money: "5",
    },
  ];
  const adsWatchList = [
    {
      id: 1,

      money: "5",
    },
    {
      id: 2,

      money: "5",
    },
    {
      id: 3,

      money: "10",
    },
    {
      id: 4,

      money: "10",
    },
    {
      id: 5,

      money: "15",
    },
    {
      id: 6,

      money: "15",
    },
  ];
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: RFPercentage(7) }}
        style={{ width: "100%" }}
      >
        <ImageBackground
          style={{
            width: "100%",
            height:
              Platform.OS == "android" ? RFPercentage(207) : RFPercentage(202),
            paddingBottom: RFPercentage(2),
            resizeMode: "contain",
            alignItems: "center",
          }}
          source={icons.imagebg}
        >
          <View
            style={{
              width: "92%",
              alignItems: "flex-start",
              marginTop: RFPercentage(13),
            }}
          >
            <Image
              style={{
                width: RFPercentage(1.3),
                height: RFPercentage(2),
              }}
              source={icons.arrowleft}
            />

            <View
              style={{
                marginTop: RFPercentage(1.5),
                marginLeft: RFPercentage(1),
              }}
            >
              <Text
                style={{
                  color: Colors.purewhite,
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(1.9),
                }}
              >
                Your Bonus:
              </Text>

              <Text
                style={{
                  marginTop: RFPercentage(0.2),
                  color: Colors.purewhite,
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.1),
                }}
              >
                20
              </Text>
            </View>
          </View>

          {/* 2nd background */}
          <View
            style={{
              marginTop: RFPercentage(6.5),
              width: "92%",
              backgroundColor: "#1E1E1E",
              borderRadius: RFPercentage(2),
              padding: RFPercentage(2),
            }}
          >
            <Text
              style={{
                marginTop: RFPercentage(0.2),
                color: Colors.purewhite,
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(1.9),
              }}
            >
              Daily Check-in
            </Text>
            <Text
              style={{
                marginTop: RFPercentage(0.2),
                color: "#8D8D8D",
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.4),
              }}
            >
              Earn rewards for check-in
            </Text>

            {/* coin scroll */}
            <ScrollView
              contentContainerStyle={{
                marginTop: RFPercentage(2),
                // marginLeft: RFPercentage(3),
                paddingRight: 30,
                flexDirection: "row",
              }}
              style={{ flexShrink: 0, flexGrow: 0 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {coinList.map((item, i) => (
                <View
                  key={i}
                  style={{
                    alignItems: "center",
                    marginLeft: item.id === 1 ? 0 : RFPercentage(0.7),
                  }}
                >
                  <View
                    style={{
                      width: RFPercentage(5.5),
                      paddingVertical: RFPercentage(1),
                      borderRadius: RFPercentage(1.3),
                      backgroundColor: "#2E3138",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#878787",
                        fontFamily: FontFamily.semiBold,
                        fontSize: RFPercentage(1.7),
                      }}
                    >
                      {item.money}
                    </Text>
                    <Image
                      style={{
                        marginTop: RFPercentage(0.8),
                        marginBottom: RFPercentage(0.3),
                        width: RFPercentage(2),
                        height: RFPercentage(2),
                      }}
                      source={icons.coin}
                    />
                  </View>

                  <Text
                    style={{
                      marginTop: RFPercentage(0.2),
                      color: "#8D8D8D",
                      fontFamily: FontFamily.semiBold,
                      fontSize: RFPercentage(1.3),
                    }}
                  >
                    {item.day}
                  </Text>
                </View>
              ))}
            </ScrollView>

            <View
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LinearGradient
                colors={[Colors.primary, "#FA67C6"]} // Define your two gradient colors here
                start={{ x: 0, y: 0 }} // Start point (top-left)
                end={{ x: 1, y: 1 }} // End point (bottom-right)
                style={{
                  width: "90%",
                  paddingVertical: RFPercentage(1.2),
                  borderRadius: RFPercentage(5),
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: RFPercentage(2),
                }}
              >
                <Text style={styles.buttontext}>Get Daily Bonus</Text>
              </LinearGradient>
            </View>

            <View style={{ marginTop: RFPercentage(2.5) }} />
            <Text
              style={{
                marginTop: RFPercentage(0.2),
                color: Colors.purewhite,
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(1.9),
              }}
            >
              Task for Beginners
            </Text>
            <Text
              style={{
                marginTop: RFPercentage(0.2),
                color: "#8D8D8D",
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.4),
              }}
            >
              Only one chance
            </Text>

            {beginnerCoinList.map((item, i) => (
              <View
                key={i}
                style={{
                  marginTop: RFPercentage(1.5),
                  width: "100%",
                  paddingHorizontal: RFPercentage(2),
                  paddingVertical: RFPercentage(1.5),
                  backgroundColor: "#2E3138",
                  borderRadius: RFPercentage(1),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      width: RFPercentage(3.5),
                      height: RFPercentage(3.5),
                    }}
                    source={icons.oncoin}
                  />

                  <View style={{ marginLeft: RFPercentage(1.5) }}>
                    <Text
                      style={{
                        color: Colors.purewhite,
                        fontFamily: FontFamily.semiBold,
                        fontSize: RFPercentage(1.5),
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        marginTop: RFPercentage(0.2),
                        color: "#FF6BC5",
                        fontFamily: FontFamily.regular,
                        fontSize: RFPercentage(1.4),
                      }}
                    >
                      + {item.money} Bonus
                    </Text>
                  </View>
                </View>

                <LinearGradient
                  colors={[Colors.primary, "#FA67C6"]} // Define your two gradient colors here
                  start={{ x: 0, y: 0 }} // Start point (top-left)
                  end={{ x: 1, y: 1 }} // End point (bottom-right)
                  style={{
                    padding: RFPercentage(0.2),
                    paddingHorizontal: RFPercentage(1.5),
                    borderRadius: RFPercentage(5),
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: Colors.purewhite,
                      fontSize: RFPercentage(1.4),
                      fontFamily: FontFamily.semiBold,
                    }}
                  >
                    Get
                  </Text>
                </LinearGradient>
              </View>
            ))}

            <View style={{ marginTop: RFPercentage(2.5) }} />
            <Text
              style={{
                marginTop: RFPercentage(0.2),
                color: Colors.purewhite,
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(1.9),
              }}
            >
              Watch Ads, Earn Bonus
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: RFPercentage(0.2),
              }}
            >
              <Text
                style={{
                  color: "#8D8D8D",
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1.4),
                }}
              >
                Watch all Ads, get extra rewards
              </Text>
              <Text
                style={{
                  marginLeft: RFPercentage(1),
                  color: "#FF8AD2",
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1.4),
                }}
              >
                + 20 Bonus
              </Text>
            </View>

            {/* ads map */}
            {adsWatchList.map((item, i) => (
              <View
                key={i}
                style={{
                  marginTop: RFPercentage(1.5),
                  width: "100%",
                  paddingHorizontal: RFPercentage(2),
                  paddingVertical: RFPercentage(1.5),
                  backgroundColor: "#2E3138",
                  borderRadius: RFPercentage(1),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      width: RFPercentage(3.5),
                      height: RFPercentage(3.5),
                    }}
                    source={icons.oncoin}
                  />

                  <Text
                    style={{
                      marginLeft: RFPercentage(1.5),
                      color: "#FF6BC5",
                      fontFamily: FontFamily.semiBold,
                      fontSize: RFPercentage(1.6),
                    }}
                  >
                    + {item.money} Bonus
                  </Text>
                </View>

                <LinearGradient
                  colors={[Colors.primary, "#FA67C6"]} // Define your two gradient colors here
                  start={{ x: 0, y: 0 }} // Start point (top-left)
                  end={{ x: 1, y: 1 }} // End point (bottom-right)
                  style={{
                    padding: RFPercentage(0.2),
                    paddingHorizontal: RFPercentage(0.6),
                    borderRadius: RFPercentage(5),
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: item.id === 1 ? 1 : 0.4,
                  }}
                >
                  <Text
                    style={{
                      color: Colors.purewhite,
                      fontSize: RFPercentage(1.4),
                      fontFamily: FontFamily.semiBold,
                    }}
                  >
                    Watch
                  </Text>
                </LinearGradient>
              </View>
            ))}
            {/* end 2nd bg */}
          </View>
        </ImageBackground>

        <View
          style={{
            width: "100%",
            backgroundColor: "#000000",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: "#000000",
              marginTop: RFPercentage(1),
              position: "relative",
              bottom: Platform.OS == "android" ? 0 : RFPercentage(10),
            }}
          >
            <Text
              style={{
                color: Colors.purewhite,
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(1.7),
              }}
            >
              Description
            </Text>

            <Text
              style={{
                marginTop: RFPercentage(0.7),
                color: Colors.purewhite,
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.2),
              }}
            >
              1. All interpretation rights of Bonus belong to Pixllove
            </Text>
            <Text
              style={{
                marginTop: RFPercentage(1),
                color: Colors.purewhite,
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.2),
              }}
            >
              2. Bonus can only be used for depixelation or livechat, valid for
              10 days,{" "}
            </Text>
            <Text
              style={{
                color: Colors.purewhite,
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.2),
                paddingLeft: RFPercentage(1),
              }}
            >
              {" "}
              and will be automatically expired and liquidated after expiration.
            </Text>

            <Text
              style={{
                marginTop: RFPercentage(1),
                color: Colors.purewhite,
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.2),
              }}
            >
              3. For 100 bonus coins, you get 1 depixelation and 3 live chats
            </Text>

            <Text
              style={{
                marginTop: RFPercentage(1),
                color: Colors.purewhite,
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.2),
              }}
            >
              4. The daily limit will be used first when going live. After that,
              bonus{" "}
            </Text>
            <Text
              style={{
                color: Colors.purewhite,
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.2),
                paddingLeft: RFPercentage(1),
              }}
            >
              {" "}
              coins will be used. If there are not enough bonus coins, the
            </Text>
            <Text
              style={{
                color: Colors.purewhite,
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.2),
                paddingLeft: RFPercentage(1),
              }}
            >
              {" "}
              balance will be used automatically.
            </Text>
            <Text
              style={{
                marginTop: RFPercentage(1),
                color: Colors.purewhite,
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.2),
              }}
            >
              5. The sign-in refreshes every evening at 0 am(UTC+1)
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  buttontext: {
    color: Colors.purewhite,
    fontSize: RFPercentage(1.6),
    fontFamily: FontFamily.semiBold,
  },
});
