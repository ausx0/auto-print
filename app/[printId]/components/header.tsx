import React from "react";
import fullLogoIcon from "@/public/logo-HD.svg";
import Image from "next/image";

const Header = () => {
  const headerInfo = [
    {
      fontFamily: "ArialBold",
      text: "Molecular Histopathology, Infectious & Clinical Biochemistry",
    },
    {
      fontFamily: "TextMedium",
      text: "مختبر زهــرة كامبيـون للتحليلات النسيجية، المرضية والجزيئية المتقدمة",
    },
  ];

  const staffInfo = [
    {
      name: "Dr. Sazan Abdulwahab Mirza",
      qualifications: [
        "M.B.Ch.B; F.I.C.M.S. (Pathology)",
        "Consultant Pathologist",
        "Ass. Prof. College of Medicine",
        "University of Baghdad",
      ],
    },
    {
      name: "Prof. Khalida Kareem Abbas",
      qualifications: [
        "M.Sc. (Medical Microbiology)",
        "Microbiologist",
        "Prof. College of Medicine",
        "University of Baghdad",
      ],
    },
    {
      name: "Ch. Fatima Azeez Saed",
      qualifications: ["M.Sc. (Clinical Biochemistry)", "Chief Chemists"],
    },
  ];

  return (
    <>
      <div className="flex flex-col pt-2">
        <div className="p-1 flex justify-between items-end text-secondary text-[11pt]">
          <div>
            <Image src={fullLogoIcon} alt="" width={200} height={75} />
          </div>
          <div className="flex flex-col items-end font-bold">
            {headerInfo.map((info, index) => (
              <h1 key={index} style={{ fontFamily: info.fontFamily }}>
                {info.text}
              </h1>
            ))}
          </div>
        </div>

        <div className="flex gap-5 justify-around text-center text-[8pt] text-secondary leading-3">
          {staffInfo.map((staff, index) => (
            <div key={index}>
              <ul>
                <li
                  className="text-primary font-bold underline text-[9pt]"
                  style={{ fontFamily: "Eurostile_Extended_Regular" }}
                >
                  {staff.name}
                </li>
                {staff.qualifications.map((qualification, qIndex) => (
                  <li key={qIndex}>{qualification}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
