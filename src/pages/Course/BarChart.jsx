import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Your Language Scores',
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
    },
  },
};

const BarChart = () => {
  const [progressData, setProgressData] = useState(JSON?.parse(localStorage?.getItem('progressData')) || []);

  const labels = ['Hindi', 'English', 'French', 'Spanish'];

  const dataset1Data = labels.map(label => {
    const entry = progressData?.find(item => item.language === label);
    return entry ? entry.progress : 0;
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Language',
        data: dataset1Data,
        backgroundColor: '#0d6efd',
      },
    ],
  };

  useEffect(() => {
    const handleStorageChange = event => {
      if (event.key === 'progressData') {
        const newProgressData = JSON?.parse(event.newValue);
        setProgressData(newProgressData);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return <Bar options={options} data={data} />;
};

export default BarChart;
