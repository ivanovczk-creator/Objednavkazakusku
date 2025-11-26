import React, { useState, useEffect } from 'react';
import { ShoppingBasket, Phone, MapPin, Search } from 'lucide-react';
import { products } from './data';
import { Product, CartItem } from './types';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  // Filter products based on search AND visibility
  const filteredProducts = products.filter(p => 
    p.visible && p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item => 
          item.name === product.name 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    
    // Show quick notification
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, newQty: number) => {
    if (newQty < 1) return;
    setCart(prev => prev.map((item, i) => i === index ? { ...item, quantity: newQty } : item));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col font-sans text-stone-800">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-brand-800 tracking-tight">
              Cukrářství Blahutovi
            </h1>
            <p className="text-xs text-stone-500 hidden sm:block">Tradiční receptury, poctivé suroviny</p>
          </div>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-3 rounded-full hover:bg-stone-50 transition-colors group"
          >
            <ShoppingBasket className="text-stone-700 group-hover:text-brand-600 transition-colors" size={28} />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 bg-brand-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[1.2rem] text-center shadow-sm animate-bounce">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero / Search Section */}
      <div className="bg-brand-50 border-b border-brand-100/50">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-4xl font-serif font-bold text-cream-900 mb-6">Naše nabídka zákusků</h2>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3.5 text-stone-400" size={20} />
            <input
              type="text"
              placeholder="Hledat zákusek (např. Větrník)..."
              className="w-full pl-10 pr-4 py-3 rounded-full border border-brand-200 focus:ring-4 focus:ring-brand-100 focus:border-brand-300 outline-none transition-shadow shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 text-stone-500">
            <p className="text-lg">Nenašli jsme žádné zákusky odpovídající vašemu hledání.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.name} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-cream-900 text-cream-100 py-12 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">O nás</h3>
            <p className="opacity-80 leading-relaxed">
              Jsme rodinné cukrářství zakládající si na tradičních postupech a kvalitních surovinách.
              Pečeme pro vás s láskou každý den.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2 opacity-80">
              <li className="flex items-center gap-2">
                <Phone size={16} /> +420 123 456 789
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Hlavní třída, Ostrava
              </li>
              <li>info@cukrarstviblahutovi.cz</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Pobočky</h3>
            <ul className="space-y-2 opacity-80">
              <li>Ostrava - Centrum</li>
              <li>Karviná - Náměstí</li>
              <li>Petřvald - Cukrárna</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-cream-800 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Cukrářství Blahutovi. Všechna práva vyhrazena.
        </div>
      </footer>

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      {/* Toast Notification */}
      <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-stone-800 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center gap-2 ${showNotification ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
        <ShoppingBasket size={18} className="text-brand-300" />
        <span className="font-medium">Přidáno do košíku</span>
      </div>

    </div>
  );
};

export default App;