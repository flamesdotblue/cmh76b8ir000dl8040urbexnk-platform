import { useState } from 'react';

const faqs = [
  {
    q: 'How large can my transfers be?',
    a: 'On Free you can send up to 5 GB per transfer. Plus increases this to 100 GB and Pro up to 250 GB per transfer.'
  },
  {
    q: 'Do recipients need an account?',
    a: 'No. Recipients can download via a secure link in any browser without creating an account.'
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. Transfers are encrypted in transit and at rest. You can add password protection and restrict access by email.'
  },
  {
    q: 'Can I customize expiry and downloads?',
    a: 'Absolutely. Set a custom expiry date and limit the number of downloads for each transfer, available on paid plans.'
  },
];

function Item({ q, a, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 py-4 flex items-center justify-between"
        aria-expanded={open}
      >
        <span className="font-medium">{q}</span>
        <span className="ml-4 text-slate-500">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-1 text-sm text-slate-600">{a}</div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
        <p className="mt-3 text-slate-600">Can’t find what you’re looking for? Reach out to our support team.</p>

        <div className="mt-8 space-y-4">
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
