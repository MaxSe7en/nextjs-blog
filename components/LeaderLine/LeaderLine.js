import React, { useEffect, useRef } from 'react';
// import LeaderLine from 'leader-line';
import styles from './LeaderLine.module.css';

const LeaderLineComponent = ({ drawNumbers }) => {
  const numberRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return; // Exit early if not in the browser environment
    }

    // Function to draw lines between numbers
    const drawLines = () => {
      // Iterate over each pair of adjacent number elements and draw a line between them
      for (let i = 0; i < numberRefs.current.length - 1; i++) {
        const startPoint = numberRefs.current[i].current;
        const endPoint = numberRefs.current[i + 1].current;

        // Create a new LeaderLine instance between the current number element and the next one
        const line = new LeaderLine(startPoint, endPoint, { color: "red", size: 1, path: 'straight' }).setOptions({ startPlug: "behind", endPlug: "behind" }).show();
      }
    };

    drawLines();

    // Cleanup function to remove LeaderLine instances when component unmounts
    return () => {
      LeaderLine.remove('.leader-line');
    };
  }, [drawNumbers]); // Re-run effect when drawNumbers changes

  return (
    <table>
      <thead>
        <tr>
          {/* Render table headers */}
          {Array.from({ length: 10 }).map((_, idx) => (
            <th key={idx} className={styles.secondMenu}>{idx}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render table rows */}
        {drawNumbers.map((draw, rowIndex) => (
          <tr key={rowIndex}>
            {draw.map((number, colIndex) => {
              const ref = useRef(null);
              numberRefs.current.push(ref);
              return <td key={colIndex} className="number" ref={ref}>{number}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderLineComponent;
