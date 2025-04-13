import { CartItem } from "./cartitem.model";
export interface Order {
    orderId: string;          // Unique ID for the order
    userId: string;           // User ID who placed the order
    items: CartItem[];        // List of items in the order
    totalAmount: number;      // Total price of the order
    status: 'pending' | 'completed' | 'cancelled'; // Order status
    createdAt: Date;          // Timestamp of when the order was created
    updatedAt?: Date;         // Optional: Timestamp of when the order was last updated
  }