import Spline from '@splinetool/react-spline';
import { CloudUpload, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[80vh] lg:h-[92vh] overflow-hidden">
        <Spline 
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />

        <header className="absolute top-0 left-0 right-0 z-10">
          <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-semibold">TN</div>
              <span className="font-semibold tracking-tight">TransferNow</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
              <a href="#features" className="hover:text-slate-900 transition">Features</a>
              <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
              <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50">Sign in</button>
              <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
                <CloudUpload className="h-4 w-4" /> Start transfer
              </button>
            </div>
          </div>
        </header>

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
                <Zap className="h-3.5 w-3.5 text-amber-500" /> Fast, secure and simple
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Send large files instantly
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Share photos, videos and documents up to 250 GB with end‑to‑end protection. No account required.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                  <CloudUpload className="h-4 w-4" /> Upload files
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold hover:bg-slate-50">
                  Explore features
                </button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" /> GDPR compliant
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">250 GB</span> per transfer
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">Password</span> & expiry control
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
