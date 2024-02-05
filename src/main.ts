type Callback = (value: any, lastValue: any, keyName: any) => void;

export default class StateZ {
  #value: any;
  #callbacks: Callback[] = [];

  constructor(value: any) {
    this.#value = value;
  }

  get value(): any {
    return this.#value;
  }

  set value(newValue: any) {
    this.triggerCallbacks(newValue, null);
    this.#value = newValue;
  }

  set(keyName: string, value: any): void {
    this.checkObjectType();
    this.triggerCallbacks(value, keyName);
    this.#value[keyName] = value;
  }

  get(keyName: string): any {
    this.checkObjectType();
    return this.#value[keyName];
  }

  subscribe(callback: Callback, trigger = true): void {
    this.#callbacks.push(callback);
    if (trigger) {
      this.triggerCallbacks(this.#value, null);
    }
  }

  unsubscribe(callback: Callback): void {
    const index = this.#callbacks.indexOf(callback);
    if (index !== -1) {
      this.#callbacks.splice(index, 1);
    }
    console.log("unsubscribe", this.#callbacks);
  }

  private triggerCallbacks(newValue: any, keyName: any): void {
    for (const callback of this.#callbacks) {
      if (keyName) {
        callback(newValue, this.#value[keyName], keyName);
      } else {
        callback(newValue, this.#value, null);
      }
    }
  }

  private checkObjectType(): void {
    if (typeof this.#value !== "object" || this.#value === null) {
      throw new Error("State is not an object");
    }
  }
}
