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

    "أولى إعدادي": [
        {
            name: "مستر أحمد عيد",
            subject: "اللغة العربية",
            image: "images/teacher-ahmed-eid.jpeg"
        },
        {
            name: "أحمد أبو العجد",
            subject: "دراسات اجتماعية",
            image: "images/teacher-ahmed-abo-elagd.jpeg"
        },
        {
            name: "محمد الجداوى",
            subject: "دراسات اجتماعية",
            image: "images/teacher-mohammed-algedawy.jpeg"
        },
        {
            name: "يوسف مصطفى",
            subject: "اللغة العربية",
            image: "images/teacher-youssef-mostafa.jpeg"
        },
        {
            name: "محمد علي",
            subject: "اللغة العربية",
            image: "images/teacher-mohamed-ali.jpeg"
        },
        {
            name: "أحمد عبد ربه",
            subject: "العلوم",
            image: "images/teacher-ahmed-abdrabboh.jpeg"
        },
        {
            name: "وسام نبيل",
            subject: "لغة إنجليزية",
            image: "images/teacher-wesam-nabil.jpeg"
        }
    ],

    "ثانية إعدادي": [
        {
            name: "مستر أحمد عيد",
            subject: "اللغة العربية",
            image: "images/teacher-ahmed-eid.jpeg"
        },
        {
            name: "أحمد أبو العجد",
            subject: "دراسات اجتماعية",
            image: "images/teacher-ahmed-abo-elagd.jpeg"
        },
        {
            name: "محمد الجداوى",
            subject: "دراسات اجتماعية",
            image: "images/teacher-mohammed-algedawy.jpeg"
        },
        {
            name: "يوسف مصطفى",
            subject: "اللغة العربية",
            image: "images/teacher-youssef-mostafa.jpeg"
        },
        {
            name: "محمد علي",
            subject: "اللغة العربية",
            image: "images/teacher-mohamed-ali.jpeg"
        },
        {
            name: "أحمد عبد ربه",
            subject: "العلوم",
            image: "images/teacher-ahmed-abdrabboh.jpeg"
        },
        {
            name: "وسام نبيل",
            subject: "لغة إنجليزية",
            image: "images/teacher-wesam-nabil.jpeg"
        }
    ],

    "ثالثة إعدادي": [
        {
            name: "مستر أحمد عيد",
            subject: "اللغة العربية",
            image: "images/teacher-ahmed-eid.jpeg"
        },
        {
            name: "أحمد أبو العجد",
            subject: "دراسات اجتماعية",
            image: "images/teacher-ahmed-abo-elagd.jpeg"
        },
        {
            name: "محمد الجداوى",
            subject: "دراسات اجتماعية",
            image: "images/teacher-mohammed-algedawy.jpeg"
        },
        {
            name: "يوسف مصطفى",
            subject: "اللغة العربية",
            image: "images/teacher-youssef-mostafa.jpeg"
        },
        {
            name: "محمد علي",
            subject: "اللغة العربية",
            image: "images/teacher-mohamed-ali.jpeg"
        },
        {
            name: "أحمد عبد ربه",
            subject: "العلوم",
            image: "images/teacher-ahmed-abdrabboh.jpeg"
        },
        {
            name: "وسام نبيل",
            subject: "لغة إنجليزية",
            image: "images/teacher-wesam-nabil.jpeg"
        }
    ],

    "أولى إعدادي أزهر": [
        {
            name: "مستر أحمد عيد",
            subject: "اللغة العربية",
            image: "images/teacher-ahmed-eid.jpeg"
        },
        {
            name: "أحمد أبو العجد",
            subject: "دراسات اجتماعية",
            image: "images/teacher-ahmed-abo-elagd.jpeg"
        },
        {
            name: "محمد الجداوى",
            subject: "دراسات اجتماعية",
            image: "images/teacher-mohammed-algedawy.jpeg"
        },
        {
            name: "أحمد عبد ربه",
            subject: "العلوم",
            image: "images/teacher-ahmed-abdrabboh.jpeg"
        },
        {
            name: "أحمد عصام",
            subject: "مواد شرعية",
            image: "images/teacher-ahmed-essam.jpeg"
        },
        {
            name: "محمد عبدالمجيد",
            subject: "علوم شرعية",
            image: "images/teacher-mahmoud-abdelmageed.jpeg"
        },
        {
            name: "وسام نبيل",
            subject: "لغة إنجليزية",
            image: "images/teacher-wesam-nabil.jpeg"
        }
    ],

    "ثانية إعدادي أزهر": [
        {
            name: "مستر أحمد عيد",
            subject: "اللغة العربية",
            image: "images/teacher-ahmed-eid.jpeg"
        },
        {
            name: "أحمد أبو العجد",
            subject: "دراسات اجتماعية",
            image: "images/teacher-ahmed-abo-elagd.jpeg"
        },
        {
            name: "محمد الجداوى",
            subject: "دراسات اجتماعية",
            image: "images/teacher-mohammed-algedawy.jpeg"
        },
        {
            name: "أحمد عبد ربه",
            subject: "العلوم",
            image: "images/teacher-ahmed-abdrabboh.jpeg"
        },
        {
            name: "أحمد عصام",
            subject: "مواد شرعية",
            image: "images/teacher-ahmed-essam.jpeg"
        },
        {
            name: "محمد عبدالمجيد",
            subject: "علوم شرعية",
            image: "images/teacher-mahmoud-abdelmageed.jpeg"
        },
        {
            name: "وسام نبيل",
            subject: "لغة إنجليزية",
            image: "images/teacher-wesam-nabil.jpeg"
        }
    ],

    "ثالثة إعدادي أزهر": [
        {
            name: "مستر أحمد عيد",
            subject: "اللغة العربية",
            image: "images/teacher-ahmed-eid.jpeg"
        },
        {
            name: "أحمد أبو العجد",
            subject: "دراسات اجتماعية",
            image: "images/teacher-ahmed-abo-elagd.jpeg"
        },
        {
            name: "محمد الجداوى",
            subject: "دراسات اجتماعية",
            image: "images/teacher-mohammed-algedawy.jpeg"
        },
        {
            name: "أحمد عبد ربه",
            subject: "العلوم",
            image: "images/teacher-ahmed-abdrabboh.jpeg"
        },
        {
            name: "أحمد عصام",
            subject: "مواد شرعية",
            image: "images/teacher-ahmed-essam.jpeg"
        },
        {
            name: "محمد عبدالمجيد",
            subject: "علوم شرعية",
            image: "images/teacher-mahmoud-abdelmageed.jpeg"
        },
        {
            name: "وسام نبيل",
            subject: "لغة إنجليزية",
            image: "images/teacher-wesam-nabil.jpeg"
        }
    ],

    "أولى ثانوي": [
        {
            name: "محمد الجداوى",
            subject: "دراسات اجتماعية",
            image: "images/teacher-mohammed-algedawy.jpeg"
        },
        {
            name: "وسام نبيل",
            subject: "لغة إنجليزية",
            image: "images/teacher-wesam-nabil.jpeg"
        }
    ],

    "أولى ثانوي أزهر": [
        {
            name: "محمد الجداوى",
            subject: "دراسات اجتماعية",
            image: "images/teacher-mohammed-algedawy.jpeg"
        },
        {
            name: "أحمد عصام",
            subject: "مواد شرعية",
            image: "images/teacher-ahmed-essam.jpeg"
        },
        {
            name: "وسام نبيل",
            subject: "لغة إنجليزية",
            image: "images/teacher-wesam-nabil.jpeg"
        }
    ],

    "ثانية ثانوي أزهر": [
        {
            name: "أحمد عصام",
            subject: "مواد شرعية",
            image: "images/teacher-ahmed-essam.jpeg"
        }
    ],

    "ثالثة ثانوي أزهر": [
        {
            name: "أحمد عصام",
            subject: "مواد شرعية",
            image: "images/teacher-ahmed-essam.jpeg"
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
                    class="teacher-photo"
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

            const photo = card.querySelector(".teacher-photo");

            photo.addEventListener("click", function() {

                openTeacherImage(teacher.image, teacher.name);

            });


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


/* =========================
   فتح الصورة كاملة
========================= */

function openTeacherImage(src, alt) {

    const existingModal =
        document.querySelector(".image-modal");

    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement("div");
    modal.className = "image-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;

    modalContent.appendChild(image);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.remove();
        }
    });

    document.addEventListener("keydown", function closeOnEscape(event) {
        if (event.key === "Escape") {
            modal.remove();
            document.removeEventListener("keydown", closeOnEscape);
        }
    });

}