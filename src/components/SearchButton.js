import React from 'react';
import { View } from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';

export default function SearchButton({focused, size}){
    return(
        <View 
        style={[{
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20
        }, 
        {backgroundColor: focused ? '#033d60' : '#d4d9e2'}]}>
            <MaterialIcons 
            name="search" 
            size={size} 
            color={focused ? '#d4d9e2' : '#033d60'}/>
        </View>
    )
}