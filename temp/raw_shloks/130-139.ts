export interface Shlok {
  id: number;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  context?: string;
}

export const satsangDikshaShloks: Shlok[] = [
  // Everything before ID 130 remains unchanged...

  // Rewriting begins from here — Shloks 130 to 139 (Revised)
  {
    id: 130,
    sanskrit: "धर्मेण भक्त्या स्वं कर्म स्वभावं च सदा व्रजेत्।\nस्वामिनारायणे भक्तिं सदा कुर्यात् मुमुक्षुणा॥",
    transliteration: "Dharmeṇa bhaktyā svaṁ karma svabhāvaṁ ca sadā vrajet; Swāminārāyaṇe bhaktiṁ sadā kuryāt mumukṣuṇā.",
    meaning: "A mumukshu should always act according to dharma, with devotion, performing their own duties and inherent nature, and remain devoted to Swaminarayan Bhagwan.",
    context: "Outlines the lifestyle of a seeker committed to righteous action and devotion."
  },
  {
    id: 131,
    sanskrit: "स्वधर्मं स्वकुलाचारं स्वभावं च सदा भजेत्।\nस्वामिनारायणे भक्तिं न हि सन्देहवर्जिताम्॥",
    transliteration: "Sva-dharmaṁ sva-kulācāraṁ svabhāvaṁ ca sadā bhajet; Swāminārāyaṇe bhaktiṁ na hi sandeha-varjitām.",
    meaning: "One should always follow their personal dharma, family traditions, and nature while remaining devoted to Swaminarayan Bhagwan, free of doubt.",
    context: "Urges seekers to integrate tradition with unwavering devotion."
  },
  {
    id: 132,
    sanskrit: "वर्णाश्रमस्थितो भक्तो नित्यं स्वधर्मकर्मकृत्।\nसंसिद्धिं परमां याति स्वामिनारायणाश्रयात्॥",
    transliteration: "Varṇāśrama-sthito bhakto nityaṁ sva-dharma-karma-kṛt; Saṁsiddhiṁ paramāṁ yāti Swāminārāyaṇa-āśrayāt.",
    meaning: "A devotee situated in their varna and ashram, who performs personal duties daily, attains the highest state through surrender to Swaminarayan.",
    context: "Describes spiritual success through traditional order and divine refuge."
  },
  {
    id: 133,
    sanskrit: "धर्मनिष्ठः सदा भक्तः स्वामिनारायणोदयात्।\nभवबन्धविमुक्तः स्यात्सङ्गात् पुण्यफलं लभेत्॥",
    transliteration: "Dharma-niṣṭhaḥ sadā bhaktaḥ Swāminārāyaṇa-udayāt; Bhava-bandha-vimuktaḥ syāt saṅgāt puṇya-phalaṁ labhet.",
    meaning: "A steadfast devotee who follows dharma and accepts Swaminarayan’s grace becomes free from bondage and gains great spiritual merit.",
    context: "Links discipline and grace as paths to liberation."
  },
  {
    id: 134,
    sanskrit: "धर्मं शुद्धं समाचर्य भक्त्या स्वामिनारायणे।\nतत्प्रसादादवाप्नोति मोक्षं च परमं सुखम्॥",
    transliteration: "Dharmaṁ śuddhaṁ samācarya bhaktyā Swāminārāyaṇe; Tat-prasādād avāpnoti mokṣaṁ ca paramaṁ sukham.",
    meaning: "By practicing pure dharma and remaining devoted to Swaminarayan, one attains liberation and supreme bliss through his grace.",
    context: "Describes the reward of grace born from dharmic living."
  },
  {
    id: 135,
    sanskrit: "सच्चित्तशुद्धिसंयुक्तः धर्मनिष्ठोऽप्यकिञ्चनः।\nभक्त्या स्वामिनारायणं सेवेत् स भवबन्धनात्॥",
    transliteration: "Sat-citta-śuddhi-saṁyuktaḥ dharma-niṣṭho’py akiñcanaḥ; Bhaktyā Swāminārāyaṇaṁ sevet sa bhava-bandhanāt.",
    meaning: "Even one with nothing but a pure and sincere mind and devotion to Swaminarayan — while being steadfast in dharma — can become free from bondage.",
    context: "Highlights inner purity and devotion as sufficient for liberation."
  },
  {
    id: 136,
    sanskrit: "धर्मे स्थितं स्वकर्मस्थं स्वामिनारायणं भजेत्।\nतत्प्रसादाच्च मोक्षं च प्राप्नुयाद्भवबन्धनात्॥",
    transliteration: "Dharme sthitaṁ sva-karma-sthaṁ Swāminārāyaṇaṁ bhajet; Tat-prasādāc ca mokṣaṁ ca prāpnuyād bhava-bandhanāt.",
    meaning: "One who remains in their dharma and duties while worshipping Swaminarayan gains liberation through his grace.",
    context: "Unites personal effort with divine dependence."
  },
  {
    id: 137,
    sanskrit: "स्वामिनारायणे भक्तिस्त्रैविध्येनापि नित्यदा।\nशरीरेण मनसा वाचा मोक्षकृद्भवबन्धनात्॥",
    transliteration: "Swāminārāyaṇe bhaktiḥ traividhyenāpi nityadā; Śarīreṇa manasā vācā mokṣa-kṛd bhava-bandhanāt.",
    meaning: "Devotion to Swaminarayan must always be practiced through body, mind, and speech — it leads to liberation from bondage.",
    context: "Emphasizes the totality of one's being in devotion."
  },
  {
    id: 138,
    sanskrit: "त्रैविध्येन भक्तिमांस्तु स्वधर्मे सन्ननन्यधीः।\nप्राप्नोति परमं स्थानं स्वामिनारायणाश्रयात्॥",
    transliteration: "Traividhyena bhaktimāṁs tu sva-dharme sann ananya-dhīḥ; Prāpnoti paramaṁ sthānaṁ Swāminārāyaṇa-āśrayāt.",
    meaning: "One who engages in threefold devotion with single-mindedness and dedication to personal dharma attains the highest state by taking refuge in Swaminarayan.",
    context: "Combines devotion, discipline, and singular focus for moksha."
  },
  {
    id: 139,
    sanskrit: "स्वधर्मनिष्ठया भक्त्या स्वामिनारायणं भजन्।\nत्यक्तसङ्गो विमुक्तः स्यान्नात्र कार्या विचारणा॥",
    transliteration: "Sva-dharma-niṣṭhayā bhaktyā Swāminārāyaṇaṁ bhajan; Tyakta-saṅgo vimuktaḥ syān nātra kāryā vicāraṇā.",
    meaning: "He who worships Swaminarayan with steadfastness in dharma and detachment becomes liberated — of this there is no doubt.",
    context: "Concludes with the assurance of moksha through sincere, detached devotion."
  },
