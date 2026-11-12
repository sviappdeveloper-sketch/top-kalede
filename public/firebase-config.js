// =====================================================================
// Firebase ayarları
// Firebase konsolu → Proje ayarları → Genel → "Uygulamalarınız" → Web uygulaması
// bölümündeki değerleri buraya yapıştır. apiKey "BURAYA" olarak kaldıkça oyun
// sunucusuz DEMO modunda çalışır (veriler yalnızca bu tarayıcıda tutulur).
// =====================================================================
export const firebaseConfig = {
  apiKey: "BURAYA",
  authDomain: "top-kalede.web.app",
  projectId: "top-kalede",
  storageBucket: "top-kalede.firebasestorage.app",
  messagingSenderId: "BURAYA",
  appId: "BURAYA"
};

// Firebase JavaScript SDK sürümü (gstatic CDN)
export const FIREBASE_SDK = "12.12.0";
