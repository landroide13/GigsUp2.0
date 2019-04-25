import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { ProposalNewComponent } from './components/proposal-new/proposal-new.component';
import { ProposalListComponent } from './components/proposal-list/proposal-list.component';
import { ProposalShowComponent } from './components/proposal-show/proposal-show.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    ProposalComponent,
    ProposalNewComponent,
    ProposalListComponent,
    ProposalShowComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
