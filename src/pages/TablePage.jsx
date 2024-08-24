import PropTypes from "prop-types";

const TablePage = ({ wordcount }) => {
  return (
    <div className="max-w-2xl mx-auto mt-6">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-y-auto max-h-[600px] sm:max-h-[400px] md:max-h-[600px] lg:max-h-[600px]">
              {" "}
              {/* max-h-96 establece la altura máxima a 400px */}
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-900 sticky top-0">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Word
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Count
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {wordcount.map(({ word, count }, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {word}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        {count}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TablePage.propTypes = {
  wordcount: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TablePage;
