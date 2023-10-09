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

import chartOptions from "./config/chartOptions";
import result from "./config/result";

export default function Result() {
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

  return (
    <div className="flex gap-3 flex-wrap max-md:px-3">
      {result.map((item) => (
        <Card className={`${item.basis} max-md:basis-full grow`} key={item.key}>
          <CardHeader className="z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 font-bold">{item.title}</p>
            <h2 className="text-white font-medium text-large">
              {item.question}
            </h2>
          </CardHeader>
          <CardBody className={`${item.type === "wordCloud" && "h-96"}`}>
            <Chart
              type={item.type}
              data={item.data}
              options={chartOptions(item.chartOptions ?? {})[item.type]}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
