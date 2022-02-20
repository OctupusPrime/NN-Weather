import { Text, View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

import tw from '../lib/tailwind'

export default function BaseButton({name, color = '#000', callback, styleName}: {
    name: React.ComponentProps<typeof FontAwesome>['name'],
    color?: string,
    callback: Function
    styleName?: StyleProp<ViewStyle>}) {
    return (
        <TouchableOpacity style={[tw`rounded bg-white p-[10px] items-center justify-center`, styleName]} onPress={() => callback()}>
            <FontAwesome
                name={name}
                color={color}
                size={20}/>
        </TouchableOpacity>
    )
}
