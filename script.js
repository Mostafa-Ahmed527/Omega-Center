/* =========================
   القائمة الجانبية
========================= */

function toggleMenu() {

    const menu = document.getElementById("sideMenu");

    menu.classList.toggle("open");
}


function closeMenu() {

    const menu = document.getElementById("sideMenu");

    menu.classList.remove("open");
}


/* =========================
   بيانات الصفوف
========================= */

const categories = {

    primary: [
        "أولى ابتدائي",
        "ثانية ابتدائي",
        "ثالثة ابتدائي",
        "رابعة ابتدائي",
        "خامسة ابتدائي",
        "سادسة ابتدائي"
    ],

    prep: [
        "أولى إعدادي",
        "ثانية إعدادي",
        "ثالثة إعدادي"
    ],

    secondary: [
        "أولى ثانوي",
        "ثانية ثانوي",
        "ثالثة ثانوي"
    ],

    azhar: [
        "أولى ابتدائي أزهر",
        "ثانية ابتدائي أزهر",
        "ثالثة ابتدائي أزهر",
        "رابعة ابتدائي أزهر",
        "خامسة ابتدائي أزهر",
        "سادسة ابتدائي أزهر",

        "أولى إعدادي أزهر",
        "ثانية إعدادي أزهر",
        "ثالثة إعدادي أزهر",

        "أولى ثانوي أزهر",
        "ثانية ثانوي أزهر",
        "ثالثة ثانوي أزهر"
    ]

};


/* =========================
   المدرسين
========================= */

const teachers = {

    "أولى إعدادي أزهر": [
        {
            name: "مستر أحمد عيد",
            subject: "اللغة العربية",
            image: "teacher-ahmed-eid.jpeg"
        }
    ],

    "ثانية إعدادي أزهر": [
        {
            name: "مستر أحمد عيد",
            subject: "اللغة العربية",
            image: "teacher-ahmed-eid.jpeg"
        }
    ],

    "ثالثة إعدادي أزهر": [
        {
            name: "مستر أحمد عيد",
            subject: "اللغة العربية",
            image: "teacher-ahmed-eid.jpeg"
        }
    ]

};


/* =========================
   اختيار المرحلة
========================= */

function showStage(stage) {

    const categoriesSection =
        document.getElementById("categories");

    const categoryCards =
        document.getElementById("categoryCards");

    const categoryTitle =
        document.getElementById("categoryTitle");


    categoryCards.innerHTML = "";


    if (stage === "primary") {

        categoryTitle.innerText =
            "اختر الصف الابتدائي";

    } else if (stage === "prep") {

        categoryTitle.innerText =
            "اختر الصف الإعدادي";

    } else if (stage === "secondary") {

        categoryTitle.innerText =
            "اختر الصف الثانوي";

    } else if (stage === "azhar") {

        categoryTitle.innerText =
            "اختر الصف الأزهري";
    }


    categories[stage].forEach(function(category) {

        const button =
            document.createElement("button");

        button.className = "category-btn";

        button.innerText = category;

        button.onclick = function() {

            showTeachers(category);

        };

        categoryCards.appendChild(button);

    });


    categoriesSection.classList.remove("hidden");


    setTimeout(function() {

        categoriesSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================
   عرض المدرسين
========================= */

function showTeachers(category) {

    const teachersSection =
        document.getElementById("teachers");

    const teachersContainer =
        document.getElementById("teachersContainer");

    const teachersTitle =
        document.getElementById("teachersTitle");


    teachersContainer.innerHTML = "";

    teachersTitle.innerText =
        "مدرسو " + category;


    const list = teachers[category] || [];


    if (list.length === 0) {

        teachersContainer.innerHTML = `
            <p style="
                grid-column: 1/-1;
                font-size:20px;
                color:#777;
            ">
                سيتم إضافة المدرسين لهذه الفئة قريبًا.
            </p>
        `;

    } else {

        list.forEach(function(teacher) {

            const card =
                document.createElement("div");

            card.className = "teacher-card";


            card.innerHTML = `

                <img
                    src="${teacher.image}"
                    alt="${teacher.name}"
                >

                <div class="teacher-info">

                    <h3>
                        ${teacher.name}
                    </h3>

                    <p>
                        ${teacher.subject}
                    </p>

                </div>

            `;


            teachersContainer.appendChild(card);

        });

    }


    teachersSection.classList.remove("hidden");


    setTimeout(function() {

        teachersSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}