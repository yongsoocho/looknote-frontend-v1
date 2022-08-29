import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  const onClickInsta = () => {
    return window.open('https://instagram.com/take.looknote?utm_medium=copy_link', '_blank');
  };

  return (
    <div className="footer_container">
      <div>
        <img src="/insta.png" alt="insta" className="footer_insta" onClick={() => onClickInsta()} />
      </div>
      <p>Befferent Inc. | 대표 : 김민선</p>
      <p>주소 : 서울 성북구 안암로 145 고려대학교 R&D센터 642B호</p>
      <p>이메일 : looknote.official@befferent.co.kr</p>
      <p>사업자등록번호 : 448-86-02446</p>
      <p
        className="footer_pdf"
        onClick={() => {
          return window.open('https://looknote.co.kr/termofuse/looknoteprivacypolicy.pdf#', '_blank');
        }}
      >
        개인정보처리방침 보기
      </p>
      <p
        className="footer_pdf"
        onClick={() => {
          return window.open('https://looknote.co.kr/termofuse/looknotetermofuse.pdf#', '_blank');
        }}
      >
        이용약관 보기
      </p>
    </div>
  );
};

export default React.memo(Footer);
