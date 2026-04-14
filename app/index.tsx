import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";

export default function Index(){
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text> Teste de Reder</Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}