import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text, TouchableOpacity } from "react-native";

type Props = PressableProps & {
    data: {
        name: string;
        quantity: number;
    }
    onDelete: () => void;
}

export function Product({ data, onDelete, style, ...rest }: Props) {
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
            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
        </Pressable>
    );
}