import { Text, View } from 'react-native'
import React from 'react'

import Logo from "../assets/images/icons/mstlySunnySmall.svg"

import tw from '../lib/tailwind'

export default function BaseTable() {
    const data = Array.from({length: 7})

    return (
      <View 
        style={[tw`rounded-xl flex-row justify-between p-[14px] bg-white`, 
        {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10
        }]}>
        {
            data.map((_, i) => 
                <View key={i} style={tw`items-center`}>
                    <Text style={tw`font-m-bold`}>15</Text>
                    <Text style={tw`font-m-bold mt-[10px]`}>-6°</Text>
                    <Logo width={30} height={30} style={tw`mt-[10px]`}/>
                    <Text style={tw`font-m-bold mt-[10px]`}>Mon</Text>
               </View>
            )
        }
      </View>
    )
}