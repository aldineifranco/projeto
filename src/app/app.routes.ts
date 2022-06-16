import { Routes} from '@angular/router';
import { FaleConoscoComponent } from './institucional/fale-conosco/fale-conosco.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { MainComponent } from './navegacao/main/main.component';
import { ProdutosComponent } from './produtos/lista-produtos.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: 'main', component: MainComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'lista-produtos', component: ProdutosComponent },
    { path: 'fale-conosco', component: FaleConoscoComponent },
];