import React from "react";
import { Card } from "react-bootstrap";

export default function B() {
  const arr = [
    {
      id: 1,
      text: "aaa",
      complete: true,
    },
    {
      id: 2,
      text: "bbb",
      complete: true,
    },
    {
      id: 3,
      text: "ccc",
      complete: true,
    },
  ];
  let handleform = (id) => {
    console.log(id);

    const zz =  arr.find(vals=>vals.id===id);
    const yy = arr.filter(valss =>valss.id!==id);
    console.log(zz)
    console.log(yy)
  };

  return (
    <>
      {arr.map((val) => {
        return (
          <>
            <Card onClick={() => handleform(val.id)}>{val.text}</Card>
          </>
        );
      })}
    </>
  );
}
