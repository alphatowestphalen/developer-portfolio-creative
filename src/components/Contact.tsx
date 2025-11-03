import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, ArrowUp, Linkedin, Facebook, Github, GitlabIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { contactData } from '../data/contactData';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const data = contactData[language];
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="mt-24 md:mt-32">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{data.title}</h2>
          <h4 className="mt-2 text-base md:text-lg text-neutral-300">{data.subtitle}</h4>
          <p className="mt-4 max-w-md text-neutral-300">{data.description}</p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <MapPin className="h-5 w-5 text-emerald-300" />
              </div>
              <span className="text-sm font-medium">{data.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <Mail className="h-5 w-5 text-emerald-300" />
              </div>
              <a className="text-sm font-medium hover:underline" href={`mailto:${data.email}`}>
                {data.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <Phone className="h-5 w-5 text-emerald-300" />
              </div>
              <a className="text-sm font-medium hover:underline" href={`tel:+${data.phone.replace(/\s/g, '')}`}>
                {data.phone}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/alphato-wespthalen-026480249/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-white/10 px-3 py-1 text-sm text-neutral-300 transition hover:border-white/30 hover:text-white"
              >
                <Linkedin className="mr-2 inline h-4 w-4 text-neutral-400 group-hover:text-white" />
                {data.social.linkedin}
              </a>
              <a
                href="https://www.facebook.com/alphato.westphalen"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-white/10 px-3 py-1 text-sm text-neutral-300 transition hover:border-white/30 hover:text-white"
              >
                <Facebook className="mr-2 inline h-4 w-4 text-neutral-400 group-hover:text-white" />
                {data.social.facebook}
              </a>
              <a
                href="https://github.com/alphatowestphalen"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-white/10 px-3 py-1 text-sm text-neutral-300 transition hover:border-white/30 hover:text-white"
              >
                <Github className="mr-2 inline h-4 w-4 text-neutral-400 group-hover:text-white" />
                {data.social.github}
              </a>
              <a
                href="https://gitlab.com/alphato2021"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-white/10 px-3 py-1 text-sm text-neutral-300 transition hover:border-white/30 hover:text-white"
              >
                <GitlabIcon className="mr-2 inline h-4 w-4 text-neutral-400 group-hover:text-white" />
                {data.social.gitlab}
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur opacity-0 translate-y-6 animate-fade-in"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs text-neutral-400">{data.form.name}</label>
              <input
                type="text"
                placeholder={data.form.namePlaceholder}
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-500 focus:border-white/20"
              />
            </div>
            <div>
              <label className="text-xs text-neutral-400">{data.form.email}</label>
              <input
                type="email"
                placeholder={data.form.emailPlaceholder}
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-500 focus:border-white/20"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs text-neutral-400">{data.form.subject}</label>
              <input
                type="text"
                placeholder={data.form.subjectPlaceholder}
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-500 focus:border-white/20"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs text-neutral-400">{data.form.message}</label>
              <textarea
                rows={5}
                placeholder={data.form.messagePlaceholder}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-500 focus:border-white/20"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            <Send className="h-4 w-4" />
            {data.form.submit}
          </button>
        </form>
      </div>

      <div className="mt-10 flex justify-end">
        <button
          onClick={scrollToTop}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-200 hover:bg-white/10"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};
