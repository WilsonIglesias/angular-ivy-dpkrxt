import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WilsonHomeComponent } from './wilson-home/wilson-home.component';
import { WilsonTasksComponent } from './wilson-tasks/wilson-tasks.component';
import { RouterModule } from '@angular/router';
import { WilsonTasksService } from './wilson-tasks.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: WilsonHomeComponent },
      { path: 'tasks', component: WilsonTasksComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    WilsonHomeComponent,
    WilsonTasksComponent,
  ],
  bootstrap: [AppComponent],
  providers: [WilsonTasksService],
})
export class AppModule {}
