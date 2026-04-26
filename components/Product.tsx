import { MaterialIcons } from "@expo/vector-icons";
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
            <Text style={{ flex: 1 }}>
                {data.name} - {data.quantity}
            </Text>
            <MaterialIcons name="delete" size={24} color="red" />
        </Pressable>
    );
}