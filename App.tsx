import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './navigation'

import useCachedResources from './hooks/useCachedResources'


export default function App() {
  const isLoaded = useCachedResources()

  if (!isLoaded) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}