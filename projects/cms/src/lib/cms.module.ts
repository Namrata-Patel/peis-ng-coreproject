import { NgModule } from '@angular/core';
import { CmsComponent } from './cms.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [CmsComponent, UsersComponent],
  imports: [CommonModule,
    HttpClientModule
  ],
  exports: [CmsComponent]
})
export class CmsModule { }
