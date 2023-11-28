function Map() {
  return (
    <div className="map">
      {/* MAP 배너 */}
      <div className="map-banner">
        <div className="map-banner-inner-bg"></div>
        <div className="map-banner-inner">
          <strong>
            VISIT US <br className="mobile" />
            <span>BNC LOGISTICS와 함께 하시겠습니까?</span>
          </strong>
        </div>
      </div>

      {/* 지도 */}
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.469458645424!2d126.95071975634781!3d37.54400185687942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98a0b86a2673%3A0x82e0b3a82b3a013b!2z7ISc7Jq47Yq567OE7IucIOuniO2PrOq1rCDrp4zrpqzsnqzroZwgMTQ!5e0!3m2!1sko!2skr!4v1701093455566!5m2!1sko!2skr"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
      {/* 지도 내용 */}
      <div className="map-content">
        <div className="adress">
          <p>주소</p>
          <span>
            서울특별시 마포구 만리재로 14, 2102호(공덕동,르네상스타워)
          </span>
        </div>
        <div className="connect">
          <p>연락처</p>
          <span>대표 번호: +82-2-3272-5300</span>
          <span>팩스: +82-2-3272-5455</span>
        </div>
        <div className="email">
          <p>이메일</p>
          <span>대표 이메일: info@bncl.co.kr</span>
        </div>
      </div>
    </div>
  );
}

export default Map;
