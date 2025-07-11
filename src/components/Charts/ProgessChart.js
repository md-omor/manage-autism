import React, { useCallback, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
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

const ProgessChart = () => {
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
      {/* <div className="profile_container"> */}
      <div className="chart_head_wrap">
        <h1 className="notes">Progression</h1>

        <select>
          <option value="Last 3 Months">Last 3 Months</option>
          <option value="Last 6 Months">Last 6 Months</option>
          <option value="Last 9 Months">Last 9 Months</option>
          <option value="Last 12 Months">Last 12 Months</option>
        </select>
      </div>

      <div className="chart_wrapper">
        <LineChart
          width={640}
          height={419}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 5,
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
              strokeWidth={4}
            />
            <Line
              type="monotone"
              dataKey="Constipation"
              strokeOpacity={opacity.Constipation}
              stroke="#0058FF"
              strokeWidth={4}
            />
            <Line
              type="monotone"
              dataKey="Food"
              strokeOpacity={opacity.Constipation}
              stroke="#FFD43D"
              strokeWidth={4}
            />
            <Line
              type="monotone"
              dataKey="Distressed"
              strokeOpacity={opacity.Constipation}
              stroke="#ed3726"
              strokeWidth={4}
            />
        </LineChart>
      </div>
      {/* </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .chart_head_wrap {
    display: flex;
    justify-content: space-between;
    select {
      border: none;
      outline: none;
      font: normal normal normal 14px/20px Poppins;
      letter-spacing: 0px;
      color: #5a607f;
      opacity: 1;
      margin-right: 30px;

      option {
        font: normal normal normal 14px/20px Poppins;
        letter-spacing: 0px;
        color: #5a607f;
        opacity: 1;
      }
    }

    .notes {
      text-align: left;
      letter-spacing: 0.24px;
      color: #131523;
      opacity: 1;
      font-family: "Poppins", sans-serif;
    }
  }
  .chart {
    width: 100%;
  }
  svg.recharts-surface {
    margin-left: -18px;
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
`;

export default ProgessChart;
