import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HistoryTradition } from './components/HistoryTradition';
import { TerroirVineyards } from './components/TerroirVineyards';
import { WineCatalog } from './components/WineCatalog';
import { CertificationsQuality } from './components/CertificationsQuality';
import { Enotourism } from './components/Enotourism';
import { ExportPresence } from './components/ExportPresence';
import { ContactSection } from './components/ContactSection';
import { InquiryDrawer } from './components/InquiryDrawer';
import { Footer } from './components/Footer';
import { VirtualTourModal } from './components/VirtualTourModal';
import { WineItem, WINES_DATA } from './data/wineryData';
import { CategoryFilter } from './components/WineCatalog';
import { Check, X } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<{ wine: WineItem; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('todos');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleAddToCart = (wine: WineItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.wine.id === wine.id);
      if (existing) {
        return prev.map((item) =>
          item.wine.id === wine.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { wine, quantity: 1 }];
    });
    showToast(`"${wine.name}" añadido a la consulta de pedido`);
  };

  const handleUpdateQuantity = (wineId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.wine.id === wineId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (wineId: string) => {
    setCartItems((prev) => prev.filter((item) => item.wine.id !== wineId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartWineIds = cartItems.map((item) => item.wine.id);
  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1514] selection:bg-[#8b263e] selection:text-white flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1c1514] text-[#fbf7f0] border border-[#d4af37] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-xs font-medium">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-[#9e8f85] hover:text-white p-0.5 ml-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => scrollToSection('enoturismo')}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreWines={() => scrollToSection('vinos')}
          onExploreStory={() => scrollToSection('bodega')}
          onOpenBooking={() => scrollToSection('enoturismo')}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onAddFeaturedWine={() => {
            const featured = WINES_DATA[0];
            if (featured) handleAddToCart(featured);
          }}
          isFeaturedInCart={cartWineIds.includes('imperial-toledo-reserva')}
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        />

        {/* 2. History & Family Tradition */}
        <HistoryTradition />

        {/* 3. Terroir, Altitude & Vineyards */}
        <TerroirVineyards />

        {/* 4. Complete Wine Collection & Tasting Sheets */}
        <WineCatalog
          onAddToCart={handleAddToCart}
          cartWineIds={cartWineIds}
          currentCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* 5. Official Certifications & Quality */}
        <CertificationsQuality />

        {/* 6. Enotourism & Cellar Visits Booking */}
        <Enotourism
          onTourBooked={(details) => {
            showToast('¡Solicitud de visita tramitada con éxito!');
          }}
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        />

        {/* 7. International Export Presence */}
        <ExportPresence />

        {/* 8. Direct Contact, Address & Location */}
        <ContactSection />
      </main>

      {/* 9. Virtual Guided Tour Player */}
      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        onBookVisit={() => scrollToSection('enoturismo')}
        onExploreWines={() => scrollToSection('vinos')}
      />

      {/* 10. Wine Inquiry Drawer */}
      <InquiryDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
