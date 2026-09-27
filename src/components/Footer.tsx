import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, X, Shield, Clock, Users, VolumeX, Ban, Key } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'house-rules' | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      await addDoc(collection(db, "inquiries"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
        status: "new"
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Firebase submission error:", error);
      alert("There was a problem submitting your inquiry. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-cream text-navy border-t border-rosegold/20 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

        {/* Left Info Section */}
        <div className="space-y-6">
          <span className="text-rosegold uppercase tracking-widest text-sm font-semibold">{t.footer.requestInfo}</span>
          <h2 className="text-4xl font-serif text-navy">{t.footer.requestInfo}</h2>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-navy/80">
              <Phone size={18} className="text-rosegold" />
              <a href="tel:+447848108122" className="hover:text-rosegold transition">+44 7848 108122</a>
            </div>
            <div className="flex items-center gap-3 text-navy/80">
              <Mail size={18} className="text-rosegold" />
              <a href="mailto:43lampetersquare@gmail.com" className="hover:text-rosegold transition">43lampetersquare@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 text-navy/80">
              <MapPin size={18} className="text-rosegold" />
              <span>43 Lampeter Square, W6 8PS</span>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-navy/5 border border-rosegold/30 p-8 rounded-lg shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <h3 className="text-2xl font-serif text-navy">{t.footer.successTitle}</h3>
              <p className="text-navy/70 font-light">{t.footer.successDesc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-serif mb-2 text-navy">{t.footer.requestInfo}</h3>

              <div>
                <label className="block text-xs uppercase tracking-wider text-navy/70 mb-1">{t.footer.nameLabel}</label>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full bg-cream border border-rosegold/30 rounded px-4 py-3 text-navy placeholder:text-navy/30 focus:outline-none focus:border-rosegold transition text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-navy/70 mb-1">{t.footer.emailLabel}</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-cream border border-rosegold/30 rounded px-4 py-3 text-navy placeholder:text-navy/30 focus:outline-none focus:border-rosegold transition text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-navy/70 mb-1">{t.footer.messageLabel}</label>
                <textarea
                  required
                  name="message"
                  rows={3}
                  className="w-full bg-cream border border-rosegold/30 rounded px-4 py-3 text-navy placeholder:text-navy/30 focus:outline-none focus:border-rosegold transition text-sm resize-none"
                  placeholder="I am interested in learning more about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-navy text-cream font-medium py-3 rounded hover:bg-navy/90 transition flex items-center justify-center gap-2 shadow disabled:opacity-50"
              >
                {submitting ? 'Sending...' : <>{t.footer.sendBtn} <Send size={16} /></>}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Bar with Links */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-rosegold/20 flex flex-col sm:flex-row items-center justify-between text-xs text-navy/60 font-light">
        <p>&copy; {new Date().getFullYear()} Lampeter 43. {t.footer.rights}</p>
        <div className="flex flex-wrap gap-6 mt-4 sm:mt-0">
          <button onClick={() => setModalType('house-rules')} className="hover:text-rosegold transition text-left">
            {t.footer.houseRules}
          </button>
          <button onClick={() => setModalType('privacy')} className="hover:text-rosegold transition text-left">
            {t.footer.privacyPolicy}
          </button>
          <button onClick={() => setModalType('terms')} className="hover:text-rosegold transition text-left">
            {t.footer.termsOfService}
          </button>
        </div>
      </div>

      {/* Legal & Rules Modals Popup */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-cream text-navy rounded-2xl max-w-2xl w-full p-8 relative shadow-2xl border border-rosegold/30 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-6 right-6 text-navy/60 hover:text-navy transition"
            >
              <X size={20} />
            </button>

            {modalType === 'house-rules' ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-navy">{t.footer.houseRulesModal.title}</h3>
                  <p className="text-xs text-navy/60 mt-1">{t.footer.houseRulesModal.subtitle}</p>
                </div>

                {/* Safety Devices */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-rosegold">{t.footer.houseRulesModal.safetyTitle}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 bg-navy/5 p-3 rounded-xl border border-rosegold/20 text-xs text-navy/80">
                      <Shield size={16} className="text-rosegold shrink-0" />
                      <span>{t.footer.houseRulesModal.carbonMonoxide}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-navy/5 p-3 rounded-xl border border-rosegold/20 text-xs text-navy/80">
                      <Shield size={16} className="text-rosegold shrink-0" />
                      <span>{t.footer.houseRulesModal.smokeAlarm}</span>
                    </div>
                  </div>
                </div>

                {/* Checking in and out */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-rosegold">{t.footer.houseRulesModal.checkInOutTitle}</h4>
                  <div className="space-y-2 text-sm text-navy/80">
                    <div className="flex items-center gap-3 py-1.5 border-b border-rosegold/10">
                      <Clock size={16} className="text-rosegold" />
                      <span>{t.footer.houseRulesModal.checkIn}</span>
                    </div>
                    <div className="flex items-center gap-3 py-1.5 border-b border-rosegold/10">
                      <Clock size={16} className="text-rosegold" />
                      <span>{t.footer.houseRulesModal.checkOut}</span>
                    </div>
                    <div className="flex items-center gap-3 py-1.5 border-b border-rosegold/10">
                      <Key size={16} className="text-rosegold" />
                      <span>{t.footer.houseRulesModal.selfCheckIn}</span>
                    </div>
                  </div>
                </div>

                {/* During your stay */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-rosegold">{t.footer.houseRulesModal.duringStayTitle}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-navy/80">
                    <div className="flex items-center gap-2.5 bg-navy/5 p-2.5 rounded-lg">
                      <Users size={14} className="text-rosegold" />
                      <span>{t.footer.houseRulesModal.maxGuests}</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-navy/5 p-2.5 rounded-lg">
                      <Ban size={14} className="text-rosegold" />
                      <span>{t.footer.houseRulesModal.noPets}</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-navy/5 p-2.5 rounded-lg">
                      <VolumeX size={14} className="text-rosegold" />
                      <span>{t.footer.houseRulesModal.quietHours}</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-navy/5 p-2.5 rounded-lg">
                      <Ban size={14} className="text-rosegold" />
                      <span>{t.footer.houseRulesModal.noParties}</span>
                    </div>
                  </div>
                </div>

                {/* Before you leave */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-rosegold">{t.footer.houseRulesModal.beforeLeaveTitle}</h4>
                  <div className="flex flex-wrap gap-2 text-xs text-navy/80">
                    <span className="bg-navy/5 px-3 py-1.5 rounded-lg border border-rosegold/20">{t.footer.houseRulesModal.turnThingsOff}</span>
                    <span className="bg-navy/5 px-3 py-1.5 rounded-lg border border-rosegold/20">{t.footer.houseRulesModal.returnKeys}</span>
                    <span className="bg-navy/5 px-3 py-1.5 rounded-lg border border-rosegold/20">{t.footer.houseRulesModal.lockUp}</span>
                  </div>
                </div>
              </div>
            ) : modalType === 'privacy' ? (
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-navy">{t.footer.privacyModal.title}</h3>
                <p className="text-xs text-navy/60">{t.footer.privacyModal.lastUpdated}: {new Date().toLocaleDateString()}</p>
                <div className="space-y-3 text-sm text-navy/80 font-light leading-relaxed">
                  <p>{t.footer.privacyModal.p1}</p>
                  <h4 className="font-semibold text-navy pt-2">{t.footer.privacyModal.h1}</h4>
                  <p>{t.footer.privacyModal.p2}</p>
                  <h4 className="font-semibold text-navy pt-2">{t.footer.privacyModal.h2}</h4>
                  <p>{t.footer.privacyModal.p3}</p>
                  <h4 className="font-semibold text-navy pt-2">{t.footer.privacyModal.h3}</h4>
                  <p>{t.footer.privacyModal.p4}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-navy">{t.footer.termsModal.title}</h3>
                <p className="text-xs text-navy/60">{t.footer.termsModal.lastUpdated}: {new Date().toLocaleDateString()}</p>
                <div className="space-y-3 text-sm text-navy/80 font-light leading-relaxed">
                  <p>{t.footer.termsModal.p1}</p>
                  <h4 className="font-semibold text-navy pt-2">{t.footer.termsModal.h1}</h4>
                  <p>{t.footer.termsModal.p2}</p>
                  <h4 className="font-semibold text-navy pt-2">{t.footer.termsModal.h2}</h4>
                  <p>{t.footer.termsModal.p3}</p>
                  <h4 className="font-semibold text-navy pt-2">{t.footer.termsModal.h3}</h4>
                  <p>{t.footer.termsModal.p4}</p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-rosegold/20 text-right">
              <button
                onClick={() => setModalType(null)}
                className="bg-navy text-cream px-6 py-2 rounded text-xs uppercase tracking-wider font-medium hover:bg-navy/90 transition"
              >
                {t.footer.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};