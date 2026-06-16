import React, { useState } from 'react';
import { Copy, Check, Gift } from 'lucide-react';

export const GiftSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    bankName: '',
    amount: '',
    message: ''
  });

  const accounts = [
    {
      id: 'elara_bank',
      bankName: 'BANK EKSPOR INDONESIA',
      name: 'Elera',
      number: '12000333203656'
    },
    {
      id: 'fino_bank',
      bankName: 'BANK BNI',
      name: 'Fino',
      number: '165400023315'
    }
  ];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.amount) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', bankName: '', amount: '', message: '' });
    }, 3000);
  };

  return (
    <section className="py-20 px-8 bg-luxury-cream flex flex-col items-center">
      {/* Title */}
      <div className="text-center mb-16 max-w-md">
        <h3 className="font-serif text-3xl md:text-4xl text-luxury-emerald mb-4">
          Wedding Gift
        </h3>
        <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto mb-4" />
        <p className="font-sans text-xs text-luxury-sage leading-relaxed">
          Your blessing means the world to us. However, if you wish to give a gift, we provide a digital envelope below to make it easier for you.
        </p>
      </div>

      {/* Accounts List */}
      <div className="w-full max-w-md space-y-6 mb-12">
        {accounts.map((acc) => (
          <div 
            key={acc.id} 
            className="bg-white border border-luxury-gold/20 p-6 rounded-lg shadow-sm flex flex-col relative overflow-hidden"
          >
            {/* Soft gold badge */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/5 rounded-full translate-x-8 -translate-y-8 flex items-center justify-center">
              <Gift className="w-6 h-6 text-luxury-gold/25 -translate-x-3 translate-y-3" />
            </div>

            <span className="font-sans text-[10px] text-luxury-gold font-bold tracking-wider uppercase mb-1">
              {acc.bankName}
            </span>
            <p className="font-serif text-lg text-luxury-emerald font-semibold mb-3">
              {acc.name}
            </p>

            <div className="flex items-center justify-between bg-luxury-cream p-3 rounded border border-luxury-gold/15">
              <span className="font-mono text-sm text-luxury-charcoal font-semibold tracking-wider">
                {acc.number}
              </span>
              <button
                onClick={() => handleCopy(acc.id, acc.number)}
                className="text-luxury-gold hover:text-luxury-emerald transition-colors"
                title="Copy Account Number"
              >
                {copiedId === acc.id ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            
            {copiedId === acc.id && (
              <span className="text-[10px] text-emerald-600 mt-1.5 font-medium animate-pulse">
                Copied to clipboard!
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Confirmation Form */}
      <div className="w-full max-w-md bg-white border border-luxury-gold/20 p-8 rounded-lg shadow-sm">
        <h4 className="font-serif text-lg text-luxury-emerald mb-6 text-center font-semibold border-b border-luxury-gold/10 pb-4">
          Confirm Gift Sending
        </h4>

        {formSubmitted ? (
          <div className="py-8 text-center animate-fade-in">
            <span className="inline-block p-3 bg-emerald-50 rounded-full text-emerald-600 mb-3 border border-emerald-200">
              <Check className="w-6 h-6" />
            </span>
            <p className="font-serif text-lg text-luxury-emerald font-medium mb-1">
              Confirmation Sent!
            </p>
            <p className="font-sans text-xs text-luxury-sage">
              Thank you for your warm generosity.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-sans text-[10px] text-luxury-sage uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Katsudoto"
                className="w-full px-4 py-2.5 bg-luxury-cream border border-luxury-gold/20 rounded focus:outline-none focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal"
              />
            </div>

            <div>
              <label className="block font-sans text-[10px] text-luxury-sage uppercase tracking-wider mb-1">
                From Bank / Account Name
              </label>
              <input 
                type="text"
                value={formData.bankName}
                onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                placeholder="e.g. Bank BNI - John Doe"
                className="w-full px-4 py-2.5 bg-luxury-cream border border-luxury-gold/20 rounded focus:outline-none focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal"
              />
            </div>

            <div>
              <label className="block font-sans text-[10px] text-luxury-sage uppercase tracking-wider mb-1">
                Amount
              </label>
              <input 
                type="text"
                required
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                placeholder="e.g. $100 or IDR 200,000"
                className="w-full px-4 py-2.5 bg-luxury-cream border border-luxury-gold/20 rounded focus:outline-none focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal"
              />
            </div>

            <div>
              <label className="block font-sans text-[10px] text-luxury-sage uppercase tracking-wider mb-1">
                Message / Prayer
              </label>
              <textarea 
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Leave a sweet blessing..."
                className="w-full px-4 py-2.5 bg-luxury-cream border border-luxury-gold/20 rounded focus:outline-none focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-luxury-emerald hover:bg-luxury-emerald/90 text-white font-sans text-xs font-semibold uppercase tracking-wider rounded transition-colors mt-6 shadow"
            >
              Confirm Confirmation
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
