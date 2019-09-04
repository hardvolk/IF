import { Component } from '@angular/core';
import { DocumentsUtil } from '../documents.util';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{
  displayedColumns: string[] = ['Estado', 'Documento', 'Author', 'Firmante', 'Creado'];
  dataSource = DocumentsUtil.getDocmuentsList();

  constructor() { }
}
