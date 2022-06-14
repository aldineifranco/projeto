import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navegacao/header/header.component';
import { MainComponent } from './navegacao/main/main.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig} from './app.routes';
import { ProdutosComponent } from './produtos/lista-produtos.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    ProdutosComponent,
    
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
