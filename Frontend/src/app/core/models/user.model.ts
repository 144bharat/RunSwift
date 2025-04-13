import { CartItem } from './cartitem.model';
import { Order } from './order.model';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  phone?: string;
  address?: string;
  cart?: CartItem[];        // List of cart items
  favourites?: string[];    // Product IDs for favourites
  orders?: Order[];         // List of past orders
  createdAt: Date;
  updatedAt: Date;
}