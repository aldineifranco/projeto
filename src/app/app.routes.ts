import {Routes} from '@angular/router';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import {MainComponent} from './navegacao/main/main.component';
import { ProdutosComponent } from './produtos/lista-produtos.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: 'main', component: MainComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'lista-produtos', component: ProdutosComponent },
];