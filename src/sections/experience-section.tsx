import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/google.svg",
            title: "FullStack developer - Mobile Developer",
            company: "Trendcas",
            location: "Jakarta",
            start: "Nov 2020",
            end: "Present",
            description: [
                "Memimpin pengembangan end-to-end aplikasi web dan mobile dengan memastikan sistem yang scalable dan berperforma tinggi.",
                "Merancang dan mengembangkan CMS untuk mengelola konten, pengguna, dan operasional bisnis secara efisien.",
                "Membangun dan memelihara RESTful API yang aman untuk mendukung integrasi antara frontend dan aplikasi mobile.",
                "Mengembangkan aplikasi mobile lintas platform dengan performa optimal dan pengalaman pengguna yang intuitif.",
                "Mengintegrasikan layanan pihak ketiga seperti payment gateway, sistem autentikasi, dan layanan cloud."
            ],
        },
        {
            image: "/assets/microsoft.svg",
            title: "Mobile Developer",
            company: "IMotion Production",
            location: "Malaysa",
            start: "Mar 2024",
            end: "Agu 2024",
            description: [
                "Merancang arsitektur aplikasi mobile yang modular dan maintainable, serta mengoptimalkan performa untuk berbagai perangkat dan versi sistem operasi.",
                "Mengimplementasikan manajemen state, offline storage, dan sinkronisasi data guna memastikan pengalaman pengguna yang stabil, cepat, dan konsisten."
            ],
        },
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                {/* <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div> */}
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}