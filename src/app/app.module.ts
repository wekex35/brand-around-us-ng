import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './pages/categories/category/category.component';
import { BrandComponent } from './pages/brands/brand/brand.component';
import { ProductComponent } from './pages/products/product/product.component';
import { ContentComponent } from './layout/content/content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { RouterModule } from '@angular/router';
import { FullComponent } from './layout/full/full.component';
import { NotifierModule, NotifierOptions } from "angular-notifier";


/////////////// Meaterial ///////////////////////
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { BrandFormComponent } from './pages/brands/brand-form/brand-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryFormComponent } from './pages/categories/category-form/category-form.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { TestComponent } from './pages/test/test.component';
import { MatTreeModule } from '@angular/material/tree';
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './pages/products/product-list/product-list.component';

// Notifier Configs
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 80,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};


@NgModule({
  declarations: [
    FullComponent,
    ContentComponent,
    AppComponent,
    CategoryComponent,
    BrandComponent,
    ProductComponent,
    ContentComponent,
    DashboardComponent,
    NotFoundComponent,
    BrandFormComponent,
    CategoryFormComponent,
    ProductFormComponent,
    TestComponent,
    CategoryListComponent,
    ProductListComponent
  ],
  
  imports: [
    NotifierModule.withConfig(customNotifierOptions),

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,

    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatSlideToggleModule,
    NgbModule

    
  ],
  providers: [
    AuthService,
    AuthGuard, 
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
