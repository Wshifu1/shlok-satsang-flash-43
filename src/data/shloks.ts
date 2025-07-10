
export interface Shlok {
  id: number;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  context?: string;
}

export const satsangDikshaShloks: Shlok[] = [
  {
    id: 1,
    sanskrit: "स्वामिनारायणः साक्षात् अक्षरपुरुषोत्तमः। सर्वेभ्यः परमान् शान्तिमानन्दं सुखमर्पयेत्॥",
    transliteration: "Swāminārāyaṇaḥ sākṣāt Akṣara-Puruṣottamaḥ; Sarvebhyaḥ paramām śāntim ānandam sukham arpayet.",
    meaning: "May Swaminarayan Bhagwan, who is Akshar-Purushottam Maharaj himself, bestow ultimate peace, bliss and happiness on all.",
    context: "This verse introduces the divinity of Swaminarayan Bhagwan and sets the devotional tone for the text."
  },
  {
    id: 2,
    sanskrit: "देहोऽयं साधनं मुक्तेर् न भोगमात्रसाधनम्। दुर्लभो नश्वरश्चायं वारंवारं न लभ्यते॥",
    transliteration: "Deho'yam sādhanam mukter na bhoga-mātra-sādhanam; Durlabho nashvarash-chā'yam vāram-vāram na labhyate.",
    meaning: "This body is a means for moksha, not merely a means for indulgence. Rare and perishable, this body is not repeatedly attained.",
    context: "Stresses the purpose of the human body for spiritual liberation rather than sensory pleasures."
  },
  {
    id: 3,
    sanskrit: "लौकिको व्यवहारस्तु देहनिर्वाहहेतुकः। नैव स परमो लक्ष्म्यः अस्य मनुष्यजन्मनः॥",
    transliteration: "Laukiko vyavahāras-tu deha-nirvāha-hetukaha; Naiva sa paramam lakṣyam asya manuṣya-janmanaha.",
    meaning: "Worldly activities are meant for bodily sustenance. They are not the ultimate purpose of human life.",
    context: "Clarifies that spiritual pursuit, not material living, is the supreme aim of life."
  },
  {
    id: 4,
    sanskrit: "नाशाय सर्वदोषाणां ब्रह्मस्थितिरेव च। कर्तुं भगवतो भक्तिं अस्य देहस्य लम्भनम्॥",
    transliteration: "Nāśāya sarva-doṣāṇām brahma-sthitir eva ca; Kartuṁ bhagavato bhaktiṁ asya dehasya lambhanam.",
    meaning: "This body is attained to destroy all faults, attain the brahmic state, and perform devotion to God.",
    context: "Defines the spiritual purpose of human embodiment."
  },
  {
    id: 5,
    sanskrit: "सर्वमिदं हि सत्सङ्गाल्लभ्यते निःश्चितं जनैः। अतः सदैव सत्सङ्गः करणीयो मुमुक्षुभिः॥",
    transliteration: "Sarvam idaṁ hi satsangāl-labhyate niḥścitaṁ janaiḥ; Ataḥ sadaiva satsangaḥ karaṇīyo mumukṣubhiḥ.",
    meaning: "All this is certainly attained through satsang. Therefore, those desiring liberation should always engage in satsang.",
    context: "Emphasizes satsang as the path to attain spiritual goals."
  },
  {
    id: 6,
    sanskrit: "सत्सङ्गः स्थापितस्तस्माद् दिव्योऽयं परब्रह्मणा। स्वामिनारायणेनेह साक्षादेवावतार्य च॥",
    transliteration: "Satsaṅgaḥ sthāpitastasmād divyo'yaṁ Parabrahmaṇā; Swāminārāyaṇeneha sākṣād evāvatīrya ca.",
    meaning: "This divine satsang was therefore established by Parabrahman Swaminarayan himself through his direct incarnation.",
    context: "Describes the divine origin of the satsang tradition."
  },
  {
    id: 7,
    sanskrit: "सत्सङ्गस्यास्य विज्ञानं मुमुक्षूणां भवेदिति। शास्त्रं सत्सङ्गदीक्षेति शुभाशयाद् विरच्यते॥",
    transliteration: "Satsangasyāsya vijñānaṁ mumukṣūṇāṁ bhaved iti; Śāstraṁ Satsaṅga-Dīkṣeti śubhāśayād viracyate.",
    meaning: "This scripture, called 'Satsang Diksha', has been composed with the noble intention that seekers of liberation may gain knowledge of this satsang.",
    context: "States the purpose behind the composition of the Satsang Diksha shastra."
  },
  {
    id: 8,
    sanskrit: "सत्यस्य स्वात्मनः सङ्गः सत्यस्य परमात्मनः। सत्यस्य च गुरोः सङ्गः सच्छास्त्राणां तथैव च॥",
    transliteration: "Satyasya svātmanaḥ saṅgaḥ satyasya Paramātmanaḥ; Satyasya ca guroḥ saṅgaḥ sac-chāstrāṇāṁ tathaiva ca.",
    meaning: "True satsang is association with the ātma, Paramātma, true guru, and true scriptures.",
    context: "Defines the four pillars of genuine satsang."
  },
  {
    id: 9,
    sanskrit: "विज्ञातव्यं इदं सत्यं सत्सङ्गस्य हि लक्षणम्। कुर्वन्नेवं विधं दिव्यं सत्सङ्गं स्यात् सुखी जनः॥",
    transliteration: "Vijñātavyaṁ idaṁ satyaṁ satsangasya hi lakṣaṇam; Kurvannevaṁ vidhaṁ divyaṁ satsangaṁ syāt sukhī janaḥ.",
    meaning: "This should be known as the true characteristic of satsang. One who practices this divine satsang becomes truly happy.",
    context: "Affirms that living true satsang leads to joy."
  },
  {
    id: 10,
    sanskrit: "दीक्षेति दृढसङ्कल्पः सश्रद्धं निश्चयोऽचलः। सम्यक् समर्पणं प्रीत्या निष्ठा व्रतम् दृढाश्रयः॥",
    transliteration: "Dīkṣeti dṛḍhasaṅkalpaḥ saśraddhaṁ niścayo'calaḥ; Samyak samarpaṇaṁ prītyā niṣṭhā vratam dṛḍhāśrayaḥ.",
    meaning: "'Diksha' means firm resolve, unwavering faith, wholehearted surrender, loving dedication, strict observance, and steadfast refuge.",
    context: "Explains the deeper spiritual meaning of 'diksha'."
  }
];
