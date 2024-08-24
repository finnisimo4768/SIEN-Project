import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import PropTypes from "prop-types";

const BarChartPage = ({ wordcount }) => {
  return (
    <div className="max-h-[600px] flex flex-col h-full mt-6 ">
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={wordcount}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            data-testid="chart-container"
          >
            <CartesianGrid strokeDasharray="4 1 2" />
            <XAxis
              dataKey="word"
              tick={{ fill: "#ffffff" }}
              axisLine={{ stroke: "#ffffff" }}
            />
            <YAxis
              tick={{ fill: "#ffffff" }}
              axisLine={{ stroke: "#ffffff" }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#1a202c" data-testid="bar-item" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

BarChartPage.propTypes = {
  wordcount: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default BarChartPage;
