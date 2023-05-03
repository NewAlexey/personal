import { useEffect, useState } from "react";

import { FireBaseApi } from "integrations/FireBaseApi";

export function useFireBaseApi() {
    const [FirebaseApiInstance, setFirebaseApiInstance] = useState<FireBaseApi | null>(null);

    useEffect(() => {
        async function createFireBaseApi() {
            const FireBaseApiInstance = await FireBaseApi.getInstance();

            setFirebaseApiInstance(FireBaseApiInstance);
        }

        createFireBaseApi();
    }, []);

    return {
        FireBaseApi: FirebaseApiInstance,
    };
}
