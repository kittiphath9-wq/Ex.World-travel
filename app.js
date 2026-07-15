/**
 * ==========================================================================
 * WORLD TRAVEL - APPLICATION CORE LOGIC
 * Dynamic SPA routing, Filtering, Reviews, Planner, and Profile (LocalStorage)
 * ==========================================================================
 */

class WorldTravelApp {
    constructor() {
        // Initial Dataset
        this.destinations = [
            {
                id: "kyoto",
                name: "เกียวโต (Kyoto)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$$",
                season: "Spring",
                rating: 4.8,
                description: "สัมผัสจิตวิญญาณแห่งความเป็นญี่ปุ่นโบราณในเกียวโต เมืองหลวงเก่าที่เต็มไปด้วยวัดวาอารามที่งดงาม ป่าไผ่อาราชิยาม่า ศาลเจ้าชินโตสีแดงชาด และย่านเกอิชาแบบดั้งเดิม",
                address: "Kyoto Prefecture, Japan",
                transport: "บินไปลงสนามบินคันไซ (KIX) จากนั้นนั่งรถไฟด่วน Haruka Express วิ่งตรงเข้าสถานีเกียวโต ใช้เวลาประมาณ 75 นาที",
                hotels: [
                    { name: "Sowaka Luxury Ryokan", desc: "ที่พักแบบเรียวกังโบราณสุดหรู ตกแต่งประณีตสะท้อนวิถีเกียวโตดั้งเดิม" },
                    { name: "Ace Hotel Kyoto", desc: "โรงแรมดีไซน์โมเดิร์นผสมผสานงานฝีมือดั้งเดิม เดินทางสะดวกใกล้สถานีรถไฟใต้ดิน" }
                ],
                restaurants: [
                    { name: "Gion Karyo", desc: "ลิ้มลองอาหารคอร์สไคเซกิ (Kaiseki) แบบดั้งเดิมในย่านกิออน" },
                    { name: "Honke Owariya", desc: "ร้านโซบะเก่าแก่อายุกว่า 540 ปี ขึ้นชื่อเรื่องน้ำซุปที่นุ่มนวล" }
                ],
                activities: [
                    { name: "เดินชมสะพานไม้ไผ่ที่ Arashiyama Bamboo Grove", desc: "เดินลัดเลาะป่าไผ่สีเขียวชอุ่มที่พริ้วไหวตามสายลม" },
                    { name: "เยือนศาลเจ้าจิ้งจอก Fushimi Inari", desc: "เดินขึ้นเขาผ่านอุโมงค์เสาโทริอิสีแดงนับหมื่นต้น" }
                ]
            },
            {
                id: "santorini",
                name: "ซานโตรินี (Santorini)",
                country: "กรีซ (Greece)",
                image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
                category: "Beach",
                region: "Europe",
                budget: "$$$",
                season: "Summer",
                rating: 4.9,
                description: "เกาะในฝันริมทะเลอีเจียน โดดเด่นด้วยบ้านหน้าผาสีขาวสะอาดตาตัดกับหลังคาทรงโดมสีน้ำเงินเข้ม ชมพระอาทิตย์ตกดินที่สวยที่สุดในโลกที่หมู่บ้านเอีย (Oia)",
                address: "Cyclades Island Group, Greece",
                transport: "บินต่อเครื่องจากเอเธนส์ไปยังสนามบินซานโตรินี (JTR) หรือนั่งเรือเฟอร์รี่ด่วนจากท่าเรือพีเรอุส (Piraeus) ใช้เวลาประมาณ 4.5 ชั่วโมง",
                hotels: [
                    { name: "Grace Hotel Santorini", desc: "รีสอร์ทระดับหรูบนขอบหน้าผาพร้อมสระว่ายน้ำแบบ Infinity Pool วิวทะเลภูเขาไฟ" },
                    { name: "Canaves Oia Suites", desc: "บ้านถ้ำสไตล์กรีกโบราณที่ตกแต่งโมเดิร์นหรูหรา พร้อมสระส่วนตัว" }
                ],
                restaurants: [
                    { name: "Ambrosia Restaurant", desc: "ร้านอาหารบรรยากาศสุดโรแมนติก เสิร์ฟเมนูเมดิเตอร์เรเนียนบนระเบียงวิวหน้าผา" },
                    { name: "Metaxi Mas", desc: "ร้านสไตล์ทาเวิร์นท้องถิ่น เสิร์ฟอาหารครีตันแท้ๆ รสชาติเข้มข้นจัดจ้าน" }
                ],
                activities: [
                    { name: "ล่องเรือใบลากูนรอบปากปล่องภูเขาไฟ", desc: "ว่ายน้ำในน้ำพุร้อนธรรมชาติและชมพระอาทิตย์หลังจากเรือใบ" },
                    { name: "เดินเท้าตามเส้นทางหน้าผาจาก Fira ไป Oia", desc: "เส้นทางปีนเขาเดินชมวิวชายฝั่งทะเลอีเจียนระยะทาง 9 กม." }
                ]
            },
            {
                id: "paris",
                name: "ปารีส (Paris)",
                country: "ฝรั่งเศส (France)",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Europe",
                budget: "$$$",
                season: "Autumn",
                rating: 4.7,
                description: "เมืองแห่งแสงไฟ ศิลปะ และแฟชั่นระดับโลก เดินเล่นตามถนนช็องเซลิเซ่ ชมความยิ่งใหญ่ของหอไอเฟล และเสพผลงานศิลปะระดับมาสเตอร์พีซที่พิพิธภัณฑ์ลูฟร์",
                address: "Île-de-France, France",
                transport: "บินตรงสู่ท่าอากาศยานปารีส ชาร์ล เดอ โกล (CDG) แล้วต่อรถไฟ RER B เข้าสู่ตัวเมืองปารีสใน 40 นาที",
                hotels: [
                    { name: "Le Bristol Paris", desc: "โรงแรมระดับพาเลซสุดหรูหราสไตล์ฝรั่งเศสแท้ๆ พร้อมสวนหลังบ้านใจกลางปารีส" },
                    { name: "Hotel Les Deux Gares", desc: "บูทีคโฮเต็ลสีสันสดใสฝีมือการออกแบบโดยดีไซนเนอร์ชื่อดังชาวอังกฤษ" }
                ],
                restaurants: [
                    { name: "Le Comptoir du Relais", desc: "ร้านบิสโทรยอดนิยมในย่านแซงต์แชร์แมง เสิร์ฟอาหารปารีเซียงดั้งเดิม" },
                    { name: "L'Ambroisie", desc: "ภัตตาคารมิชลิน 3 ดาวในจัตุรัส Place des Vosges เสิร์ฟอาหารฝรั่งเศสระดับคลาสสิก" }
                ],
                activities: [
                    { name: "ล่องเรือดินเนอร์แม่น้ำแซนตอนพระอาทิตย์ตก", desc: "ชมสถานที่สำคัญที่เปิดไฟประดับสวยงามจากบนผืนน้ำ" },
                    { name: "ทัวร์พิพิธภัณฑ์ลูฟร์และชมภาพโมนาลิซ่า", desc: "ชมงานศิลปะโบราณคดีที่ยิ่งใหญ่และมีค่าที่สุดชิ้นหนึ่งของมนุษยชาติ" }
                ]
            },
            {
                id: "bali",
                name: "บาหลี (Bali)",
                country: "อินโดนีเซีย (Indonesia)",
                image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
                category: "Adventure",
                region: "Asia",
                budget: "$",
                season: "Summer",
                rating: 4.6,
                description: "เกาะแห่งพระเจ้าที่ลงตัวด้วยธรรมชาติและวัฒนธรรมอันล้ำค่า ชมนาขั้นบันไดสีเขียวมรกตที่อูบุด โต้คลื่นริมหาดคูตา หรือพักผ่อนในวิลล่าส่วนตัวราคาประหยัด",
                address: "Bali Province, Indonesia",
                transport: "บินตรงลงท่าอากาศยานนานาชาติงูระห์ไร (DPS) ในบาหลี และเดินทางต่อในเกาะโดยใช้รถเช่าส่วนตัวพร้อมคนขับ",
                hotels: [
                    { name: "Maya Ubud Resort & Spa", desc: "รีสอร์ทริมหุบเขาแม่น้ำเพทนูแวดล้อมด้วยป่าร้อนชื้นอันเงียบสงบ" },
                    { name: "The Edge Bali", desc: "วิลล่าหน้าผาสูงชันในอูลูวาตู มาพร้อมกับสระพื้นกระจกใสมองเห็นเหวเบื้องล่าง" }
                ],
                restaurants: [
                    { name: "Locavore NXT", desc: "ร้านไฟน์ไดนิ่งที่นำวัตถุดิบและพืชผักท้องถิ่นในบาหลีมารังสรรค์อย่างสร้างสรรค์" },
                    { name: "Naughty Nuri's Ubud", desc: "ร้านซี่โครงหมูย่างซอสบาร์บีคิวสูตรบาหลีชื่อดังระดับตำนาน" }
                ],
                activities: [
                    { name: "ชมการแสดงระบำเกจักที่วัดอูลูวาตู", desc: "ชมการร่ายรำพื้นเมืองตัดกับฉากหลังทะเลหน้าผาตอนพระอาทิตย์ตก" },
                    { name: "ปีนเขาไฟบาตูร์ตอนเช้ามืดเพื่อชมแสงแรก", desc: "ผจญภัยเดินป่าขึ้นภูเขาไฟที่ยังคุกรุ่นอยู่เพื่อชมทะเลหมอกยามเช้า" }
                ]
            },
            {
                id: "rome",
                name: "โรม (Rome)",
                country: "อิตาลี (Italy)",
                image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Europe",
                budget: "$$",
                season: "Autumn",
                rating: 4.8,
                description: "ย้อนเวลากลับสู่อาณาจักรโรมันอันยิ่งใหญ่ผ่านสิ่งก่อสร้างอายุหลายพันปีอย่างโคลอสเซียมและวิหารแพนธีออน โยนเหรียญอธิษฐานที่น้ำพุเทรวี่ และชิมเจลาโตแสนอร่อย",
                address: "Lazio Region, Italy",
                transport: "บินไปลงสนามบินฟิอูมิชิโน (FCO) จากนั้นนั่งรถไฟด่วน Leonardo Express เข้าสู่สถานีหลัก Termini ในเวลา 32 นาที",
                hotels: [
                    { name: "Hotel de Russie", desc: "โรงแรมหรูใกล้ย่านบันไดสเปน มีสวนสไตล์อิตาลีอันสวยงามเป็นเอกลักษณ์" },
                    { name: "Singer Palace Hotel", desc: "บูทีคโรงแรมหรูหราที่ตั้งอยู่ในอดีตวังเก่าใจกลางย่านประวัติศาสตร์" }
                ],
                restaurants: [
                    { name: "Da Enzo al 29", desc: "ร้านอาหารสไตล์ Trattoria ดั้งเดิมในย่าน Trastevere ขึ้นชื่อเรื่องเส้นพาสต้ากวนครีมชีส" },
                    { name: "Bonci Pizzarium", desc: "ร้านพิซซ่าตัดแบ่งขายแบบโรมันแป้งฟูนุ่มกรอบนอกยอดนิยม" }
                ],
                activities: [
                    { name: "เจาะลึกโคลอสเซียมและโรมันฟอรัม", desc: "เรียนรู้ประวัติศาสตร์การต่อสู้ของกลาดิเอเตอร์และการปกครองโรมันโบราณ" },
                    { name: "เข้าชมนครรัฐวาติกันและมหาวิหารเซนต์ปีเตอร์", desc: "ชมความประณีตของภาพวาดบนเพดานของไมเคิลแองเจโลในโบสถ์ซิสทีน" }
                ]
            },
            {
                id: "alps",
                name: "เทือกเขาแอลป์ (Swiss Alps)",
                country: "สวิตเซอร์แลนด์ (Switzerland)",
                image: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=800&q=80",
                category: "Nature",
                region: "Europe",
                budget: "$$$",
                season: "Winter",
                rating: 4.9,
                description: "สวรรค์บนดินของคนรักธรรมชาติและหิมะ สัมผัสความงามของยอดเขาแมทเทอร์ฮอร์น นั่งรถไฟด่วนผ่านหุบเขาสลับซับซ้อน หรือทำกิจกรรมสกีสุดตื่นเต้นที่เซอร์แมท",
                address: "Valais Canton, Switzerland",
                transport: "บินลงสนามบินซูริค (ZRH) หรือเจนีวา (GVA) แล้วต่อรถไฟรถไฟด่วนสวิส (SBB) วิ่งเชื่อมสู่สถานีหุบเขาเซอร์แมทได้โดยตรง",
                hotels: [
                    { name: "The Omnia Zermatt", desc: "โรงแรมหรูสไตล์ล็อบบี้ถ้ำที่สร้างอยู่บนหน้าผาสูงชันเห็นวิวยอดเขาชัดเจน" },
                    { name: "Riffelalp Resort 2222m", desc: "ที่พักระดับห้าดาวที่ตั้งอยู่สูงที่สุดท่ามกลางลานสกีหิมะสีขาว" }
                ],
                restaurants: [
                    { name: "Chez Vrony", desc: "ร้านอาหารพื้นเมืองระดับเชฟแนะนำ เสิร์ฟชีสฟองดูว์และเนื้อย่างตากลมหนาววิวแมทเทอร์ฮอร์น" },
                    { name: "Findlerhof", desc: "ร้านอาหารกระท่อมไม้ดั้งเดิม เสิร์ฟอาหารสวิสโฮมเมดแสนอบอุ่น" }
                ],
                activities: [
                    { name: "นั่งรถไฟฟันเฟืองขึ้นยอดเขา Gornergrat", desc: "ชมทิวทัศน์แบบพาโนรามาของธารน้ำแข็งและยอดเขาแอลป์กว่า 29 ยอด" },
                    { name: "สนุกกับการเล่นสกีหิมะระดับโลก", desc: "ท้าทายความหนาวบนลานสกีหิมะธรรมชาติเนื้อเนียนละเอียด" }
                ]
            },
            {
                id: "machu-picchu",
                name: "มาชูปิกชู (Machu Picchu)",
                country: "เปรู (Peru)",
                image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Americas",
                budget: "$$",
                season: "Spring",
                rating: 4.9,
                description: "มหัศจรรย์แห่งโลกใหม่ที่ซ่อนตัวอยู่บนยอดเขาในเทือกเขาแอนดีส เมืองโบราณของอารยธรรมอินคาที่สร้างจากหินขนาดใหญ่สลับซับซ้อนอย่างน่าอัศจรรย์ มองเห็นทิวทัศน์เหนือเมฆได้อย่างชัดเจน",
                address: "Cusco Region, Peru",
                transport: "บินไปเมืองคุสโก (CUZ) แล้วนั่งรถบัสหรือเดินเท้าตาม Inca Trail ระยะทาง 4 วัน หรือนั่งรถไฟ Peru Rail จากอะกัวส์กาลิเอนเตส",
                hotels: [
                    { name: "Inkaterra Machu Picchu Pueblo Hotel", desc: "โรงแรมสไตล์ Eco-lodge ในป่าเมฆกลางหุบเขา ล้อมรอบด้วยพืชพรรณนานาชนิด" },
                    { name: "Sumaq Machu Picchu Hotel", desc: "โรงแรมหรูหราในอะกัวส์กาลิเอนเตส พร้อมสปาและวิวแม่น้ำ Urubamba" }
                ],
                restaurants: [
                    { name: "Indio Feliz Restaurant", desc: "ร้านอาหารฝรั่งเศส-เปรูชื่อดัง ตกแต่งในกระท่อมหิน บรรยากาศอบอุ่นและโรแมนติก" },
                    { name: "Tinkuy Buffet Restaurant", desc: "บุฟเฟ่ต์อาหารเปรูแท้ๆ นำเสนอวัตถุดิบดั้งเดิมจากภูมิภาค Andean" }
                ],
                activities: [
                    { name: "เดินสำรวจนครหินโบราณมาชูปิกชู", desc: "สำรวจวิหาร พระราชวัง และลานสังเกตดาราศาสตร์ที่สร้างโดยชาวอินคา" },
                    { name: "ปีนยอดเขาวายนาปิกชู (Huayna Picchu)", desc: "ผจญภัยปีนยอดเขาสูงชันและชมวิวมาชูปิกชูจากด้านบนแบบ 360 องศา" }
                ]
            },
            {
                id: "new-york",
                name: "นิวยอร์ก (New York City)",
                country: "สหรัฐอเมริกา (USA)",
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
                category: "City",
                region: "Americas",
                budget: "$$$",
                season: "Autumn",
                rating: 4.7,
                description: "มหานครที่ไม่เคยหลับไหล แหล่งรวมวัฒนธรรม ศิลปะ และแฟชั่นระดับโลก เดินเล่นใน Central Park ชมไทม์สแควร์ที่ไฟสว่างตลอดคืน และเยี่ยมชมเทพีเสรีภาพสัญลักษณ์แห่งความฝัน",
                address: "New York City, NY, USA",
                transport: "บินตรงสู่สนามบิน JFK หรือ Newark (EWR) แล้วต่อรถไฟใต้ดินหรือ AirTrain เข้าสู่ใจกลางเมือง",
                hotels: [
                    { name: "The Plaza Hotel", desc: "โรงแรมตำนานสุดหรูริมขอบ Central Park ที่ปรากฏในภาพยนตร์ฮอลลีวูดหลายเรื่อง" },
                    { name: "1 Hotel Brooklyn Bridge", desc: "โรงแรม Eco-luxury ริมแม่น้ำ East River มองเห็นสะพานบรูคลินและ Manhattan Skyline" }
                ],
                restaurants: [
                    { name: "Katz's Delicatessen", desc: "ร้านแซนด์วิชตำนานอายุกว่า 130 ปีในย่าน Lower East Side ขึ้นชื่อเรื่องแซนด์วิชเนื้อ Pastrami" },
                    { name: "Per Se", desc: "ภัตตาคารมิชลิน 3 ดาวของเชฟชื่อดัง Thomas Keller วิวสวนสาธารณะ Central Park" }
                ],
                activities: [
                    { name: "ชมนิวยอร์กจากยอด Top of the Rock", desc: "ชมทิวทัศน์เมืองแบบ 360 องศาจากชั้น 70 ของ Rockefeller Center ตอนพระอาทิตย์ตก" },
                    { name: "เดินชม Brooklyn Bridge และ DUMBO", desc: "ถ่ายภาพสะพานสัญลักษณ์แห่งนิวยอร์กและบรรยากาศย่านศิลปะโบฮีเมียน" }
                ]
            },
            {
                id: "maldives",
                name: "มัลดีฟส์ (Maldives)",
                country: "มัลดีฟส์ (Maldives)",
                image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
                category: "Beach",
                region: "Asia",
                budget: "$$$",
                season: "Winter",
                rating: 5.0,
                description: "สรวงสวรรค์ใต้มหาสมุทรอินเดียที่น้ำทะเลใสแจ๋วสีเทอร์ควอยซ์ล้อมรอบเกาะเล็กๆ สีขาว พักในบังกะโลกลางน้ำหรือวิลล่าชายหาดส่วนตัว ดำน้ำชมแนวปะการังสีสันสดใส",
                address: "Republic of Maldives, Indian Ocean",
                transport: "บินตรงลงสนามบินนานาชาติมาเล (MLE) จากนั้นต่อเรือเร็ว (Speedboat) หรือ Seaplane ไปยังรีสอร์ทแต่ละเกาะ",
                hotels: [
                    { name: "Gili Lankanfushi", desc: "รีสอร์ทหรูระดับตำนานที่ได้รับรางวัล Best Resort ติดต่อกัน พักบนบ้านกลางน้ำ 2 ชั้น" },
                    { name: "Soneva Jani", desc: "วิลล่ากลางน้ำพร้อมสไลเดอร์ส่วนตัวลงสู่ทะเล หลังคาเปิดได้เพื่อดูดาวยามค่ำคืน" }
                ],
                restaurants: [
                    { name: "Sea Fire Salt", desc: "ร้านอาหารริมทะเลเปิดโล่ง เสิร์ฟอาหารทะเลสดๆ ย่างถ่านในบรรยากาศแสงเทียนโรแมนติก" },
                    { name: "The Nautilus Restaurant", desc: "ประสบการณ์ดินเนอร์ใต้น้ำพร้อมฉลามและปลาสีสวยว่ายวนรอบ" }
                ],
                activities: [
                    { name: "ดำน้ำตื้น Snorkeling กับเต่าทะเลและฉลามวาฬ", desc: "สัมผัสโลกใต้น้ำอุดมสมบูรณ์ของมัลดีฟส์ที่เต็มไปด้วยสิ่งมีชีวิตหายาก" },
                    { name: "ล่องเรือ Sunset Cruise พร้อมชมโลมา", desc: "ล่องเรือชมพระอาทิตย์ตกและโลมาที่กระโดดเล่นตามเรือในมหาสมุทร" }
                ]
            },
            {
                id: "kenya-safari",
                name: "ซาฟารีมาไซมารา (Maasai Mara Safari)",
                country: "เคนยา (Kenya)",
                image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
                category: "Nature",
                region: "Africa",
                budget: "$$$",
                season: "Summer",
                rating: 4.9,
                description: "ตื่นตาตื่นใจกับการเดินเคนย่าซาฟารีในอุทยานแห่งชาติมาไซมาราซึ่งมีชื่อเสียงด้านการชมการอพยพ Great Migration ของฝูงวิลดิบีสต์และม้าลายนับล้านตัว",
                address: "Narok County, Kenya",
                transport: "บินไปกรุงไนโรบี (NBO) แล้วต่อเที่ยวบินเล็ก (Safari Air) หรือรถยนต์ขับเคลื่อน 4 ล้อประมาณ 5-6 ชั่วโมงไปยัง Maasai Mara",
                hotels: [
                    { name: "Angama Mara", desc: "แคมป์หรูบนหน้าผาสูงวิวทุ่งหญ้ามาราแบบพาโนรามา ใกล้กับหุบเขา Great Rift Valley" },
                    { name: "Mahali Mzuri", desc: "แคมป์เต็นท์หรูของ Richard Branson พร้อมกับทัวร์ซาฟารีส่วนตัว" }
                ],
                restaurants: [
                    { name: "Bush Dinner Experience", desc: "ดินเนอร์กลางแจ้งในทุ่งหญ้าภายใต้ดวงดาวล้านดวง พร้อมการแสดงวัฒนธรรมมาไซ" },
                    { name: "Fly Camp Breakfast", desc: "อาหารเช้าหลังซาฟารียามเช้าตรู่ท่ามกลางเสียงธรรมชาติแอฟริกา" }
                ],
                activities: [
                    { name: "Game Drive ตอนรุ่งเช้าและพลบค่ำ", desc: "ออกตามล่าหาสัตว์ Big Five ได้แก่ สิงโต ช้าง แรด ควายป่า และเสือดาว" },
                    { name: "นั่งบอลลูนชมทุ่งหญ้าซาวันนาตอนรุ่งเช้า", desc: "ประสบการณ์ครั้งเดียวในชีวิตชมฝูงสัตว์จากบนฟ้ายามรุ่งอรุณ" }
                ]
            },
            {
                id: "bangkok",
                name: "กรุงเทพมหานคร (Bangkok)",
                country: "ไทย (Thailand)",
                image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
                category: "City",
                region: "Asia",
                budget: "$",
                season: "Winter",
                rating: 4.6,
                description: "นครหลวงที่ไม่เคยหลับใหล เมืองแห่งวัดวาอาราม ตึกระฟ้า และสตรีทฟู้ดที่ดีที่สุดในโลก สัมผัสความโกลาหลที่น่าหลงใหลของตลาดน้ำ ล่องเรือในแม่น้ำเจ้าพระยา",
                address: "Bangkok, Thailand",
                transport: "บินตรงลงสนามบินสุวรรณภูมิ (BKK) หรือดอนเมือง (DMK) เข้าเมืองโดยรถไฟ Airport Rail Link หรือ BTS Skytrain",
                hotels: [
                    { name: "Capella Bangkok", desc: "โรงแรมหรูสุดพิเศษริมแม่น้ำเจ้าพระยา ออกแบบเป็นบ้านริมน้ำสไตล์ไทยโมเดิร์น" },
                    { name: "Rosewood Bangkok", desc: "โรงแรมระดับ Ultra-luxury ชั้น 30 บนตึกสูงพร้อม Rooftop bar วิว 360 องศา" }
                ],
                restaurants: [
                    { name: "Jay Fai", desc: "ร้านผัดกระเพราเจ้าแรกในไทยที่ได้รับดาวมิชลิน เสิร์ฟกุ้งผัดกระเพราไข่ดาวสุดพิเศษ" },
                    { name: "Gaggan Anand", desc: "ร้านอาหารอินเดียโมเดิร์นระดับ Best in Asia ประสบการณ์อาหารแบบ 25 คอร์ส" }
                ],
                activities: [
                    { name: "เยือนวัดพระแก้วและพระบรมมหาราชวัง", desc: "สัมผัสความอลังการของวัดสำคัญที่สุดในประเทศไทยและพระราชวังหลวง" },
                    { name: "ช้อปปิ้งตลาดจตุจักรและชิมสตรีทฟู้ด", desc: "สำรวจตลาดสุดอลหม่าน 15,000 ร้านและลิ้มชิมอาหารข้างทางราคาถูก" }
                ]
            },
            {
                id: "sydney",
                name: "ซิดนีย์ (Sydney)",
                country: "ออสเตรเลีย (Australia)",
                image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
                category: "City",
                region: "Asia",
                budget: "$$$",
                season: "Summer",
                rating: 4.7,
                description: "เมืองท่าสวยงามริมอ่าวซิดนีย์ที่โอเปร่าเฮาส์กลายเป็นสัญลักษณ์สถาปัตยกรรมแห่งศตวรรษ เดินเล่นบนสะพาน Harbour Bridge หาดบอนไดอันโด่งดัง และสำรวจ Blue Mountains",
                address: "Sydney, New South Wales, Australia",
                transport: "บินตรงลงสนามบิน Kingsford Smith (SYD) เข้าเมืองโดย Airport Link Train หรือ Sydney Trains",
                hotels: [
                    { name: "Park Hyatt Sydney", desc: "โรงแรมหรูสุดยอดวิวโอเปร่าเฮาส์และสะพาน Harbour Bridge จากทุกห้อง" },
                    { name: "Quay Quarter Lanes Hotel", desc: "บูทีคโฮเต็ลในตึก Heritage ย่าน The Rocks ใกล้ท่าเรือซิดนีย์" }
                ],
                restaurants: [
                    { name: "Quay Restaurant", desc: "ร้านอาหาร Fine Dining ชื่อดังระดับ World's 50 Best วิวซิดนีย์ Harbour อันงดงาม" },
                    { name: "Ippudo Sydney", desc: "ร้านราเมนชื่อดังจากญี่ปุ่น เสิร์ฟน้ำซุป Tonkotsu เข้มข้นยอดฮิต" }
                ],
                activities: [
                    { name: "เดินข้ามสะพาน Sydney Harbour Bridge", desc: "ผจญภัยปีน BridgeClimb ขึ้นไปยังยอดสะพานสูง 134 เมตร วิวเมืองสวยงาม" },
                    { name: "ท่องเที่ยว Bondi Beach และ Coastal Walk", desc: "เดินเล่น Bondi to Coogee Coastal Walk ชมทิวทัศน์ชายฝั่งมหาสมุทรแปซิฟิก" }
                ]
            },
            {
                id: "iceland",
                name: "ไอซ์แลนด์ (Iceland)",
                country: "ไอซ์แลนด์ (Iceland)",
                image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
                category: "Nature",
                region: "Europe",
                budget: "$$$",
                season: "Winter",
                rating: 4.8,
                description: "แผ่นดินน้ำแข็งและไฟ ชมแสงเหนือ (Aurora Borealis) ตัดกับท้องฟ้าสีดำในคืนฤดูหนาว สำรวจน้ำตกสายน้ำสีฟ้า ทุ่งลาวาดำ น้ำพุร้อน Blue Lagoon และธารน้ำแข็งวาตนาโยกุลล์",
                address: "Reykjavik, Iceland",
                transport: "บินตรงลงสนามบิน Keflavik (KEF) ห่างจากเมือง Reykjavik ประมาณ 50 กม. ต่อรถบัสหรือเช่ารถขับเองตามถนน Ring Road",
                hotels: [
                    { name: "Ion Adventure Hotel", desc: "โรงแรมที่ออกแบบสไตล์อาร์กติกโมเดิร์น ตั้งอยู่กลางทุ่งหิมะ วิวแสงเหนือสวยงาม" },
                    { name: "The Retreat at Blue Lagoon", desc: "รีสอร์ทหรูในถ้ำลาวาริม Blue Lagoon พร้อมทางเชื่อมส่วนตัวลงสู่น้ำพุร้อน" }
                ],
                restaurants: [
                    { name: "Dill Restaurant", desc: "ร้านอาหาร Nordic Fine Dining มิชลินสตาร์ ใช้วัตถุดิบพื้นเมืองไอซ์แลนด์แท้ๆ" },
                    { name: "Grillmarkadhurinn", desc: "ร้านสเต็กคุณภาพใช้เนื้อวัวไอซ์แลนด์เลี้ยงตามธรรมชาติ รสชาติเข้มข้น" }
                ],
                activities: [
                    { name: "ล่าแสงเหนือ Northern Lights", desc: "ผจญภัยไปยังพื้นที่มืดเพื่อชมแสง Aurora ระยิบระยับในท้องฟ้าแห่งอาร์กติก" },
                    { name: "เดินสำรวจธารน้ำแข็ง Vatnajokull", desc: "สวมชุดและอุปกรณ์ปีนน้ำแข็งเดินสำรวจถ้ำน้ำแข็งสีฟ้าอมเขียวที่หายาก" }
                ]
            },
            {
                id: "petra",
                name: "เพตรา (Petra)",
                country: "จอร์แดน (Jordan)",
                image: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$$",
                season: "Spring",
                rating: 4.8,
                description: "นครหินโรสที่แกะสลักโดยชาวนาบาเทียนกว่า 2,000 ปีมาแล้ว ซ่อนตัวอยู่ในหุบเขาหินทรายสีชมพู มหัศจรรย์ของโลกแห่งนี้ถูกค้นพบโดยชาวตะวันตกเพียงในปี 1812",
                address: "Ma'an Governorate, Jordan",
                transport: "บินตรงหรือต่อเครื่องไปสนามบิน Queen Alia (AMM) ในอัมมาน แล้วนั่งรถ 3-4 ชั่วโมงหรือบินต่อเครื่องเล็กไป Aqaba",
                hotels: [
                    { name: "Movenpick Resort Petra", desc: "โรงแรมหรูหราที่สุดในเมืองวาดีมูซา มีทางเชื่อมตรงสู่ประตูทางเข้า Petra" },
                    { name: "Petra Moon Hotel", desc: "โรงแรมสไตล์จอร์แดนดั้งเดิม พร้อมชั้นดาดฟ้าวิวมหัศจรรย์สู่ Petra โดยตรง" }
                ],
                restaurants: [
                    { name: "The Cave Bar", desc: "บาร์และร้านอาหารในถ้ำหินสลัก 2,000 ปีแห่งเดียวในโลก บรรยากาศสุดพิเศษ" },
                    { name: "Wrangham House", desc: "ร้านอาหารในบ้านโบราณ เสิร์ฟอาหารจอร์แดนดั้งเดิม เมนูแกะย่างพิเศษ" }
                ],
                activities: [
                    { name: "เดินเข้าสู่ Petra ผ่านหุบเขา Siq", desc: "เดินเท้าผ่านช่องหุบเขาหินทรายสูงชัน 1.2 กม. สู่วิหาร Al-Khazneh ที่ตระการตา" },
                    { name: "Petra by Night Experience", desc: "นั่งเรียบถนนพาเลซและชมเพตราที่ประดับไฟพันดวงยามค่ำคืนสุดเวทมนตร์" }
                ]
            },
            {
                id: "dubai",
                name: "ดูไบ (Dubai)",
                country: "สหรัฐอาหรับเอมิเรตส์ (UAE)",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
                category: "City",
                region: "Asia",
                budget: "$$$",
                season: "Winter",
                rating: 4.7,
                description: "เมืองแห่งอนาคตที่ก้าวหน้าอย่างไม่หยุดนิ่งในทะเลทราย ชมตึก Burj Khalifa สูงที่สุดในโลก ท่องเที่ยวในห้างมอลล์ระดับ Mega เล่น Ski ในทะเลทราย และช้อปปิ้งในตลาดทอง",
                address: "Dubai, UAE",
                transport: "บินตรงลงสนามบิน Dubai International (DXB) ต่อรถไฟฟ้า Dubai Metro Red Line เข้าสู่ใจกลางเมือง",
                hotels: [
                    { name: "Burj Al Arab", desc: "โรงแรมสัญลักษณ์รูปใบเรือตั้งอยู่บนเกาะเทียมกลางทะเล ได้ชื่อว่าหรูหรา 7 ดาว" },
                    { name: "Atlantis The Royal", desc: "รีสอร์ทหรูหราล่าสุดบน Palm Jumeirah พร้อมสวนน้ำและพูลไฟน์ไดนิ่ง" }
                ],
                restaurants: [
                    { name: "Nobu Dubai", desc: "ร้านอาหารญี่ปุ่นฟิวชั่นชั้นนำระดับโลกของเชฟ Nobu Matsuhisa บน Atlantis" },
                    { name: "Al Hadheerah", desc: "ดินเนอร์ในทะเลทรายแบบ Desert Feast พร้อมการแสดงวัฒนธรรมอาหรับ" }
                ],
                activities: [
                    { name: "ชมวิว 360 องศาจากยอด Burj Khalifa", desc: "ขึ้นลิฟต์ความเร็วสูงสู่ชั้น 148 และ 125 ชมเมืองดูไบทั้งหมดในที่เดียว" },
                    { name: "Safari ทะเลทรายพร้อมขี่อูฐ", desc: "ตะลุยทะเลทรายด้วยรถ SUV 4x4 ขี่อูฐ และชมพระอาทิตย์ตกในทะเลทราย" }
                ]
            },
            {
                id: "tokyo",
                name: "โตเกียว (Tokyo)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
                category: "City",
                region: "Asia",
                budget: "$$",
                season: "Spring",
                rating: 4.9,
                description: "มหานครที่ผสมผสานความทันสมัยสุดขีดกับวัฒนธรรมดั้งเดิมได้อย่างลงตัว ย่านชิบูยาข้ามสี่แยกที่พลุกพล่านที่สุดในโลก อาหารระดับมิชลิน วัดเซน และสวนซากุระยามฤดูใบไม้ผลิ",
                address: "Tokyo, Japan",
                transport: "บินตรงลงสนามบิน Narita (NRT) หรือ Haneda (HND) เข้าสู่เมืองโดยรถไฟ Narita Express หรือ Monorail",
                hotels: [
                    { name: "Park Hyatt Tokyo", desc: "โรงแรมที่ปรากฏในภาพยนตร์ Lost in Translation ชั้น 39-52 วิว Mount Fuji" },
                    { name: "Aman Tokyo", desc: "โรงแรมหรูสไตล์ญี่ปุ่นร่วมสมัยในตึก Otemachi Tower พร้อม Onsen บนชั้น 33" }
                ],
                restaurants: [
                    { name: "Sukiyabashi Jiro", desc: "ร้านซูชิตำนาน 3 มิชลินสตาร์ จากสารคดี Jiro Dreams of Sushi ที่ขึ้นชื่อทั่วโลก" },
                    { name: "Ichiran Ramen", desc: "ร้านราเมนสไตล์ Solo Dining ที่กั้นห้องให้แต่ละคนนั่งคนเดียว เน้นสมาธิกับอาหาร" }
                ],
                activities: [
                    { name: "ชมซากุระที่สวนอุเอโนะและอาราชิยามา", desc: "สัมผัสเทศกาล Hanami ชมดอกซากุระบานสะพรั่งราวกาลเวลาหยุดนิ่ง" },
                    { name: "สำรวจย่าน Shibuya, Harajuku และ Akihabara", desc: "ดำดิ่งสู่วัฒนธรรมป็อปของญี่ปุ่น Cosplay แฟชั่นสุดแปลก และ Anime & Gaming" }
                ]
            },
            {
                id: "cape-town",
                name: "เคปทาวน์ (Cape Town)",
                country: "แอฟริกาใต้ (South Africa)",
                image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
                category: "Nature",
                region: "Africa",
                budget: "$$",
                season: "Summer",
                rating: 4.7,
                description: "เมืองมหัศจรรย์ที่ตั้งอยู่ระหว่างภูเขาและสองมหาสมุทร ยอดเขาเทเบิลเมาเทนแบนราบสมชื่อสถิตตระหง่านเหนือเมือง ไร่ไวน์หมู่บ้าน Stellenbosch และแหลม Cape of Good Hope",
                address: "Cape Town, Western Cape, South Africa",
                transport: "บินตรงลงสนามบิน Cape Town International (CPT) ต่อรถแท็กซี่หรือบัส MyCiti เข้าสู่เมือง",
                hotels: [
                    { name: "Ellerman House", desc: "โรงแรมบูทีคหรูวิวทะเล Atlantic Ocean บนเนินเขา Bantry Bay ตกแต่งด้วยงานศิลปะแอฟริกัน" },
                    { name: "The Silo Hotel", desc: "โรงแรมในอดีตไซโลเก็บเมล็ดข้าว เปลี่ยนเป็นโรงแรมดีไซน์ระดับ World Best สุดอลังการ" }
                ],
                restaurants: [
                    { name: "La Colombe", desc: "ร้านอาหาร Fine Dining ชื่อดังระดับ Top 50 World ในไร่ไวน์ Constantia" },
                    { name: "The Test Kitchen", desc: "ร้านอาหาร Experimental Cuisine มิชลินสตาร์ของเชฟชั้นนำแอฟริกาใต้" }
                ],
                activities: [
                    { name: "ขึ้นกระเช้า Table Mountain Aerial Cableway", desc: "ชมวิวแบบ 360 องศาของเคปทาวน์ สองมหาสมุทร และแหลมกู๊ดโฮปจากยอดภูเขา" },
                    { name: "เยือน Cape of Good Hope และ Boulders Penguin Colony", desc: "ชมจุดที่สองมหาสมุทรพบกันและเล่นกับนกเพนกวินแอฟริกันน่ารักแบบใกล้ชิด" }
                ]
            },
            {
                id: "venice",
                name: "เวนิส (Venice)",
                country: "อิตาลี (Italy)",
                image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Europe",
                budget: "$$$",
                season: "Spring",
                rating: 4.8,
                description: "เมืองลอยน้ำอายุพันปีที่ไม่มีถนน มีแต่คลองเป็นเส้นเลือดแบ่งย่านต่างๆ นั่งเรือกอนโดล่าผ่านคลอง Grande ชมมหาวิหาร San Marco และพระราชวัง Doge's Palace อันอลังการ",
                address: "Venice, Veneto, Italy",
                transport: "บินลงสนามบิน Marco Polo (VCE) แล้วนั่งเรือ Alilaguna หรือ Water Bus (Vaporetto) เข้าสู่เกาะเวนิส",
                hotels: [
                    { name: "Belmond Hotel Cipriani", desc: "โรงแรมตำนานบนเกาะ Giudecca วิวอ่าวเวนิสสวยงาม ล่องเรือไปจัตุรัส San Marco ใน 2 นาที" },
                    { name: "Gritti Palace", desc: "พระราชวังเก่าแก่ริมคลอง Grand Canal เปลี่ยนเป็นโรงแรม Luxury Collection" }
                ],
                restaurants: [
                    { name: "Osteria alle Testiere", desc: "ร้านอาหารทะเลเล็กๆ แต่โด่งดัง เสิร์ฟกุ้งและหอยสดจากลากูน สไตล์ Venetian แท้" },
                    { name: "Harry's Bar", desc: "บาร์ตำนานที่เป็นแหล่งกำเนิด Bellini Cocktail ชื่อดัง Ernest Hemingway เคยเป็นขาประจำ" }
                ],
                activities: [
                    { name: "นั่งกอนโดล่าชมคลองสวยของเวนิส", desc: "ล่องเรือกอนโดล่าพร้อม Gondolier ร้องเพลงผ่านคลองแคบๆ ระหว่างอาคารสไตล์ Gothic" },
                    { name: "เดินชม St. Mark's Square และ Doge's Palace", desc: "สำรวจจัตุรัสอันยิ่งใหญ่ มหาวิหาร Byzantine และพิพิธภัณฑ์วังอายุ 700 ปี" }
                ]
            },
            {
                id: "fiordland",
                name: "ฟยอร์ดแลนด์ (Fiordland NZ)",
                country: "นิวซีแลนด์ (New Zealand)",
                image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
                category: "Nature",
                region: "Asia",
                budget: "$$",
                season: "Autumn",
                rating: 4.9,
                description: "อุทยานแห่งชาติที่ยิ่งใหญ่อลังการที่สุดในนิวซีแลนด์ ฟยอร์ด Milford Sound ที่น้ำตกหลายสายพุ่งลงสู่ทะเลสาบสีเขียว ทิวเขาสูงตระหง่านและป่าฝนโบราณที่ไม่เคยถูกแตะต้อง",
                address: "Fiordland National Park, Southland, New Zealand",
                transport: "บินไปเมือง Queenstown (ZQN) หรือ Invercargill (IVC) แล้วนั่งรถบัสหรือเครื่องบินเล็กไปยัง Milford Sound",
                hotels: [
                    { name: "Milford Sound Lodge", desc: "ที่พักในป่าแห่งเดียวในหุบเขา Milford Sound พักในห้องกระท่อมไม้หรือเต็นท์หรู Glamping" },
                    { name: "Eichardt's Private Hotel Queenstown", desc: "โรงแรมบูทีคหรูหราริมทะเลสาบ Wakatipu ในเมือง Queenstown ฐานทัพสำรวจ Fiordland" }
                ],
                restaurants: [
                    { name: "Fishbone Bar and Grill", desc: "ร้านอาหารทะเลสดในเมือง Queenstown เสิร์ฟปลาแซลมอนและหอยนางรมนิวซีแลนด์" },
                    { name: "The Boatshed Restaurant", desc: "ร้านอาหาร Waterfront บรรยากาศสบาย เสิร์ฟ New Zealand Lamb Rack ที่อร่อยสุดยอด" }
                ],
                activities: [
                    { name: "ล่องเรือชม Milford Sound ท่ามกลางฝน", desc: "ล่องเรือ Fiord ดูน้ำตกหลายสาย โลมาชมพู แมวน้ำนอนอาบแดด และนกเพนกวิน" },
                    { name: "เดินป่า Milford Track 4 วัน", desc: "เส้นทางเดินป่าที่ได้รับการยกย่องว่าสวยที่สุดในโลกในอุทยานธรรมชาติ UNESCO" }
                ]
            },
            {
                id: "amazon",
                name: "อะเมซอน (Amazon Rainforest)",
                country: "บราซิล (Brazil)",
                image: "https://images.unsplash.com/photo-1593649967503-657b98a7c4f3?auto=format&fit=crop&w=800&q=80",
                category: "Adventure",
                region: "Americas",
                budget: "$$",
                season: "Spring",
                rating: 4.8,
                description: "ปอดแห่งโลกที่ยิ่งใหญ่ที่สุดบนผืนดิน ป่าฝนเขตร้อนอะเมซอนที่ปกคลุมพื้นที่กว่า 5 ล้านตารางกิโลเมตร ที่อยู่อาศัยของสัตว์ป่ากว่า 10% ของโลก ล่องเรือสำรวจแม่น้ำ พบชนเผ่าพื้นเมือง",
                address: "Amazon Basin, Amazonas State, Brazil",
                transport: "บินไปเมือง Manaus (MAO) ซึ่งเป็นประตูสู่อะเมซอน จากนั้นต่อเรือหรือเครื่องบินเล็กเข้าสู่ป่าลึก",
                hotels: [
                    { name: "Anavilhanas Jungle Lodge", desc: "ที่พักกลางป่าบนเสาเหนือน้ำ ใกล้หมู่เกาะแห่งแม่น้ำ Rio Negro อันงดงาม" },
                    { name: "Cristalino Lodge", desc: "เอโค-ลอดจ์รางวัลดีเด่นระดับโลกในป่าเพรสตีน ออกทัวร์เดินป่าและดูนก" }
                ],
                restaurants: [
                    { name: "Banzeiro Restaurant", desc: "ร้านอาหารชื่อดังในมาเนาส์ เสิร์ฟอาหาร Amazonian Cuisine ปลาน้ำจืดหายากและผลไม้ป่า" },
                    { name: "Caxiri Restaurant", desc: "ร้านอาหารในลอดจ์ เสิร์ฟอาหารพื้นเมืองสูตรชนเผ่า อร่อยแบบออร์แกนิกแท้ๆ" }
                ],
                activities: [
                    { name: "ล่องเรือสำรวจแม่น้ำอะเมซอน", desc: "นั่งเรือแคนูผ่านป่าน้ำท่วมพบนกทูแคน จระเข้ Caiman โลมาแม่น้ำสีชมพู" },
                    { name: "เดินป่าตอนกลางคืน Night Walk", desc: "สำรวจสัตว์หากินกลางคืน กบพิษสีสัน แมงมุม และแมลงอีกนับพัน" }
                ]
            },

            // ===== 🇯🇵 JAPAN FOCUS - 20 สถานที่ญี่ปุ่น =====
            {
                id: "osaka",
                name: "โอซาก้า (Osaka)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1589452271712-64b8a66c7b77?auto=format&fit=crop&w=800&q=80",
                category: "City",
                region: "Asia",
                budget: "$$",
                season: "Autumn",
                rating: 4.8,
                description: "เมืองอาหารหลวงของญี่ปุ่นที่ขึ้นชื่อเรื่อง Kuidaore (กินจนล้มละลาย) ตะลุยถนน Dotonbori ที่สว่างไสวด้วยป้ายนีออน ชิมทาโกยากิ โอโคโนมิยากิ คุชิคัตสึ และสัมผัสปราสาทโอซาก้าที่ยิ่งใหญ่",
                address: "Osaka Prefecture, Japan",
                transport: "บินลงสนามบินคันไซ (KIX) หรือสนามบินอิตามิ (ITM) แล้วต่อรถไฟ Nankai หรือ JR เข้าสู่ใจกลางเมือง",
                hotels: [
                    { name: "The St. Regis Osaka", desc: "โรงแรม 5 ดาวหรูหราใจกลาง Midosuji บริการ Butler 24 ชั่วโมง วิวเมืองพาโนรามา" },
                    { name: "Cross Hotel Osaka", desc: "โรงแรมดีไซน์ทันสมัยริมแม่น้ำ ใกล้ย่าน Dotonbori และ Shinsaibashi" }
                ],
                restaurants: [
                    { name: "Ajinoya Takoyaki", desc: "ร้านทาโกยากิตำนาน เนื้อนุ่มเต็มไข่ปลาหมึก กลิ่นซอสโซ่หอมหวล" },
                    { name: "Mizuno Okonomiyaki", desc: "ร้านโอโคโนมิยากิดั้งเดิมอายุกว่า 70 ปี สูตรเฉพาะของโอซาก้า" }
                ],
                activities: [
                    { name: "สำรวจย่าน Dotonbori ตอนกลางคืน", desc: "เดินชมป้ายนีออนขนาดยักษ์และเครื่องหมาย Glico Man สัญลักษณ์แห่งโอซาก้า" },
                    { name: "เที่ยวชมปราสาทโอซาก้า (Osaka Castle)", desc: "ปราสาทประวัติศาสตร์กลางสวนซากุระที่สวยงาม พร้อมพิพิธภัณฑ์ภายใน" }
                ]
            },
            {
                id: "hokkaido",
                name: "ฮอกไกโด (Hokkaido)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1548865760-e65bdb8e5ec4?auto=format&fit=crop&w=800&q=80",
                category: "Nature",
                region: "Asia",
                budget: "$$",
                season: "Winter",
                rating: 4.9,
                description: "เกาะทางเหนือของญี่ปุ่นที่เต็มไปด้วยทิวทัศน์ธรรมชาติอันบริสุทธิ์ ทุ่งลาเวนเดอร์สีม่วงที่ฟุราโนะยามฤดูร้อน ลานสกีชั้นนำโลกที่นิเซโกะ และหิมะขาวโพลนหนาแน่นอันลือชื่อ",
                address: "Hokkaido Prefecture, Japan",
                transport: "บินตรงลงสนามบิน New Chitose (CTS) ใกล้ซัปโปโร หรือสนามบิน Asahikawa (AKJ) แล้วต่อรถไฟหรือรถบัส",
                hotels: [
                    { name: "Hoshino Resorts TOMAMU", desc: "รีสอร์ทหิมะระดับโลกในฮอกไกโด พร้อม Ice Village ในฤดูหนาวและสระทะเลหมอก" },
                    { name: "Niseko Village Ski Resort", desc: "รีสอร์ทสกีระดับ World Class ในนิเซโกะ หิมะเนื้อเนียนที่สุดในโลก" }
                ],
                restaurants: [
                    { name: "Ramen Santouka", desc: "ร้านราเมนชื่อดังต้นกำเนิดจากฮอกไกโด น้ำซุปเข้มข้นหอมกลิ่นงาขาว" },
                    { name: "Hakodate Morning Market", desc: "ตลาดเช้าอาหารทะเลสดประจำเมืองฮาโกดาเตะ ปูยักษ์และซีฟู้ดสดใหม่" }
                ],
                activities: [
                    { name: "ชมทุ่งลาเวนเดอร์ที่ Farm Tomita ฟุราโนะ", desc: "ทุ่งดอกลาเวนเดอร์สีม่วงสดใสที่ใหญ่ที่สุดในญี่ปุ่น บานสะพรั่งเดือนกรกฎาคม" },
                    { name: "เล่นสกีที่ Niseko Grand Hirafu", desc: "ท้าทายลานสกีหิมะผงลึกที่ดีที่สุดในเอเชีย นิยมในหมู่นักสกีระดับโลก" }
                ]
            },
            {
                id: "nara",
                name: "นารา (Nara)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1582550945154-1e6ff1acf0ae?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$",
                season: "Autumn",
                rating: 4.7,
                description: "เมืองหลวงแห่งแรกของญี่ปุ่น บ้านเกิดของกวางศักดิ์สิทธิ์ที่เดินอิสระทั่วเมือง วัดโทไดจิที่ประดิษฐานพระพุทธรูปสำริดขนาดใหญ่ที่สุดในโลก และป่าสวนนารา Kasugayama",
                address: "Nara Prefecture, Japan",
                transport: "นั่งรถไฟจากโอซาก้าหรือเกียวโต ใช้เวลาประมาณ 40-60 นาที ทั้ง Kintetsu Line และ JR Line",
                hotels: [
                    { name: "Nara Hotel", desc: "โรงแรมประวัติศาสตร์อายุกว่า 100 ปี อดีตที่พักของราชวงศ์ญี่ปุ่นและแขกวีไอพีนานาชาติ" },
                    { name: "Asukarou Ryokan", desc: "เรียวกังดั้งเดิมในสวนสไตล์ญี่ปุ่น พร้อม Onsen และอาหารเย็นแบบ Kaiseki" }
                ],
                restaurants: [
                    { name: "Kasugano Chaya", desc: "ร้านน้ำชาดั้งเดิมในสวนสาธารณะนารา เสิร์ฟ Matcha และขนมญี่ปุ่นโบราณ" },
                    { name: "Hiraso", desc: "ร้านอาหารญี่ปุ่นดั้งเดิมชื่อดังในนารา เมนูหม้อไฟ Nabe สูตรเฉพาะตัว" }
                ],
                activities: [
                    { name: "ให้อาหารกวางศักดิ์สิทธิ์ที่สวนนารา", desc: "กวางมากกว่า 1,200 ตัวเดินอิสระทั่วเมือง กินข้าวปังจากมือนักท่องเที่ยวได้เลย" },
                    { name: "เยือนวัดโทไดจิและพระพุทธรูปยักษ์", desc: "ชมพระพุทธรูปสำริด Daibutsu สูง 15 เมตร ในวิหารไม้ที่ใหญ่ที่สุดในโลก" }
                ]
            },
            {
                id: "hiroshima",
                name: "ฮิโรชิมา (Hiroshima)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$",
                season: "Spring",
                rating: 4.8,
                description: "เมืองแห่งสันติภาพที่ฟื้นฟูตัวเองจากโศกนาฎกรรมสงครามสู่มหานครที่เต็มไปด้วยชีวิตชีวา พิพิธภัณฑ์สันติภาพ โดมระเบิดปรมาณู และเกาะ Miyajima กับโทริอิลอยน้ำ",
                address: "Hiroshima Prefecture, Japan",
                transport: "นั่งรถไฟ Shinkansen จากโอซาก้า 85 นาที หรือจากโตเกียวประมาณ 4 ชั่วโมง",
                hotels: [
                    { name: "Sheraton Grand Hiroshima Hotel", desc: "โรงแรมหรู 5 ดาวติดสถานีรถไฟ Hiroshima ใจกลางเมือง วิวพาโนรามา" },
                    { name: "Hotel Granvia Hiroshima", desc: "โรงแรม Business Luxury ในสถานีรถไฟหลัก เดินทางสะดวกสบาย" }
                ],
                restaurants: [
                    { name: "Nagataya Okonomiyaki", desc: "ร้านโอโคโนมิยากิสไตล์ฮิโรชิมาที่แตกต่างจากโอซาก้า ซ้อนชั้นแป้ง ผัก เส้น" },
                    { name: "Kakifuku", desc: "ร้านหอยนางรมฮิโรชิมาระดับดีเยี่ยม เมืองนี้ขึ้นชื่อเรื่องหอยนางรมที่ดีที่สุดในญี่ปุ่น" }
                ],
                activities: [
                    { name: "เยือนพิพิธภัณฑ์สันติภาพฮิโรชิมา", desc: "สัมผัสประวัติศาสตร์และเรื่องราวความรอดพ้นจากระเบิดปรมาณูในปี 1945" },
                    { name: "ชมโทริอิลอยน้ำที่เกาะ Miyajima", desc: "นั่งเรือข้ามฟากสู่เกาะ Miyajima ชม Torii Gate ลอยน้ำสีแดงทอง มรดกโลก UNESCO" }
                ]
            },
            {
                id: "nikko",
                name: "นิกโก (Nikko)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$$",
                season: "Autumn",
                rating: 4.7,
                description: "เมืองมรดกโลก UNESCO ในป่าเขาวิจิตรตระการตา โลดท่องสุสาน Toshogu อันหรูหราสีทอง ชมน้ำตก Kegon ที่สวยงาม และทะเลสาบ Chuzenji ท่ามกลางใบไม้เปลี่ยนสีทองในฤดูใบไม้ร่วง",
                address: "Nikko, Tochigi Prefecture, Japan",
                transport: "นั่งรถไฟสาย Tobu Nikko Line จากสถานี Asakusa โตเกียว ใช้เวลาประมาณ 2 ชั่วโมง",
                hotels: [
                    { name: "The Ritz-Carlton Nikko", desc: "โรงแรมหรูรุ่นใหม่ริมทะเลสาบ Chuzenji วิวธรรมชาติอันงดงาม บริการระดับโลก" },
                    { name: "Nikko Park Lodge", desc: "ที่พักสไตล์ธรรมชาติในป่า Nikko ใกล้ทะเลสาบและน้ำตกชื่อดัง" }
                ],
                restaurants: [
                    { name: "Nikko Kanaya Hotel Restaurant", desc: "ร้านอาหารในโรงแรมประวัติศาสตร์ 150 ปี เสิร์ฟอาหารญี่ปุ่นและตะวันตกแบบคลาสสิก" },
                    { name: "Yuba Cuisine Izumiya", desc: "ร้านอาหารพิเศษเสิร์ฟ Yuba (เต้าหู้แผ่น) อาหารขึ้นชื่อของ Nikko" }
                ],
                activities: [
                    { name: "ชม Toshogu Shrine อันงดงามยิ่งใหญ่", desc: "สุสานและศาลเจ้าสำหรับ Tokugawa Ieyasu ตกแต่งประดับทองและสีสันอลังการ" },
                    { name: "เที่ยวชมน้ำตก Kegon และทะเลสาบ Chuzenji", desc: "น้ำตกสูง 97 เมตรที่สวยที่สุดในญี่ปุ่น และทะเลสาบบนภูเขาไฟ" }
                ]
            },
            {
                id: "hakone",
                name: "ฮาโกเน่ (Hakone)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&w=800&q=80",
                category: "Nature",
                region: "Asia",
                budget: "$$",
                season: "Autumn",
                rating: 4.8,
                description: "สวนสวรรค์แห่งรีสอร์ทบนภูเขาและน้ำพุร้อน วิวภูเขาไฟฟูจิสะท้อนบนทะเลสาบ Ashi ล่องเรือในทะเลสาบ นั่งกระเช้าข้ามภูเขาไฟ และแช่ออนเซ็นท่ามกลางวิวธรรมชาติ",
                address: "Hakone, Kanagawa Prefecture, Japan",
                transport: "นั่งรถไฟ Romancecar จากสถานี Shinjuku โตเกียว ใช้เวลาประมาณ 85 นาที",
                hotels: [
                    { name: "Hakone Ginyu Ryokan", desc: "เรียวกังหรูสุดพิเศษพร้อม Onsen ส่วนตัวและวิวภูเขาฟูจิที่มองเห็นจากห้องนอน" },
                    { name: "The Prince Hakone", desc: "โรงแรม 5 ดาวริมทะเลสาบ Ashi พร้อมสระว่ายน้ำและสปาหรูหรา" }
                ],
                restaurants: [
                    { name: "Hakone Tozan Railway Side Cafe", desc: "คาเฟ่บรรยากาศดีริมรางรถไฟ เสิร์ฟกาแฟและขนมหวานดูใบไม้เปลี่ยนสี" },
                    { name: "Naraya Cafe", desc: "ร้านอาหารในบ้านโบราณริมน้ำ เสิร์ฟเมนูญี่ปุ่นท้องถิ่น บรรยากาศงดงาม" }
                ],
                activities: [
                    { name: "นั่งกระเช้า Hakone Ropeway ข้ามภูเขาไฟ", desc: "ข้ามปากปล่องภูเขาไฟ Owakudani ชมควันซัลเฟอร์พุ่งและวิวฟูจิแบบพาโนรามา" },
                    { name: "แช่ Onsen ชมวิวภูเขาฟูจิ", desc: "สัมผัสประสบการณ์แช่น้ำพุร้อนกลางแจ้ง (Rotenburo) พร้อมวิวภูเขาฟูจิสวยงาม" }
                ]
            },
            {
                id: "mount-fuji",
                name: "ภูเขาไฟฟูจิ (Mt. Fuji)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?auto=format&fit=crop&w=800&q=80",
                category: "Adventure",
                region: "Asia",
                budget: "$$",
                season: "Summer",
                rating: 4.9,
                description: "ยอดเขาศักดิ์สิทธิ์สัญลักษณ์แห่งญี่ปุ่น ภูเขาไฟรูปทรงสมมาตรสูง 3,776 เมตร มรดกโลก UNESCO ปีนสู่ยอดเขาในฤดูร้อน หรือชมความงามจากบริเวณ Fuji Five Lakes",
                address: "Shizuoka / Yamanashi Prefecture, Japan",
                transport: "นั่งรถบัสหรือรถไฟจากโตเกียวไปยัง Kawaguchiko สถานีชมวิวฟูจิ หรือไปยังจุด 5th Station ฐานปีนเขา",
                hotels: [
                    { name: "Kozantei Ubuya Ryokan", desc: "เรียวกังวิว Mt. Fuji ที่ดีที่สุด ริมทะเลสาบ Kawaguchi พร้อม Onsen ส่วนตัว" },
                    { name: "Fuji Speedway Hotel", desc: "โรงแรมดีไซน์โมเดิร์นใกล้สนามแข่งรถ วิวภูเขาฟูจิอย่างชัดเจน" }
                ],
                restaurants: [
                    { name: "Houtou Fudou", desc: "ร้านอาหาร Houtou ซุปเส้นหนาแบบท้องถิ่นยามานาชิ เคี่ยวกับผักและหมู" },
                    { name: "Lake Kawaguchi Lakeside Restaurant", desc: "ร้านอาหารวิวทะเลสาบและภูเขาฟูจิสะท้อนน้ำ บรรยากาศโรแมนติก" }
                ],
                activities: [
                    { name: "ปีนภูเขาฟูจิ (Yoshida Trail)", desc: "ผจญภัยปีนขึ้นสู่ยอดเขาในฤดูร้อน (กรกฎาคม-กันยายน) ชมพระอาทิตย์ขึ้นเหนือก้อนเมฆ" },
                    { name: "ชมวิวจาก Chureito Pagoda", desc: "เจดีย์สีแดงห้าชั้นตัดกับหิมะบนยอดฟูจิ หนึ่งในภาพถ่ายที่โด่งดังที่สุดของญี่ปุ่น" }
                ]
            },
            {
                id: "sapporo",
                name: "ซัปโปโร (Sapporo)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1576762108769-f99b7ffa3484?auto=format&fit=crop&w=800&q=80",
                category: "City",
                region: "Asia",
                budget: "$$",
                season: "Winter",
                rating: 4.7,
                description: "เมืองหลวงของฮอกไกโดที่มีชื่อเสียงเรื่องเทศกาลหิมะ Sapporo Snow Festival ที่ยิ่งใหญ่ มีประติมากรรมหิมะขนาดยักษ์ ราเมนซัปโปโรชื่อดัง และเบียร์ Sapporo ต้นกำเนิดในโรงงานประวัติศาสตร์",
                address: "Sapporo, Hokkaido, Japan",
                transport: "บินตรงลงสนามบิน New Chitose (CTS) แล้วนั่งรถไฟ Airport Express ถึงซัปโปโรใน 36 นาที",
                hotels: [
                    { name: "JR Tower Hotel Nikko Sapporo", desc: "โรงแรมบนตึก JR Tower ชั้น 22-35 วิวเมืองซัปโปโรแบบ 360 องศา" },
                    { name: "Sapporo Grand Hotel", desc: "โรงแรมระดับตำนานกลางเมือง เปิดมาตั้งแต่ปี 1934 มีร้านอาหารหลายชนิด" }
                ],
                restaurants: [
                    { name: "Ramen Yokocho (Ramen Alley)", desc: "ซอยราเมน 17 ร้านใจกลางซัปโปโร ราเมนซีอิ๊วขาวและมิโซะสูตรดั้งเดิมจาก 1950" },
                    { name: "Sapporo Beer Garden", desc: "ดื่มเบียร์ Sapporo ต้นตำรับในโรงงานเก่าอายุ 140 ปี บุฟเฟต์เนื้อย่าง Genghis Khan" }
                ],
                activities: [
                    { name: "ชมเทศกาล Sapporo Snow Festival (กุมภาพันธ์)", desc: "เทศกาลหิมะยิ่งใหญ่ระดับโลก ประติมากรรมหิมะขนาดใหญ่กว่า 200 ผลงาน" },
                    { name: "สำรวจ Hokkaido University Ginkgo Avenue", desc: "ถนนต้นแปะก้วยสีทองโอบล้อมทางเดินในมหาวิทยาลัย สวยงามยามฤดูใบไม้ร่วง" }
                ]
            },
            {
                id: "kanazawa",
                name: "คานาซาวะ (Kanazawa)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$$",
                season: "Autumn",
                rating: 4.7,
                description: "เกียวโตน้อยของญี่ปุ่นที่รอดพ้นจากสงครามโลก สวน Kenroku-en หนึ่งในสามสวนที่สวยที่สุดของญี่ปุ่น ย่านซามูไร Nagamachi และเกอิชา Higashi Chaya ที่ยังคงความดั้งเดิม",
                address: "Kanazawa, Ishikawa Prefecture, Japan",
                transport: "นั่งรถไฟ Shinkansen Hakutaka จากโตเกียว ใช้เวลาประมาณ 2.5 ชั่วโมง หรือจากโอซาก้าประมาณ 2.5 ชั่วโมง",
                hotels: [
                    { name: "Kanazawa Hyakumangoku Hotel", desc: "โรงแรมสไตล์ญี่ปุ่นดั้งเดิม บริการ Onsen และอาหารมื้อค่ำแบบ Kaiseki ท้องถิ่น" },
                    { name: "ANA Crowne Plaza Kanazawa", desc: "โรงแรมระดับ 5 ดาวใจกลางคานาซาวะ ใกล้ตลาดโอมิโช่และสวน Kenroku-en" }
                ],
                restaurants: [
                    { name: "Omicho Ichiba Market", desc: "ตลาดอาหารสดที่ใหญ่ที่สุดในฮอกุริกุ อาหารทะเลสดๆ จากทะเลญี่ปุ่น" },
                    { name: "Taian Dining", desc: "ร้านอาหาร Kaiseki สุดพิเศษที่ใช้วัตถุดิบหายากจาก Ishikawa เน้นซีฟู้ดและผักท้องถิ่น" }
                ],
                activities: [
                    { name: "เดินชมสวน Kenroku-en", desc: "สวนสไตล์ญี่ปุ่นดั้งเดิมอายุ 300 ปี งดงามทุกฤดูกาล โดยเฉพาะซากุระและหิมะ" },
                    { name: "สำรวจย่านซามูไร Nagamachi", desc: "เดินชมย่านซามูไรที่ยังคงรักษาสภาพบ้านโบราณ คูน้ำ และกำแพงดินเหนียว" }
                ]
            },
            {
                id: "okinawa",
                name: "โอกินาวา (Okinawa)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1611169271867-0fd90f6cd25a?auto=format&fit=crop&w=800&q=80",
                category: "Beach",
                region: "Asia",
                budget: "$$",
                season: "Summer",
                rating: 4.8,
                description: "สวรรค์เขตร้อนของญี่ปุ่น เกาะทะเลใสสีฟ้าเทอร์ควอยซ์ที่ไม่เหมือนที่อื่น ปราสาท Shuri ที่งดงาม วัฒนธรรม Ryukyu อันเป็นเอกลักษณ์ และอาหารโอกินาวาสูตรอายุยืน",
                address: "Okinawa Prefecture, Japan",
                transport: "บินตรงลงสนามบิน Naha (OKA) จากโตเกียวหรือโอซาก้า ใช้เวลาประมาณ 2.5-3 ชั่วโมง",
                hotels: [
                    { name: "The Busena Terrace", desc: "รีสอร์ทหรูระดับโลกริมทะเลใส บนแหลม Busena หมู่เกาะโอกินาวา" },
                    { name: "Halekulani Okinawa", desc: "รีสอร์ทหรูหราฝั่งตะวันตก สระ Infinity Pool วิวทะเลจีนใต้" }
                ],
                restaurants: [
                    { name: "Yunangi", desc: "ร้านอาหาร Okinawan ดั้งเดิมเสิร์ฟ Goya Champuru ผัดมะระขี้นก และหมูสามชั้นตุ๋น" },
                    { name: "Kapuka Naha", desc: "ร้าน Izakaya ริมทะเลเสิร์ฟปลาทะเลสดท้องถิ่นและ Awamori สาเกโอกินาวา" }
                ],
                activities: [
                    { name: "ดำน้ำชมปะการังที่ Kerama Islands", desc: "ดำน้ำตื้นหรือสกูบาดำน้ำชมปะการังงดงามในน้ำใสแจ๋วรอบหมู่เกาะเคราม่า" },
                    { name: "เยือนปราสาท Shuri Castle", desc: "ปราสาทสีแดงสดจากยุค Ryukyu Kingdom อายุกว่า 600 ปี มรดกโลก UNESCO" }
                ]
            },
            {
                id: "naoshima",
                name: "เกาะนาโอชิมะ (Naoshima Island)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1596436450990-7dc8f5b53eed?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$$",
                season: "Spring",
                rating: 4.6,
                description: "เกาะศิลปะร่วมสมัยที่ไม่เหมือนใครในโลก ร่วมมือระหว่างสถาปนิก Tadao Ando กับมูลนิธิ Benesse พิพิธภัณฑ์ใต้ดิน Chichu Art Museum และประติมากรรมฟักทองของ Yayoi Kusama",
                address: "Naoshima, Kagawa Prefecture, Japan",
                transport: "นั่งเรือเฟอร์รี่จากท่าเรือ Uno (โอกายาม่า) หรือ Takamatsu ใช้เวลา 20-60 นาที",
                hotels: [
                    { name: "Benesse House Museum Hotel", desc: "โรงแรมที่ออกแบบโดย Tadao Ando ตกแต่งด้วยงานศิลปะต้นฉบับทั่วทุกห้อง" },
                    { name: "Naoshima Uminomi", desc: "ที่พักสไตล์ Ryokan ริมทะเล วิวพระอาทิตย์ตกสวยงาม บรรยากาศสงบ" }
                ],
                restaurants: [
                    { name: "Benesse House Restaurant", desc: "ร้านอาหารในพิพิธภัณฑ์ เสิร์ฟอาหารท้องถิ่น Kagawa ปลาสดและ Sanuki Udon" },
                    { name: "Cafe Salon Naka-Oku", desc: "คาเฟ่ศิลปะในบ้านโบราณ เสิร์ฟกาแฟและขนมสไตล์ญี่ปุ่น บรรยากาศอบอุ่น" }
                ],
                activities: [
                    { name: "ชม Chichu Art Museum ใต้ดิน", desc: "พิพิธภัณฑ์ที่ฝังอยู่ใต้ดินออกแบบโดย Tadao Ando ชมงาน Claude Monet ต้นฉบับ" },
                    { name: "ขี่จักรยานชมประติมากรรมรอบเกาะ", desc: "ปั่นจักรยานชายทะเลชม Pumpkin ฟักทองสีเหลืองและแดงของ Yayoi Kusama" }
                ]
            },
            {
                id: "kamakura",
                name: "คามาคูระ (Kamakura)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$",
                season: "Autumn",
                rating: 4.7,
                description: "เมืองประวัติศาสตร์อดีตเมืองหลวงของญี่ปุ่นในยุค Kamakura Shogunate พระพุทธรูปยักษ์ Daibutsu กลางแจ้ง วัด Engakuji ในหุบเขา เส้นทางเดินป่า และชายหาด Yuigahama",
                address: "Kamakura, Kanagawa Prefecture, Japan",
                transport: "นั่งรถไฟ JR Yokosuka Line จากสถานี Tokyo ถึง Kamakura ใน 56 นาที",
                hotels: [
                    { name: "Hotel Kamakura no Yado", desc: "ที่พักสไตล์ญี่ปุ่นดั้งเดิมกลางสวนไผ่สงบสงัด ใกล้วัด Engakuji" },
                    { name: "Palace Hotel Kamakura", desc: "โรงแรมบนเนินเขาชมวิวทะเลและวัดวาอารามของคามาคูระ" }
                ],
                restaurants: [
                    { name: "Kamakura Pasta", desc: "ร้านพาสต้าดีไซน์ญี่ปุ่น-อิตาเลียน ใช้วัตถุดิบท้องถิ่น บรรยากาศดีใกล้วัด" },
                    { name: "Bowls Kamakura", desc: "ร้านชามไก่ย่างอบอุ่นสุดอร่อย ได้รับความนิยมอย่างมากในหมู่นักท่องเที่ยว" }
                ],
                activities: [
                    { name: "เยี่ยมชมพระพุทธรูปยักษ์ Kotoku-in Daibutsu", desc: "ชมพระพุทธรูปสำริดกลางแจ้งสูง 13.35 เมตร ตั้งมาตั้งแต่ปี 1252" },
                    { name: "นั่งรถไฟ Enoden สายชายทะเล", desc: "รถไฟสายเล็กวิ่งริมชายหาด Shonan ผ่านเมืองคามาคูระสวยงาม" }
                ]
            },
            {
                id: "shirakawago",
                name: "หมู่บ้านชิราคาวาโกะ (Shirakawa-go)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$$",
                season: "Winter",
                rating: 4.9,
                description: "หมู่บ้านมรดกโลก UNESCO ในหุบเขาภูเขาสูงทางตอนกลางของญี่ปุ่น บ้านสไตล์ Gassho-zukuri หลังคาฟางรูปทรงมือพนมสวยงามตัดกับหิมะขาวโพลนในฤดูหนาว",
                address: "Ono District, Gifu Prefecture, Japan",
                transport: "นั่งรถบัสจากสถานีรถไฟ Takayama ใช้เวลาประมาณ 50 นาที หรือจากสถานี Kanazawa ประมาณ 75 นาที",
                hotels: [
                    { name: "Shirakawa-go no Yado Yohachi", desc: "ที่พักในบ้าน Gassho-zukuri แท้ๆ อายุกว่า 200 ปี ชั้นล่างเดิมใช้เลี้ยงหม่อน" },
                    { name: "Fujiya Minshuku", desc: "ที่พักแบบ Minshuku ดั้งเดิม บรรยากาศชาวบ้านอบอุ่น อาหารโฮมเมดอร่อย" }
                ],
                restaurants: [
                    { name: "Doburoku Matsuri no Yakata", desc: "ร้านอาหารท้องถิ่นเสิร์ฟ Doburoku สาเกโบราณสูตรหมักเองและอาหารบ้านๆ" },
                    { name: "Shirakawa-go Cafe", desc: "คาเฟ่ในบ้าน Gassho เสิร์ฟ Hida Beef ชุดข้าวกล่องและเครื่องดื่มอุ่น" }
                ],
                activities: [
                    { name: "ชมหมู่บ้านยามหิมะตกกลางคืน (Winter Illumination)", desc: "หมู่บ้านสว่างไสวด้วยไฟประดับในหิมะ ภาพที่งดงามที่สุดในฤดูหนาว" },
                    { name: "เดินชมหมู่บ้านและชิมอาหารท้องถิ่น", desc: "สำรวจบ้าน Gassho เก่าแก่ ชิม Mitarashi Dango และ Hoba Miso บนใบโอ๊ก" }
                ]
            },
            {
                id: "takayama",
                name: "ทาคายาม่า (Takayama)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$$",
                season: "Spring",
                rating: 4.8,
                description: "เมืองเก่าในภูเขาสูงของจังหวัดกิฟุ ที่ได้รับฉายาว่าเกียวโตน้อยแห่งภูเขาแอลป์ญี่ปุ่น บ้านเก่าสมัย Edo ย่าน Sanmachi Suji ตลาดเช้า Jinya-mae และเนื้อวัว Hida ชื่อดัง",
                address: "Takayama, Gifu Prefecture, Japan",
                transport: "นั่งรถไฟ Hida Ltd. Express จากนาโงย่าใช้เวลาประมาณ 2.5 ชั่วโมง หรือจากมัตสุโมโตะ 2.5 ชั่วโมง",
                hotels: [
                    { name: "Ryokan Tanabe", desc: "เรียวกังหรูดั้งเดิมในย่านเมืองเก่า Onsen น้ำพุร้อนธรรมชาติ อาหาร Hida Beef" },
                    { name: "Super Hotel Premier Takayama", desc: "โรงแรมสะอาดสะอ้านในราคาดี ตั้งอยู่ใจกลางเมืองเดินทางสะดวก" }
                ],
                restaurants: [
                    { name: "Kakurega", desc: "ร้านอาหารในบ้านไม้โบราณ เสิร์ฟ Hida Beef Steak และ Mitarashi Dango ขึ้นชื่อ" },
                    { name: "Maruaki", desc: "ร้านเนื้อ Hida Wagyu คุณภาพสูงเสิร์ฟทุกสไตล์ ทั้ง Sukiyaki Shabu-shabu และ Steak" }
                ],
                activities: [
                    { name: "เดินชมย่านเมืองเก่า Sanmachi Suji", desc: "ถนนหินกาบในยุค Edo เรียงรายด้วยร้านสาเก โชย่า และร้านของที่ระลึก" },
                    { name: "ชมตลาดเช้า Jinya-mae Morning Market", desc: "ตลาดเช้าในสวนสาธารณะ ชาวบ้านมาขายผักดอง ผลไม้ และผ้าทอมือ" }
                ]
            },
            {
                id: "matsumoto",
                name: "มัตสุโมโตะ (Matsumoto)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$",
                season: "Autumn",
                rating: 4.7,
                description: "เมืองแห่งปราสาทดำอันลือชื่อ ปราสาท Matsumoto สีดำสง่างามริมสระน้ำสะท้อนเทือกเขา Japanese Alps ประตูสู่แอลป์ญี่ปุ่น Kamikochi และเมืองศิลปะ Yayoi Kusama",
                address: "Matsumoto, Nagano Prefecture, Japan",
                transport: "นั่งรถไฟ Azusa Limited Express จากสถานี Shinjuku โตเกียว ใช้เวลาประมาณ 2.5 ชั่วโมง",
                hotels: [
                    { name: "Matsumoto Buena Vista Hotel", desc: "โรงแรม 4 ดาวใจกลางเมือง วิวปราสาท Matsumoto และเทือกเขาแอลป์ญี่ปุ่น" },
                    { name: "Hotaka Onsen Resort", desc: "รีสอร์ท Onsen ใกล้ตัวเมือง ห้องสไตล์ญี่ปุ่นพร้อมอ่างน้ำพุร้อนส่วนตัว" }
                ],
                restaurants: [
                    { name: "Marumo Wasabi Farm Restaurant", desc: "ร้านอาหารในไร่วาซาบิ เสิร์ฟวาซาบิสด ซูชิ และเมนูพิเศษที่หาที่อื่นไม่ได้" },
                    { name: "Okamoto Honten", desc: "ร้านโซบะชื่อดังที่สุดในมัตสุโมโตะ เส้นสดพร้อมซุปเย็นแบบ Zaru Soba" }
                ],
                activities: [
                    { name: "เยือนปราสาท Matsumoto (ปราสาทดำ)", desc: "ปราสาทไม้ดำยุค Edo อายุกว่า 400 ปี ที่สมบูรณ์ที่สุดในญี่ปุ่น สะท้อนในบึงน้ำ" },
                    { name: "เดินทางสู่ Kamikochi หุบเขาแอลป์", desc: "เดินป่าในหุบเขาอุดมธรรมชาติล้อมรอบด้วยยอดเขาสูงตระหง่านของ Northern Alps" }
                ]
            },
            {
                id: "nagoya",
                name: "นาโงย่า (Nagoya)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
                category: "City",
                region: "Asia",
                budget: "$$",
                season: "Autumn",
                rating: 4.5,
                description: "เมืองอุตสาหกรรมที่ใหญ่เป็นอันดับ 4 ของญี่ปุ่น ปราสาท Nagoya อลังการ อาหารสไตล์ Nagoya Meshi เช่น Miso Katsu และ Hitsumabushi ปลาไหลย่าง และพิพิธภัณฑ์ Toyota",
                address: "Nagoya, Aichi Prefecture, Japan",
                transport: "บินตรงลงสนามบิน Chubu Centrair (NGO) หรือนั่ง Shinkansen จากโตเกียว 100 นาที โอซาก้า 50 นาที",
                hotels: [
                    { name: "Nagoya Marriott Associa Hotel", desc: "โรงแรมบน JR Tower ชั้น 20-52 วิวเมืองนาโงย่าและภูเขาฟูจิในวันอากาศดี" },
                    { name: "Westin Nagoya Castle", desc: "โรงแรมหรูวิวปราสาท Nagoya พร้อมสวนสไตล์ญี่ปุ่น Onsen บนดาดฟ้า" }
                ],
                restaurants: [
                    { name: "Yabaton Miso Katsu", desc: "ร้านต้นกำเนิด Miso Katsu หมูทอดซอสมิโซะเข้มข้นแบบนาโงย่า ชื่อดังระดับชาติ" },
                    { name: "Atsuta Horaiken", desc: "ร้าน Hitsumabushi ต้นตำรับปลาไหลย่างในนาโงย่า เสิร์ฟ 3 รูปแบบตาม Style" }
                ],
                activities: [
                    { name: "เยือนปราสาทนาโงย่า (Nagoya Castle)", desc: "ปราสาทใหญ่โอ่โถงยุค Edo ตกแต่งด้วยโลมาทองคำคู่บนยอดหลังคาอันเป็นเอกลักษณ์" },
                    { name: "ชม Toyota Commemorative Museum", desc: "พิพิธภัณฑ์ประวัติ Toyota Motor Corporation เรียนรู้วิวัฒนาการรถยนต์ญี่ปุ่น" }
                ]
            },
            {
                id: "sendai",
                name: "เซนได (Sendai)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1576762108769-f99b7ffa3484?auto=format&fit=crop&w=800&q=80",
                category: "City",
                region: "Asia",
                budget: "$",
                season: "Autumn",
                rating: 4.5,
                description: "เมืองต้นไม้ (Mori no Miyako) ประตูสู่ภาคตะวันออกเฉียงเหนือของญี่ปุ่น เทศกาล Tanabata ที่ยิ่งใหญ่ที่สุดในญี่ปุ่น วัด Zuihoden และเนื้อวัว Gyutan ขึ้นชื่อ",
                address: "Sendai, Miyagi Prefecture, Japan",
                transport: "นั่ง Shinkansen Hayabusa จากโตเกียว ใช้เวลาประมาณ 90 นาที สถานี Sendai ใจกลางเมือง",
                hotels: [
                    { name: "Westin Sendai", desc: "โรงแรมหรู 5 ดาวชั้น 26-37 วิวเมืองเซนไดและภูเขาสวยงาม" },
                    { name: "Mitsui Garden Hotel Sendai", desc: "โรงแรมดีไซน์โมเดิร์นใจกลางเมือง ราคาคุ้มค่าเดินทางสะดวก" }
                ],
                restaurants: [
                    { name: "Rikyu Gyutan", desc: "ร้าน Gyutan (ลิ้นวัวย่าง) ชื่อดังอันดับ 1 ของเซนได รสชาติเข้มข้นหอมกลิ่นถ่าน" },
                    { name: "Sendai Seafood Market", desc: "ตลาดอาหารทะเลสดพร้อมร้านอาหารบุฟเฟต์ ปูยักษ์ หอย และซูชิสด" }
                ],
                activities: [
                    { name: "ชมเทศกาล Tanabata ประดับริบบิ้น (สิงหาคม)", desc: "เทศกาลตกแต่งย่านช้อปปิ้งด้วยตกแต่งริบบิ้นสีสันงดงาม บรรยากาศโรแมนติก" },
                    { name: "เยือน Zuihoden Mausoleum ของ Date Masamune", desc: "สุสานอาณาจักร Sendai Domain ของ Date Masamune ซามูไรตาเดียวผู้ยิ่งใหญ่" }
                ]
            },
            {
                id: "kumamoto",
                name: "คุมาโมโตะ (Kumamoto)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$",
                season: "Spring",
                rating: 4.6,
                description: "เมืองแห่งปราสาทดำ Kumamoto Castle อันยิ่งใหญ่ สวน Suizen-ji Jojuen ที่งดงาม ภูเขาไฟ Aso ที่ยังคุกรุ่น และ Kumamon มาสคอตหมีดำสุดน่ารักของเมือง",
                address: "Kumamoto, Kumamoto Prefecture, Japan",
                transport: "นั่ง Shinkansen Mizuho/Sakura จากโอซาก้า 3 ชั่วโมง หรือจากฮาคาตะ (ฟุกุโอกะ) ประมาณ 40 นาที",
                hotels: [
                    { name: "ANA Crowne Plaza Hotel Kumamoto New Sky", desc: "โรงแรม 4 ดาววิวปราสาทและเมืองคุมาโมโตะ บริการครบครัน" },
                    { name: "Kumamoto Castle Hotel", desc: "โรงแรมวิวปราสาทโดยตรง ออกแบบผสมผสานสไตล์ญี่ปุ่นและโมเดิร์น" }
                ],
                restaurants: [
                    { name: "Kumamoto Ramen Komurasaki", desc: "ร้านราเมนสไตล์คุมาโมโตะ เส้นราเมนสูตรพิเศษน้ำซุปกระดูกหมูผสมกระเทียมทอด" },
                    { name: "Basashi Ya", desc: "ร้านชิม Basashi ม้าดิบสไตล์คุมาโมโตะ อาหารดิบประจำถิ่นอันขึ้นชื่อ" }
                ],
                activities: [
                    { name: "เยือนปราสาทคุมาโมโตะ (Kumamoto Castle)", desc: "ปราสาทดำ 3 ยอดอายุกว่า 400 ปี ระหว่างการบูรณะหลังแผ่นดินไหว 2016" },
                    { name: "ชมภูเขาไฟ Mt. Aso ปากปล่องยักษ์", desc: "ภูเขาไฟยังคุกรุ่นที่ใหญ่ที่สุดในญี่ปุ่น ชมทะเลสาบกรดสีเขียวใสในปากปล่อง" }
                ]
            },
            {
                id: "fukuoka",
                name: "ฟุกุโอกะ (Fukuoka)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1589452271712-64b8a66c7b77?auto=format&fit=crop&w=800&q=80",
                category: "City",
                region: "Asia",
                budget: "$",
                season: "Spring",
                rating: 4.6,
                description: "เมืองใหญ่บนเกาะ Kyushu ที่ขึ้นชื่อเรื่องราเมน Hakata Tonkotsu น้ำซุปกระดูกหมูเข้มข้น Yatai รถเข็นอาหารริมแม่น้ำ และเทศกาล Hakata Gion Yamakasa อันยิ่งใหญ่",
                address: "Fukuoka, Fukuoka Prefecture, Japan",
                transport: "บินตรงลงสนามบิน Fukuoka (FUK) ใจกลางเมือง ต่อรถไฟ 2 สถานีเท่านั้น หรือนั่ง Shinkansen จากโอซาก้า 2.5 ชั่วโมง",
                hotels: [
                    { name: "The Royal Park Hotel Fukuoka", desc: "โรงแรมหรูใจกลาง Hakata ใกล้สถานีรถไฟหลักและย่านช้อปปิ้ง Tenjin" },
                    { name: "Hotel Il Palazzo", desc: "บูทีคโฮเต็ลสไตล์อิตาเลียนโดดเด่นในฟุกุโอกะ สถาปัตยกรรมสะดุดตา" }
                ],
                restaurants: [
                    { name: "Shin Shin Ramen", desc: "ร้านราเมน Hakata Tonkotsu ที่ดีที่สุดในฟุกุโอกะ น้ำซุปใสสีขาวขุ่นรสเข้มข้น" },
                    { name: "Nakagawa Yatai Street", desc: "ย่าน Yatai รถเข็นอาหารริมแม่น้ำนากากาวะ บรรยากาศดีที่สุดในยามค่ำคืน" }
                ],
                activities: [
                    { name: "ทานอาหารที่ Yatai รถเข็นใต้ท้องฟ้า", desc: "นั่งทานราเมน ยากิโทริ และ Gyoza ในรถเข็นอาหารกลางแจ้งสุดเป็นเอกลักษณ์ฟุกุโอกะ" },
                    { name: "เยือนศาลเจ้า Dazaifu Tenmangu", desc: "ศาลเจ้าแห่งเทพเจ้าการเรียนรู้ ในป่าเมืองดาไซฟุ มีร้าน Umegae Mochi ชื่อดัง" }
                ]
            },
            {
                id: "nagasaki",
                name: "นางาซากิ (Nagasaki)",
                country: "ญี่ปุ่น (Japan)",
                image: "https://images.unsplash.com/photo-1546611261-7c2568f38167?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$",
                season: "Autumn",
                rating: 4.7,
                description: "เมืองประวัติศาสตร์การค้าระหว่างประเทศ ท่าเรือเก่าแก่ที่เปิดรับวัฒนธรรมต่างชาติ ร่องรอยสงครามโลกที่ Peace Park ย่านยุโรปเก่า Glover Garden และอาหาร Chanpon ชื่อดัง",
                address: "Nagasaki, Nagasaki Prefecture, Japan",
                transport: "บินตรงลงสนามบิน Nagasaki (NGS) หรือนั่งรถไฟจากฮาคาตะ (ฟุกุโอกะ) ประมาณ 2 ชั่วโมง",
                hotels: [
                    { name: "ANA Crowne Plaza Nagasaki Gloverhill", desc: "โรงแรมหรูวิว Nagasaki Harbor และ Glover Garden อันงดงาม" },
                    { name: "Nishikiya Ryokan", desc: "เรียวกังดั้งเดิมพร้อม Onsen วิวท่าเรือนางาซากิและหมู่เกาะ" }
                ],
                restaurants: [
                    { name: "Shippoku Hamakatsu", desc: "ร้านอาหารสไตล์ Shippoku เมนูที่ผสมผสานวัฒนธรรมจีน-ดัตช์-ญี่ปุ่น" },
                    { name: "Sumiyoshi Honten Chanpon", desc: "ร้านชาบัน Nagasaki Chanpon บะหมี่เส้นใหญ่น้ำซุปกุ้งต้มกับผักสดอันขึ้นชื่อ" }
                ],
                activities: [
                    { name: "เยือน Nagasaki Peace Park และ Atomic Bomb Museum", desc: "สัมผัสบรรยากาศสันติภาพและประวัติศาสตร์ระเบิดปรมาณูปี 1945 ที่นางาซากิ" },
                    { name: "ชม Glover Garden และสถาปัตยกรรมยุโรป", desc: "สวนสไตล์ยุโรปวิวท่าเรือ บ้านของ Thomas Glover นักธุรกิจสก็อตชื่อดัง" }
                ]
            },

            // ===== 🌍 10 สถานที่ทั่วโลกเพิ่มเติม =====
            {
                id: "barcelona",
                name: "บาร์เซโลนา (Barcelona)",
                country: "สเปน (Spain)",
                image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Europe",
                budget: "$$",
                season: "Summer",
                rating: 4.8,
                description: "เมืองแห่งศิลปะสถาปัตยกรรมโดย Gaudi ที่ไม่เหมือนใครในโลก มหาวิหาร Sagrada Familia ที่ยังสร้างไม่เสร็จในรอบ 140 ปี ชายหาด Barceloneta และย่านอาหาร Tapas ที่หลากหลาย",
                address: "Barcelona, Catalonia, Spain",
                transport: "บินตรงลงสนามบิน El Prat (BCN) ต่อรถไฟ Aerobus หรือ Metro L9 เข้าใจกลางเมือง",
                hotels: [
                    { name: "Hotel Arts Barcelona", desc: "โรงแรมหรู 5 ดาวริมชายหาด วิวทะเลเมดิเตอร์เรเนียนและสกายไลน์บาร์เซโลนา" },
                    { name: "Casa Camper Barcelona", desc: "บูทีคโฮเต็ลสไตล์ดีไซน์อยู่ในย่าน El Raval ใจกลางเมืองเก่า" }
                ],
                restaurants: [
                    { name: "La Boqueria Market Food Stalls", desc: "ตลาดสดอาหารที่มีชีวิตชีวา เสิร์ฟ Jamon ซีฟู้ดสด และ Tapas ท้องถิ่น" },
                    { name: "Tickets Bar", desc: "ร้าน Tapas ระดับ Michelin ของ Albert Adria น้องชายเชฟ Ferran Adria" }
                ],
                activities: [
                    { name: "เยือน Sagrada Familia มหาวิหาร Gaudi", desc: "มหาวิหารที่ยังสร้างไม่เสร็จ งดงามด้วยหน้าต่างกระจกสีสีสัน สุดยอดสถาปัตยกรรม" },
                    { name: "เดินชม Park Guell และวิวเมือง", desc: "สวนสาธารณะ Gaudi บนเนินเขา ดูโมเสกสีสันและวิวเมืองบาร์เซโลนาทั้งหมด" }
                ]
            },
            {
                id: "amsterdam",
                name: "อัมสเตอร์ดัม (Amsterdam)",
                country: "เนเธอร์แลนด์ (Netherlands)",
                image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5902?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Europe",
                budget: "$$",
                season: "Spring",
                rating: 4.7,
                description: "เมืองคลองที่สวยที่สุดในยุโรป บ้านไม้แคบสูงเรียงรายริมคลองยุค Golden Age พิพิธภัณฑ์ Van Gogh ทุ่งดอกทิวลิปที่ Keukenhof และวัฒนธรรมการขี่จักรยาน",
                address: "Amsterdam, North Holland, Netherlands",
                transport: "บินตรงลงสนามบิน Schiphol (AMS) ต่อรถไฟ 15 นาทีเข้าสถานีหลัก Centraal",
                hotels: [
                    { name: "Waldorf Astoria Amsterdam", desc: "โรงแรม 5 ดาวในบ้านคลองยุค 17th Century ที่ปรับปรุงหรูหรา ริมคลอง Herengracht" },
                    { name: "The Dylan Amsterdam", desc: "บูทีคโฮเต็ลในอดีตโรงละครยุค 1600 บรรยากาศหรูดั้งเดิมผสมโมเดิร์น" }
                ],
                restaurants: [
                    { name: "De Kas Restaurant", desc: "ร้านอาหาร Farm-to-Table ใน Greenhouse เก่า ใช้วัตถุดิบปลูกในสวนของร้านเอง" },
                    { name: "Brouwerij t IJ Brewery", desc: "โรงเบียร์ที่มีชื่อเสียงในโรงสีกังหันลมยุคศตวรรษที่ 18" }
                ],
                activities: [
                    { name: "ล่องเรือชมคลองยุค Golden Age", desc: "ล่องเรือผ่านคลองสายหลัก ชมบ้านไม้แคบสูงและสะพานหลายร้อยแห่งยามค่ำคืน" },
                    { name: "เยือนพิพิธภัณฑ์ Van Gogh Museum", desc: "ชมผลงานของ Van Gogh มากกว่า 200 ชิ้น รวมถึง Sunflowers และ The Bedroom" }
                ]
            },
            {
                id: "prague",
                name: "ปราก (Prague)",
                country: "สาธารณรัฐเช็ก (Czech Republic)",
                image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Europe",
                budget: "$",
                season: "Spring",
                rating: 4.8,
                description: "เมืองร้อยยอดแหลมแห่งยุโรปกลาง Old Town ที่สมบูรณ์งดงามรอดจากสงคราม สะพาน Charles Bridge ที่มีรูปปั้น 30 นักบุญ และปราสาทปรากขนาดใหญ่ที่สุดในโลก",
                address: "Prague, Czech Republic",
                transport: "บินตรงลงสนามบิน Vaclav Havel (PRG) ต่อรถบัส Airport Express หรือรถไฟใต้ดินเข้าใจกลางเมือง",
                hotels: [
                    { name: "Four Seasons Hotel Prague", desc: "โรงแรม 5 ดาวในอาคารประวัติศาสตร์ริมแม่น้ำ Vltava วิวสะพาน Charles Bridge" },
                    { name: "Hotel U Prince", desc: "โรงแรมบูทีคบนจัตุรัส Old Town Square ชั้นดาดฟ้าวิวนาฬิกาดาราศาสตร์" }
                ],
                restaurants: [
                    { name: "Lokal Restaurant", desc: "ร้านอาหารเช็กดั้งเดิมเสิร์ฟเนื้อย่าง Svickova เบียร์ Pilsner Urquell สดจากถัง" },
                    { name: "La Degustation Boheme Bourgeoise", desc: "ร้าน Fine Dining มิชลิน 1 ดาวเสิร์ฟอาหารเช็กสมัยใหม่ Creative 8 คอร์ส" }
                ],
                activities: [
                    { name: "เดินชมสะพาน Charles Bridge ยามรุ่งเช้า", desc: "สะพานหินอายุ 660 ปีข้ามแม่น้ำ Vltava งดงามสุดๆ ก่อนนักท่องเที่ยวมา" },
                    { name: "เยือนปราสาทปราก (Prague Castle)", desc: "ปราสาทขนาดใหญ่ที่สุดในโลก ชมวิหาร St. Vitus และเขตปราสาทที่งดงาม" }
                ]
            },
            {
                id: "marrakech",
                name: "มาร์ราเกช (Marrakech)",
                country: "โมร็อกโก (Morocco)",
                image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Africa",
                budget: "$",
                season: "Spring",
                rating: 4.7,
                description: "เมืองแดงแห่งแอฟริกาเหนือที่สมบูรณ์ด้วยวัฒนธรรมอาหรับ-เบอร์เบอร์ ย่าน Medina เขาวงกตตลาดริยาดหอม สนาม Jemaa el-Fna ที่ครึกครื้นยามค่ำ และพระราชวัง Bahia",
                address: "Marrakech, Morocco",
                transport: "บินตรงลงสนามบิน Menara (RAK) ต่อรถแท็กซี่หรือ Airport Bus เข้าสู่ใจกลาง Medina",
                hotels: [
                    { name: "La Mamounia Hotel", desc: "โรงแรมตำนาน 5 ดาวหรูหรา สวนขนาดใหญ่งดงาม ที่พักของ Winston Churchill" },
                    { name: "Riad Kniza Marrakech", desc: "เรียวกังอาหรับสุดสวยงามในซอยเขาวงกต Medina ตกแต่งด้วยกระเบื้อง Zellige" }
                ],
                restaurants: [
                    { name: "Cafe Arabe", desc: "ร้านอาหารโมร็อกโก-อิตาเลียน บนระเบียงชั้น 2 วิวหลังคา Medina" },
                    { name: "Souk Kefta Stand", desc: "ลิ้มลองลูกชิ้น Kefta ย่างในตลาดสด Jemaa el-Fna ยามค่ำคืนอันคึกคัก" }
                ],
                activities: [
                    { name: "สำรวจตลาด Medina เขาวงกตสีสัน", desc: "หลงเพลิดเพลินในตลาดขนาดใหญ่ ร้านเครื่องหนัง โคมไฟ พรม และเครื่องเทศ" },
                    { name: "ทัวร์ทะเลทราย Sahara 2 วัน 1 คืน", desc: "ขี่อูฐชมพระอาทิตย์ตก ค้างคืนในเต็นท์หรูกลางทะเลทราย ชมดาวล้านดวง" }
                ]
            },
            {
                id: "bagan",
                name: "พุกาม (Bagan)",
                country: "เมียนมาร์ (Myanmar)",
                image: "https://images.unsplash.com/photo-1609942072359-03d34e65f6c5?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$",
                season: "Winter",
                rating: 4.8,
                description: "ทุ่งเจดีย์มหัศจรรย์กว่า 2,000 องค์กระจายอยู่บนพื้นที่ราบกว้างใหญ่ ชมพระอาทิตย์ขึ้นจากกระเช้าบอลลูนท่ามกลางเจดีย์นับไม่ถ้วน ประสบการณ์ที่หาไม่ได้จากที่ไหนในโลก",
                address: "Bagan, Mandalay Region, Myanmar",
                transport: "บินตรงจากย่างกุ้งหรือมัณฑะเลย์ลงสนามบิน Nyaung-U (NYU) ห่างจากพุกาม 5 กม.",
                hotels: [
                    { name: "Aureum Palace Hotel Bagan", desc: "รีสอร์ทหรูในไร่มะพร้าวท่ามกลางเจดีย์โบราณ สระว่ายน้ำวิวทุ่งเจดีย์" },
                    { name: "Thazin Garden Hotel", desc: "โรงแรมระดับ 4 ดาวในสวนสวย วิวทุ่งเจดีย์ที่งดงาม บริการอบอุ่นแบบพม่า" }
                ],
                restaurants: [
                    { name: "Weather Spoon's Restaurant", desc: "ร้านอาหารบนดาดฟ้าวิว 360 องศาของทุ่งเจดีย์ยามพระอาทิตย์ตก บรรยากาศสุดพิเศษ" },
                    { name: "Black Bamboo Restaurant", desc: "ร้านอาหารพม่าแท้ๆ ท่ามกลางสวนไม้ไผ่ เสิร์ฟอาหาร Burmese Curry หลายเมนู" }
                ],
                activities: [
                    { name: "ขึ้นบอลลูนชม Sunrise เหนือทุ่งเจดีย์", desc: "ประสบการณ์สุดมหัศจรรย์ลอยบอลลูนชมพระอาทิตย์ขึ้นเหนือเจดีย์นับพัน" },
                    { name: "ขี่จักรยานไฟฟ้าสำรวจเจดีย์โบราณ", desc: "ปั่น E-Bike ตระเวนชมเจดีย์ Ananda, Dhammayangyi, Shwezigon ในยามพระอาทิตย์ตก" }
                ]
            },
            {
                id: "cappadocia",
                name: "แคปพาโดเซีย (Cappadocia)",
                country: "ตุรกี (Turkey)",
                image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
                category: "Adventure",
                region: "Asia",
                budget: "$$",
                season: "Spring",
                rating: 4.9,
                description: "ดินแดนแห่งปล่องไฟนางฟ้าในตุรกี ภูมิทัศน์หินสุดแปลกตา Fairy Chimneys พักในโรงแรมถ้ำ ขึ้นบอลลูนชมพระอาทิตย์ขึ้น และสำรวจเมืองใต้ดิน Derinkuyu",
                address: "Nevsehir Province, Turkey",
                transport: "บินตรงลงสนามบิน Kayseri (ASR) หรือ Nevsehir (NAV) แล้วต่อรถรับส่งโรงแรมหรือรถบัสสาธารณะ",
                hotels: [
                    { name: "Museum Hotel Cappadocia", desc: "โรงแรมถ้ำหรูสุดพิเศษ ของแต่ละห้องเป็นงานศิลปะ วิว Valley of Love อลังการ" },
                    { name: "Argos in Cappadocia", desc: "ที่พักในถ้ำและอุโมงค์โบราณ ออกแบบหรูอย่างทันสมัย วิวหุบเขาสวยงาม" }
                ],
                restaurants: [
                    { name: "Dibek Restaurant", desc: "ร้านอาหาร Turkish ดั้งเดิมในอาคาร 475 ปี เตา Tandir ย่างเนื้อแบบโบราณ" },
                    { name: "Seki Restaurant at Argos", desc: "ร้าน Fine Dining บนหน้าผาวิวหุบเขา Uchisar อาหาร Anatolian Cuisine สุดพิเศษ" }
                ],
                activities: [
                    { name: "ขึ้นบอลลูนชม Sunrise เหนือหุบเขา", desc: "เที่ยวบินบอลลูนยามรุ่งอรุณ ชมเมืองถ้ำและปล่องไฟนางฟ้าที่สวยงามสุดๆ" },
                    { name: "สำรวจเมืองใต้ดิน Derinkuyu", desc: "เมืองใต้ดินหลายชั้นที่สร้างโดยชาว Phrygian เมื่อ 3,000 ปีก่อน ลึกกว่า 85 เมตร" }
                ]
            },
            {
                id: "rio",
                name: "ริโอ เด จาเนโร (Rio de Janeiro)",
                country: "บราซิล (Brazil)",
                image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
                category: "Beach",
                region: "Americas",
                budget: "$$",
                season: "Summer",
                rating: 4.7,
                description: "เมืองที่สวยที่สุดในโลกตั้งอยู่ระหว่างภูเขาและมหาสมุทรแอตแลนติก พระคริสต์แห่ง Corcovado ชายหาด Copacabana ลือชื่อ เทศกาล Carnival สุดมันส์ และยอดเขา Sugarloaf",
                address: "Rio de Janeiro, Brazil",
                transport: "บินตรงลงสนามบิน Tom Jobim Galeao (GIG) หรือ Santos Dumont (SDU) ต่อรถบัสหรือแท็กซี่เข้าเมือง",
                hotels: [
                    { name: "Belmond Copacabana Palace", desc: "โรงแรมตำนาน 5 ดาวริมชายหาด Copacabana เปิดมาตั้งแต่ 1923 เสน่ห์คลาสสิก" },
                    { name: "Hotel Santa Teresa", desc: "บูทีคโฮเต็ลหรูในย่านศิลปะ Santa Teresa บนเนินเขาวิวท่าเรือ Guanabara" }
                ],
                restaurants: [
                    { name: "Confeitaria Colombo", desc: "คาเฟ่ Art Nouveau ตำนานปี 1894 ตกแต่งกระจกงดงาม เสิร์ฟ Brigadeiro ช็อกโกแลต" },
                    { name: "Olympe Restaurant", desc: "ร้าน French-Brazilian Fine Dining มิชลิน 1 ดาว เชฟ Claude Troisgros" }
                ],
                activities: [
                    { name: "ขึ้นรถกระเช้า Sugarloaf Mountain", desc: "ชมวิว 360 องศาของอ่าว Guanabara ชายหาด Copacabana และพระคริสต์จาก Sugarloaf" },
                    { name: "เยือนพระคริสต์แห่ง Corcovado (Christ the Redeemer)", desc: "นั่งรถไฟขึ้นภูเขา Corcovado ชมรูปปั้นพระคริสต์กางเขนสัญลักษณ์ของบราซิล" }
                ]
            },
            {
                id: "istanbul",
                name: "อิสตันบูล (Istanbul)",
                country: "ตุรกี (Turkey)",
                image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$$",
                season: "Spring",
                rating: 4.8,
                description: "เมืองที่ตั้งอยู่บนสองทวีปผ่านกาลเวลากว่า 2,500 ปี มหาวิหาร Hagia Sophia Topkapi Palace พระราชวังออตโตมัน ตลาด Grand Bazaar และล่องเรือช่องแคบ Bosphorus",
                address: "Istanbul, Turkey",
                transport: "บินตรงลงสนามบิน Istanbul Airport (IST) ต่อรถไฟ Havalimani Metro เข้าใจกลางเมือง",
                hotels: [
                    { name: "Four Seasons Sultanahmet", desc: "โรงแรม 5 ดาวในอดีตคุกออตโตมัน ล้อมรอบด้วย Hagia Sophia และ Blue Mosque" },
                    { name: "Ciragan Palace Kempinski", desc: "พักในพระราชวังสุลต่านออตโตมันริมช่องแคบ Bosphorus วิวสวยงามยิ่ง" }
                ],
                restaurants: [
                    { name: "Mikla Restaurant", desc: "ร้าน New Nordic Turkish Cuisine ชั้นดาดฟ้า Marmara Pera Hotel วิวเมือง Istanbul" },
                    { name: "Karakoy Gulluoglu", desc: "ร้าน Baklava ตำนานอายุกว่า 250 ปี Baklava เนยชั้นกรอบไส้พิสตาชิโอต้นตำรับ" }
                ],
                activities: [
                    { name: "เยือน Hagia Sophia และ Blue Mosque", desc: "มหาวิหารยุค Byzantine ที่เปลี่ยนเป็นมัสยิด ชมกระเบื้องโมเสกทองคำยุค 6th Century" },
                    { name: "ล่องเรือช่องแคบ Bosphorus Cruise", desc: "ล่องเรือชมพระราชวังและบ้านไม้ Yali ริมช่องแคบที่เชื่อมเอเชียและยุโรป" }
                ]
            },
            {
                id: "siem-reap",
                name: "เสียมเรียบ (Siem Reap)",
                country: "กัมพูชา (Cambodia)",
                image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
                category: "Culture",
                region: "Asia",
                budget: "$",
                season: "Winter",
                rating: 4.8,
                description: "ประตูสู่มหัศจรรย์นครวัด (Angkor Wat) มหาวิหารหินทรายที่ยิ่งใหญ่ที่สุดในโลก มรดกอารยธรรมเขมรกว่า 1,000 ปี นครธม ปรางค์ตาพรหม และตลาดอาหารสตรีทฟู้ดยามค่ำคืน",
                address: "Siem Reap Province, Cambodia",
                transport: "บินตรงลงสนามบิน Siem Reap (REP) ต่อรถตุ๊กตุ๊กหรือแท็กซี่ราคาถูกเข้าสู่ตัวเมือง",
                hotels: [
                    { name: "Amansara Resort", desc: "รีสอร์ทหรูหราในอดีตวิลล่าส่วนตัวของ Prince Sihanouk ใกล้ประตู Angkor" },
                    { name: "Park Hyatt Siem Reap", desc: "โรงแรม 5 ดาวใจกลางเมือง บริการพรีเมียมและ Spa ระดับโลก" }
                ],
                restaurants: [
                    { name: "Cuisine Wat Damnak", desc: "ร้าน Cambodian Fine Dining เชฟเสิร์ฟวัตถุดิบท้องถิ่นเขมรสุดสร้างสรรค์" },
                    { name: "Pub Street Night Market", desc: "ถนนนักท่องเที่ยวตอนกลางคืน ลิ้มลองอาหารเขมรราคาถูกและบรรยากาศสนุกสนาน" }
                ],
                activities: [
                    { name: "ชม Angkor Wat ยามพระอาทิตย์ขึ้น", desc: "ชมพระอาทิตย์ขึ้นสะท้อนในสระน้ำหน้านครวัด ภาพที่สวยงามและประทับใจที่สุด" },
                    { name: "สำรวจนครธมและปรางค์ตาพรหม", desc: "เดินสำรวจราชธานีโบราณ Bayon Face Tower ลึกลับ และปรางค์ที่รากไม้ยึดจับ" }
                ]
            }
        ];

        // Default state values
        this.currentView = "home";
        
        // Local database of users
        this.users = JSON.parse(localStorage.getItem("wt_users")) || [
            {
                email: "somsak@worldtravel.com",
                password: "123456",
                name: "สมศักดิ์ รักษ์โลก",
                bio: "ชอบสำรวจเมืองเก่า ท่องเที่ยวแนวธรรมชาติป่าเขา และสะสมภาพถ่ายสวยๆ ทั่วโลก",
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
                style: "Nature",
                nextDestination: "ภูเขาไฟฟูจิ",
                visitedCount: 12,
                savedDestinations: ["kyoto", "santorini", "alps", "new-york", "maldives"],
                trips: [
                    { id: "trip-1", name: "ทริปญี่ปุ่น 2026 (Japan Trip)" },
                    { id: "trip-2", name: "ทริปพักผ่อนซัมเมอร์เกาะซานโตรินี" }
                ],
                currentTripId: "trip-1",
                plans: [
                    { destId: "kyoto", destName: "เกียวโต (Kyoto)", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80", date: "2026-07-10", time: "09:00", notes: "ไปป่าไผ่ตอนเช้าตรู่ จะได้ไม่มีคนเยอะ", tripId: "trip-1" },
                    { destId: "custom-1", destName: "เช็คอินโรงแรม Sowaka Ryokan", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", date: "2026-07-10", time: "14:00", notes: "เตรียมเอกสารจองโรงแรม", tripId: "trip-1" },
                    { destId: "osaka", destName: "โอซาก้า (Osaka)", image: "https://images.unsplash.com/photo-1589452271712-64b8a66c7b77?auto=format&fit=crop&w=800&q=80", date: "2026-07-12", time: "10:00", notes: "ไปกินทาโกยากิร้าน Ajinoya", tripId: "trip-1" },
                    { destId: "santorini", destName: "ซานโตรินี (Santorini)", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80", date: "2026-08-15", time: "15:00", notes: "พักที่ Grace Hotel ชมพระอาทิตย์ตกดิน", tripId: "trip-2" }
                ]
            }
        ];
        localStorage.setItem("wt_users", JSON.stringify(this.users));

        // Get current logged-in user email
        this.currentUserEmail = localStorage.getItem("wt_current_user");
        if (!this.currentUserEmail && this.users.length > 0) {
            // Auto login default user on first load
            this.currentUserEmail = this.users[0].email;
            localStorage.setItem("wt_current_user", this.currentUserEmail);
        }

        // Active user data binding
        this.currentUser = this.users.find(u => u.email === this.currentUserEmail) || null;
        this.loadUserSessionData();

        // Load reviews database
        this.reviews = JSON.parse(localStorage.getItem("wt_reviews")) || [
            {
                destId: "kyoto",
                destName: "เกียวโต (Kyoto)",
                author: "ณัฐพงษ์ แก้วดี",
                authorEmail: "nattapong@demo.com",
                rating: 5,
                comment: "ป่าไผ่ Arashiyama สวยงามสงบมาก แนะนำให้ไปช่วงเช้าตรู่ประมาณ 7 โมงเช้า จะได้รูปถ่ายที่ไม่มีคนรบกวนเลยครับ อาหารไคเซกิก็อร่อยและประณีตมาก",
                date: "24 มิ.ย. 2026",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                photos: []
            },
            {
                destId: "santorini",
                destName: "ซานโตรินี (Santorini)",
                author: "มนัสวี เลิศรัตนชัย",
                authorEmail: "manaswee@demo.com",
                rating: 5,
                comment: "หมู่บ้าน Oia พระอาทิตย์ตกสมคำร่ำลือจริงๆ ค่ะ แสงสีทองตกกระทบตึกขาวคือโรแมนติกสุดๆ แนะนำ Grace Hotel บริการดีเลิศและวิวหน้าผาสวยประทับใจมาก",
                date: "20 มิ.ย. 2026",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                photos: []
            },
            {
                destId: "bali",
                destName: "บาหลี (Bali)",
                author: "วิชัย จิตใจงาม",
                authorEmail: "wichai@demo.com",
                rating: 4,
                comment: "การชมระบำเกจักที่วัดอูลูวาตูริมหน้าผาสวยงามอลังการมากครับ เสียดายคนเยอะไปหน่อยในช่วงไฮซีซั่น ขากลับรถค่อนข้างติด แต่ภาพรวมคุ้มค่าเงินมาก",
                date: "15 มิ.ย. 2026",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                photos: []
            }
        ];
        localStorage.setItem("wt_reviews", JSON.stringify(this.reviews));

        // State for attached images when writing a review
        this.attachedReviewPhotos = [];

        // Initialize elements
        this.init();
    }

    loadUserSessionData() {
        if (this.currentUser) {
            this.savedDestinations = this.currentUser.savedDestinations || [];
            this.plans = this.currentUser.plans || [];
            this.trips = this.currentUser.trips || [{ id: "trip-default", name: "ทริปของฉัน" }];
            this.currentTripId = this.currentUser.currentTripId || (this.trips.length > 0 ? this.trips[0].id : null);
            this.profile = {
                name: this.currentUser.name,
                email: this.currentUser.email,
                bio: this.currentUser.bio,
                avatar: this.currentUser.avatar,
                style: this.currentUser.style || "Nature",
                nextDestination: this.currentUser.nextDestination || "",
                visitedCount: this.currentUser.visitedCount || 0
            };
        } else {
            this.savedDestinations = [];
            this.plans = [];
            this.trips = [];
            this.currentTripId = null;
            this.profile = null;
        }
    }

    saveUsersToStorage() {
        localStorage.setItem("wt_users", JSON.stringify(this.users));
    }

    updateCurrentUserInDatabase() {
        if (!this.currentUserEmail) return;
        const idx = this.users.findIndex(u => u.email === this.currentUserEmail);
        if (idx !== -1) {
            this.users[idx].savedDestinations = this.savedDestinations;
            this.users[idx].plans = this.plans;
            this.users[idx].trips = this.trips;
            this.users[idx].currentTripId = this.currentTripId;
            this.users[idx].name = this.profile.name;
            this.users[idx].bio = this.profile.bio;
            this.users[idx].avatar = this.profile.avatar;
            this.users[idx].style = this.profile.style;
            this.users[idx].nextDestination = this.profile.nextDestination;
            this.users[idx].visitedCount = this.profile.visitedCount;
            this.saveUsersToStorage();
        }
    }

    init() {
        // Load UI modules
        this.renderDestinations(this.destinations);
        this.renderPlanner();
        this.renderReviewsPage();
        this.renderProfile();
        this.updateCounts();
        this.populateReviewFilterDestinations();

        // Restore active nav view link
        this.navigate(this.currentView);
    }

    // SPA Router
    navigate(viewId) {
        this.currentView = viewId;

        // Hide all views
        document.querySelectorAll(".view-section").forEach(sec => {
            sec.classList.remove("active");
        });

        // Show target view
        const targetSec = document.getElementById(`view-${viewId}`);
        if (targetSec) {
            targetSec.classList.add("active");
        }

        // Close mobile drawer
        document.getElementById("mobile-menu").classList.remove("open");

        // Update nav links state
        document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.remove("active");
        });
        const activeLink = document.getElementById(`link-${viewId}`);
        if (activeLink) {
            activeLink.classList.add("active");
        }

        // Specific view tasks
        if (viewId === "planner") {
            this.renderPlanner();
        } else if (viewId === "reviews") {
            this.renderReviewsPage();
        } else if (viewId === "profile") {
            this.renderProfile();
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    toggleMobileMenu() {
        document.getElementById("mobile-menu").classList.toggle("open");
    }

    // Toast Notification System
    showToast(message, type = "success") {
        const container = document.getElementById("toast-container");
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;

        let icon = "fa-circle-check";
        if (type === "error") icon = "fa-circle-xmark";
        else if (type === "warning") icon = "fa-circle-exclamation";

        toast.innerHTML = `
            <i class="fa-solid ${icon}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        // Remove toast after animation
        setTimeout(() => {
            toast.style.animation = "toast-slide-in 0.3s reverse forwards";
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }

    // Search and Filter logic
    handleSearch() {
        const query = document.getElementById("search-input").value.toLowerCase();
        const category = document.getElementById("filter-category").value;
        const region = document.getElementById("filter-region").value;
        const budget = document.getElementById("filter-budget").value;
        const season = document.getElementById("filter-season").value;

        const filtered = this.destinations.filter(dest => {
            const matchesQuery = dest.name.toLowerCase().includes(query) ||
                dest.country.toLowerCase().includes(query) ||
                dest.description.toLowerCase().includes(query);

            const matchesCategory = !category || dest.category === category;
            const matchesRegion = !region || dest.region === region;
            const matchesBudget = !budget || dest.budget === budget;
            const matchesSeason = !season || dest.season === season;

            return matchesQuery && matchesCategory && matchesRegion && matchesBudget && matchesSeason;
        });

        this.renderDestinations(filtered);
    }

    // Render Destinations grid
    renderDestinations(list) {
        const grid = document.getElementById("destinations-grid");
        const countText = document.getElementById("results-count");

        grid.innerHTML = "";
        countText.textContent = `พบ ${list.length} สถานที่`;

        if (list.length === 0) {
            grid.innerHTML = `
                <div class="glass-card" style="grid-column: 1/-1; text-align: center; padding: 50px;">
                    <i class="fa-solid fa-face-frown" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 15px;"></i>
                    <p style="color: var(--text-muted);">ไม่พบสถานที่ท่องเที่ยวที่ตรงกับตัวกรองของคุณ ลองเปลี่ยนเงื่อนไขค้นหาใหม่ดูนะคะ</p>
                </div>
            `;
            return;
        }

        list.forEach(dest => {
            const isSaved = this.savedDestinations.includes(dest.id);
            const card = document.createElement("div");
            card.className = "dest-card";
            card.innerHTML = `
                <div class="dest-card-image" onclick="app.viewDetail('${dest.id}')">
                    <img src="${dest.image}" alt="${dest.name}">
                    <div class="dest-card-overlay">
                        <span class="dest-badge">${this.translateCategory(dest.category)}</span>
                        <button class="btn-save-shortcut ${isSaved ? 'saved' : ''}" onclick="event.stopPropagation(); app.toggleSave('${dest.id}')">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="dest-card-content" onclick="app.viewDetail('${dest.id}')">
                    <div class="dest-card-header">
                        <h3 class="dest-card-title">${dest.name}</h3>
                        <span class="dest-card-rating">
                            <i class="fa-solid fa-star"></i> ${dest.rating.toFixed(1)}
                        </span>
                    </div>
                    <p class="dest-card-desc">${dest.description}</p>
                    <div class="dest-card-footer">
                        <div class="dest-card-meta">
                            <span><i class="fa-solid fa-location-dot"></i> ${dest.country}</span>
                            <span><i class="fa-solid fa-wallet"></i> ${dest.budget}</span>
                        </div>
                        <button class="btn-view-details">อ่านต่อ</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Toggle Favorite / Save Destination
    toggleSave(destId) {
        const index = this.savedDestinations.indexOf(destId);
        const dest = this.destinations.find(d => d.id === destId);

        if (index === -1) {
            this.savedDestinations.push(destId);
            this.showToast(`บันทึก ${dest.name} ในที่ชื่นชอบแล้ว`);
        } else {
            this.savedDestinations.splice(index, 1);
            this.showToast(`ลบ ${dest.name} จากที่ชื่นชอบแล้ว`, "warning");
        }

        localStorage.setItem("wt_saved", JSON.stringify(this.savedDestinations));
        this.updateCounts();
        this.handleSearch();
        this.renderProfile();
    }

    // View Destination Details
    viewDetail(destId) {
        const dest = this.destinations.find(d => d.id === destId);
        if (!dest) return;

        const isSaved = this.savedDestinations.includes(dest.id);
        const isPlanned = this.plans.some(p => p.destId === destId);

        // Calculate dynamic avg rating and reviews for this destination
        const destReviews = this.reviews.filter(r => r.destId === destId);
        const avgRating = destReviews.length > 0
            ? (destReviews.reduce((sum, r) => sum + r.rating, 0) / destReviews.length).toFixed(1)
            : dest.rating.toFixed(1);

        const container = document.getElementById("detail-content-placeholder");

        container.innerHTML = `
            <div class="detail-hero">
                <img src="${dest.image}" alt="${dest.name}">
                <div class="detail-hero-overlay">
                    <div class="detail-title-block">
                        <h1>${dest.name}</h1>
                        <div class="meta-badges">
                            <span class="dest-badge"><i class="fa-solid fa-location-dot"></i> ${dest.country}</span>
                            <span class="dest-badge"><i class="fa-solid fa-tags"></i> ${this.translateCategory(dest.category)}</span>
                            <span class="dest-badge"><i class="fa-solid fa-wallet"></i> งบประมาณ: ${dest.budget}</span>
                            <span class="dest-badge"><i class="fa-solid fa-cloud-sun"></i> ฤดูท่องเที่ยว: ${this.translateSeason(dest.season)}</span>
                        </div>
                    </div>
                    <div style="display: flex; gap: 15px;">
                        <button class="btn-action" style="background: rgba(7, 8, 10, 0.85);" onclick="app.toggleSave('${dest.id}')">
                            <i class="fa-solid fa-heart" style="color: ${isSaved ? 'var(--accent)' : '#fff'}"></i> ${isSaved ? 'ถูกใจแล้ว' : 'ถูกใจ'}
                        </button>
                        <button class="btn-planner-action ${isPlanned ? 'added' : ''}" onclick="app.togglePlannerItem('${dest.id}')">
                            <i class="fa-solid ${isPlanned ? 'fa-circle-check' : 'fa-calendar-plus'}"></i> 
                            ${isPlanned ? 'ในแผนเดินทางแล้ว' : 'เพิ่มในแผนเดินทาง'}
                        </button>
                    </div>
                </div>
            </div>

            <div class="detail-grid">
                <!-- Left Main Content -->
                <div class="detail-main">
                    <div class="glass-card detail-section">
                        <h2>คำอธิบายสถานที่</h2>
                        <p>${dest.description}</p>
                        
                        <table class="info-table" style="margin-top: 20px;">
                            <tr>
                                <td>ที่อยู่</td>
                                <td>${dest.address}</td>
                            </tr>
                            <tr>
                                <td>การเดินทาง</td>
                                <td>${dest.transport}</td>
                            </tr>
                        </table>
                    </div>

                    <div class="glass-card detail-section">
                        <h2>กิจกรรมยอดนิยม</h2>
                        <div class="activities-grid">
                            ${dest.activities.map(act => `
                                <div class="feature-card">
                                    <h4><i class="fa-solid fa-circle-play text-primary" style="margin-right: 8px;"></i>${act.name}</h4>
                                    <p>${act.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="glass-card detail-section">
                        <h2>รีวิวจากผู้ใช้ (${destReviews.length})</h2>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-size: 2rem; font-weight: 800; color: var(--warning);">${avgRating}</span>
                                <div style="color: var(--warning);">
                                    ${this.generateStarsHTML(parseFloat(avgRating))}
                                </div>
                            </div>
                            <button class="btn-action" onclick="app.openReviewModal('${dest.id}')">
                                <i class="fa-solid fa-pen-to-square"></i> เขียนรีวิว
                            </button>
                        </div>
                        
                        <div class="reviews-feed" style="margin-top: 20px;">
                            ${destReviews.length === 0 ? `
                                <p style="color: var(--text-muted); font-style: italic; text-align: center; padding: 20px;">ยังไม่มีรีวิวสำหรับสถานที่นี้ มาร่วมเป็นคนแรกที่รีวิวกันนะคะ!</p>
                            ` : destReviews.map(rev => `
                                <div class="review-item" style="background: rgba(255,255,255,0.02)">
                                    <div class="review-item-header">
                                        <div class="review-user-info">
                                            <div class="review-avatar">
                                                <img src="${rev.avatar}" alt="${rev.author}">
                                            </div>
                                            <div>
                                                <div class="review-user-name">${rev.author}</div>
                                                <div class="review-meta">${rev.date}</div>
                                            </div>
                                        </div>
                                        <div class="review-rating-row">
                                            <div class="stars">${this.generateStarsHTML(rev.rating)}</div>
                                        </div>
                                    </div>
                                    <p class="review-text">${rev.comment}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Right Sidebar Details -->
                <div class="detail-sidebar">
                    <div class="glass-card detail-sidebar-card">
                        <h3><i class="fa-solid fa-hotel text-primary" style="margin-right: 8px;"></i>โรงแรมแนะนำ</h3>
                        <ul class="sidebar-list">
                            ${dest.hotels.map(h => `
                                <li>
                                    <div>
                                        <strong>${h.name}</strong>
                                        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">${h.desc}</p>
                                    </div>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="glass-card detail-sidebar-card">
                        <h3><i class="fa-solid fa-utensils text-secondary" style="margin-right: 8px;"></i>ร้านอาหารแนะนำ</h3>
                        <ul class="sidebar-list">
                            ${dest.restaurants.map(r => `
                                <li>
                                    <div>
                                        <strong>${r.name}</strong>
                                        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">${r.desc}</p>
                                    </div>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        this.navigate("detail");
    }

    // Toggle Planner state
    togglePlannerItem(destId) {
        if (!this.currentUserEmail) {
            this.showToast("โปรดเข้าสู่ระบบก่อนจัดการแผนเดินทาง", "error");
            this.navigate("profile");
            return;
        }

        const dest = this.destinations.find(d => d.id === destId);
        if (!dest) return;

        const planIndex = this.plans.findIndex(p => p.destId === destId && p.tripId === this.currentTripId);

        if (planIndex === -1) {
            // Add new plan template to the current trip
            const today = new Date().toISOString().split('T')[0];
            this.plans.push({
                destId: destId,
                destName: dest.name,
                image: dest.image,
                date: today,
                time: "09:00",
                notes: "",
                tripId: this.currentTripId
            });
            this.showToast(`เพิ่ม ${dest.name} เข้าในแผน "${this.getCurrentTripName()}" แล้ว`);
        } else {
            // Remove plan from the current trip
            this.plans.splice(planIndex, 1);
            this.showToast(`นำ ${dest.name} ออกจากแผน "${this.getCurrentTripName()}" แล้ว`, "warning");
        }

        this.updateCurrentUserInDatabase();
        this.viewDetail(destId); // Refresh detail UI state
    }

    getCurrentTripName() {
        const trip = this.trips.find(t => t.id === this.currentTripId);
        return trip ? trip.name : "ทริปของฉัน";
    }

    // Render Travel Planner list & timeline
    renderPlanner() {
        const container = document.getElementById("planner-items-container");
        const timeline = document.getElementById("timeline-visualizer");

        container.innerHTML = "";
        timeline.innerHTML = "";

        // Render trip list selector
        this.renderTripSelector();

        if (!this.currentUserEmail) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                    <i class="fa-solid fa-user-lock" style="font-size: 2.5rem; margin-bottom: 15px; color: rgba(255,255,255,0.1)"></i>
                    <p>กรุณาลงชื่อเข้าใช้งานที่หน้าโปรไฟล์เพื่อสร้างและจัดการแผนการเดินทางของคุณค่ะ</p>
                </div>
            `;
            timeline.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--text-muted); font-style: italic;">
                    กรุณาลงชื่อเข้าใช้
                </div>
            `;
            return;
        }

        // Get plans only for the active trip
        const tripPlans = this.plans.filter(p => p.tripId === this.currentTripId);

        if (tripPlans.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                    <i class="fa-solid fa-calendar-xmark" style="font-size: 2.5rem; margin-bottom: 15px; color: rgba(255,255,255,0.1)"></i>
                    <p>ยังไม่มีแผนเดินทางในทริปนี้ ค้นหาสถานที่เที่ยวและกดปุ่ม "เพิ่มในแผนเดินทาง" หรือกดปุ่ม "+ กิจกรรมอื่น ๆ" เพื่อเริ่มต้นกันได้เลย!</p>
                </div>
            `;
            timeline.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--text-muted); font-style: italic;">
                    ทริปยังว่างเปล่า
                </div>
            `;
            return;
        }

        // Sort plans by date and time
        tripPlans.sort((a, b) => {
            const dateA = new Date(`${a.date}T${a.time}`);
            const dateB = new Date(`${b.date}T${b.time}`);
            return dateA - dateB;
        });

        // Load planner list cards
        tripPlans.forEach((plan, idx) => {
            const card = document.createElement("div");
            card.className = "planner-item-card";
            card.innerHTML = `
                <button class="btn-delete-plan" onclick="app.deletePlan('${plan.destId}')">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <div class="planner-item-img">
                    <img src="${plan.image}" alt="${plan.destName}">
                </div>
                <div class="planner-item-details">
                    <h3 class="planner-item-title">${plan.destName}</h3>
                    <div class="planner-inputs">
                        <div class="input-field">
                            <label>วันที่เดินทาง</label>
                            <input type="date" value="${plan.date}" onchange="app.updatePlanField('${plan.destId}', 'date', this.value)">
                        </div>
                        <div class="input-field">
                            <label>เวลาที่ถึง</label>
                            <input type="time" value="${plan.time}" onchange="app.updatePlanField('${plan.destId}', 'time', this.value)">
                        </div>
                    </div>
                    <div class="input-field">
                        <label>โน้ตบันทึกย่อการเดินทาง</label>
                        <textarea placeholder="เช่น โรงแรมที่พัก, อาหารห้ามพลาด..." onchange="app.updatePlanField('${plan.destId}', 'notes', this.value)">${plan.notes || ''}</textarea>
                    </div>
                </div>
            `;
            container.appendChild(card);

            // Draw timeline node
            const node = document.createElement("div");
            node.className = "timeline-node";

            // Format readable Thai date
            const dateObj = new Date(plan.date);
            const dateStr = dateObj.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' });

            node.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-node-time">${dateStr} เวลา ${plan.time} น.</div>
                <div class="timeline-node-title">${plan.destName}</div>
                ${plan.notes ? `<div class="timeline-node-notes">"${plan.notes}"</div>` : ''}
            `;
            timeline.appendChild(node);
        });
    }

    // Update Plan card fields dynamically by unique destId and tripId
    updatePlanField(destId, field, val) {
        const plan = this.plans.find(p => p.destId === destId && p.tripId === this.currentTripId);
        if (plan) {
            plan[field] = val;
            this.updateCurrentUserInDatabase();
            this.renderPlanner();
        }
    }

    deletePlan(destId) {
        const idx = this.plans.findIndex(p => p.destId === destId && p.tripId === this.currentTripId);
        if (idx !== -1) {
            const removed = this.plans.splice(idx, 1)[0];
            this.updateCurrentUserInDatabase();
            this.showToast(`นำ "${removed.destName}" ออกจากแผนเดินทางแล้ว`, "warning");
            this.renderPlanner();
            
            // Sync destination details button state
            if (this.currentView === "detail") {
                this.viewDetail(removed.destId);
            }
        }
    }

    sharePlanner() {
        if (!this.currentUserEmail) {
            this.showToast("กรุณาลงชื่อเข้าใช้ก่อนแชร์แผนเดินทาง", "error");
            return;
        }

        const tripPlans = this.plans.filter(p => p.tripId === this.currentTripId);
        if (tripPlans.length === 0) {
            this.showToast("ยังไม่มีแผนการเดินทางในทริปนี้ให้แชร์", "error");
            return;
        }

        let shareText = `📍 แผนการท่องเที่ยว [${this.getCurrentTripName()}] ของฉัน:\n\n`;
        tripPlans.sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)).forEach(plan => {
            const d = new Date(plan.date).toLocaleDateString('th-TH', { day: 'numeric', month: 'short' });
            shareText += `- ${d} เวลา ${plan.time} น. : ${plan.destName}\n`;
            if (plan.notes) shareText += `  (โน้ต: ${plan.notes})\n`;
        });

        navigator.clipboard.writeText(shareText).then(() => {
            this.showToast("คัดลอกตารางทริปนี้ลงคลิปบอร์ดแล้ว! ส่งต่อให้เพื่อนได้เลย");
        }).catch(() => {
            this.showToast("ไม่สามารถคัดลอกได้ กรุณาลองใหม่อีกครั้ง", "error");
        });
    }

    printPlanner() {
        if (!this.currentUserEmail) {
            this.showToast("กรุณาลงชื่อเข้าใช้เพื่อพิมพ์แผน", "error");
            return;
        }
        window.print();
    }

    // Multiple trips management
    renderTripSelector() {
        const selector = document.getElementById("trip-selector");
        if (!selector) return;

        selector.innerHTML = "";
        this.trips.forEach(t => {
            const opt = document.createElement("option");
            opt.value = t.id;
            opt.textContent = t.name;
            if (t.id === this.currentTripId) {
                opt.selected = true;
            }
            selector.appendChild(opt);
        });
    }

    handleTripChange(tripId) {
        this.currentTripId = tripId;
        this.updateCurrentUserInDatabase();
        this.renderPlanner();
    }

    createNewTrip() {
        if (!this.currentUserEmail) {
            this.showToast("กรุณาลงชื่อเข้าใช้เพื่อจัดการทริป", "error");
            return;
        }
        const name = prompt("ระบุชื่อทริปการท่องเที่ยวใหม่ของคุณ:");
        if (!name || !name.trim()) return;

        const newTripId = `trip-${Date.now()}`;
        this.trips.push({ id: newTripId, name: name.trim() });
        this.currentTripId = newTripId;

        this.updateCurrentUserInDatabase();
        this.renderPlanner();
        this.showToast(`สร้างทริป "${name.trim()}" สำเร็จแล้ว`);
    }

    deleteCurrentTrip() {
        if (!this.currentUserEmail) return;
        if (this.trips.length <= 1) {
            this.showToast("ต้องมีแผนการเดินทางอย่างน้อย 1 ทริป ไม่สามารถลบทริปสุดท้ายได้", "error");
            return;
        }

        const currentName = this.getCurrentTripName();
        if (!confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบทริป "${currentName}" และแผนเดินทางทั้งหมดในทริปนี้?`)) return;

        // Clean up plans for this trip
        this.plans = this.plans.filter(p => p.tripId !== this.currentTripId);

        // Delete trip
        const idx = this.trips.findIndex(t => t.id === this.currentTripId);
        this.trips.splice(idx, 1);

        // Active first trip
        this.currentTripId = this.trips[0].id;

        this.updateCurrentUserInDatabase();
        this.renderPlanner();
        this.showToast(`ลบทริป "${currentName}" เรียบร้อยแล้ว`, "warning");
    }

    // Custom activities creation
    openCustomActivityModal() {
        if (!this.currentUserEmail) {
            this.showToast("กรุณาลงชื่อเข้าใช้ก่อนสร้างกิจกรรม", "error");
            this.navigate("profile");
            return;
        }
        const modal = document.getElementById("custom-activity-modal");
        document.getElementById("custom-activity-form").reset();
        const today = new Date().toISOString().split('T')[0];
        document.getElementById("custom-date").value = today;
        modal.classList.add("open");
    }

    closeCustomActivityModal() {
        document.getElementById("custom-activity-modal").classList.remove("open");
    }

    submitCustomActivity(event) {
        event.preventDefault();
        const title = document.getElementById("custom-title").value.trim();
        const date = document.getElementById("custom-date").value;
        const time = document.getElementById("custom-time").value;
        const notes = document.getElementById("custom-notes").value.trim();

        const defaultImages = [
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
        ];
        const randomImg = defaultImages[Math.floor(Math.random() * defaultImages.length)];

        this.plans.push({
            destId: `custom-${Date.now()}`,
            destName: title,
            image: randomImg,
            date: date,
            time: time,
            notes: notes,
            tripId: this.currentTripId
        });

        this.updateCurrentUserInDatabase();
        this.closeCustomActivityModal();
        this.renderPlanner();
        this.showToast(`เพิ่มกิจกรรม "${title}" เข้าในแผนสำเร็จแล้ว`);
    }

    // Render Reviews dashboard page with filtering and custom photos
    renderReviewsPage() {
        const feed = document.getElementById("all-reviews-feed");
        const avgNum = document.getElementById("all-reviews-avg");
        const starsContainer = document.getElementById("all-reviews-stars");
        const countLabel = document.getElementById("all-reviews-count");

        feed.innerHTML = "";

        // Calculate general stats (always based on total reviews)
        if (this.reviews.length === 0) {
            avgNum.textContent = "0.0";
            starsContainer.innerHTML = "";
            countLabel.textContent = "จากรีวิวทั้งหมด 0 รีวิว";
        } else {
            const totalRating = this.reviews.reduce((sum, r) => sum + r.rating, 0);
            const avg = (totalRating / this.reviews.length).toFixed(1);
            avgNum.textContent = avg;
            starsContainer.innerHTML = this.generateStarsHTML(parseFloat(avg));
            countLabel.textContent = `จากรีวิวทั้งหมด ${this.reviews.length} รีวิว`;
        }

        // Apply filters
        const ratingFilter = document.getElementById("review-filter-rating") ? document.getElementById("review-filter-rating").value : "";
        const destFilter = document.getElementById("review-filter-destination") ? document.getElementById("review-filter-destination").value : "";

        let filteredReviews = this.reviews;
        if (ratingFilter) {
            filteredReviews = filteredReviews.filter(r => r.rating === parseInt(ratingFilter));
        }
        if (destFilter) {
            filteredReviews = filteredReviews.filter(r => r.destId === destFilter);
        }

        if (filteredReviews.length === 0) {
            feed.innerHTML = `
                <div class="glass-card" style="text-align: center; padding: 40px; color: var(--text-muted);">
                    ไม่พบข้อมูลรีวิวที่ตรงตามตัวกรองค่ะ
                </div>
            `;
        } else {
            // Render filtered reviews list
            filteredReviews.forEach(rev => {
                const item = document.createElement("div");
                item.className = "review-item";
                
                // Show trash icon if logged in user is the owner
                const isOwner = this.currentUserEmail && (rev.authorEmail === this.currentUserEmail || (this.currentUserEmail === "somsak@worldtravel.com" && !rev.authorEmail));
                
                // Generate photos grid
                let photosHTML = "";
                if (rev.photos && rev.photos.length > 0) {
                    photosHTML = `
                        <div class="review-photos-grid">
                            ${rev.photos.map(p => `
                                <div class="review-photo-thumbnail" onclick="app.viewFullImage('${p}')">
                                    <img src="${p}" alt="รีวิวรูปถ่าย">
                                </div>
                            `).join("")}
                        </div>
                    `;
                }

                item.innerHTML = `
                    <div class="review-item-header">
                        <div class="review-user-info">
                            <div class="review-avatar">
                                <img src="${rev.avatar}" alt="${rev.author}">
                            </div>
                            <div>
                                <div class="review-user-name">${rev.author}</div>
                                <div class="review-meta">${rev.date}</div>
                            </div>
                        </div>
                        <div class="review-rating-row" style="display: flex; align-items: center;">
                            <div class="stars" style="margin-right: 10px;">${this.generateStarsHTML(rev.rating)}</div>
                            <a href="#" class="review-dest-tag" onclick="event.preventDefault(); app.viewDetail('${rev.destId}')">
                                <i class="fa-solid fa-location-dot"></i> ${rev.destName}
                            </a>
                            ${isOwner ? `
                                <button onclick="app.deleteReview('${rev.comment.replace(/'/g, "\\'")}', '${rev.author.replace(/'/g, "\\'")}', event)" style="background: none; border: none; color: var(--danger); cursor: pointer; padding: 5px; margin-left: 12px; font-size: 0.95rem; opacity: 0.7; transition: var(--transition);" title="ลบรีวิวนี้">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            ` : ""}
                        </div>
                    </div>
                    <p class="review-text">${rev.comment}</p>
                    ${photosHTML}
                `;
                feed.appendChild(item);
            });
        }

        // Render bar chart breakdown (always based on total reviews)
        const barChart = document.getElementById("summary-bar-chart");
        barChart.innerHTML = "";

        for (let star = 5; star >= 1; star--) {
            const count = this.reviews.filter(r => r.rating === star).length;
            const percentage = this.reviews.length > 0 ? (count / this.reviews.length) * 100 : 0;

            const row = document.createElement("div");
            row.className = "chart-row";
            row.innerHTML = `
                <div class="label">${star} ดาว</div>
                <div class="bar-outer">
                    <div class="bar-inner" style="width: ${percentage}%"></div>
                </div>
                <div class="percent">${percentage.toFixed(0)}%</div>
            `;
            barChart.appendChild(row);
        }
    }

    populateReviewFilterDestinations() {
        const selector = document.getElementById("review-filter-destination");
        if (!selector) return;
        selector.innerHTML = `<option value="">สถานที่ท่องเที่ยวทั้งหมด</option>`;
        this.destinations.forEach(dest => {
            const opt = document.createElement("option");
            opt.value = dest.id;
            opt.textContent = dest.name;
            selector.appendChild(opt);
        });
    }

    // Modal to write reviews
    openReviewModal(destId) {
        if (!this.currentUserEmail) {
            this.showToast("โปรดลงชื่อเข้าใช้งานก่อนเขียนรีวิวค่ะ", "error");
            this.navigate("profile");
            return;
        }

        document.getElementById("review-dest-id").value = destId;
        document.getElementById("review-form").reset();
        this.attachedReviewPhotos = [];
        document.getElementById("review-photos-preview").innerHTML = "";
        
        // Auto-fill author name with logged-in user name
        document.getElementById("review-author").value = this.profile.name;
        
        document.getElementById("review-modal").classList.add("open");
    }

    closeReviewModal() {
        document.getElementById("review-modal").classList.remove("open");
    }

    // Review attached photo files reader
    handleReviewPhotosChange(event) {
        const files = event.target.files;
        const previewContainer = document.getElementById("review-photos-preview");

        Array.from(files).forEach(file => {
            if (!file.type.startsWith("image/")) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                const base64Img = e.target.result;
                this.attachedReviewPhotos.push(base64Img);

                const item = document.createElement("div");
                item.className = "preview-photo-item";
                const idx = this.attachedReviewPhotos.length - 1;
                item.innerHTML = `
                    <img src="${base64Img}" alt="พรีวิว">
                    <button type="button" class="btn-remove-preview" onclick="app.removeAttachedPhoto(${idx})">&times;</button>
                `;
                previewContainer.appendChild(item);
            };
            reader.readAsDataURL(file);
        });
    }

    removeAttachedPhoto(idx) {
        this.attachedReviewPhotos.splice(idx, 1);
        const previewContainer = document.getElementById("review-photos-preview");
        previewContainer.innerHTML = "";

        this.attachedReviewPhotos.forEach((img, i) => {
            const item = document.createElement("div");
            item.className = "preview-photo-item";
            item.innerHTML = `
                <img src="${img}" alt="พรีวิว">
                <button type="button" class="btn-remove-preview" onclick="app.removeAttachedPhoto(${i})">&times;</button>
            `;
            previewContainer.appendChild(item);
        });
    }

    submitReview(event) {
        event.preventDefault();

        const destId = document.getElementById("review-dest-id").value;
        const author = document.getElementById("review-author").value.trim();
        const comment = document.getElementById("review-comment").value.trim();

        const ratingInput = document.querySelector('input[name="star-rating"]:checked');
        if (!ratingInput) {
            this.showToast("โปรดเลือกคะแนนดาวก่อนส่งรีวิว", "error");
            return;
        }
        const rating = parseInt(ratingInput.value);

        const dest = this.destinations.find(d => d.id === destId);
        const destName = dest ? dest.name : "สถานที่ท่องเที่ยว";

        const today = new Date();
        const dateStr = today.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' });

        // Add review with details
        this.reviews.unshift({
            destId: destId,
            destName: destName,
            author: author,
            authorEmail: this.currentUserEmail,
            rating: rating,
            comment: comment,
            date: dateStr,
            avatar: this.profile.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
            photos: this.attachedReviewPhotos || []
        });

        localStorage.setItem("wt_reviews", JSON.stringify(this.reviews));
        this.closeReviewModal();
        this.showToast("ส่งความคิดเห็นรีวิวเรียบร้อยแล้วค่ะ ขอบคุณมากนะคะ!");

        // Refresh views
        this.renderReviewsPage();
        if (this.currentView === "detail") {
            this.viewDetail(destId);
        }
    }

    deleteReview(comment, author, event) {
        if (event) event.stopPropagation();
        if (!confirm("คุณแน่ใจไหมคะว่าต้องการลบคำรีวิวนี้อย่างถาวร?")) return;

        const idx = this.reviews.findIndex(r => r.comment === comment && r.author === author);
        if (idx !== -1) {
            const destId = this.reviews[idx].destId;
            this.reviews.splice(idx, 1);
            localStorage.setItem("wt_reviews", JSON.stringify(this.reviews));
            this.showToast("ลบรีวิวเรียบร้อยแล้วค่ะ", "warning");

            this.renderReviewsPage();
            if (this.currentView === "detail" && destId) {
                this.viewDetail(destId);
            }
        }
    }

    viewFullImage(url) {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        overlay.style.zIndex = "9999";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.cursor = "zoom-out";
        overlay.innerHTML = `<img src="${url}" style="max-width: 90%; max-height: 90%; object-fit: contain; border-radius: var(--radius-lg); box-shadow: 0 10px 40px rgba(0,0,0,0.8); animation: zoomIn 0.2s ease-out;">`;
        overlay.onclick = () => overlay.remove();
        document.body.appendChild(overlay);
    }

    // Render profile details & stats
    renderProfile() {
        const authCard = document.getElementById("profile-auth-card");
        const profileView = document.getElementById("profile-logged-in-view");
        
        if (!this.currentUserEmail) {
            authCard.style.display = "block";
            profileView.style.display = "none";
            
            // Set default empty avatar on navigation header
            document.getElementById("nav-avatar").src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80";
            return;
        }

        authCard.style.display = "none";
        profileView.style.display = "block";

        document.getElementById("profile-name-display").textContent = this.profile.name;
        document.getElementById("profile-email-display").textContent = this.profile.email;
        document.getElementById("profile-bio").value = this.profile.bio;
        document.getElementById("profile-name").value = this.profile.name;
        document.getElementById("profile-email").value = this.profile.email;
        document.getElementById("profile-img-preview").src = this.profile.avatar;
        document.getElementById("nav-avatar").src = this.profile.avatar;

        document.getElementById("profile-style").value = this.profile.style || "Nature";
        document.getElementById("profile-next-destination").value = this.profile.nextDestination || "";

        document.getElementById("stat-visited-count").textContent = this.profile.visitedCount;
        document.getElementById("stat-saved-count").textContent = this.savedDestinations.length;

        // Render Favorites
        const container = document.getElementById("favorites-container");
        container.innerHTML = "";

        if (this.savedDestinations.length === 0) {
            container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem; font-style: italic;">ไม่มีสถานที่ที่บันทึกไว้ในขณะนี้</p>`;
            return;
        }

        this.savedDestinations.forEach(destId => {
            const dest = this.destinations.find(d => d.id === destId);
            if (!dest) return;

            const item = document.createElement("div");
            item.className = "fav-item";
            item.innerHTML = `
                <a href="#" class="fav-info" onclick="event.preventDefault(); app.viewDetail('${dest.id}')">
                    <i class="fa-solid fa-location-dot" style="margin-right: 8px; color: var(--primary);"></i> ${dest.name}
                </a>
                <button class="btn-remove-fav" onclick="app.toggleSave('${dest.id}')">
                    <i class="fa-solid fa-heart-crack"></i>
                </button>
            `;
            container.appendChild(item);
        });
    }

    saveProfile(event) {
        event.preventDefault();

        const name = document.getElementById("profile-name").value.trim();
        const bio = document.getElementById("profile-bio").value.trim();
        const style = document.getElementById("profile-style").value;
        const nextDest = document.getElementById("profile-next-destination").value.trim();

        this.profile.name = name;
        this.profile.bio = bio;
        this.profile.style = style;
        this.profile.nextDestination = nextDest;

        this.updateCurrentUserInDatabase();
        this.showToast("บันทึกข้อมูลส่วนตัวเรียบร้อยแล้วค่ะ");
        this.renderProfile();
    }

    triggerAvatarUploadClick() {
        document.getElementById("profile-avatar-file-input").click();
    }

    handleAvatarFileChange(event) {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            this.showToast("กรุณาเลือกไฟล์ภาพที่ถูกต้องนะคะ", "error");
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Img = e.target.result;
            this.profile.avatar = base64Img;
            document.getElementById("profile-img-preview").src = base64Img;
            document.getElementById("nav-avatar").src = base64Img;

            this.updateCurrentUserInDatabase();
            this.showToast("เปลี่ยนรูปโปรไฟล์เรียบร้อยแล้วค่ะ");
        };
        reader.readAsDataURL(file);
    }

    // Login/Register Auth switching
    switchAuthTab(tab) {
        document.querySelectorAll(".auth-tab").forEach(btn => btn.classList.remove("active"));
        
        document.getElementById("tab-login").classList.remove("active");
        document.getElementById("tab-register").classList.remove("active");
        document.getElementById(`tab-${tab}`).classList.add("active");

        if (tab === "login") {
            document.getElementById("login-form").style.display = "flex";
            document.getElementById("register-form").style.display = "none";
        } else {
            document.getElementById("login-form").style.display = "none";
            document.getElementById("register-form").style.display = "flex";
        }
    }

    handleLogin(event) {
        event.preventDefault();
        const email = document.getElementById("login-email").value.trim().toLowerCase();
        const password = document.getElementById("login-password").value;

        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            this.currentUserEmail = email;
            localStorage.setItem("wt_current_user", email);
            this.currentUser = user;
            this.loadUserSessionData();
            
            this.showToast(`ลงชื่อเข้าใช้สำเร็จ! ยินดีต้อนรับกลับมาค่ะคุณ ${user.name}`);
            this.renderProfile();
            this.renderPlanner();
            this.updateCounts();
        } else {
            this.showToast("อีเมลหรือรหัสผ่านไม่ถูกต้อง โปรดตรวจสอบอีกครั้งค่ะ", "error");
        }
    }

    handleRegister(event) {
        event.preventDefault();
        const name = document.getElementById("register-name").value.trim();
        const email = document.getElementById("register-email").value.trim().toLowerCase();
        const password = document.getElementById("register-password").value;

        if (password.length < 6) {
            this.showToast("รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษรค่ะ", "error");
            return;
        }

        const existing = this.users.find(u => u.email === email);
        if (existing) {
            this.showToast("อีเมลนี้ถูกลงทะเบียนไว้แล้วค่ะ", "error");
            return;
        }

        const newUser = {
            email: email,
            password: password,
            name: name,
            bio: "นักเดินทางหน้าใหม่ของ World Travel",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
            style: "Nature",
            nextDestination: "",
            visitedCount: 0,
            savedDestinations: [],
            trips: [
                { id: `trip-${Date.now()}`, name: "ทริปของฉัน" }
            ],
            currentTripId: "",
            plans: []
        };
        newUser.currentTripId = newUser.trips[0].id;

        this.users.push(newUser);
        this.saveUsersToStorage();

        // Auto login
        this.currentUserEmail = email;
        localStorage.setItem("wt_current_user", email);
        this.currentUser = newUser;
        this.loadUserSessionData();

        this.showToast(`ลงทะเบียนสำเร็จ! ยินดีต้อนรับคุณ ${name} สู่แพลตฟอร์มของเรานะคะ`);
        this.renderProfile();
        this.renderPlanner();
        this.updateCounts();
    }

    handleLogout() {
        this.currentUserEmail = null;
        localStorage.removeItem("wt_current_user");
        this.currentUser = null;
        this.loadUserSessionData();

        this.showToast("ออกจากระบบเรียบร้อยแล้วค่ะ ไว้เจอกันใหม่นะคะ", "warning");
        this.renderProfile();
        this.renderPlanner();
        this.updateCounts();
    }

    updateCounts() {
        document.getElementById("stat-saved-count").textContent = this.savedDestinations.length;
    }

    // Helper functions
    translateCategory(cat) {
        const mapping = {
            "Nature": "ธรรมชาติ",
            "Culture": "วัฒนธรรม",
            "Beach": "ทะเล / หาดทราย",
            "City": "เมืองใหญ่",
            "Adventure": "ผจญภัย"
        };
        return mapping[cat] || cat;
    }

    translateSeason(season) {
        const mapping = {
            "Spring": "ใบไม้ผลิ",
            "Summer": "ฤดูร้อน",
            "Autumn": "ใบไม้ร่วง",
            "Winter": "ฤดูหนาว"
        };
        return mapping[season] || season;
    }

    generateStarsHTML(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        let html = "";
        for (let i = 0; i < fullStars; i++) html += '<i class="fa-solid fa-star"></i>';
        if (halfStar) html += '<i class="fa-solid fa-star-half-stroke"></i>';
        for (let i = 0; i < emptyStars; i++) html += '<i class="fa-regular fa-star"></i>';
        return html;
    }
}

// Instantiate application on load
let app;
window.addEventListener("DOMContentLoaded", () => {
    app = new WorldTravelApp();
});
