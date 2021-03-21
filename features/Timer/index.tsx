import React, { useEffect, useState, useRef } from 'react'

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const size = 120

type timerType = {
    minus: number;
}

const formatTime = (time: number) => time < 10 ? `0${time}` : time

const Timer = ({ minus }: timerType) => {
    const timerRef = useRef<any>()
    const [isStart, setIsStart] = useState<boolean>(false)
    const [remainMinus, setRemainMinus] = useState(10)
    const [remainSeconds, setRemainSeconds] = useState(formatTime(0))
    const handlePause = () => {
        clearInterval(timerRef.current)
        setIsStart(!isStart)

    }

    useEffect(() => {
        if (!isStart) {
            return
        }
        timerRef.current = setInterval(() => {
            console.log('Hello Interval')
        }, 1000)
        return () =>
            clearInterval(timerRef.current)

    }, [isStart])

    useEffect(() => {
        setRemainMinus(minus)
    }, [minus])

    return (
        <View>
            <Text style={styles.todo} >Remain Time  {remainMinus} : {remainSeconds}</Text>
            <View    >
                <TouchableOpacity style={styles.wrapButton}
                    onPress={handlePause}
                >
                    <Text style={styles.button} > {!isStart ? "Start" : "Pause"} </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Timer


const styles = StyleSheet.create({
    wrapButton: {
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        borderStyle: 'solid',
        width: size,
        height: size,
        borderRadius: size / 2,
        margin: 'auto'
    },
    button: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    todo: {
        color: '#fff',
        fontSize: 30,
        paddingVertical: 20,
    },
})