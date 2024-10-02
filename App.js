import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Bem-vindo à Tela Inicial!</Text>
      <Image
        style={styles.homeImage}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Logo_Oficial_Banco_Original_-_Verde.png' }}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Explorar Mais</Text>
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Configurações</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mudar Preferências</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Perfil do Usuário</Text>
      <Image
        style={styles.profileImage}
        source={{ uri: 'https://i.pinimg.com/736x/6f/bd/a1/6fbda13155dd08d3c3d8aaf5cb80fddf.jpg' }}
      />
      <Text style={styles.profileName}>Nome do Usuário</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

function PixScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>PIX Efetivado!</Text>
      <Text style={styles.detailsText}>Você realizou um pagamento via PIX.</Text>
      <Text style={styles.amountText}>Valor: R$ 100,00</Text>
      <Text style={styles.detailsText}>Data: {new Date().toLocaleDateString()}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#7cc',
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ddd',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarLabel: 'Configurações',
            tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={24} color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Pix" 
          component={PixScreen} 
          options={{
            tabBarLabel: 'PIX',
            tabBarIcon: ({ color }) => <Ionicons name="cash-outline" size={24} color={color} />,
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7cc',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7cc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  homeImage: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderColor: '#7cc',
    borderWidth: 3,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 20,
  },
});
