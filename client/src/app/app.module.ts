import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { EditorComponent } from './components/editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayTextComponent } from './pages/display-text/display-text.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BypassStyleSanitizePipe } from './pipes/bypass-style-sanitize.pipe';
import { NotifierModule } from 'angular-notifier';
import { notifyConfig } from 'src/configs/notifConfig';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    EditorComponent,
    DisplayTextComponent,
    HomePageComponent,
    NotFoundComponent,
    BypassStyleSanitizePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'share-text-online-paste-it-share-it',
    }),
    AppRoutingModule,
    HttpClientModule,
    NotifierModule.withConfig(notifyConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
