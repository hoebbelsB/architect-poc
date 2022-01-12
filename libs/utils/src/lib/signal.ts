export interface Signal<T extends string, P extends object = object> {
  type: T;
  payload?: P;
}
