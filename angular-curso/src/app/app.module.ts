import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./pages/home/home.component";
import { ParentDataComponent } from './component/parent-data/parent-data.component';
import { DirectivesComponent } from './directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';


@NgModule({
    declarations: [
        AppComponent,
        ParentDataComponent,
        DirectivesComponent,
        IfRenderComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeComponent
    ]
})
export class AppModule { }
