import { useCallback, useState } from "react";

export function useForm<FormData>(initialState: FormData): [FormData, (value: string, field: keyof FormData) => void] {
    const [formData, setFormData] = useState<FormData>(initialState);

    const onSetFormData = useCallback((value: string, field: keyof FormData) => (
        setFormData((prevValue) => ({
            ...prevValue,
            [field]: value,
        }))
    ), []);

    return [formData, onSetFormData];
}
