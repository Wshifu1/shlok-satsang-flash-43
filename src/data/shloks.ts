
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
    sanskrit: "गुरुब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः। गुरुः साक्षात् परब्रह्म तस्मै श्रीगुरवे नमः॥",
    transliteration: "Gurur brahmā gurur viṣṇuḥ gurur devo maheśvaraḥ | Guruḥ sākṣāt parabrahma tasmai śrī gurave namaḥ ||",
    meaning: "The Guru is Brahma, the Guru is Vishnu, the Guru is Lord Shiva. The Guru is verily the Supreme Brahman. I bow to that revered Guru.",
    context: "This fundamental shlok establishes the divine nature of the Guru and is often recited at the beginning of spiritual practices."
  },
  {
    id: 2,
    sanskrit: "सत्संगत्वे निस्संगत्वं निस्संगत्वे निर्मोहत्वम्। निर्मोहत्वे निश्चलतत्त्वं निश्चलतत्त्वे जीवन्मुक्तिः॥",
    transliteration: "Satsaṅgatve nissaṅgatvaṁ nissaṅgatve nirmohattvam | Nirmohatve niścalatattvaṁ niścalatattve jīvanmuktiḥ ||",
    meaning: "From good company comes non-attachment, from non-attachment comes freedom from delusion, from freedom from delusion comes steadiness in truth, and from steadiness in truth comes liberation while living.",
    context: "This shlok explains the progressive stages of spiritual development through satsang (good company)."
  },
  {
    id: 3,
    sanskrit: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥",
    transliteration: "Sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ | Sarve bhadrāṇi paśyantu mā kaścid duḥkhabhāg bhavet ||",
    meaning: "May all beings be happy, may all beings be free from disease. May all beings witness auspiciousness, may none partake in suffering.",
    context: "A universal prayer for the welfare of all beings, expressing the spirit of compassion and universal love."
  },
  {
    id: 4,
    sanskrit: "वसुधैव कुटुम्बकम्",
    transliteration: "Vasudhaiva kuṭumbakam",
    meaning: "The world is one family.",
    context: "This profound concept from the Upanishads emphasizes the unity of all existence and the universal brotherhood of humanity."
  },
  {
    id: 5,
    sanskrit: "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः। यत्रैतास्तु न पूज्यन्ते सर्वास्तत्राफलाः क्रियाः॥",
    transliteration: "Yatra nāryastu pūjyante ramante tatra devatāḥ | Yatraitāstu na pūjyante sarvāstatrāphalāḥ kriyāḥ ||",
    meaning: "Where women are honored, there the gods are pleased. Where they are not honored, all actions remain fruitless.",
    context: "This shlok emphasizes the importance of respecting and honoring the feminine principle in spiritual and social life."
  }
];
