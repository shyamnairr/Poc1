import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.html',
  styleUrl: './report.css',
})
export class Report implements AfterViewInit {
  chartData = [
    { product: 'Product A', sales: 120 },
    { product: 'Product B', sales: 90 },
    { product: 'Product C', sales: 150 },
    { product: 'Product D', sales: 70 }
  ];

  ngAfterViewInit() {
    const canvas = document.getElementById('barChart') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: this.chartData.map(item => item.product),
        datasets: [{
          label: 'Sales',
          data: this.chartData.map(item => item.sales),
          backgroundColor: [
            '#3b8bba',
            '#62a9df',
            '#ffb74d',
            '#e57373'
          ]
        }]
      },
      options: {
        responsive : true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
