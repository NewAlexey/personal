import { useForm } from "src/shared/hooks/useForm";
import { IFireBaseAuthModel } from "models/FireBaseAuthModel";

export const useFireBaseAuthFormData = (submit: (formData: IFireBaseAuthModel) => void) => {
    const [fireBaseAuthFormData, setFireBaseAuthFormData] = useForm<IFireBaseAuthModel>({
        email: "",
        password: "",
    });

    const onSubmit = () => submit(fireBaseAuthFormData);

    return {
        fireBaseAuthFormData,
        setFireBaseAuthFormData,
        onSubmit,
    };
};
