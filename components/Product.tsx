import { Pressable, PressableProps, Text } from "react-native";

type Props = PressableProps & {
    data: {
        name: string;
        quantity: number;
    }
    
}

export function Product({ data, style, ...rest }: Props) {
    return (
        <Pressable
            style={[
                { backgroundColor: "#CECECE", padding: 10, gap: 12, borderRadius: 5, flexDirection: 'row' },
                
            ]}
            {...rest}
        >
            <Text>{data.name} - {data.quantity}</Text>
        </Pressable>
    );
}