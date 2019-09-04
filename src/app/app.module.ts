import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentsComponent } from './documents/documents.component';
import {
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatTabsModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { FilterComponent } from './documents/filter/filter.component';
import { TableComponent } from './documents/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    FilterComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
