import { Product } from "@/components/Product";
import { ProductDatabase, useProductDatabase } from "@/database/useProductDatabase";
import { useEffect, useState } from "react";
import { Alert, Button, FlatList, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Input } from "../components/Input";


export default function Index(){

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<ProductDatabase[]>([]);

    const productDatabase = useProductDatabase();
   
    async function create(){
       try {
        if(isNaN(Number(quantity))){
            Alert.alert("Quantidade precisa ser um Numero");
            return;
        }
        const response = await productDatabase.create({name, quantity: Number(quantity)})
        list(); 
        Alert.alert("Produto cadastrado com sucesso ID: " + response.insertedRowId);
       } catch (error) {
            console.log(error);
       }
    }

    async function list(){
        try {
            const response = await productDatabase.searchByName(search);
            setProducts(response);           
        } catch (error) {
            console.log(error);
        } 
    }
    useEffect(() => {
        list();
    }, [search]);


    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', padding: 32, gap: 16 }}>
                    <Input placeholder="Nome" onChangeText={setName} value={name}/>
                    <Input placeholder="Quantidade" onChangeText={setQuantity} value={quantity}/>
                    <Button title="Salvar" onPress={create}/>
                    <Input placeholder="Pesquisar por nome" onChangeText={setSearch} value={search}/>
                    <FlatList
                        data={products}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => <Product data={item}  />}
                        scrollEnabled={false}
                        contentContainerStyle={{ gap: 8 }}
                    /> 
                </View>   
            </ScrollView>
        </KeyboardAvoidingView>
    );
}