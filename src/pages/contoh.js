import React, { useState } from "react"
import Layout from "../components/layout"
// import styled from 'styled-components';

// const AboutHeaderBox = styled.div`
//   background: linear-gradient(90deg, #ff7a01 0%, #e63700 100%);
//   border-radius: 4px;
//   height: 52px;
// `;
// const FontMontserrat = styled.div`
//   font-family: Montserrat;
// `;

const About = () => {
  const [toggleTab, setToggleTab] = useState(true)
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-row mb-6 text-base">
          <p className="text-pos-gray font-normal">Tentang Kami /</p>
          <p className="text-pos-orange font-bold">&nbsp;Visi &#38; Misi</p>
        </div>
        <div className="mb-2">
          <button
            onClick={() => {
              setToggleTab(!toggleTab)
            }}
            disabled={toggleTab === true}
            className={`w-32 h-100px ${
              toggleTab ? "border-b-3px font-bold" : ""
            } border-pos-orange`}
          >
            VISI &#38; MISI
          </button>
          <button
            onClick={() => {
              setToggleTab(!toggleTab)
            }}
            disabled={toggleTab === false}
            className={`w-32 h-100px ${
              !toggleTab ? "border-b-3px font-bold" : ""
            } border-pos-orange`}
          >
            REDAKSI
          </button>
          <div className="bg-red-600 w-40"></div>
        </div>
        <div>
          {toggleTab ? (
            <div className="mb-56">
              <div className="flex text-white pl-6 items-center font-semibold">
                VISI MISI
              </div>
              <div className="space-y-6 mt-9 text-pos-gray">
                <p>
                  “Berbagi informasi, membangun pemahaman, menciptakan
                  kegembiraan dan komitmen”
                </p>
                <p>
                  Kami menghadirkan <strong>IC Wahanapos</strong> dengan visi
                  “berbagi informasi, membangun pemahaman, menciptakan
                  kegembiraan dan komitmen”.
                  <strong>IC Wahanapos</strong> dibangun sebagai portal
                  komunikasi internal bagi perusahaan dan seluruh karyawan pos
                  yang menyajikan informasi yang jernih (clear), mencerahkan
                  (enlighten), berwawasan ( ), memiliki konteks (contextual),
                  dan mendalam (indepth) guna meningkatkan kesadaran, membangun
                  pemahaman, dan memengaruhi perilaku untuk membantu memainkan
                  peran karyawan dalam mencapai prioritas bisnis.
                </p>
                <p>
                  Penamaan <strong>IC Wahanapos</strong> diambil dari kata “IC”
                  akronim dari <strong>internal communication</strong> yang
                  berarti komunikasi internal, makna lain dapat dibaca sebagai i
                  see (en) memiliki arti saya paham atau mengerti. “IC” dapat
                  juga dibaca “1” (one) dan “C” akronim yang memiliki banyak
                  arti seperti “click, channel, connection command dan culture”
                  . Sehingga IC Wahanapos memiliki arti{" "}
                  <strong>
                    satu klik untuk satu pemahaman dalam sebuah kanal yang
                    saling terkoneksi, terpimpin dalam budaya perusahaan yang
                    sama.
                  </strong>
                </p>
                <p>
                  Dalam istilah lain di bidang elektronika kita mengenal kata
                  “IC” (Integrated Circuit) sebagai komponen elektronika aktif
                  yang terdiri dari gabungan ratusan, ribuan bahkan jutaan
                  transistor, dioda, resistor dan kapasitor yang diintegrasikan
                  menjadi suatu rangkaian elektronika dalam sebuah kemasan kecil
                  yang mempunya fungsi sebagai <strong>gerbang logika</strong>{" "}
                  untuk mengendalikan sebuah rangkaian.
                </p>
                <p>
                  Demikian halnya dengan portal ini kami berharap{" "}
                  <strong>IC Wahanapos</strong> dapat menjadi sebagai{" "}
                  <strong>gerbang logika</strong> bagi komunikasi internal
                  perusahaan yang berisi pengetahuan yang memberikan fakta,
                  informasi, dan keterampilan untuk membantu karyawan melakukan
                  pekerjaan dengan kemampuan terbaiknya yang secara efektif
                  memberi pengaruh positif pada sikap dan meningkatkan pola
                  pemikiran serta perasaan karyawan tentang Perusahaan.
                  Terbentuknya pengetahuan dan sikap yang benar yang melibatkan,
                  memberdayakan, dan memotivasi akan mendorong karyawan
                  bertindak dengan cara yang paling menguntungkan untuk mencapai
                  visi, misi dan target perusahaan.
                </p>
                <p>
                  Konten <strong>IC Wahanapos</strong> akan dibangun untuk
                  memberikan informasi kepada karyawan tentang apa yang terjadi
                  dalam perusahaan yang mengarah pada perasaan diberdayakan,
                  melibatkan kejujuran dan kepercayaan untuk menaikkan level
                  komunikasi dengan karyawan.
                </p>
                <p>
                  <strong>IC Wahanapos</strong> diharapkan menjadi aplikasi
                  komunikasi internal yang akan mengubah bisnis perusahaan di
                  masa depan :
                </p>
                <ul className="list-disc ml-6">
                  <li>
                    Peningkatan konektivitas, karena menjangkau setiap karyawan
                    dan membuat koneksi menjadi real time
                  </li>
                  <li>
                    Komunikasi menjadi lebih baik, karena menyediakan aliran
                    informasi yang efisien secara teratur.
                  </li>
                  <li>
                    Peningkatan keterlibatan dengan mendorong karyawan untuk
                    terlibat dan mengambil tindakan
                  </li>
                  <li>
                    Peningkatan Kinerja Operasi karena memberikan akses cepat ke
                    informasi penting kebijakan dan prosedur.
                  </li>
                  <li>
                    Peningkatan pelayanan SDM dengan membantu fungsi SDM melalui
                    proses otomatisasi/digitalisasi.
                  </li>
                  <li>
                    Peningkatan Pengukuran melalui tingkat keterlibatan agar
                    sesuai dengan strategi perusahaan
                  </li>
                  <li>
                    Komunikasi internal membantu organisasi berpikir dan
                    bertindak sebagai satu budaya komunikasi
                  </li>
                </ul>
                <p>
                  Kami mengajak seluruh karyawan terlibat dalam{" "}
                  <strong>IC Wahanapos</strong> untuk menjadi bagian dari Tim
                  Komunikasi Internal yang berkontribusi penting bagi kesuksesan
                  jangka panjang untuk menjadi mata, telinga, dan suara
                  perusahaan. Membangun <strong>IC Wahanapos</strong> secara
                  bersama menjadi komunikator internal sebagai konsultan,
                  fasilitator dan mitra sumber daya untuk membantu perusahaan
                  mencapai tujuan dengan mengembangkan dan melaksanakan strategi
                  komunikasi yang efektif.
                </p>
                <p>Salam,</p>
                <p className="font-bold">Tim Redaksi IC Wahanapos</p>
              </div>
            </div>
          ) : (
            <div className="mb-405px">
              <div className="flex items-center text-white pl-6 font-semibold">
                REDAKSI
              </div>
              <div className="flex flex-row mt-84px text-pos-gray">
                <div className="font-bold w-1/2 ">
                  <p className="mb-4">Pemasihat</p>
                  <p className="mb-4">penanggung Jawab</p>
                  <p className="mb-14">Pemimpin Redaksi</p>
                  <p className="mb-36">Redaktur Pelaksana</p>
                  <p className="mb-44">Desain IT</p>
                  <p className="mb-24">Desain Grafis</p>
                  <p className="mb-4">Koresponden</p>
                  <p className="mb-4">Reporter</p>
                  <p>Riset Redaksi</p>
                </div>
                <div className="font-bold w-1/2 ">
                  <p className="mb-4">Vodeo Berita</p>
                  <p className="mb-14">Koordinator</p>
                  <p className="mb-44">Medial Sosial</p>
                  <p className="mb-44">Visual &#38; Grafis</p>
                  <p>Redaksi</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default About
