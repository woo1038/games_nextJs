import React from "react";
import styles from "./style.module.scss";

interface Props {
  // id: number;
  number: { first: number; second: number };
  onFinish: any;
}

export const MultiGamePresenter: React.FC<Props> = ({ number, onFinish }) => {
  let { first, second } = number;
  first = Math.floor(first);
  second = Math.floor(second);

  return (
    <section className={styles.hello}>
      <form onSubmit={onFinish}>
        <div>
          {first}, {second}
        </div>
        <input name="result"></input>
        <button></button>
      </form>
    </section>
  );
};
