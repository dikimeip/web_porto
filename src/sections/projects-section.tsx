import Section from "../components/section";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Marketplace",
            job: "Full Stack",
            description: "Saya mengembangkan Marketplace terintegrasi dengan landing page menggunakan Vue.js, CMS berbasis Laravel untuk manajemen data dan transaksi, website utama menggunakan React yang dinamis, serta aplikasi mobile dengan Flutter untuk pengalaman pengguna yang optimal dan responsif.",
            image: "/assets/project-1.png",
        },
        {
            title: "Marketplace",
            job: "Mobile Developer",
            description: "Project e-commerce ini dikembangkan menggunakan Flutter untuk menghadirkan aplikasi mobile yang responsif dan modern. notifikasi menggunakan Firebase, sementara manajemen state menggunakan GetX guna memastikan performa optimal, struktur kode terorganisir, serta pengalaman belanja yang cepat, aman, dan efisien bagi pengguna.",
            image: "/assets/project-2.png",
        },
        {
            title: "Apliaksi Daily Task",
            job: "Mobile Developer",
            description: "Aplikasi daily task ini dikembangkan menggunakan Flutter dengan fitur penyimpanan data secara offline sehingga pengguna tetap dapat menambah, mengubah, dan menghapus tugas tanpa koneksi internet. Ketika perangkat kembali online, sistem akan otomatis melakukan sinkronisasi data agar tetap konsisten, aman, dan terbarui secara real-time.",
            image: "/assets/project-2.png",
        },
        {
            title: "Aplikasi Kehamilan",
            job: "Mobile Developer",
            description: "Aplikasi kehamilan ini dikembangkan menggunakan Flutter dan terintegrasi dengan Supabase sebagai backend utama. Aplikasi telah mendukung mode offline, memungkinkan pengguna mengakses dan menyimpan data kehamilan tanpa koneksi internet, lalu melakukan sinkronisasi otomatis saat kembali online.",
            image: "/assets/project-2.png",
        },
        {
            title: "Aplikasi Kehamilan",
            job: "Mobile Developer",
            description: "Aplikasi rumah sakit ini dikembangkan menggunakan Flutter untuk menghadirkan layanan kesehatan digital yang praktis dan terintegrasi. Fitur utama meliputi chat dengan dokter, booking jadwal konsultasi, serta pembelian obat secara online, sehingga memudahkan pasien mendapatkan layanan medis dengan cepat, aman, dan efisien.",
            image: "/assets/project-2.png",
        },
        {
            title: "Website Company Profile",
            job: "Frontend Developer",
            description: "Website company profile ini dikembangkan menggunakan Bootstrap untuk menghasilkan tampilan yang responsif, modern, dan profesional. Website menampilkan informasi perusahaan, layanan, portofolio, serta kontak secara terstruktur, sehingga memudahkan pengunjung memahami profil bisnis dan meningkatkan kredibilitas serta kepercayaan terhadap perusahaan.",
            image: "/assets/project-1.png",
        },
    ];

    return (
        <Section title="Projects">
            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project) => (
                    <div
                    key={project.title}
                    className="w-72 h-125 flex flex-col hover:-translate-y-1 transition duration-300 border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                    >
                    <img
                        className="h-40 w-full object-cover"
                        src={project.image}
                        alt={project.title}
                    />

                    <div className="flex flex-col flex-1 p-4">
                        <h3 className="text-base font-medium mb-0 line-clamp-1">
                        {project.title}
                        </h3>
                        <h3 className="font-medium mb-2 line-clamp-1">
                        {project.job}
                        </h3>

                        <p className="text-gray-500 text-sm flex-1 line-clamp-3">
                        {project.description}
                        </p>
                    </div>
                    </div>
                ))}
                </div>

        </Section>
    );
}