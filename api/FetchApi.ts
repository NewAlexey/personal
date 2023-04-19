/**
 * Класс для работы с "fetch".
 */
export class FetchApi {
    /**
     * Статический экземпляр класса "FetchApi".
     */
    private static instance: FetchApi;

    /**
     * Сообщение ошибки, если ответ сервера не может быть обработан.
     */
    private defaultErrorMessage = "Запрос не может быть обработан";

    /**
     * Сообщение ошибки, если произошла ошибка сети.
     */
    private defaultNetworkErrorMessage = "Ошибка сети";

    /**
     * Статический метод для получения единственного экземпляра класса.
     */
    public static getInstance() {
        if (!this.instance) {
            this.instance = new FetchApi();
        }

        return this.instance;
    }

    /**
     * Метод выполняет запрос "fetch" на переданный "url" с методом "GET".
     *
     * @param url url-адрес запроса.
     *
     * @return возвращает десериализованный результат ответа "api",
     * либо объект ошибки.
     */
    public async get(url: string): Promise<any> {
        const fetchGet = async () => fetch(url);

        return this.fetchWrapper(fetchGet);
    }

    /**
     * Метод выполняет запрос "fetch" на переданный "url" и "body",
     * с "header"-ом "Content-Type": "application/json" с методом "POST".
     *
     * @param url url-адрес запроса.
     * @param body данные тела запроса.
     *
     * @return возвращает десериализованный результат ответа "api",
     * либо объект ошибки.
     */
    public async post(url: string, body: any): Promise<any> {
        const fetchPost = async () => fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        return this.fetchWrapper(fetchPost);
    }

    /**
     * Метод выполняет запрос "fetch" на переданный "url" и "body",
     * с "header"-ом "Content-Type": "application/json" с методом "PUT".
     *
     * @param url url-адрес для запроса.
     * @param body данные тела запроса.
     *
     * @return возвращает десериализованный результат ответа "api",
     * либо объект ошибки.
     */
    public async put(url: string, body: any): Promise<any> {
        const fetchPut = async () => fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        return this.fetchWrapper(fetchPut);
    }

    /**
     * Метод выполняет запрос "fetch" на переданный "url" с методом "DELETE".
     *
     * @param url url-адрес для запроса.
     *
     * @return возвращает десериализованный результат ответа "api",
     * либо объект ошибки.
     */
    public async delete(url: string): Promise<void> {
        const fetchDelete = async () => fetch(url, {
            method: "DELETE",
        });

        return this.fetchWrapper(fetchDelete);
    }

    /**
     * Метод выполняет вызов переданного запроса в блоке try...catch и отлавливает
     * ошибку выполнения запроса.
     *
     * @param fetch выполняемая функция-запрос.
     *
     * @return возвращает десериализованный результат ответа "api",
     * либо объект ошибки.
     */
    private fetchWrapper(fetch: () => Promise<Response>): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {
                const response = await fetch();

                if (response.status !== 200) {
                    reject(new Error(this.defaultErrorMessage));

                    return;
                }

                try {
                    resolve(await response.json());

                    return;
                } catch (error) {
                    resolve(error);

                    return;
                }
            } catch (error) {
                reject(new Error(this.defaultNetworkErrorMessage));
            }
        });
    }
}
