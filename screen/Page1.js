import React, { useRef } from 'react';
import { View, Animated, TouchableOpacity, StyleSheet, Button } from 'react-native';

const Page1 = () => {
    const opacityValue = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(opacityValue, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(opacityValue, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={{ backgroundColor: 'blue', padding: 100, opacity: opacityValue }}>
            </Animated.View>
            <Button
                onPress={fadeIn}
                title="Fade in"
            />
            <Button
                onPress={fadeOut}
                title="Fade out"
            />
        </View>
    );
};
export default Page1

const styles = StyleSheet.create({})