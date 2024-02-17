import StateZ from "./statez";

describe("State Class Tests", () => {
  let initialState: any;
  let state: StateZ;

  beforeEach(() => {
    initialState = { count: 0 };
    state = new StateZ(initialState);
  });

  test("Get initial value", () => {
    expect(state.value).toEqual(initialState);
  });

  test("Set new value", () => {
    const newValue = { count: 1 };
    state.value = newValue;
    expect(state.value).toEqual(newValue);
  });

  test("Set key in object value", () => {
    const newCount = 1;
    state.set("count", newCount);
    expect(state.get("count")).toBe(newCount);
  });

  test("Subscribe and trigger callback on value change", () => {
    const callback = jest.fn();
    state.subscribe(callback);

    const newValue = { count: 1 };
    state.value = newValue;

    expect(callback).toHaveBeenCalledWith(newValue, initialState, null);
  });

  test("Unsubscribe and do not trigger callback after value change", () => {
    const callback = jest.fn();
    state.subscribe(callback, false);
    state.unsubscribe(callback);

    const newValue = { count: 1 };
    state.value = newValue;

    expect(callback).not.toHaveBeenCalled();
  });

  test("Error on setting key in non-object value", () => {
    state.value = 42; // Setting a non-object value

    // Wrap the check in a function to use expect().toThrow()
    const setKeyInNonObjectValue = () => {
      state.set("count", 1);
    };

    expect(setKeyInNonObjectValue).toThrowError("State is not an object");
  });

  test("Error on getting key in non-object value", () => {
    state.value = 42; // Setting a non-object value

    // Wrap the check in a function to use expect().toThrow()
    const getKeyInNonObjectValue = () => {
      state.get("count");
    };

    expect(getKeyInNonObjectValue).toThrowError("State is not an object");
  });
});
