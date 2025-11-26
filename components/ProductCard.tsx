import React, { useState } from 'react';
import { Plus, ShoppingBasket } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (quantity > 0) {
      onAddToCart(product, quantity);
      setQuantity(1); // Reset to default after adding
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group border border-cream-100">
      <div className="relative aspect-square overflow-hidden bg-cream-50">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-cream-900 mb-2 line-clamp-2 min-h-[3.5rem] font-serif tracking-wide">
          {product.name}
        </h3>

        {/* Price Tag */}
        <div className="mb-4 text-brand-800 font-bold text-lg">
          {product.price > 0 ? `${product.price} Kč` : 'Cena na vyžádání'}
        </div>
        
        <div className="mt-auto flex items-center gap-2">
          <div className="relative flex items-center">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 p-2 pl-3 border border-stone-200 rounded-lg text-center focus:ring-2 focus:ring-brand-300 focus:border-brand-300 outline-none text-stone-700 bg-stone-50"
            />
            <span className="absolute right-2 text-xs text-stone-400 pointer-events-none">ks</span>
          </div>
          
          <button
            onClick={handleAdd}
            className="flex-1 bg-brand-500 hover:bg-brand-800 text-white p-2 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-95"
          >
            <Plus size={18} />
            <span className="font-medium">Do košíku</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;