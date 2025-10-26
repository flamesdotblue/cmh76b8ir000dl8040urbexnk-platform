import { Shield, Timer, Link, FileDown, Lock, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'End-to-end security',
    desc: 'Encrypted transfers, optional password, and link access control for complete peace of mind.',
  },
  {
    icon: Timer,
    title: 'Set expiry dates',
    desc: 'Choose how long your files stay online. Auto-delete on expiry keeps your storage clean.',
  },
  {
    icon: Link,
    title: 'Share via link or email',
    desc: 'Send a private download link or invite recipients by email with message and branding.',
  },
  {
    icon: FileDown,
    title: 'Resume and preview',
    desc: 'Interrupted uploads resume automatically. Stream previews for videos, images, and PDFs.',
  },
  {
    icon: Lock,
    title: 'Access control',
    desc: 'Limit downloads, lock with a password, or restrict by email for sensitive projects.',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    desc: 'Fast uploads and downloads around the world with redundant, compliant storage.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to move big files</h2>
          <p className="mt-3 text-slate-600">Designed for creators, teams and businesses who value speed, privacy and simplicity.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-sm transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Drag & drop simplicity</h3>
            <p className="mt-2 text-sm text-slate-600">Drop files or folders directly into your transfer. We automatically handle chunking, retries and device sleep interruptions.</p>
            <div className="mt-6 h-40 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 flex items-center justify-center text-slate-500 text-sm">
              Upload area preview
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Brand it your way</h3>
            <p className="mt-2 text-sm text-slate-600">Add your logo, colors, and custom background to recipient pages. Keep your brand front and center.</p>
            <div className="mt-6 h-40 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 flex items-center justify-center text-slate-500 text-sm">
              Recipient page preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
