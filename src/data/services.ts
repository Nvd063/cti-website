import type { Service } from "@/types/service";

// Missing product images temporarily use the existing service image.
// UPS & Solar sub-services await client confirmation.
export const services: Service[] = [
  {
    "id": "01",
    "name": "Fire & Safety",
    "title": "Fire Detection & Fire Safety Equipment Systems",
    "slug": "fire-safety",
    "description": "Integrated fire detection and protection systems for early alerts, rapid response and improved facility safety.",
    "image": "/images/services/fire-detection-safety (1) (1).webp",
    "category": "Fire Protection Solutions",
    "heroTitle": "Fire Alarm & Safety Equipment",
    "heroDescription": "Reliable fire protection systems for buildings, factories, and commercial sites across Rawalpindi, Islamabad, and Pakistan.",
    "overviewTitle": "Complete Fire Protection Solutions",
    "overview": "We supply and install fire protection systems for offices, plazas, factories, warehouses, schools, hospitals, and apartment buildings. Each system is selected for the actual site condition, building use, and local compliance requirement.",
    "seoTitle": "Fire Alarm & Safety Equipment | CTI System & Solutions",
    "seoDescription": "Explore fire alarm, detection, hydrant, sprinkler and fire suppression solutions from CTI System & Solutions in Pakistan.",
    "solutions": [
      {
        "id": "fire-01",
        "slug": "fire-alarm-detection",
        "title": "Fire Alarm & Detection System",
        "image": "/images/services/fire-detection-safety (1) (1).webp"
      },
      {
        "id": "fire-02",
        "slug": "fire-hydrant",
        "title": "Fire Fighting & Fire Hydrant System",
        "image": "/images/services/fire-detection-safety (1) (1).webp"
      },
      {
        "id": "fire-03",
        "slug": "fire-sprinkler",
        "title": "FM/UL Fire Sprinkler System",
        "image": "/images/services/fire-detection-safety (1) (1).webp"
      },
      {
        "id": "fire-04",
        "slug": "fm200-suppression",
        "title": "FM 200 Fire Suppression System",
        "image": "/images/services/fire-safety/solutions/fm200-suppression.webp"
      },
      {
        "id": "fire-05",
        "slug": "kitchen-suppression",
        "title": "Kitchen Suppression System",
        "image": "/images/services/fire-safety/solutions/kitchen-suppression.webp"
      },
      {
        "id": "fire-06",
        "slug": "vehicle-suppression",
        "title": "Vehicle Suppression System",
        "image": "/images/services/fire-safety/solutions/vehicle-suppression.webp"
      },
      {
        "id": "fire-07",
        "slug": "ul-fm-fire-pump",
        "title": "UL/FM Approved Fire Pump",
        "image": "/images/services/fire-detection-safety (1) (1).webp"
      },
      {
        "id": "fire-08",
        "slug": "electric-panel",
        "title": "Fire Pump Electric Panel Manufacture",
        "image": "/images/services/fire-detection-safety (1) (1).webp"
      },
      {
        "id": "fire-09",
        "slug": "non-listed-fire-pump",
        "title": "Non-Listed Fire Pump",
        "image": "/images/services/fire-detection-safety (1) (1).webp"
      }
    ],
    "heroImage": "/images/services/fire-detection-safety (1) (1).webp",
    "featured": true,
    "status": "PUBLISHED",
    "sortOrder": 1
  },
  {
    "id": "02",
    "name": "Emergency Lighting",
    "title": "Central Battery Emergency Lighting & Exit Sign Systems",
    "slug": "emergency-lighting",
    "description": "Reliable emergency lighting and exit sign solutions for safe evacuation during power failures.",
    "image": "/images/services/central-battery-emergency-lighting (1) (1).webp",
    "category": "Emergency Lighting Solutions",
    "heroTitle": "Central Battery Emergency Lighting System",
    "heroDescription": "Emergency lighting systems for offices, malls, hospitals, schools, apartment buildings, warehouses, and industrial sites.",
    "overviewTitle": "Central Battery – Emergency Lighting System",
    "overview": "Power backup for life safety lighting should be part of the original building plan. Emergency lighting keeps stairs, corridors, exit routes and key movement areas visible when the main supply fails. Each setup is selected according to building layout, escape paths, operating hours and backup requirements.",
    "seoTitle": "Central Battery Emergency Lighting System | CTI System & Solutions",
    "seoDescription": "Emergency lighting systems for offices, malls, hospitals, schools, apartment buildings, warehouses, and industrial sites.",
    "solutions": [
      {
        "id": "emergency-lighting-central-battery",
        "slug": "central-battery",
        "title": "Centralised Battery Systems",
        "image": "/images/services/central-battery-emergency-lighting (1) (1).webp"
      },
      {
        "id": "emergency-lighting-emergency-lights",
        "slug": "emergency-lights",
        "title": "Emergency Lights",
        "image": "/images/services/central-battery-emergency-lighting (1) (1).webp"
      },
      {
        "id": "emergency-lighting-fire-rated-doors",
        "slug": "fire-rated-doors",
        "title": "Approved Fire Rated Doors",
        "image": "/images/services/emergency-lighting/solutions/fire-rated-doors.webp"
      },
      {
        "id": "emergency-lighting-fire-resistant-cables",
        "slug": "fire-resistant-cables",
        "title": "UL/LPCB Fire Resistant Cables",
        "image": "/images/services/emergency-lighting/solutions/fire-resistant-cables.webp"
      },
      {
        "id": "emergency-lighting-detector-removal-toolkit",
        "slug": "detector-removal-toolkit",
        "title": "Detector Removal Toolkit",
        "image": "/images/services/emergency-lighting/solutions/detector-removal-toolkit.webp"
      }
    ],
    "heroImage": "/images/services/central-battery-emergency-lighting (1) (1).webp",
    "featured": true,
    "status": "PUBLISHED",
    "sortOrder": 2
  },
  {
    "id": "03",
    "name": "Building Automation",
    "title": "Smart Home & Building Automation Control Systems",
    "slug": "building-automation",
    "description": "Intelligent automation solutions for enhanced comfort, energy efficiency and centralized building control.",
    "image": "/images/services/smart-home-building-automation (1) (1).webp",
    "category": "Building Automation Solutions",
    "heroTitle": "Smart Home & Building Automation Control Systems",
    "heroDescription": "Wireless and KNX-wired automation for convenient control of lighting, climate, security and appliances.",
    "overviewTitle": "Smart Home and Building Automation Solutions",
    "overview": "We supply and install automation systems for residential and commercial projects based on the actual site requirement, control scope, and user preference. Our work covers selected solutions that improve day-to-day control, access management, and overall system handling through practical and properly installed setups.",
    "seoTitle": "Smart Home & Building Automation Control Systems | CTI System & Solutions",
    "seoDescription": "Wireless and KNX-wired automation for convenient control of lighting, climate, security and appliances.",
    "solutions": [
      {
        "id": "building-automation-wireless-home-automation",
        "slug": "wireless-home-automation",
        "title": "Wireless Home Automation System",
        "image": "/images/services/building-automation/solutions/wireless-home-automation.webp"
      },
      {
        "id": "building-automation-knx-wired-automation",
        "slug": "knx-wired-automation",
        "title": "KNX Wired Home Automation System",
        "image": "/images/services/building-automation/solutions/knx-wired-automation.webp"
      },
      {
        "id": "building-automation-ivdp-video-door-phone",
        "slug": "ivdp-video-door-phone",
        "title": "IVDP Internet Video Door Phone",
        "image": "/images/services/building-automation/solutions/ivdp-video-door-phone.webp"
      }
    ],
    "heroImage": "/images/services/smart-home-building-automation (1) (1).webp",
    "featured": true,
    "status": "PUBLISHED",
    "sortOrder": 3
  },
  {
    "id": "04",
    "name": "PA & Sound Systems",
    "title": "PA Sound & Queue Management Systems",
    "slug": "sound-system",
    "description": "Professional audio and queue management solutions for clear communication and efficient visitor flow.",
    "image": "/images/services/pa-sound-queue-management (1) (1).webp",
    "category": "Audio & Communication Solutions",
    "heroTitle": "PA & Sound System / Queue Management System",
    "heroDescription": "Sound systems for announcements, staff paging, routine communication and emergency instructions.",
    "overviewTitle": "Complete PA & Voice Evacuation Sound System Solutions",
    "overview": "Clear voice communication is a basic requirement in many commercial and public buildings across Pakistan. Offices, schools, hospitals, malls, factories, and public facilities often need properly planned sound systems for announcements, staff paging, routine communication, and emergency instructions. PA and voice evacuation systems should be considered during project planning with proper zoning, speaker coverage, and control logic.",
    "seoTitle": "PA & Sound System / Queue Management System | CTI System & Solutions",
    "seoDescription": "Sound systems for announcements, staff paging, routine communication and emergency instructions.",
    "solutions": [
      {
        "id": "sound-system-analog-pa",
        "slug": "analog-pa",
        "title": "Analog PA & Sound System",
        "image": "/images/services/sound-system/solutions/analog-pa.webp"
      },
      {
        "id": "sound-system-ip-network-pa",
        "slug": "ip-network-pa",
        "title": "IP Network Based PA & Sound System",
        "image": "/images/services/sound-system/solutions/ip-network-pa.webp"
      },
      {
        "id": "sound-system-voice-evacuation",
        "slug": "voice-evacuation",
        "title": "Voice Evacuation System",
        "image": "/images/services/sound-system/solutions/voice-evacuation.webp"
      }
    ],
    "heroImage": "/images/services/pa-sound-queue-management (1) (1).webp",
    "featured": true,
    "status": "PUBLISHED",
    "sortOrder": 4
  },
  {
    "id": "05",
    "name": "Access Control",
    "title": "Door Access with Parking Barrier System",
    "slug": "access-control",
    "description": "Integrated access control and parking barrier systems for secure entry, exit and vehicle management.",
    "image": "/images/services/door-access-parking-barrier (1) (1).webp",
    "category": "Access Control Solutions",
    "heroTitle": "Time Attendance with Door Access & Parking Barrier System",
    "heroDescription": "Integrated systems to control entry, record staff movement, manage visitors and organize vehicle access.",
    "overviewTitle": "Complete Time Attendance, Door Access & Parking Barrier Solutions",
    "overview": "Access control should be planned as part of the building setup. In offices, factories, schools, hospitals, commercial buildings, and managed sites, time attendance and access systems are used to control entry, record staff movement, manage visitors, and organize vehicle access. The right setup depends on user volume, entry points, reporting needs, security level, and site layout.",
    "seoTitle": "Time Attendance with Door Access & Parking Barrier System | CTI System & Solutions",
    "seoDescription": "Integrated systems to control entry, record staff movement, manage visitors and organize vehicle access.",
    "solutions": [
      {
        "id": "access-control-biometric-attendance",
        "slug": "biometric-attendance",
        "title": "Biometric Time Attendance System",
        "image": "/images/services/access-control/solutions/biometric-attendance.webp"
      },
      {
        "id": "access-control-face-recognition",
        "slug": "face-recognition",
        "title": "Face Recognition Attendance System",
        "image": "/images/services/access-control/solutions/face-recognition.webp"
      },
      {
        "id": "access-control-rfid-door-access",
        "slug": "rfid-door-access",
        "title": "RFID Door Access Control System",
        "image": "/images/services/access-control/solutions/rfid-door-access.webp"
      },
      {
        "id": "access-control-parking-barrier",
        "slug": "parking-barrier",
        "title": "Parking Barrier System",
        "image": "/images/services/door-access-parking-barrier (1) (1).webp"
      },
      {
        "id": "access-control-smart-door-locks",
        "slug": "smart-door-locks",
        "title": "Smart Automatic Door Locks",
        "image": "/images/services/door-access-parking-barrier (1) (1).webp"
      }
    ],
    "heroImage": "/images/services/door-access-parking-barrier (1) (1).webp",
    "featured": true,
    "status": "PUBLISHED",
    "sortOrder": 5
  },
  {
    "id": "06",
    "name": "CCTV & Surveillance",
    "title": "CCTV & Security Surveillance Equipment",
    "slug": "cctv-security",
    "description": "Professional surveillance solutions for effective monitoring, recording and facility security.",
    "image": "/images/services/cctv-security (1) (1).webp",
    "category": "Security & Surveillance Solutions",
    "heroTitle": "CCTV & Security Surveillance Equipment",
    "heroDescription": "CCTV, screening, and vehicle inspection systems for site monitoring, controlled entry, and stronger security coverage across critical areas.",
    "overviewTitle": "Complete CCTV Surveillance & Security Monitoring Solutions",
    "overview": "Security systems work best when they are planned around actual site movement, access points, screening needs, and risk areas. In residential, commercial, industrial, and public-use buildings, surveillance and security monitoring systems are used to watch activity, screen visitors, check vehicles, and support day-to-day security control. The right setup depends on camera coverage, entry volume, inspection level, recording requirement, and the type of site being protected.",
    "seoTitle": "CCTV & Security Surveillance Equipment | CTI System & Solutions",
    "seoDescription": "CCTV, screening, and vehicle inspection systems for site monitoring, controlled entry, and stronger security coverage across critical areas.",
    "solutions": [
      {
        "id": "cctv-security-cctv-cameras",
        "slug": "cctv-cameras",
        "title": "CCTV Surveillance Cameras System",
        "image": "/images/services/cctv-security (1) (1).webp"
      },
      {
        "id": "cctv-security-xray-baggage",
        "slug": "xray-baggage",
        "title": "Xray Baggage Scanner Machine",
        "image": "/images/services/cctv-security (1) (1).webp"
      },
      {
        "id": "cctv-security-walk-through-gate",
        "slug": "walk-through-gate",
        "title": "Walk Through Gate System",
        "image": "/images/services/cctv-security (1) (1).webp"
      },
      {
        "id": "cctv-security-hand-held-metal-detector",
        "slug": "hand-held-metal-detector",
        "title": "Hand Held Metal Detector",
        "image": "/images/services/cctv-security/solutions/hand-held-metal-detector.webp"
      },
      {
        "id": "cctv-security-hesco-barrier",
        "slug": "hesco-barrier",
        "title": "Approved Hesco Barrier",
        "image": "/images/services/cctv-security/solutions/hesco-barrier.webp"
      },
      {
        "id": "cctv-security-under-vehicle-inspection",
        "slug": "under-vehicle-inspection",
        "title": "Under Vehicle Inspection System",
        "image": "/images/services/cctv-security/solutions/under-vehicle-inspection.webp"
      }
    ],
    "heroImage": "/images/services/cctv-security (1) (1).webp",
    "featured": true,
    "status": "PUBLISHED",
    "sortOrder": 6
  },
  {
    "id": "07",
    "name": "Guest Room Management",
    "title": "Guest Room Management System Solutions",
    "slug": "guest-room",
    "description": "Intelligent hospitality technology for guest comfort, room automation and energy management.",
    "image": "/images/services/guest-room-management (1) (1).webp",
    "category": "Hospitality Solutions",
    "heroTitle": "Guest Room Management System Solutions",
    "heroDescription": "Room automation and centralized monitoring for hospitality projects.",
    "overviewTitle": "Complete Guest Room Management System Solutions",
    "overview": "We supply and install guest room management systems for hotels, serviced apartments, resorts, and hospitality projects. Each setup is selected according to the room type, control scope, operating style, and integration requirement. Our work covers practical room automation for day-to-day guest use as well as back-end control features that help hotel teams manage room status, comfort settings, and power use more efficiently.",
    "seoTitle": "Guest Room Management System Solutions | CTI System & Solutions",
    "seoDescription": "Room automation and centralized monitoring for hospitality projects.",
    "solutions": [
      {
        "id": "guest-room-grms",
        "slug": "grms",
        "title": "Guest Room Management System (GRMS)",
        "image": "/images/services/guest-room-management (1) (1).webp"
      },
      {
        "id": "guest-room-smart-hotel",
        "slug": "smart-hotel",
        "title": "Smart Hotel System",
        "image": "/images/services/guest-room-management (1) (1).webp"
      }
    ],
    "heroImage": "/images/services/guest-room/hero.webp",
    "featured": true,
    "status": "PUBLISHED",
    "sortOrder": 7
  },
  {
    "id": "08",
    "name": "Nurse Call Systems",
    "title": "Nurse Call Management System Solutions",
    "slug": "nurse-call",
    "description": "Connected healthcare communication systems supporting patient assistance and efficient staff response.",
    "image": "/images/services/nurse-call-management (1) (1).webp",
    "category": "Healthcare Communication Solutions",
    "heroTitle": "Nurse Call Management System Solutions",
    "heroDescription": "Patient-to-staff communication for hospitals, clinics, nursing stations and care facilities.",
    "overviewTitle": "Complete Nurse Call Management System Solutions",
    "overview": "Fast patient-to-staff communication is a basic requirement in hospitals, clinics, nursing stations, and care facilities. Nurse call systems are used to let patients call for help, route alerts to the right staff, and support quicker response across wards, rooms, washrooms, and treatment areas. Current nurse call platforms commonly cover fixed room stations, corridor indicators, staff alerting, and, in newer IP setups, mobile notifications and integration with wider care workflows.",
    "seoTitle": "Nurse Call Management System Solutions | CTI System & Solutions",
    "seoDescription": "Patient-to-staff communication for hospitals, clinics, nursing stations and care facilities.",
    "solutions": [
      {
        "id": "nurse-call-ip-based-nurse-call",
        "slug": "ip-based-nurse-call",
        "title": "IP Based Nurse Call System",
        "image": "/images/services/nurse-call/solutions/ip-based-nurse-call.webp"
      },
      {
        "id": "nurse-call-wire-based-nurse-call",
        "slug": "wire-based-nurse-call",
        "title": "Wire Based Nurse Call System",
        "image": "/images/services/nurse-call/solutions/wire-based-nurse-call.webp"
      },
      {
        "id": "nurse-call-wireless-nurse-call",
        "slug": "wireless-nurse-call",
        "title": "Wireless Nurse Call System",
        "image": "/images/services/nurse-call/solutions/wireless-nurse-call.webp"
      }
    ],
    "heroImage": "/images/services/nurse-call/hero.webp",
    "featured": true,
    "status": "PUBLISHED",
    "sortOrder": 8
  },
  {
    "id": "09",
    "name": "Industrial UPS & Solar",
    "title": "Industrial UPS and Professional Solar System",
    "slug": "ups-solar",
    "description": "Reliable industrial backup power and solar energy solutions for modern infrastructure.",
    "image": "/images/services/industrial-ups-solar (1) (1).webp",
    "category": "Power & Energy Solutions",
    "heroTitle": "Industrial UPS and Professional Solar System",
    "heroDescription": "Industrial UPS provides uninterrupted and stable backup power to critical industrial equipment during power failures and voltage fluctuations. Solar systems convert sunlight into electricity.",
    "overviewTitle": "Industrial UPS and Professional Solar System",
    "overview": "Industrial UPS provides uninterrupted and stable backup power to critical industrial equipment during power failures and voltage fluctuations. Solar systems convert sunlight into electricity, reducing energy costs.",
    "seoTitle": "Industrial UPS and Professional Solar System | CTI System & Solutions",
    "seoDescription": "Industrial UPS provides uninterrupted and stable backup power to critical industrial equipment during power failures and voltage fluctuations. Solar systems convert sunlight into electricity.",
    "solutions": [],
    "heroImage": "/images/services/industrial-ups-solar (1) (1).webp",
    "featured": true,
    "status": "PUBLISHED",
    "sortOrder": 9
  }
];
