import { ReactChild, ReactNode } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

type ContainerProps = {
  children: ReactChild | ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <View>
      <Text style={styles.subtitle}>Recent 3</Text>

      <View style={styles.container}>
        {children}
      </View>
    </View>
  );
}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView style={styles.page}>
        <View>
          <Text style={styles.title}>Welcome</Text>

          <Container>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="/screens/TabOneScreen.tsx" />
          </Container>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(250,250,250)'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 42,
    marginBottom: 10,
    fontWeight: '400',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subtitle: {
    color: '#647B9F',
    opacity: 0.5,
    fontSize: 18,
    marginBottom: 20,
  }
});
