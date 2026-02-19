import Section from "../components/section";

export default function EducationSection() {
    return (
        <Section title="Education">
            <div className="w-full border border-gray-200 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/unsila.png"
                                alt="Education"
                                width={25}
                                height={25}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Teknik Informatika
                            </h3>
                            <div>Universitas Islam Lamongan</div>
                        </div>
                    </div>
                    <div>Sep 2016 - May 2020</div>
                </div>
                <p className="mt-6 text-gray-500">Program Sarjana (S1) Teknik Informatika mempelajari dasar hingga lanjutan ilmu komputer, meliputi algoritma dan struktur data, pemrograman, basis data, rekayasa perangkat lunak, jaringan komputer, sistem operasi, kecerdasan buatan, serta pengembangan web dan mobile. Proses pembelajaran tidak hanya bersifat teoritis, tetapi juga menekankan praktik melalui kegiatan laboratorium, studi kasus, dan proyek pengembangan sistem untuk melatih kemampuan analisis, perancangan, serta pemecahan masalah secara sistematis dan terstruktur.</p>
            </div>
        </Section>
    );
}