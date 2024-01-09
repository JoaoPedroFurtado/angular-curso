import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ParentDataComponent } from './component/parent-data/parent-data.component';
import { DirectivesComponent } from './directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ListRenderComponent } from './list-render/list-render.component';
import { PipesComponent } from './pipes/pipes.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    PipesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    TwoWayBindingComponent,
  ],
})
export class AppModule {}
