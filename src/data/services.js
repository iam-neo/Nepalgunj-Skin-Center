
export const services = [
    {
        id: 'hair-transplant', // Changed ID to be first as it's a flagship service
        icon: '👨‍🦲',
        title: 'Hair Transplant (FUE)',
        description: 'Restore your natural hairline with our advanced Follicular Unit Extraction (FUE) technique. Minimal scarring, maximum density.',
        longDescription: 'Hair loss can significantly impact self-esteem. At Nepalgunj Skin Center, we specialize in the advanced Follicular Unit Extraction (FUE) method, a minimally invasive procedure where individual hair follicles are extracted from the donor area and implanted into the thinning or balding areas. This technique ensures natural-looking results, no linear scarring, and a faster recovery compared to traditional methods.',
        image: '/images/patient/1.jpg', // Placeholder, using existing image
        benefits: [
            'Natural-looking hairline design',
            'No linear scar (unlike FUT)',
            'Minimal downtime (back to work in 3-5 days)',
            'Permanent results',
            'Safe and performed by specialized surgeons'
        ],
        procedure: [
            { title: 'Consultation', desc: 'Scalp analysis and hairline design.' },
            { title: 'Extraction', desc: 'Individual follicles are harvested under local anesthesia.' },
            { title: 'Implantation', desc: 'Follicles are precisely improved into the recipient area.' },
            { title: 'Recovery', desc: 'Instructions for post-op care; follow-up in 10 days.' }
        ],
        duration: '6 - 8 Hours',
        pricing: 'Starting from NPR 50 per graft',
        faq: [
            { q: 'Is the procedure painful?', a: 'We use local anesthesia, so you will feel minimal to no pain during the surgery.' },
            { q: 'When will I see results?', a: 'New hair growth typically begins after 3-4 months, with full results visible in 8-12 months.' }
        ]
    },
    {
        id: 'acne-treatment',
        icon: '🧴',
        title: 'Acne & Scar Treatment',
        description: 'Comprehensive solutions for active acne and post-acne scarring using peels, lasers, and medical management.',
        longDescription: 'Acne is a common skin condition that affects people of all ages. Our comprehensive approach targets the root causes—bacteria, inflammation, and oil production. We offer a combination of medical-grade chemical peels, laser resurfacing (CO2 Fractional), and prescription medications to clear active breakouts and smooth out acne scars.',
        image: '/images/patient/2.jpg',
        benefits: [
            'Reduces active inflammation',
            'Unclogs pores and prevents future breakouts',
            'Smooths skin texture and reduces scar depth',
            'Improves overall skin tone',
            'Customized plans for sensitive skin'
        ],
        procedure: [
            { title: 'Skin Analysis', desc: 'Determining the type and severity of acne.' },
            { title: 'Treatment', desc: 'Chemical peel or Laser session depending on the plan.' },
            { title: 'Post-Care', desc: 'Soothing masks and sun protection guidelines.' }
        ],
        duration: '30 - 60 Minutes',
        pricing: 'Consultation required',
        faq: [
            { q: 'How many sessions do I need?', a: 'It varies, but typically 4-6 sessions are recommended for optimal results.' },
            { q: 'Is there downtime?', a: 'Chemical peels may cause mild peeling for 2-3 days. Laser treatments might have 3-5 days of redness.' }
        ]
    },
    {
        id: 'laser-hair-removal',
        icon: '✨',
        title: 'Laser Hair Removal',
        description: 'Say goodbye to unwanted hair with our pain-free Diode Laser technology. Safe for all skin types.',
        longDescription: 'Experience the freedom of smooth, hair-free skin. Our state-of-the-art Diode Laser technology targets hair follicles at the root, inhibiting future growth. It is safe, effective, and virtually painless compared to waxing or threading. We offer packages for full body, face, underarms, and bikini areas.',
        image: '/images/hosp/hos.jpg',
        benefits: [
            'Permanent hair reduction',
            'No more ingrown hairs',
            'Soft and smooth skin',
            'Cost-effective in the long run',
            'Quick sessions'
        ],
        procedure: [
            { title: 'Preparation', desc: 'Shaving the area 24 hours prior.' },
            { title: 'Laser Session', desc: 'Cooling gel applied, followed by laser pulses.' },
            { title: 'Post-Treatment', desc: 'Soothing lotion and sun protection.' }
        ],
        duration: '15 - 45 Minutes (depending on area)',
        pricing: 'Packages available',
        faq: [
            { q: 'Is it permanent?', a: 'It significantly reduces hair growth. Maintenance sessions may be needed once a year.' },
            { q: 'Does it hurt?', a: 'Most clients describe it as a light rubber band snap, but our cooling system minimizes discomfort.' }
        ]
    },
    {
        id: 'anti-aging',
        icon: '💆‍♀️',
        title: 'Anti-Aging Solutions',
        description: 'Turn back the clock with Botox, Dermal Fillers, and Thread Lifts for a youthful, refreshed look.',
        longDescription: 'Aging is natural, but looking your best is a choice. We offer non-surgical anti-aging treatments including Botox to relax wrinkles, Dermal Fillers to restore lost volume, and Thread Lifts for lifting sagging skin. Our goal is natural-looking rejuvenation that enhances your features without looking "frozen".',
        image: '/images/front/Sapna3.JPG',
        benefits: [
            'Instant reduction of fine lines',
            'Restored facial volume',
            'Lifted and tighter skin',
            'Non-surgical with minimal downtime',
            'Youthful and refreshed appearance'
        ],
        procedure: [
            { title: 'Consultation', desc: 'Facial assessment and goal discussion.' },
            { title: 'Injection', desc: 'Precise delivery of product using fine needles.' },
            { title: 'Result', desc: 'Visible immediately (Fillers) or within days (Botox).' }
        ],
        duration: '30 - 45 Minutes',
        pricing: 'Per unit / syringe',
        faq: [
            { q: 'How long do results last?', a: 'Botox lasts 3-4 months, while Fillers can last 6-12 months.' },
            { q: 'Are there side effects?', a: 'Mild swelling or bruising is possible but resolves quickly.' }
        ]
    },
    {
        id: 'pigmentation',
        icon: '🌟',
        title: 'Pigmentation & Melasma',
        description: 'Restore even skin tone with our specialized treatments for sun spots, melasma, and hyperpigmentation.',
        longDescription: 'Uneven skin tone, sun spots, and melasma can be stubborn. Our targeted treatments use a combination of Q-Switched Lasers and medical-grade lightening peels to break down excess pigment and reveal clearer, brighter skin.',
        image: '/images/patient/verma.jpg',
        benefits: [
            'Even skin tone',
            'Reduced appearance of dark spots',
            'Brighter complexion',
            'Safe for darker skin tones'
        ],
        procedure: [
            { title: 'Analysis', desc: 'Wood Lamp examination to check pigment depth.' },
            { title: 'Treatment', desc: 'Laser or Peel application.' },
            { title: 'Protection', desc: 'Strict sun avoidance and SPF use.' }
        ],
        duration: '30 - 45 Minutes',
        pricing: 'Consultation required',
        faq: [
            { q: 'Can melasma be cured completely?', a: 'It can be managed effectively, but maintenance and sun protection are key.' }
        ]
    },
    {
        id: 'hydrafacial',
        icon: '💧',
        title: 'HydraFacial',
        description: 'The ultimate 3-step facial to cleanse, extract, and hydrate. specific serums for glowing skin.',
        longDescription: 'HydraFacial is a non-invasive treatment that provides instant results for all skin types with no downtime. It removes dead skin cells and extracts impurities while simultaneously bathing the new skin with cleansing, hydrating and moisturizing serums.',
        image: '/images/customer/1.jpg', // Placeholder
        benefits: [
            'Instant glow',
            'Deep cleaning of pores',
            'Hydrated and plump skin',
            'Improves texture and tone',
            'Perfect before events'
        ],
        procedure: [
            { title: 'Cleanse + Peel', desc: 'Uncover a new layer of skin with gentle exfoliation.' },
            { title: 'Extract + Hydrate', desc: 'Remove debris from pores with painless suction.' },
            { title: 'Fuse + Protect', desc: 'Saturate the skin’s surface with antioxidants and peptides.' }
        ],
        duration: '45 Minutes',
        pricing: 'NPR 3,500 - 5,000',
        faq: [
            { q: 'Is it suitable for sensitive skin?', a: 'Yes, it is gentle and customizable for all skin types.' }
        ]
    },
    {
        id: 'mole-removal',
        icon: '🔍',
        title: 'Mole & Wart Removal',
        description: 'Quick and safe removal of unwanted skin growths using Radiofrequency (RF) technology.',
        longDescription: 'We use advanced Radiofrequency (RF) cautery for the precise removal of moles, warts, skin tags, and milia. This method causes minimal damage to surrounding tissue, ensuring faster healing and minimal scarring.',
        image: '/images/patient/3.jpg',
        benefits: [
            'Quick procedure',
            'Minimal to no bleeding',
            'Fast healing',
            'Minimal scarring',
            'Send for biopsy if needed'
        ],
        procedure: [
            { title: 'Numbing', desc: 'Local anesthetic cream or injection.' },
            { title: 'Removal', desc: 'Precise ablation using RF probe.' },
            { title: 'Dressing', desc: 'Antibiotic ointment and small bandage.' }
        ],
        duration: '15 - 30 Minutes',
        pricing: 'Based on size and number',
        faq: [
            { q: 'Will it grow back?', a: 'Once removed properly, it typically does not grow back.' }
        ]
    },
    {
        id: 'weight-management',
        icon: '⚖️',
        title: 'Slimming & Body Contouring',
        description: 'Non-surgical fat reduction and body shaping solutions to help you achieve your ideal figure.',
        longDescription: 'Struggling with stubborn fat pockets? Our non-invasive body contouring treatments help reduce fat and contour the body without surgery. We evaluate your body type and lifestyle to create a personalized plan.',
        image: '/images/front/Doc.jpg',
        benefits: [
            'Non-surgical',
            'No downtime',
            'Targeted fat reduction',
            'Improved body shape'
        ],
        procedure: [
            { title: 'Consultation', desc: 'Body composition analysis.' },
            { title: 'Session', desc: 'Treatment using specific device (e.g., Cryo/RF).' },
            { title: 'Lifestyle', desc: 'Diet and exercise guidance.' }
        ],
        duration: '45 - 60 Minutes',
        pricing: 'Consultation required',
        faq: [
            { q: 'How much weight will I lose?', a: 'These treatments are for inch loss and contouring, not massive weight loss.' }
        ]
    }
];

export const concerns = [
    { icon: '🧴', title: 'Acne & Scars', link: '/services/acne-treatment' },
    { icon: '👨‍🦲', title: 'Hair Loss', link: '/services/hair-transplant' },
    { icon: '🦵', title: 'Unwanted Hair', link: '/services/laser-hair-removal' },
    { icon: '👵', title: 'Aging Signs', link: '/services/anti-aging' },
    { icon: '🌑', title: 'Dark Spots', link: '/services/pigmentation' },
    { icon: '🔍', title: 'Moles/Warts', link: '/services/mole-removal' },
    { icon: '✨', title: 'Dull Skin', link: '/services/hydrafacial' },
    { icon: '⚖️', title: 'Weight Issues', link: '/services/weight-management' }
];
