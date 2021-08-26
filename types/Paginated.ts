export interface Paginated<T> {
  page: number;
  next: boolean;
  prev: boolean;
  limit: number;
  count: number;
  rows: T[];
}
