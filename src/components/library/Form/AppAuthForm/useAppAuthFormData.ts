import { useForm } from "src/shared/hooks/useForm";
import { IAppAuthModel } from "models/AppAuthModel";

interface IAppLoginForm {
    submit: ({
        login,
        password,
    }: IAppAuthModel) => void;
}

export const useAppAuthFormData = ({ submit }: IAppLoginForm) => {
    const [appAuthData, setAppAuthData] = useForm<IAppAuthModel>({
        login: "",
        password: "",
    });

    const onSubmit = () => submit(appAuthData);

    return {
        appAuthData,
        setAppAuthData,
        onSubmit,
    };
};
