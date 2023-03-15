import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DrivenFormComponent } from './Atelier/driven-form/driven-form.component';
import { ErrorComponent } from './error/error.component';
import { OffreEmploiComponent } from './offre-emploi/offre-emploi.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component:ProductComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'product/:id', component:ProductDetailComponent},
  {path:'offres', component:OffreEmploiComponent},
  {path:'atelier', component:DrivenFormComponent},
  {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
