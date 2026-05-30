"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface AppointmentProps {
  variant?: "home-01" | "home-02" | "home-03";
}

export default function AppointmentCTA({ variant = "home-01" }: AppointmentProps) {
  const [step, setStep] = useState(1);

  // Variant 2: Home-02 - Centered CTA banner (no full form on homepage)
  if (variant === "home-02") {
    return (
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80")` }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <span className="inline-block uppercase tracking-[0.2em] text-xs font-bold text-brand-teal mb-4 font-sans bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">
            Get Clinical Assessment Today
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Book an appointment with our elite certified therapists today. We accept most major health funds and offer convenient same-week consultations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-teal text-white hover:bg-white hover:text-brand-dark font-semibold font-sans text-sm rounded-full transition-all duration-300 shadow-lg"
            >
              Book Instant Appointment
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 hover:border-white font-semibold font-sans text-sm rounded-full transition-all duration-300"
            >
              Learn About Pricing
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Variant 3: Home-03 - Form with multi-step indicator sidebar
  if (variant === "home-03") {
    return (
      <section className="py-24 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl overflow-hidden border border-brand-border/60 shadow-2xl grid lg:grid-cols-12">
          {/* Step Indicator Sidebar */}
          <div className="lg:col-span-4 bg-brand-dark text-white p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-teal-950/20" />
            <div className="relative z-10">
              <span className="uppercase tracking-[0.2em] text-xs text-brand-teal font-bold font-sans">Assessment Form</span>
              <h3 className="font-serif text-3xl font-bold mt-4 mb-8 leading-tight">Book in Steps</h3>
              
              {/* Vertical steps */}
              <div className="flex flex-col gap-6">
                {[
                  { num: 1, title: "Personal Details", desc: "Your contact details" },
                  { num: 2, title: "Select Treatment", desc: "Choose therapy method" },
                  { num: 3, title: "Confirm & Notes", desc: "Notes for therapist" },
                ].map((s) => (
                  <div key={s.num} className="flex gap-4 items-center">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold font-sans ${
                      step === s.num
                        ? "bg-brand-teal border-brand-teal text-white"
                        : step > s.num
                        ? "bg-white border-white text-brand-dark"
                        : "border-white/20 text-white/50"
                    }`}>
                      {s.num}
                    </div>
                    <div>
                      <p className={`text-xs font-bold leading-none ${step === s.num ? "text-white" : "text-white/40"}`}>{s.title}</p>
                      <p className="text-[10px] text-white/30 font-sans mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 mt-12 text-[10px] text-white/40 leading-relaxed font-sans">
              Need immediate support? Call our clinic directly at <span className="text-brand-teal font-bold">+1 (800) SIFOXEN</span>.
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 p-10">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="font-serif text-2xl font-bold text-brand-dark">Tell us about yourself</h4>
                  <p className="text-brand-gray font-sans text-xs mb-4">Please provide your contact information to begin.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:border-brand-teal text-brand-dark font-sans text-sm" />
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:border-brand-teal text-brand-dark font-sans text-sm" />
                  </div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:border-brand-teal text-brand-dark font-sans text-sm" />
                  <button type="button" onClick={() => setStep(2)} className="w-full py-4 bg-brand-dark text-white rounded-xl font-bold font-sans text-sm hover:bg-brand-teal transition-all">
                    Next Step
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="font-serif text-2xl font-bold text-brand-dark">Choose Your Therapy</h4>
                  <p className="text-brand-gray font-sans text-xs mb-4">Select the treatment you are seeking from Sifoxen.</p>
                  <select className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:border-brand-teal text-brand-dark/70 font-sans text-sm">
                    <option value="">Select Service</option>
                    <option value="sports">Sports Injury Therapy</option>
                    <option value="acupuncture">Acupuncture Therapy</option>
                    <option value="joint">Joint Mobilization</option>
                    <option value="pain">Pain Management</option>
                  </select>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="w-1/2 py-4 border border-brand-border rounded-xl font-bold text-brand-dark font-sans text-sm">
                      Go Back
                    </button>
                    <button type="button" onClick={() => setStep(3)} className="w-1/2 py-4 bg-brand-dark text-white rounded-xl font-bold font-sans text-sm hover:bg-brand-teal transition-all">
                      Next Step
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="font-serif text-2xl font-bold text-brand-dark">Notes & Confirmation</h4>
                  <p className="text-brand-gray font-sans text-xs mb-4">Any special notes for the therapist?</p>
                  <textarea placeholder="Describe your condition or injury history..." rows={4} className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:border-brand-teal text-brand-dark font-sans text-sm resize-none" />
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(2)} className="w-1/2 py-4 border border-brand-border rounded-xl font-bold text-brand-dark font-sans text-sm">
                      Go Back
                    </button>
                    <button type="submit" className="w-1/2 py-4 bg-brand-teal text-white rounded-xl font-bold font-sans text-sm hover:bg-brand-dark transition-all">
                      Confirm Appointment
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    );
  }

  // Variant 1: Redesigned Home-01 - 2-column layout (Form + Layered therapists overlay)
  return (
    <section 
      className="py-24 bg-brand-dark text-white relative overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 30, 45, 0.9), rgba(26, 30, 45, 0.95)), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80")`,
      }}
    >
      {/* Glow blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Form Section */}
        <div className="lg:col-span-6">
          <ScrollReveal direction="left">
            <span className="inline-block uppercase tracking-[0.2em] text-xs font-bold text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full mb-5 font-sans border border-brand-teal/20">
              Clinical Assessment
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Up Your Health Care With Us
            </h2>
            
            {/* Added checkmark features above the form */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-sans text-xs">✓</span>
                <span className="text-xs font-bold text-gray-300">Experienced Clinical Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-sans text-xs">✓</span>
                <span className="text-xs font-bold text-gray-300">Personalized Treatment Plan</span>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Request an Appointment
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans focus:outline-none focus:border-brand-teal"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans focus:outline-none focus:border-brand-teal"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans focus:outline-none focus:border-brand-teal"
                />
                <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white/70 text-sm font-sans focus:outline-none focus:border-brand-teal">
                  <option value="" className="bg-[#1a2332]">Select Service</option>
                  <option value="sports" className="bg-[#1a2332]">Sports Injury Therapy</option>
                  <option value="acupuncture" className="bg-[#1a2332]">Acupuncture</option>
                  <option value="joint" className="bg-[#1a2332]">Joint Mobilization</option>
                  <option value="pain" className="bg-[#1a2332]">Pain Management</option>
                </select>
                <textarea
                  placeholder="Describe your condition (optional)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans focus:outline-none focus:border-brand-teal resize-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-teal text-white font-semibold font-sans text-sm hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-md"
                >
                  Book Appointment Now →
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Layered Stack of doctor images with diagonal depth */}
        <div className="lg:col-span-6 relative hidden lg:flex items-center justify-center min-h-[500px]">
          <ScrollReveal direction="right" delay={0.15}>
            <div className="relative w-[380px] h-[480px]">
              
              {/* Stacked photo 1: Top-most layer z-20 */}
              <div className="absolute top-0 left-0 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-[#1a2332] group">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80"
                  alt="Therapist Castillo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stacked photo 2: Middle layer z-10 */}
              <div className="absolute top-[80px] left-[100px] w-64 h-80 rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-[#1a2332] group">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80"
                  alt="Therapist Bonucci"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stacked photo 3: Bottom layer z-0 */}
              <div className="absolute top-[160px] left-[200px] w-56 h-72 rounded-3xl overflow-hidden shadow-2xl z-0 border-4 border-[#1a2332] group opacity-75">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80"
                  alt="Therapist Sarah"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
