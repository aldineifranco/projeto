import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF} from '@angular/common';
import { ProdutoService } from './server-produtos/produtos.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './navegacao/header/header.component';
import { MainComponent } from './navegacao/main/main.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { FaleConoscoComponent } from './institucional/fale-conosco/fale-conosco.component';

import { rootRouterConfig} from './app.routes';
import { ProdutosComponent } from './produtos/lista-produtos.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SobreComponent,
    ProdutosComponent,
    FaleConoscoComponent    
  ],

  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
