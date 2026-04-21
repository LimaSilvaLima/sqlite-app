import { Pressable, PressableProps, Text } from "react-native";

type Props = PressableProps & {
    data: {
        name: string;
        quantity: number;
    }
    
}

export function Product({ data, ...rest }: Props){
    return<Pressable {...rest}>
        <Text>{data.name} - {data.quantity}</Text>
    </Pressable>
}