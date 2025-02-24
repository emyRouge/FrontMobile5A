import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TextInput, SafeAreaView, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const dispositivos = [
  { id: "1", nombre: "Laptop", propietario: "Uxue", tipo: "F250", codigo: "23fr5t6" },
  { id: "2", nombre: "Laptop", propietario: "Emy", tipo: "F250", codigo: "23fr5t6" },
  { id: "3", nombre: "Laptop", propietario: "Elias", tipo: "F250", codigo: "23fr5t6" },
];


export default function PantallaAdminDispositivos() {
  const renderItem = ({ item }) => (
    <View style={estilos.tarjeta}>
      <Image source={{ uri: "https://i2.wp.com/mayoresconectados.com.ar/wp-content/uploads/2018/07/computadora-de-escritorio.png?resize=302,193" }} style={estilos.imagen} />
      <View style={estilos.contenedorInfo}>
        <Text style={estilos.nombreDispositivo}>{item.nombre} - {item.tipo}</Text>
        <Text>{item.propietario}</Text>
        <Text>{item.codigo}</Text>
        <View style={estilos.contenedorCodigo}>
          <Text style={estilos.textoCodigo}>{item.codigo}</Text>
        </View>
      </View>
    </View>
  );


  return (
    <SafeAreaView style={estilos.areaSegura}>
      <StatusBar barStyle="light-content" backgroundColor="#6200ee" />
      <View style={estilos.encabezado}>
        <View style={estilos.etiquetaEncabezado}>
          <Text style={estilos.textoEncabezado}>Administrador</Text>
        </View>
        <View style={estilos.barraBusquedaContenedor}>
          <Ionicons name="search" size={24} color="#888" style={estilos.iconoLupa} />
          <TextInput
            style={estilos.barraBusqueda}
            placeholderTextColor="#888"
          />
        </View>
        <Ionicons name="qr-code" size={24} color="white" style={estilos.iconoQR} />
      </View>
      <View style={estilos.contenedorBlanco}>
        <FlatList
          data={dispositivos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={estilos.contenidoLista}
        />
      </View>
    </SafeAreaView>
  );
}


const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: "#6200ee",
  },
  encabezado: {
    backgroundColor: "#6200ee",
    padding: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    justifyContent: "space-between",
  },
  etiquetaEncabezado: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 37,
    paddingVertical: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    marginLeft: -25,
    borderRadius: 25,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  textoEncabezado: {
    color: "black",
    fontSize: 20,
  },
  barraBusquedaContenedor: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    backgroundColor: "#e0e0e0",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginRight: 60,
    marginLeft: 10,
    alignSelf: 'flex-start',
    marginBottom: -30,
  },
  iconoLupa: {
    marginRight: 10,
  },
  barraBusqueda: {
    flex: 1,
    paddingVertical: 10,
  },
  iconoQR: {
    padding: 5,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  contenedorBlanco: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 10,
    padding: 16,
    flex: 1,
    elevation: 5,
  },
  contenidoLista: {
    padding: 16,
  },
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  imagen: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  contenedorInfo: {
    flex: 1,
  },
  nombreDispositivo: {
    fontWeight: "bold",
    fontSize: 16,
  },
  contenedorCodigo: {
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-end',
  },
  textoCodigo: {
    fontWeight: "bold",
  },
});
