import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'

const FuelChart = props => {
    const { fuelList } = props
    const fuelTypes = fuelList.map(fuelItem =>
        `${fuelItem.fuel.charAt(0).toUpperCase()}${fuelItem.fuel.substr(1)}`)
    const fuelValues = fuelList.map(fuelItem => fuelItem.perc)
    const fuelColor = fuelList.map(fuelItem => fuelItem.color)

    const data = {
        labels: fuelTypes,
        datasets: [
            {
                data: fuelValues,
                backgroundColor: fuelColor
            }
        ]
    }
    const options = {
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 5
                }
            }]
        }
    }

    return <Bar data={data} options={options} legend={{ display: false }} />
}

export default FuelChart

FuelChart.defaultProps = {
    fuelList: [
        {
            "fuel": "Template",
            "perc": 0,
            "color": "#ddd"
          }
    ]
}