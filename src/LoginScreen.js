
import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = () => {
        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <View>
            <Text>Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
            />
            <Text>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <Button
                title="Login"
                onPress={handleLogin}
            />
        </View>
    );
}
