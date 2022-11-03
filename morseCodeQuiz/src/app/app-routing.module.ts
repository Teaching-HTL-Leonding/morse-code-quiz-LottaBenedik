import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DecodingComponent } from './decoding/decoding.component';
import { EncodingComponent } from './encoding/encoding.component';

const routes: Routes = [

  { path: '', redirectTo: '/encode', pathMatch: 'full' },
  {path:'encode', component: EncodingComponent},
  {path: 'decode', component: DecodingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
