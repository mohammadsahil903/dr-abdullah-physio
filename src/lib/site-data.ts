import {
  Activity, Bone, Dumbbell, HeartPulse, Home, PersonStanding, ShieldCheck,
  Sparkles, Stethoscope, Target, TrendingUp, type LucideIcon,
} from "lucide-react";
import portrait from "@/assets/dr-abdullah-portrait.jpg";
import treatment from "@/assets/treatment-session.jpg";
import exercise from "@/assets/rehab-exercise.jpg";
import clinic from "@/assets/clinic-workspace.jpg";

export const site = {
  name: "Dr. Abdullah",
  role: "Physiotherapist",
  phone: "[PHONE NUMBER]",
  email: "[EMAIL]",
  location: "[LOCATION / SERVICE AREA]",
  instagram: "[INSTAGRAM URL]",
  linkedin: "[LINKEDIN URL]",
  qualifications: "[QUALIFICATIONS]",
  experience: "[EXPERIENCE]",
};

export type Service = { title: string; description: string; icon: LucideIcon };
export const services: Service[] = [
  { title: "Sports Injury Rehabilitation", description: "A goal-led pathway designed around movement, confidence and a safe return to activity.", icon: Activity },
  { title: "Back & Neck Pain Management", description: "Individual assessment and progressive care for everyday comfort and movement.", icon: PersonStanding },
  { title: "Joint Pain Management", description: "Practical support for mobility, strength and the activities that matter to you.", icon: Bone },
  { title: "Post-Surgery Rehabilitation", description: "Structured rehabilitation planned around your procedure and clinical guidance.", icon: HeartPulse },
  { title: "Orthopedic Physiotherapy", description: "Focused care for musculoskeletal concerns affecting daily function and movement.", icon: Stethoscope },
  { title: "Strength & Conditioning", description: "Progressive exercise programming to build durable strength and movement capacity.", icon: Dumbbell },
  { title: "Posture & Mobility", description: "Movement coaching for better awareness, flexibility and daily movement habits.", icon: TrendingUp },
  { title: "Home Physiotherapy", description: "Convenient one-to-one care in your home, subject to location and availability.", icon: Home },
];

export const benefits = [
  { title: "Personalized Plans", text: "Care shaped around your condition, goals and daily life.", icon: Target },
  { title: "Evidence-Informed", text: "Clinical reasoning and current rehabilitation principles guide each plan.", icon: ShieldCheck },
  { title: "One-to-One Attention", text: "Focused sessions with clear explanations at every stage.", icon: PersonStanding },
  { title: "Long-Term Recovery", text: "Build confidence, strength and habits beyond short-term relief.", icon: Sparkles },
];

export const faqs = [
  ["What conditions do you treat?", "Services are tailored to individual needs. Contact Dr. Abdullah with a brief description of your concern to confirm whether physiotherapy may be appropriate."],
  ["How long does a session take?", "Session length can vary depending on the assessment and treatment plan. Exact timings will be confirmed when you book."],
  ["Do you provide home physiotherapy?", "Home visits may be available depending on location and schedule. Please enquire with your area and preferred time."],
  ["How many sessions might I need?", "This varies by condition, goals and response to treatment. A clearer recommendation can be discussed after an assessment."],
  ["What should I bring to my first appointment?", "Bring relevant medical documents, imaging reports and comfortable clothing that allows the affected area to be assessed."],
  ["Can physiotherapy help with sports injuries?", "Physiotherapy may support assessment and rehabilitation after many sports injuries. An individual assessment is needed before advice is given."],
  ["Do I need a doctor’s referral?", "Requirements can vary. Contact Dr. Abdullah or your healthcare provider to confirm what is appropriate for your situation."],
];

export const images = { portrait, treatment, exercise, clinic };
export const gallery = [
  { src: treatment, title: "Movement assessment", category: "Treatment Sessions", alt: "Illustrative physiotherapy shoulder assessment" },
  { src: exercise, title: "Guided rehabilitation", category: "Rehabilitation Exercises", alt: "Illustrative guided resistance band exercise" },
  { src: clinic, title: "Treatment environment", category: "Clinic / Workspace", alt: "Illustrative modern physiotherapy clinic workspace" },
  { src: portrait, title: "Professional profile", category: "Dr. Abdullah", alt: "Illustrative professional portrait representing Dr. Abdullah" },
];

export const articles = [
  { slug: "common-causes-lower-back-pain", category: "Pain education", title: "5 Common Causes of Lower Back Pain", description: "A practical overview of common contributors to back discomfort and when to seek an assessment.", date: "September 10, 2026", readTime: "5 min read", image: treatment },
  { slug: "when-to-see-a-physiotherapist", category: "Physiotherapy", title: "When Should You See a Physiotherapist?", description: "Signs that an individual movement and rehabilitation assessment may be useful.", date: "September 4, 2026", readTime: "4 min read", image: clinic },
  { slug: "physiotherapy-after-sports-injury", category: "Sports recovery", title: "Physiotherapy After a Sports Injury", description: "How structured rehabilitation can support a gradual, confident return to activity.", date: "August 28, 2026", readTime: "6 min read", image: exercise },
];

export const process = [
  ["01", "Initial Assessment", "Discuss your symptoms, movement, goals and relevant medical history."],
  ["02", "Personalized Plan", "Agree on a practical care plan based on your individual needs."],
  ["03", "Treatment & Rehabilitation", "Work through guided treatment, movement and progressive exercises."],
  ["04", "Progress Tracking", "Review change over time and adjust the approach where needed."],
  ["05", "Long-Term Prevention", "Build strategies to support mobility, strength and future confidence."],
];