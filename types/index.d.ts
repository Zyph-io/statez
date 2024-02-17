declare module "main" {
    type Callback = (value: any, lastValue: any, keyName: any) => void;
    export default class StateZ {
        #private;
        constructor(value: any);
        get value(): any;
        set value(newValue: any);
        set(keyName: string, value: any): void;
        get(keyName: string): any;
        subscribe(callback: Callback, trigger?: boolean): void;
        unsubscribe(callback: Callback): void;
        private triggerCallbacks;
        private checkObjectType;
    }
}
