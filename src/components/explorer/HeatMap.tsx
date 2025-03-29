import { useEffect, useRef } from "react";
import CalHeatmap from "cal-heatmap";
import "cal-heatmap/cal-heatmap.css";

const generateDummyData = () => {
    const today = new Date();
    const data: Record<number, number> = {};
  
    for (let i = 365; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      const timestamp = Math.floor(date.getTime() / 1000);
      data[timestamp] = Math.floor(Math.random() * 100);
    }
  
    return data;
  };
const HeatmapComponent = () => {
  const calRef = useRef<CalHeatmap | null>(null);

  useEffect(() => {
    if (!calRef.current) {
        calRef.current = new CalHeatmap();
        console.log(generateDummyData())
      calRef.current.paint({
        range: 12,
        domain: { type: "month", gutter: 1 },
        subDomain: { type: "day", radius: 1, width: 15, height: 15, gutter: 4 },
          data: {
              source: generateDummyData(),
              x: (d) => d.key,
              y: (d) => d.value,
        },
        scale: {
          color: { type: "linear", scheme: "Blues" },
        },
      });
    }
  }, []);

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding:'10px 10px 0 10px',
            gap: 0,
            width:'100%',
            border: '1px solid black',
            borderRadius: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
            backdropFilter: 'blur(20px)',
        }}
            id="cal-heatmap"></div>
    );
};

export default HeatmapComponent;
