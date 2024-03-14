import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1>hello World</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              {Array.from({ length: 10 }).map((_, i) => (
                <th key={i}>Header {i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 50 }).map((_, i) => (
              <tr key={i}>
                {Array.from({ length: 10 }).map((_, j) => (
                  <td key={j}>Data {j + 1}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
