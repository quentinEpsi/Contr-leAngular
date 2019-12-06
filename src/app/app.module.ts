import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent} from "./login/login/login.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ChannelComponent } from './channel/channel/channel.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ChannelComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatListModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSidenavModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }