import React, { useCallback, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

const data = [
  {
    name: "Jan",
    Constipation: 4000,
    Sleep: 2400,
    Food: 2600,
    Distressed: 2400,
  },
  {
    name: "Feb",
    Constipation: 3000,
    Sleep: 1398,
    Food: 2600,

    Distressed: 2210,
  },
  {
    name: "Mar",
    Constipation: 2000,
    Sleep: 4000,
    Food: 2600,

    Distressed: 2290,
  },
  {
    name: "Apr",
    Constipation: 2780,
    Sleep: 3908,
    Food: 1600,
    Distressed: 2000,
  },
  {
    name: "May",
    Constipation: 1890,
    Sleep: 4800,
    Food: 1600,
    Distressed: 2181,
  },
  {
    name: "Jun",
    Constipation: 2390,
    Sleep: 3800,
    Food: 2600,
    Distressed: 2500,
  },
  {
    name: "Jul",
    Constipation: 3490,
    Sleep: 4300,
    Food: 1700,
    Distressed: 2150,
  },
  {
    name: "Aug",
    Constipation: 3490,
    Sleep: 4300,
    Food: 2800,
    Distressed: 2200,
  },
  {
    name: "Sep",
    Constipation: 3490,
    Sleep: 4300,
    Food: 1500,
    Distressed: 2000,
  },
  {
    name: "Oct",
    Constipation: 3490,
    Sleep: 4300,
    Food: 2300,
    Distressed: 2400,
  },
  {
    name: "Nov",
    Constipation: 3490,
    Sleep: 4300,
    Food: 1300,
    Distressed: 2500,
  },
];
const ProfileChartMob = () => {
  const [opacity, setOpacity] = useState({
    Constipation: 1,
    Sleep: 1,
    Food: 1,
    Distressed: 1,
  });

  const handleMouseEnter = useCallback(
    (o) => {
      const { dataKey } = o;

      setOpacity({ ...opacity, [dataKey]: 0.5 });
    },
    [opacity, setOpacity]
  );

  const handleMouseLeave = useCallback(
    (o) => {
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 1 });
    },
    [opacity, setOpacity]
  );

  return (
    <Wrapper>
      <div className="container">
        <h1 className="notes">Progression</h1>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
            }}
            className="chart"
          >
            <Legend
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Sleep"
              strokeOpacity={opacity.Sleep}
              stroke="#21D59B"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="Constipation"
              strokeOpacity={opacity.Constipation}
              stroke="#0058FF"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="Food"
              strokeOpacity={opacity.Constipation}
              stroke="#FFD43D"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="Distressed"
              strokeOpacity={opacity.Constipation}
              stroke="#ed3726"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: 2px solid #f1f9ff;
  border-bottom: 2px solid #f1f9ff;
  .container {
    padding: 15px 29px;
  }
  .notes {
    text-align: left;
    letter-spacing: 0.24px;
    color: #131523;
    opacity: 1;
    font-family: "Poppins", sans-serif;
  }
  .chart_wrapper {
    width: 100%;
    height: 100%;
  }
  .chart {
    width: 100%;
    overflow: hidden;
  }
  svg.recharts-surface {
    margin-left: -18px;
  }

  svg.recharts-surface tspan {
    font: normal normal normal 13px/24px Poppins !important;
    letter-spacing: 0px !important;
    color: #7e84a3 !important;
  }

  li.recharts-legend-item {
    margin: 0px 0px 0 30px !important;
  }
  .recharts-legend-wrapper {
    bottom: 0px !important;
  }
  .recharts-tooltip-wrapper {
    background: #111 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 15px #44444f1a;
    opacity: 1;
  }
  .recharts-responsive-container {
    height: 340px !important;
}
.recharts-wrapper.chart {
    height: 340px !important;
}
`;

export default ProfileChartMob;
