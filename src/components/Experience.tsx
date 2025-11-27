import React from "react";
import {
  Briefcase,
  Layers,
  Dot,
  MonitorCheck,
  DatabaseZap,
  FlaskConical,
  Server,
  Activity,
  Gitlab,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="mt-24 md:mt-32">
      {/* Title */}
      <h2 className="text-3xl font-grifter font-grifter md:text-5xl font-semibold tracking-wider leading-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
        {t.experience[0].title}
      </h2>
      <p className="mt-3 text-neutral-400">{t.experience[0].description}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* ---- FIRST EXPERIENCE ---- */}
        <div className="flex flex-col gap-20 border border-white/10 p-6 opacity-0 translate-y-6 animate-fade-in">
          <div>
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center border border-white/10 px-2 justify-center bg-white/5">
                <Briefcase className="h-5 w-5 text-emerald-300" />
              </div>

              <div>
                <p className="text-sm font-medium">
                  {t.experience[0].title_project}
                </p>

                <p className="text-xs text-neutral-400">
                  {t.experience[0].selfEmployed}
                </p>

                <strong className="text-[11px] text-neutral-400">
                  {t.experience[0].period1}
                </strong>
              </div>
            </div>

            {/* Descriptions */}
            <ul className="mt-4 space-y-3">
              {t.experience[0].descriptions.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <Dot className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                  <p className="text-sm text-neutral-300">{item.desc}</p>
                </li>
              ))}
            </ul>

            {/* techno */}
            <div className="mt-5 flex-wrap gap-2 inline-flex items-center w-full">
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-2 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <MonitorCheck className="h-4 w-4" />
                Angular
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <Server className="h-4 w-4" />
                Java(Quarkus)
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <FlaskConical className="h-4 w-4" />
                Cypress
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <FlaskConical className="h-4 w-4" />
                JUnit / Mockuto
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <Gitlab className="h-4 w-4" />
                Git
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <DatabaseZap className="h-4 w-4" />
                Postgress
              </button>
            </div>
          </div>

          <div>
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center border border-white/10 px-2 justify-center bg-white/5">
                <Briefcase className="h-5 w-5 text-emerald-300" />
              </div>

              <div>
                <p className="text-sm font-medium">
                  {t.experience[1].title_project}
                </p>

                <p className="text-xs text-neutral-400">
                  {t.experience[1].selfEmployed}
                </p>

                <strong className="text-[11px] text-neutral-400">
                  {t.experience[1].period1}
                </strong>
              </div>
            </div>

            {/* Descriptions */}
            <ul className="mt-4 space-y-3">
              {t.experience[1].descriptions.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <Dot className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                  <p className="text-sm text-neutral-300">{item.desc}</p>
                </li>
              ))}
            </ul>

            {/* techno */}
            <div className="mt-5 flex-wrap gap-2 inline-flex items-center w-full">
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-2 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <MonitorCheck className="h-4 w-4" />
                Java
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <Server className="h-4 w-4" />
                Quarkus
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <FlaskConical className="h-4 w-4" />
                JUnit
              </button>

              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <FlaskConical className="h-4 w-4" />
                Mockuto
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <Activity className="h-4 w-4" />
                Sonarcube
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <Gitlab className="h-4 w-4" />
                Git
              </button>
            </div>
          </div>
        </div>

        {/* ---- SECOND EXPERIENCE ---- */}
        <div className="opacity-0 flex flex-col gap-6 translate-y-6 animate-fade-in animation-delay-200">
          <div className=" border border-white/10 p-6">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center border border-white/10 px-2 justify-center bg-white/5">
                <Briefcase className="h-5 w-5 text-emerald-300" />
              </div>

              <div>
                <p className="text-sm font-medium">
                  {t.experience[2].title_project}
                </p>

                <p className="text-xs text-neutral-400">
                  {t.experience[2].selfEmployed}
                </p>

                <strong className="text-[11px] text-neutral-400">
                  {t.experience[2].period1}
                </strong>
              </div>
            </div>

            {/* Descriptions */}
            <ul className="mt-4 space-y-3">
              {t.experience[2].descriptions.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <Dot className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                  <p className="text-sm text-neutral-300">{item.desc}</p>
                </li>
              ))}
            </ul>

            {/* techno */}
            <div className="mt-5 flex-wrap gap-2 inline-flex items-center w-full">
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-2 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <MonitorCheck className="h-4 w-4" />
                Angular
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <Server className="h-4 w-4" />
                Java(Quarkus)
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <FlaskConical className="h-4 w-4" />
                JUnit
              </button>

              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <FlaskConical className="h-4 w-4" />
                Mockuto
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <DatabaseZap className="h-4 w-4" />
                PostgreSQL
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <Gitlab className="h-4 w-4" />
                Git
              </button>
            </div>
          </div>

          <div className=" border border-white/10 p-6">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center border border-white/10 px-2 justify-center bg-white/5">
                <Briefcase className="h-5 w-5 text-emerald-300" />
              </div>

              <div>
                <p className="text-sm font-medium">
                  {t.experience[3].title_project}
                </p>

                <p className="text-xs text-neutral-400">
                  {t.experience[3].selfEmployed}
                </p>

                <strong className="text-[11px] text-neutral-400">
                  {t.experience[3].period1}
                </strong>
              </div>
            </div>

            {/* Descriptions */}
            <ul className="mt-4 space-y-3">
              {t.experience[3].descriptions.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <Dot className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                  <p className="text-sm text-neutral-300">{item.desc}</p>
                </li>
              ))}
            </ul>

            {/* techno */}
            <div className="mt-5 flex-wrap gap-2 inline-flex items-center w-full">
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-2 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <MonitorCheck className="h-4 w-4" />
                Ionic(Angular)
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <Server className="h-4 w-4" />
                Java(SpringBoot)
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <FlaskConical className="h-4 w-4" />
                JUnit
              </button>

              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <FlaskConical className="h-4 w-4" />
                Mockuto
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <DatabaseZap className="h-4 w-4" />
                PostgreSQL
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-emerald-300">
                <Gitlab className="h-4 w-4" />
                Git
              </button>
            </div>
          </div>
        </div>

        {/* ---- tree EXPERIENCE ---- */}
      </div>
    </section>
  );
};
