import {
  Stethoscope,
  Syringe,
  Smile,
  Activity,
  HeartPulse,
  Scissors,
} from "lucide-react";
import generalCare from "../assets/images/services/general-care.jpg";
import vaccination from "../assets/images/services/vaccination.jpg";
import dentalCare from "../assets/images/services/dental-care.jpg";
import surgery from "../assets/images/services/surgery.jpg";
import emergency from "../assets/images/services/emergency.jpg";
import grooming from "../assets/images/services/grooming.jpg";

export const services = [
  {
    id: "general-veterinary-care",
    title: "General Veterinary Care",
    icon: Stethoscope,
    image: generalCare,
    description:
      "Complete wellness exams, diagnostics and everyday care that keep your pet feeling its best all year round.",
  },
  {
    id: "pet-vaccinations",
    title: "Pet Vaccinations",
    icon: Syringe,
    image: vaccination,
    description:
      "Customized vaccination plans for dogs, cats and small pets that protect against common and serious diseases.",
  },
  {
    id: "dental-care",
    title: "Dental Care",
    icon: Smile,
    image: dentalCare,
    description:
      "Professional cleanings, check-ups and treatments that keep your pet's teeth, gums and breath healthy.",
  },
  {
    id: "pet-surgery",
    title: "Pet Surgery",
    icon: Activity,
    image: surgery,
    description:
      "Safe, modern surgical care — from routine spays and neuters to soft-tissue procedures — with close follow-up.",
  },
  {
    id: "emergency-care",
    title: "Emergency Care",
    icon: HeartPulse,
    image: emergency,
    description:
      "Rapid, around-the-clock care for accidents, poisonings and urgent conditions. Your pet is always in safe hands.",
  },
  {
    id: "grooming-wellness",
    title: "Grooming & Wellness",
    icon: Scissors,
    image: grooming,
    description:
      "Gentle grooming, nutritional advice and wellness plans that help your pet look great and feel wonderful.",
  },
];