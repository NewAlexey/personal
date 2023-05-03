import { serialize } from "cookie";

type ReqCookieType = Partial<{ [key: string]: string; }>;

export class AuthCookieService {
    public readonly COOKIE_SET_HEADER = "set-cookie";

    private readonly HIDDEN_BUTTON_COOKIE_VALUE = "ETODA";

    private readonly HIDDEN_BUTTON_COOKIE_TITLE = process.env.NEXT_PUBLIC_SUPER_LESHA;

    private readonly COOKIE_MAX_AGE_MINUTES = 5;

    private readonly AUTH_COOKIE_VALUE = process.env.SECRETNYE_PECHENOSY;

    private readonly AUTH_COOKIE_TITLE = process.env.SECRETNY_TITLE;

    public getAuthCookies(): string[] {
        const authCookie = this.getAuthCookie();

        return [authCookie];
    }

    public isShowAuthButton(cookies: ReqCookieType | undefined): boolean {
        const receivedCookieValue = cookies?.[this.HIDDEN_BUTTON_COOKIE_TITLE];

        return receivedCookieValue === this.HIDDEN_BUTTON_COOKIE_VALUE;
    }

    public isAuthorizeByCookie(cookies: ReqCookieType | undefined): boolean {
        const receivedCookieValue = cookies?.[this.AUTH_COOKIE_TITLE];

        return receivedCookieValue === this.AUTH_COOKIE_VALUE;
    }

    public getCleansingCookieValue(): string[] {
        const cleansingAuthCookie = this.getAuthCookie(0);

        return [cleansingAuthCookie];
    }

    private getAuthCookie(age = this.COOKIE_MAX_AGE_MINUTES): string {
        return serialize(this.AUTH_COOKIE_TITLE, this.AUTH_COOKIE_VALUE, {
            httpOnly: true,
            maxAge: age * 60,
            path: "/",
        });
    }
}
