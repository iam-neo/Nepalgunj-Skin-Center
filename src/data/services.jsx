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
    GiNeedleDrill
} from 'react-icons/gi';
import { RiTimeLine } from 'react-icons/ri';
import { TbActivityHeartbeat } from 'react-icons/tb';

export const services = [
    {
        id: 'hair-transplant',
        icon: <FaHeadSideVirus />,
        title: 'Hair Transplant',
        description: 'Restore your natural hairline with our advanced Follicular Unit Extraction (FUE) technique.',
        longDescription: 'Our Hair Transplant service utilizes the latest FUE technology to extract individual hair follicles and implant them into thinning areas. This results in natural-looking density with minimal scarring and downtime.',
        image: '/images/services/HT.jpg',
        benefits: ['Permanent results', 'Natural hairline', 'Minimal downtime', 'No linear scarring'],
        procedure: [
            { title: 'Consultation', desc: 'Scalp analysis and design.' },
            { title: 'Extraction', desc: 'Harvesting follicles under local anesthesia.' },
            { title: 'Implantation', desc: 'Precise placement of grafts.' }
        ],
        duration: '6 - 8 Hours',
        pricing: 'Per Graft Basis'
    },
    {
        id: 'laser-hair-reduction',
        icon: <GiRazor />,
        title: 'Laser Hair Reduction',
        description: 'Pain-free permanent hair reduction using advanced Diode Laser technology.',
        longDescription: 'Say goodbye to shaving and waxing. Our Diode Laser targets hair follicles at the root to inhibit growth, providing smooth, hair-free skin safe for all skin types.',
        image: '/images/services/LHR.jpg',
        benefits: ['Permanent reduction', 'Smooth skin', 'No ingrown hairs', 'Safe & effective'],
        procedure: [
            { title: 'Shaving', desc: 'Area is shaved before treatment.' },
            { title: 'Laser', desc: 'Cooling gel and laser application.' },
            { title: 'Post-Care', desc: 'Soothing lotion applied.' }
        ],
        duration: '15 - 45 Mins',
        pricing: 'Per Session / Package'
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
    { icon: <MdFaceRetouchingNatural />, title: 'Acne & Scars', link: '/services/acne-treatment' },
    { icon: <FaHeadSideVirus />, title: 'Hair Loss', link: '/services/hair-transplant' },
    { icon: <GiRazor />, title: 'Unwanted Hair', link: '/services/laser-hair-reduction' },
    { icon: <RiTimeLine />, title: 'Aging Signs', link: '/services/botox-fillers' }, // or anti-aging
    { icon: <MdWbSunny />, title: 'Dark Spots', link: '/services/laser-skin-whitening' },
    { icon: <FaSearch />, title: 'Moles/Warts', link: '/services/mole-wart-removal' },
    { icon: <FaSpa />, title: 'Dull Skin', link: '/services/hydrafacial' },
    { icon: <FaWeight />, title: 'Uneven Tone', link: '/services/laser-skin-resurfacing' }
];
