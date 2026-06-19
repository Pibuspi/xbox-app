import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const COLORS = {
  background: '#0E0E0E',
  card: '#222222',
  primary: '#107C10',
  primaryDark: '#0A5C0A',
  accent: '#52B043',
  text: '#FFFFFF',
  textSecondary: '#AAAAAA',
  border: '#333333',
  headerBg: '#107C10',
};

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.center}>
      <View style={styles.logoContainer}>
        <Text style={styles.xboxLogoText}>X</Text>
        <Text style={styles.logoSubtitle}>XBOX</Text>
      </View>
      <Text style={styles.title}>Meu App Xbox</Text>
      <Text style={styles.welcome}>
        Bem-vindo ao universo Xbox!{'\n'}Explore jogos, servicos e muito mais.
      </Text>
      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() => navigation.navigate('Servicos')}
      >
        <Text style={styles.btnText}>🎮  COMECAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSecondary}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.btnTextSecondary}>Sobre o App</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function SobreScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.center}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatar}>👤</Text>
      </View>
      <Text style={styles.title}>Sobre o App</Text>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Desenvolvido por:</Text>
        <Text style={styles.cardValue}>Pibuspi</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Curso:</Text>
        <Text style={styles.cardValue}>Desenvolvimento de Sistemas</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Descricao:</Text>
        <Text style={styles.cardValueSmall}>
          Este aplicativo foi criado como projeto pratico para demonstrar a
          navegacao entre telas utilizando React Native e Expo
        </Text>
      </View>
    </ScrollView>
  );
}

function ServicosScreen() {
  const servicos = [
    { icon: '🎮', titulo: 'Game Pass Ultimate', descricao: 'Acesso a centenas de jogos por assinatura mensal.' },
    { icon: '⚙️', titulo: 'Gears of War', descricao: 'Franquia exclusiva de acao e tiro em terceira pessoa.' },
    { icon: '🌅', titulo: 'Forza Horizon', descricao: 'Simulador de corrida em mundo aberto com graficos incriveis.' },
    { icon: '☁️', titulo: 'Xbox Cloud Gaming', descricao: 'Jogue seus titulos favoritos direto na nuvem, sem console.' },
    { icon: '🏆', titulo: 'Xbox Live Gold', descricao: 'Multiplayer online e jogos gratuitos mensais para membros.' },
    { icon: '🌟', titulo: 'Day One Games', descricao: 'Jogos disponiveis no Game Pass no dia do lancamento.' },
  ];

  return (
    <ScrollView style={styles.screen}>
      <Text style={[styles.title, { marginTop: 24, textAlign: 'center' }]}>
        Nossos Servicos
      </Text>
      <Text style={[styles.textSecondary, { textAlign: 'center', marginBottom: 16 }]}>
        Conheca os servicos e jogos que oferecemos
      </Text>
      {servicos.map((s, i) => (
        <View key={i} style={styles.servicoCard}>
          <Text style={styles.servicoIcon}>{s.icon}</Text>
          <View style={styles.servicoInfo}>
            <Text style={styles.servicoTitulo}>{s.titulo}</Text>
            <Text style={styles.servicoDesc}>{s.descricao}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

function GaleriaScreen() {
  const galeria = [
    { emoji: '🏔️', legenda: 'Halo Infinite - Paisagem Epica' },
    { emoji: '🌆', legenda: 'Forza Horizon - Cidade a Noite' },
    { emoji: '⚔️', legenda: 'Gears 5 - Campo de Batalha' },
    { emoji: '🌌', legenda: 'Starfield - Exploracao Espacial' },
    { emoji: '🐉', legenda: 'Fable - Mundo Fantastico' },
    { emoji: '🏎️', legenda: 'Forza Motorsport - Pista de Corrida' },
  ];

  return (
    <ScrollView style={styles.screen}>
      <Text style={[styles.title, { marginTop: 24, textAlign: 'center' }]}>
        Nossa Galeria
      </Text>
      <Text style={[styles.textSecondary, { textAlign: 'center', marginBottom: 16 }]}>
        Alguns momentos e imagens
      </Text>
      <View style={styles.galeriaGrid}>
        {galeria.map((item, i) => (
          <View key={i} style={styles.galeriaItem}>
            <Text style={styles.galeriaEmoji}>{item.emoji}</Text>
            <Text style={styles.galeriaLegenda}>{item.legenda}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function ContatoScreen({ navigation }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.center}>
      <Text style={styles.title}>Entre em Contato</Text>
      <Text style={styles.textSecondary}>
        Estamos prontos para falar com voce
      </Text>

      <View style={styles.contatoCard}>
        <Text style={styles.contatoIcon}>✉️</Text>
        <View>
          <Text style={styles.contatoLabel}>E-mail</Text>
          <Text style={styles.contatoValor}>contato@meuapp.com</Text>
        </View>
      </View>

      <View style={styles.contatoCard}>
        <Text style={styles.contatoIcon}>📞</Text>
        <View>
          <Text style={styles.contatoLabel}>Telefone</Text>
          <Text style={styles.contatoValor}>(11) 99999-9999</Text>
        </View>
      </View>

      <View style={styles.contatoCard}>
        <Text style={styles.contatoIcon}>📍</Text>
        <View>
          <Text style={styles.contatoLabel}>Cidade</Text>
          <Text style={styles.contatoValor}>Sao Paulo - SP</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.btnPrimary, { marginTop: 24 }]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.btnText}>🏠  VOLTAR PARA HOME</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function CustomDrawerContent(props) {
  const { navigation, state } = props;
  const menuItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Sobre', icon: '👤' },
    { name: 'Servicos', icon: '🎮' },
    { name: 'Galeria', icon: '🖼️' },
    { name: 'Contato', icon: '📞' },
  ];

  return (
    <View style={drawerStyles.container}>
      <View style={drawerStyles.header}>
        <Text style={drawerStyles.xboxLogo}>X</Text>
        <Text style={drawerStyles.headerTitle}>XBOX APP</Text>
        <Text style={drawerStyles.headerSub}>Menu de Navegacao</Text>
      </View>
      <View style={drawerStyles.menu}>
        {menuItems.map((item, i) => {
          const isActive = state.routes[state.index]?.name === item.name;
          return (
            <TouchableOpacity
              key={i}
              style={[
                drawerStyles.menuItem,
                isActive && drawerStyles.menuItemActive,
              ]}
              onPress={() => navigation.navigate(item.name)}
            >
              <Text style={drawerStyles.menuIcon}>{item.icon}</Text>
              <Text
                style={[
                  drawerStyles.menuText,
                  isActive && drawerStyles.menuTextActive,
                ]}
              >
                {item.name}
              </Text>
              {isActive && <View style={drawerStyles.activeBar} />}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={drawerStyles.footer}>
        <Text style={drawerStyles.footerText}>© 2025 Xbox App</Text>
        <Text style={drawerStyles.footerText}>Pibuspi - Dev. Sistemas</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.headerBg },
          headerTintColor: COLORS.text,
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
          drawerStyle: { backgroundColor: COLORS.background, width: 240 },
          sceneContainerStyle: { backgroundColor: COLORS.background },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Sobre" component={SobreScreen} />
        <Drawer.Screen name="Servicos" component={ServicosScreen} />
        <Drawer.Screen name="Galeria" component={GaleriaScreen} />
        <Drawer.Screen name="Contato" component={ContatoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  center: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: COLORS.accent,
  },
  xboxLogoText: {
    fontSize: 48,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  logoSubtitle: {
    fontSize: 10,
    color: COLORS.text,
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  welcome: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 22,
  },
  textSecondary: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  btnPrimary: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 8,
    marginBottom: 12,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  btnSecondary: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    width: '80%',
    alignItems: 'center',
  },
  btnText: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  btnTextSecondary: {
    color: COLORS.accent,
    fontWeight: 'bold',
    fontSize: 15,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    width: '100%',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  cardLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  cardValue: {
    fontSize: 18,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  cardValueSmall: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: COLORS.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  avatar: {
    fontSize: 48,
  },
  servicoCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  servicoIcon: {
    fontSize: 32,
    marginRight: 14,
  },
  servicoInfo: {
    flex: 1,
  },
  servicoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 4,
  },
  servicoDesc: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  galeriaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  galeriaItem: {
    width: '45%',
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  galeriaEmoji: {
    fontSize: 52,
    marginBottom: 8,
  },
  galeriaLegenda: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 16,
  },
  contatoCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  contatoIcon: {
    fontSize: 28,
    marginRight: 14,
  },
  contatoLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 2,
  },
  contatoValor: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: 'bold',
  },
});

const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primaryDark,
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.accent,
  },
  xboxLogo: {
    fontSize: 40,
    color: COLORS.text,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    letterSpacing: 3,
  },
  headerSub: {
    fontSize: 11,
    color: COLORS.accent,
    marginTop: 4,
    letterSpacing: 1,
  },
  menu: {
    flex: 1,
    paddingTop: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 8,
    marginBottom: 4,
    position: 'relative',
  },
  menuItemActive: {
    backgroundColor: COLORS.card,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 14,
  },
  menuText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  menuTextActive: {
    color: COLORS.text,
    fontWeight: 'bold',
  },
  activeBar: {
    position: 'absolute',
    right: 12,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.accent,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
});
