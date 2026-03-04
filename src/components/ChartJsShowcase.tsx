import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './ChartJsShowcase.css';

interface ChartConfig {
  type: string;
  title: string;
  data: object;
  options?: object;
}

const charts: ChartConfig[] = [
  {
    type: 'line',
    title: 'Monthly Revenue (USD)',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [
        { label: '2024', data: [1200,1500,1800,1700,2100,2400,2300,2500,2700,2900,3100,3300], borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.08)', tension: 0.35, fill: true },
        { label: '2023', data: [900,1000,1200,1300,1250,1400,1600,1700,1800,2000,2200,2400], borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.06)', tension: 0.35, fill: true }
      ]
    }
  },
  {
    type: 'bar',
    title: 'Sales by Category',
    data: {
      labels: ['Electronics','Apparel','Home','Beauty','Sports','Other'],
      datasets: [{ label: 'Orders', data: [540, 420, 310, 180, 260, 90], backgroundColor: ['#6366f1','#f472b6','#34d399','#fb923c','#60a5fa','#f59e0b'] }]
    }
  },
  {
    type: 'doughnut',
    title: 'Traffic Sources (%)',
    data: {
      labels: ['Organic','Paid','Referral','Social','Email'],
      datasets: [{ data: [48, 22, 12, 10, 8], backgroundColor: ['#10b981','#3b82f6','#8b5cf6','#f97316','#f43f5e'] }]
    }
  },
  {
    type: 'radar',
    title: 'Feature Usage (normalized)',
    data: {
      labels: ['Search','Checkout','Profile','Share','Notifications','Settings'],
      datasets: [
        { label: 'Power Users', data: [80,90,60,40,75,55], backgroundColor: 'rgba(99,102,241,0.12)', borderColor: '#6366f1' },
        { label: 'Casual', data: [40,30,70,60,45,35], backgroundColor: 'rgba(16,185,129,0.08)', borderColor: '#10b981' }
      ]
    }
  },
  {
    type: 'bar',
    title: 'Conversion Rate (%)',
    data: {
      labels: ['Q1','Q2','Q3','Q4'],
      datasets: [{ label: 'Rate', data: [3.2, 4.1, 3.8, 5.2], backgroundColor: '#6366f1' }]
    }
  }
];

interface ChartCardProps {
  config: ChartConfig;
}

function ChartCard({ config }: ChartCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
    chartRef.current = new Chart(ctx, {
      type: config.type as any,
      data: config.data as any,
      options: config.options ?? { responsive: true, maintainAspectRatio: false },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, []);

  return (
    <div className="chart-card">
      <h4>{config.title}</h4>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default function ChartJsShowcase() {
  return (
    <div className="chartjs-showcase">
      <h3>Gráficos con Chart.js — Ejemplos numéricos</h3>
      <div className="charts-grid">
        {charts.map((c, i) => (
          <ChartCard key={i} config={c} />
        ))}
      </div>
    </div>
  );
}
