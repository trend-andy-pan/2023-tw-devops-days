const defaultOptions = {
  plugins: {
    datalabels: {
      display: true,
      color: "rgb(231 229 228)",
      font: {
        size: 18,
      },
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        color: "rgb(231 229 228)",
        padding: 20,
      },
    },
    tooltip: {
      displayColors: false,
      callbacks: {
        title: () => "",
        label: (v) => `${v.label}: ${v.raw} 人`,
      },
    },
  },
};

export const chartOptions = (value) => ({
  wordCloud: {
    plugins: {
      ...defaultOptions.plugins,
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    elements: {
      word: {
        color: [
          "rgb(220 38 38)",
          "rgb(234 88 12)",
          "rgb(217 119 6)",
          "rgb(202 138 4)",
          "rgb(101 163 13)",
          "rgb(22 163 74)",
          "rgb(13 148 136)",
          "rgb(8 145 178)",
          "rgb(2 132 199)",
          "rgb(37 99 235)",
          "rgb(79 70 229)",
          "rgb(124 58 237)",
          "rgb(147 51 234)",
          "rgb(192 38 211)",
          "rgb(219 39 119)",
          "rgb(225 29 72)",
        ],
        hoverColor: "rgb(231 229 228)",
        size: (ctx) => {
          const y = (ctx.parsed?.y ?? 0) / (value.maxValue ?? 1);

          return y * (value.maxFontSize ?? 1) + (value.basicFontSize ?? 16);
        },
      },
    },
  },
  bar: {
    indexAxis: value.indexAxis ?? "x",
    maintainAspectRatio: value.maintainAspectRatio ?? false,
    plugins: {
      ...defaultOptions.plugins,
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: value.scales?.x?.grid?.display ?? false,
          color: "rgb(87 83 78)",
        },
        ticks: {
          color: "rgb(231 229 228)",
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: value.scales?.y?.grid?.display ?? true,
          color: "rgb(87 83 78)",
        },
        ticks: {
          color: "rgb(231 229 228)",
        },
        border: {
          display: false,
        },
      },
    },
    responsive: true,
  },
  pie: {
    plugins: {
      ...defaultOptions.plugins,
      datalabels: {
        ...defaultOptions.plugins.datalabels,
        formatter: (labelValue, context) => {
          return value.formatter
            ? value.formatter(labelValue, context)
            : labelValue;
        },
      },
      tooltip: {
        enabled: value.tooltip?.enabled ?? true,
        callbacks: {
          title: () => "",
          label: (v) => ` ${v.label}: ${v.raw} 人`,
        },
      },
    },
    radius: "75%",
    responsive: true,
  },
  doughnut: {
    ...defaultOptions,
    radius: "75%",
    responsive: true,
  },
});

export default chartOptions;
