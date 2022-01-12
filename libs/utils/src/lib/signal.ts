export interface Signal<T extends string, P = any> {
  type: T;
  payload?: P;
}
