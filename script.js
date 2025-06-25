// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Earnings in $',
      data: [2000, 1900, 2100, 2800, 1800, 2300, 2500, 2600, 2400, 1900, 2700, 3000],
      borderColor: '#2e7d32',
      fill: false,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: '#2e7d32'
    }]
  },
  options: {
    responsive: true
  }
});

// Doughnut Chart
const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
new Chart(doughnutCtx, {
  type: 'doughnut',
  data: {
    labels: ['Academic', 'Non-academic', 'Administration', 'Others'],
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: ['#2e7d32', '#42a5f5', '#fbc02d', '#7e57c2']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});
