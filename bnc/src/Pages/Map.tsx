import { useTranslation } from "react-i18next";

function Map() {
  const { t } = useTranslation();

  return (
    <div className="map">
      {/* MAP 배너 */}
      <div className="map-banner">
        <div className="map-banner-inner-bg"></div>
        <div className="map-banner-inner">
          <strong>{t(`contact.title`)}</strong>
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
          <p>{t(`contact.a`)}</p>
          <span>{t(`contact.b`)}</span>
        </div>
        <div className="connect">
          <p>{t(`contact.c`)}</p>
          <span>{t(`contact.d`)}</span>
          <span>{t(`contact.e`)}</span>
        </div>
        <div className="email">
          <p>{t(`contact.f`)}</p>
          <span>{t(`contact.g`)}</span>
        </div>
      </div>
    </div>
  );
}

export default Map;
