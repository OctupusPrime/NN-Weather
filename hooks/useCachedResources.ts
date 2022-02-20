import { FontAwesome } from "@expo/vector-icons"
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

export default function useCachedResources() {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false)

    useEffect(() => {
        async function loadResources() {
            try {
                SplashScreen.preventAutoHideAsync()

                await Font.loadAsync({
                    ...FontAwesome.font,
                    'Montserrat': require('../assets/fonts/Montserrat-Regular.ttf'),
                    'Montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
                    'Montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf') 
                })
            } catch (e) {
                console.warn(e)
            } finally {
                setIsLoadingComplete(true)
                SplashScreen.hideAsync()
            }
        }

        loadResources();
    }, [])

    return isLoadingComplete
}