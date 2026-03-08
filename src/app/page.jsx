"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/sheet")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Google Sheet Data</h1>

      {!data && <p>Loading...</p>}

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
