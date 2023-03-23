import React, { useRef, useEffect } from 'react';
import { Text, View, Animated, TouchableOpacity, StyleSheet, Easing, useWindowDimensions } from 'react-native';

const Page4 = () => {
    const valueTranslateX = useRef(new Animated.Value(0)).current;
    const valueTranslateY = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const rotateValue = useRef(new Animated.Value(0)).current;
    const opacityValue = useRef(new Animated.Value(1)).current;

    const { width, height, fontScale, scale } = useWindowDimensions();
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(valueTranslateX, {
                    toValue: width * 0.8,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(valueTranslateY, {
                    toValue: height * 0.9,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(valueTranslateX, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(valueTranslateY, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();

        Animated.loop(
            Animated.sequence([
                Animated.timing(opacityValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityValue, {
                    toValue: 0,
                    duration: 1000,
                    delay: 1000,
                    useNativeDriver: true,
                })
            ]),
        ).start();
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleValue, {
                    toValue: 2,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),

            ]),
        ).start()
        Animated.loop(
            Animated.timing(rotateValue, {
                toValue: -1,
                duration: 2000,
                useNativeDriver: true,
                // easing: Easing.bezier(0.42, 0, 0.58, 1)
            })
        ).start();

    }, [])
    const interpolatedRotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.boxAnimated, { opacity: opacityValue, transform: [{ translateX: valueTranslateX }, { translateY: valueTranslateY }, { scale: scaleValue }, { rotate: interpolatedRotate }] }]}>
                <Text>Hello</Text>
            </Animated.View>
        </View>
    )
}

export default Page4

const styles = StyleSheet.create({
    boxAnimated: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
    },
    container: {
        width: '100%',
        height: '100%',
    },
})