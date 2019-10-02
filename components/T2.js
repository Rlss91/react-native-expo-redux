import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

const T2 = ()=>{
    const cFromRedux = useSelector(state => state.r1.c)

    return(
        <View>
            <Text>{cFromRedux}</Text>
        </View>
    )
}

export default T2