import React, { useState, useEffect } from 'react';
import { getData } from './helpers/apiCalls'
import { createTimeString, dynamicColors } from './helpers/helperFunctions'
import Card from './components/Card/Card.jsx'

import './app.scss'

const URL = 'https://api.carbonintensity.org.uk/generation'

const App = () => {
    const [fuelData, setfuelData] = useState(null)
    const [fetchError, setfetchError] = useState(false)

    const setFuelData = async () => {
        const { data } = await getData(URL)
        const timeString = createTimeString(data.to)
        const fuelList = data.generationmix.map(item => ({
            ...item, 
            color: dynamicColors()
        }))

        setfuelData({
            time: timeString,
            fuelList
        })

        fetchError && setfetchError(false)
    }

    useEffect(() => { 
        setFuelData()
            .catch(e => {
                setfetchError(true)
                console.error(`Can't fetch data from the server`)
            })
    }, [])
    console.log('hello')
    return fuelData ?
        <div className="chart_page">
            <div className="time_line">
                {/* Potentially, it can be dynamically generated if we get an array */}
                <button className="time_line__item">{fuelData.time}</button>
            </div>
            <Card fuelList={fuelData.fuelList} />
        </div>
        : (fetchError ? <h1>Failed to fetch data from the server</h1> : <h1>Loading...</h1>)
};

export { App }