"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function Home() {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Get the id from the URL

  const { data, isLoading, isError } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const res = await fetch(
        `http://campion.medwithus.com/ResultTester?Order_id=${id}`
      );
      return res.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>
        {data.samples.map((sample, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-2 gap-2 test-table">
              <div className="border-2 bg-primary text-white rounded-xl p-1">
                <h3 className="font-bold">
                  Age: <span className="font-normal">{sample.age}</span>
                </h3>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-1">
                <h3 className="font-bold">
                  Consultant:
                  <span className="font-normal"> {sample.consultant}</span>
                </h3>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-1">
                <h3 className="font-bold">
                  Gender: <span className="font-normal"> {sample.gender}</span>
                </h3>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-1">
                <h3 className="font-bold">
                  Patient Name:{" "}
                  <span className="font-normal">{sample.patient_name}</span>
                </h3>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-1">
                <h3 className="font-bold">
                  Result Date:{" "}
                  <span className="font-normal">{sample.result_date}</span>
                </h3>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-1">
                <h3 className="font-bold">
                  Sample ID:{" "}
                  <span className="font-normal">{sample["sample id"]}</span>
                </h3>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-1">
                <h3 className="font-bold">
                  Sample Date:{" "}
                  <span className="font-normal">{sample.sample_date}</span>
                </h3>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-1">
                <h3 className="font-bold">
                  Sample Type:{" "}
                  <span className="font-normal">{sample.sample_type}</span>
                </h3>
              </div>
            </div>

            {sample.tests.map((test) => (
              <div
                key={test.tableheader}
                className={` m-4 border-2 border-primary ${
                  test.onepage === "1" ? "test-table" : ""
                }`}
              >
                <table
                  className={`table-auto border-primary w-full divide-y divide-gray-200 ${
                    test.onepage === "1" ? "h-full" : ""
                  }`}
                >
                  <thead className="bg-primary text-white">
                    <th>
                      <h2 className=" text-center border-primary border-2  font-bold ">
                        {test.tableheader}
                      </h2>
                    </th>
                    <tr>
                      {test.columns.map((column, i) => (
                        <th
                          key={i}
                          className="px-6 py-2 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y border-2 border-primary divide-gray-200">
                    {test.data.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-100 font-bold text-[12px]"
                      >
                        <td className="px-6 py-2 whitespace-nowrap">
                          {row.name}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap">
                          {row.result}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap">
                          {row["normal range"]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
