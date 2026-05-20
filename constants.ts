import { AppLocation, BusRoute, BusinessItem, EmergencyContact, EventItem, Language, LocationType } from './types';

// Helper to create localized strings efficiently
const createLoc = (esp: string, eng: string, deu: string, ita: string, fra: string, por: string, jpn: string, chn: string) => ({
  [Language.ESP]: esp, [Language.ENG]: eng, [Language.DEU]: deu, [Language.ITA]: ita, [Language.FRA]: fra, [Language.POR]: por, [Language.JPN]: jpn, [Language.CHN]: chn
});

export const LOCATIONS: AppLocation[] = [
  { 
    id: 'loc_trauco', 
    name: createLoc('Ruta del Trauco', 'Trauco Route', 'Trauco-Route', 'Via del Trauco', 'Route du Trauco', 'Rota do Trauco', 'トラウコルート', '特劳科路线'),
    type: LocationType.ACTIVITY, 
    coordinates: { lat: -41.918826152337054, lng: -73.86004686954115 }, 
    link: 'https://maps.app.goo.gl/ZPaoAuF4bLw44ZPP9',
    description: createLoc(
      'Somos una empresa familiar dedicados a difundir el turismo mitológico en la isla grande de Chiloé. Trekking diurno y nocturno.',
      'We are a family business dedicated to spreading mythological tourism on the big island of Chiloé. Day and night trekking.',
      'Ein Familienunternehmen, das sich dem mythologischen Tourismus auf Chiloé widmet. Tag- und Nachtwanderungen.',
      'Siamo un\'azienda familiare dedicata a diffondere il turismo mitologico a Chiloé. Trekking diurno e notturno.',
      'Une entreprise familiale dédiée au tourisme mythologique sur la grande île de Chiloé. Randonnées de jour et de nuit.',
      'Somos uma empresa familiar dedicada a divulgar o turismo mitológico na ilha grande de Chiloé. Caminhadas diurnas e noturnas.',
      'チロエ島の神話観光を広める家族経営の会社です。昼夜のトレッキングが楽しめます。',
      '我们是一家致力于在奇洛埃大岛传播神话旅游的家族企业。提供日间和夜间徒步旅行。'
    )
  },
  { 
    id: 'loc_fuerte', 
    name: createLoc('Fuerte San Antonio', 'San Antonio Fort', 'Festung San Antonio', 'Forte San Antonio', 'Fort San Antonio', 'Forte San Antonio', 'サンアントニオ要塞', '圣安东尼奥堡'),
    type: LocationType.HISTORY, 
    coordinates: { lat: -41.862135528541764, lng: -73.83065030475377 }, 
    link: 'https://maps.app.goo.gl/YyscsqnMdNwUm6kC8',
    description: createLoc(
      'Histórica fortificación española del siglo XVIII diseñada para defender la entrada al fondeadero de la isla.',
      'Historic 18th-century Spanish fortification designed to defend the anchorage entrance of the island.',
      'Historische spanische Festung aus dem 18. Jahrhundert zum Schutz der Ankereinfahrt der Insel.',
      'Storica fortificazione spagnola del XVIII secolo progettata per difendere l\'ingresso all\'ancoraggio dell\'isola.',
      'Fortification espagnole historique du XVIIIe siècle conçue pour défendre l\'entrée du mouillage de l\'île.',
      'Fortificação espanhola histórica do século XVIII projetada para defender a entrada do ancoradouro da ilha.',
      '島の停泊地入口を守るために設計された18世紀の歴史的なスペインの要塞。',
      '建于18世纪的历史性西班牙防御工事，旨在保卫岛屿的锚地入口。'
    )
  },
  { 
    id: 'loc_museum', 
    name: createLoc('Museo Regional de Ancud', 'Regional Museum of Ancud', 'Regionalmuseum Ancud', 'Museo Regionale di Ancud', 'Musée Régional d\'Ancud', 'Museu Regional de Ancud', 'アンクド地域博物館', '安库德地区博物馆'),
    type: LocationType.MUSEUM, 
    coordinates: { lat: -41.8686434172437, lng: -73.8294178355085 }, 
    link: 'https://maps.app.goo.gl/JBpaNVsi21dqfdDz7',
    description: createLoc(
      'Espacio cultural que rescata y difunde la historia, naturaleza y cultura del archipiélago.',
      'Cultural space that rescues and spreads the history, nature, and culture of the archipelago.',
      'Kulturraum, der die Geschichte, Natur und Kultur des Archipels bewahrt und verbreitet.',
      'Spazio culturale che recupera e diffonde la storia, la natura e la cultura dell\'arcipelago.',
      'Espace culturel qui préserve et diffuse l\'histoire, la nature et la culture de l\'archipel.',
      'Espaço cultural que resgata e difunde a história, natureza e cultura do arquipélago.',
      '諸島の歴史、自然、文化を保存し広める文化スペース。',
      '旨在拯救和传播群岛历史、自然和文化的文化空间。'
    )
  },
  { 
    id: 'loc_muelle', 
    name: createLoc('Muelle de la Luz', 'Dock of Light', 'Muelle de la Luz', 'Molo della Luce', 'Quai de la Lumière', 'Cais da Luz', '光の桟橋', '光之码头'),
    type: LocationType.ACTIVITY, 
    coordinates: { lat: -42.04446446056728, lng: -74.03648961945294 }, 
    link: 'https://maps.app.goo.gl/ZduauzHT6pN4w1VL6',
    description: createLoc(
      'Mirador natural espectacular en el sector rural de Chepu, famoso por sus vistas panorámicas.',
      'Spectacular natural viewpoint in the rural Chepu sector, famous for its panoramic views.',
      'Spektakulärer natürlicher Aussichtspunkt im ländlichen Chepu, berühmt für sein Panorama.',
      'Spettacolare punto panoramico naturale nel settore rurale di Chepu, famoso per le sue vedute.',
      'Point de vue naturel spectaculaire dans le secteur rural de Chepu, célèbre pour ses vues panoramiques.',
      'Mirante natural espetacular no setor rural de Chepu, famoso por suas vistas panorâmicas.',
      'チェプの農村地域にある壮大な自然の展望台で、パノラマビューで有名です。',
      '位于切普农村地区的壮观自然观景点，以其全景视野而闻名。'
    )
  }, 
  { 
    id: 'loc_hueihuen', 
    name: createLoc('Mirador Hueihuen', 'Hueihuen Viewpoint', 'Aussichtspunkt Hueihuen', 'Belvedere Hueihuen', 'Point de vue Hueihuen', 'Mirante Hueihuen', 'ウェイウェン展望台', 'Hueihuen 观景点'),
    type: LocationType.VIEW, 
    coordinates: { lat: -41.864738577379086, lng: -73.80642017637796 }, 
    link: 'https://maps.app.goo.gl/Gep8dKPAs3jDgfJx6',
    description: createLoc(
      'Hermoso mirador en la ciudad de Ancud, con vista al mar.',
      'Beautiful viewpoint in the city of Ancud, with sea views.',
      'Schöner Aussichtspunkt in der Stadt Ancud mit Meerblick.',
      'Bellissimo belvedere nella città di Ancud, con vista sul mare.',
      'Beau point de vue dans la ville d\'Ancud, avec vue sur la mer.',
      'Belo mirante na cidade de Ancud, com vista para o mar.',
      '海を望むアンクド市内の美しい展望台。',
      '安库德市内美丽的观景点，可欣赏海景。'
    )
  },
  { 
    id: 'loc_arena', 
    name: createLoc('Playa Arena Gruesa', 'Arena Gruesa Beach', 'Strand Arena Gruesa', 'Spiaggia Arena Gruesa', 'Plage Arena Gruesa', 'Praia Arena Gruesa', 'アレーナ・グルエサ・ビーチ', '粗沙海滩'),
    type: LocationType.BEACH, 
    coordinates: { lat: -41.85986169277513, lng: -73.82793298501358 }, 
    link: 'https://maps.app.goo.gl/VPD56wFMyi6ZnmEa8',
    description: createLoc(
      'Caleta cercana al centro, conocida por su arena más gruesa y entorno natural con roqueríos.',
      'Cove near the center, known for its coarser sand and natural environment with rocks.',
      'Bucht nahe dem Zentrum, bekannt für ihren groben Sand und die natürliche Felsumgebung.',
      'Cala vicino al centro, nota per la sua sabbia grossa e l\'ambiente naturale roccioso.',
      'Crique près du centre, connue pour son sable grossier et son environnement naturel rocheux.',
      'Enseada perto do centro, conhecida por sua areia mais grossa e ambiente natural com rochas.',
      '中心部に近い入り江で、粗い砂と岩のある自然環境で知られています。',
      '靠近市中心的小海湾，以其粗糙的沙子和岩石自然环境而闻名。'
    )
  },
  { 
    id: 'loc_lechagua', 
    name: createLoc('Playa Lechagua', 'Lechagua Beach', 'Strand Lechagua', 'Spiaggia Lechagua', 'Plage Lechagua', 'Praia Lechagua', 'レチャグア・ビーチ', 'Lechagua 海滩'),
    type: LocationType.BEACH, 
    coordinates: { lat: -41.87601742187442, lng: -73.88921395507066 }, 
    link: 'https://maps.app.goo.gl/uZ7dfd9v2znvW3Ue6',
    description: createLoc(
      'Balneario familiar y tranquilo, ideal para niños, con aguas calmas.',
      'Quiet family resort, ideal for children, with calm waters.',
      'Ruhiger Familienbadeort, ideal für Kinder, mit ruhigem Wasser.',
      'Località familiare tranquilla, ideale per bambini, con acque calme.',
      'Station balnéaire familiale et calme, idéale pour les enfants, aux eaux calmes.',
      'Balneário familiar tranquilo, ideal para crianças, com águas calmas.',
      '穏やかな水域で子供に最適な静かなファミリーリゾート。',
      '宁静的家庭度假胜地，水域平静，非常适合儿童。'
    )
  },
  { 
    id: 'loc_marbrava', 
    name: createLoc('Mar Brava', 'Mar Brava', 'Mar Brava', 'Mar Brava', 'Mar Brava', 'Mar Brava', 'マル・ブラバ', 'Mar Brava'),
    type: LocationType.BEACH, 
    coordinates: { lat: -41.90865684957062, lng: -73.99365217838385 }, 
    link: 'https://maps.app.goo.gl/imkhcrgNDXiRFsTT6',
    description: createLoc(
      'Hermosa playa famosa por su fuerte oleaje y la Piedra Run.',
      'Beautiful beach famous for its strong waves and the Piedra Run.',
      'Schöner Strand, bekannt für seine starke Brandung und den Piedra Run.',
      'Bellissima spiaggia famosa per le sue forti onde e la Piedra Run.',
      'Belle plage célèbre pour ses fortes vagues et la Piedra Run.',
      'Bela praia famosa por suas ondas fortes e a Piedra Run.',
      '強い波とピエドラ・ルンで有名な美しいビーチ。',
      '以其强劲的海浪和 Piedra Run 而闻名的美丽海滩。'
    )
  },
  { 
    id: 'loc_caleuche', 
    name: createLoc('Muelle El Caleuche', 'El Caleuche Dock', 'El Caleuche Dock', 'Molo El Caleuche', 'Quai El Caleuche', 'Cais El Caleuche', 'エル・カレウチェ桟橋', 'El Caleuche 码头'),
    type: LocationType.VIEW, 
    coordinates: { lat: -41.92796323770904, lng: -74.04162957483614 }, 
    link: 'https://maps.app.goo.gl/wdEHTLKriSrXpWRp8',
    description: createLoc(
      'Muelle con vistas al Pacífico y a los Islotes de Puñihuil.',
      'Dock with views of the Pacific and the Puñihuil Islets.',
      'Dock mit Blick auf den Pazifik und die Puñihuil-Inseln.',
      'Molo con vista sul Pacifico e sugli isolotti di Puñihuil.',
      'Quai avec vue sur le Pacifique et les îlots de Puñihuil.',
      'Cais com vista para o Pacífico e as ilhotas de Puñihuil.',
      '太平洋とプニウイル小島を望む桟橋。',
      '可欣赏太平洋和普尼惠尔小岛景色的码头。'
    )
  },
  { 
    id: 'loc_punihuil', 
    name: createLoc('Islotes de Puñihuil', 'Puñihuil Islets', 'Puñihuil-Inseln', 'Isolotti di Puñihuil', 'Îlots de Puñihuil', 'Ilhotas de Puñihuil', 'プニウイル小島', '普尼惠尔小岛'),
    type: LocationType.ACTIVITY, 
    coordinates: { lat: -41.92235000900044, lng: -74.04062913517721 }, 
    link: 'https://maps.app.goo.gl/KAEgzzHEuXJBFPsi7',
    description: createLoc(
      'Monumento Natural donde pingüinos de Humboldt y Magallanes anidan juntos.',
      'Natural Monument where Humboldt and Magellanic penguins nest together.',
      'Naturdenkmal, wo Humboldt- und Magellan-Pinguine zusammen nisten.',
      'Monumento Naturale dove pinguini di Humboldt e Magellano nidificano insieme.',
      'Monument naturel où les manchots de Humboldt et de Magellan nichent ensemble.',
      'Monumento Natural onde pinguins de Humboldt e Magalhães nidificam juntos.',
      'フンボルトペンギンとマゼランペンギンが一緒に巣を作る天然記念物。',
      '洪堡企鹅和麦哲伦企鹅共同筑巢的自然纪念碑。'
    )
  },
  { 
    id: 'loc_pumillahue', 
    name: createLoc('Playa Pumillahue', 'Pumillahue Beach', 'Strand Pumillahue', 'Spiaggia Pumillahue', 'Plage Pumillahue', 'Praia Pumillahue', 'プミラウエ・ビーチ', 'Pumillahue 海滩'),
    type: LocationType.BEACH, 
    coordinates: { lat: -41.94635261831236, lng: -74.02490359167506 }, 
    link: 'https://maps.app.goo.gl/UAMit3MyGZrJsnGV8',
    description: createLoc(
      'Conocida por sus aguas turquesas, fuertes oleajes y acantilados impresionantes.',
      'Known for its turquoise waters, strong waves, and impressive cliffs.',
      'Bekannt für sein türkisfarbenes Wasser, starke Wellen und beeindruckende Klippen.',
      'Nota per le sue acque turchesi, le forti onde e le impressionanti scogliere.',
      'Connue pour ses eaux turquoises, ses fortes vagues et ses falaises impressionnantes.',
      'Conhecida por suas águas azul-turquesa, ondas fortes e falésias impressionantes.',
      'ターコイズブルーの水、強い波、印象的な崖で知られています。',
      '以其绿松石般的海水、强劲的海浪和令人印象深刻的悬崖而闻名。'
    )
  },
  { 
    id: 'loc_diujan', 
    name: createLoc('Ruta del Amor Diujan', 'Diujan Love Route', 'Liebesroute Diujan', 'Percorso dell\'Amore Diujan', 'Route de l\'Amour Diujan', 'Rota do Amor Diujan', 'ディウハン愛のルート', 'Diujan 爱情路线'),
    type: LocationType.VIEW, 
    coordinates: { lat: -41.95013125708043, lng: -74.02247944767412 }, 
    link: 'https://maps.app.goo.gl/p2Doa2mda3KKUUUa7',
    description: createLoc(
      'Recorrido romántico y escénico que conecta atractivos naturales y culturales.',
      'Romantic and scenic route connecting natural and cultural attractions.',
      'Romantische und malerische Route, die natürliche und kulturelle Sehenswürdigkeiten verbindet.',
      'Percorso romantico e panoramico che collega attrazioni naturali e culturali.',
      'Parcours romantique et panoramique reliant des attractions naturelles et culturelles.',
      'Rota romântica e cênica conectando atrações naturais e culturais.',
      '自然と文化の名所を結ぶロマンチックで風光明媚なルート。',
      '连接自然和文化景点的浪漫风景路线。'
    )
  },
  { 
    id: 'loc_duhatao_trail', 
    name: createLoc('Sendero Duhatao - Chepu', 'Duhatao - Chepu Trail', 'Wanderweg Duhatao - Chepu', 'Sentiero Duhatao - Chepu', 'Sentier Duhatao - Chepu', 'Trilha Duhatao - Chepu', 'ドゥハタオ - チェプ・トレイル', 'Duhatao - Chepu 步道'),
    type: LocationType.ACTIVITY, 
    coordinates: { lat: -41.992574728205845, lng: -74.04746161734143 }, 
    link: 'https://maps.app.goo.gl/24VE1jVQwqcmv3vN9',
    description: createLoc(
      'Rincón costero único con bosques nativos que llegan al mar y acantilados.',
      'Unique coastal corner with native forests reaching the sea and cliffs.',
      'Einzigartige Küstenecke mit einheimischen Wäldern, die bis zum Meer reichen, und Klippen.',
      'Angolo costiero unico con foreste native che raggiungono il mare e scogliere.',
      'Coin côtier unique avec des forêts indigènes atteignant la mer et des falaises.',
      'Canto costeiro único com florestas nativas chegando ao mar e falésias.',
      '原生林が海に達するユニークな海岸の一角と崖。',
      '独特的沿海角落，原生森林延伸至大海和悬崖。'
    )
  },
  { 
    id: 'loc_duhatao_beach', 
    name: createLoc('Playa Duhatao', 'Duhatao Beach', 'Strand Duhatao', 'Spiaggia Duhatao', 'Plage Duhatao', 'Praia Duhatao', 'ドゥハタオ・ビーチ', 'Duhatao 海滩'),
    type: LocationType.BEACH, 
    coordinates: { lat: -41.989605084772435, lng: -74.04865462915399 }, 
    link: 'https://maps.app.goo.gl/yjbo6xwgQxp4BbiK6',
    description: createLoc(
      'Paisajes espectaculares, ideal para el senderismo y la fotografía.',
      'Spectacular landscapes, ideal for hiking and photography.',
      'Spektakuläre Landschaften, ideal zum Wandern und Fotografieren.',
      'Paesaggi spettacolari, ideali per escursioni e fotografia.',
      'Paysages spectaculaires, idéaux pour la randonnée et la photographie.',
      'Paisagens espetaculares, ideais para caminhadas e fotografia.',
      'ハイキングや写真撮影に最適な壮大な風景。',
      '壮观的风景，非常适合徒步旅行和摄影。'
    )
  },
  {
    id: 'loc_chiloe_silvestre',
    name: createLoc('Chiloé Silvestre', 'Chiloé Silvestre', 'Chiloé Silvestre', 'Chiloé Silvestre', 'Chiloé Silvestre', 'Chiloé Silvestre', 'チロエ・シルベストレ', 'Chiloé Silvestre'),
    type: LocationType.ACTIVITY,
    coordinates: { lat: -41.83977946260222, lng: -73.9360141745391 },
    link: 'https://maps.app.goo.gl/5VbdQmXWFLR669Ay8',
    description: createLoc(
      'ONG dedicada a la conservación de la biodiversidad y rehabilitación de fauna.',
      'NGO dedicated to biodiversity conservation and wildlife rehabilitation.',
      'NGO für den Erhalt der biologischen Vielfalt und die Rehabilitation von Wildtieren.',
      'ONG dedicata alla conservazione della biodiversità e alla riabilitazione della fauna.',
      'ONG dédiée à la conservation de la biodiversité et à la réhabilitation de la faune.',
      'ONG dedicada à conservação da biodiversidade e reabilitação da fauna.',
      '生物多様性の保全と野生動物のリハビリテーションに専念するNGO。',
      '致力于生物多样性保护和野生动物康复的非政府组织。'
    )
  },
  { 
    id: 'loc_chepu_beach', 
    name: createLoc('Playa de Chepu', 'Chepu Beach', 'Strand von Chepu', 'Spiaggia di Chepu', 'Plage de Chepu', 'Praia de Chepu', 'チェプ・ビーチ', 'Chepu 海滩'),
    type: LocationType.BEACH, 
    coordinates: { lat: -42.030069502189335, lng: -74.02868973348704 }, 
    link: 'https://maps.app.goo.gl/NHjFUocoHtZwF37a7',
    description: createLoc(
      'Santuario de la Naturaleza con bosques sumergidos y un barco varado.',
      'Nature Sanctuary with submerged forests and a stranded ship.',
      'Naturschutzgebiet mit versunkenen Wäldern und einem gestrandeten Schiff.',
      'Santuario della Natura con foreste sommerse e una nave incagliata.',
      'Sanctuaire de la Nature avec des forêts submergées et un navire échoué.',
      'Santuário da Natureza com florestas submersas e um navio encalhado.',
      '沈んだ森と座礁船がある自然保護区。',
      '拥有水下森林和搁浅船只的自然保护区。'
    )
  },
  { 
    id: 'loc_chepu_park', 
    name: createLoc('Reserva Ecológica Chepu', 'Chepu Ecological Reserve', 'Ökologisches Reservat Chepu', 'Riserva Ecologica Chepu', 'Réserve Écologique Chepu', 'Reserva Ecológica Chepu', 'チェプ生態保護区', 'Chepu 生态保护区'),
    type: LocationType.PARK, 
    coordinates: { lat: -42.08912155887642, lng: -73.93434654339961 }, 
    link: 'https://maps.app.goo.gl/hHCsEjoux79N2xhcA',
    description: createLoc(
      'Destino ideal para los amantes de la naturaleza y la tranquilidad.',
      'Ideal destination for nature and tranquility lovers.',
      'Ideales Ziel für Liebhaber von Natur und Ruhe.',
      'Destinazione ideale per gli amanti della natura e della tranquillità.',
      'Destination idéale pour les amoureux de la nature et de la tranquillité.',
      'Destino ideal para os amantes da natureza e da tranquilidade.',
      '自然と静けさを愛する人にとって理想的な目的地。',
      '大自然和宁静爱好者的理想目的地。'
    )
  },
  { 
    id: 'loc_caulin', 
    name: createLoc('Playa Caulin', 'Caulin Beach', 'Strand Caulin', 'Spiaggia Caulin', 'Plage Caulin', 'Praia Caulin', 'カウリン・ビーチ', 'Caulin 海滩'),
    type: LocationType.BEACH, 
    coordinates: { lat: -41.82024842405449, lng: -73.61267336810326 }, 
    link: 'https://maps.app.goo.gl/Jq7xK5Lk3Q2qQCAc7',
    description: createLoc(
      'Santuario de aves migratorias conocido por sus cisnes de cuello negro.',
      'Migratory bird sanctuary known for its black-necked swans.',
      'Zugvogelschutzgebiet, bekannt für seine Schwarzhalsschwäne.',
      'Santuario di uccelli migratori noto per i suoi cigni dal collo nero.',
      'Sanctuaire d\'oiseaux migrateurs connu pour ses cygnes à cou noir.',
      'Santuário de aves migratórias conhecido por seus cisnes de pescoço preto.',
      'クロエリハクチョウで知られる渡り鳥の聖域。',
      '以黑颈天鹅闻名的候鸟保护区。'
    )
  },
  { 
    id: 'loc_senda', 
    name: createLoc('Estación Biológica Senda Darwin', 'Senda Darwin Biological Station', 'Biologische Station Senda Darwin', 'Stazione Biologica Senda Darwin', 'Station Biologique Senda Darwin', 'Estação Biológica Senda Darwin', 'センダ・ダーウィン生物学ステーション', 'Senda Darwin 生物站'),
    type: LocationType.ACTIVITY, 
    coordinates: { lat: -41.883062241266146, lng: -73.66377124756555 }, 
    link: 'https://maps.app.goo.gl/TTPjye19vxKgUdZCA',
    description: createLoc(
      'Área protegida privada dedicada a la investigación científica y educación ambiental.',
      'Private protected area dedicated to scientific research and environmental education.',
      'Privates Schutzgebiet für wissenschaftliche Forschung und Umweltbildung.',
      'Area protetta privata dedicata alla ricerca scientifica e all\'educazione ambientale.',
      'Zone protégée privée dédiée à la recherche scientifique et à l\'éducation environnementale.',
      'Área protegida privada dedicada à pesquisa científica e educação ambiental.',
      '科学研究と環境教育に専念する私的保護地域。',
      '致力于科学研究和环境教育的私人保护区。'
    )
  },
  { 
    id: 'loc_linao', 
    name: createLoc('Costanera Linao', 'Linao Waterfront', 'Uferpromenade Linao', 'Lungomare Linao', 'Front de mer Linao', 'Orla de Linao', 'リナオ・ウォーターフロント', 'Linao 海滨'),
    type: LocationType.BEACH, 
    coordinates: { lat: -41.965356226936265, lng: -73.54688598333757 }, 
    link: 'https://maps.app.goo.gl/1qdNGeKsySxh4Pqy8',
    description: createLoc(
      'Bonito lugar para visitar en playa de Linao.',
      'Nice place to visit at Linao beach.',
      'Schöner Ort am Strand von Linao zu besuchen.',
      'Bel posto da visitare sulla spiaggia di Linao.',
      'Bel endroit à visiter sur la plage de Linao.',
      'Lugar agradável para visitar na praia de Linao.',
      'リナオビーチで訪れるのに素敵な場所。',
      'Linao 海滩值得一游的好地方。'
    )
  },
  { 
    id: 'loc_chilen', 
    name: createLoc('Punta Chilen', 'Punta Chilen', 'Punta Chilen', 'Punta Chilen', 'Punta Chilen', 'Punta Chilen', 'プンタ・チレン', 'Punta Chilen'),
    type: LocationType.BEACH, 
    coordinates: { lat: -41.90295954600058, lng: -73.47415099648224 }, 
    link: 'https://maps.app.goo.gl/ydkSQUkvmjrbXbqh9',
    description: createLoc(
      'Zona rural con hermosas playas de aguas tranquilas y bosques nativos.',
      'Rural area with beautiful beaches of calm waters and native forests.',
      'Ländliches Gebiet mit schönen Stränden mit ruhigem Wasser und einheimischen Wäldern.',
      'Zona rurale con bellissime spiagge di acque calme e foreste native.',
      'Zone rurale avec de belles plages aux eaux calmes et des forêts indigènes.',
      'Área rural com belas praias de águas calmas e florestas nativas.',
      '穏やかな水域の美しいビーチと原生林がある農村地域。',
      '拥有平静水域的美丽海滩和原生森林的农村地区。'
    )
  },
  { 
    id: 'loc_mitos', 
    name: createLoc('Refugio de los Mitos', 'Myths Refuge', 'Zuflucht der Mythen', 'Rifugio dei Miti', 'Refuge des Mythes', 'Refúgio dos Mitos', '神話の隠れ家', '神话避难所'),
    type: LocationType.ACTIVITY, 
    coordinates: { lat: -42.21286638079428, lng: -73.71731143860383 }, 
    link: 'https://maps.app.goo.gl/kKhUy7gzaFFKLJvB6',
    description: createLoc(
      'Parque temático que revive la rica mitología chilota en el bosque.',
      'Theme park reviving the rich Chilote mythology in the forest.',
      'Themenpark, der die reiche Chilote-Mythologie im Wald wiederbelebt.',
      'Parco a tema che fa rivivere la ricca mitologia di Chiloé nella foresta.',
      'Parc à thème faisant revivre la riche mythologie chilote dans la forêt.',
      'Parque temático que revive a rica mitologia de Chiloé na floresta.',
      '森の中で豊かなチロエ神話を蘇らせるテーマパーク。',
      '在森林中重现丰富的奇洛埃神话的主题公园。'
    )
  },
  { 
    id: 'loc_tren', 
    name: createLoc('Tren de Madera', 'Wooden Train', 'Holzzug', 'Treno di Legno', 'Train en Bois', 'Trem de Madeira', '木の列車', '木制火车'),
    type: LocationType.ACTIVITY, 
    coordinates: { lat: -42.04023594184526, lng: -73.98332305749815 }, 
    link: 'https://maps.app.goo.gl/fuGPyGDB7iYuMuWT8',
    description: createLoc(
      'Tren construido con durmientes de madera para transportar madera en Chepu.',
      'Train built with wooden sleepers to transport wood in Chepu.',
      'Zug aus Holzschwellen zum Holztransport in Chepu.',
      'Treno costruito con traversine di legno per trasportare legno a Chepu.',
      'Train construit avec des traverses en bois pour transporter du bois à Chepu.',
      'Trem construído com dormentes de madeira para transportar madeira em Chepu.',
      'チェプで木材を運搬するために木製の枕木で作られた列車。',
      '在切普用木枕木建造的用于运输木材的火车。'
    )
  },
  { 
    id: 'loc_meular', 
    name: createLoc('Parque Meular', 'Meular Park', 'Park Meular', 'Parco Meular', 'Parc Meular', 'Parque Meular', 'メウラー公園', 'Meular 公园'),
    type: LocationType.PARK, 
    coordinates: { lat: -42.14306038288873, lng: -73.79652252663217 }, 
    link: 'https://maps.app.goo.gl/Tfi4DH7E55RTnTWk6',
    description: createLoc(
      'Experiencia inmersiva con senderismo, kayak y cultura local.',
      'Immersive experience with hiking, kayaking, and local culture.',
      'Immersives Erlebnis mit Wandern, Kajakfahren und lokaler Kultur.',
      'Esperienza immersiva con escursionismo, kayak e cultura locale.',
      'Expérience immersive avec randonnée, kayak et culture locale.',
      'Experiência imersiva com caminhadas, caiaque e cultura local.',
      'ハイキング、カヤック、地元の文化を楽しめる没入型体験。',
      '徒步旅行、皮划艇和当地文化的沉浸式体验。'
    )
  },
  
  // Locations derived from Events (Coordinates estimated or fallback)
  { id: 'loc_evt_1', name: createLoc('Costanera Ancud', 'Ancud Waterfront', 'Uferpromenade Ancud', 'Lungomare Ancud', 'Front de mer Ancud', 'Orla de Ancud', 'アンクド・ウォーターフロント', '安库德海滨'), type: LocationType.EVENT, coordinates: { lat: -41.8680, lng: -73.8300 } },
  { id: 'loc_evt_2', name: createLoc('Bahía de Ancud', 'Ancud Bay', 'Bucht von Ancud', 'Baia di Ancud', 'Baie d\'Ancud', 'Baía de Ancud', 'アンクド湾', '安库德湾'), type: LocationType.EVENT, coordinates: { lat: -41.8620, lng: -73.8280 } },

  // Locations derived from Business (Coordinates approximated to general areas)
  { id: 'loc_biz_1', name: createLoc('Quesos de Campo', 'Farm Cheeses', 'Bauernkäse', 'Formaggi di Fattoria', 'Fromages Fermiers', 'Queijos de Campo', '農場のチーズ', '农场奶酪'), type: LocationType.BUSINESS, coordinates: { lat: -41.9000, lng: -73.7500 } },
  { id: 'loc_biz_2', name: createLoc('Ostras Caulin', 'Caulin Oysters', 'Austern Caulin', 'Ostriche Caulin', 'Huîtres Caulin', 'Ostras Caulin', 'カウリン牡蠣', 'Caulin 牡蛎'), type: LocationType.BUSINESS, coordinates: { lat: -41.8150, lng: -73.6200 } },
  { id: 'loc_biz_3', name: createLoc('Tejidos a Telar', 'Loom Weaving', 'Webstuhl-Weberei', 'Tessitura a Telaio', 'Tissage au Métier', 'Tecelagem em Tear', '織機織り', '织机编织'), type: LocationType.BUSINESS, coordinates: { lat: -41.9500, lng: -73.8500 } },
  { id: 'loc_biz_4', name: createLoc('Ajo Chilote', 'Chilote Garlic', 'Chilote-Knoblauch', 'Aglio Chilote', 'Ail Chilote', 'Alho Chilote', 'チロエにんにく', '奇洛埃大蒜'), type: LocationType.BUSINESS, coordinates: { lat: -41.8300, lng: -73.7200 } },
  { id: 'loc_biz_5', name: createLoc('Papas Nativas', 'Native Potatoes', 'Einheimische Kartoffeln', 'Patate Native', 'Pommes de Terre Natives', 'Batatas Nativas', '在来種ジャガイモ', '原生土豆'), type: LocationType.BUSINESS, coordinates: { lat: -41.8900, lng: -73.9500 } },
  { id: 'loc_biz_6', name: createLoc('Tour Playas', 'Beaches Tour', 'Strandtour', 'Tour delle Spiagge', 'Tour des Plages', 'Tour de Praias', 'ビーチツアー', '海滩之旅'), type: LocationType.BUSINESS, coordinates: { lat: -41.8750, lng: -73.8350 } },
];

export const EVENTS: EventItem[] = [
  { 
    id: 'evt_1', 
    date: '16/01', 
    time: '10:30', 
    title: createLoc('Festival Nautico', 'Nautical Festival', 'Nautisches Festival', 'Festival Nautico', 'Festival Nautique', 'Festival Náutico', '航海フェスティバル', '航海节'),
    program: createLoc('Muestra Artesanos', 'Artisan Show', 'Kunsthandwerkermarkt', 'Mostra Artigiana', 'Exposition Artisanale', 'Mostra de Artesãos', '職人展', '工匠展'),
    description: createLoc(
      'Rescatando el patrimonio marítimo de la ribera tradicional de Chiloé',
      'Rescuing the maritime heritage of the traditional coast of Chiloé',
      'Rettung des maritimen Erbes der traditionellen Küste von Chiloé',
      'Recupero del patrimonio marittimo della costa tradizionale di Chiloé',
      'Sauvetage du patrimoine maritime de la côte traditionnelle de Chiloé',
      'Resgatando o patrimônio marítimo da costa tradicional de Chiloé',
      'チロエの伝統的な海岸の海洋遺産を救う',
      '拯救奇洛埃传统海岸的海洋遗产'
    ),
    locationId: 'loc_evt_1' 
  },
  { 
    id: 'evt_2', 
    date: '17/01', 
    time: '10:30', 
    title: createLoc('Festival Nautico', 'Nautical Festival', 'Nautisches Festival', 'Festival Nautico', 'Festival Nautique', 'Festival Náutico', '航海フェスティバル', '航海节'),
    program: createLoc('Muestra Fotografica', 'Photo Exhibition', 'Fotoausstellung', 'Mostra Fotografica', 'Exposition Photo', 'Exposição Fotográfica', '写真展', '摄影展'),
    description: createLoc(
      'Muestra Fotografica de lanchas chilotas. Expositor fotografico Claudio Pino.',
      'Photo exhibition of Chilote boats. Photographer Claudio Pino.',
      'Fotoausstellung von Chilote-Booten. Fotograf Claudio Pino.',
      'Mostra fotografica di barche Chilote. Fotografo Claudio Pino.',
      'Exposition photo de bateaux chilotes. Photographe Claudio Pino.',
      'Exposição fotográfica de barcos chilotes. Fotógrafo Claudio Pino.',
      'チロエボートの写真展。写真家クラウディオ・ピノ。',
      '奇洛埃船只摄影展。摄影师 Claudio Pino。'
    ),
    locationId: 'loc_evt_1' 
  },
  { 
    id: 'evt_3', 
    date: '18/01', 
    time: '10:30', 
    title: createLoc('Festival Nautico', 'Nautical Festival', 'Nautisches Festival', 'Festival Nautico', 'Festival Nautique', 'Festival Náutico', '航海フェスティバル', '航海节'),
    program: createLoc('Competencia Remo', 'Rowing Competition', 'Ruderwettbewerb', 'Gara di Canottaggio', 'Compétition d\'Aviron', 'Competição de Remo', 'ボート競技', '划船比赛'),
    description: createLoc(
      'Competencia de Remo en la bahia de Ancud',
      'Rowing competition in Ancud Bay',
      'Ruderwettbewerb in der Bucht von Ancud',
      'Gara di canottaggio nella baia di Ancud',
      'Compétition d\'aviron dans la baie d\'Ancud',
      'Competição de remo na baía de Ancud',
      'アンクド湾でのボート競技',
      '安库德湾的划船比赛'
    ),
    locationId: 'loc_evt_2' 
  },
  { 
    id: 'evt_4', 
    date: '19/01', 
    time: '12:00', 
    title: createLoc('Festival Nautico', 'Nautical Festival', 'Nautisches Festival', 'Festival Nautico', 'Festival Nautique', 'Festival Náutico', '航海フェスティバル', '航海节'),
    program: createLoc('Acto Conmemorativo', 'Commemorative Act', 'Gedenkfeier', 'Atto Commemorativo', 'Acte Commémoratif', 'Ato Comemorativo', '記念式典', '纪念活动'),
    description: createLoc(
      '200 años de la anexion de La isla al continente',
      '200 years of the annexation of the island to the continent',
      '200 Jahre seit der Angliederung der Insel an den Kontinent',
      '200 anni dall\'annessione dell\'isola al continente',
      '200 ans de l\'annexion de l\'île au continent',
      '200 anos da anexação da ilha ao continente',
      '島の大陸併合200周年',
      '该岛并入大陆200周年'
    ),
    locationId: 'loc_fuerte' 
  },
];

export const BUSINESSES: BusinessItem[] = [
  { 
    id: 'biz_1', 
    title: createLoc('Quesos de Campo', 'Farm Cheeses', 'Bauernkäse', 'Formaggi di Fattoria', 'Fromages Fermiers', 'Queijos de Campo', '農場のチーズ', '农场奶酪'),
    subtitle: createLoc('Productores de Leche y quesos', 'Milk and Cheese Producers', 'Milch- und Käseproduzenten', 'Produttori di Latte e Formaggio', 'Producteurs de Lait et Fromage', 'Produtores de Leite e Queijo', '牛乳とチーズの生産者', '牛奶和奶酪生产商'),
    description: createLoc(
      'Ven a probar nuestros exquisitos productos con vacas de pastoreo!',
      'Come and taste our exquisite products from grazing cows!',
      'Kommen Sie und probieren Sie unsere exquisiten Produkte von Weidekühen!',
      'Vieni a provare i nostri squisiti prodotti da mucche al pascolo!',
      'Venez goûter nos produits exquis issus de vaches au pâturage !',
      'Venha provar nossos produtos requintados de vacas a pasto!',
      '放牧牛からの絶品製品をぜひ味わってください！',
      '快来品尝我们放牧奶牛生产的精美产品！'
    ),
    locationId: 'loc_biz_1',
    imageUrl: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'biz_2', 
    title: createLoc('Ostras Caulin', 'Caulin Oysters', 'Austern Caulin', 'Ostriche Caulin', 'Huîtres Caulin', 'Ostras Caulin', 'カウリン牡蠣', 'Caulin 牡蛎'),
    subtitle: createLoc('Las mejores Ostras de Ancud', 'The Best Oysters in Ancud', 'Die besten Austern in Ancud', 'Le migliori ostriche di Ancud', 'Les meilleures huîtres d\'Ancud', 'As melhores ostras de Ancud', 'アンクドで最高の牡蠣', '安库德最好的牡蛎'),
    description: createLoc(
      'Ven a probar nuestra gran variedad de productos del mar!',
      'Come and try our wide variety of seafood!',
      'Kommen Sie und probieren Sie unsere große Auswahl an Meeresfrüchten!',
      'Vieni a provare la nostra grande varietà di frutti di mare!',
      'Venez goûter notre grande variété de fruits de mer !',
      'Venha experimentar nossa grande variedade de frutos do mar!',
      '豊富な種類のシーフードをぜひお試しください！',
      '快来品尝我们种类繁多的海鲜吧！'
    ),
    locationId: 'loc_biz_2',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/07/22/22/56/oyster-2530167_960_720.jpg'
  },
  { 
    id: 'biz_3', 
    title: createLoc('Tejidos a Telar', 'Loom Weaving', 'Webstuhl-Weberei', 'Tessitura a Telaio', 'Tissage au Métier', 'Tecelagem em Tear', '織機織り', '织机编织'),
    subtitle: createLoc('Conservando la tradicion Chilota', 'Preserving the Chilote Tradition', 'Bewahrung der Chilote-Tradition', 'Preservare la tradizione Chilote', 'Préserver la tradition Chilote', 'Preservando a tradição Chilota', 'チロエの伝統を守る', '保留奇洛埃传统'),
    description: createLoc(
      'Productos de lana hechos con amor y tradición de la Isla!',
      'Wool products made with love and tradition of the Island!',
      'Wollprodukte, hergestellt mit Liebe und Tradition der Insel!',
      'Prodotti in lana fatti con amore e tradizione dell\'isola!',
      'Produits en laine faits avec amour et tradition de l\'île !',
      'Produtos de lã feitos com amor e tradição da Ilha!',
      '島の愛と伝統で作られたウール製品！',
      '用岛上的爱和传统制作的羊毛产品！'
    ),
    locationId: 'loc_biz_3',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/10/20/16/57/loom-4564223_1280.jpg'
  },
  { 
    id: 'biz_4', 
    title: createLoc('Ajo Chilote', 'Chilote Garlic', 'Chilote-Knoblauch', 'Aglio Chilote', 'Ail Chilote', 'Alho Chilote', 'チロエにんにく', '奇洛埃大蒜'),
    subtitle: createLoc('El mejor aliño para tu vida', 'The Best Seasoning for Your Life', 'Das beste Gewürz für Ihr Leben', 'Il miglior condimento per la tua vita', 'Le meilleur assaisonnement pour votre vie', 'O melhor tempero para sua vida', 'あなたの人生に最高の調味料', '为您生活增添最佳调味'),
    description: createLoc(
      'Ven a conocer y a probar los diferentes productos derivados de el Ajo Chilote!',
      'Come to know and taste the different products derived from Chilote Garlic!',
      'Kommen Sie und probieren Sie die verschiedenen Produkte aus Chilote-Knoblauch!',
      'Vieni a conoscere e gustare i diversi prodotti derivati dall\'Aglio Chilote!',
      'Venez découvrir et goûter les différents produits dérivés de l\'Ail Chilote !',
      'Venha conhecer e provar os diferentes produtos derivados do Alho Chilote!',
      'チロエにんにく由来のさまざまな製品を知って味わってください！',
      '快来了解并品尝奇洛埃大蒜衍生的不同产品！'
    ),
    locationId: 'loc_biz_4',
    imageUrl: 'https://cdn.pixabay.com/photo/2021/11/30/01/17/garlic-6834190_960_720.jpg'
  },
  { 
    id: 'biz_5', 
    title: createLoc('Papas Nativas', 'Native Potatoes', 'Einheimische Kartoffeln', 'Patate Native', 'Pommes de Terre Natives', 'Batatas Nativas', '在来種ジャガイモ', '原生土豆'),
    subtitle: createLoc('Fruto de nuestra tierra', 'Fruit of Our Land', 'Frucht unseres Landes', 'Frutto della nostra terra', 'Fruit de notre terre', 'Fruto da nossa terra', '私たちの土地の果実', '我们土地的果实'),
    description: createLoc(
      'Degustaciones de algunas de las mas de 220 variedades de papas que ofrece nuestra Isla.',
      'Tastings of some of the more than 220 varieties of potatoes offered by our Island.',
      'Verkostungen einiger der mehr als 220 Kartoffelsorten, die unsere Insel bietet.',
      'Degustazioni di alcune delle oltre 220 varietà di patate offerte dalla nostra isola.',
      'Dégustations de certaines des plus de 220 variétés de pommes de terre offertes par notre île.',
      'Degustações de algumas das mais de 220 variedades de batatas oferecidas pela nossa Ilha.',
      '私たちの島が提供する220種類以上のジャガイモの一部の試食。',
      '品尝我们岛上提供的220多种土豆中的一部分。'
    ),
    locationId: 'loc_biz_5',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/07/12/02/19/potatoes-4331742_1280.jpg'
  },
  { 
    id: 'biz_6', 
    title: createLoc('Tour Playas', 'Beaches Tour', 'Strandtour', 'Tour delle Spiagge', 'Tour des Plages', 'Tour de Praias', 'ビーチツアー', '海滩之旅'),
    subtitle: createLoc('Visitas guiadas a nuestras costas', 'Guided Tours to Our Coasts', 'Führungen an unsere Küsten', 'Visite guidate alle nostre coste', 'Visites guidées de nos côtes', 'Visitas guiadas às nossas costas', '私たちの海岸へのガイド付きツアー', '我们海岸的导游之旅'),
    description: createLoc(
      'Agenda tus viajes y contacta a guias locales que te mostraran la verdadera magia del sur.',
      'Schedule your trips and contact local guides who will show you the true magic of the south.',
      'Planen Sie Ihre Reisen und kontaktieren Sie lokale Führer, die Ihnen den wahren Zauber des Südens zeigen.',
      'Pianifica i tuoi viaggi e contatta le guide locali che ti mostreranno la vera magia del sud.',
      'Planifiez vos voyages et contactez des guides locaux qui vous montreront la vraie magie du sud.',
      'Agende suas viagens e contate guias locais que lhe mostrarão a verdadeira magia do sul.',
      '旅行を計画し、南部の本当の魔法を見せてくれる地元ガイドに連絡してください。',
      '安排您的行程并联系当地导游，他们将向您展示南方的真正魔力。'
    ),
    locationId: 'loc_biz_6',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
];

export const BUS_SCHEDULE: BusRoute[] = [
  { destination: 'Ahui', schedule: createLoc('LUN-MIE-VIE 13:00 (SÓLO IDA)', 'MON-WED-FRI 13:00 (ONE WAY)', 'MO-MI-FR 13:00 (EINWEG)', 'LUN-MER-VEN 13:00 (SOLO ANDATA)', 'LUN-MER-VEN 13:00 (ALLER SIMPLE)', 'SEG-QUA-SEX 13:00 (SÓ IDA)', '月-水-金 13:00 (片道)', '周一-周三-周五 13:00 (单程)') },
  { destination: 'Pilluco, Quilo, Aucaco', schedule: createLoc('LUNES a VIERNES 13:30 (SÓLO IDA)', 'MON to FRI 13:30 (ONE WAY)', 'MO bis FR 13:30 (EINWEG)', 'LUN a VEN 13:30 (SOLO ANDATA)', 'LUN à VEN 13:30 (ALLER SIMPLE)', 'SEG a SEX 13:30 (SÓ IDA)', '月-金 13:30 (片道)', '周一至周五 13:30 (单程)') },
  { destination: 'Recta Chacao, Butamanga', schedule: createLoc('LUNES a VIERNES 14:00', 'MON to FRI 14:00', 'MO bis FR 14:00', 'LUN a VEN 14:00', 'LUN à VEN 14:00', 'SEG a SEX 14:00', '月-金 14:00', '周一至周五 14:00') },
  { destination: 'El Quilar, Lecam, Doca', schedule: createLoc('LUN-VIE 11:30, 16:00, 18:00', 'MON-FRI 11:30, 16:00, 18:00', 'MO-FR 11:30, 16:00, 18:00', 'LUN-VEN 11:30, 16:00, 18:00', 'LUN-VEN 11:30, 16:00, 18:00', 'SEG-SEX 11:30, 16:00, 18:00', '月-金 11:30, 16:00, 18:00', '周一-周五 11:30, 16:00, 18:00') },
  { destination: 'Chacao, Costa Manao', schedule: createLoc('LUN-VIE 11:45, 13:00 | SAB 13:00', 'MON-FRI 11:45, 13:00 | SAT 13:00', 'MO-FR 11:45, 13:00 | SA 13:00', 'LUN-VEN 11:45, 13:00 | SAB 13:00', 'LUN-VEN 11:45, 13:00 | SAM 13:00', 'SEG-SEX 11:45, 13:00 | SAB 13:00', '月-金 11:45, 13:00 | 土 13:00', '周一-周五 11:45, 13:00 | 周六 13:00') },
  { destination: 'Linao, Pumanzano', schedule: createLoc('LUN-VIE 12:15, 15:00, 17:30 | SAB 13:30', 'MON-FRI 12:15, 15:00, 17:30 | SAT 13:30', 'MO-FR 12:15, 15:00, 17:30 | SA 13:30', 'LUN-VEN 12:15, 15:00, 17:30 | SAB 13:30', 'LUN-VEN 12:15, 15:00, 17:30 | SAM 13:30', 'SEG-SEX 12:15, 15:00, 17:30 | SAB 13:30', '月-金 12:15, 15:00, 17:30 | 土 13:30', '周一-周五 12:15, 15:00, 17:30 | 周六 13:30') },
  { destination: 'Huillinco, Lapahué', schedule: createLoc('LUNES a VIERNES 13:00', 'MON to FRI 13:00', 'MO bis FR 13:00', 'LUN a VEN 13:00', 'LUN à VEN 13:00', 'SEG a SEX 13:00', '月-金 13:00', '周一至周五 13:00') },
  { destination: 'Lamecura, Coñimó', schedule: createLoc('LUNES a VIERNES 12:00, 16:00', 'MON to FRI 12:00, 16:00', 'MO bis FR 12:00, 16:00', 'LUN a VEN 12:00, 16:00', 'LUN à VEN 12:00, 16:00', 'SEG a SEX 12:00, 16:00', '月-金 12:00, 16:00', '周一至周五 12:00, 16:00') },
  { destination: 'Caulín, Chacao', schedule: createLoc('LUNES a VIERNES 12:00, 15:30', 'MON to FRI 12:00, 15:30', 'MO bis FR 12:00, 15:30', 'LUN a VEN 12:00, 15:30', 'LUN à VEN 12:00, 15:30', 'SEG a SEX 12:00, 15:30', '月-金 12:00, 15:30', '周一至周五 12:00, 15:30') },
  { destination: 'Caulín Alto y Bajo', schedule: createLoc('LUNES a VIERNES 13:00', 'MON to FRI 13:00', 'MO bis FR 13:00', 'LUN a VEN 13:00', 'LUN à VEN 13:00', 'SEG a SEX 13:00', '月-金 13:00', '周一至周五 13:00') },
  { destination: 'Chepu', schedule: createLoc('LUN-MIE-VIE 15:00 (SÓLO IDA)', 'MON-WED-FRI 15:00 (ONE WAY)', 'MO-MI-FR 15:00 (EINWEG)', 'LUN-MER-VEN 15:00 (SOLO ANDATA)', 'LUN-MER-VEN 15:00 (ALLER SIMPLE)', 'SEG-QUA-SEX 15:00 (SÓ IDA)', '月-水-金 15:00 (片道)', '周一-周三-周五 15:00 (单程)') },
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  { institution: 'CONAF', address: 'Errázuriz 317', phone1: '56652627520', phone2: '56652622413' },
  { institution: 'CAPITANÍA DE PUERTO', address: 'Lord Cochrane S/N', phone1: '56652623113' },
  { institution: 'BIBLIOTECA PÚBLICA', address: 'Chacabuco 795', phone1: '56652628244' },
  { institution: 'CARABINEROS', address: 'Baquedano 370', phone1: '56652765338' },
  { institution: 'SERNAC', address: 'Blanco Encalada 660', phone1: '56652487738' },
];

export const TRANSLATIONS = {
  welcome: {
    [Language.ESP]: 'Bienvenido a Ancud',
    [Language.ENG]: 'Welcome to Ancud',
    [Language.DEU]: 'Willkommen in Ancud',
    [Language.ITA]: 'Benvenuti a Ancud',
    [Language.FRA]: 'Bienvenue à Ancud',
    [Language.POR]: 'Bem-vindo a Ancud',
    [Language.JPN]: 'アンクドへようこそ',
    [Language.CHN]: '欢迎来到安库德'
  },
  tabs: {
    events: { 
      [Language.ESP]: 'Eventos', [Language.ENG]: 'Events', [Language.DEU]: 'Events', 
      [Language.ITA]: 'Eventi', [Language.FRA]: 'Événements', [Language.POR]: 'Eventos', 
      [Language.JPN]: 'イベント', [Language.CHN]: '活动' 
    },
    business: { 
      [Language.ESP]: 'Negocios', [Language.ENG]: 'Business', [Language.DEU]: 'Geschäfte', 
      [Language.ITA]: 'Affari', [Language.FRA]: 'Commerces', [Language.POR]: 'Negócios', 
      [Language.JPN]: 'ビジネス', [Language.CHN]: '商业' 
    },
    map: { 
      [Language.ESP]: 'Mapa', [Language.ENG]: 'Map', [Language.DEU]: 'Karte', 
      [Language.ITA]: 'Mappa', [Language.FRA]: 'Carte', [Language.POR]: 'Mapa', 
      [Language.JPN]: '地図', [Language.CHN]: '地图' 
    },
    bus: { 
      [Language.ESP]: 'Buses', [Language.ENG]: 'Buses', [Language.DEU]: 'Busse', 
      [Language.ITA]: 'Autobus', [Language.FRA]: 'Bus', [Language.POR]: 'Ônibus', 
      [Language.JPN]: 'バス', [Language.CHN]: '公交' 
    },
    info: { 
      [Language.ESP]: 'Info', [Language.ENG]: 'Info', [Language.DEU]: 'Info', 
      [Language.ITA]: 'Info', [Language.FRA]: 'Infos', [Language.POR]: 'Info', 
      [Language.JPN]: '情報', [Language.CHN]: '信息' 
    },
  },
  viewOnMap: {
    [Language.ESP]: 'Ver en mapa',
    [Language.ENG]: 'View on map',
    [Language.DEU]: 'Auf Karte anzeigen',
    [Language.ITA]: 'Vedi su mappa',
    [Language.FRA]: 'Voir sur la carte',
    [Language.POR]: 'Ver no mapa',
    [Language.JPN]: '地図で見る',
    [Language.CHN]: '在地图上查看'
  },
  callNow: {
    [Language.ESP]: 'LLAMAR AHORA',
    [Language.ENG]: 'CALL NOW',
    [Language.DEU]: 'JETZT ANRUFEN',
    [Language.ITA]: 'CHIAMA ORA',
    [Language.FRA]: 'APPELER',
    [Language.POR]: 'LIGAR AGORA',
    [Language.JPN]: '今すぐ電話',
    [Language.CHN]: '立即拨打'
  },
  busOrigin: {
    [Language.ESP]: 'Desde: Terminal Rural, Colo Colo 318',
    [Language.ENG]: 'From: Rural Terminal, Colo Colo 318',
    [Language.DEU]: 'Von: Ländlicher Terminal, Colo Colo 318',
    [Language.ITA]: 'Da: Terminal Rurale, Colo Colo 318',
    [Language.FRA]: 'De : Terminal Rural, Colo Colo 318',
    [Language.POR]: 'De: Terminal Rural, Colo Colo 318',
    [Language.JPN]: '出発：農村ターミナル、コロコロ 318',
    [Language.CHN]: '出发地：农村航站楼，Colo Colo 318'
  },
  filterAll: {
    [Language.ESP]: 'Todo',
    [Language.ENG]: 'All',
    [Language.DEU]: 'Alle',
    [Language.ITA]: 'Tutti',
    [Language.FRA]: 'Tout',
    [Language.POR]: 'Tudo',
    [Language.JPN]: 'すべて',
    [Language.CHN]: '全部'
  },
  discoverEvents: {
    [Language.ESP]: 'Descubre qué está pasando en Ancud',
    [Language.ENG]: 'Discover what\'s happening in Ancud',
    [Language.DEU]: 'Entdecken Sie, was in Ancud passiert',
    [Language.ITA]: 'Scopri cosa succede a Ancud',
    [Language.FRA]: 'Découvrez ce qui se passe à Ancud',
    [Language.POR]: 'Descubra o que está acontecendo em Ancud',
    [Language.JPN]: 'アンクドのイベントを発見',
    [Language.CHN]: '发现安库德的活动'
  },
  supportLocals: {
    [Language.ESP]: 'Apoya a los artesanos y productores locales',
    [Language.ENG]: 'Support local artisans and producers',
    [Language.DEU]: 'Unterstützen Sie lokale Handwerker und Produzenten',
    [Language.ITA]: 'Sostieni artigiani e produttori locali',
    [Language.FRA]: 'Soutenez les artisans et producteurs locaux',
    [Language.POR]: 'Apoie artesãos e produtores locais',
    [Language.JPN]: '地元の職人と生産者を支援',
    [Language.CHN]: '支持当地工匠和生产者'
  },
  localLabel: {
    [Language.ESP]: 'Local',
    [Language.ENG]: 'Local',
    [Language.DEU]: 'Lokal',
    [Language.ITA]: 'Locale',
    [Language.FRA]: 'Local',
    [Language.POR]: 'Local',
    [Language.JPN]: '地元',
    [Language.CHN]: '本地'
  },
  artisanProduct: {
    [Language.ESP]: 'Producto Artesanal',
    [Language.ENG]: 'Artisan Product',
    [Language.DEU]: 'Handwerkliches Produkt',
    [Language.ITA]: 'Prodotto Artigianale',
    [Language.FRA]: 'Produit Artisanal',
    [Language.POR]: 'Produto Artesanal',
    [Language.JPN]: '職人製品',
    [Language.CHN]: '手工艺品'
  },
  directions: {
    [Language.ESP]: 'Indicaciones',
    [Language.ENG]: 'Directions',
    [Language.DEU]: 'Wegbeschreibung',
    [Language.ITA]: 'Indicazioni',
    [Language.FRA]: 'Itinéraire',
    [Language.POR]: 'Direções',
    [Language.JPN]: '道順',
    [Language.CHN]: '路线'
  },
  howToGetThere: {
    [Language.ESP]: 'Cómo llegar',
    [Language.ENG]: 'How to get there',
    [Language.DEU]: 'Wie man dorthin kommt',
    [Language.ITA]: 'Come arrivare',
    [Language.FRA]: 'Comment s\'y rendre',
    [Language.POR]: 'Como chegar lá',
    [Language.JPN]: '行き方',
    [Language.CHN]: '如何到达'
  },
  noDescription: {
    [Language.ESP]: 'No hay descripción disponible para esta ubicación.',
    [Language.ENG]: 'No description available for this location.',
    [Language.DEU]: 'Für diesen Ort ist keine Beschreibung verfügbar.',
    [Language.ITA]: 'Nessuna descrizione disponibile per questa posizione.',
    [Language.FRA]: 'Aucune description disponible pour cet endroit.',
    [Language.POR]: 'Nenhuma descrição disponível para este local.',
    [Language.JPN]: 'この場所の説明はありません。',
    [Language.CHN]: '此位置没有可用描述。'
  },
  originTerminal: {
    [Language.ESP]: 'Terminal de Origen',
    [Language.ENG]: 'Origin Terminal',
    [Language.DEU]: 'Startterminal',
    [Language.ITA]: 'Terminale di Origine',
    [Language.FRA]: 'Terminal de Départ',
    [Language.POR]: 'Terminal de Origem',
    [Language.JPN]: '出発ターミナル',
    [Language.CHN]: '始发站'
  },
  route: {
    [Language.ESP]: 'Ruta',
    [Language.ENG]: 'Route',
    [Language.DEU]: 'Route',
    [Language.ITA]: 'Percorso',
    [Language.FRA]: 'Route',
    [Language.POR]: 'Rota',
    [Language.JPN]: 'ルート',
    [Language.CHN]: '路线'
  },
  emergencyInfo: {
    [Language.ESP]: 'Emergencia e Info',
    [Language.ENG]: 'Emergency & Info',
    [Language.DEU]: 'Notfall & Info',
    [Language.ITA]: 'Emergenza e Info',
    [Language.FRA]: 'Urgence et Infos',
    [Language.POR]: 'Emergência e Informações',
    [Language.JPN]: '緊急 & 情報',
    [Language.CHN]: '紧急 & 信息'
  },
  importantContacts: {
    [Language.ESP]: 'Contactos importantes en Ancud',
    [Language.ENG]: 'Important contacts in Ancud',
    [Language.DEU]: 'Wichtige Kontakte in Ancud',
    [Language.ITA]: 'Contatti importanti a Ancud',
    [Language.FRA]: 'Contacts importants à Ancud',
    [Language.POR]: 'Contatos importantes em Ancud',
    [Language.JPN]: 'アンクドの重要な連絡先',
    [Language.CHN]: '安库德的重要联系方式'
  },
  secondaryPhone: {
    [Language.ESP]: 'Secundario',
    [Language.ENG]: 'Secondary',
    [Language.DEU]: 'Sekundär',
    [Language.ITA]: 'Secondario',
    [Language.FRA]: 'Secondaire',
    [Language.POR]: 'Secundário',
    [Language.JPN]: '予備',
    [Language.CHN]: '次要'
  },
  months: {
    '01': { [Language.ESP]: 'ENE', [Language.ENG]: 'JAN', [Language.DEU]: 'JAN', [Language.ITA]: 'GEN', [Language.FRA]: 'JAN', [Language.POR]: 'JAN', [Language.JPN]: '1月', [Language.CHN]: '1月' },
    '02': { [Language.ESP]: 'FEB', [Language.ENG]: 'FEB', [Language.DEU]: 'FEB', [Language.ITA]: 'FEB', [Language.FRA]: 'FÉV', [Language.POR]: 'FEV', [Language.JPN]: '2月', [Language.CHN]: '2月' },
  }
};