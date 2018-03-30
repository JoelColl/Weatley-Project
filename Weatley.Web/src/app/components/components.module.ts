import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { AccountingModule } from './main-components/accounting/accounting.module';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { LoginModule } from './main-components/login/login.module';


@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AccountingModule,
		MainLayoutModule,
		LoginModule
	],
	providers: [],
	exports: [
		AccountingModule,
		MainLayoutModule,
		LoginModule
	]
})
export class ComponentModule { }
