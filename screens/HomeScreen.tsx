import React from 'react'
import { SafeAreaView, useSafeAreaInsets  } from 'react-native-safe-area-context'
import { Platform, View, ScrollView, Text, Image, Animated } from 'react-native'

import tw from '../lib/tailwind'

import { vw } from '../constants/Layout'

import Header from '../components/Header'
import BaseTable from '../components/BaseTable'
import RowList from '../components/RowList'

import SunSet from '../assets/images/icons/sunset.svg'
import Snow from '../assets/images/icons/snowflake.svg'
import Droplet from '../assets/images/icons/humidity.svg'
import Wind from '../assets/images/icons/wind.svg'

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const scrollY = new Animated.Value(0)

  const headerCollapse = scrollY.interpolate({
    inputRange: [0, 100, 101],
    outputRange: [60, insets.top, insets.top]
  })
  
  
  return (
    <SafeAreaView edges={['right', 'bottom', 'left']}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false}
        )}>

        <View style={tw`bg-thunder items-center pt-[130px]`}>
          <Image 
            style={tw`h-[${vw*55}px] w-[${vw*55}px]`}
            source={require('../assets/images/thunder.png')}/>

          <Text style={tw`font-m-bold text-7xl`}>-6°</Text>
          <Text style={tw`font-m-regular text-lg mt-3 mb-8`}>
            mostly sunny | H:-1 L:-6 | feels like -9
          </Text>

          <RowList />
        </View>
        
        <View style={tw`mx-4`}>
          <Text style={tw`font-m-bold text-lg mb-4`}>This week</Text>
          <BaseTable />
        </View>

        <View style={tw`mx-[20px] pt-5`}>
          <Text style={tw`font-m-bold text-lg mb-3`}>Today</Text>
          <Text style={tw`font-m-regular text-lg text-gray-500`}>Mostly cloudy today. It`s currently -6; the high will be -1.</Text>
        </View>

        <Sunset />

        <WeatherInfoBlocks info={[
          {
            bg: 'blue-600', 
            icon: <Snow width={25} height={25}/>, 
            name: 'Snow', 
            value: '10 %'
          }, {
            bg: 'cyan-500', 
            icon: <Droplet width={25} height={25}/>, 
            name: 'Humidity', 
            value: '62 %'
          }, {
            bg: 'purple-600', 
            icon: <Wind width={25} height={25}/>, 
            name: 'Wind', 
            value: '5 m/s'
          }
        ]}/>

      </ScrollView>

      <Animated.View 
        style={[
          tw`absolute inset-x-0 top-0 bg-thunder`,
          {paddingTop: headerCollapse}
        ]}>
        <Header                   
          title="New-York" 
          subtitle="Friday, 12 February" 
          callback={() => console.log(1)}
          icon="bars"/>               
      </Animated.View>

    </SafeAreaView>
  )
}

function Sunset() {
  return (
    <View style={tw`mx-4 pt-4`}>
      <SunSet width={100*vw - 32} height={(100*vw - 32)/2.3}/>
      <View style={tw`flex-row justify-between pt-4`}>
        <View>
          <Text style={tw`font-m-medium text-lg`}>Sunrise</Text>
          <Text style={tw`font-m-bold text-base`}>06:52</Text>
        </View>
        <View>
          <Text style={tw`font-m-medium text-lg text-center`}>Noon</Text>
          <Text style={tw`font-m-bold text-base text-center`}>06:52</Text>
        </View>
        <View>
          <Text style={tw`font-m-medium text-lg`}>Sunset</Text>
          <Text style={tw`font-m-bold text-base text-right`}>06:52</Text>
        </View>
      </View>
    </View>
  )
}


function WeatherInfoBlocks({info}: 
  {info: { bg: string, icon: any, name: string, value: string }[] }) {
  return (
    <View style={tw`m-4 flex-row`}>
      {
        info.map((item: 
          { bg: string, icon: any, name: string, value: string }, i) => 
          <View style={tw`flex-1 rounded-lg bg-${item.bg}/25 p-4 ml-${i === 0 ? '0' : '4'} items-baseline`} key={item.name}>
            <View style={tw`rounded-lg bg-${item.bg} p-3`}>
              <React.Fragment>
                {item.icon}
              </React.Fragment>
            </View>
            <Text style={tw`text-base font-m-bold mt-3`}>
              {item.value}
            </Text>
            <Text style={tw`text-sm font-m-medium text-gray-700 mt-1`}>
              {item.name}
            </Text>
          </View>
        )}
    </View>
  )
}