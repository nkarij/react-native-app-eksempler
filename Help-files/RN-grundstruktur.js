// Se mit første forsøg her:
// https://snack.expo.io/@nkarij/groaning-scone

// GENVEJ/SNIPPET TIL AT OPRETTE ET PROJEKT MED STYLESHEET: RNCS
// GENVEJ TIL AT OPRETTE EN CONSTRUCTOR, INDE I CLASS: RCONST

// import react, import = same as require.
import * as React from 'react';
// import react-native components. 
// View svarer til et div-tag. Alt indhold skal ligge i view. View skal altid bruges. 
// Text = text-felt. Til at udskrive text på siden.
// stylesheet, bruges til at style app´en.
import { Text, View, StyleSheet } from 'react-native';
// importer konstanter (const) fra expo.
import Constants from 'expo-constants';

// You can import from local files

// GENVEJSTAST/SNIPPET TIL AT OPRETTE EN GRUNDSTRUKTUR: RNCS

import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

// kode-blok som renderer vores kode, så vi kan se den.
// vi laver først en class, som knyttes til  React.Component (med extends).
// extends betyder at class´en arver alle metoder og egenskaber fra React.Components.
// vi eksporterer classen ved at angive classen som default
// Hvis man bruger reactnatives quickstart vil der stå en function, som skal laves om til en class
export default class App extends React.Component {
  // renderer det i krølle-paranteserne.
  render() {
    return (
      // view er start-tag, og bliver stylet.
      <View style={styles.container}>
        // inde i view, ligger Text element. bliver også stylet. NB man kan ikke skrive noter i view :D
        <Text style={styles.paragraph}>
        // den text som vises:
          Change code in the editor and watch it change on your phone! Save to get a shareable url.
        </Text>
        // Card komponentet/objektet.
        <Card>
          // brug variabelnavn fra import. herinde ligger vores egne komponentet/components. Se components-mappen. 
          <AssetExample />
        </Card>
      </View>
    );
  }
}

// stylesheet bruges til at lave styling, knyttes til Styles-objektet.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // bemærk camelCase pg javascript styling-konventioner.
    justifyContent: 'center',
    // her anvendes Expo-Constants. Vi laver vores egne constants senere.
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});