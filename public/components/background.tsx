import styles from './background.module.css';
import { useEffect, useState } from 'preact/hooks';
import { FunctionalComponent } from 'preact';

type Rect = {
  color: string;
  col: number;
  row: number;
  key: string;
};

type Data = {
  size: number;
  rects: Rect[];
};

const Background: FunctionalComponent = () => {
  const [size, setSize] = useState<number>(0);
  const [rects, setRects] = useState<Rect[]>([]);

  useEffect(() => {
    async function fetchContributions() {
      const p = await fetch('/.netlify/functions/contributions');
      const data = (await p.json()) as Data;
      setSize(data.size);
      setRects(data.rects);
    }

    void fetchContributions();
  }, []);

  if (rects.length === 0) return null;

  return (
    <div class={styles.background}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <title>
            This is my GitHub commit graph. I used it as a background because I
            wanted something semi-random. I think the data has no significant
            value beyond that.
          </title>
        </defs>
        {rects.map((el, idx) => (
          <rect
            key={el.key}
            x={idx * size}
            y={0}
            fill={el.color}
            fill-opacity={0.25}
            width={size}
            height={100}
            shapeRendering="crispEdges"
          />
        ))}
      </svg>
    </div>
  );
};

export default Background;
