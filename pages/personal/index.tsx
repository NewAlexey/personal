import { Text } from "src/components/library";
import { useAuthContext } from "src/context";

const Personal = () => {
    const { isAuth } = useAuthContext();

    if (!isAuth) {
        return (
            <div>
                <Text
                    style={{ textAlign: "center" }}
                    value="Sorry..."
                />
            </div>
        );
    }

    return (
        <div>
            <Text
                style={{ textAlign: "center" }}
                value="Personal Page!!!!!!!!!!!!"
            />
        </div>
    );
};

export default Personal;
