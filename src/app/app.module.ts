import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatTableModule } from '@angular/material/table';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TableComponent],
  imports: [BrowserModule, MaterialModule],
  // exports: [MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
