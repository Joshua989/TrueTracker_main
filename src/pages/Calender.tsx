import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { format, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';

const data = [
    { date: '2024-09-01', value: 120.45, trades: 10 },
    { date: '2024-09-02', value: -120.45, trades: 5 },
    { date: '2024-09-04', value: 120.45, trades: 10 },
    { date: '2024-09-07', value: -120.45, trades: 5 },
    { date: '2024-09-08', value: -120.45, trades: 5 },
    { date: '2024-09-12', value: 120.45, trades: 10 },
    { date: '2024-09-25', value: -120.45, trades: 5 },
    // Add more sample data as needed
];

const Calender = () => {
    const startDate = startOfWeek(startOfMonth(new Date(2024, 8, 1))); // September 2024
    const endDate = endOfWeek(endOfMonth(new Date(2024, 8, 1)));
    const days = [];
    let currentDay = startDate;

    // Generate day cells for the calendar
    while (currentDay <= endDate) {
        const dayData = data.find(d => d.date === format(currentDay, 'yyyy-MM-dd'));
        days.push({
            date: currentDay,
            value: dayData ? dayData.value : 0,
            trades: dayData ? dayData.trades : 0,
        });
        currentDay = addDays(currentDay, 1);
    }

    // Group days by weeks
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }

    return (
        <div className="flex-col justify-between items-center w-full mt-20 pl-14 pr-14 rounded-md shadow-sm">
            <div className="flex-col justify-between items-center w-full p-7 border border-gray-300 rounded-md shadow-sm">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <h2>Visual Overview of Trading Month</h2>
                    </div>
                    <div className="flex align-middle justify-between w-72">
                        <button className="p-2 bg-gray-200 w-20 text-black hover:bg-gray-300 font-semibold rounded-md ">
                            Today
                        </button>
                        <button className="p-2 bg-gray-200 w-20 rounded-md hover:bg-gray-300">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className="p-2 bg-gray-200 w-20 rounded-md hover:bg-gray-300">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
                <div className="p-8">
                    <div className="flex justify-between items-center border-b pb-2 mb-4">
                        <h2 className="text-xl font-semibold">PST</h2>
                    </div>

                    {/* Weeks */}
                    <div className="grid-0 grid-cols-1 ">
                        {weeks.map((week, index) => (
                            <div key={index} className="flex  items-center">
                                <div className="w-20 mr-5 text-center font-semibold text-gray-600">{`Wk ${index + 1}`}</div>
                                {week.map((day, i) => (
                                    <div
                                        key={i}
                                        className={`border p-12 w-64  text-center ${
                                            day.value > 0
                                                ? 'bg-green-100 text-green-600'
                                                : day.value < 0
                                                ? 'bg-red-100 text-red-600'
                                                : 'bg-gray-100 text-gray-600'
                                        }`}
                                    >
                                        <div className="text-sm font-semibold">{format(day.date, 'dd')}</div>
                                        <div className="text-xs">
                                            {day.value !== 0 ? `$${day.value.toFixed(2)}` : '$0.00'}
                                        </div>
                                        <div className="text-xs">{day.trades} trades</div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calender;
