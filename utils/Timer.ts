interface ITimerProps {
    delay: number;
    handler: () => void;
}

export class Timer {
    private floatDelay: number;

    private readonly defaultDelay: number;

    private readonly handler: () => void;

    private isRunning = false;

    private startTime = 0;

    private timerId?: NodeJS.Timer | undefined;

    constructor({
        delay,
        handler,
    }: ITimerProps) {
        this.floatDelay = delay;
        this.defaultDelay = delay;
        this.handler = handler;
    }

    public run() {
        if (this.isRunning) {
            return;
        }

        this.startTime = Date.now();

        this.timerId = setTimeout(() => {
            this.handler();
        }, this.floatDelay);

        this.isRunning = true;
    }

    public pause() {
        clearTimeout(this.timerId);
        this.isRunning = false;

        const result = (Date.now() - this.startTime);
        this.floatDelay = this.defaultDelay - result;
    }

    public stop() {
        clearTimeout(this.timerId);
    }
}
