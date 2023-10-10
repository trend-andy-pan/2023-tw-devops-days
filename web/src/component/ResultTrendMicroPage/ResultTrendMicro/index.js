import { Card, CardHeader, CardBody } from "@nextui-org/react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
  registerables,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { WordCloudController, WordElement } from "chartjs-chart-wordcloud";

import styled, { keyframes } from "styled-components";
import { fadeInUpBig } from "react-animations";

import chartOptions from "./config/chartOptions";
import result from "./config/result";

export default function ResultTrendMicro() {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Colors,
    ChartDataLabels,
    WordCloudController,
    WordElement
  );
  ChartJS.register(...registerables);

  const FadeInUpBigDiv = styled.div`
    animation: 3s ${keyframes`${fadeInUpBig}`};
  `;

  return (
    <FadeInUpBigDiv>
      <div className="flex gap-3 flex-wrap max-md:px-3 max-md:pb-3">
        {result.map((item) => (
          <Card
            className={`${item.basis} max-md:basis-full grow`}
            key={item.key}
          >
            <CardHeader className="z-10 top-1 flex-col items-start">
              <h2 className="text-white font-medium text-large">
                {item.question}
              </h2>
            </CardHeader>
            <CardBody
              className={`${item.type === "wordCloud" && "h-96"} ${
                item.maxMdHeight ?? "max-md:h-96"
              }`}
            >
              <Chart
                type={item.type}
                data={item.data}
                options={chartOptions(item.chartOptions ?? {})[item.type]}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </FadeInUpBigDiv>
  );
}
