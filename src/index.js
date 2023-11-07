import { embed } from "@genome-spy/core";

const spec = {
  data: {
    sequence: { start: 0, stop: 6.284, step: 0.39269908169, as: "x" },
  },
  transform: [{ type: "formula", expr: "sin(datum.x)", as: "sin" }],
  mark: "point",
  encoding: {
    x: { field: "x", type: "quantitative" },
    y: { field: "sin", type: "quantitative" },
  },
};

embed(document.body, spec, {});
