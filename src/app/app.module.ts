import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ColorPickerModule } from 'ngx-color-picker';

import { BadgeModule } from './badge/badge.module';


@NgModule({
  imports: [BrowserModule, FormsModule, ColorPickerModule, BadgeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
