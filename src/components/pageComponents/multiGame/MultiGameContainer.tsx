import React, { useCallback, useEffect, useState } from "react";
import { MultiGamePresenter } from "./MultiGamePresenter";

const MultiGameContainer = () => {
  const [first, setFirst] = useState<number>(Math.random() * (10 - 1) + 1);
  const [second, setSecond] = useState<number>(Math.random() * (10 - 1) + 1);
  const [num, setNum] = useState<number>(
    Math.floor(first) * Math.floor(second)
  );

  const onFinish = (e) => {
    e.preventDefault();
    const result = parseInt(e.target.result.value);
    console.log(result, num);

    if (num === result) {
      alert("정답");
      setFirst(Math.random() * (10 - 1) + 1);
      setSecond(Math.random() * (10 - 1) + 1);

      e.target.result.value = "";
    } else {
      alert("오답");
    }
  };

  useEffect(() => {
    setNum(Math.floor(first) * Math.floor(second));
  }, [second]);

  return <MultiGamePresenter number={{ first, second }} onFinish={onFinish} />;
};

export default MultiGameContainer;
