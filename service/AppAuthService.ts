import {
    IRequestServiceResponse,
    OperationStatusEnum,
} from "service/service.interfaces";

export class AppAuthService {
    private readonly baseUrl = `${process.env.NEXT_PUBLIC_HOST}api/super-login`;

    public async authRequest(authData: string): Promise<IRequestServiceResponse> {
        try {
            const response = await fetch(
                this.baseUrl,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: authData,
                },
            );

            const responseData = await response.json();

            if (response.status !== 200) {
                return {
                    message: responseData.message,
                    status: OperationStatusEnum.ERROR,
                };
            }

            return {
                message: responseData.message,
                status: OperationStatusEnum.OK,
            };
        } catch (error) {
            return {
                message: "Network Error",
                status: OperationStatusEnum.ERROR,
            };
        }
    }
}
