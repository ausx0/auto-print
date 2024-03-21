import React from "react";
import fullLogoIcon from "@/public/logo-HD.svg";
import Image from "next/image";
import {
  ArialBold,
  Eurostile_Extended_Regular,
  TextMedium,
} from "@/app/layout";

const Header = () => {
  return (
    <>
      <div className="flex flex-col pt-2  ">
        <div
          className={` ${ArialBold.className} p-1  flex justify-between items-end text-secondary text-[11pt]`}
        >
          <div>
            <Image src={fullLogoIcon} alt="" width={200} height={75} />
          </div>
          <div className="flex flex-col items-end font-bold">
            <h1>
              Molecular Histopathology, Infectious & Clinical Biochemistry
            </h1>
            <h1 className={` ${TextMedium.className}  `}>
              مختبر زهــرة كامبيـون للتحليلات النسيجية، المرضية والجزيئية
              المتقدمة
            </h1>
          </div>
        </div>

        <div
          className={` ${Eurostile_Extended_Regular.className} flex gap-5 justify-around text-center text-[8pt] text-secondary leading-3`}
        >
          <div>
            <ul>
              <li className="text-primary font-bold underline text-[9pt]">
                Dr. Sazan Abdulwahab Mirza
              </li>
              <li>M.B.Ch.B; F.I.C.M.S. (Pathology)</li>
              <li>Consultant Pathologist</li>
              <li>Ass. Prof. College of Medicine</li>
              <li>University of Baghdad</li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="text-primary font-bold underline text-[9pt]">
                Prof. Khalida Kareem Abbas
              </li>
              <li>M.Sc. (Medical Microbiology)</li>
              <li>Microbiologist</li>
              <li>Prof. College of Medicine</li>
              <li>University of Baghdad</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-primary font-bold underline text-[9pt]">
                Ch. Fatima Azeez Saed
              </li>
              <li>M.Sc. (Clinical Biochemistry)</li>
              <li>Chief Chemists</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
