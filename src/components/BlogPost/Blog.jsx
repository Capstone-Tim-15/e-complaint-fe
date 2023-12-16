import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image5 from "../../assets/lp-5.png";
import image6 from "../../assets/lp-6.png";
import image7 from "../../assets/lp-7.png";

export default function Blog() {
  return (
    <Container className="section__5 d-flex flex-column align-items-center">
      <Row>
        <Col lg="12">
          <p className="title">News & Updates</p>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <p className="sub__title">Blog Posts</p>
        </Col>
      </Row>
      <Row className="section__5-content g-5">
        <Col lg="4">
          <p className="content__title">
            Kasus Kekerasan di Dunia Pendidikan Kian Bertambah, Cek
            Selengkapnya!
          </p>
          <img className="lp__5" src={image5} alt="" />
          <div className="desc__content d-flex justify-content-between">
            <div>
              <p>
                by <span>Admin</span>
              </p>
            </div>
            <div>
              <p>
                on <span>Oktober 2023</span>
              </p>
            </div>
          </div>
          <p>
            Situasi kekerasan di sekolah, perguruan tinggi, atau lingkungan
            pendidikan lainnya sedang mengalami perkembangan yang
            mengkhawatirkan. Isu ini menjadi lebih serius dan mungkin
            membutuhkan perhatian dan tindakan lebih lanjut untuk mengatasinya.
            Isi lengkapnya dapat berupa data, statistik, laporan kasus,
            penyebab, dampak, serta upaya-upaya yang sedang dilakukan untuk
            mengatasi masalah kekerasan dalam dunia pendidikan.
          </p>
        </Col>
        <Col lg="4">
          <p className="content__title">
            Tips Cegah Bullying di ekolah bagi Guru, Salah atunya Libatkan Orang
            tua
          </p>
          <img className="lp__6" src={image6} alt="" />
          <div className="desc__content d-flex justify-content-between">
            <div>
              <p>
                by <span>Admin</span>
              </p>
            </div>
            <div>
              <p>
                on <span>Oktober 2023</span>
              </p>
            </div>
          </div>
          <p>
            Banyaknya informasi terkait beberapa tips yang dapat membantu guru
            mencegah kasus bullying di sekolah. Salah satu tipsnya adalah
            pentingnya melibatkan orang tua dalam upaya pencegahan. Artikel ini
            dibuat untuk mengulas peran guru dalam menciptakan lingkungan aman
            dan memberikan solusi konkret untuk mengatasi bullying. Dalam
            konteks ini, orang tua juga diberdayakan untuk bekerja sama dengan
            guru dan sekolah dalam mengatasi permasalahan ini.
          </p>
        </Col>
        <Col lg="4">
          <p className="content__title">
            Sistem Pengaduan Online Kota Batam Semakin Dapat Diakgeg dengan
            Mudah, Simak Selengkapnya!
          </p>
          <img className="lp__7" src={image7} alt="" />
          <div className="desc__content d-flex justify-content-between">
            <div>
              <p>
                by<span>Admin</span>
              </p>
            </div>
            <div>
              <p>
                on <span>Oktober 2023</span>
              </p>
            </div>
          </div>
          <p>
            Kota Batam akan menjadi proyek pilot nasional untuk sistem pengaduan
            online. Sistem ini bertujuan untuk meningkatkan layanan publik dan
            transparansi pemerintah. Untuk itu, mari salurkan minat dan aspirasi
            kalian dalam menggunakan layanan pengaduan online.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
