import { tisAsset } from '@/lib/asset'

/** Copy in this file is retained from tis.edu.in. */

export const heroPhotos = [
  { src: tisAsset('polo.973ddbae.webp'), alt: 'Students on horseback during a polo session' },
  { src: tisAsset('swimming.6fc81e65.webp'), alt: 'A student swimming in the school pool' },
  { src: tisAsset('dance.88843edb.webp'), alt: 'Students performing a dance on stage' },
] as const

export const campusFacts = [
  { value: '22', label: 'Acre pollution-free campus', icon: tisAsset('campus.e67b1a0a.png') },
  { value: '16+', label: 'Olympic sports', icon: tisAsset('sports.e695b690.png') },
  { value: '24×7', label: 'Medical assistance', icon: tisAsset('medical.e87071fe.png') },
  { value: '6:1', label: 'Student–teacher ratio', icon: tisAsset('ratio.6ca07c6a.png') },
] as const

const sportFiles = [
  ['Archery', 'archery.7a805345.png'],
  ['Cycling', 'cycling.80dbb9b1.png'],
  ['Hockey', 'hockey.219fe552.png'],
  ['Swimming', 'swimming.d4285534.png'],
  ['Taekwondo', 'taekwando.86e26406.png'],
  ['Football', 'football.ca61e5d0.png'],
  ['Shooting Range', 'shooting.b0b11d74.png'],
  ['Horse Riding', 'horseRiding.8f259127.png'],
  ['Billiards', 'billiards-single.a1e831c6.png'],
  ['Squash', 'squash.ffa0360a.png'],
  ['Volleyball', 'volleyball.045be884.png'],
  ['Basketball', 'basketball.fa70909d.png'],
  ['Cricket', 'Cricket.b06b18ca.png'],
  ['Lawn Tennis', 'lawnTennis.7b3b894a.png'],
  ['Badminton', 'badminton.a314ff00.png'],
  ['Table Tennis', 'tableTennis.61f6bd56.png'],
] as const

export const sports = sportFiles.map(([name, file]) => ({ name, icon: tisAsset(file) }))

export const studentVoices = [
  {
    quote: 'We feel supported in what we do and nudged further to do more',
    body: 'At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.',
    photo: tisAsset('ladyInPink.c358aa8f.png'),
  },
  {
    quote: 'Tulas helped me thrive and become the best version of myself',
    body: 'When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.',
    photo: tisAsset('manInBlue.46316cbf.png'),
  },
] as const

export const rankings = [
  { rank: '#1', scope: 'In Dehradun', detail: 'Co-Educational Boarding School in Dehradun', source: 'Education Today' },
  { rank: '#1', scope: 'In North India', detail: 'Co-Educational Boarding School in North India', source: 'Outlook' },
  { rank: '#2', scope: 'In Uttarakhand', detail: 'Co-Educational Boarding School in North India', source: 'Education Today' },
  { rank: '#4', scope: 'In India', detail: 'Co-Educational Boarding School in India', source: 'Education Today' },
] as const

export type Visitor = { name: string; role: string; photo: string }

const visitor = (name: string, role: string, file: string): Visitor => ({ name, role, photo: tisAsset(file) })

export const visitorGroups = [
  {
    id: 'sports',
    label: 'Sportspersons & influencers',
    people: [
      visitor('Sakshi Malik', 'Olympic Bronze Medallist in Wrestling (Rio 2016), Padma Shri 2017', 'SakshiMalik.91174bf4.webp'),
      visitor('Vishesh Bhriguvanshi', 'Indian Basketball Team Captain, 3x3 Gold at the Asian Beach Games 2008', 'VisheshBhriguvanshi.52af8bfd.webp'),
      visitor('Abhishek Verma', 'Arjuna Awardee, Asian Games Gold Medallist in Archery 2013', 'AbhishekVerma.18f9d349.webp'),
      visitor('Aditi Gopichand Swami', 'Arjuna Awardee, World Champion in Archery 2024', 'AditiGopichandSwami.b7afa246.webp'),
      visitor('Ojas Deotale', 'Arjuna Awardee 2023 and world champion in Archery', 'OjasPravinDeotale.1d2e01cc.webp'),
      visitor('Jeevan Jyot Singh Teja', 'Dronacharya Awardee in Archery 2022', 'JeevanJyotSinghTeja.9a07711c.webp'),
      visitor('Laxmi Agarwal', 'International Women Empowerment Award, Founder of The Laxmi Foundation', 'LakshmiAgarwal.7405df5d.webp'),
      visitor('Saurabh Joshi', 'Influencer with 30 million subscribers on YouTube', 'SaurabhJoshi.450ff5df.webp'),
    ],
  },
  {
    id: 'leaders',
    label: 'Leaders of India',
    people: [
      visitor('Shri Dharmendra Pradhan Ji', 'Union Minister of Education for India', 'DharmendraPradhan.cae1e9ae.webp'),
      visitor('Dr Ramesh Pokhriyal Nishank Ji', 'Former Union Education Minister, Former Chief Minister of Uttarakhand', 'RameshPokhriyalNishank.5f11fd77.webp'),
      visitor('Shri Bhagat Singh Koshyari Ji', 'Former Governor of Maharashtra and Goa, Former Chief Minister of Uttarakhand', 'BhagatSinghKoshyari.f996a329.webp'),
      visitor('Shri Trivendra Singh Rawat Ji', 'Member of Parliament & Former Chief Minister, Uttarakhand', 'TrivendraSinghRawat.c2e8d88b.webp'),
      visitor('Shri Dhan Singh Rawat Ji', 'Minister of Higher Education, Uttarakhand', 'DhanSinghRawat.f504bd14.webp'),
      visitor('Shri Subodh Uniyal Ji', 'Technical Education and Forest Minister, Uttarakhand', 'SubodhUniyal.25533860.webp'),
      visitor('Shri Anurag Tripathi Ji', 'CBSE Secretary', 'AnuragTripathi.a8e203b4.webp'),
      visitor('Shri Abhinav Kumar Ji', 'ADG and former DGP of Uttarakhand Police', 'AbhinavKumar.8cbdb15a.webp'),
    ],
  },
] as const

export type VisitorGroupId = (typeof visitorGroups)[number]['id']

export const parentReviews = [
  { name: 'Tashi Tsering', relation: 'F/O Jigmet Skaldon', text: 'I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.' },
  { name: 'Namita Agarwal', relation: 'M/O Krishna Agarwal', text: 'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.' },
  { name: 'Sandeep Kumar', relation: 'F/O Aryan', text: 'Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.' },
  { name: 'Amit Agrawal', relation: 'F/O Samruddhi Agrawal', text: "Being a parent it's a big challenge to find a Boarding School that qualifies your Parameters of Security, Health, Hygiene, Academics, Non Academics and Self discipline being key features." },
  { name: 'Ashu Arora', relation: 'M/O Manisha Changrani', text: 'It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.' },
  { name: 'Selendra K. Ajmera', relation: 'F/O Aman Ajmera', text: 'In the beginning it was very tough for me to send my son to a boarding school but the day I visited the campus the first thing which came to my mind was that this is the right place and right environment.' },
] as const

export const partnerLogos = [
  'Universidad.935e33e1.png',
  'yhnbepcntet.3b80eac6.jpg',
  'Universitat.f7fac869.jpg',
  'Cpi6.106c6037.jpg',
  'inseec.780a3115.png',
  'Trinty.31016999.png',
  'University.6c89dc70.png',
  'International_Award_for_Young_People_logo.a0d1c4fa.jpg',
  'lions.bf493cc1.png',
  'Universitas.d9db402c.png',
  'universityLogo.6e446aad.jpg',
].map(tisAsset)

export const classOptions = ['IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'].map((c) => `Class ${c}`)

export const stateOptions = [
  'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh',
  'Chhattisgarh', 'Dadra and Nagar Haveli', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
  'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
  'West Bengal', 'Other',
]
