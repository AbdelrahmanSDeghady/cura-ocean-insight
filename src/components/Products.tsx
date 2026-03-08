import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Smartphone,
  Brain,
  Search,
  BarChart3,
  ExternalLink,
  Stethoscope,
  FlaskConical,
  Shield,
  Building2,
  Scissors,
  Droplets,
  Microscope,
  ScanLine,
  UserCheck,
  Pill,
  Link,
  Settings,
  Building,
  Database,
  Wind,
  HeartPulse,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import screenClinic from "@/assets/screen-clinic.png";
import screenLabs from "@/assets/screen-labs.png";
import screenPharma from "@/assets/screen-pharma.png";
import screenSurgery from "@/assets/screen-surgery.png";
import screenHospital from "@/assets/screen-hospital.png";
import screenPatients from "@/assets/screen-patients.png";

const showcases = [
  {
    id: "clinic",
    label: "Clinic",
    icon: Stethoscope,
    image: screenClinic,
    title: "Clinical Overview",
    description: "Complete patient profiles with diagnoses, lab signals, medications, and clinical history — all on one screen.",
  },
  {
    id: "labs",
    label: "Labs",
    icon: FlaskConical,
    image: screenLabs,
    title: "Lab Results & Trends",
    description: "Structured lab panels with abnormal flagging, trend indicators, and longitudinal tracking across visits.",
  },
  {
    id: "patients",
    label: "Patients",
    icon: Heart,
    image: screenPatients,
    title: "Patient Management",
    description: "Search, filter, and manage your entire patient roster with comprehensive records and visit history.",
  },
  {
    id: "surgery",
    label: "Surgery",
    icon: Scissors,
    image: screenSurgery,
    title: "Surgery Portal",
    description: "Document procedures, manage worklists, book operating rooms, and track complications — purpose-built for surgeons.",
  },
  {
    id: "hospital",
    label: "Hospital Admin",
    icon: Building2,
    image: screenHospital,
    title: "Hospital Administration",
    description: "Departments, staff, wards, beds, and operational metrics — a complete hospital management overview.",
  },
  {
    id: "pharma",
    label: "Pharmacovigilance",
    icon: Shield,
    image: screenPharma,
    title: "Drug Safety & Surveillance",
    description: "National pharmacovigilance dashboard tracking adverse drug events, signals, and safety trends across all medications.",
  },
];

const products = [
  {
    icon: Heart,
    name: "Universal Health Profile",
    description: "A longitudinal, patient-owned record capturing all health events across time.",
    tags: ["Clinical History", "Care Coordination"],
  },
  {
    icon: Smartphone,
    name: "MyHealth App",
    description: "Patient app for symptom tracking, medication management, and AI guidance.",
    tags: ["Patient App", "AI Guidance"],
  },
  {
    icon: Brain,
    name: "ICura Agent",
    description: "Clinical decision support analyzing risk factors, contraindications, and drug interactions.",
    tags: ["Decision Support", "Safety"],
  },
  {
    icon: Search,
    name: "Atlas Agent",
    description: "Predictive AI detecting early disease patterns from longitudinal clinical data.",
    tags: ["Predictive AI", "Early Detection"],
  },
  {
    icon: BarChart3,
    name: "Nexus",
    description: "Real-world evidence analytics for research, surveillance, and public health policy.",
    tags: ["Analytics", "Public Health"],
  },
];

const Products = () => {
  const [activeShowcase, setActiveShowcase] = useState(0);

  return (
    <section id="products" className="py-28 lg:py-36 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Platform
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight max-w-3xl mx-auto">
            See it in action
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Purpose-built portals for every role — from clinic to cath lab, from surgery to surveillance.
          </p>
        </motion.div>

        {/* Interactive Screenshot Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-24"
        >
          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 px-2">
            {showcases.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActiveShowcase(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeShowcase === i
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background text-muted-foreground hover:text-foreground hover:bg-muted border border-border"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Screenshot display */}
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-foreground/5 bg-background">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/40" />
                <div className="w-3 h-3 rounded-full bg-medical-warning/40" />
                <div className="w-3 h-3 rounded-full bg-medical-success/40" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background rounded-md px-4 py-1 text-xs text-muted-foreground border border-border">
                  dime-eg.com/{showcases[activeShowcase].id}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.img
                key={activeShowcase}
                src={showcases[activeShowcase].image}
                alt={showcases[activeShowcase].title}
                className="w-full h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeShowcase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-8"
            >
              <h3 className="text-xl font-serif text-foreground mb-2">
                {showcases[activeShowcase].title}
              </h3>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                {showcases[activeShowcase].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* And more! section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-24"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-10">
            And more!
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Wind, name: "Bronchoscopy Portal", desc: "Pulmonary procedures & interventions" },
              { icon: Scissors, name: "Surgery Portal", desc: "Scheduling, procedures & operative notes" },
              { icon: Building2, name: "Hospital Admin", desc: "Departments, wards & staff management" },
              { icon: FlaskConical, name: "Lab Center", desc: "Laboratory testing & results management" },
              { icon: Users, name: "Nursing Station", desc: "Patient care, medication & nursing tasks" },
              { icon: HeartPulse, name: "Cath Lab", desc: "Cardiac catheterization & interventional procedures" },
              { icon: Droplets, name: "Blood Bank", desc: "Donations, inventory & transfusion tracking" },
              { icon: Microscope, name: "Pathology Lab", desc: "Surgical specimens & histopathology reports" },
              { icon: ScanLine, name: "Imaging Center", desc: "Radiology workflows & DICOM viewer" },
              { icon: UserCheck, name: "Clinic Assistant", desc: "Queue management & patient check-in" },
              { icon: Pill, name: "Drug Authority", desc: "Regulatory oversight & pharmacovigilance" },
              { icon: Link, name: "Pharma Portal", desc: "Drug management & prescription analytics" },
              { icon: Settings, name: "System Admin", desc: "Full system control & user management" },
              { icon: Building, name: "Polyclinic Portal", desc: "Manage clinics, doctors & performance" },
              { icon: Database, name: "Research Hub", desc: "Clinical trials & research data access" },
            ].map((portal, i) => (
              <motion.div
                key={portal.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group p-5 rounded-xl bg-background border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors">
                  <portal.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">{portal.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{portal.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Ecosystem
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground leading-tight max-w-2xl mx-auto">
            Five layers of intelligent care
          </h2>
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-7 rounded-2xl bg-background border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <product.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground mb-3">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://dime-eg.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:bg-primary-dark rounded-full px-8 py-6 text-base font-medium group">
              Explore DIME Platform
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
