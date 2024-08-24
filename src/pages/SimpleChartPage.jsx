import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import PropTypes from "prop-types";

const SimpleChartPage = ({ wordcount }) => {
  return (
    <div className="max-h-[600px] flex flex-col h-full mt-6">
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={wordcount}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="word"
              tick={{ fill: "#ffffff" }}
              axisLine={{ stroke: "#ffffff" }}
            />{" "}
            <YAxis
              tick={{ fill: "#ffffff" }}
              axisLine={{ stroke: "#ffffff" }}
            />{" "}
            <Tooltip />
            <Area type="monotone" dataKey="count" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

SimpleChartPage.propTypes = {
  wordcount: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default SimpleChartPage;
