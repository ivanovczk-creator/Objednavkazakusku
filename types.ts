export interface Product {
  name: string;
  img: string;
  price: number;
  visible: boolean; // Umožňuje skrýt produkt bez smazání z kódu
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  pickupDate: string;
  pickupLocationId: string;
  paymentMethod: 'hotove' | 'prevod';
}

export interface LocationInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string[];
}