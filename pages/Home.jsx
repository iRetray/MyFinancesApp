import React, { useCallback, useMemo, useRef } from "react";
import { Text, View, SafeAreaView } from "react-native";
import CreditCardGenerator from "creditcard-generator";
import CreditCardDisplay from "react-native-credit-card-display";
import { Icon, Avatar, Button } from "@ui-kitten/components";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import profilePhoto from "../assets/profilePhoto.jpg";
import styles from "../styles/Home";
import { useState } from "react";
import AddTransaction from "./AddTransaction";

const Home = ({ navigation }) => {
  const bottomSheetModalRef = useRef(null);

  const getRandomCC = () => {
    return CreditCardGenerator.GenCC();
  };

  const goToAddTransaction = () => {
    this.props.navigation.navigate("Screen");
  };

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.strong}>Bienvenido de nuevo</Text>
          </Text>
          <View style={styles.profile}>
            <Avatar style={styles.avatar} size="giant" source={profilePhoto} />
            <View>
              <Text style={styles.name}>Julian Camilo</Text>
              <View style={styles.description}>
                <Icon style={styles.iconWork} fill="#595959" name="briefcase" />
                <Text style={styles.work}> Frontend developer</Text>
              </View>
            </View>
          </View>
          <View style={styles.graphs}>
            <CreditCardDisplay
              number={getRandomCC()}
              cvc={432}
              expiration="07/24"
              name="Julian Camilo Cruz"
              since="2020"
            />
            <View style={styles.descriptionInfo}>
              <Icon style={styles.iconInfo} fill="#bfbfbf" name="info" />
              <Text style={styles.warning}>
                <Text>Esta tarjeta de credito y sus datos son </Text>
                <Text style={styles.strong}>
                  totalmente aleatorios y para fines de desarrollo.
                </Text>
              </Text>
            </View>
          </View>
          <View style={{ zIndex: 0 }}>
            <View style={styles.moneyView}>
              <Text style={styles.title}>Resumen mensual</Text>
              <Text style={styles.avaliable}>{"$4.300.000"}</Text>
              <View style={styles.description}>
                <Icon
                  style={styles.iconAvaliable}
                  fill="#389e0d"
                  name="flash"
                />
                <Text style={styles.miniDescription}>Disponible</Text>
              </View>
              <Text style={styles.spend}>{"$850.000"}</Text>
              <View></View>
              <View style={styles.description}>
                <Icon style={styles.icon} fill="#f5222d" name="close-circle" />
                <Text style={styles.miniSpend}> Gastado este mes</Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              accessoryLeft={() => (
                <Icon
                  name="plus-circle-outline"
                  style={{ width: 32, height: 32 }}
                  fill="white"
                />
              )}
              onPress={() => navigation.navigate("Details")}
            >
              <Text style={styles.textButton}>Añadir movimiento</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
