import React, { useEffect } from "react";
import styles from "./History.module.css";
import LeaderLineComponent from "../LeaderLine/LeaderLine";

const History = () => {
  // randow 5 numbers from 0 to 9
  const drawNumbers = [
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 9],
    [2, 3, 4, 5, 6],
    [9, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [7, 2, 3, 4, 5],
    [7, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [4, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [5, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [8, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [0, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
  ];

  useEffect(() => {
    const drawLines = () => {
      // Get all number elements
      const numberElements = document.querySelectorAll(`.${styles.number}`);

      // Iterate over each pair of adjacent number elements and draw a line between them
      for (let i = 0; i < numberElements.length - 1; i++) {
        const startPoint = numberElements[i];
        const endPoint = numberElements[i + 1];

        // Calculate the difference between the numbers in adjacent rows
        const startNumber = parseInt(startPoint.textContent);
        const endNumber = parseInt(endPoint.textContent);
        const numberDifference = Math.abs(endNumber - startNumber);

        // Calculate the distance between the numbers in adjacent rows
        const rect1 = startPoint.getBoundingClientRect();
        const rect2 = endPoint.getBoundingClientRect();
        const distance = Math.abs(rect2.top - rect1.bottom);

        // Set options based on proximity
        const options = {
          color: "red",
          size: 2,
          path: 'straight',
          startPlug: "behind",
          endPlug: "behind"
        };

        if (distance < 20) { // Adjust this threshold as needed
          if (numberDifference <= 2) {
            options.startSocket = 'middle';
            options.endSocket = 'top';
          } else {
            options.startSocket = 'middle';
            options.endSocket = 'middle';
          }
        } else {
          options.startSocket = 'middle';
          options.endSocket = 'middle';
        }

        // Create a new LeaderLine instance between the current number element and the next one
        // const line = new LeaderLine(startPoint, endPoint, {
        //   color: "red",
        //   size: 1,
        //   path: "straight",
        // })
        //   .setOptions({ startPlug: "behind", endPlug: "behind" })
        //   .show();
        new LeaderLine(startPoint, endPoint, options).show();
      }
    };

    drawLines();

    // Cleanup function to remove LeaderLine instances when component unmounts
    return () => {
      LeaderLine.remove(".leader-line");
    };
  }, [drawNumbers]);
  return (
    <div>
      {/* table */}
      <h1 className={styles.wan}>History</h1>
      <table>
        <thead>
          <tr>
            {/* <th className={styles.wan} rowSpan="2">Chart 1st</th> */}
            <th className={styles.secondMenu}>0</th>
            <th className={styles.secondMenu}>1</th>
            <th className={styles.secondMenu}>2</th>
            <th className={styles.secondMenu}>3</th>
            <th className={styles.secondMenu}>4</th>
            <th className={styles.secondMenu}>5</th>
            <th className={styles.secondMenu}>6</th>
            <th className={styles.secondMenu}>7</th>
            <th className={styles.secondMenu}>8</th>
            <th className={styles.secondMenu}>9</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: drawNumbers.length }).map((_, i) => {
            const isFifthRow = (i + 1) % 5 === 0;
            return (
              <tr key={i} className={isFifthRow ? styles.fifthRow : ""}>
                {Array(10)
                  .fill(10)
                  .map((_, idx) => {
                    return (
                      <td
                        key={idx}
                        className={`${styles.secondMenu} ${styles.numberContainerss
                          } ${drawNumbers[i][0] === idx
                            ? styles.numberContainer
                            : ""
                          } ${drawNumbers[i][0] === idx ? styles.number : ""}`}
                      >
                        {drawNumbers[i][0] === idx ? (
                          <span className={`${styles.numb} `}>
                            {drawNumbers[i][0]}
                          </span>
                        ) : (
                          ""
                        )}
                      </td>
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <LeaderLineComponent drawNumbers={drawNumbers} /> */}
    </div>
  );
};
const HistoryTest = () => {
  // randow 5 numbers from 0 to 9
  const drawNumbers = [
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 9],
    [2, 3, 4, 5, 6],
    [9, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [7, 2, 3, 4, 5],
    [7, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [4, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [5, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [8, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [0, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
  ];

  useEffect(() => {
    const drawLines = () => {
      // Get all number elements
      const numberElements = document.querySelectorAll(`.${styles.number}`);

      // Iterate over each pair of adjacent number elements and draw a line between them
      for (let i = 0; i < numberElements.length - 1; i++) {
        const startPoint = numberElements[i];
        const endPoint = numberElements[i + 1];

        // Calculate the difference between the numbers in adjacent rows
        const startNumber = parseInt(startPoint.textContent);
        const endNumber = parseInt(endPoint.textContent);
        const numberDifference = Math.abs(endNumber - startNumber);

        // Calculate the distance between the numbers in adjacent rows
        const rect1 = startPoint.getBoundingClientRect();
        const rect2 = endPoint.getBoundingClientRect();
        const distance = Math.abs(rect2.top - rect1.bottom);

        // Set options based on proximity
        const options = {
          color: "red",
          size: 2,
          path: 'straight',
          startPlug: "behind",
          endPlug: "behind"
        };



        if (numberDifference <= 2) {
          options.startSocket = 'middle';
          options.endSocket = 'middle';
        }

        // Create a new LeaderLine instance between the current number element and the next one
        // const line = new LeaderLine(startPoint, endPoint, {
        //   color: "red",
        //   size: 1,
        //   path: "straight",
        // })
        //   .setOptions({ startPlug: "behind", endPlug: "behind" })
        //   .show();
        new LeaderLine(startPoint, endPoint, options).show();
      }
    };

    drawLines();

    // Cleanup function to remove LeaderLine instances when component unmounts
    return () => {
      LeaderLine.remove(".leader-line");
    };
  }, [drawNumbers]);
  return (
    <div>
      {/* table */}
      <h1 className={styles.wan}>History</h1>
      <table>
        <thead>
          <tr>
            {/* <th className={styles.wan} rowSpan="2">Chart 1st</th> */}
            <th className={styles.secondMenu}>0</th>
            <th className={styles.secondMenu}>1</th>
            <th className={styles.secondMenu}>2</th>
            <th className={styles.secondMenu}>3</th>
            <th className={styles.secondMenu}>4</th>
            <th className={styles.secondMenu}>5</th>
            <th className={styles.secondMenu}>6</th>
            <th className={styles.secondMenu}>7</th>
            <th className={styles.secondMenu}>8</th>
            <th className={styles.secondMenu}>9</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: drawNumbers.length }).map((_, i) => {
            const isFifthRow = (i + 1) % 5 === 0;
            return (
              <tr key={i} className={isFifthRow ? styles.fifthRow : ""}>
                {Array(10)
                  .fill(10)
                  .map((_, idx) => {
                    return (
                      <td
                        key={idx}
                        className={`${styles.secondMenu} ${styles.numberContainerss
                          } ${drawNumbers[i][0] === idx
                            ? styles.numberContainer
                            : ""
                          } ${drawNumbers[i][0] === idx ? styles.numberc : ""}`}
                      >
                        {drawNumbers[i][0] === idx ? (
                          <span className={`${styles.number} `}>
                            {drawNumbers[i][0]}
                          </span>
                        ) : (
                          ""
                        )}
                      </td>
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <LeaderLineComponent drawNumbers={drawNumbers} /> */}
    </div>
  );
};

const HistoryTwo = () => {
  // randow 5 numbers from 0 to 9
  const drawNumbers = [
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 9],
    [2, 3, 4, 5, 6],
    [9, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [7, 2, 3, 4, 5],
    [7, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [4, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [5, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [8, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [0, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 7, 1, 1],
    [2, 3, 4, 5, 6],
  ];

  useEffect(() => {
    const drawLines = () => {
      // Get all number elements
      const numberElements = document.querySelectorAll(`.${styles.number}`);

     
    };

    drawLines();

    // Cleanup function to remove LeaderLine instances when component unmounts
    return () => {
      LeaderLine.remove(".leader-line");
    };
  }, [drawNumbers]);
  return (
    <div>
      {/* table */}
      <h1 className={styles.wan}>History</h1>
      <table>
        <thead>
          <tr>
            <th className={styles.secondMenu}>0</th>
            <th className={styles.secondMenu}>1</th>
            <th className={styles.secondMenu}>2</th>
            <th className={styles.secondMenu}>3</th>
            <th className={styles.secondMenu}>4</th>
            <th className={styles.secondMenu}>5</th>
            <th className={styles.secondMenu}>6</th>
            <th className={styles.secondMenu}>7</th>
            <th className={styles.secondMenu}>8</th>
            <th className={styles.secondMenu}>9</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: drawNumbers.length }).map((_, i) => {
            const isFifthRow = (i + 1) % 5 === 0;
            return (
              <tr key={i} className={isFifthRow ? styles.fifthRow : ""}>
                {Array(10)
                  .fill(10)
                  .map((_, idx) => {
                    return (
                      <td
                        key={idx}
                        className={`${styles.secondMenu} ${styles.numberContainerss
                          } ${drawNumbers[i][0] === idx
                            ? styles.numberContainer
                            : ""
                          } ${drawNumbers[i][0] === idx ? styles.number : ""}`}
                      >
                        {drawNumbers[i][0] === idx ? (
                          <span className={`${styles.numb} `}>
                            {drawNumbers[i][0]}
                          </span>
                        ) : (
                          ""
                        )}
                      </td>
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
   
    </div>
  );
};

export default History;
export { HistoryTwo };
export { HistoryTest };

