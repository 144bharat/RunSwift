import { Routes } from '@angular/router';

export const routes: Routes = [
  // Home Page Route
  { 
    path: '', 
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) 
  },

  // Products Page Route
  { 
    path: 'products', 
    loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent) 
  },

  // Product Detail Page Route (Dynamic Product ID)
  { 
    path: 'products/:id', 
    loadComponent: () => import('./features/product-detail/product-detail.component').then(m => m.ProductDetailComponent) 
  },

  // Shopping Cart Page Route
  { 
    path: 'cart', 
    loadComponent: () => import('./features/cart/cart.component').then(m => m.CartComponent) 
  },

  // Favourites Page Route
  { 
    path: 'favourites', 
    loadComponent: () => import('./features/favourites/favourites.component').then(m => m.FavouritesComponent) 
  },

  // Admin Dashboard Main Route
  { 
    path: 'admin-dashboard', 
    loadComponent: () => import('./features/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent) 
  },

  // Admin Dashboard Sub-Pages
  { 
    path: 'admin-dashboard/users', 
    loadComponent: () => import('./features/admin-dashboard/pages/users/users.component').then(m => m.UsersComponent) 
  },
  { 
    path: 'admin-dashboard/products', 
    loadComponent: () => import('./features/admin-dashboard/pages/products/products.component').then(m => m.ProductsComponent) 
  },
//   { 
//     path: 'admin-dashboard/analytics', 
//     loadComponent: () => import('./features/admin-dashboard/pages/analytics.component').then(m => m.AnalyticsComponent) 
//   },
  {// Login Route
    path: 'login', 
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) 
  },
  {// signup Route
    path: 'signup', 
    loadComponent: () => import('./auth/signup/signup.component').then(m => m.SignupComponent) 
  },

  // Catch-All Route
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  },
];