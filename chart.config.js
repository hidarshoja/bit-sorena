

export const data = {
    labels: ['' , '' , '' , '' , '' ,''],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [10, 39, 10, 40, 39, 80, 100],
        borderColor:"#FFA115",
        pointRadius: 0,
        borderWidth: 2,
        
      },
    ],
    
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      title: {
        display: false, // Hide title
      },
    },
    elements: {
      line: {
        tension: 0, // Set tension to 0 for straight lines
      },
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      },
      
    },
  };
  