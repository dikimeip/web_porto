import Section from "../components/section";

export default function AboutSection() {
    return (
        <Section title="About">
            <div className="text-sm/6.5">
                <p>
                    Saya adalah seorang programmer yang aktif sejak tahun 2021 dan telah mengerjakan berbagai proyek pengembangan aplikasi web dan mobile. Dalam pengembangan web, saya berpengalaman menggunakan Laravel, PHP, Bootstrap, Vue.js, dan React untuk membangun sistem yang responsif, efisien, dan mudah digunakan.
                </p>
                <p className="mt-5">
                    Untuk pengembangan aplikasi mobile, saya menggunakan Flutter dalam membangun aplikasi yang modern dan performa optimal. Saya terbiasa menangani proses pengembangan mulai dari perancangan database, pembuatan API, hingga implementasi antarmuka pengguna, serta terus mengembangkan kemampuan untuk mengikuti perkembangan teknologi terbaru.
                </p>
            </div>
        </Section>
    );
}