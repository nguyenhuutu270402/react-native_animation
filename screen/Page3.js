import React, { useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text, useWindowDimensions } from 'react-native';

const Page3 = () => {
    const valueTranslateX = useRef(new Animated.Value(0)).current;
    const valueTranslateY = useRef(new Animated.Value(0)).current;
    const { width, height, fontScale, scale } = useWindowDimensions();
    const moveBoxX = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(valueTranslateX, {
                    toValue: width * 0.5,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(valueTranslateX, {
                    toValue: width * -0.5,
                    duration: 1000,
                    isInteraction: false,
                    useNativeDriver: true,
                }),
                Animated.timing(valueTranslateX, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                })
            ])
        ).start()
    };
    const moveBoxY = () => {


        Animated.sequence([
            Animated.spring(valueTranslateY, {
                toValue: -height * 0.5,
                // duration: 1000,
                friction: 2,
                useNativeDriver: true,
            }),
            Animated.spring(valueTranslateY, {
                toValue: 0,
                duration: 1000,
                friction: 2,
                useNativeDriver: true,
            })
        ]).start()

    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, { transform: [{ translateX: valueTranslateX }, { translateY: valueTranslateY }] }]} />
            <TouchableOpacity onPress={moveBoxX}>
                <Text style={styles.buttonText}>Move X</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={moveBoxY}>
                <Text style={styles.buttonText}>Move Y</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => valueTranslateX.stopAnimation()}>
                <Text style={styles.buttonText}>Stop</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Page3

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
    buttonText: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
});