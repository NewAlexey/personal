export enum OperationStatusEnum {
    OK = "OK",
    ERROR = "ERROR",
}

export interface IRequestServiceResponse {
    message: string;
    status: OperationStatusEnum;
}
