import { Text, View } from 'react-native'
import React from 'react'

import BaseButton from './BaseButton'

import tw from '../lib/tailwind'

export default function Header({title, subtitle, icon, callback,} : {
    title: string,
    subtitle: string,
    icon: React.ComponentProps<typeof BaseButton>['name'],
    callback: Function}) {
    return (
        <View style={tw`flex justify-between flex-row items-center px-4`}>
            <View>
                <Text style={tw`text-lg font-m-medium`}>{subtitle}</Text>
                <Text style={tw`text-3xl font-m-bold`}>{title}</Text>
            </View>
            <BaseButton name={icon} callback={() => callback()}/>
        </View>
    )
}