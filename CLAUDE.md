# Top Kalede — Claude devir notu

Bu dosya, uygulamada hangi Claude hesabı veya oturumu çalışırsa çalışsın kaldığı yerden devam edebilmesi için tutulur.
GitHub: `sviappdeveloper-sketch/top-kalede`

## Çalışma kuralları (her oturumda uy)
- Kullanıcı kodlama bilmiyor ve Türkçe yazıyor. Türkçe ve sade cevap ver.
- Kullanıcı açıkça istemedikçe son kayıtlı sürümdeki hiçbir özelliği silme veya kaybetme. Değiştirmeden önce mevcut olanı diğer dallar dahil kontrol et.
- Uygulamaları birbirine karıştırma. Top Kalede, Top Potada'dan **ayrı bir uygulama**; Firebase, giriş ve mağaza ayarları birbirine karışmamalı.
- Geliştirici adını her yerde tam olarak **Svi App Developer** diye yaz. Site sviapp.com, iletişim adresi iletisim@sviapp.com.
- Derlemeyi teslim ederken yalnızca APK dosyasının kendisini gönder. Zip, rar veya yanında başka dosya olmasın.
- Tüm testlerde (TestFlight ve Play) sitaresivi@icloud.com test kullanıcısı olarak ekli olsun.
- Mağaza ve konsol adımlarını (AdMob, Play Console, App Store Connect, Firebase) mümkün olduğunca kendin yap.
- Derlemeler ücretsiz yoldan, GitHub Actions ile yapılıyor. Codemagic dakikaları bitti.
- **Bu dosyayı güncel tut:** Her oturumun sonunda yaptığın işi tarihiyle "Son işlemler" bölümünün en üstüne ekle, "Bekleyen işler" bölümünü güncelle, sonra commit'leyip push'la.

## Uygulama durumu
- Top Potada altyapısıyla yapılmış penaltı, frikik ve korner oyunu. Sürüm **1.2.1** (Android).
- Hedef: Top Potada'nın tüm özellikleri (online oyun, turnuva, lig, Google/Apple girişi, reklamlar) bu uygulamada da olacak ve ayrı bir uygulama olarak yayınlanacak.
- GitHub Actions iş akışları: `apk.yml`, `ios.yml`, `pages.yml`. Dallar: main, apk.

## Son işlemler (en yeni en üstte)
- 2026-11-23: Güvenlik: takma ad uzunluğu, lig seviyesi ve oda adı için sınırlar eklendi.
- 2026-11-12: Donma düzeltildi: yuvarlanan top beklenmiyor, oyun döngüsü korunuyor.
- 2026-11-12: Nişan alma değişti: önce hedef seçiliyor, sonra çekiliyor (güç ve yana çekişle falso). Tribün önbelleği eklendi.
- 2026-11-12: Yeni insan figürleri, frikik ve korner modları, falso eklendi.
- 2026-11-12: İlk sürüm: Top Potada altyapısıyla penaltı oyunu ve Android test imza anahtarı.

## Bekleyen işler / kontrol edilecekler
- Mağaza yayınının (App Store / Play) durumunu konsollardan kontrol et. Top Potada'daki özelliklerin hepsinin buraya geçip geçmediğini kontrol et.
