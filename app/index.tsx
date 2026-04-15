import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Input } from "../components/Input";

export default function Index(){
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', padding: 32, gap: 16 }}>
                    <Input placeholder="Nome"/>
                    <Input placeholder="Quantidade"/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}