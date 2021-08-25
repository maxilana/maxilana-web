export interface Paginated<T> {
  pages: number;
  next: boolean;
  prev: boolean;
  limit: number;
  count: number;
  rows: T[];
}
