import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';   
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
