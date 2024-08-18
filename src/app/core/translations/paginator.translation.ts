import {MatPaginatorIntl} from "@angular/material/paginator";
import {Injectable} from "@angular/core";

@Injectable()
export class PaginatorTranslation extends MatPaginatorIntl {
  constructor() {
    super();
  }

  override itemsPerPageLabel: string = "Elementos por página";
  override nextPageLabel: string = "Página siguiente";
  override previousPageLabel: string = "Página anterior";
  override firstPageLabel: string = "Primera página";
  override lastPageLabel: string = "Última página";

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (!length) {
      return '0 de 0 elementos';
    }

    const firstItemPage: number = page * pageSize;
    const lastItemPage: number = (firstItemPage < length)
      ? Math.min(firstItemPage + pageSize, length)
      : firstItemPage + pageSize;

    const currentPage: string = `Página ${page + 1} de ${Math.trunc(length / pageSize)}`;
    const showRows: string = `Elem. ${firstItemPage + 1} al ${lastItemPage} de ${length} elementos totales`;

    return `${currentPage} - (${showRows}).`;
  }
}
