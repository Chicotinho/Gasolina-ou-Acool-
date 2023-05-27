import { StatusBar } from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button} from 'react-native';

export default function App() {
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [result, setResult] = useState('');

  const calculateFuel = () => {
    if (alcoholPrice && gasolinePrice) {
      const alcohol = parseFloat(alcoholPrice);
      const gasoline = parseFloat(gasolinePrice);
      const ratio = alcohol / gasoline;
      
      if (ratio < 0.7) {
        setResult('Abasteça com Álcool');
      } else {
        setResult('Abasteça com Gasolina');
      }
    } else {
      setResult('Digite os valores de preço do Álcool e da Gasolina');
    }
  };
	
  return (
	   <View style={styles.container}>
	<View style={styles.titulo}>
      <Text style={styles.txtTitulo}>Gasolina ou Álcool?</Text>
		  </View>
		  
	  <View style={styles.blocoImg}>
			<Image style={styles.Img} source={require('./assets/combustivel.png',)}/>
		</View>
		  
    <View style={styles.bloco}>
      <Text style={styles.label}>Preço do Álcool:</Text>
      <TextInput style={styles.txtInput}
        keyboardType="numeric"
        value={alcoholPrice}
        onChangeText={text => setAlcoholPrice(text)}
      />
		
      <Text style={styles.label}>Preço da Gasolina:</Text>
      <TextInput style={styles.txtInput}
        keyboardType="numeric"
        value={gasolinePrice}
        onChangeText={text => setGasolinePrice(text)}
      />
		
      <Button style={styles.button} title="Calcular" onPress={calculateFuel} />
      <Text style={styles.result}>{result}</Text>
    </View>
	  </View>
	 
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   	backgroundColor:'#FF6B1A'
  },
	titulo: {
		backgroundColor: '#006663',
		height:'10%',
		justifyContent:'center'
	},
	txtTitulo: {
		fontSize: 20,
		textAlign:'center',
		color:'#fff'
	},
	Img: {
		width: 200,
		height: 200,
		borderRadius:10
	},
	blocoImg: {
		alignItems: 'center',
		marginTop: 30
	},
	bloco: {
		marginTop: 10,
		textAlign:'center',
		justifyContent:'center',
		alignItems: 'center' 
	},
	txtInput:{
		backgroundColor:'#fff',
		marginTop: 10,
		width: 200,
		borderRadius:5,
		borderWidth:1,
		fontSize: 20,
		marginBottom: 15,
	},
	Label: {
		backgroundColor:'#A3698E',
		marginTop: 10,
		marginBotton: 10,
		width: 300,
		fontSize: 20
	},
	bloco1: {
		flexDirection: 'row',
		backgroundColor: '#8A7C8B',
		textAlign:'center',
		justifyContent:'center',
	},
	button:{
		backgroundColor:'#00B3AD',
		marginTop: 10,
		marginLeft: 10,
		marginBottom: 15,
		height: 50,
		width: 150,
		borderRadius:5,
		borderWidth:1,
		
	},
	fundobt:{
	backgroundColor: '#E87D76'
   
	},
	letra:{
		fontSize:20,
	}
});