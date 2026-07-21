'use client';

import { useState } from 'react';
import styles from './ForeignerHealthGuide.module.css';

interface GuideCategory {
  id: string;
  icon: string;
  title: string;
  titleEn: string;
  summary: string;
  details: string[];
  tips: string[];
}

const guideCategories: GuideCategory[] = [
  {
    id: 'emergency',
    icon: '🚨',
    title: 'Acil Durum & İlk Müdahale',
    titleEn: 'Emergency & First Aid',
    summary: 'Türkiye\'de acil durumlarda ücretsiz 112 hattını arayabilirsiniz. Çok dilli operatör desteği mevcuttur.',
    details: [
      '112 Acil Çağrı Merkezi: Tüm acil medikal vakalar için ücretsiz hat. İngilizce, Rusça, Almanca ve Arapça operatör desteği sunulur.',
      '184 SABİM Hattı: Sağlık sistemi danışmanlığı ve şikayet/destek hattı.',
      '114 ZEHİR BİLGİ MERKEZİ: Zehirlenme şüphelerinde 24 saat ücretsiz uzman desteği.',
      'Nöbetçi Eczane Sistemi: Hafta içi 19:00 sonrası ve pazar günleri her bölgede nöbetçi eczaneler 24 saat hizmet verir.'
    ],
    tips: [
      'Acil servise başvurduğunuzda pasaportunuzu ve seyahat sigortası belgenizi yanınızda bulundurun.',
      'Tüm acil servisler (Devlet veya Özel) hayati tehlikesi olan ilk müdahaleleri yapmakla yükümlüdür.'
    ]
  },
  {
    id: 'hospitals',
    icon: '🏥',
    title: 'Hastane ve Klinik Seçimi',
    titleEn: 'Hospitals & Clinics',
    summary: 'Devlet, Üniversite ve Özel hastaneler arasında ihtiyacınıza en uygun sağlık kuruluşunu seçin.',
    details: [
      'Özel Hastaneler: Uluslararası Hasta Departmanı (International Patient Department) bulunur. İngilizce bilen doktor ve tercüman hizmeti yaygındır.',
      'Devlet ve Üniversite Hastaneleri: İleri tetkik ve ameliyatlarda yüksek uzmanlık sunar, maliyetleri uygundur.',
      'Aile Sağlığı Merkezleri (ASM): Temel doktor muayeneleri ve basit reçeteler için her mahallede bulunur.'
    ],
    tips: [
      'Özel hastaneye gitmeden önce seyahat sigortanızın geçerliliğini teyit edin.',
      'Muayene sonrası medikal rapor (Medical Report) ve fatura talep etmeyi unutmayın.'
    ]
  },
  {
    id: 'insurance',
    icon: '🛡️',
    title: 'Sigorta & SGK Güvencesi',
    titleEn: 'Insurance & Coverage',
    summary: 'Seyahat sigortası, özel sağlık sigortası ve ikamet izinli yabancılar için SGK şartları.',
    details: [
      'Seyahat Sağlık Sigortası (Travel Insurance): Türkiye gezisi öncesi yaptırılması tavsiye edilir, acil masrafları kapsar.',
      'İkamet İzni (Residence Permit): 1 yıldan uzun süre kalan yabancılar Genel Sağlık Sigortası (GSS) veya Özel Sağlık Sigortası yaptırmak zorundadır.',
      'İkili Sosyal Güvenlik Anlaşmaları: Almanya (T/A 11), Hollanda (N/TUR 111), Avusturya gibi ülkelerin vatandaşları SGK haklarından yararlanabilir.'
    ],
    tips: [
      'Poliçenizdeki muafiyet ve teminat limitlerini kontrol edin.',
      'Geri ödeme (Reimbursement) süreçleri için tüm reçete ve ödeme fişlerini saklayın.'
    ]
  },
  {
    id: 'medication',
    icon: '💊',
    title: 'İlaç & Eczane Kuralları',
    titleEn: 'Prescriptions & Medication',
    summary: 'Türkiye\'de eczane işleyişi, etken madde isimleri ve reçeteli ilaç kuralları.',
    details: [
      'Etken Madde (Generic Name): İlaç marka isimleri farklı olabilir; eczacınıza etken maddeyi (örn. Paracetamol, Ibuprofen) söyleyin.',
      'Reçeteli İlaçlar: Antibiyotikler, psikiyatrik ilaçlar ve güçlü ağrı kesiciler sadece uzman hekim reçetesiyle alınabilir.',
      'Eczacı Danışmanlığı: Türkiye\'de eczacılar birinci basamak sağlık danışmanlığı verir; hafif rahatsızlıklarda yönlendirme yapabilir.'
    ],
    tips: [
      'Düzenli kullandığınız kronik ilaçların orijinal kutusunu veya İngilizce reçetesini yanınızda getirin.',
      'Eczaneler Pazar günleri kapalıdır, acil durumlarda "Nöbetçi Eczane" arayın.'
    ]
  },
  {
    id: 'climate_food',
    icon: '☀️',
    title: 'İklim, Güneş & Beslenme',
    titleEn: 'Climate, Sun & Nutrition',
    summary: 'Özellikle Akdeniz ve Ege bölgesinde sıcak hava, güneş çarpması ve su tüketimi önerileri.',
    details: [
      'Şişe Su Tüketimi: Musluk suyu hijyenik olarak arıtılır ancak mineral yapısı farklıdır. İçme suyu olarak ambalajlı/şişe su önerilir.',
      'Güneş Koruması (SPF 50+): Antalya ve kıyı bölgelerinde Mayıs-Ekim arası UV indeksi yüksektir. 12:00-15:00 arası direkt güneşten sakının.',
      'Sokak Lezzetleri & Hijyen: Döner, midye ve simit tüketirken yoğun ve hijyenik işletmeleri tercih edin.'
    ],
    tips: [
      'Sıcak günlerde günlük en az 2.5 - 3 litre su tüketin ve elektrolit dengesine dikkat edin.',
      'Kene ve Böcek Isırıkları: Kırsal doğa yürüyüşlerinde uzun kıyafetler tercih edin.'
    ]
  },
  {
    id: 'health_tourism',
    icon: '🦷',
    title: 'Sağlık Turizmi & Tedaviler',
    titleEn: 'Medical Tourism in Turkey',
    summary: 'Diş tedavisi, saç ekimi, göz cerrahisi ve estetik operasyonlarda dünya standartlarında hizmet.',
    details: [
      'Yetkili Sağlık Kuruluşları: Sağlık Bakanlığı "Sağlık Turizmi Yetki Belgesi" olan klinik ve hastaneleri tercih edin.',
      'Sağlık Turizmi Alanları: Diş Hekimliği (İmplant, Zirkonyum), Saç Ekimi (FUE/DHI), Göz Cerrahisi (LASIK), Estetik ve Kardiyoloji.',
      'Uluslararası Transfer & Otel Hizmeti: Birçok klinik havalimanı karşılama, konaklama ve tercümanlık paketleri sunar.'
    ],
    tips: [
      'Tedavi öncesi detaylı online konsültasyon talep edin.',
      'Garanti belgesi ve kullanılan materyal sertifikalarını (örn. İmplant pasaportu) mutlaka teslim alın.'
    ]
  }
];

export default function ForeignerHealthGuide() {
  const [activeTab, setActiveTab] = useState<string>('emergency');

  const selectedCategory = guideCategories.find(c => c.id === activeTab) || guideCategories[0];

  return (
    <section id="health-guide" className={styles.guideSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>REHBER & İPUÇLARI</div>
          <h2 className={styles.title}>Türkiye\'deki Yabancılar İçin Sağlık Rehberi</h2>
          <p className={styles.subtitle}>
            Tourist & Expat Health Guide in Turkey — Emergency info, hospital choices, insurance rules & health tips.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabsGrid}>
          {guideCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`${styles.tabBtn} ${activeTab === cat.id ? styles.activeTab : ''}`}
            >
              <span className={styles.tabIcon}>{cat.icon}</span>
              <div className={styles.tabText}>
                <span className={styles.tabTitle}>{cat.title}</span>
                <span className={styles.tabSub}>{cat.titleEn}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Content Card */}
        <div className={styles.contentCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>{selectedCategory.icon}</span>
            <div>
              <h3 className={styles.cardTitle}>{selectedCategory.title}</h3>
              <span className={styles.cardTitleEn}>{selectedCategory.titleEn}</span>
            </div>
          </div>

          <p className={styles.summaryText}>{selectedCategory.summary}</p>

          <div className={styles.detailsGrid}>
            <div className={styles.detailsCol}>
              <h4 className={styles.colTitle}>📌 Kapsamlı Bilgiler / Key Guidelines</h4>
              <ul className={styles.list}>
                {selectedCategory.details.map((item, idx) => (
                  <li key={idx} className={styles.listItem}>
                    <span className={styles.bullet}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.tipsCol}>
              <h4 className={styles.colTitle}>💡 Pratik İpuçları / Practical Tips</h4>
              <div className={styles.tipsList}>
                {selectedCategory.tips.map((tip, idx) => (
                  <div key={idx} className={styles.tipBox}>
                    <span className={styles.tipIcon}>✓</span>
                    <p className={styles.tipText}>{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
