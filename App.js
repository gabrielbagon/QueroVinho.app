import React from 'react';
import {Image, ImageBackground, View, ScrollView, StyleSheet, Text } from 'react-native';
import Capa from './assets/vinho1.jpg';
import Tinto from './assets/vinhotinto.jpg';
import Merlot from './assets/merlot.jpg';
import Malbec from './assets/malbec.jpg';

export default function App() {
  return (
   
      <View style={ estilos.container } >
      <Text style={ estilos.titulo }>QueroVinho<Text style={ estilos.titulo1}>.app</Text></Text>
      <Text style={ estilos.titulo2 }>Para todas as ocasiões</Text>
      
      <ScrollView>
        <View style={ estilos.container}>
        <ImageBackground source={ Capa } resizeMode='cover' style={estilos.capa} >
          <Text style={estilos.slogan}>Conheça os tipos de vinhos que temos para você!</Text>
        </ImageBackground>
        <View style={estilos.container1}>
          <Text style={estilos.tinto}>Cabernet Sauvignon</Text>
          <Image source={ Tinto } style={estilos.img} />
          <Text style={ estilos.informacoes}>Se você gosta de saborear bons <Text style={ estilos.tinto2}>vinhos tintos</Text>, provavelmente já ouviu falar da uva <Text style={ estilos.tinto1}>Cabernet Sauvignon</Text>. Essa é, sem sombra de dúvidas, a casta tinta mais utilizada para produzir vinhos em várias regiões do mundo. Sua origem é <Text style={ estilos.tinto2}>francesa</Text>, mais especificamente da região de Bordeaux, mas ela é hoje cultivada em países como a Argentina, o Chile, os Estados Unidos e também no <Text style={ estilos.tinto2}>Brasil</Text>, por sua facilidade de se adaptar a diferentes terrenos. A <Text style={ estilos.tinto1}>Cabernet Sauvignon</Text> é uma uva que produz <Text style={ estilos.tinto2}>vinhos encorpados</Text>, discretamente tânicos e com aromas herbáceos, que envelhecem muito bem em garrafa.</Text>
        </View>
        <View style={estilos.container}>
          <Text style={estilos.tinto}>Merlot</Text>
          <Image source={ Merlot } style={estilos.img} />
          <Text style={ estilos.informacoes}>A uva <Text style={ estilos.tinto1}>Merlot</Text> é outra cepa francesa originária de Bordeaux, também <Text style={ estilos.tinto2}>muito popular</Text> em vinhos produzidos fora desse país. Essa uva produz <Text style={ estilos.tinto2}>bebidas macias</Text>, porém encorpadas, com aroma e sabores frutados, ideais para se consumir ainda jovem — ao contrário da <Text style={ estilos.tinto1}>Cabernet</Text>, que aproveita bem o processo de envelhecimento.</Text>
        </View>
        <View style={estilos.container}>
          <Text style={estilos.tinto}>Malbec</Text>
          <Image source={ Malbec } style={estilos.img} />
          <Text style={ estilos.informacoes}>Outra uva francesa, a <Text style={ estilos.tinto1}>Malbec</Text>, começou a fazer muito sucesso em produções vinícolas fora desse país. A <Text style={ estilos.tinto2}>Argentina</Text> é, atualmente, a maior produtora dessa uva, elaborando também os melhores vinhos derivados dessa cepa específica. A <Text style={ estilos.tinto1}>Malbec</Text> é uva uma que produz um <Text style={ estilos.tinto2}>vinho macio</Text>, bastante aromático, com leve sabor de especiarias e flores.</Text>
        </View>
       </View>
       <View style={estilos.footer}>
          
          <Text style={estilos.footer}>QueroVinho<Text style={ estilos.footext1}>.app</Text></Text>
          <Text style={estilos.footer2}><Text style={estilos.footext2}>Contato: (15)99648-3527</Text> </Text>
          <Text style={estilos.footer2}><Text style={estilos.footext2}>E-mail: gabrielegydiobagon@gmail.com</Text> </Text>
          <Text style={estilos.footer2}><Text style={estilos.footext2}>Linkedin: linkedin.com/gabrielbagon</Text> </Text>
          <Text style={estilos.footer2}><Text style={estilos.footext2}>Github: github.com/gabrielbagon</Text> </Text>
          <Text style={estilos.footer}><Text style={estilos.footext}>by Gabriel Bagon</Text> </Text>
          <Text style={estilos.footer2}><Text style={estilos.footext2}></Text> </Text>
          <Text style={estilos.footer2}><Text style={estilos.footext2}></Text> </Text>
        </View>
      </ScrollView>
      </View>
     
    
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 30,
    
  },
  container1: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  titulo: {
    marginTop: 20,
    fontSize: 36,
    color: '#8B0000',
    fontWeight: 'bold',
  },
  slogan: {
    color: '#fff',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'left',
    marginTop: 150,
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,

  },
  titulo1:{
    color: 'grey',
    fontSize: 28,
  },
  titulo2: {
    fontWeight:'bold',
  },
  titulo3: {
    marginTop: 25,
    fontSize: 20,
    textAlign: 'center',
  },
  tinto: {
    fontSize: 25,
    marginTop: 20,
    color: '#8B0000',
    fontWeight: 'bold',
    backgroundColor: '#f6f6de',
  },
  tinto1: {
    color: '#8B0000',
    fontWeight: 'bold',
  },
  tinto2: {
    fontWeight: 'bold',
  },
  informacoes: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,

  },

  img: {
    marginTop: 20,
    marginBottom: 10,
    width: 380,
    height: 300,
    flex: 1,
    borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden',
    
  },
  capa: {
      width: 411,
      height: 411,
      flex: 1,
      
  },
  footer:{
    backgroundColor: '#8B0000',
    marginTop: 20,
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
  },
footext: {
  backgroundColor: '#8B0000',
  color: '#FFF',
  fontSize: 14,
  textAlign: 'center',
},
footext1: {
  color: '#F5F5F5',
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 2,
  marginBottom: 20,
  
},
footext2: {
  color: '#F5F5F5',
  fontSize: 10,
  fontWeight: 'bold',
  
},
footer2:{
  backgroundColor: '#8B0000',
  marginTop: 10,
  color: '#FFF',
  fontWeight: 'bold',
  fontSize: 10,
  textAlign: 'center',
  
},
});

