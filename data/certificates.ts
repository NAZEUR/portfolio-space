export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  category: "Dicoding" | "Kaggle" | "Bangkit & Kampus Merdeka" | "Kejuaraan" | "Lainnya";
  image: string;
};

export const certificates: Certificate[] = [
  // --- DICODING ---
  {
    id: "dicoding-1",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    category: "Dicoding",
    image: "/images/certificates/dicoding-101.webp",
  },
  {
    id: "dicoding-2",
    title: "Belajar Dasar Pemrograman",
    issuer: "Dicoding",
    category: "Dicoding",
    image: "/images/certificates/dicoding-dasar-pemrograman.webp",
  },
  {
    id: "dicoding-3",
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    issuer: "Dicoding",
    category: "Dicoding",
    image: "/images/certificates/dicoding-android-pemula.webp",
  },
  {
    id: "dicoding-4",
    title: "Belajar Fundamental Aplikasi Android",
    issuer: "Dicoding",
    category: "Dicoding",
    image: "/images/certificates/dicoding-fundamental android.webp",
  },
  {
    id: "dicoding-5",
    title: "Belajar Pengembangan Aplikasi Android Intermediate",
    issuer: "Dicoding",
    category: "Dicoding",
    image: "/images/certificates/dicoding-android intermediate.webp",
  },
  {
    id: "dicoding-6",
    title: "Dasar AI",
    issuer: "Dicoding",
    category: "Dicoding",
    image: "/images/certificates/dicoding-basic-ai.webp",
  },
  {
    id: "dicoding-7",
    title: "Machine Learning untuk Android",
    issuer: "Dicoding",
    category: "Dicoding",
    image: "/images/certificates/dicoding-ml-for-android.webp",
  },
  {
    id: "dicoding-8",
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding",
    category: "Dicoding",
    image: "/images/certificates/dicoding-git.webp",
  },
  {
    id: "dicoding-9",
    title: "Memulai Pemrograman dengan Kotlin",
    issuer: "Dicoding",
    category: "Dicoding",
    image: "/images/certificates/dicoding-kotlin.webp",
  },

  // --- KAGGLE ---
  {
    id: "kaggle-1",
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    category: "Kaggle",
    image: "/images/certificates/kaggle-intro.webp",
  },
  {
    id: "kaggle-2",
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
    category: "Kaggle",
    image: "/images/certificates/kaggle-intermediate-ml.webp",
  },
  {
    id: "kaggle-3",
    title: "Python",
    issuer: "Kaggle",
    category: "Kaggle",
    image: "/images/certificates/kaggle-python.webp",
  },
  {
    id: "kaggle-4",
    title: "Pandas",
    issuer: "Kaggle",
    category: "Kaggle",
    image: "/images/certificates/kaggle-pandas.webp",
  },
  {
    id: "kaggle-5",
    title: "Data Visualization",
    issuer: "Kaggle",
    category: "Kaggle",
    image: "/images/certificates/kaggle-data-visualization.webp",
  },

  // --- BANGKIT & KAMPUS MERDEKA ---
  {
    id: "bangkit-1",
    title: "Bangkit Academy Distinction",
    issuer: "Bangkit Academy",
    category: "Bangkit & Kampus Merdeka",
    image: "/images/certificates/bangkit.webp",
  },
  {
    id: "bangkit-2",
    title: "Studi Independen (MSIB)",
    issuer: "Kampus Merdeka",
    category: "Bangkit & Kampus Merdeka",
    image: "/images/certificates/msib.webp",
  },
  {
    id: "bangkit-3",
    title: "Mentor / Fasilitator",
    issuer: "Bangkit Academy",
    category: "Bangkit & Kampus Merdeka",
    image: "/images/certificates/mentor.webp",
  },
  {
    id: "bangkit-4",
    title: "PIC / Koordinator",
    issuer: "Bangkit Academy",
    category: "Bangkit & Kampus Merdeka",
    image: "/images/certificates/pic.webp",
  },

  // --- KEJUARAAN ---
  {
    id: "kejurda-1",
    title: "Kejuaraan Daerah Piala Gubernur",
    issuer: "Pemerintah Provinsi",
    category: "Kejuaraan",
    image: "/images/certificates/kejurda-gubernur.webp",
  },
  {
    id: "kejurda-2",
    title: "Kejuaraan Daerah KKI",
    issuer: "KKI",
    category: "Kejuaraan",
    image: "/images/certificates/kejurda-kki.webp",
  },
  {
    id: "kejurda-3",
    title: "Kejuaraan Daerah LEMKARI",
    issuer: "LEMKARI",
    category: "Kejuaraan",
    image: "/images/certificates/kejurda-lemkari.webp",
  },

  // --- LAINNYA ---
  {
    id: "lainnya-1",
    title: "Asisten Laboratorium",
    issuer: "Fasilkom Unsri",
    category: "Lainnya",
    image: "/images/certificates/aslab.webp",
  },
  {
    id: "lainnya-2",
    title: "Google Developer Student Clubs (GDSC)",
    issuer: "GDSC",
    category: "Lainnya",
    image: "/images/certificates/gdsc.webp",
  },
  {
    id: "lainnya-3",
    title: "Himpunan Mahasiswa Informatika (HMIF)",
    issuer: "HMIF Fasilkom Unsri",
    category: "Lainnya",
    image: "/images/certificates/hmif.webp",
  },
  {
    id: "lainnya-4",
    title: "IFFEST",
    issuer: "Informatics Festival",
    category: "Lainnya",
    image: "/images/certificates/iffest.webp",
  },
  {
    id: "lainnya-5",
    title: "Techpo",
    issuer: "Tech Event",
    category: "Lainnya",
    image: "/images/certificates/techpo.webp",
  },
  {
    id: "lainnya-6",
    title: "TensorFlow for Machine Learning",
    issuer: "Udemy",
    category: "Lainnya",
    image: "/images/certificates/udemy-tensorflow.webp",
  }
];
