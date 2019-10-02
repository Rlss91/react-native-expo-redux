import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { actF1 } from '../store/actions/action1'
import T2 from './T2'

const T1 = ()=>{
    let [tf, setTf] = useState(true)
    const cFromRedux = useSelector(state => state.r1.c)
    const dispatch = useDispatch()
    const handleDispatch = () => {
        dispatch(actF1())
    }
    return( 
        tf
        ?
        <View>
            <Text>{cFromRedux}</Text>
            <Button title="+1" onPress={handleDispatch} />
            <Button title="next screen" onPress={()=>setTf(!tf)} />
        </View>
        :
        <T2 />
    )
}

export default T1