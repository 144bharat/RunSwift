// Define the interface for a menu item
export interface MenuItem {
    label: string;
    //icon?: string; // optional since not every item has an icon
    routerLink?: string[]; // optional since some items might not have a router link
    queryParams?: { [key: string]: string }; // optional query parameters for navigation
    items?: MenuItem[]; // sub-menu items, making it recursive
  }
  
  // The main menu structure which uses the MenuItem interface
  export interface Menu {
    label: string;
    //icon?: string;
    items: MenuItem[][]; // Array of arrays, each containing MenuItems (nested)
  }
  