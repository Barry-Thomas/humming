import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { MessageComponent } from './message/message.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HummingsComponent } from './hummings/hummings.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, EditorComponent, MessageComponent, MenuComponent, SidebarComponent, HummingsComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    //   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
