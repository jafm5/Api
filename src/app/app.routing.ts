import { Routes, RouterModule} from '@angular/router';
import { CrearComponent} from './components/crear/crear.component';
import { ListarComponent} from './components/listar/listar.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component'

const appRoutes: Routes = [
    {path:'', component: CrearComponent},
    {path:'Crear', component: CrearComponent},
    {path:'Listar', component: ListarComponent},
    {path: 'Actualizar', component: ActualizarComponent}
];

export const routing = RouterModule.forRoot(appRoutes)