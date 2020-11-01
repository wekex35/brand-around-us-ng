import { Routes } from '@angular/router';
import { BrandComponent } from 'src/app/pages/brands/brand/brand.component';
import { CategoryComponent } from 'src/app/pages/categories/category/category.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ProductComponent } from 'src/app/pages/products/product/product.component';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
    { path: 'brands', component: BrandComponent },
    { path: 'categories', component: CategoryComponent },     
    { path: 'dashboard', component: DashboardComponent },     
    { path: 'product', component: ProductComponent },     
];
