import React, {useState} from 'react';
import {View, ScrollView, Dimensions, ImageBackground} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function App() {
  const [lista, setLista] = useState([
    {
      titulo: 'Rouge One',
      text: 'Lorem Ipsum  ',
      release: 2018,
      img: 'https://images-na.ssl-images-amazon.com/images/I/71CcCQcddsL.jpg',
    },

    {
      titulo: 'Rouge Two',
      text: 'Lorem Ipsum  ',
      release: 2018,
      img: 'https://images-na.ssl-images-amazon.com/images/I/71CcCQcddsL.jpg',
    },

    {
      titulo: 'Rouge Tree',
      text: 'Lorem Ipsum  ',
      release: 2018,
      img: 'https://images-na.ssl-images-amazon.com/images/I/71CcCQcddsL.jpg',
    },

    {
      titulo: 'Rouge Four',
      text: 'Lorem Ipsum  ',
      release: 2018,
      img: 'https://images-na.ssl-images-amazon.com/images/I/71CcCQcddsL.jpg',
    },
  ]);

  const [background, setBackground] = useState(lista[0].img);
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{flex: 1, height: screenHeight}}>
          <View
            style={{...StyleSheet.absoluteFill, backgroundColor: '#000000'}}>
            <ImageBackground source={{uri: background}} style={styles.imgBg} />

            <Text>teste de mensagem</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imgBg: {
    flex: 1,
    height: null,
    width: null,
    justifyContent: 'flex-start',
    backgroundColor: '#000000',
  },
});
