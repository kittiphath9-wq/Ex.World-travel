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
            }
        ];

        // Default state values
        this.currentView = "home";
        this.savedDestinations = JSON.parse(localStorage.getItem("wt_saved")) || [];
        this.plans = JSON.parse(localStorage.getItem("wt_plans")) || [];
        this.reviews = JSON.parse(localStorage.getItem("wt_reviews")) || [
            {
                destId: "kyoto",
                destName: "เกียวโต (Kyoto)",
                author: "ณัฐพงษ์ แก้วดี",
                rating: 5,
                comment: "ป่าไผ่ Arashiyama สวยงามสงบมาก แนะนำให้ไปช่วงเช้าตรู่ประมาณ 7 โมงเช้า จะได้รูปถ่ายที่ไม่มีคนรบกวนเลยครับ อาหารไคเซกิก็อร่อยและประณีตมาก",
                date: "24 มิ.ย. 2026",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
            },
            {
                destId: "santorini",
                destName: "ซานโตรินี (Santorini)",
                author: "มนัสวี เลิศรัตนชัย",
                rating: 5,
                comment: "หมู่บ้าน Oia พระอาทิตย์ตกสมคำร่ำลือจริงๆ ค่ะ แสงสีทองตกกระทบตึกขาวคือโรแมนติกสุดๆ แนะนำ Grace Hotel บริการดีเลิศและวิวหน้าผาสวยประทับใจมาก",
                date: "20 มิ.ย. 2026",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
            },
            {
                destId: "bali",
                destName: "บาหลี (Bali)",
                author: "วิชัย จิตใจงาม",
                rating: 4,
                comment: "การชมระบำเกจักที่วัดอูลูวาตูริมหน้าผาสวยงามอลังการมากครับ เสียดายคนเยอะไปหน่อยในช่วงไฮซีซั่น ขากลับรถค่อนข้างติด แต่ภาพรวมคุ้มค่าเงินมาก",
                date: "15 มิ.ย. 2026",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
            }
        ];
        this.profile = JSON.parse(localStorage.getItem("wt_profile")) || {
            name: "สมศักดิ์ รักษ์โลก",
            email: "somsak.travel@gmail.com",
            bio: "ชอบสำรวจเมืองเก่า ท่องเที่ยวแนวธรรมชาติป่าเขา และสะสมภาพถ่ายสวยๆ ทั่วโลก",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
            visitedCount: 12
        };

        // Initialize elements
        this.init();
    }

    init() {
        // Load UI modules
        this.renderDestinations(this.destinations);
        this.renderPlanner();
        this.renderReviewsPage();
        this.renderProfile();
        this.updateCounts();

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
        const dest = this.destinations.find(d => d.id === destId);
        if (!dest) return;

        const planIndex = this.plans.findIndex(p => p.destId === destId);
        
        if (planIndex === -1) {
            // Add new plan template
            const today = new Date().toISOString().split('T')[0];
            this.plans.push({
                destId: destId,
                destName: dest.name,
                image: dest.image,
                date: today,
                time: "09:00",
                notes: ""
            });
            this.showToast(`เพิ่ม ${dest.name} เข้าในตารางแผนเดินทางของคุณแล้ว`);
        } else {
            // Remove plan
            this.plans.splice(planIndex, 1);
            this.showToast(`นำ ${dest.name} ออกจากตารางแผนเดินทางแล้ว`, "warning");
        }

        localStorage.setItem("wt_plans", JSON.stringify(this.plans));
        this.viewDetail(destId); // Refresh detail UI state
    }

    // Render Travel Planner list & timeline
    renderPlanner() {
        const container = document.getElementById("planner-items-container");
        const timeline = document.getElementById("timeline-visualizer");
        
        container.innerHTML = "";
        timeline.innerHTML = "";

        if (this.plans.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                    <i class="fa-solid fa-calendar-xmark" style="font-size: 2.5rem; margin-bottom: 15px; color: rgba(255,255,255,0.1)"></i>
                    <p>ยังไม่มีแผนเดินทางในทริปนี้ ค้นหาสถานที่เที่ยวและกดปุ่ม "เพิ่มในแผนเดินทาง" เพื่อวางแผนทริปแรกของคุณได้เลย!</p>
                </div>
            `;
            timeline.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--text-muted); font-style: italic;">
                    ตารางเวลาว่างเปล่า
                </div>
            `;
            return;
        }

        // Sort plans by date and time
        this.plans.sort((a, b) => {
            const dateA = new Date(`${a.date}T${a.time}`);
            const dateB = new Date(`${b.date}T${b.time}`);
            return dateA - dateB;
        });

        // Load planner list cards
        this.plans.forEach((plan, idx) => {
            const card = document.createElement("div");
            card.className = "planner-item-card";
            card.innerHTML = `
                <button class="btn-delete-plan" onclick="app.deletePlan(${idx})">
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
                            <input type="date" value="${plan.date}" onchange="app.updatePlanField(${idx}, 'date', this.value)">
                        </div>
                        <div class="input-field">
                            <label>เวลาที่ถึง</label>
                            <input type="time" value="${plan.time}" onchange="app.updatePlanField(${idx}, 'time', this.value)">
                        </div>
                    </div>
                    <div class="input-field">
                        <label>โน้ตบันทึกย่อการเดินทาง</label>
                        <textarea placeholder="เช่น โรงแรมที่พัก, อาหารห้ามพลาด..." onchange="app.updatePlanField(${idx}, 'notes', this.value)">${plan.notes || ''}</textarea>
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

    // Update Plan card fields dynamically
    updatePlanField(idx, field, val) {
        this.plans[idx][field] = val;
        localStorage.setItem("wt_plans", JSON.stringify(this.plans));
        
        // Re-render planner to update timeline
        this.renderPlanner();
    }

    deletePlan(idx) {
        const removed = this.plans.splice(idx, 1)[0];
        localStorage.setItem("wt_plans", JSON.stringify(this.plans));
        this.showToast(`นำ ${removed.destName} ออกจากแผนเดินทางแล้ว`, "warning");
        this.renderPlanner();
    }

    sharePlanner() {
        if (this.plans.length === 0) {
            this.showToast("ยังไม่มีแผนการเดินทางให้แชร์", "error");
            return;
        }

        let shareText = "📍 แผนการท่องเที่ยว World Travel ของฉัน:\n\n";
        this.plans.forEach(plan => {
            const d = new Date(plan.date).toLocaleDateString('th-TH', { day: 'numeric', month: 'short' });
            shareText += `- ${d} เวลา ${plan.time} น. : ${plan.destName}\n`;
            if (plan.notes) shareText += `  (โน้ต: ${plan.notes})\n`;
        });

        navigator.clipboard.writeText(shareText).then(() => {
            this.showToast("คัดลอกลิงก์ตารางทริปพร้อมแชร์ลงคลิปบอร์ดแล้ว!");
        }).catch(() => {
            this.showToast("ไม่สามารถคัดลอกตารางทริปได้ กรุณาลองใหม่อีกครั้ง", "error");
        });
    }

    // Render Reviews dashboard page
    renderReviewsPage() {
        const feed = document.getElementById("all-reviews-feed");
        const avgNum = document.getElementById("all-reviews-avg");
        const starsContainer = document.getElementById("all-reviews-stars");
        const countLabel = document.getElementById("all-reviews-count");

        feed.innerHTML = "";

        if (this.reviews.length === 0) {
            feed.innerHTML = `
                <div class="glass-card" style="text-align: center; padding: 40px; color: var(--text-muted);">
                    ยังไม่มีความเห็นใดๆ
                </div>
            `;
            avgNum.textContent = "0.0";
            starsContainer.innerHTML = "";
            countLabel.textContent = "จากรีวิวทั้งหมด 0 รีวิว";
            return;
        }

        // Calculate general rating
        const totalRating = this.reviews.reduce((sum, r) => sum + r.rating, 0);
        const avg = (totalRating / this.reviews.length).toFixed(1);
        
        avgNum.textContent = avg;
        starsContainer.innerHTML = this.generateStarsHTML(parseFloat(avg));
        countLabel.textContent = `จากรีวิวทั้งหมด ${this.reviews.length} รีวิว`;

        // Render reviews list
        this.reviews.forEach(rev => {
            const item = document.createElement("div");
            item.className = "review-item";
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
                    <div class="review-rating-row">
                        <div class="stars" style="margin-right: 10px;">${this.generateStarsHTML(rev.rating)}</div>
                        <a href="#" class="review-dest-tag" onclick="event.preventDefault(); app.viewDetail('${rev.destId}')">
                            <i class="fa-solid fa-location-dot"></i> ${rev.destName}
                        </a>
                    </div>
                </div>
                <p class="review-text">${rev.comment}</p>
            `;
            feed.appendChild(item);
        });

        // Render bar chart breakdown
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

    // Modal to write reviews
    openReviewModal(destId) {
        document.getElementById("review-dest-id").value = destId;
        document.getElementById("review-form").reset();
        document.getElementById("review-modal").classList.add("open");
    }

    closeReviewModal() {
        document.getElementById("review-modal").classList.remove("open");
    }

    submitReview(event) {
        event.preventDefault();
        
        const destId = document.getElementById("review-dest-id").value;
        const author = document.getElementById("review-author").value;
        const comment = document.getElementById("review-comment").value;
        
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

        // Add review
        this.reviews.unshift({
            destId: destId,
            destName: destName,
            author: author,
            rating: rating,
            comment: comment,
            date: dateStr,
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" // Default profile avatar
        });

        localStorage.setItem("wt_reviews", JSON.stringify(this.reviews));
        this.closeReviewModal();
        this.showToast("ขอบคุณสำหรับคำรีวิว! ความคิดเห็นของคุณถูกเผยแพร่แล้ว");

        // Refresh views
        this.renderReviewsPage();
        if (this.currentView === "detail") {
            this.viewDetail(destId);
        }
    }

    // Render profile details & stats
    renderProfile() {
        document.getElementById("profile-name-display").textContent = this.profile.name;
        document.getElementById("profile-email-display").textContent = this.profile.email;
        document.getElementById("profile-bio").value = this.profile.bio;
        document.getElementById("profile-name").value = this.profile.name;
        document.getElementById("profile-email").value = this.profile.email;
        document.getElementById("profile-img-preview").src = this.profile.avatar;
        document.getElementById("nav-avatar").src = this.profile.avatar;

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
        
        const name = document.getElementById("profile-name").value;
        const email = document.getElementById("profile-email").value;
        const bio = document.getElementById("profile-bio").value;

        this.profile.name = name;
        this.profile.email = email;
        this.profile.bio = bio;

        localStorage.setItem("wt_profile", JSON.stringify(this.profile));
        this.showToast("บันทึกข้อมูลส่วนตัวเรียบร้อยแล้ว");
        this.renderProfile();
    }

    triggerAvatarSelect() {
        const urls = [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        ];
        
        // Pick one at random for a cute avatar change effect
        const randomUrl = urls[Math.floor(Math.random() * urls.length)];
        this.profile.avatar = randomUrl;
        
        localStorage.setItem("wt_profile", JSON.stringify(this.profile));
        this.renderProfile();
        this.showToast("เปลี่ยนภาพโปรไฟล์เรียบร้อยแล้ว");
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
