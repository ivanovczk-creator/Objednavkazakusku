import React, { useState } from 'react';
import { X, Trash2, Send, MapPin, Calendar, Phone, User, ShoppingBag, Mail, CreditCard, Clock, Info } from 'lucide-react';
import { CartItem, UserDetails } from '../types';
import { locations } from '../data';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (index: number) => void;
  onUpdateQuantity: (index: number, newQty: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cart, onRemoveItem, onUpdateQuantity }) => {
  const [formData, setFormData] = useState<UserDetails>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    pickupDate: '',
    pickupLocationId: locations[0].id,
    paymentMethod: 'hotove'
  });

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const selectedLocation = locations.find(l => l.id === formData.pickupLocationId) || locations[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Objednávka zákusků - ${formData.firstName} ${formData.lastName}`;
    
    // Formatting email body
    let body = `Dobrý den,%0D%0A%0D%0ARád(a) bych si u Vás objednal(a) následující zboží:%0D%0A`;
    body += `--------------------------------------------------%0D%0A`;
    
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      body += `- ${item.name}: ${item.quantity} ks (${item.price} Kč/ks) ... ${itemTotal} Kč%0D%0A`;
    });
    
    body += `--------------------------------------------------%0D%0A`;
    body += `CELKEM KUSŮ: ${totalItems}%0D%0A`;
    body += `CELKOVÁ CENA (orientační): ${totalPrice} Kč%0D%0A%0D%0A`;
    
    body += `PODROBNOSTI VYZVEDNUTÍ:%0D%0A`;
    body += `Místo: ${selectedLocation.name} (${selectedLocation.address})%0D%0A`;
    body += `Datum: ${formData.pickupDate}%0D%0A`;
    body += `Platba: ${formData.paymentMethod === 'hotove' ? 'Při převzetí' : 'Převodem na účet'}%0D%0A%0D%0A`;

    body += `KONTAKTNÍ ÚDAJE:%0D%0A`;
    body += `Jméno: ${formData.firstName} ${formData.lastName}%0D%0A`;
    body += `Telefon: ${formData.phone}%0D%0A`;
    body += `Email: ${formData.email}%0D%0A`;
    
    window.location.href = `mailto:info@cukrarstviblahutovi.cz?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex justify-between items-center bg-cream-50">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-brand-800" />
            <h2 className="text-xl font-serif font-bold text-cream-900">Váš košík</h2>
            <span className="bg-brand-100 text-brand-800 text-xs font-bold px-2 py-1 rounded-full">
              {totalItems} ks
            </span>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-800 transition-colors p-1 rounded-full hover:bg-stone-100">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-8">
          
          {/* Cart Items List */}
          <div className="space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-12 text-stone-400">
                <p>Váš košík je zatím prázdný.</p>
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={`${item.name}-${index}`} className="flex gap-4 items-start py-3 border-b border-dashed border-stone-200 last:border-0">
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-stone-50 border border-stone-100">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-stone-800 text-sm mb-1">{item.name}</h4>
                      <span className="text-sm font-bold text-brand-800 whitespace-nowrap">
                        {item.price * item.quantity} Kč
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-stone-200 rounded-md">
                        <button 
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-stone-50 text-stone-500 disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-stone-50 text-stone-500"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(index)}
                        className="text-rose-400 hover:text-rose-600 text-xs underline decoration-rose-200 hover:decoration-rose-400"
                      >
                        Odebrat
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Form */}
          {cart.length > 0 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Total Summary */}
              <div className="bg-brand-50 p-4 rounded-xl border border-brand-100 flex justify-between items-center">
                <span className="font-serif font-bold text-lg text-cream-900">Celkem k úhradě:</span>
                <span className="text-2xl font-bold text-brand-700">{totalPrice} Kč</span>
              </div>

              <div className="space-y-4 bg-stone-50 p-5 rounded-xl border border-stone-100">
                <h3 className="font-serif font-bold text-lg text-cream-900 border-b border-stone-200 pb-2 flex items-center gap-2">
                  <User size={18} /> Osobní údaje
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-500 mb-1 uppercase tracking-wider">Jméno *</label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-200 focus:border-brand-400 outline-none"
                      value={formData.firstName}
                      onChange={e => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-500 mb-1 uppercase tracking-wider">Příjmení *</label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-200 focus:border-brand-400 outline-none"
                      value={formData.lastName}
                      onChange={e => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-500 mb-1 uppercase tracking-wider">Telefon *</label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3 top-3 text-stone-400" />
                      <input
                        required
                        type="tel"
                        className="w-full pl-9 pr-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-200 focus:border-brand-400 outline-none"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-500 mb-1 uppercase tracking-wider">E-mail *</label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-3 text-stone-400" />
                      <input
                        required
                        type="email"
                        className="w-full pl-9 pr-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-200 focus:border-brand-400 outline-none"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 bg-stone-50 p-5 rounded-xl border border-stone-100">
                <h3 className="font-serif font-bold text-lg text-cream-900 border-b border-stone-200 pb-2 flex items-center gap-2">
                  <MapPin size={18} /> Vyzvednutí a platba
                </h3>

                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1 uppercase tracking-wider">Místo vyzvednutí *</label>
                  <select
                    className="w-full p-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-200 focus:border-brand-400 outline-none bg-white mb-2"
                    value={formData.pickupLocationId}
                    onChange={e => setFormData({...formData, pickupLocationId: e.target.value})}
                  >
                    {locations.map(loc => (
                      <option key={loc.id} value={loc.id}>{loc.name} ({loc.address})</option>
                    ))}
                  </select>
                  
                  {/* Location Details Info Box */}
                  <div className="bg-white border border-stone-200 rounded-lg p-3 text-sm text-stone-600">
                    <p className="font-bold text-stone-800">{selectedLocation.name}</p>
                    <p>{selectedLocation.address}</p>
                    <p className="text-brand-700 font-medium mt-1">Tel: {selectedLocation.phone}</p>
                    <div className="mt-2 border-t border-stone-100 pt-2">
                      <p className="text-xs font-bold text-stone-400 uppercase">Otevírací doba:</p>
                      {selectedLocation.hours.map((h, i) => (
                        <p key={i} className="text-xs">{h}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1 uppercase tracking-wider">Datum vyzvednutí *</label>
                  <div className="relative">
                    <Calendar size={14} className="absolute left-3 top-3 text-stone-400" />
                    <input
                      required
                      type="date"
                      className="w-full pl-9 pr-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-200 focus:border-brand-400 outline-none"
                      value={formData.pickupDate}
                      onChange={e => setFormData({...formData, pickupDate: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                   <label className="block text-xs font-bold text-stone-500 mb-2 uppercase tracking-wider">Způsob platby *</label>
                   <div className="grid grid-cols-2 gap-3">
                     <label className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-all ${formData.paymentMethod === 'hotove' ? 'border-brand-500 bg-brand-50 text-brand-900' : 'border-stone-200 hover:border-stone-300'}`}>
                       <input 
                         type="radio" 
                         name="payment" 
                         value="hotove" 
                         checked={formData.paymentMethod === 'hotove'}
                         onChange={() => setFormData({...formData, paymentMethod: 'hotove'})}
                         className="accent-brand-600"
                       />
                       <span className="text-sm font-medium">Při převzetí</span>
                     </label>
                     <label className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-all ${formData.paymentMethod === 'prevod' ? 'border-brand-500 bg-brand-50 text-brand-900' : 'border-stone-200 hover:border-stone-300'}`}>
                       <input 
                         type="radio" 
                         name="payment" 
                         value="prevod" 
                         checked={formData.paymentMethod === 'prevod'}
                         onChange={() => setFormData({...formData, paymentMethod: 'prevod'})}
                         className="accent-brand-600"
                       />
                       <span className="text-sm font-medium">Převodem</span>
                     </label>
                   </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex gap-3 bg-blue-50 p-4 rounded-lg text-xs text-blue-800 border border-blue-100 items-start">
                <Info size={16} className="flex-shrink-0 mt-0.5" />
                <p>
                  Odesláním objednávky berete na vědomí, že fotografie jsou pouze ilustrační. 
                  Pokud nebude některý z vybraných výrobků k dispozici, budeme vás neprodleně informovat 
                  na uvedený e-mail nebo telefon.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-800 text-white font-bold py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4 transform active:scale-[0.98]"
              >
                <Send size={20} />
                <span>Odeslat závaznou objednávku</span>
              </button>
              <p className="text-xs text-stone-400 text-center">
                *Tlačítko otevře vašeho e-mailového klienta s připravenou zprávou. Zprávu prosím zkontrolujte a odešlete.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;