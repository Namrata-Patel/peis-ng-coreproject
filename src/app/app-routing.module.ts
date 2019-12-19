import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Sub Applications
import { Project1SharedModule } from '../../projects/peis-ng-project1/src/app/app.module';
import { Project2SharedModule } from '../../projects/peis-ng-project2/src/app/app.module';


//import { App2SharedModule } from '../../projects/sub-app2/src/app/app.module';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import('../../projects/peis-ng-project1/src/app/app.module').then(m => m.Project1SharedModule)
  },
  {
    path: 'app2',
    loadChildren: () => import('../../projects/peis-ng-project2/src/app/app.module').then(m => m.Project2SharedModule)
  },
  { path: '**', redirectTo: '/app1/one' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    Project1SharedModule.forRoot(),
    Project2SharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
