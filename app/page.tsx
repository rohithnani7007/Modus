"use client";

import { useEffect } from "react";
import Link from "next/link";


export default function Home() {


  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="mt-5 w-full flex justify-center">
        <div className="max-w-7xl w-full mx-1 h-20 rounded-3xl bg-gradient-to-b from-[#00b3b37a] flex items-center justify-between px-8">

          <p className="text-3xl font-normal uppercase tracking-wide">modus</p>

          <nav className="hidden lg:flex gap-4">
            {[
              "Home",
              "Our Platform",
              "Our Services",
              "Our Offering",
              "Industry Solutions",
              "Our Experiences",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                href="/"
                className="p-1 font-medium hover:bg-white rounded-md transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <select className="h-9 px-2 text-sm border rounded-md bg-white">
               <option>English</option>
               <option>French</option>
               <option>German</option>
               <option>Spanish</option>
               <option>Portuguese</option>
  <option>Italian</option>
  <option>Russian</option>
  <option>Arabic</option>
  <option>Chinese</option>
  <option>Japanese</option>
  <option>Korean</option>
  <option>Kannada</option>
  <option>Hindi</option>
  <option>Tamil</option>
  <option>Telugu</option>
  <option>Malayalam</option>
  <option>Marathi</option>
  <option>Bengali</option>
  <option>Gujarati</option>
  <option>Punjabi</option>
  <option>Urdu</option>
              
              <option>kannada</option>
            </select>
            <Link
              href="#"
              className="px-6 py-2 bg-[#008282] text-white font-medium rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="mt-32 max-w-7xl mx-auto px-6 text-center space-y-12">
        <h1 className="text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-black via-[#008282] to-black bg-clip-text text-transparent">
          Value System Analysis – New Product & Service Launch
        </h1>

        {/* VIDEO */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="h-[500px] border rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/IQlnlvURxuY"
              title="YouTube video player"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ================= KEY STATEMENT ================= */}
      <section className="mt-32 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          In the modern world, a product or service is never just a product.
          <br />
          <span className="text-[#008282]">
            It is a system intervention with long-term economics, social,
            regulatory, and planetary consequences.
          </span>
        </h2>
      </section>

      {/* ================= TRANSFORMATION SECTION ================= */}
      <section className="mt-32 bg-[#ecffff] py-24">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

    {/* LEFT CONTENT */}
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-[#008282]">
        Value System Analysis does not exist to slow innovation.
      </h2>

      <p>
        That is why we position:
      </p>

      <p>
        Value System Analysis for New Product & Service Launch as a
        non-negotiable foundation for responsible scale, regulatory
        confidence, social trust, and sustainable profitability.
      </p>

      <button className="mt-6 px-8 py-3 bg-[#008282] text-white rounded-full">
        Read More →
      </button>
    </div>

    {/* RIGHT CONTENT (SHIFTED MORE RIGHT) */}
    <div className="space-y-6 lg:pl-24">
      <h3 className="text-xl font-semibold text-[#008282]">
        It exists to ensure that:
      </h3>

      <ul className="space-y-4 font-semibold">
        <li>Innovation is launched responsibly</li>
        <li>Growth is structurally stable</li>
        <li>Risk is consciously managed</li>
        <li>Impact is intentionally directed</li>
      </ul>
    </div>

  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="mt-1 bg-[#f7ffff] py-32">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-24 items-start">

      {/* LEFT — CORE PROBLEM */}
      <div className="space-y-10">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          The Core Problem
          <br />
          <span className="text-[#008282] block mt-3">
            Products Are Launched in Silos,
            <br />
            But They Operate in Living Systems
          </span>
        </h2>

        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl">
          Most organisations still evaluate product and service launches
          through fragmented, function-specific lenses:
        </p>

        <ul className="space-y-3 text-lg text-gray-800">
          <li>• Product teams focus on features and specifications</li>
          <li>• Technology teams focus on systems</li>
          <li>• Finance focuses on cost and revenue</li>
          <li>• Marketing focuses on customer acquisition</li>
          <li>• Compliance focuses on regulations</li>
        </ul>

        <p className="text-lg font-semibold text-gray-900 max-w-xl">
          No one sees the full Value System as a single, connected reality.
        </p>
      </div>

      {/* RIGHT — INSIGHT PANEL */}
      <div className="bg-white rounded-3xl shadow-xl p-12 space-y-10">

        {/* REALITY */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#008282]">
            The Reality
          </h3>

          <p className="text-lg leading-relaxed text-gray-800">
            The real world does not operate in silos.
            Customers, suppliers, regulators, ecosystems, and societies
            experience every product as{" "}
            <strong>one integrated system</strong>.
          </p>
        </div>

        {/* CONSEQUENCES */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#008282]">
            When this full system is not understood before launch, organisations inherit
          </h3>

          <ul className="grid sm:grid-cols-2 gap-1 text-lg text-gray-800">
            <li>• Hidden dependencies</li>
            <li>• Structural process breaks</li>
            <li>• Cross-team ownership conflicts</li>
            <li>• Data fragmentation and regulatory exposure</li>
            <li>• Supplier fragility</li>
            <li>• Cyber and operational risk</li>
            <li>• Environmental backlash</li>
            <li>• Permanent margin leakage</li>
          </ul>
        </div>

        {/* INSIGHT */}
        <div className="border-t pt-6 space-y-2">
          <p className="text-lg font-semibold text-gray-900">
            These are not execution issues.
          </p>
          <p className="text-lg text-gray-800">
            They are{" "}
            <span className="text-[#008282] font-semibold">
              Value System design gaps
            </span>{" "}
            at the point of launch.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="mt-5 max-w-7xl mx-auto px-6 text-center space-y-12">
        <h1 className="text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-black via-[#008282] to-black bg-clip-text text-transparent">
          What Is Value System Analysis for New Product & Service Launch?
        </h1>

        {/* VIDEO */}
        <section className="mt-24 max-w-6xl mx-auto px-6">
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube.com/embed/S8Kg4mdV_a0?rel=0"
      title="Value System Analysis Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>

  {/* Optional fallback */}
  <p className="text-center text-sm text-gray-500 mt-3">
    Video not loading?
    <a
      href="https://youtu.be/S8Kg4mdV_a0"
      target="_blank"
      className="text-[#008282] underline ml-1"
    >
      Watch on YouTube →
    </a>
  </p>
</section>

      </section>

      <section className="mt-1 bg-[#f3ffff] py-32">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="max-w-4xl mb-20">
      <h2 className="text-5xl font-bold text-[#003d3d] leading-tight">
        Value System Analysis
      </h2>

      <p className="mt-6 text-xl leading-relaxed text-gray-700">
        Value System Analysis is the discipline of{" "}
        <span className="font-semibold text-[#008282]">
          strategic foresight
        </span>{" "}
        that enables leaders to understand — before launch — how a product or
        service will interact with the full operating, regulatory, social,
        economic, and environmental system.
      </p>
    </div>

    {/* TWO COLUMN LAYOUT */}
    <div className="grid lg:grid-cols-2 gap-24 items-start">

      {/* LEFT — WHAT IT ANALYSES */}
      <div className="space-y-10">
        <h3 className="text-3xl font-semibold text-[#003d3d]">
          It Analyses Impact Across
        </h3>

        <ul className="space-y-5 text-lg">
          {[
            "The entire end-to-end Value Chain",
            "The extended enterprise and partner ecosystem",
            "The cross-industry operating environment",
            "The regional and country-specific regulatory landscape",
            "The social, environmental, and planetary system",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-4"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-[#008282]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — LEADERSHIP SHIFT */}
      <div className="bg-white rounded-3xl p-12 shadow-xl space-y-8">

        <h3 className="text-3xl font-semibold text-[#003d3d]">
          The Leadership Shift
        </h3>

        <div className="space-y-4 text-lg">
          <p className="text-gray-700">
            It shifts leadership thinking from:
          </p>

          <p className="font-semibold text-xl">
            “Can we launch this?”
          </p>

          <p className="text-gray-700">
            to:
          </p>

          <p className="font-semibold text-xl text-[#008282]">
            “How should this be launched, in what form, in which markets,
            with what controls, safeguards, and system design?”
          </p>
        </div>

        <div className="border-t pt-6">
          <p className="text-lg font-semibold">
            The goal is not prevention.
          </p>
          <p className="text-lg text-[#008282] font-semibold">
            The goal is precision, responsibility, and long-term resilience.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-8 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-4xl mx-auto mb-28">
      <h3 className="text-5xl font-bold text-[#003d3d] mb-6">
        What This Analysis Makes Visible Before You Launch
      </h3>

      <p className="text-xl text-gray-700 leading-relaxed">
        Value System Analysis provides early, system-wide intelligence so that
        leaders can deliberately adjust design, strategy, and execution —
        before irreversible commitments are made.
      </p>
    </div>

    {/* IMPACT CARDS — PREMIUM GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">

      {[
        {
          title: "Process Impact",
          desc: "What will break, stretch, or require redesign across operations",
        },
        {
          title: "System & Architecture Impact",
          desc: "Integration pressure, scalability limits, platform readiness",
        },
        {
          title: "Data Impact",
          desc: "Ownership, privacy, sovereignty, quality, and regulatory exposure",
        },
        {
          title: "Customer Impact",
          desc: "Experience consistency, adoption friction, trust and behavioural risk",
        },
        {
          title: "Supplier & Partner Impact",
          desc: "Dependency concentration, failure points, geopolitical exposure",
        },
        {
          title: "People & Capability Impact",
          desc: "Skill gaps, workforce readiness, change stress",
        },
        {
          title: "AI & Automation Impact",
          desc: "What can safely be automated and what creates systemic risk",
        },
        {
          title: "Cybersecurity Impact",
          desc: "Expansion of attack surface and operational exposure",
        },
        {
          title: "Environmental Impact",
          desc: "Carbon, water, plastic, waste, energy, and sustainability compliance",
        },
        {
          title: "Cross-Industry Impact",
          desc: "Where your product intersects or destabilises other industries",
        },
        {
          title: "Regional & Country Impact",
          desc: "Local laws, tax, trade, labour, and data residency rules",
        },
        {
          title: "Government & Policy Impact",
          desc: "Licensing, approvals, restrictions, and incentives",
        },
        {
          title: "Financial Impact",
          desc: "True cost-to-serve, durability of margins, capital stress",
        },
        {
          title: "People Sentiment & Social Impact",
          desc: "Public perception, workforce sentiment, reputational exposure",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="
            group rounded-3xl bg-[#f8ffff]
            p-10 border border-gray-200
            shadow-sm hover:shadow-2xl
            transition-all duration-500
          "
        >
          {/* ICON DOT (like reference cards) */}
          <div className="mb-6">
            <div className="h-12 w-12 rounded-full border-2 border-[#008282] flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-[#008282]" />
            </div>
          </div>

          {/* TITLE */}
          <h4 className="text-2xl font-semibold text-[#003d3d] mb-4">
            {item.title}
          </h4>

          {/* DESCRIPTION */}
          <p className="text-lg text-gray-700 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* EXECUTIVE INSIGHT — FEATURE STRIP */}
    <div className="mt-32 max-w-5xl mx-auto bg-[#f4ffff] rounded-3xl px-12 py-10 border-l-4 border-[#008282]">
      <p className="text-2xl font-semibold text-[#003d3d] leading-relaxed text-center">
        This intelligence allows leaders to alter system design, market strategy,
        supply models, technology architecture, and rollout sequencing —
        <span className="text-[#008282]">
          {" "}before irreversible commitments are made.
        </span>
      </p>
    </div>

  </div>
</section>


<section className="py-5 bg-gradient-to-b from-white to-[#f8ffff]">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="max-w-4xl mb-20">
      <h3 className="text-5xl font-bold leading-tight text-[#003d3d] mb-6">
        Why This Analysis Exists
        <br />
        <span className="text-[#008282]">
          To Redirect Risk Before It Becomes Damage
        </span>
      </h3>

      <p className="text-xl text-gray-700 leading-relaxed">
        When Value System Analysis is not performed before launch,
        organisations typically face consequences that compound over time
        — quietly at first, then suddenly and publicly.
      </p>
    </div>

    {/* RISK LIST */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT — FAILURE PATTERNS */}
      <div className="space-y-6">
        <ul className="space-y-5 text-lg text-gray-800">
          <li className="flex gap-4">
            <span className="text-[#008282] font-bold">—</span>
            Systems that were never designed for real-world scale
          </li>
          <li className="flex gap-4">
            <span className="text-[#008282] font-bold">—</span>
            Data architectures that collapse under regulatory and operational pressure
          </li>
          <li className="flex gap-4">
            <span className="text-[#008282] font-bold">—</span>
            Suppliers that fail under volume shifts or geopolitical stress
          </li>
          <li className="flex gap-4">
            <span className="text-[#008282] font-bold">—</span>
            Customers that churn due to inconsistent multi-channel experiences
          </li>
          <li className="flex gap-4">
            <span className="text-[#008282] font-bold">—</span>
            Teams that fall into blame cycles instead of execution clarity
          </li>
          <li className="flex gap-4">
            <span className="text-[#008282] font-bold">—</span>
            Sustainability promises that collapse under audit and public scrutiny
          </li>
          <li className="flex gap-4">
            <span className="text-[#008282] font-bold">—</span>
            Regulatory interventions that force expensive mid-stream redesigns
          </li>
          <li className="flex gap-4">
            <span className="text-[#008282] font-bold">—</span>
            Profit models that looked viable on spreadsheets but fail in operations
          </li>
        </ul>
      </div>

      {/* RIGHT — LEADERSHIP CONSEQUENCE */}
      <div className="bg-white rounded-3xl shadow-xl p-12 space-y-8 border-l-4 border-[#008282]">
        <p className="text-2xl font-semibold text-[#003d3d] leading-relaxed">
          At that point, leadership is no longer shaping the future.
        </p>

        <p className="text-xl text-gray-800 leading-relaxed">
          They are managing continuous exception, crisis,
          and reputational exposure.
        </p>

        <div className="pt-6 border-t">
          <p className="text-xl font-semibold leading-relaxed text-[#003d3d]">
            This is precisely what Value System Analysis is designed to prevent.
          </p>
          <p className="text-lg text-gray-700 mt-2">
            By enabling <span className="text-[#008282] font-semibold">early redirection</span>,
            not late repair.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-8 bg-[#f4ffff]">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="max-w-4xl mb-20">
      <h2 className="text-5xl font-bold text-[#003d3d] leading-tight mb-6">
        The Modern Reality:
        <br />
        <span className="text-[#008282]">
          Products Now Operate in Multi-Layered Systems
        </span>
      </h2>

      <p className="text-xl text-gray-700 leading-relaxed">
        Every product or service today simultaneously operates across:
      </p>
    </div>

    {/* MULTI-LAYER GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
      {[
        "Digital systems",
        "Physical supply chains",
        "Data and AI ecosystems",
        "Regulatory frameworks",
        "Financial markets",
        "Labour environments",
        "Social sentiment",
        "Environmental limits",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200"
        >
          <p className="text-lg font-semibold text-[#003d3d]">
            {item}
          </p>
        </div>
      ))}
    </div>

    {/* REALITY STATEMENT */}
    <div className="max-w-5xl mb-24">
      <p className="text-2xl text-gray-800 leading-relaxed">
        You are no longer launching a product into a market.
      </p>

      <p className="text-2xl font-semibold text-[#008282] mt-4">
        You are introducing a system intervention into a live,
        highly sensitive global ecosystem.
      </p>
    </div>

    {/* CONSEQUENCES + SHIFT */}
    <div className="grid lg:grid-cols-2 gap-20 items-start">

      {/* LEFT — WITHOUT VISIBILITY */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-[#003d3d]">
          Without full Value System visibility:
        </h3>

        <ul className="space-y-4 text-xl">
          <li>• Growth becomes fragile</li>
          <li>• Risk becomes nonlinear</li>
          <li>• Scaling becomes structurally dangerous</li>
        </ul>
      </div>

      {/* RIGHT — SHIFT */}
      <div className="bg-white rounded-3xl p-10 shadow-md border border-gray-200">
        <p className="text-xl mb-6">
          This is why global enterprises, governments, and regulators
          are now shifting from:
        </p>

        <p className="text-2xl font-semibold text-gray-800 mb-2">
          “Product approval”
        </p>

        <p className="text-xl text-gray-500 mb-6">to</p>

        <p className="text-2xl font-semibold text-[#008282]">
          “System-level launch intelligence.”
        </p>
      </div>

    </div>

  </div>
</section>

<section className="py-36 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* ================= WHO THIS IS FOR ================= */}
    <div className="mb-36">

      <h2 className="text-5xl font-bold text-[#003d3d] mb-10">
        Who This Is Now Essential For
      </h2>

      <p className="text-xl text-gray-700 max-w-4xl mb-16">
        Value System Analysis is now essential for responsible scale across:
      </p>

      {/* USE CASE GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          "New product and service launches",
          "AI-driven and digital platforms",
          "Cross-border and international expansion programs",
          "Regulated industries (finance, healthcare, aviation, energy, telecom)",
          "National and global consumer goods programs",
          "Sustainability-led innovation",
          "Manufacturing, infrastructure, and smart-city programs",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-gray-200 p-6 bg-[#f8ffff]"
          >
            <p className="text-lg font-semibold text-[#003d3d]">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* IF YOUR PRODUCT TOUCHES */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        <div>
          <h3 className="text-3xl font-bold text-[#003d3d] mb-6">
            If your product touches:
          </h3>

          <ul className="space-y-4 text-xl">
            <li>• Customers at scale</li>
            <li>• Public trust</li>
            <li>• Natural resources</li>
            <li>• Or government regulation</li>
          </ul>
        </div>

        <div className="bg-[#f4ffff] rounded-3xl p-10 border-l-4 border-[#008282]">
          <p className="text-xl font-semibold text-[#003d3d] leading-relaxed">
            Then Value System Analysis is a leadership responsibility,
            <br />
            <span className="text-[#008282]">
              not a consulting add-on.
            </span>
          </p>
        </div>

      </div>
    </div>

    {/* ================= LEADERSHIP SHIFT ================= */}
    <div className="pt-32 border-t">

      <h2 className="text-5xl font-bold text-[#003d3d] mb-12">
        The Leadership Shift Required
      </h2>

      <p className="text-xl text-gray-700 max-w-5xl mb-20">
        Future-ready organisations will not be defined by how fast they launch,
        how much they spend, or how loudly they market.
      </p>

      <p className="text-2xl font-semibold text-[#008282] mb-16">
        They will be defined by their ability to:
      </p>

      {/* CAPABILITIES GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        {[
          "See the complete Value System before acting",
          "Quantify ripple effects before committing capital",
          "Alter the path of the launch based on real system intelligence",
          "Align profit with people, policy, and planet",
          "Design resilience before scale",
          "Correct direction early instead of repairing damage later",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200"
          >
            <p className="text-lg font-semibold text-[#003d3d] leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* FINAL CONTRAST */}
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-2xl text-gray-700 mb-4">
          This is the difference between:
        </p>

        <p className="text-3xl font-semibold text-gray-800">
          Short-term product success
        </p>

        <p className="text-xl text-gray-500 my-3">and</p>

        <p className="text-3xl font-semibold text-[#008282]">
          Long-term enterprise, social, and environmental stability.
        </p>
      </div>

    </div>

  </div>
</section>

    </>
  );
}
