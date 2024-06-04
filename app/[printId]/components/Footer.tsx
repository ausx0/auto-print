import React from "react";

const Footer = () => {
  const contactInfo = [
    { fontFamily: "variableFont", text: "САМРӏОΝ", size: "12.3pt" },
    { fontFamily: "Eurostile_Extended_Regular", text: "SCIENTIFIC" },
    { fontFamily: "Arial", text: "Alyarmouk Bldg, 5th Fl Urdun St, Alyarmouk" },
    { fontFamily: "Arial", text: "Near Alyarmouk Gas Station, Baghdad, Iraq" },
  ];

  const arabicInfo = [
    {
      fontFamily: "TextBold",
      text: "مختبر زهرة كامبيون",
      size: "12.3pt",
      bold: true,
    },
    {
      fontFamily: "TextMedium",
      text: "للتحليلات النسيجية، المرضية والجزيئية المتقدمة",
      size: "9pt",
    },
    {
      fontFamily: "TextLight",
      text: "بناية اليرموك، ط٥ شارع الاردن، اليرموك",
      rtl: true,
    },
    { fontFamily: "TextLight", text: "قرب محطة وقود اليرموك ،بغداد، العراق" },
  ];

  const contactNumbers = [
    { fontFamily: "Arial", text: "(+964)7750308059" },
    { fontFamily: "Arial", text: "(+964)7850308059" },
  ];

  const websiteInfo = [
    { fontFamily: "Arial", text: "www.campion‑scientific.com" },
    { fontFamily: "Arial", text: "info@campion‑scientific.com" },
  ];

  return (
    <>
      <div className="flex justify-between w-full px-12 text-white text-[9.8pt]">
        <div>
          {contactInfo.map((info, index) => (
            <h1
              key={index}
              style={{
                fontFamily: info.fontFamily,
                fontSize: info.size || "9.8pt",
              }}
            >
              {info.text}
            </h1>
          ))}
        </div>
        <div className={""} dir="rtl" lang="ar">
          {arabicInfo.map((info, index) => (
            <h1
              key={index}
              style={{
                fontFamily: info.fontFamily,
                fontSize: info.size || "9.8pt",
                fontWeight: info.bold ? "bold" : "normal",
                unicodeBidi: info.rtl ? "bidi-override" : undefined,
                direction: info.rtl ? "rtl" : undefined,
              }}
            >
              {info.text}
            </h1>
          ))}
        </div>
      </div>
      <div className="w-[95%] mx-auto my-2 ">
        <hr className="border-white border-[1px]" /> {/* Add this line */}
      </div>

      <div className="flex justify-between w-full px-12 text-white text-sm ">
        <div>
          {contactNumbers.map((info, index) => (
            <h1 key={index} style={{ fontFamily: info.fontFamily }}>
              {info.text}
            </h1>
          ))}
        </div>
        <div>
          {websiteInfo.map((info, index) => (
            <h1 key={index} style={{ fontFamily: info.fontFamily }}>
              {info.text}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
