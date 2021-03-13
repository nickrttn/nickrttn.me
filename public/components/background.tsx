import { styled } from 'goober';
import { useEffect, useState } from 'preact/hooks';

const Fixed = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;

  svg {
    width: 100%;
    height: 100%;
    filter: hue-rotate(${Math.random() * 360}deg);
  }
`;

type Rect = {
  color: string;
  col: number;
  row: number;
  key: string;
};

export default function Background() {
  const [size, setSize] = useState<number>(0);
  const [rects, setRects] = useState<Rect[]>([]);

  useEffect(() => {
    async function fetchContributions() {
      const p = await fetch('/.netlify/functions/contributions');
      const data = await p.json();
      setSize(data.size);
      setRects(data.rects);
    }

    fetchContributions();
  }, []);

  if (rects.length === 0) return null;

  return (
    <Fixed>
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
        {rects.map((el) => (
          <rect
            key={el.key}
            x={(el.col - 1) * size}
            y={(el.row - 1) * size}
            fill={el.color}
            fill-opacity={0.12}
            width={size}
            height={size}
            shapeRendering="crispEdges"
          />
        ))}
      </svg>
    </Fixed>
  );
}
