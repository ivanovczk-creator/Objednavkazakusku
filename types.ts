export interface Product {
  name: string;
  img: string;
  price: number;
  visible: boolean; // Umožňuje skrýt produkt bez smazání z kódu
  priority?: number; // Čím menší číslo, tím výše se produkt zobrazí (např. 1 = první)
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
  allowedDays: number[]; // 0 = Neděle, 1 = Pondělí, ... 6 = Sobota
}