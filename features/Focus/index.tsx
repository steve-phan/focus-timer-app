import React from 'react';

import {
    View, Text, TextInput, StyleSheet, TouchableOpacity,


} from 'react-native'
import Timer from '../Timer';

const size = 120



const Focus = () => {
    const [subject, setSubject] = React.useState<string>();
    const [isReady, setIsReady] = React.useState<boolean>(false)
    const [timer, setTimer] = React.useState<number>(10)

    const handleOnChange = (text: string) => {
        setSubject(text)
    }
    const handleOnPress = () => {
        setIsReady(true)
    }


    const handleTimer = (time: number) => {


        setTimer(time)
    }


    return (
        <View>

            {!isReady ? (
                <View style={styles.container}>
                    <Text style={styles.title} >What do u want to focus?</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleOnChange}
                    />
                    <Text style={styles.todo} >{subject} </Text>
                    <TouchableOpacity style={styles.wrapButton}

                        onPress={handleOnPress}
                    >
                        <Text style={styles.button} >Submit</Text>
                    </TouchableOpacity>
                </View>

            ) : (
                <View style={styles.container}>
                    <Text style={styles.todo} >{subject} </Text>

                    <View style={styles.wrapTimer} >
                        <TouchableOpacity style={styles.wrapButton}

                            onPress={() => handleTimer(10)}
                        >
                            <Text style={styles.button} >10</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wrapButton}

                            onPress={() => handleTimer(15)}
                        >
                            <Text style={styles.button} >15</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wrapButton}

                            onPress={() => handleTimer(20)}
                        >
                            <Text style={styles.button} >20</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Text style={styles.todo} >{timer} </Text> */}
                    <Timer minus={timer} />
                </View>
            )}

        </View>
    )
}

export default Focus
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 10,
        backgroundColor: '#5a1823'
    },
    title: {
        // flex: 0.3,
        padding: 10,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        width: '100%',
        height: 60,
        fontSize: 40,
        backgroundColor: '#fff'
    },
    todo: {
        color: '#fff',
        fontSize: 30,
        paddingVertical: 20,
    },
    wrapButton: {
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        borderStyle: 'solid',
        width: size,
        height: size,
        borderRadius: size / 2
    },
    button: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    wrapTimer: {
        flexDirection: 'row'
    }
});
