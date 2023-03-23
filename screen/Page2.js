import React, { useRef } from 'react';
import { View, Animated, TouchableOpacity, StyleSheet, Easing } from 'react-native';

const Page2 = () => {
    const scaleValue = useRef(new Animated.Value(1)).current;
    const rotateValue = useRef(new Animated.Value(0)).current;

    const scaleIn = () => {
        Animated.spring(scaleValue, {
            toValue: 2,
            friction: 2,
            useNativeDriver: true,
        }).start();
    };

    const scaleOut = () => {
        Animated.spring(scaleValue, {
            toValue: 1,
            friction: 2,
            useNativeDriver: true,
        }).start();
    };

    const rotate = () => {
        Animated.timing(rotateValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            // delay: 1000,
        }).start(() => {
            rotateValue.setValue(0);
        });
    };

    const autoAnimated = () => {

        Animated.sequence([
            Animated.spring(scaleValue, {
                toValue: 2,
                friction: 2,
                useNativeDriver: true,
            }),
            Animated.spring(scaleValue, {
                toValue: 1,
                friction: 2,
                useNativeDriver: true,
            }),

        ]).start();
        Animated.timing(rotateValue, {
            toValue: -2,
            duration: 2000,
            useNativeDriver: true,
        }).start(() => {
            rotateValue.setValue(0);
        })
    };

    const interpolatedRotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={scaleIn}>
                <Animated.View style={[styles.box, { transform: [{ scale: scaleValue }] }]}>
                    <Animated.Text style={[styles.text, { transform: [{ rotate: interpolatedRotate }] }]}>
                        Scale In
                    </Animated.Text>
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={scaleOut}>
                <Animated.View style={[styles.box, { transform: [{ scale: scaleValue }] }]}>
                    <Animated.Text style={[styles.text, { transform: [{ rotate: interpolatedRotate }] }]}>
                        Scale Out
                    </Animated.Text>
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={rotate}>
                <View style={[styles.box, styles.rotateBox]}>
                    <Animated.Text style={[styles.text, { transform: [{ rotate: interpolatedRotate }] }]}>
                        Rotate
                    </Animated.Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={autoAnimated}>
                <Animated.View style={[styles.box, { transform: [{ scale: scaleValue }, { rotate: interpolatedRotate }] }]}>
                    <Animated.Text style={[styles.text]}>
                        Rotate
                    </Animated.Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

export default Page2

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    box: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    rotateBox: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'red',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});