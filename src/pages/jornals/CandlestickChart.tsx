import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';

const CandlestickChart: React.FC = () => {
  const [chartOptions, setChartOptions] = useState<any>({});
  const ROOT_PATH = 'https://echarts.apache.org/examples';

  const upColor = '#00da3c';
  const downColor = '#ec0000';

  const splitData = (rawData: number[][]) => {
    const categoryData: string[] = [];
    const values: number[][] = [];
    const volumes: [number, number, number][] = [];

    for (let i = 0; i < rawData.length; i++) {
      categoryData.push(rawData[i][0].toString());
      values.push(rawData[i].slice(1));
      volumes.push([i, rawData[i][5], rawData[i][1] > rawData[i][2] ? 1 : -1]);
    }

    return { categoryData, values, volumes };
  };

  const calculateMA = (dayCount: number, data: { values: number[][] }) => {
    const result: (string | number)[] = [];
    for (let i = 0; i < data.values.length; i++) {
      if (i < dayCount) {
        result.push('-');
        continue;
      }
      const sum = data.values
        .slice(i - dayCount, i)
        .reduce((acc, curr) => acc + curr[1], 0);
      result.push((sum / dayCount).toFixed(3));
    }
    return result;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${ROOT_PATH}/data/asset/data/stock-DJI.json`
        );
        const rawData = response.data;
        const data = splitData(rawData);

        setChartOptions({
          animation: false,
          legend: {
            bottom: 10,
            left: 'center',
            data: ['Dow-Jones index', 'MA5', 'MA10', 'MA20', 'MA30']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' },
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: { color: '#000' }
          },
          axisPointer: {
            link: [{ xAxisIndex: 'all' }],
            label: { backgroundColor: '#777' }
          },
          toolbox: {
            feature: {
              dataZoom: { yAxisIndex: false },
              brush: { type: ['lineX', 'clear'] }
            }
          },
          brush: {
            xAxisIndex: 'all',
            brushLink: 'all',
            outOfBrush: { colorAlpha: 0.1 }
          },
          visualMap: {
            show: false,
            seriesIndex: 5,
            dimension: 2,
            pieces: [
              { value: 1, color: downColor },
              { value: -1, color: upColor }
            ]
          },
          grid: [
            { left: '10%', right: '8%', height: '50%' },
            { left: '10%', right: '8%', top: '63%', height: '16%' }
          ],
          xAxis: [
            {
              type: 'category',
              data: data.categoryData,
              boundaryGap: false,
              axisLine: { onZero: false },
              min: 'dataMin',
              max: 'dataMax'
            },
            {
              type: 'category',
              gridIndex: 1,
              data: data.categoryData,
              boundaryGap: false,
              axisLine: { onZero: false },
              axisTick: { show: false },
              axisLabel: { show: false },
              min: 'dataMin',
              max: 'dataMax'
            }
          ],
          yAxis: [
            { scale: true, splitArea: { show: true } },
            {
              scale: true,
              gridIndex: 1,
              splitNumber: 2,
              axisLabel: { show: false },
              axisLine: { show: false },
              axisTick: { show: false },
              splitLine: { show: false }
            }
          ],
          dataZoom: [
            { type: 'inside', xAxisIndex: [0, 1], start: 98, end: 100 },
            { show: true, xAxisIndex: [0, 1], type: 'slider', top: '85%', start: 98, end: 100 }
          ],
          series: [
            {
              name: 'Dow-Jones index',
              type: 'candlestick',
              data: data.values,
              itemStyle: { color: upColor, color0: downColor }
            },
            {
              name: 'MA5',
              type: 'line',
              data: calculateMA(5, data),
              smooth: true,
              lineStyle: { opacity: 0.5 }
            },
            {
              name: 'MA10',
              type: 'line',
              data: calculateMA(10, data),
              smooth: true,
              lineStyle: { opacity: 0.5 }
            },
            {
              name: 'MA20',
              type: 'line',
              data: calculateMA(20, data),
              smooth: true,
              lineStyle: { opacity: 0.5 }
            },
            {
              name: 'MA30',
              type: 'line',
              data: calculateMA(30, data),
              smooth: true,
              lineStyle: { opacity: 0.5 }
            },
            {
              name: 'Volume',
              type: 'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: data.volumes
            }
          ]
        });
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dow-Jones Index</h2>
      <ReactECharts option={chartOptions} style={{ height: '600px' }} />
    </div>
  );
};

export default CandlestickChart;
