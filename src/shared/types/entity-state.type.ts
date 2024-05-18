export type EntityState<T> = {
  data: T | null;
  loading: boolean;
  error: any;
};
