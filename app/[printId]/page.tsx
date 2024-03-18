"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const res = await fetch(
        "http://campion.medwithus.com/ResultTester?Order_id=1"
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
            <div className="grid grid-cols-2 gap-4 test-table">
              <div className="border-2 bg-primary text-white rounded-xl p-4">
                <h3 className="font-bold">Age</h3>
                <p>{sample.age}</p>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-4">
                <h3 className="font-bold">Consultant</h3>
                <p>{sample.consultant}</p>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-4">
                <h3 className="font-bold">Gender</h3>
                <p>{sample.gender}</p>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-4">
                <h3 className="font-bold">Patient Name</h3>
                <p>{sample.patient_name}</p>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-4">
                <h3 className="font-bold">Result Date</h3>
                <p>{sample.result_date}</p>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-4">
                <h3 className="font-bold">Sample ID</h3>
                <p>{sample["sample id"]}</p>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-4">
                <h3 className="font-bold">Sample Date</h3>
                <p>{sample.sample_date}</p>
              </div>
              <div className="border-2 bg-primary text-white rounded-xl p-4">
                <h3 className="font-bold">Sample Type</h3>
                <p>{sample.sample_type}</p>
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
                      <h2 className=" text-center border-primary border-2  font-bold p-2">
                        {test.tableheader}
                      </h2>
                    </th>
                    <tr>
                      {test.columns.map((column, i) => (
                        <th
                          key={i}
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y border-2 border-primary divide-gray-200">
                    {test.data.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap">
                          {row.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {row.result}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
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
