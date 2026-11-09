import lingsarImage from '../assets/mobil/lingsar-trimmed.png';
import arunaImage from '../assets/mobil/aruna-trimmed.png';
import bimasenaImage from '../assets/mobil/bimasena-trimmed.png';

import badgeSEM from '../assets/vehicles/badgeSEM.png';
import badgeKMHE from '../assets/vehicles/badgeKMHE.png';
import badgeShellSvg from '../assets/vehicles/badge-shell-eco-marathon.svg';
import badgeKmheSvg from '../assets/vehicles/badge-kmhe.svg';

import lingsarHeroBg from '../assets/SEM24/lingsarsem.JPG';
import arunaHeroBg from '../assets/bgHome/Aruna.JPG';
import bimasenaHeroBg from '../assets/SEM24/kmli19.jpg';

import { Zap, Flame, Trophy } from 'lucide-react';

export const vehicleData = {
  lingsar: {
    id: 'lingsar',
    name: 'Lingsar EV 3.0',
    shortName: 'Lingsar EV',
    category: 'Electric Vehicle Prototype',
    generation: 'Generation 3 (2022 - Present)',
    badge: 'International Podium Champion',
    tagline: 'Ultralight, ultra-efficient commuter prototype engineered with aerospace aerodynamics to break world efficiency records.',
    heroImage: lingsarHeroBg,
    carImage: lingsarImage,
    badgeLogo: badgeSEM,
    badgeLogoAlt: 'Shell Eco-marathon Asia-Pacific',
    podiumBadge: badgeShellSvg,
    podiumTitle: '3rd Place Asia-Pacific Podium',
    podiumEvent: 'Shell Eco-marathon 2023',
    podiumCircuit: 'Pertamina Mandalika International Circuit',
    accentLight: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    tabActive: 'bg-emerald-600 text-white shadow-emerald-500/20 shadow-lg',
    icon: Zap,

    highlightStats: [
      { label: 'Highest Record', value: '3', unit: 'rd Asia-Pacific' },
      { label: 'Competitions Entered', value: '5', unit: 'Championships' },
      { label: 'Motor Efficiency', value: '97.4', unit: '%' }, // TODO: verifikasi
      { label: 'Curb Weight', value: '48', unit: 'kg' }, // TODO: verifikasi
    ],

    trackRecord: {
      bestPodium: '3rd Place Asia-Pacific (SEM 2023)',
      totalRaces: '5 Major Competitions',
      efficiencyRecord: '245 km/kWh (Benchmark Result)', // TODO: verifikasi
      firstDebut: 'KMHE 2021',
      competitionsList: [
        {
          name: 'Shell Eco-marathon Asia-Pacific & Middle East 2023',
          year: '2023',
          category: 'Prototype Electric Vehicle',
          result: '3rd Place Asia-Pacific Podium',
          circuit: 'Pertamina Mandalika International Circuit',
          highlight: true,
          medalType: 'podium-bronze',
          positionNumber: '3rd',
          badgeImage: badgeShellSvg,
          badgeAlt: '3rd Place Shell Eco-marathon Asia-Pacific & Middle East 2023'
        },
        {
          name: 'Kontes Mobil Hemat Energi (KMHE) 2024',
          year: '2024',
          category: 'Prototype EV Category',
          result: '5th National Place',
          circuit: 'Sirkuit Carnaval Ancol, Jakarta',
          highlight: false,
          medalType: 'finalist',
          positionNumber: '5th'
        },
        {
          name: 'Shell Eco-marathon Asia-Pacific 2024',
          year: '2024',
          category: 'Prototype Electric Vehicle',
          result: '5th Place Asia-Pacific',
          circuit: 'Pertamina Mandalika International Circuit',
          highlight: false,
          medalType: 'finalist',
          positionNumber: '5th'
        },
        {
          name: 'Kontes Mobil Hemat Energi (KMHE) 2021',
          year: '2021',
          category: 'Prototype EV Category',
          result: '4th National Place',
          circuit: 'Sirkuit Gelora Bung Tomo, Surabaya',
          highlight: false,
          medalType: 'finalist',
          positionNumber: '4th'
        },
        {
          name: 'Kontes Mobil Hemat Energi (KMHE) 2019',
          year: '2019',
          category: 'Debut EV Prototype Category',
          result: 'National Finalist Debut',
          circuit: 'Universitas Negeri Malang',
          highlight: false,
          medalType: 'participant',
          positionNumber: 'Debut'
        }
      ]
    },

    quickSpecs: [
      { label: 'Top Record', value: '3rd SEM Asia-Pacific' },
      { label: 'Total Races', value: '5 Competitions' },
      { label: 'Chassis Type', value: 'Carbon Monocoque' },
      { label: 'Motor Powertrain', value: 'BLDC High Efficiency' },
    ],

    specs: [
      { label: 'Class Category', value: 'Prototype Electric Vehicle' },
      { label: 'Body & Monocoque', value: 'Carbon Fiber Prepreg Composite' },
      { label: 'Powertrain Motor', value: 'Brushless DC (BLDC) Motor' },
      { label: 'Controller', value: 'Custom In-House FOC Inverter' },
      { label: 'Battery Chemistry', value: 'LiFePO4 Safe Lightweight Pack' },
      { label: 'Steering & Suspension', value: 'Direct Rack & Pinion, Double Wishbone' },
      { label: 'Telemetry Stack', value: 'LoRa 915MHz Live Dashboard Grid' },
      { label: 'Tires & Wheels', value: 'Low Rolling Resistance Michelin Radial' },
    ],

    telemetry: [
      { label: 'System Voltage', value: '49.8 V' }, // TODO: verifikasi
      { label: 'Current Draw', value: '3.2 A' }, // TODO: verifikasi
      { label: 'Core Temp', value: '41.2 °C', alert: false }, // TODO: verifikasi
      { label: 'RPM Velocity', value: '1,840 RPM' }, // TODO: verifikasi
      { label: 'Energy Consumption', value: '1.6 Wh/km', highlight: true }, // TODO: verifikasi
      { label: 'RF Telemetry Signal', value: '100% OK' } // TODO: verifikasi
    ],

    keyFeatures: [
      {
        title: 'Aerodynamic Monocoque Canopy',
        desc: 'Wind-tunnel and ANSYS CFD refined canopy yielding an ultra-low drag coefficient for minimal aerodynamic drag.'
      },
      {
        title: 'Bespoke In-House FOC Controller',
        desc: 'Field-oriented control algorithm maximizing torque efficiency during track acceleration while maintaining thermal stability.'
      },
      {
        title: 'Real-time Wireless Telemetry',
        desc: 'Telemetry transmitting voltage, temperature, and RPM telemetry direct to pitlane engineers via high-frequency LoRa.'
      }
    ]
  },

  aruna: {
    id: 'aruna',
    name: 'Aruna Diesel',
    shortName: 'Aruna Diesel',
    category: 'Internal Combustion Diesel Prototype',
    generation: 'Generation 1 (2024 - Present)',
    badge: 'National Podium Contender',
    tagline: 'High-compression, biodiesel prototype maximizing thermal efficiency, fuel precision, and mechanical endurance per drop.',
    heroImage: arunaHeroBg,
    carImage: arunaImage,
    badgeLogo: badgeKMHE,
    badgeLogoAlt: 'KMHE Kontes Mobil Hemat Energi',
    podiumBadge: badgeKmheSvg,
    podiumTitle: '3rd Place National Podium',
    podiumEvent: 'Kontes Mobil Hemat Energi (KMHE) 2026',
    podiumCircuit: 'Sirkuit Jakarta International E-Prix, Ancol',
    accentLight: 'bg-amber-50 text-amber-800 border-amber-200',
    tabActive: 'bg-amber-600 text-white shadow-amber-500/20 shadow-lg',
    icon: Flame,

    highlightStats: [
      { label: 'Highest Record', value: '3', unit: 'rd KMHE National' },
      { label: 'Competitions Entered', value: '2', unit: 'Championships' },
      { label: 'Fuel Standard', value: 'B35', unit: 'Biodiesel' },
      { label: 'Displacement', value: '110', unit: 'cc Engine' }, // TODO: verifikasi
    ],

    trackRecord: {
      bestPodium: '3rd Place National (KMHE 2026)',
      totalRaces: '2 Major Competitions',
      efficiencyRecord: '380+ km/Liter Equivalent', // TODO: verifikasi
      firstDebut: 'KMHE 2025',
      competitionsList: [
        {
          name: 'Kontes Mobil Hemat Energi (KMHE) 2026',
          year: '2026',
          category: 'Prototype Diesel Category',
          result: '3rd Place National Podium',
          circuit: 'Sirkuit Jakarta International E-Prix, Ancol',
          highlight: true,
          medalType: 'podium-bronze',
          positionNumber: '3rd',
          badgeImage: badgeKmheSvg,
          badgeAlt: '3rd Place Kontes Mobil Hemat Energi (KMHE) 2026'
        },
        {
          name: 'Kontes Mobil Hemat Energi (KMHE) 2025',
          year: '2025',
          category: 'Prototype Diesel Category',
          result: '4th Place National (Debut)',
          circuit: 'Sirkuit Karnaval Ancol, Jakarta',
          highlight: false,
          medalType: 'finalist',
          positionNumber: '4th'
        }
      ]
    },

    quickSpecs: [
      { label: 'Top Record', value: '3rd KMHE National' },
      { label: 'Total Races', value: '2 Competitions' },
      { label: 'Chassis Type', value: 'Aluminium Spaceframe' },
      { label: 'Fuel Combustion', value: 'Custom 110cc Diesel' },
    ],

    specs: [
      { label: 'Class Category', value: 'Prototype Internal Combustion (Diesel)' },
      { label: 'Body Construction', value: 'Carbon-Glass Lightweight Composite' },
      { label: 'Engine Architecture', value: 'Direct Injection 110cc 4-Stroke Diesel' },
      { label: 'Chassis Type', value: 'Aircraft Grade Aluminium Spaceframe' },
      { label: 'Fuel Injection', value: 'Custom High-Pressure Direct Micro-Inject' },
      { label: 'ECU Mapping', value: 'Programmable Lean-Burn Engine Management' },
      { label: 'Transmission', value: 'High Efficiency Centrifugal Mod' },
      { label: 'Telemetry Monitoring', value: 'Flow-rate & Exhaust Gas Temp Sensors' },
    ],

    telemetry: [
      { label: 'System Voltage', value: '13.4 V' }, // TODO: verifikasi
      { label: 'Current Draw', value: '1.1 A' }, // TODO: verifikasi
      { label: 'Core Temp', value: '78.5 °C', alert: false }, // TODO: verifikasi
      { label: 'RPM Velocity', value: '3,100 RPM' }, // TODO: verifikasi
      { label: 'Fuel Flow Rate', value: '0.24 mL/s', highlight: true }, // TODO: verifikasi
      { label: 'RF Telemetry Signal', value: '98% OK' } // TODO: verifikasi
    ],

    keyFeatures: [
      {
        title: 'Lean-Burn Thermal Dynamics',
        desc: 'Advanced thermal insulation around cylinder heads to retain peak thermal energy converted into mechanical drive.'
      },
      {
        title: 'High-Pressure Micro Injector',
        desc: 'Micro-droplet spray dispersion calibrated for instantaneous biodiesel atomization and complete combustion.'
      },
      {
        title: 'Ultra-Light Spaceframe Chassis',
        desc: 'Triangulated aeronautical aluminium tubing ensuring high torsional rigidity at minimal tare weight.'
      }
    ]
  },

  bimasena: {
    id: 'bimasena',
    name: 'Bimasena EV',
    shortName: 'Bimasena EV',
    category: 'Historic Pioneer Electric Prototype',
    generation: 'Generation 1 (2018 - 2021 Legacy)',
    badge: 'Foundational Legacy Prototype',
    tagline: 'The foundational electric prototype that initiated KHAD Team’s national podium legacy at KMLI & KMHE.',
    heroImage: bimasenaHeroBg,
    carImage: bimasenaImage,
    badgeLogo: badgeKMHE,
    badgeLogoAlt: 'KMHE & KMLI',
    podiumBadge: null,
    accentLight: 'bg-sky-50 text-sky-800 border-sky-200',
    tabActive: 'bg-sky-600 text-white shadow-sky-500/20 shadow-lg',
    icon: Trophy,

    highlightStats: [
      { label: 'Highest Record', value: '3', unit: 'rd Place KMLI' },
      { label: 'Competitions Entered', value: '3', unit: 'National Events' },
      { label: 'Generation', value: 'Gen 1', unit: 'Pioneer Base' },
      { label: 'Architecture', value: 'Tubular', unit: 'Spaceframe' },
    ],

    trackRecord: {
      bestPodium: '3rd Place Gradeability (KMLI 2019)',
      totalRaces: '3 National Competitions',
      efficiencyRecord: 'First Validated EV Baseline', // TODO: verifikasi
      firstDebut: 'KMLI 2019',
      competitionsList: [
        {
          name: 'Kontes Mobil Listrik Indonesia (KMLI) 2019',
          year: '2019',
          category: 'Gradeability Category',
          result: '3rd Place National Podium',
          circuit: 'Politeknik Negeri Bandung',
          highlight: true,
          medalType: 'podium-bronze',
          positionNumber: '3rd',
          badgeImage: null
        },
        {
          name: 'Kontes Mobil Hemat Energi (KMHE) 2019',
          year: '2019',
          category: 'EV Prototype Category',
          result: 'National Technical Passer',
          circuit: 'Universitas Negeri Malang',
          highlight: false,
          medalType: 'participant',
          positionNumber: 'Passed'
        },
        {
          name: 'Kontes Mobil Hemat Energi (KMHE) 2020',
          year: '2020',
          category: 'Virtual Design Category',
          result: 'Top 8 National Finalist',
          circuit: 'Puspresnas Online Benchmarking',
          highlight: false,
          medalType: 'finalist',
          positionNumber: 'Top 8'
        }
      ]
    },

    quickSpecs: [
      { label: 'Top Record', value: '3rd KMLI National' },
      { label: 'Total Races', value: '3 Competitions' },
      { label: 'Chassis Type', value: 'Tubular Spaceframe' },
      { label: 'Motor Powertrain', value: 'Synchronous Motor' },
    ],

    specs: [
      { label: 'Class Category', value: 'Prototype EV (Legacy Generation)' },
      { label: 'Body Material', value: 'Aerodynamic Hand-Laid Fiberglass' },
      { label: 'Powertrain System', value: 'DC Synchronous Electric Motor' },
      { label: 'Chassis Structure', value: 'Lightweight Chromoly Tubular Truss' },
      { label: 'Battery System', value: 'High-Discharge Lithium Iron Phosphate' },
      { label: 'Braking Setup', value: 'Hydraulic Multi-Disc System' },
      { label: 'Drive Transfer', value: 'Precision Low-Friction Chain Drive' },
      { label: 'Milestone Achievement', value: 'National Gradeability Category Champion' },
    ],

    telemetry: [
      { label: 'System Voltage', value: '48.2 V' }, // TODO: verifikasi
      { label: 'Current Draw', value: '2.8 A' }, // TODO: verifikasi
      { label: 'Core Temp', value: '38.0 °C', alert: false }, // TODO: verifikasi
      { label: 'RPM Velocity', value: '1,450 RPM' }, // TODO: verifikasi
      { label: 'Energy Consumption', value: '2.1 Wh/km', highlight: true }, // TODO: verifikasi
      { label: 'RF Telemetry Signal', value: '100% OK' } // TODO: verifikasi
    ],

    keyFeatures: [
      {
        title: 'Pioneering Structural Dynamics',
        desc: 'Rigid chromoly structure engineered for maximum stability and steep gradeability tests.'
      },
      {
        title: 'Foundational EV Drivetrain',
        desc: 'First electric powertrain that laid the baseline data for subsequent Lingsar generations.'
      },
      {
        title: 'Historic National Podium',
        desc: 'Brought UMY into national energy-efficient racing recognition on its competitive debut.'
      }
    ]
  }
};
