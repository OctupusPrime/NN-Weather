import { Text, View, ScrollView, Image, LayoutChangeEvent } from 'react-native'
import React from 'react'

import Logo from "../assets/images/icons/mstlySunnySmall.svg"

import tw from '../lib/tailwind'

import { vw } from '../constants/Layout'

export function RowList() {
    const data = Array.from({length: 10})

    return (
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={tw`flex flex-row`}
            contentContainerStyle={{padding: 16, paddingBottom: 30, paddingTop: 5}}
            overScrollMode={'never'}>
            <View style={tw`absolute inset-0 top-1/2 bg-white`} />
            {
                data.map((_, i) => 
                    <View 
                        style={[tw`rounded-lg bg-white w-[${15.4*vw}px] 
                            flex items-center ${i === data.length - 1 ? '' : 'mr-4'}`,
                            {
                                shadowColor: "#000",
                                shadowOffset:{
                                width: 0,
                                height: 4,
                                },
                                shadowOpacity: 0.30,
                                shadowRadius: 4.65,
                                elevation: 8,
                            }]} 
                        key={i}>
                        <Text style={tw`font-m-bold text-lg mt-[6px]`}>Now</Text>
                        <Logo width={40} height={40} style={tw`mt-[6px]`}/>
                        <Text style={tw`font-m-bold text-lg my-[6px]`}>-6°</Text>
                    </View>
                )
            }
        </ScrollView>   
    )
}

export default RowList