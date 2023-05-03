import { useState } from 'react';
import './style.css';

const Home = () => {
  const [mainImage, setMainImage] = useState<any>(null);
  const [text01Area, setText01Area] = useState<string>('');

  const encodeFileToBase64 = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setMainImage(reader.result);
        resolve();
      };
    });
  };

  const handleChange = (event: any) => {
    console.log(event.target.files[0]);
    encodeFileToBase64(event.target.files[0]);
  };

  return (
    <div className="main_container">
      {/* 왼쪽 입력 Area */}
      <section>
        <p>메인 이미지를 선택해주세요.</p>
        <input type="file" id="fileUpload" onChange={handleChange} />
        <p>문구를 입력해주세요.</p>
        <textarea onChange={(e) => setText01Area(e.target.value)} />
        <p>음악 선택</p>
        <p>신랑 연락처</p>
        <p>신부 연락처</p>
      </section>
      {/* // 왼쪽 입력 Area */}

      <section>
        <div className="mobile_emulator">
          <p>Wedding</p>
          {/* {mainImage ? <p>이미지가 있습니다.</p> : <p>이미지가 없습니다.</p>} */}
          <img src={mainImage} />
          {text01Area && <p className="text01area">{text01Area}</p>}
        </div>
      </section>
    </div>
  );
};

export default Home;
