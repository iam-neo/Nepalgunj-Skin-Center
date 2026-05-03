import {
    FaUserMd,
    FaHeadSideVirus,
    FaDiagnoses,
    FaSpa,
    FaWeight,
    FaSearch,
    FaSyringe,
    FaSnowflake,
    FaFlask,
    FaFemale,
    FaBolt,
    FaHandSparkles,
    FaEraser
} from 'react-icons/fa';
import {
    MdFaceRetouchingNatural,
    MdWbSunny,
    MdOutlineHealing,
    MdBloodtype,
    MdFlashOn,
    MdLayers
} from 'react-icons/md';
import {
    GiRazor,
    GiMedicines,
    GiSewingNeedle,
    GiNeedleDrill,
    GiHairStrands
} from 'react-icons/gi';
import { RiTimeLine } from 'react-icons/ri';
import { TbActivityHeartbeat } from 'react-icons/tb';

export const services = [
    {
        id: 'hair-transplant',
        icon: <GiHairStrands />,
        title: 'Hair Transplant',
        description: 'Natural-looking hair restoration using minimally invasive FUE hair transplant technology.',
        longDescription: 'Our FUE Hair Transplant procedure involves extracting healthy hair follicles from the donor area and implanting them into thinning or bald regions with precision. The technique is minimally invasive, leaves no linear scar, and is designed to achieve natural hair growth patterns with faster recovery compared to traditional methods.',
        image: '/images/services/HT.jpg',
        benefits: [
            'Natural-looking hair growth',
            'Minimally invasive FUE technique',
            'No stitches or linear scar',
            'Long-lasting results',
            'Faster recovery time'
        ],
        procedure: [
            {
                title: 'Consultation',
                desc: 'Hairline planning, scalp assessment, and graft estimation.'
            },
            {
                title: 'Extraction',
                desc: 'Healthy follicles are extracted from the donor area under local anesthesia.'
            },
            {
                title: 'Implantation',
                desc: 'Grafts are carefully implanted to match natural hair direction and density.'
            },
            {
                title: 'Recovery & Aftercare',
                desc: 'Post-procedure instructions are provided for healing and optimal growth.'
            }
        ],
        candidate: 'Suitable for male pattern baldness, receding hairline, and thinning hair.',
        recovery: 'Minimal downtime with recovery over several days',
        resultsTimeline: 'Visible growth typically begins after 3–4 months.',
        faq: [
            {
                q: 'Is the procedure painful?',
                a: 'The procedure is performed under local anesthesia, so discomfort is minimal.'
            },
            {
                q: 'Will the transplanted hair look natural?',
                a: 'Yes, grafts are implanted following natural hair growth direction and density.'
            }
        ],
        duration: '8 - 12+ Hours (depending on graft count)',
        pricing: 'Charged per graft after consultation'
    },
    {
        id: 'laser-hair-reduction',
        icon: <GiRazor />,
        title: 'Laser Hair Reduction',
        description: 'Long-term hair reduction using advanced Diode Laser technology with minimal discomfort.',
        longDescription: 'Our Diode Laser Hair Reduction treatment targets hair follicles at the root to reduce unwanted hair growth over multiple sessions. The procedure is designed to deliver smoother skin, reduce ingrown hairs, and provide long-term results with minimal downtime.',
        image: '/images/services/LHR.jpg',
        benefits: [
            'Long-term hair reduction',
            'Helps reduce ingrown hairs',
            'Smoother skin texture',
            'Quick treatment sessions',
            'Minimal downtime'
        ],
        procedure: [
            {
                title: 'Preparation',
                desc: 'The treatment area is cleaned and shaved before the procedure.'
            },
            {
                title: 'Laser Application',
                desc: 'Diode Laser energy is applied to target hair follicles with cooling support for comfort.'
            },
            {
                title: 'Post-Treatment Care',
                desc: 'Soothing products and aftercare instructions are provided after the session.'
            }
        ],
        sessions: 'Multiple sessions are usually required for optimal results.',
        recovery: 'Minimal downtime with temporary redness possible.',
        suitableFor: [
            'Face',
            'Underarms',
            'Arms',
            'Legs',
            'Bikini area',
            'Back & chest'
        ],
        resultsTimeline: 'Visible reduction is typically noticed after a few sessions.',
        duration: '15 - 45 Minutes',
        pricing: 'Available per session or package'
    },
    {
        id: 'laser-tattoo-removal',
        icon: <FaEraser />,
        title: 'Laser Tattoo Removal',
        description: 'Effective removal of unwanted tattoos using Q-Switched technology.',
        longDescription: 'We use high-powered Q-Switched lasers to break down tattoo ink particles, allowing your body to naturally eliminate them. Works on various ink colors.',
        image: '/images/services/tattoo.png',
        benefits: ['Safe removal', 'Minimal scarring', 'Effective on dark inks', 'Multiple sessions'],
        procedure: [
            { title: 'Numbing', desc: 'Topical anesthetic applied.' },
            { title: 'Laser', desc: 'Laser pulses break down ink.' },
            { title: 'Healing', desc: 'Antibiotic ointment application.' }
        ],
        duration: '20 - 40 Mins',
        pricing: 'Based on Size'
    },
    {
        id: 'laser-skin-whitening',
        icon: <MdWbSunny />,
        title: 'Laser Skin Whitening',
        description: 'Brighten your complexion and reduce pigmentation with laser therapy.',
        longDescription: 'This treatment targets melanin deposits to reduce dark spots, tanning, and uneven skin tone, revealing a brighter and more radiant complexion.',
        image: '/images/services/LSW.jpg',
        benefits: ['Even skin tone', 'Reduced pigmentation', 'Glow & radiance', 'Non-invasive'],
        procedure: [
            { title: 'Cleansing', desc: 'Skin is prepped.' },
            { title: 'Laser', desc: 'Targeting melanin deposits.' },
            { title: 'Protection', desc: 'Sunscreen application.' }
        ],
        duration: '30 Mins',
        pricing: 'Consultation Required'
    },
    {
        id: 'laser-wrinkle-reduction',
        icon: <RiTimeLine />,
        title: 'Laser Wrinkle Reduction',
        description: 'Smooth out fine lines and wrinkles for a youthful appearance.',
        longDescription: 'Stimulate collagen production deep within the skin to smooth out fine lines and wrinkles without surgery or injections.',
        image: '/images/services/LSR.jpg',
        benefits: ['Collagen boost', 'Smoother texture', 'Youthful look', 'No needles'],
        duration: '45 Mins',
        pricing: 'Per Session'
    },
    {
        id: 'laser-scar-reduction',
        icon: <MdOutlineHealing />,
        title: 'Laser Scar Reduction',
        description: 'Minimize the appearance of acne scars, surgical scars, and stretch marks.',
        longDescription: 'Fractional lasers create micro-injuries to trigger natural healing and collagen remodeling, significantly improving scar texture and appearance.',
        image: '/images/services/scar.jpg',
        benefits: ['Smoother skin', 'Reduced scar depth', 'Better texture', 'Minimal downtime'],
        duration: '30 - 60 Mins',
        pricing: 'Consultation Required'
    },
    {
        id: 'laser-skin-resurfacing',
        icon: <MdLayers />,
        title: 'Laser Skin Resurfacing',
        description: 'Rejuvenate your skin by removing damaged outer layers.',
        longDescription: 'A comprehensive treatment for sun damage, age spots, and uneven texture. It removes the outer layer of skin to reveal fresh, healthy skin underneath.',
        image: '/images/services/resurf.jpg',
        benefits: ['Deep rejuvenation', 'Removes sun damage', 'Tighter skin', 'Fresh glow'],
        duration: '60 Mins',
        pricing: 'Consultation Required'
    },
    {
        id: 'prp-gfc-treatment',
        icon: <MdBloodtype />,
        title: 'PRP / GFC Hair Treatment',
        description: 'Boost hair growth using your body’s own growth factors.',
        longDescription: 'Platelet-Rich Plasma (PRP) and Growth Factor Concentrate (GFC) therapies use your own blood to stimulate hair follicles, reduce hair fall, and promote thicker growth.',
        image: '/images/services/GFC.jpg',
        benefits: ['Natural growth', 'Reduces hair fall', 'Thicker hair', 'Safe & autologous'],
        procedure: [
            { title: 'Blood Draw', desc: 'Small amount of blood taken.' },
            { title: 'Separation', desc: 'Centrifuged to isolate plasma/growth factors.' },
            { title: 'Injection', desc: 'Injected into scalp.' }
        ],
        duration: '45 Mins',
        pricing: 'Per Session'
    },
    {
        id: 'vampire-facial',
        icon: <MdFaceRetouchingNatural />,
        title: 'Vampire Facial',
        description: 'Rejuvenate your face with microneedling and PRP.',
        longDescription: 'Combines microneedling with PRP to boost collagen, improve texture, and give your skin a youthful glow. Famous for its anti-aging benefits.',
        image: '/images/services/vampire.jpeg',
        benefits: ['Collagen boost', 'Tightening', 'Glow', 'Anti-aging'],
        duration: '60 Mins',
        pricing: 'Per Session'
    },
    {
        id: 'hydrafacial',
        icon: <FaSpa />,
        title: 'HydraFacial',
        description: 'Deep cleanse, extract, and hydrate for instant glow.',
        longDescription: 'The ultimate 3-step facial that cleanses, exfoliates, and infuses skin with intensive serums. Perfect for an instant glow before events.',
        image: '/images/services/hydra.jpg',
        benefits: ['Instant glow', 'Deep cleaning', 'Hydration', 'No downtime'],
        duration: '45 Mins',
        pricing: 'NPR 3,000 - 5,000'
    },
    {
        id: 'botox-fillers',
        icon: <FaSyringe />,
        title: 'Botox & Fillers',
        description: 'Non-surgical anti-aging solutions for wrinkles and volume loss.',
        longDescription: 'Botox relaxes wrinkle-causing muscles, while Fillers restore lost volume to lips, cheeks, and lines. Achieve a refreshed look instantly.',
        image: '/images/services/botox.webp',
        benefits: ['Instant results', 'Non-surgical', 'Youthful look', 'Customizable'],
        duration: '30 Mins',
        pricing: 'NPR 500 Per Unit / Syringe'
    },
    {
        id: 'pdo-monothread',
        icon: <GiSewingNeedle />,
        title: 'PDO Monothread',
        description: 'Skin tightening and collagen stimulation using dissolvable threads.',
        longDescription: 'Fine PDO threads are inserted into the skin to create a mesh that supports lifting and stimulates long-term collagen production.',
        image: '/images/services/pdo.jpg',
        benefits: ['Skin tightening', 'Collagen boost', 'Defined contours', 'Long-lasting'],
        duration: '45 - 60 Mins',
        pricing: 'NPR 1000 Per Thread'
    },
    {
        id: 'electro-surgery',
        icon: <MdFlashOn />,
        title: 'Electro Surgery',
        description: 'Precise removal of skin growths using electrical energy.',
        longDescription: 'Used for removing skin tags, milia, and other benign growths with minimal bleeding and scarring.',
        image: '/images/services/electro.webp',
        benefits: ['Precise', 'Quick', 'Minimal bleeding', 'Safe'],
        duration: '15 - 30 Mins',
        pricing: 'Based on lesion count'
    },
    {
        id: 'mole-wart-removal',
        icon: <FaSearch />,
        title: 'Mole/Wart Removal',
        description: 'Safe and effective removal of moles, warts, and freckles.',
        longDescription: 'We use Radiofrequency or Laser ablation to safely remove unwanted moles and warts with excellent cosmetic results.',
        image: '/images/services/mole.jpg',
        benefits: ['Clear skin', 'Minimal scarring', 'Quick procedure', 'Histopathology if needed'],
        duration: '20 Mins',
        pricing: 'Per Lesion'
    },
    {
        id: 'micro-needling',
        icon: <GiNeedleDrill />,
        title: 'Micro-Needling',
        description: 'Collagen induction therapy for scars and texture.',
        longDescription: 'Creates controlled micro-injuries to stimulate the body’s natural healing process, improving acne scars, pores, and texture.',
        image: '/images/services/micro.png',
        benefits: ['Scar reduction', 'Pore refinement', 'Texture improvement', 'Safe'],
        duration: '45 Mins',
        pricing: 'NPR 5,000 Per Session'
    },
    {
        id: 'cryotherapy',
        icon: <FaSnowflake />,
        title: 'Cryotherapy',
        description: 'Freezing treatment for warts and skin lesions.',
        longDescription: 'Uses liquid nitrogen to freeze and destroy warts, tags, and other lesions. Quick and effective.',
        image: '/images/services/cry.webp',
        benefits: ['Quick', 'No cutting', 'Effective for warts', 'Minimal care'],
        duration: '10 Mins',
        pricing: 'Per Session'
    },
    {
        id: 'chemical-peel',
        icon: <FaFlask />,
        title: 'Chemical Peel / Medipeel',
        description: 'Exfoliating treatments for glowing, clear skin.',
        longDescription: 'Medical-grade peels to remove dead skin cells, treat acne, reduce pigmentation, and reveal a fresh layer of skin.',
        image: '/images/services/chemical.jpg',
        benefits: ['Acne control', 'Glow', 'Reduced spots', 'Smoother texture'],
        duration: '30 Mins',
        pricing: 'Based on Peel Type'
    },
    {
        id: 'laser-vaginal-tightening',
        icon: <FaFemale />,
        title: 'Laser Vaginal Tightening',
        description: 'Non-surgical rejuvenation for intimate wellness.',
        longDescription: 'A safe, non-invasive laser treatment to improve vaginal tightness, lubrication, and overall health without surgery.',
        image: '/images/hosp/hos.jpg',
        benefits: ['Non-surgical', 'No downtime', 'Improved wellness', 'Quick'],
        duration: '30 Mins',
        pricing: 'Consultation Required'
    },
    {
        id: 'high-frequency',
        icon: <FaBolt />,
        title: 'High Frequency Treatment',
        description: 'Antibacterial treatment for acne and skin rejuvenation.',
        longDescription: 'Uses high-frequency electrical currents to kill acne-causing bacteria, reduce inflammation, and stimulate circulation.',
        image: '/images/services/HFT.jpg',
        benefits: ['Anti-acne', 'Reduces puffiness', 'Better circulation', 'Healing'],
        duration: '15 Mins',
        pricing: 'Add-on Service'
    },
    {
        id: 'facial-cleansing',
        icon: <FaHandSparkles />,
        title: 'Facial / Cleansing',
        description: 'Deep cleaning and maintenance for healthy skin.',
        longDescription: 'Professional cleanups to remove blackheads, whiteheads, and impurities, keeping your skin healthy and breathable.',
        image: '/images/services/facial.jpg',
        benefits: ['Clean pores', 'Relaxation', 'Maintenance', 'Healthy skin'],
        duration: '45 Mins',
        pricing: 'Standard Rates'
    }
];

// Updated concerns mapping to new service IDs
export const concerns = [
    { icon: <MdFaceRetouchingNatural />, title: 'Acne & Scars', subtitle: '(डन्डीफोर र दाग)', link: '/services/acne-treatment' },
    { icon: <FaHeadSideVirus />, title: 'Hair Loss', subtitle: '(कपाल झर्ने)', link: '/services/hair-transplant' },
    { icon: <GiRazor />, title: 'Unwanted Hair', subtitle: '(नचाहेको रौँ)', link: '/services/laser-hair-reduction' },
    { icon: <RiTimeLine />, title: 'Aging Signs', subtitle: '(चाउरीपना)', link: '/services/botox-fillers' }, // or anti-aging
    { icon: <MdWbSunny />, title: 'Dark Spots', subtitle: '(कालो दाग)', link: '/services/laser-skin-whitening' },
    { icon: <FaSearch />, title: 'Moles/Warts', subtitle: '(कोठी र मुसा)', link: '/services/mole-wart-removal' },
    { icon: <FaSpa />, title: 'Melasma', subtitle: '(चायाँ पोतो)', link: '/services/hydrafacial' },
    { icon: <FaWeight />, title: 'Uneven Tone', subtitle: '(असमान छाला)', link: '/services/laser-skin-resurfacing' }
];
