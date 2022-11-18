const fs = require("fs");
//! Require: Yerleşik işlevdir ve ayrı dosyalarda bulunan modülleri dahil etmenin en kolay yoludur.
//! Require öğesinin temel işlevi, bir JavaScript dosyasını okuması, dosyayı yürütmesi ve
//! ardından dışa aktarma nesnesini döndürmeye devam etmesidir. Yalnızca yerleşik çekirdek
//! Düğüm modülleri eklemenize değil, aynı zamanda topluluk tabanlı modüller (node_modules) ve 
//! istenen programa yerel modüller eklemenize izin verir.
const path = require("path");

const dist = path.join(process.cwd(), "dist"); //! process.cwd uygulamamizi calistirdigimiz yerin konumudur. Yani package.json in oldugu yer.
//! dist ise dist dosyamiz.
//! burada ki path.join process.cwd ile dist i birletirip bize cikti veriyor.

//? Burada ki genel olay npm run build dedigimiz de dist klasörümüzü siliyor. Yeniden olusturma isi ise package.json da ki build kisminda ki tsc. Orada ki ilk node scripts/deleteDist.js calistiginda 
//? (yani bu klasör) silme islemi gerceklesiyour

//! fs.rmSync dist klasörünü silmesi icin
fs.rmSync(dist, {
    recursive: true,
    force: true
})