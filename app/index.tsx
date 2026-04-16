import { useProductDatabase } from "@/database/useProductDatabase";
import { useState } from "react";
import { Alert, Button, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Input } from "../components/Input";


export default function Index(){

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [products, setProducts] = useState([]);

    const productDatabase = useProductDatabase();
   
    async function create(){
       try {
        if(isNaN(Number(quantity))){
            Alert.alert("Quantidade precisa ser um Numero");
            return;
        }
        const response = await productDatabase.create({name, quantity: Number(quantity)})
        Alert.alert("Produto cadastrado com sucesso ID: " + response.insertedRowId);
       } catch (error) {
            console.log(error);
       }
       
        
    }

    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', padding: 32, gap: 16 }}>
                    <Input placeholder="Nome" onChangeText={setName} value={name}/>
                    <Input placeholder="Quantidade" onChangeText={setQuantity} value={quantity}/>
                    <Button title="Salvar" onPress={create}/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}