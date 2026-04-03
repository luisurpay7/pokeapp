export interface PaginatedResponse<T> {
  items: T[];
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
}
