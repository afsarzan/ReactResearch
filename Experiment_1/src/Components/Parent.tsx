import { useEffect, useState } from "react";
import Reliver from "./reliver";

export default function ParentComponent() {
  const [rv, setrv] = useState<String>('test String');

  useEffect(() => {
      setTimeout(() => {
          setrv("relived after 3 seconds");
    }, 3000);
}, []);
  return (
    <>
      <div>Parent</div>
      <Reliver rv={rv}></Reliver>
    </>
  );
}
