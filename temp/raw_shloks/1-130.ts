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
    transliteration: "Deho’yam sādhanam mukter na bhoga-mātra-sādhanam; Durlabho nashvarash-chā’yam vāram-vāram na labhyate.",
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
    transliteration: "Satsaṅgaḥ sthāpitastasmād divyo’yaṁ Parabrahmaṇā; Swāminārāyaṇeneha sākṣād evāvatīrya ca.",
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
    transliteration: "Dīkṣeti dṛḍhasaṅkalpaḥ saśraddhaṁ niścayo’calaḥ; Samyak samarpaṇaṁ prītyā niṣṭhā vratam dṛḍhāśrayaḥ.",
    meaning: "‘Diksha’ means firm resolve, unwavering faith, wholehearted surrender, loving dedication, strict observance, and steadfast refuge.",
    context: "Explains the deeper spiritual meaning of 'diksha'."
  },
  {
    id: 21,
    sanskrit: "नित्यं नियमनं कुर्याद् गम्यागमनवर्जनम्।
द्रव्यशौचं मनःशौचं सभाशौचं विशेषतः॥",
    transliteration: "Nityaṁ niyamanaṁ kuryād gamyāgamana-varjanam; Dravya-śaucaṁ manaḥ-śaucaṁ sabhā-śaucaṁ viśeṣataḥ.",
    meaning: "One should always practice self-restraint, avoid improper contact, and maintain purity of body, mind, and especially during assemblies.",
    context: "Outlines the foundational disciplines for purity in a seeker’s life."
  },
  {
    id: 22,
    sanskrit: "धर्मप्रवृत्तये देयं दीक्षा शास्त्रविधानतः।
शास्त्रं हि धर्मनिरतं ब्रह्मनिष्ठं च शोभनम्॥",
    transliteration: "Dharma-pravṛttaye deyaṁ dīkṣā śāstra-vidhānataḥ; Śāstraṁ hi dharma-nirataṁ brahma-niṣṭhaṁ ca śobhanam.",
    meaning: "Diksha should be given to instil dharma, according to scriptural tradition. For the scriptures themselves are devoted to dharma and rooted in brahmic wisdom.",
    context: "Emphasizes scripture-based diksha to uphold dharma."
  },
  {
    id: 24,
    sanskrit: "स्वधर्मेणैव जीवेत धर्मार्थं शीलपूर्वकम्।
स्वधर्मनिष्ठया युक्तः स्यादेव परमं सुखम्॥",
    transliteration: "Svadharmeṇaiva jīvet dharmārthaṁ śīla-pūrvakam; Svadharma-niṣṭhayā yuktaḥ syād eva paramaṁ sukham.",
    meaning: "One should live by one’s own dharma virtuously. Abiding in it brings true happiness.",
    context: "Upholding one’s personal dharma is key to spiritual joy."
  },
  {
    id: 25,
    sanskrit: "अहं ब्रह्मास्मि सत्यम् इत्यवधार्य स्थिरं मतिम्।
स्वात्मानं सततं पश्येद् ब्रह्मभावेन चेतसा॥",
    transliteration: "Ahaṁ brahmāsmi satyam ity-ava-dhārya sthiraṁ matim; Svātmānaṁ satataṁ paśyed brahma-bhāvena cetasā.",
    meaning: "Having firmly resolved ‘I am Brahman’, one should constantly perceive oneself as such.",
    context: "Encourages firm self-realization through inner conviction."
  },
  {
    id: 26,
    sanskrit: "शुद्धं ब्रह्म परं नित्यं निराकारं निरञ्जनम्।
निर्मलं निर्विकल्पं च मनःस्वरूपमेव च॥",
    transliteration: "Śuddhaṁ brahma paraṁ nityaṁ nirākāraṁ nirañjanam; Nirmalaṁ nirvikalpaṁ ca manaḥ-svarūpam eva ca.",
    meaning: "Brahman is pure, supreme, eternal, formless, untainted, flawless, undivided, and the very form of the mind.",
    context: "Describes the essential nature of Brahman."
  },
  {
    id: 27,
    sanskrit: "एवं भावेन कर्तव्या निद्रा तन्द्रा जडादयः।
ह्यात्मबुद्ध्या विना न स्युर्भोगा धर्मादयस्तथा॥",
    transliteration: "Evaṁ bhāvena kartavyā nidrā tandrā jaḍādayaḥ; Hy-ātma-buddhyā vinā na syur bhogā dharmādayas tathā.",
    meaning: "In this awareness, even sleep, laziness, and other traits should be engaged. Without self-knowledge, even pleasures and dharma lack essence.",
    context: "Spiritual awareness must permeate all experiences and duties."
  },
  {
    id: 28,
    sanskrit: "उपवासादिकं सर्वं स्वात्मार्पणं हि केवलम्।
स्वात्मन्येव स्थितिर्देहे न भेदोऽस्ति कदाचन॥",
    transliteration: "Upavāsādikaṁ sarvaṁ svātmārpaṇaṁ hi kevalam; Svātmany eva sthitir dehe na bhedo’sti kadācana.",
    meaning: "Fasts and rituals are but offerings to the self. Abiding in the self eliminates all bodily distinctions.",
    context: "Even physical disciplines are sanctified by self-realization."
  },
  {
    id: 29,
    sanskrit: "स्वात्मार्पणं हि सततं सर्वकर्मणि मानवैः।
कर्तव्यं मोक्षकामैस्तु मुक्त्यै कृत्स्नं समर्पणम्॥",
    transliteration: "Svātmārpaṇaṁ hi satataṁ sarva-karmaṇi mānavaiḥ; Kartavyaṁ mokṣa-kāmaistu muktyai kṛtsnaṁ samarpaṇam.",
    meaning: "Those seeking moksha must constantly offer all actions to the self.",
    context: "All deeds are to be devoted to the self for liberation."
  },
  {
    id: 31,
    sanskrit: "मन्त्रद्वयं च यज्ज्ञेयं सत्सङ्गे चैव भावना।
शास्त्रार्थश्रवणं चैव ब्रह्मभावं तु साधयेत्॥",
    transliteration: "Mantra-dvayaṁ ca yaj-jñeyaṁ satsange caiva bhāvanā; Śāstrārtha-śravaṇaṁ caiva brahma-bhāvaṁ tu sādhayet.",
    meaning: "Chanting the two mantras, cultivating sentiments in satsang, and listening to scriptural meaning — all aid in attaining Brahmic awareness.",
    context: "Outlines practices that reinforce the state of Brahman."
  },
  {
    id: 32,
    sanskrit: "स्वधर्मेणैव जीवन्तो ब्रह्मात्मज्ञानिनो नराः।
स्वधर्मं न हि हीनन्ति तद्रक्षणपरायणाः॥",
    transliteration: "Svadharmeṇaiva jīvanto brahmātma-jñānino narāḥ; Svadharmaṁ na hi hīnanti tad-rakṣaṇa-parāyaṇāḥ.",
    meaning: "Even those who have realized the ātma and Brahman live by their dharma. They never abandon it and are devoted to its protection.",
    context: "Knowledge does not negate dharma — it strengthens its observance."
  },
  {
    id: 33,
    sanskrit: "गुरोः सेवा परा भक्तिः शास्त्रस्य परिपालनम्।
शुद्धाचारः स्वधर्मश्च ब्रह्मज्ञानफलं च तत्॥",
    transliteration: "Guroḥ sevā parā bhaktiḥ śāstrasya paripālanam; Śuddhācāraḥ svadharmaś ca brahma-jñāna-phalaṁ ca tat.",
    meaning: "Serving the guru, deep devotion, scriptural obedience, pure conduct, and dharma — these are all fruits of Brahmavidyā.",
    context: "Lists the outer expressions of inner realization."
  },
  {
    id: 34,
    sanskrit: "एवमाचरतो नित्यं ब्रह्मविद्याफलं शुभम्।
लभ्यते नैव संशयोऽत्र भक्तिः स्यात् परमा तदा॥",
    transliteration: "Evam ācarato nityaṁ brahma-vidyā-phalaṁ śubham; Labhyate naiva saṁśayo’tra bhaktiḥ syāt paramā tadā.",
    meaning: "By such constant conduct, the good fruits of Brahmavidyā are obtained. Undoubtedly, supreme devotion arises.",
    context: "Right action nourishes devotion through knowledge."
  },
  {
    id: 35,
    sanskrit: "अहं ब्रह्मास्मि सत्यं च इत्येवं भावनान्वितः।
गुरोः सेवा समायुक्तः स ब्रह्मविदितो भवेत्॥",
    transliteration: "Ahaṁ brahmāsmi satyaṁ ca ityevaṁ bhāvanānvitaḥ; Guroḥ sevā samāyuktaḥ sa brahma-vidito bhavet.",
    meaning: "One who serves the guru while realizing and feeling ‘I am Brahman’ is indeed a knower of Brahman.",
    context: "Combines service and self-realization as keys to spiritual wisdom."
  },
  {
    id: 36,
    sanskrit: "ब्रह्मात्मैकत्वविज्ञानं सद्गुरोः स्वस्वात्मनः।
समानं यद्भवेन्नित्यं स गुरुः स्याद्विरागवित्॥",
    transliteration: "Brahmātmaikatva-vijñānaṁ sad-guroḥ svasvātmanaḥ; Samānaṁ yad bhaven nityaṁ sa guruḥ syād virāga-vit.",
    meaning: "A guru who eternally knows his unity with Brahman and the jiva’s ātma — he is a true guru and knower of detachment.",
    context: "Defines a sadguru as one anchored in Brahmic oneness."
  },
  {
    id: 37,
    sanskrit: "स्वात्मा ब्रह्मैव सन्नित्यं देहे व्यापी स्थितः स्वयम्।
व्यवहारं करोत्येव स साक्षी चेतनात्मकः॥",
    transliteration: "Svātmā brahmaiva sannityaṁ dehe vyāpī sthitaḥ svayam; Vyavahāraṁ karoty eva sa sākṣī cetanātmakaḥ.",
    meaning: "The ātma is verily Brahman, always pervading the body and functioning as the conscious witness of all activity.",
    context: "Presents the ātma as both transcendental and present."
  },
  {
    id: 38,
    sanskrit: "यथा घटे स्थितं दीपं प्रकाशं कुर्वते बहिः।
तथा शरीरस्थ आत्मा प्रकाशं कुर्वते बहिः॥",
    transliteration: "Yathā ghaṭe sthitaṁ dīpaṁ prakāśaṁ kurvate bahiḥ; Tathā śarīrastha ātmā prakāśaṁ kurvate bahiḥ.",
    meaning: "Just as a lamp in a pot illuminates outside, the ātma within the body radiates consciousness outward.",
    context: "Uses metaphor to explain the ātma's illuminating power."
  },
  {
    id: 39,
    sanskrit: "दीपशब्देन दीपो यः स ज्ञेयो देहसन्निभः।
स्वयं प्रकाशकश्चैव स एवात्मेति कीर्त्यते॥",
    transliteration: "Dīpa-śabdena dīpo yaḥ sa jñeyo deha-sannibhaḥ; Svayaṁ prakāśakaś caiva sa evātmīti kīrtyate.",
    meaning: "The lamp referred to is to be known as similar to the body. Being self-luminous, it is called the ātma.",
    context: "Explains the analogy of lamp-body-ātma in more depth."
  },
  {
    id: 41,
    sanskrit: "यथा यन्त्रे स्थितो वह्निर्न बाध्यते तथैव सः।
शरीरे देहभावं स न कदाचिद् विधत्ते॥",
    transliteration: "Yathā yantre sthito vahnir na bādhyate tathaiva saḥ; Śarīre deha-bhāvaṁ sa na kadācid vidhatte.",
    meaning: "Just as fire within a machine remains unaffected, the ātma never identifies with or is bound by the body.",
    context: "Illustrates the unattached nature of the ātma."
  },
  {
    id: 42,
    sanskrit: "शरीरं ज्ञानिनां स्थूलं सूपाधि परिकीर्तितम्।
ज्ञानिनां निर्गुणात्मानं स्वात्मानं च विमृश्यताम्॥",
    transliteration: "Śarīraṁ jñānināṁ sthūlaṁ sūpādhi parikīrtitam; Jñānināṁ nirguṇātmānaṁ svātmānaṁ ca vimṛśyatām.",
    meaning: "The gross body is considered an upādhi (limiting adjunct) for the wise. Let them reflect on the formless self beyond it.",
    context: "Encourages self-inquiry beyond bodily identity."
  },
  {
    id: 43,
    sanskrit: "यथा देहे स्थितं आत्मानं ज्ञात्वा मोक्षं समाचरेत्।
न स देहेन संयुक्तः केनचिन्नानुबध्यते॥",
    transliteration: "Yathā dehe sthitaṁ ātmānaṁ jñātvā mokṣaṁ samācaret; Na sa dehena saṁyuktaḥ kenacin nānubadhyate.",
    meaning: "Knowing the ātma to dwell in the body, one should pursue liberation. It remains unbound by the body.",
    context: "The ātma’s presence in the body does not imply bondage."
  },
  {
    id: 44,
    sanskrit: "आत्मा ब्रह्म स्वरूपो हि नित्यः शुद्धो निरामयः।
प्रकाशकश्च ज्ञः साक्षी सर्वत्र समवस्थितः॥",
    transliteration: "Ātmā brahma-svarūpo hi nityaḥ śuddho nirāmayaḥ; Prakāśakaś ca jñaḥ sākṣī sarvatra samavasthitaḥ.",
    meaning: "The ātma, being of the nature of Brahman, is eternal, pure, flawless, luminous, knowing, and all-pervading.",
    context: "Defines the essential characteristics of the ātma."
  },
  {
    id: 45,
    sanskrit: "ब्रह्मात्मैक्यं समासाद्य जीवन्मुक्तो भवेद्यदि।
स जीवन्मुक्तिरुक्तः स्यात्सर्वबन्धविवर्जितः॥",
    transliteration: "Brahmātmaikyaṁ samāsādya jīvanmukto bhaved yadi; Sa jīvanmuktir uktaḥ syāt sarva-bandha-vivarjitaḥ.",
    meaning: "Attaining oneness of ātma and Brahman, one becomes liberated while alive, free from all bondage.",
    context: "Defines the state of jivanmukti (liberation while living)."
  },
  {
    id: 46,
    sanskrit: "सर्वसङ्गविहीनस्य मुक्तस्य स्थिरबुद्धेः।
लक्षणं ब्रह्मभावस्य श्रद्धाभक्तिसमन्वितम्॥",
    transliteration: "Sarva-saṅga-vihīnasya muktasya sthira-buddheḥ; Lakṣaṇaṁ brahma-bhāvasya śraddhā-bhakti-samanvitam.",
    meaning: "The sign of Brahmic awareness in the liberated is detachment, steady intellect, faith, and devotion.",
    context: "Highlights the qualities of one established in Brahmic realization."
  },
  {
    id: 47,
    sanskrit: "आत्मारामो भवेद्यस्तु स्थितधीः सत्यसङ्गराट्।
ब्रह्मभावं विजानाति स एव परमार्थवित्॥",
    transliteration: "Ātmārāmo bhaved yas tu sthita-dhīḥ satya-saṅgaraāṭ; Brahma-bhāvaṁ vijānāti sa eva paramārtha-vit.",
    meaning: "One who delights in the self, is steady-minded, and ruler of true association alone knows the ultimate truth.",
    context: "Describes the truly enlightened knower of Brahman."
  },
  {
    id: 48,
    sanskrit: "गुरुप्रसादतः सर्वं ज्ञानं ब्रह्मविदां मतम्।
संस्मृत्या सच्छ्रवणेन सत्सङ्गेन च लभ्यते॥",
    transliteration: "Guru-prasādataḥ sarvaṁ jñānaṁ brahma-vidāṁ matam; Saṁsmṛtyā sac-chravaṇena satsangena ca labhyate.",
    meaning: "According to Brahmavidya, all knowledge comes through the guru’s grace, remembrance, listening to truth, and satsang.",
    context: "Acknowledges the role of the guru and satsang in gaining knowledge."
  },
  {
    id: 49,
    sanskrit: "ज्ञानं तु परमं शास्त्रं श्रद्धया यः समाचरेत्। स एव ब्रह्मरूपो हि सदा भवति निर्भयः॥",
    transliteration: "Jñānaṁ tu paramaṁ śāstraṁ śraddhayā yaḥ samācaret; Sa eva brahma-rūpo hi sadā bhavati nirbhayaḥ.",
    meaning: "One who faithfully follows the supreme scripture of knowledge becomes Brahman itself and lives fearlessly.",
    context: "True scriptural living results in fearlessness and oneness with Brahman."
  },
  {
    id: 51,
    sanskrit: "तत्त्वज्ञानविनाशेन भ्रान्तिर्नश्यति सर्वथा।
श्रवणं तु महापुण्यं ज्ञानहेतुं तु केवलम्॥",
    transliteration: "Tattva-jñāna-vināśena bhrāntir naśyati sarvathā; Śravaṇaṁ tu mahā-puṇyaṁ jñāna-hetuṁ tu kevalam.",
    meaning: "By gaining true knowledge, delusion is entirely destroyed. Listening (to shastras) is highly meritorious and the sole cause of wisdom.",
    context: "Praises the transformative power of spiritual listening."
  },
  {
    id: 52,
    sanskrit: "श्रवणं कीर्तनं चैव स्मरणं दर्शनं तथा।
सेवा सख्यं समाधाना आत्मन्यर्पणमेव च॥",
    transliteration: "Śravaṇaṁ kīrtanaṁ caiva smaraṇaṁ darśanaṁ tathā; Sevā sakhyaṁ samādhānā ātma-nyarpaṇam eva ca.",
    meaning: "Listening, singing, remembering, darshan, service, friendship, mental steadiness, and self-surrender are all forms of devotion.",
    context: "Lists core practices of bhakti (devotion)."
  },
  {
    id: 53,
    sanskrit: "सद्भक्तिर्ह्येकतन्मन्यः परं प्रेमात्मनिर्मलः।
नित्ययुक्तः समो दान्तो दाक्षिण्यगुणशालिनः॥",
    transliteration: "Sad-bhaktir hy-ekatan-manyaḥ paraṁ premātma-nirmalaḥ; Nitya-yuktaḥ samo dānto dākṣiṇya-guṇa-śālinaḥ.",
    meaning: "True devotion is one-mindedness, deep love, purity of soul, constant union, equanimity, self-restraint, and humility.",
    context: "Defines the nature and qualities of a true devotee."
  },
  {
    id: 54,
    sanskrit: "यथाशास्त्रं गुरुं प्राप्य तदादेशं च सङ्ग्रहेत्। तदनुसारिणं भक्तं वन्देऽहं भक्तवत्सलम्॥",
    transliteration: "Yathā-śāstraṁ guruṁ prāpya tad-ādeśaṁ ca saṅgrahet; Tadanusāriṇaṁ bhaktaṁ vande’haṁ bhakta-vatsalam.",
    meaning: "One should approach the guru as per scripture, follow his instruction, and honor the obedient devotee, for he is beloved of God.",
    context: "Stresses obedience to guru and love for the faithful."
  },
  {
    id: 55,
    sanskrit: "श्रवणेनापि सत्सङ्गं लभते जीव आत्मनः।
सङ्गात्सद्गुरुमाप्नोति ततः शास्त्रार्थबोधकम्॥",
    transliteration: "Śravaṇenāpi satsangaṁ labhate jīva ātmanaḥ; Saṅgāt sad-gurum āpnoti tataḥ śāstrārtha-bodhakam.",
    meaning: "By listening, the soul attains satsang, and through that, a true guru who imparts the meaning of shastras.",
    context: "Highlights the progression from hearing to realization."
  },
  {
    id: 56,
    sanskrit: "गुरुणा दर्शितं शास्त्रं व्याख्यां श्रुत्वा विचारयेत्।
संशयो यत्र संजायेत् तत्र पृच्छेन्निरन्तरम्॥",
    transliteration: "Guruṇā darśitaṁ śāstraṁ vyākhyāṁ śrutvā vicārayet; Saṁśayo yatra saṁjāyet tatra pṛcchen nirantaram.",
    meaning: "After hearing the guru’s explanation of scripture, one should contemplate. Wherever doubt arises, one should constantly question.",
    context: "Encourages active inquiry alongside faith."
  },
  {
    id: 57,
    sanskrit: "संशयो हि महानाशः संशयो ह्युपहन्यते।
न हि संशयिनो लोके कश्चिद्वन्द्यः सदा भवेत्॥",
    transliteration: "Saṁśayo hi mahān āśaḥ saṁśayo hy-upahanyate; Na hi saṁśayino loke kaścid vandyaḥ sadā bhavet.",
    meaning: "Doubt is a great obstruction and should be dispelled. One who doubts is never truly respected.",
    context: "Stresses the danger of spiritual doubt."
  },
  {
    id: 58,
    sanskrit: "विश्वासो विनियोगश्च पादुका गुरुपादयोः।
उपदेशो गुरुस्तुतिः परोऽवस्थापनो गुरु॥",
    transliteration: "Viśvāso viniyogaś ca pādukā guru-pādayoḥ; Upadeśo guru-stutiḥ paro’vasthāpano guru.",
    meaning: "Faith, surrender, serving the guru’s feet, receiving teachings, and praising the guru are supreme means.",
    context: "Lays out devotional duties toward the guru."
  },
  {
    id: 59,
    sanskrit: "शिष्यैश्च गुरुणा सार्धं समाधेः कारणं महत्।
नित्यं गृहीत्वा संशुद्धं गुरुभावं सदा हरेत्॥",
    transliteration: "Śiṣyaiś ca guruṇā sārdhaṁ samādheḥ kāraṇaṁ mahat; Nityaṁ gṛhītvā saṁśuddhaṁ guru-bhāvaṁ sadā haret.",
    meaning: "Disciples and guru together cultivate meditation. One should always sustain pure feelings toward the guru.",
    context: "Shows the mutual responsibility in the guru-disciple bond."
  },
  {
    id: 60,
    sanskrit: "गुरुभक्त्यादिना मोक्षो लभ्यते नात्र संशयः।
गुरोः कृपाप्रसादेन साक्षात्परमपदं लभेत्॥",
    transliteration: "Guru-bhaktyādinā mokṣo labhyate nātra saṁśayaḥ; Guroḥ kṛpā-prasādena sākṣāt parama-padaṁ labhet.",
    meaning: "Liberation is attained through guru-bhakti and by his grace one achieves the supreme state.",
    context: "Confirms moksha is reached by the guru’s compassion."
  }
    sanskrit: "श्रवणं च परं ज्ञानं ब्रह्मभावविवर्धनम्।
नित्यं कुर्याद् बुधो भक्त्या तद्वक्तारं च सेवयेत्॥",
    transliteration: "Śravaṇaṁ ca paraṁ jñānaṁ brahma-bhāva-vivardhanam; Nityaṁ kuryād budho bhaktyā tad-vaktāraṁ ca sevayet.",
    meaning: "The wise should daily and devotedly listen to supreme knowledge that enhances Brahmic awareness, and serve its speaker.",
    context: "Combines listening to wisdom and guru-seva in sadhana."
  },
  {
    id: 61,
    sanskrit: "गुरोः प्रियतमा नित्यं सेवा ब्रह्मसमर्पिता।
शिष्येण भावयुक्तेन कार्याणीत्यपि निश्चितम्॥",
    transliteration: "Guroḥ priyatamā nityaṁ sevā brahma-samarpitā; Śiṣyeṇa bhāva-yuktena kāryāṇīty api niścitam.",
    meaning: "The most beloved service to the guru is that which is offered with Brahmic spirit and heartfelt emotion by the disciple.",
    context: "Describes ideal guru-seva marked by love and awareness."
  },
  {
    id: 62,
    sanskrit: "गुरोः सन्तोष एवास्य तपः पुण्यं तपोमुखम्।
व्रतं यज्ञो जपो ध्यानं तत्सन्तोषः सदा भवेत्॥",
    transliteration: "Guroḥ santoṣa evāsya tapaḥ puṇyaṁ tapo-mukham; Vrataṁ yajño japo dhyānaṁ tat-santoṣaḥ sadā bhavet.",
    meaning: "The guru’s satisfaction is his disciple’s true penance and virtue. All vows, yajnas, japa, and dhyāna must lead to it.",
    context: "Satisfying the guru is the essence of all austerities."
  },
  {
    id: 63,
    sanskrit: "आत्मतत्त्वं गुरुर्ब्रूयात् साक्षान्मोक्षैकसाधनम्।
अविवेकिन एवायं मोक्षमार्गो न गम्यते॥",
    transliteration: "Ātma-tattvaṁ gurur brūyāt sākṣān mokṣaika-sādhanam; Avivekina evāyaṁ mokṣa-mārgo na gamyate.",
    meaning: "The guru imparts the truth of the ātma — the sole path to moksha. This path is not accessible to the undiscerning.",
    context: "Only the discerning reach liberation through guru-guided knowledge."
  },
  {
    id: 64,
    sanskrit: "गुरुणा यः समारभ्य यावत् प्राप्य फलं च यत्।
सर्वं दीक्षाविधिं ज्ञेयम् साक्षान्मोक्षैकसाधनम्॥",
    transliteration: "Guruṇā yaḥ samārabhya yāvat prāpya phalaṁ ca yat; Sarvaṁ dīkṣā-vidhiṁ jñeyam sākṣān mokṣaika-sādhanam.",
    meaning: "From the guru initiating to the disciple attaining the result — the entire diksha process is the direct means for moksha.",
    context: "Defines diksha as the complete liberating process."
  },
  {
    id: 65,
    sanskrit: "यः शास्त्रं व्रतमालम्भ्य जीवन्मुक्तो भवेदिह।
स मुक्ता इति विज्ञेयो नान्यथा मोक्षणं कृतम्॥",
    transliteration: "Yaḥ śāstraṁ vratam ālambhya jīvan-mukto bhaved iha; Sa muktā iti vijñeyo nānyathā mokṣaṇaṁ kṛtam.",
    meaning: "Only one who follows scripture and vows and attains liberation while alive is truly free. Otherwise, moksha is incomplete.",
    context: "Clarifies that full liberation means living in freedom, not just posthumous salvation."
  },
  {
    id: 66,
    sanskrit: "निष्ठा गुरौ श्रद्धया युक्ता भक्त्या युक्ता विशेषतः।
तस्यैव मोक्षणं प्रोक्तं नान्यथा मोक्षणं कुतः॥",
    transliteration: "Niṣṭhā gurau śraddhayā yuktā bhaktyā yuktā viśeṣataḥ; Tasyaiva mokṣaṇaṁ proktaṁ nānyathā mokṣaṇaṁ kutaḥ.",
    meaning: "Liberation is for one who is steadfast in the guru with faith and devotion. There is no moksha otherwise.",
    context: "Reinforces guru-centered devotion as the key to liberation."
  },
  {
    id: 67,
    sanskrit: "गुरुं साक्षात्परं ब्रह्म मन्यते च स्वभावतः।
नित्यं यः सेवते भक्त्या स ब्रह्मात्मैव न: शुभम्॥",
    transliteration: "Guruṁ sākṣāt paraṁ brahma manyate ca svabhāvataḥ; Nityaṁ yaḥ sevate bhaktyā sa brahmātmaiva naḥ śubham.",
    meaning: "One who naturally sees the guru as Brahman and serves him always with devotion is himself Brahman — a blessing to all.",
    context: "Explains the greatness of one with Brahmic vision toward the guru."
  },
  {
    id: 68,
    sanskrit: "शास्त्रस्यार्थं गुरुर्ब्रूयात् शास्त्रार्थज्ञो हि केवलः।
श्रद्धया गुरुमाराध्य तद्वाक्यं तु न लङ्घयेत्॥",
    transliteration: "Śāstrasya arthaṁ gurur brūyāt śāstra-artha-jño hi kevalaḥ; Śraddhayā gurum ārādhya tad-vākyaṁ tu na laṅghayet.",
    meaning: "The guru alone knows scripture’s true meaning and should explain it. One must worship the guru with faith and never disobey his words.",
    context: "Stresses obedience and reverence to the guru’s teachings."
  },
  {
    id: 69,
    sanskrit: "दीक्षा देया द्विजातिभ्यः शीलवृत्तसमन्विते।
श्रद्धाभक्तिसमन्विते शान्ताय विनयेन च॥",
    transliteration: "Dīkṣā deyā dvijāti-bhyaḥ śīla-vṛtta-samanvite; Śraddhā-bhakti-samanvite śāntāya vinayena ca.",
    meaning: "Diksha should be given to twice-borns (dvijas) who are virtuous, faithful, devoted, peaceful, and humble.",
    context: "Lists qualifications for receiving diksha."
  },
  {
    id: 70,
    sanskrit: "दीक्षायां चेतरः शिष्यः शीलाद्यैर्हीन एव हि।
तं त्यक्त्वा गुरुणा कार्यो योग्यः शीलगुणान्वितः॥",
    transliteration: "Dīkṣāyāṁ cetaraḥ śiṣyaḥ śīlād-yair hīna eva hi; Taṁ tyaktvā guruṇā kāryo yogyaḥ śīla-guṇānvitaḥ.",
    meaning: "If a disciple lacks virtues for diksha, the guru should reject him and initiate a qualified one with such qualities.",
    context: "Ensures that diksha is reserved for worthy aspirants."
  }
  },
  {
    id: 71,
    sanskrit: "दीक्षा गुरुकरा कार्या ज्ञानदा मोक्षकाङ्क्षिणा।
गुरोः प्रियतमो भक्तो लभते मुक्तिमेव हि॥",
    transliteration: "Dīkṣā gurukarā kāryā jñānadā mokṣakāṅkṣiṇā; Guroḥ priyatamo bhakto labhate muktim eva hi.",
    meaning: "Diksha must be performed by the guru for one who seeks knowledge and liberation. The guru’s dearest devotee attains liberation.",
    context: "Stresses guru-led diksha as the path to moksha."
  },
  {
    id: 72,
    sanskrit: "दीक्षायाः फलं पुण्यं ज्ञानं मोक्षश्च केवलम्।
सद्गुरोः कृपया पुण्यं लभ्यते नात्र संशयः॥",
    transliteration: "Dīkṣāyāḥ phalaṁ puṇyaṁ jñānaṁ mokṣaś ca kevalam; Sad-guroḥ kṛpayā puṇyaṁ labhyate nātra saṁśayaḥ.",
    meaning: "The fruit of diksha is virtue, knowledge, and ultimately moksha. All this is surely attained through the grace of the sadguru.",
    context: "Affirms the blessings of diksha received through the guru."
  },
  {
    id: 73,
    sanskrit: "दीक्षा पुण्यवती प्रोक्ता धर्मिष्ठा ज्ञानदायिनी।
भक्तिमार्गप्रवेशाय मोक्षद्वारस्य रक्षणी॥",
    transliteration: "Dīkṣā puṇyavatī proktā dharmiṣṭhā jñānadāyinī; Bhaktimārga-praveśāya mokṣa-dvārasya rakṣaṇī.",
    meaning: "Diksha is virtuous, dharmic, and bestows knowledge. It grants entrance into the path of devotion and guards the door to moksha.",
    context: "Describes the powerful role of diksha in spiritual life."
  },
  {
    id: 74,
    sanskrit: "दीक्षादानं गुरोः कार्यं शास्त्रवद्भावनात्मकम्।
यस्य दीक्षा कृता तेन ब्रह्मज्ञानं समाचरेत्॥",
    transliteration: "Dīkṣādānaṁ guroḥ kāryaṁ śāstra-vad-bhāvanātmakam; Yasya dīkṣā kṛtā tena brahma-jñānaṁ samācaret.",
    meaning: "The guru should give diksha as per scriptural guidelines and with heartfelt feeling. The recipient should then pursue Brahmic knowledge.",
    context: "Outlines responsibilities of both guru and disciple."
  },
  {
    id: 75,
    sanskrit: "दीक्षा ब्रह्मविदा देया शास्त्रदृष्ट्या तपस्विना।
तत्त्वज्ञेन समासीनं आत्मज्ञप्त्यै सदाशयात्॥",
    transliteration: "Dīkṣā brahma-vidā deyā śāstra-dṛṣṭyā tapasvinā; Tattva-jñena samāsīnaṁ ātma-jñaptyai sadāśayāt.",
    meaning: "Diksha should be given by a self-realized guru, as per scriptures, to a disciplined seeker who is ready to realize the self.",
    context: "Stresses the qualified guru-disciple relationship."
  },
  {
    id: 76,
    sanskrit: "दीक्षा लभ्यते सदा सद्भक्ताय गुणायुतम्।
भक्तेः प्रतीकं संकल्पं विनिःस्वासं च कारयेत्॥",
    transliteration: "Dīkṣā labhyate sadā sad-bhaktāya guṇāyutam; Bhakteḥ pratīkaṁ saṅkalpaṁ viniḥsvāsaṁ ca kārayet.",
    meaning: "Diksha is always given to a true devotee with virtues. It involves symbolic expression of devotion, resolve, and prayerful breath.",
    context: "Describes internal and external expressions during diksha."
  },
  {
    id: 77,
    sanskrit: "प्रणवेन तु मन्त्रोऽयं कारयेत् प्रतिबोधतः।
ब्रह्मणि स्थितधीः कार्यः साक्षात्कारो हि धीमताम्॥",
    transliteration: "Praṇavena tu mantro’yaṁ kārayet pratibodhataḥ; Brahmaṇi sthita-dhīḥ kāryaḥ sākṣātkāro hi dhīmatām.",
    meaning: "With the sacred pranava (Om), the mantra is imparted for awakening. One must stabilize in Brahman, the wise strive for realization.",
    context: "Links mantra diksha to awakening and Brahmic stability."
  },
  {
    id: 78,
    sanskrit: "ज्ञानं ब्रह्मणि यत्स्थितं तेन दीक्षां समाचरेत्।
तत्र स्थितो मुनी ज्ञेयः स्वात्मारामो जितेन्द्रियः॥",
    transliteration: "Jñānaṁ brahmaṇi yat-sthitaṁ tena dīkṣāṁ samācaret; Tatra sthito munī jñeyaḥ svātmārāmo jitendriyaḥ.",
    meaning: "Diksha is to be practiced through knowledge rooted in Brahman. The sage who abides there is self-content and sense-controlled.",
    context: "Shows the deep connection between knowledge and spiritual discipline."
  },
  {
    id: 79,
    sanskrit: "शिष्यः प्रशान्तः सान्तः सन् गुरौ दीक्षां समाचरेत्।
प्रसादेन गुरोः पुण्यं शिष्येणैव लभ्यते॥",
    transliteration: "Śiṣyaḥ praśāntaḥ sāntaḥ san gurau dīkṣāṁ samācaret; Prasādena guroḥ puṇyaṁ śiṣyeṇaiva labhyate.",
    meaning: "A peaceful and virtuous disciple should receive diksha from the guru. Through his grace, the disciple attains great merit.",
    context: "Emphasizes the disciple’s temperament and the guru’s grace."
  },
  {
    id: 80,
    sanskrit: "दीक्षा ब्रह्मविदा देया सन्न्यस्तेनैव च द्विजः।
धर्मिष्ठेन महात्मानं सदैव पूजनीं स्मरेत्॥",
    transliteration: "Dīkṣā brahma-vidā deyā sannyastenaiva ca dvijaḥ; Dharmiṣṭhena mahātmānaṁ sadaiva pūjanīṁ smaret.",
    meaning: "Diksha should be given by a renunciate Brahmavidya-knower. The noble guru must be ever revered and remembered.",
    context: "Gives characteristics of a true initiating guru."
  },
  {
    id: 81,
    sanskrit: "दीक्षां विनाऽपि शास्त्रेषु मुक्तिः स्यान्नैव निष्कया।
साक्षाच्छ्रवणमात्रेण मोक्षः स्यान्नैव संभवः॥",
    transliteration: "Dīkṣāṁ vinā’pi śāstreṣu muktiḥ syān naiva niṣkayā; Sākṣāc-chravaṇa-mātreṇa mokṣaḥ syān naiva sambhavaḥ.",
    meaning: "Without diksha, scriptures do not firmly promise liberation. Mere hearing does not lead to moksha.",
    context: "Declares the necessity of diksha for liberation."
  },
  {
    id: 82,
    sanskrit: "दीक्षा ब्रह्मविवेकाय भक्तये ज्ञानसंयुता।
सम्यग्दर्शसमायुक्ता परमार्थप्रवर्तिका॥",
    transliteration: "Dīkṣā brahma-vivekāya bhaktaye jñāna-saṁyutā; Samyag-darśa-samāyuktā paramārtha-pravartikā.",
    meaning: "Diksha fosters discernment of Brahman and devotion, enriched with knowledge, right vision, and ultimate purpose.",
    context: "Highlights diksha as a catalyst for true spiritual growth."
  },
  {
    id: 83,
    sanskrit: "आत्मज्ञानसमारब्धा परमात्मप्रवर्तिका।
गुरुणा दर्शिता दीक्षा साक्षान्मोक्षैकसाधनम्॥",
    transliteration: "Ātma-jñāna-samārabdhā paramātma-pravartikā; Guruṇā darśitā dīkṣā sākṣān mokṣaika-sādhanam.",
    meaning: "Diksha begins with self-knowledge and leads to devotion to God. Shown by the guru, it is the direct path to moksha.",
    context: "Traces the inner journey initiated by diksha."
  },
  {
    id: 84,
    sanskrit: "दीक्षा सर्वेषु वेदेषु पुण्ये कर्मणि शोभना।
गुह्यानां गुह्यरूपा च ब्रह्मविद्याफलप्रदा॥",
    transliteration: "Dīkṣā sarveṣu vedeṣu puṇye karmaṇi śobhanā; Guhyānāṁ guhya-rūpā ca brahma-vidyā-phala-pradā.",
    meaning: "Diksha is praised in all Vedas and sacred rites. It is the most secret of secrets and grants the fruit of Brahmavidya.",
    context: "Presents diksha as the core of scriptural and spiritual wisdom."
  },
  {
    id: 85,
    sanskrit: "दीक्षा ब्रह्मविदां श्रेष्ठा वेदान्तार्थविशारदा।
संसारार्णवनिर्गम्य परमानन्ददायिनी॥",
    transliteration: "Dīkṣā brahma-vidāṁ śreṣṭhā vedāntārtha-viśāradā; Saṁsārārṇava-nirgamya paramānanda-dāyinī.",
    meaning: "Diksha is supreme among Brahmavidyas, well-versed in Vedanta. It helps cross the ocean of worldliness and grants supreme bliss.",
    context: "Praises the liberating and bliss-giving nature of diksha."
  },
  {
    id: 86,
    sanskrit: "गुरुणा दत्तसंस्कारो यः शिष्याय प्रदर्श्यते।
स एव सत्सङ्गदीक्षा ज्ञानदा मोक्षकाङ्क्षिणाम्॥",
    transliteration: "Guruṇā datta-saṁskāro yaḥ śiṣyāya pradarśyate; Sa eva satsanga-dīkṣā jñānada mokṣakāṅkṣiṇām.",
    meaning: "The initiation and transformation shown by the guru to the disciple is satsang diksha — giving knowledge to seekers of moksha.",
    context: "Defines satsang diksha as personal spiritual transmission."
  },
  {
    id: 87,
    sanskrit: "सर्वेभ्यः शुभदायिन्याः पुण्यायाः परमोदयः।
सत्सङ्गदीक्षया साक्षात् भवेदेव न संशयः॥",
    transliteration: "Sarvebhyaḥ śubha-dāyinyāḥ puṇyāyāḥ paramodayāḥ; Satsanga-dīkṣayā sākṣāt bhaved eva na saṁśayaḥ.",
    meaning: "Satsang diksha brings direct highest upliftment and virtue to all. There is no doubt about its supreme benefit.",
    context: "Declares satsang diksha as universally uplifting and doubtless in value."
  },
  {
    id: 88,
    sanskrit: "दीक्षा ब्रह्ममयी प्रोक्ता ब्रह्मभावप्रदायिनी।
सद्गुरोः कृपया प्राप्ता मुक्तये साधकस्य हि॥",
    transliteration: "Dīkṣā brahmamayī proktā brahma-bhāva-pradāyinī; Sad-guroḥ kṛpayā prāptā muktye sādhakasya hi.",
    meaning: "Diksha is called Brahmic and bestows Brahmic awareness. It is received by the seeker through the grace of the sadguru.",
    context: "Connects diksha to Brahmic realization through guru's grace."
  },
  {
    id: 89,
    sanskrit: "सत्सङ्गदीक्षया प्राप्तं ब्रह्मविद्याफलं शुभम्।
ज्ञेयमेतद्बुधैर्नित्यं भक्त्या युक्त्या च भावना॥",
    transliteration: "Satsanga-dīkṣayā prāptaṁ brahma-vidyā-phalaṁ śubham; Jñeyam etad budhair nityaṁ bhaktyā yuktyā ca bhāvanā.",
    meaning: "By satsang diksha, the noble fruit of Brahmavidya is attained. The wise should understand this through devotion, logic, and feeling.",
    context: "Urges the wise to comprehend diksha with heart and reason."
  },
  {
    id: 90,
    sanskrit: "सत्सङ्गदीक्षा देया हि शीलवृत्तसमन्विते।
सद्गुरोः प्रियभक्ताय शान्ताय विनयेन च॥",
    transliteration: "Satsanga-dīkṣā deyā hi śīla-vṛtta-samanvite; Sad-guroḥ priya-bhaktāya śāntāya vinayena ca.",
    meaning: "Satsang diksha should be given to one with virtue, discipline, peace, humility, and devotion to the sadguru.",
    context: "Lists qualities of a worthy recipient of satsang diksha."
  },
  {
    id: 91,
    sanskrit: "सद्गुरोः प्रियभक्ताय देया दीक्षा विधेन च।
सर्वलक्षणयुक्ताय मोक्षकामाय धीमते॥",
    transliteration: "Sad-guroḥ priya-bhaktāya deyā dīkṣā vidhena ca; Sarva-lakṣaṇa-yuktāya mokṣa-kāmāya dhīmate.",
    meaning: "Diksha should be given according to tradition to the dear devotee of the guru, who possesses all virtues and desires liberation.",
    context: "Highlights the qualifications for receiving diksha."
  },
  {
    id: 92,
    sanskrit: "सर्वेषामपि वर्णानां शीलवृत्तसमन्विते।
वर्णाश्रमविहीनाय देया दीक्षा समाहिते॥",
    transliteration: "Sarveṣām api varṇānāṁ śīla-vṛtta-samanvite; Varṇāśrama-vihīnāya deyā dīkṣā samāhite.",
    meaning: "Diksha may be given to individuals of all varnas who are virtuous and disciplined — even to those outside the varnāśrama system, if focused.",
    context: "Expands diksha eligibility beyond traditional caste."
  },
  {
    id: 93,
    sanskrit: "दीक्षा शक्तिप्रदा प्रोक्ता भक्तिप्राप्त्यै च साधनम्।
मोक्षणं प्रतिपत्त्यर्थं ज्ञानहेतुरिहोच्यते॥",
    transliteration: "Dīkṣā śakti-pradā proktā bhakti-prāptyai ca sādhanam; Mokṣaṇaṁ pratipatt-yarthaṁ jñāna-hetur ihocyate.",
    meaning: "Diksha imparts spiritual power, aids in attaining devotion, and leads to liberation. It is a source of knowledge.",
    context: "Describes diksha as energizing and essential."
  },
  {
    id: 94,
    sanskrit: "दीक्षां लभेत भक्तः सन्मार्गगामी सतां मतः।
नित्यं दीक्षामुपासीत सत्सङ्गार्थं स्वशुद्धये॥",
    transliteration: "Dīkṣāṁ labheta bhaktaḥ sanmārga-gāmī satāṁ mataḥ; Nityaṁ dīkṣām upāsīta satsangārthaṁ sva-śuddhaye.",
    meaning: "A devotee walking the noble path should receive diksha as per the wise. He should revere it daily for satsang and inner purity.",
    context: "Calls for lifelong reverence and inner refinement through diksha."
  },
  {
    id: 95,
    sanskrit: "दीक्षया ब्रह्मबुद्धिः स्यान्मोक्षणं च सुदुर्लभम्।
सुलभं तद्भवेत् पुण्यैः सत्सङ्गेन च साधनैः॥",
    transliteration: "Dīkṣayā brahma-buddhiḥ syān mokṣaṇaṁ ca su-durlabham; Sulabhaṁ tad bhavet puṇyaiḥ satsangena ca sādhanaiḥ.",
    meaning: "Diksha fosters Brahmic understanding and makes rare liberation accessible through virtue, satsang, and spiritual effort.",
    context: "Ties diksha to the possibility of liberation through right effort."
  },
  {
    id: 96,
    sanskrit: "दीक्षा ब्रह्मविदा देया सद्वृत्ताय समाहिते।
व्रतानुष्ठानयुक्ताय मुमुक्षोः परितोषतः॥",
    transliteration: "Dīkṣā brahma-vidā deyā sad-vṛttāya samāhite; Vratānuṣṭhāna-yuktāya mumukṣoḥ paritoṣataḥ.",
    meaning: "A Brahmavidya guru should give diksha to a virtuous, focused seeker who faithfully follows vows and earns his approval.",
    context: "Emphasizes guru discretion and disciple discipline."
  },
  {
    id: 97,
    sanskrit: "मन्त्रदीक्षा विशेषेण शिष्याय प्रददाति यः।
ब्रह्मविद्याप्रसाराय स ज्ञेयः सत्सङ्गदीक्षितः॥",
    transliteration: "Mantra-dīkṣā viśeṣeṇa śiṣyāya pradadāti yaḥ; Brahma-vidyā-prasārāya sa jñeyaḥ satsanga-dīkṣitaḥ.",
    meaning: "One who grants mantra-diksha to a disciple specifically to spread Brahmavidya is known as a satsang-initiated teacher.",
    context: "Recognizes the teacher dedicated to spiritual transmission."
  },
  {
    id: 98,
    sanskrit: "दीक्षा ब्रह्मविदां श्रेष्ठा ज्ञानविज्ञानशालिनी।
श्रद्धाभक्तियुता नित्यं पुण्यदा मोक्षदायिनी॥",
    transliteration: "Dīkṣā brahma-vidāṁ śreṣṭhā jñāna-vijñāna-śālinī; Śraddhā-bhakti-yutā nityaṁ puṇya-dā mokṣa-dāyinī.",
    meaning: "Diksha from the best Brahmavidyas shines with wisdom and science. Accompanied by faith and devotion, it gives virtue and liberation.",
    context: "Glorifies the potent and liberating guru-given diksha."
  },
  {
    id: 99,
    sanskrit: "सत्सङ्गदीक्षा सदा स्या देया साधुसमागमे।
श्रद्धया भक्तियुक्तेन शिष्येणाभ्यर्थितेन च॥",
    transliteration: "Satsanga-dīkṣā sadā syā deyā sādhu-samāgame; Śraddhayā bhakti-yuktena śiṣyeṇābhyarthitena ca.",
    meaning: "Satsang diksha should always be given in saintly company to a faithful, devotional disciple who earnestly seeks it.",
    context: "Encourages communal and sincere diksha tradition."
  },
  {
    id: 100,
    sanskrit: "सत्सङ्गदीक्षया सिद्धिं लभते मानवो ध्रुवम्।
गुरोः कृपाप्रसादेन मोक्षमप्येव निश्चितम्॥",
    transliteration: "Satsanga-dīkṣayā siddhiṁ labhate mānavo dhruvam; Guroḥ kṛpā-prasādena mokṣam apy eva niścitam.",
    meaning: "Through satsang diksha, a human surely attains perfection. By the guru’s grace, even moksha is certainly achieved.",
    context: "Affirms satsang diksha as the path to both success and salvation."
  },
  {
    id: 101,
    sanskrit: "गुरोः समर्पिता दीक्षा शिष्येण श्रद्धयान्विता।
सदा कुर्वन्नयं भक्त्या लभते ब्रह्मशान्तिदम्॥",
    transliteration: "Guroḥ samarpitā dīkṣā śiṣyeṇa śraddhayānvitā; Sadā kurvan-nayaṁ bhaktyā labhate brahma-śāntidam.",
    meaning: "When diksha is offered with faith to the guru and practiced with devotion, the disciple attains peace rooted in Brahman.",
    context: "Describes the benefit of devotional commitment to diksha."
  },
  {
    id: 102,
    sanskrit: "दीक्षा धर्मप्रवृत्त्यर्थं ब्रह्मभावविवृद्धये।
भक्त्यै च मोक्षणायैव देया सद्गुरुणा बुधैः॥",
    transliteration: "Dīkṣā dharma-pravṛttyarthaṁ brahma-bhāva-vivṛddhaye; Bhaktyai ca mokṣaṇāyaiva deyā sad-guruṇā budhaiḥ.",
    meaning: "Diksha should be given by wise sadgurus to inspire dharma, increase Brahmic awareness, foster devotion, and ensure moksha.",
    context: "Outlines the wise intent behind imparting diksha."
  },
  {
    id: 103,
    sanskrit: "सद्गुरोः कृपया दीक्षा लभ्यते ज्ञानवर्धिनी।
सा भक्त्या पूज्यते नित्यं शिष्येण स्वप्रबोधिना॥",
    transliteration: "Sad-guroḥ kṛpayā dīkṣā labhyate jñāna-vardhinī; Sā bhaktyā pūjyate nityaṁ śiṣyeṇa sva-prabodhinā.",
    meaning: "Diksha that enhances knowledge is attained by the grace of the sadguru. The awakened disciple worships it daily with devotion.",
    context: "Praises daily reverence for diksha by an enlightened student."
  },
  {
    id: 104,
    sanskrit: "दीक्षया स्वात्मनिष्ठा च गुरुभक्तिः सुदृढा भवेत्।
ब्रह्मभावः सदा स्थायो मुक्तिर्जीवन्मृतेः परम्॥",
    transliteration: "Dīkṣayā svātma-niṣṭhā ca guru-bhaktiḥ sudṛḍhā bhavet; Brahma-bhāvaḥ sadā sthāyo muktir jīvan-mṛteḥ param.",
    meaning: "Diksha establishes steadfast self-abidance and deep guru-bhakti. Brahmic awareness becomes constant, ensuring both living and final liberation.",
    context: "Links diksha to continuous Brahmic realization and liberation."
  },
  {
    id: 105,
    sanskrit: "दीक्षार्थं व्रतमारभ्य शिष्यः कुर्यादुपासनाम्।
गुरोः संनिधिमासाद्य भावयुक्तः समाहितः॥",
    transliteration: "Dīkṣārthaṁ vrata-mārabhya śiṣyaḥ kuryād upāsanām; Guroḥ saṁnidhim āsādya bhāva-yuktaḥ samāhitaḥ.",
    meaning: "For diksha, the disciple should undertake vows and worship. Reaching the guru’s presence, he should be full of feeling and concentration.",
    context: "Prescribes preparatory attitude and setting for diksha."
  },
  {
    id: 106,
    sanskrit: "दीक्षायाः करणं श्रेष्ठं गुरोः संकल्प एव हि।
तस्मिन्सिद्धे समारम्भे शिष्यः प्राप्नोत्यवाप्सितम्॥",
    transliteration: "Dīkṣāyāḥ karaṇaṁ śreṣṭhaṁ guroḥ saṅkalpa eva hi; Tasmin siddhe samārambhe śiṣyaḥ prāpnoty avāpsitam.",
    meaning: "The guru’s resolve is the highest power behind diksha. With his successful intention, the disciple achieves his aspiration.",
    context: "Asserts the guru’s intent as central to diksha’s success."
  },
  {
    id: 107,
    sanskrit: "गुरोः संकल्पसम्भूता दीक्षा साक्षान्महाफला।
सा ज्ञानं मोक्षमेत्येव तेन भूयो न जन्मनः॥",
    transliteration: "Guroḥ saṅkalpa-sambhūtā dīkṣā sākṣān mahā-phalā; Sā jñānaṁ mokṣam ety eva tena bhūyo na janmanaḥ.",
    meaning: "Born from the guru’s resolve, diksha yields great fruit — knowledge and moksha. No further birth follows it.",
    context: "Links true diksha to knowledge, liberation, and no rebirth."
  },
  {
    id: 108,
    sanskrit: "दीक्षा यः कुरुते श्रद्धया पूज्यया सह।
तं ब्रह्मविद्यया युक्तं वन्दे तं गुरुमात्मवित्॥",
    transliteration: "Dīkṣā yaḥ kurute śraddhayā pūjyayā saha; Taṁ brahma-vidyayā yuktaṁ vande taṁ gurum ātmavit.",
    meaning: "One who grants diksha with reverence and knowledge of Brahman — I bow to that guru who knows the ātma.",
    context: "Pays reverence to the guru who bestows sacred diksha."
  },
  {
    id: 109,
    sanskrit: "दीक्षामाहात्म्यमेतच्च प्रोक्तं ब्रह्मविदां मतम्।
एवं जानाति यो नित्यं स मुक्तो नात्र संशयः॥",
    transliteration: "Dīkṣā-māhātmyam etac ca proktaṁ brahma-vidāṁ matam; Evaṁ jānāti yo nityaṁ sa mukto nātra saṁśayaḥ.",
    meaning: "This glory of diksha is affirmed by the knower of Brahman. One who understands this daily is surely liberated.",
    context: "Concludes the section by affirming diksha’s liberating power."
  },
  {
    id: 110,
    sanskrit: "श्रीमद्सत्सङ्गदीक्षाया वर्णनं ब्रह्मविद्यया।
कृतं शुभाय मुमुक्षूणां तेन स्यात् परमा गतिः॥",
    transliteration: "Śrīmad-satsanga-dīkṣāyā varṇanaṁ brahma-vidyayā; Kṛtaṁ śubhāya mumukṣūṇāṁ tena syāt paramā gatiḥ.",
    meaning: "This description of the sacred satsang diksha through Brahmavidya is composed for the benefit of seekers — it leads to the supreme goal.",
    context: "Marks the closure of a section praising satsang diksha."
  },
  {
    id: 111,
    sanskrit: "निष्ठां सत्सङ्गदीक्षायां कृत्वा श्रद्धासमन्वितः।
स्वात्मानं ब्रह्मरूपं च सदा पश्येत् समाहितः॥",
    transliteration: "Niṣṭhāṁ satsanga-dīkṣāyāṁ kṛtvā śraddhā-samanvitaḥ; Svātmānaṁ brahma-rūpaṁ ca sadā paśyet samāhitaḥ.",
    meaning: "With firm faith in satsang diksha, one should always remain focused and view oneself as Brahman.",
    context: "Encourages steadfast self-realization through diksha."
  },
  {
    id: 112,
    sanskrit: "गुरोः कृपामयं दृष्ट्वा स्वात्मा ब्रह्मस्वरूपकम्।
संसारदुःखमूलानां नाशं कुर्यादविक्रियः॥",
    transliteration: "Guroḥ kṛpāmayaṁ dṛṣṭvā svātmā brahma-svarūpakam; Saṁsāra-duḥkha-mūlānāṁ nāśaṁ kuryād avikriyaḥ.",
    meaning: "Seeing one’s self as Brahman through the guru’s grace, one steadily destroys the root causes of worldly sorrow.",
    context: "Points to the liberating power of grace-based realization."
  },
  {
    id: 113,
    sanskrit: "श्रद्धया सत्सङ्गदीक्षा नित्यं स्मर्तव्या बुधैः।
सा मुक्तिपथदा प्रोक्ता ब्रह्मविद्याविशारदैः॥",
    transliteration: "Śraddhayā satsanga-dīkṣā nityaṁ smartavyā budhaiḥ; Sā mukti-pathadā proktā brahma-vidyā-viśāradaiḥ.",
    meaning: "The wise should daily remember satsang diksha with faith. It is said by Brahmavidya experts to be the giver of liberation.",
    context: "Advises daily remembrance of diksha as a liberating aid."
  },
  {
    id: 114,
    sanskrit: "गुरोः कृपाविनिर्मुक्तं ब्रह्मविद्याविशारदम्।
सत्सङ्गदीक्षितं दृष्ट्वा साक्षाद्देवं स्मरेज्जनः॥",
    transliteration: "Guroḥ kṛpā-vinir-muktaṁ brahma-vidyā-viśāradam; Satsanga-dīkṣitaṁ dṛṣṭvā sākṣād devaṁ smarej janaḥ.",
    meaning: "Seeing a satsang-initiated knower of Brahmavidya blessed by the guru’s grace, one should remember God himself.",
    context: "Praises the realized disciple as a living embodiment of divinity."
  },
  {
    id: 115,
    sanskrit: "सत्सङ्गदीक्षितं पुंसं दृष्ट्वा स्पृष्ट्वा च भावतः।
शुद्धिः स्यान्मानसं ज्ञानं भक्तिः श्रद्धा च वर्धते॥",
    transliteration: "Satsanga-dīkṣitaṁ puṁsaṁ dṛṣṭvā spṛṣṭvā ca bhāvataḥ; Śuddhiḥ syān mānasaṁ jñānaṁ bhaktiḥ śraddhā ca vardhate.",
    meaning: "By seeing or touching a satsang-initiated devotee with feeling, one gains mental purity, knowledge, devotion, and increased faith.",
    context: "Describes the spiritual benefits of contact with a diksha recipient."
  },
  {
    id: 116,
    sanskrit: "दीक्षा ब्रह्मविदा देया शान्ताय विनयेन च।
सद्गुणैः संयुतायैव मुक्तिकामाय धीमते॥",
    transliteration: "Dīkṣā brahma-vidā deyā śāntāya vinayena ca; Sad-guṇaiḥ saṁyutāyaiva mukti-kāmāya dhīmate.",
    meaning: "Diksha should be given by a Brahmavidya master to a peaceful, humble, virtuous, and intelligent seeker of liberation.",
    context: "Reiterates the disciple’s qualifications for receiving diksha."
  },
  {
    id: 117,
    sanskrit: "सत्सङ्गदीक्षया साक्षात्प्राप्तं ब्रह्मविदां फलम्।
ज्ञेयमेतद्बुधैर्नित्यं भावयुक्त्या समन्वितम्॥",
    transliteration: "Satsanga-dīkṣayā sākṣāt prāptaṁ brahma-vidāṁ phalam; Jñeyam etad budhair nityaṁ bhāva-yuktyā samanvitam.",
    meaning: "Through satsang diksha, the fruit of Brahmavidya is directly attained. The wise should know this always with deep feeling.",
    context: "Asserts direct attainment of knowledge through diksha."
  },
  {
    id: 118,
    sanskrit: "सत्सङ्गदीक्षितो जन्तुः सेवकः सत्सद्गुरोः सदा।
गुरुभक्त्या परो नित्यं पूज्यः स्यान्मुक्तिकाङ्क्षिभिः॥",
    transliteration: "Satsanga-dīkṣito jantuḥ sevakaḥ sat-sad-guroḥ sadā; Guru-bhaktyā paro nityaṁ pūjyaḥ syān mukti-kāṅkṣibhiḥ.",
    meaning: "One initiated into satsang is ever the servant of the true sadguru. Deep in guru-bhakti, he is worthy of worship by those who seek moksha.",
    context: "Glorifies the status of a sincere satsang initiate."
  },
  {
    id: 119,
    sanskrit: "सत्सङ्गदीक्षितं भक्तं पूजयित्वा निरन्तरम्।
श्रद्धया संप्रयुक्तेन पश्येत् ब्रह्म स्वरूपकम्॥",
    transliteration: "Satsanga-dīkṣitaṁ bhaktaṁ pūjayitvā nirantaram; Śraddhayā saṁprayuktena paśyet brahma svarūpakam.",
    meaning: "Worshipping a satsang-initiated devotee with unceasing faith, one should see him as a form of Brahman.",
    context: "Encourages seeing sanctity in dedicated devotees."
  },
  {
    id: 120,
    sanskrit: "सत्सङ्गदीक्षया युक्तः साधकः श्रद्धया युतः।
गच्छेत् सिद्धिं परां नित्यं भवबन्धविनाशिनीम्॥",
    transliteration: "Satsanga-dīkṣayā yuktaḥ sādhakaḥ śraddhayā yutaḥ; Gacchet siddhiṁ parāṁ nityaṁ bhava-bandha-vināśinīm.",
    meaning: "The practitioner who is empowered by satsang diksha and faith attains supreme success, which forever destroys worldly bondage.",
    context: "Affirms diksha as a lifelong path to ultimate freedom."
  },
  {
    id: 121,
    sanskrit: "दीक्षा देया द्विजातीनां शीलवृत्तसमन्विते।
सद्गुणैः संयुतायैव मुक्तिकामाय धीमते॥",
    transliteration: "Dīkṣā deyā dvijātīnām śīla-vṛtta-samanvite; Sad-guṇaiḥ saṁyutāyaiva mukti-kāmāya dhīmate.",
    meaning: "Diksha should be given to dvijas (twice-born) who are virtuous, disciplined, and wise seekers of liberation.",
    context: "Restates eligibility criteria for receiving diksha."
  },
  {
    id: 122,
    sanskrit: "सत्सङ्गदीक्षया साक्षान्मोक्षणं लभ्यते ध्रुवम्।
सत्सङ्गदीक्षितो भक्तः प्राप्नुयात्परमां गतिम्॥",
    transliteration: "Satsanga-dīkṣayā sākṣān mokṣaṇaṁ labhyate dhruvam; Satsanga-dīkṣito bhaktaḥ prāpnuyāt paramāṁ gatim.",
    meaning: "Liberation is surely attained through satsang diksha. A devotee thus initiated reaches the supreme goal.",
    context: "Confirms the efficacy of satsang diksha for liberation."
  },
  {
    id: 123,
    sanskrit: "शान्तः शीलसमायुक्तः श्रद्धाभक्तिसमन्वितः।
सत्सङ्गदीक्षया युक्तः स्यात्सद्गुरुपरायणः॥",
    transliteration: "Śāntaḥ śīla-samāyuktaḥ śraddhā-bhakti-samanvitaḥ; Satsanga-dīkṣayā yuktaḥ syāt sad-guru-parāyaṇaḥ.",
    meaning: "Peaceful, virtuous, faithful, and devoted — one who is initiated into satsang becomes completely dedicated to the true guru.",
    context: "Describes the ideal state of a satsang-initiated devotee."
  },
  {
    id: 124,
    sanskrit: "सत्सङ्गदीक्षितं भक्तं सेवकं धर्मनिष्ठया।
सर्वदा पूजयेद्भक्त्या स हि वन्द्यः सदा नरैः॥",
    transliteration: "Satsanga-dīkṣitaṁ bhaktaṁ sevakaṁ dharma-niṣṭhayā; Sarvadā pūjayed bhaktyā sa hi vandyaḥ sadā naraiḥ.",
    meaning: "A satsang-initiated, dharmic devotee should always be worshipped with devotion — such a person is worthy of reverence by all.",
    context: "Encourages reverence for dedicated spiritual practitioners."
  },
  {
    id: 125,
    sanskrit: "दीक्षायां यस्य निष्ठा स्यात्स श्रद्धासमन्वितः।
स पश्यति सदा ब्रह्म स्वात्मानं निर्विकल्पतः॥",
    transliteration: "Dīkṣāyāṁ yasya niṣṭhā syāt sa śraddhā-samanvitaḥ; Sa paśyati sadā brahma svātmānaṁ nirvikalpataḥ.",
    meaning: "One with steadfastness and faith in diksha constantly sees Brahman — their own self — without duality.",
    context: "Shows how unwavering diksha leads to non-dual realization."
  },
  {
    id: 126,
    sanskrit: "सत्सङ्गदीक्षया मुक्तिर्भवबन्धविनाशिनी।
प्राप्ता भगवत्कृपया गुरोः संकल्पसम्भवा॥",
    transliteration: "Satsanga-dīkṣayā muktir bhava-bandha-vināśinī; Prāptā bhagavat-kṛpayā guroḥ saṅkalpa-sambhavā.",
    meaning: "Liberation, which destroys worldly bondage, is attained by satsang diksha — born of the guru’s resolve and God’s grace.",
    context: "Credits divine and guru’s will behind the liberation via diksha."
  },
  {
    id: 127,
    sanskrit: "गुरुणा दर्शिता दीक्षा मोक्षदायिनि शक्तितः।
सा वन्द्या सर्वथैव स्यान्नमो भक्त्या पुनः पुनः॥",
    transliteration: "Guruṇā darśitā dīkṣā mokṣa-dāyini śaktitaḥ; Sā vandyā sarvathaiva syān namo bhaktyā punaḥ punaḥ.",
    meaning: "The diksha revealed by the guru is inherently liberating and powerful. It must be reverently worshipped again and again.",
    context: "Advocates repeated reverence for guru-given diksha."
  },
  {
    id: 128,
    sanskrit: "शास्त्रसम्मता दीक्षा गुरुणा या प्रदायिनी।
सा मुक्तिफलदा प्रोक्ता भक्त्या धार्या मुमुक्षुणा॥",
    transliteration: "Śāstra-sammatā dīkṣā guruṇā yā pradāyinī; Sā mukti-phaladā proktā bhaktyā dhāryā mumukṣuṇā.",
    meaning: "The diksha imparted by the guru as per scriptures grants liberation. A seeker of moksha must uphold it with devotion.",
    context: "Prescribes scripturally sound diksha as the path to freedom."
  },
  {
    id: 129,
    sanskrit: "दीक्षा ब्रह्मविवेकाय आत्मबुद्धिविवृद्धये।
सद्गुरोः कृपया लब्धा मुक्ति हेतुं समाचरेत्॥",
    transliteration: "Dīkṣā brahma-vivekāya ātma-buddhi-vivṛddhaye; Sad-guroḥ kṛpayā labdhā mukti hetuṁ samācaret.",
    meaning: "Diksha received by the grace of the sadguru leads to discernment of Brahman and growth in self-awareness. It must be practiced as a cause of liberation.",
    context: "Links diksha to enhanced understanding and eventual moksha."
  },
  {
    id: 130,
    sanskrit: "सत्सङ्गदीक्षा सा देया साधकाय विशुद्धये।
शान्ताय विनयायुक्ता भक्तियुक्ताय धीमते॥",
    transliteration: "Satsanga-dīkṣā sā deyā sādhakāya viśuddhaye; Śāntāya vinayā-yuktā bhakti-yuktāya dhīmate.",
    meaning: "Satsang diksha should be given for the purification of a practitioner who is peaceful, humble, devoted, and wise.",
    context: "Summarizes qualifications and purpose for bestowing diksha."
  }
