import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [AppComponent, EditorComponent, MessageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    //   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
