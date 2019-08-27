import React, { useState, useCallback } from 'react'
import FuelChart from '../FuelChart.jsx'

import './Card.scss'

const FuelList = props => {
    const { fuelList } = props
    const [fuelItem, setfuelItem] = useState(false)

    const listItemClickHandler = useCallback(event => {
        document.querySelector('.selected').classList.remove('selected')
        event.target.classList.add('selected')
        let newFuelItem = false
        const fuel = event.target.dataset.fuelType
        const perc = parseFloat(event.target.dataset.fuelValue)
        const color = event.target.dataset.fuelColor
        fuel && (newFuelItem = { fuel, perc, color })

        if ((!fuelItem && fuelItem !== newFuelItem) ||
            fuelItem.perc !== newFuelItem.perc) {
            setfuelItem(newFuelItem)
        }
    }, [fuelItem])

    const dataForChart = fuelItem ? [fuelItem] : fuelList

    return (
        <div className="card">
            <div className="card__chart">
                <FuelChart fuelList={dataForChart} />
            </div>
            <ul className="card__fuel_list" onClick={listItemClickHandler}>
                <li className="selected">All</li>
                {
                    fuelList.map(listItem => {
                        return <li key={listItem.fuel}
                            data-fuel-type={listItem.fuel}
                            data-fuel-value={listItem.perc}
                            data-fuel-color={listItem.color}>
                            <span>{listItem.fuel}</span>
                            <span>{listItem.perc}%</span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default FuelList

FuelList.defaultProps = {
    fuelList: [
        {
          "fuel": "biomass",
          "perc": 4.8
        },
        {
          "fuel": "coal",
          "perc": 2.5
        },
        {
          "fuel": "imports",
          "perc": 8.7
        },
        {
          "fuel": "gas",
          "perc": 46.5
        },
        {
          "fuel": "nuclear",
          "perc": 16.1
        },
        {
          "fuel": "other",
          "perc": 0.3
        },
        {
          "fuel": "hydro",
          "perc": 0.9
        },
        {
          "fuel": "solar",
          "perc": 14.6
        },
        {
          "fuel": "wind",
          "perc": 5.6
        }
      ]
}