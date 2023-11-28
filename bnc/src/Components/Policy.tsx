import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface PolicyShowType {
  PolicyShow: boolean;
  setPolicyShow: any;
}

function Policy({ PolicyShow, setPolicyShow }: PolicyShowType) {
  useEffect(() => {
    document.querySelector("body")?.classList.add("fixed");

    return () => {
      document.querySelector("body")?.classList.remove("fixed");
    };
  }, []);

  const { t } = useTranslation();

  return (
    <div className="policy">
      <span className="close" onClick={() => setPolicyShow(false)}>
        ✕
      </span>

      <p>
        {t(`policy.a`)}
        <br />
        {t(`policy.b`)}
        {t(`policy.b-a`)}
        <br />
      </p>
      <span> {t(`policy.c`)}</span>
      <span>
        {t(`policy.d`)}
        <br /> {t(`policy.e`)}
        <br /> {t(`policy.f`)}
      </span>
      <span> {t(`policy.g`)}</span>
      <span>
        {t(`policy.h`)}
        <br /> {t(`policy.i`)}
        <br /> {t(`policy.j`)}
      </span>
      <span>{t(`policy.k`)}</span>
      <span>
        {t(`policy.l`)}
        <br /> {t(`policy.m`)}
        <br /> {t(`policy.n`)} <br /> {t(`policy.o`)} <br />
        {t(`policy.p`)}
      </span>
      <span>
        {t(`policy.q`)} <br /> {t(`policy.r`)} <br />
        {t(`policy.s`)} <br />
        {t(`policy.t`)} <br /> {t(`policy.u`)}
        <br /> {t(`policy.v`)}
      </span>
      <span>
        {t(`policy.w`)} <br /> {t(`policy.x`)}
        <br /> {t(`policy.y`)} <br /> {t(`policy.z`)}
        <br /> {t(`policy.aa`)}
      </span>
      <span>
        {t(`policy.ab`)} <br /> {t(`policy.ac`)}
      </span>
      <span>
        {t(`policy.ad`)} <br />
        {t(`policy.ae`)} <br />
        {t(`policy.af`)} <br />
        {t(`policy.email`)}
      </span>
      <span>
        {t(`policy.ag`)}
        <br />
        {t(`policy.ah`)} <br />
        {t(`policy.ai`)} <br />
        {t(`policy.aj`)} <br />
        {t(`policy.ak`)}
      </span>
    </div>
  );
}

export default Policy;
