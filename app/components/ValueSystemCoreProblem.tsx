"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  DollarSign,
  Megaphone,
  ShieldCheck,
} from "lucide-react";

const items = [
  { icon: Layers, text: "Product teams focus on features and specifications" },
  { icon: Cpu, text: "Technology teams focus on systems" },
  { icon: DollarSign, text: "Finance focuses on cost and revenue" },
  { icon: Megaphone, text: "Marketing focuses on customer acquisition" },
  { icon: ShieldCheck, text: "Compliance focuses on regulations" },
];

export default function ValueSystemCoreProblem() {
  return (
    <section className="relative bg-[#f6ffff] dark:bg-[#0b1f1f] py-36">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">

        {/* LEFT — STICKY */}
        <div className="lg:sticky top-32 h-fit space-y-10">
          <h2 className="text-5xl font-bold leading-tight text-black dark:text-white">
            The Core Problem
          </h2>

          <p className="text-2xl font-semibold text-[#008282] leading-snug">
            Products are launched in silos —
            <br />
            but they operate in living systems.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300">
            Most organisations still evaluate launches through fragmented,
            function-specific lenses.
          </p>
        </div>

        {/* RIGHT — SCROLLING CONTENT */}
        <div className="space-y-20">

          {/* Fragmented Views */}
          <div className="space-y-6">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <div className="p-3 rounded-xl bg-[#008282]/10 dark:bg-[#008282]/20">
                    <Icon className="text-[#008282]" size={22} />
                  </div>
                  <p className="text-lg text-black dark:text-gray-200">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Reality Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white dark:bg-[#102f2f] shadow-lg p-12 space-y-8"
          >
            <h3 className="text-xl font-semibold text-[#008282] uppercase tracking-wide">
              The Reality
            </h3>

            <p className="text-lg text-gray-800 dark:text-gray-200">
              The real world does not operate in silos.
              Customers, suppliers, regulators, ecosystems, and societies
              experience every product as{" "}
              <span className="font-semibold">one integrated system</span>.
            </p>
          </motion.div>

          {/* Consequences */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[#008282]/20 dark:border-[#008282]/40 p-12 space-y-6"
          >
            <h3 className="text-xl font-semibold text-[#008282] uppercase tracking-wide">
              What This Creates
            </h3>

            <ul className="grid gap-3 text-lg text-gray-800 dark:text-gray-200">
              <li>• Hidden dependencies</li>
              <li>• Structural process breaks</li>
              <li>• Cross-team ownership conflicts</li>
              <li>• Data fragmentation and regulatory exposure</li>
              <li>• Supplier fragility</li>
              <li>• Cyber and operational risk</li>
              <li>• Environmental backlash</li>
              <li>• Permanent margin leakage</li>
            </ul>
          </motion.div>

          {/* Final Insight */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-6 border-t dark:border-gray-700"
          >
            <p className="text-lg font-semibold text-black dark:text-white">
              These are not execution issues.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              They are{" "}
              <span className="font-semibold text-[#008282]">
                Value System design gaps
              </span>{" "}
              at the point of launch.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
