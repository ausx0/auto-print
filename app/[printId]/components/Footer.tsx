import { Arial, Eurostile_Extended_Regular, variableFont } from "@/app/layout";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between w-full px-12 text-white text-sm">
        <div>
          <h1 className={`${variableFont.className} text-xl`}>САМРӏОΝ</h1>
          <h1 className={`${Eurostile_Extended_Regular.className} text-sm`}>
            SCIENTIFIC
          </h1>
          <h1 className={`${Arial.className}`}>
            Alyarmouk Bldg, 5th Fl Urdun St, Alyarmouk
          </h1>
          <h1 className={`${Arial.className}`}>
            Near Alyarmouk Gas Station, Baghdad, Iraq
          </h1>
        </div>
        <div className={""} dir="rtl" lang="ar">
          <h1 className={`${variableFont.className}  text-xl font-bold`}>
            مختبر زهرة كامبيون
          </h1>
          <h1 className={`${Eurostile_Extended_Regular.className}`}>
            للتحليلات النسيجية، المرضية والجزيئية المتقدمة
          </h1>
          <h1
            className={`${Arial.className}`}
            style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
          >
            بناية اليرموك، ط٥ شارع الاردن، اليرموك
          </h1>
          <h1 className={`${Arial.className}`}>
            قرب محطة وقود اليرموك ،بغداد، العراق
          </h1>
        </div>
      </div>
      <div className="w-[95%] mx-auto my-2 ">
        <hr className="border-white border-[2px]" /> {/* Add this line */}
      </div>

      <div className="flex justify-between w-full px-12 text-white text-sm ">
        <div>
          <h1 className={`${Arial.className}`}>(+964)7750308059</h1>
          <h1 className={`${Arial.className}`}>(+964)7850308059</h1>
        </div>
        <div>
          <h1 className={`${Arial.className}`}>www.campion‑scientific.com</h1>
          <h1 className={`${Arial.className}`}>info@campion‑scientific.com</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
