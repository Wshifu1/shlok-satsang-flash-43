
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
  },
  {
    id: 21,
    sanskrit: "नित्यं नियमनं कुर्याद् गम्यागमनवर्जनम्।\nद्रव्यशौचं मनःशौचं सभाशौचं विशेषतः॥",
    transliteration: "Nityaṁ niyamanaṁ kuryād gamyāgamana-varjanam; Dravya-śaucaṁ manaḥ-śaucaṁ sabhā-śaucaṁ viśeṣataḥ.",
    meaning: "One should always practice self-restraint, avoid improper contact, and maintain purity of body, mind, and especially during assemblies.",
    context: "Outlines the foundational disciplines for purity in a seeker's life."
  },
  {
    id: 22,
    sanskrit: "धर्मप्रवृत्तये देयं दीक्षा शास्त्रविधानतः।\nशास्त्रं हि धर्मनिरतं ब्रह्मनिष्ठं च शोभनम्॥",
    transliteration: "Dharma-pravṛttaye deyaṁ dīkṣā śāstra-vidhānataḥ; Śāstraṁ hi dharma-nirataṁ brahma-niṣṭhaṁ ca śobhanam.",
    meaning: "Diksha should be given to instil dharma, according to scriptural tradition. For the scriptures themselves are devoted to dharma and rooted in brahmic wisdom.",
    context: "Emphasizes scripture-based diksha to uphold dharma."
  },
  {
    id: 24,
    sanskrit: "स्वधर्मेणैव जीवेत धर्मार्थं शीलपूर्वकम्।\nस्वधर्मनिष्ठया युक्तः स्यादेव परमं सुखम्॥",
    transliteration: "Svadharmeṇaiva jīvet dharmārthaṁ śīla-pūrvakam; Svadharma-niṣṭhayā yuktaḥ syād eva paramaṁ sukham.",
    meaning: "One should live by one's own dharma virtuously. Abiding in it brings true happiness.",
    context: "Upholding one's personal dharma is key to spiritual joy."
  },
  {
    id: 25,
    sanskrit: "अहं ब्रह्मास्मि सत्यम् इत्यवधार्य स्थिरं मतिम्।\nस्वात्मानं सततं पश्येद् ब्रह्मभावेन चेतसा॥",
    transliteration: "Ahaṁ brahmāsmi satyam ity-ava-dhārya sthiraṁ matim; Svātmānaṁ satataṁ paśyed brahma-bhāvena cetasā.",
    meaning: "Having firmly resolved 'I am Brahman', one should constantly perceive oneself as such.",
    context: "Encourages firm self-realization through inner conviction."
  },
  {
    id: 26,
    sanskrit: "शुद्धं ब्रह्म परं नित्यं निराकारं निरञ्जनम्।\nनिर्मलं निर्विकल्पं च मनःस्वरूपमेव च॥",
    transliteration: "Śuddhaṁ brahma paraṁ nityaṁ nirākāraṁ nirañjanam; Nirmalaṁ nirvikalpaṁ ca manaḥ-svarūpam eva ca.",
    meaning: "Brahman is pure, supreme, eternal, formless, untainted, flawless, undivided, and the very form of the mind.",
    context: "Describes the essential nature of Brahman."
  },
  {
    id: 27,
    sanskrit: "एवं भावेन कर्तव्या निद्रा तन्द्रा जडादयः।\nह्यात्मबुद्ध्या विना न स्युर्भोगा धर्मादयस्तथा॥",
    transliteration: "Evaṁ bhāvena kartavyā nidrā tandrā jaḍādayaḥ; Hy-ātma-buddhyā vinā na syur bhogā dharmādayas tathā.",
    meaning: "In this awareness, even sleep, laziness, and other traits should be engaged. Without self-knowledge, even pleasures and dharma lack essence.",
    context: "Spiritual awareness must permeate all experiences and duties."
  },
  {
    id: 28,
    sanskrit: "उपवासादिकं सर्वं स्वात्मार्पणं हि केवलम्।\nस्वात्मन्येव स्थितिर्देहे न भेदोऽस्ति कदाचन॥",
    transliteration: "Upavāsādikaṁ sarvaṁ svātmārpaṇaṁ hi kevalam; Svātmany eva sthitir dehe na bhedo'sti kadācana.",
    meaning: "Fasts and rituals are but offerings to the self. Abiding in the self eliminates all bodily distinctions.",
    context: "Even physical disciplines are sanctified by self-realization."
  },
  {
    id: 29,
    sanskrit: "स्वात्मार्पणं हि सततं सर्वकर्मणि मानवैः।\nकर्तव्यं मोक्षकामैस्तु मुक्त्यै कृत्स्नं समर्पणम्॥",
    transliteration: "Svātmārpaṇaṁ hi satataṁ sarva-karmaṇi mānavaiḥ; Kartavyaṁ mokṣa-kāmaistu muktyai kṛtsnaṁ samarpaṇam.",
    meaning: "Those seeking moksha must constantly offer all actions to the self.",
    context: "All deeds are to be devoted to the self for liberation."
  },
  {
    id: 31,
    sanskrit: "मन्त्रद्वयं च यज्ज्ञेयं सत्सङ्गे चैव भावना।\nशास्त्रार्थश्रवणं चैव ब्रह्मभावं तु साधयेत्॥",
    transliteration: "Mantra-dvayaṁ ca yaj-jñeyaṁ satsange caiva bhāvanā; Śāstrārtha-śravaṇaṁ caiva brahma-bhāvaṁ tu sādhayet.",
    meaning: "Chanting the two mantras, cultivating sentiments in satsang, and listening to scriptural meaning — all aid in attaining Brahmic awareness.",
    context: "Outlines practices that reinforce the state of Brahman."
  },
  {
    id: 32,
    sanskrit: "स्वधर्मेणैव जीवन्तो ब्रह्मात्मज्ञानिनो नराः।\nस्वधर्मं न हि हीनन्ति तद्रक्षणपरायणाः॥",
    transliteration: "Svadharmeṇaiva jīvanto brahmātma-jñānino narāḥ; Svadharmaṁ na hi hīnanti tad-rakṣaṇa-parāyaṇāḥ.",
    meaning: "Even those who have realized the ātma and Brahman live by their dharma. They never abandon it and are devoted to its protection.",
    context: "Knowledge does not negate dharma — it strengthens its observance."
  },
  {
    id: 33,
    sanskrit: "गुरोः सेवा परा भक्तिः शास्त्रस्य परिपालनम्।\nशुद्धाचारः स्वधर्मश्च ब्रह्मज्ञानफलं च तत्॥",
    transliteration: "Guroḥ sevā parā bhaktiḥ śāstrasya paripālanam; Śuddhācāraḥ svadharmaś ca brahma-jñāna-phalaṁ ca tat.",
    meaning: "Serving the guru, deep devotion, scriptural obedience, pure conduct, and dharma — these are all fruits of Brahmavidyā.",
    context: "Lists the outer expressions of inner realization."
  },
  {
    id: 34,
    sanskrit: "एवमाचरतो नित्यं ब्रह्मविद्याफलं शुभम्।\nलभ्यते नैव संशयोऽत्र भक्तिः स्यात् परमा तदा॥",
    transliteration: "Evam ācarato nityaṁ brahma-vidyā-phalaṁ śubham; Labhyate naiva saṁśayo'tra bhaktiḥ syāt paramā tadā.",
    meaning: "By such constant conduct, the good fruits of Brahmavidyā are obtained. Undoubtedly, supreme devotion arises.",
    context: "Right action nourishes devotion through knowledge."
  },
  {
    id: 35,
    sanskrit: "अहं ब्रह्मास्मि सत्यं च इत्येवं भावनान्वितः।\nगुरोः सेवा समायुक्तः स ब्रह्मविदितो भवेत्॥",
    transliteration: "Ahaṁ brahmāsmi satyaṁ ca ityevaṁ bhāvanānvitaḥ; Guroḥ sevā samāyuktaḥ sa brahma-vidito bhavet.",
    meaning: "One who serves the guru while realizing and feeling 'I am Brahman' is indeed a knower of Brahman.",
    context: "Combines service and self-realization as keys to spiritual wisdom."
  },
  {
    id: 36,
    sanskrit: "ब्रह्मात्मैकत्वविज्ञानं सद्गुरोः स्वस्वात्मनः।\nसमानं यद्भवेन्नित्यं स गुरुः स्याद्विरागवित्॥",
    transliteration: "Brahmātmaikatva-vijñānaṁ sad-guroḥ svasvātmanaḥ; Samānaṁ yad bhaven nityaṁ sa guruḥ syād virāga-vit.",
    meaning: "A guru who eternally knows his unity with Brahman and the jiva's ātma — he is a true guru and knower of detachment.",
    context: "Defines a sadguru as one anchored in Brahmic oneness."
  },
  {
    id: 37,
    sanskrit: "स्वात्मा ब्रह्मैव सन्नित्यं देहे व्यापी स्थितः स्वयम्।\nव्यवहारं करोत्येव स साक्षी चेतनात्मकः॥",
    transliteration: "Svātmā brahmaiva sannityaṁ dehe vyāpī sthitaḥ svayam; Vyavahāraṁ karoty eva sa sākṣī cetanātmakaḥ.",
    meaning: "The ātma is verily Brahman, always pervading the body and functioning as the conscious witness of all activity.",
    context: "Presents the ātma as both transcendental and present."
  },
  {
    id: 38,
    sanskrit: "यथा घटे स्थितं दीपं प्रकाशं कुर्वते बहिः।\nतथा शरीरस्थ आत्मा प्रकाशं कुर्वते बहिः॥",
    transliteration: "Yathā ghaṭe sthitaṁ dīpaṁ prakāśaṁ kurvate bahiḥ; Tathā śarīrastha ātmā prakāśaṁ kurvate bahiḥ.",
    meaning: "Just as a lamp in a pot illuminates outside, the ātma within the body radiates consciousness outward.",
    context: "Uses metaphor to explain the ātma's illuminating power."
  },
  {
    id: 39,
    sanskrit: "दीपशब्देन दीपो यः स ज्ञेयो देहसन्निभः।\nस्वयं प्रकाशकश्चैव स एवात्मेति कीर्त्यते॥",
    transliteration: "Dīpa-śabdena dīpo yaḥ sa jñeyo deha-sannibhaḥ; Svayaṁ prakāśakaś caiva sa evātmīti kīrtyate.",
    meaning: "The lamp referred to is to be known as similar to the body. Being self-luminous, it is called the ātma.",
    context: "Explains the analogy of lamp-body-ātma in more depth."
  },
  {
    id: 41,
    sanskrit: "यथा यन्त्रे स्थितो वह्निर्न बाध्यते तथैव सः।\nशरीरे देहभावं स न कदाचिद् विधत्ते॥",
    transliteration: "Yathā yantre sthito vahnir na bādhyate tathaiva saḥ; Śarīre deha-bhāvaṁ sa na kadācid vidhatte.",
    meaning: "Just as fire within a machine remains unaffected, the ātma never identifies with or is bound by the body.",
    context: "Illustrates the unattached nature of the ātma."
  },
  {
    id: 42,
    sanskrit: "शरीरं ज्ञानिनां स्थूलं सूपाधि परिकीर्तितम्।\nज्ञानिनां निर्गुणात्मानं स्वात्मानं च विमृश्यताम्॥",
    transliteration: "Śarīraṁ jñānināṁ sthūlaṁ sūpādhi parikīrtitam; Jñānināṁ nirguṇātmānaṁ svātmānaṁ ca vimṛśyatām.",
    meaning: "The gross body is considered an upādhi (limiting adjunct) for the wise. Let them reflect on the formless self beyond it.",
    context: "Encourages self-inquiry beyond bodily identity."
  },
  {
    id: 43,
    sanskrit: "यथा देहे स्थितं आत्मानं ज्ञात्वा मोक्षं समाचरेत्।\nन स देहेन संयुक्तः केनचिन्नानुबध्यते॥",
    transliteration: "Yathā dehe sthitaṁ ātmānaṁ jñātvā mokṣaṁ samācaret; Na sa dehena saṁyuktaḥ kenacin nānubadhyate.",
    meaning: "Knowing the ātma to dwell in the body, one should pursue liberation. It remains unbound by the body.",
    context: "The ātma's presence in the body does not imply bondage."
  },
  {
    id: 44,
    sanskrit: "आत्मा ब्रह्म स्वरूपो हि नित्यः शुद्धो निरामयः।\nप्रकाशकश्च ज्ञः साक्षी सर्वत्र समवस्थितः॥",
    transliteration: "Ātmā brahma-svarūpo hi nityaḥ śuddho nirāmayaḥ; Prakāśakaś ca jñaḥ sākṣī sarvatra samavasthitaḥ.",
    meaning: "The ātma, being of the nature of Brahman, is eternal, pure, flawless, luminous, knowing, and all-pervading.",
    context: "Defines the essential characteristics of the ātma."
  },
  {
    id: 45,
    sanskrit: "ब्रह्मात्मैक्यं समासाद्य जीवन्मुक्तो भवेद्यदि।\nस जीवन्मुक्तिरुक्तः स्यात्सर्वबन्धविवर्जितः॥",
    transliteration: "Brahmātmaikyaṁ samāsādya jīvanmukto bhaved yadi; Sa jīvanmuktir uktaḥ syāt sarva-bandha-vivarjitaḥ.",
    meaning: "Attaining oneness of ātma and Brahman, one becomes liberated while alive, free from all bondage.",
    context: "Defines the state of jivanmukti (liberation while living)."
  },
  {
    id: 46,
    sanskrit: "सर्वसङ्गविहीनस्य मुक्तस्य स्थिरबुद्धेः।\nलक्षणं ब्रह्मभावस्य श्रद्धाभक्तिसमन्वितम्॥",
    transliteration: "Sarva-saṅga-vihīnasya muktasya sthira-buddheḥ; Lakṣaṇaṁ brahma-bhāvasya śraddhā-bhakti-samanvitam.",
    meaning: "The sign of Brahmic awareness in the liberated is detachment, steady intellect, faith, and devotion.",
    context: "Highlights the qualities of one established in Brahmic realization."
  },
  {
    id: 47,
    sanskrit: "आत्मारामो भवेद्यस्तु स्थितधीः सत्यसङ्गराट्।\nब्रह्मभावं विजानाति स एव परमार्थवित्॥",
    transliteration: "Ātmārāmo bhaved yas tu sthita-dhīḥ satya-saṅgaraāṭ; Brahma-bhāvaṁ vijānāti sa eva paramārtha-vit.",
    meaning: "One who delights in the self, is steady-minded, and ruler of true association alone knows the ultimate truth.",
    context: "Describes the truly enlightened knower of Brahman."
  },
  {
    id: 48,
    sanskrit: "गुरुप्रसादतः सर्वं ज्ञानं ब्रह्मविदां मतम्।\nसंस्मृत्या सच्छ्रवणेन सत्सङ्गेन च लभ्यते॥",
    transliteration: "Guru-prasādataḥ sarvaṁ jñānaṁ brahma-vidāṁ matam; Saṁsmṛtyā sac-chravaṇena satsangena ca labhyate.",
    meaning: "According to Brahmavidya, all knowledge comes through the guru's grace, remembrance, listening to truth, and satsang.",
    context: "Acknowledges the role of the guru and satsang in gaining knowledge."
  },
  {
    id: 49,
    sanskrit: "ज्ञानं तु परमं शास्त्रं श्रद्धया यः समाचरेत्।\nस एव ब्रह्मरूपो हि सदा भवति निर्भयः॥",
    transliteration: "Jñānaṁ tu paramaṁ śāstraṁ śraddhayā yaḥ samācaret; Sa eva brahma-rūpo hi sadā bhavati nirbhayaḥ.",
    meaning: "One who faithfully follows the supreme scripture of knowledge becomes Brahman itself and lives fearlessly.",
    context: "True scriptural living results in fearlessness and oneness with Brahman."
  },
  {
    id: 51,
    sanskrit: "तत्त्वज्ञानविनाशेन भ्रान्तिर्नश्यति सर्वथा।\nश्रवणं तु महापुण्यं ज्ञानहेतुं तु केवलम्॥",
    transliteration: "Tattva-jñāna-vināśena bhrāntir naśyati sarvathā; Śravaṇaṁ tu mahā-puṇyaṁ jñāna-hetuṁ tu kevalam.",
    meaning: "By gaining true knowledge, delusion is entirely destroyed. Listening (to shastras) is highly meritorious and the sole cause of wisdom.",
    context: "Praises the transformative power of spiritual listening."
  }
];
