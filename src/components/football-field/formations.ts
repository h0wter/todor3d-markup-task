type Position = {
  top: string;
  left: string;
};

type Formation = {
  [name: string]: Position[];
};

const formations: Formation = {
  "4-3-3/1": [
    {
      top: "50%",
      left: "11%",
    },
    {
      top: "22.9%",
      left: "22%",
    },
    {
      top: "37.7%",
      left: "22%",
    },
    {
      top: "61%",
      left: "22%",
    },
    {
      top: "75%",
      left: "22%",
    },
    {
      top: "31.8%",
      left: "44.7%",
    },
    {
      top: "68.9%",
      left: "44.7%",
    },
    {
      top: "21.8%",
      left: "65%",
    },
    {
      top: "50%",
      left: "60.3%",
    },
    {
      top: "79.2%",
      left: "65%",
    },
    {
      top: "50%",
      left: "83.3%",
    },
  ],
  "4-3-3/2": [
    {
      top: "50%",
      left: "11%",
    },
    {
      top: "20.7%",
      left: "28.2%",
    },
    {
      top: "41.1%",
      left: "21.7%",
    },
    {
      top: "61.3%",
      left: "21.7%",
    },
    {
      top: "80.2%",
      left: "28.2%",
    },
    {
      top: "33.7%",
      left: "47.9%",
    },
    {
      top: "50%",
      left: "52.3%",
    },
    {
      top: "68.9%",
      left: "47.9%",
    },
    {
      top: "22.8%",
      left: "74%",
    },
    {
      top: "80.2%",
      left: "74%",
    },
    {
      top: "50%",
      left: "83.3%",
    },
  ],
};

export { formations };
