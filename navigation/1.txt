import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, Platform, Image, LayoutChangeEvent } from 'react-native'

import useCachedResources from './hooks/useCachedResources'

import { vw, window } from './constants/Layout'

import tw from './lib/tailwind'

import Header from './components/Header'
import BaseTable from './components/BaseTable'
import RowList from './components/RowList'

import SunSet from './assets/images/icons/sunset.svg'
import SnowIcon from './assets/images/icons/snowflake.svg'
import HumidityIcon from './assets/images/icons/humidity.svg'
import WindIcon from './assets/images/icons/wind.svg'

import { LineChart } from 'react-native-chart-kit'
import { useState } from 'react'

export default function App() {
  const isLoaded = useCachedResources()
  
  const [btnWidth, setBtnWidth] = useState(0)
  const setButtonWidth = (e: LayoutChangeEvent) => {
    setBtnWidth(e.nativeEvent.layout.height)
  }

  if (!isLoaded) {
    return null
  } else {
    return (
      <View>
          <ScrollView 
              style={tw`pt-[${Platform.OS === 'android' ? 25 : 0}px]`}
              stickyHeaderIndices={[0]}>
            <Header 
                  title="New-York" 
                  subtitle="Friday, 12 February" 
                  callback={() => console.log(1)}
                  icon="bars"/>
            
            <View style={tw`flex-1 items-center bg-msunny`}>
              <Image 
                  style={tw`h-[${vw*55}px] w-[${vw*55}px]`}
                  source={require('./assets/images/mostlySunny.png')}/>
              <Text style={tw`font-m-bold text-7xl`}>-6°</Text>
              <Text style={tw`font-m-regular text-lg mt-3`}>mostly sunny | H:-1 L:-6 | feels like -9</Text>
              <RowList />
            </View>

            <View style={tw`mx-[20px]`}>
              <Text style={tw`font-m-bold text-lg mb-[15px]`}>This week</Text>
              <BaseTable />
            </View>

            <View style={tw`mx-[20px] pt-[15px]`}>
              <Text style={tw`font-m-bold text-lg mb-[15px]`}>Today</Text>
              <Text style={tw`font-m-regular text-lg text-gray-500`}>Mostly cloudy today. It`s currently -6; the high will be -1.</Text>
            </View>

            <View style={tw`mx-[20px] pt-[15px]`}>
              <SunSet width={100*vw - 40} height={(100*vw - 40)/2.3}/>
              <View style={tw`flex-row justify-between pt-[15px]`}>
                <View>
                  <Text style={tw`font-m-medium text-lg`}>Sunrise</Text>
                  <Text style={tw`font-m-bold text-base`}>06:52</Text>
                </View>
                <View>
                  <Text style={tw`font-m-medium text-lg`}>Noon</Text>
                  <Text style={tw`font-m-bold text-base`}>06:52</Text>
                </View>
                <View>
                  <Text style={tw`font-m-medium text-lg`}>Sunset</Text>
                  <Text style={tw`font-m-bold text-base text-right`}>06:52</Text>
                </View>
              </View>
            </View>

            <View style={tw`mb-[40px] flex-row mx-[20px] mt-[25px]`}>
              <View style={tw`rounded-lg bg-[#CDE0FD] items-baseline p-[13px] mr-[20px] flex-1`}>
                <View style={tw`rounded-lg bg-[#0363F3] p-[10px]`}>
                  <SnowIcon width={25} height={25}/>
                </View>
                <Text style={tw`text-base font-m-bold mt-[10px]`}>10 %</Text>
                <Text style={tw`text-sm font-m-medium text-gray-700 mt-[5px]`}>Snow</Text>
              </View>
              <View style={tw`rounded-lg bg-[#CCFAFF] items-baseline p-[13px] mr-[20px] flex-1`}>
                <View style={tw`rounded-lg bg-[#02E6FF] p-[10px]`}>
                  <HumidityIcon width={25} height={25}/>
                </View>
                <Text style={tw`text-base font-m-bold mt-[10px]`}>62 %</Text>
                <Text style={tw`text-sm font-m-medium text-gray-700 mt-[5px]`}>Humidity</Text>
              </View>
              <View style={tw`rounded-lg bg-[#ECDAFB] items-baseline p-[13px] flex-1`}>
                <View style={tw`rounded-lg bg-[#9F47EB] p-[10px]`}>
                  <WindIcon width={25} height={25}/>
                </View>
                <Text style={tw`text-base font-m-bold mt-[10px]`}>5 m/s</Text>
                <Text style={tw`text-sm font-m-medium text-gray-700 mt-[5px]`}>Wind</Text>
              </View>
            </View>


          </ScrollView>
          <StatusBar style="auto" />
      </View>
    )
  }
}

{/* <ScrollView 
horizontal
style={tw`mb-[50px]`}
showsHorizontalScrollIndicator={false}
overScrollMode={'never'}
contentContainerStyle={{paddingHorizontal: 20}}
pagingEnabled
onLayout={(e) => setButtonWidth(e)}>
<View 
  style={[tw`rounded-lg bg-moon flex-row justify-between items-center
  p-[20px] pb-[18px]`, {width: window.w - 40}]}>
  <View>
    <Text style={tw`font-m-medium text-3xl text-white`}>London</Text>
    <Text style={tw`font-m-regular text-lg text-white`}>14:52</Text>
  </View>
  <Text style={tw`font-m-bold text-7xl pt-[15px] text-white`}>3°</Text>
</View>
<BaseButton 
  name="trash"
  color="#fff"
  callback={() => console.log(2)}
  styleName={[tw`bg-red-500 ml-[20px] rounded-xl`, {width: btnWidth}]}/>
</ScrollView> */}