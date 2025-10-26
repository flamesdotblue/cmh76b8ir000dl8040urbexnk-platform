import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    highlight: false,
    features: [
      'Up to 5 GB per transfer',
      'Link sharing',
      '7-day expiry',
      'Basic security',
    ],
    cta: 'Start free',
  },
  {
    name: 'Plus',
    price: '$8',
    period: 'per month',
    highlight: true,
    features: [
      'Up to 100 GB per transfer',
      'Password protected links',
      'Custom expiry & download limits',
      'Priority network speed',
      'Branding options',
    ],
    cta: 'Upgrade',
  },
  {
    name: 'Pro',
    price: '$15',
    period: 'per month',
    highlight: false,
    features: [
      'Up to 250 GB per transfer',
      'Team access & roles',
      'Audit logs',
      'SAML/SSO',
      'Premium support',
    ],
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, predictable pricing</h2>
          <p className="mt-3 text-slate-600">Choose a plan that fits your workflow. Switch or cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                'rounded-2xl border p-6 flex flex-col',
                t.highlight ? 'border-slate-900 bg-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.4)]' : 'border-slate-200 bg-white',
              ].join(' ')}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                {t.highlight && (
                  <span className="rounded-full bg-slate-900 px-2 py-1 text-xs font-medium text-white">Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-extrabold">{t.price}</span>
                <span className="text-sm text-slate-600">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  className={[
                    'w-full rounded-full px-4 py-2 text-sm font-semibold',
                    t.highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border border-slate-300 hover:bg-slate-50',
                  ].join(' ')}
                >
                  {t.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">All paid plans include unlimited recipients and bandwidth fair‑use. VAT may apply.</p>
      </div>
    </section>
  );
}
