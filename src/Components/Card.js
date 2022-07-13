import React, { useState } from 'react'
import { Contxt } from './Context'

function Card({get}) {
    const [check, setcheck] = useState(false)
    let value = Contxt()

    let crr = value.current
    console.log(crr)

    let day = value.data
    console.log(day)

    let sunrise = new Date(crr?.sunrise * 1000).toLocaleTimeString().slice(-11, -6) + 'AM'
    console.log(sunrise)

    let sunset = new Date(crr?.sunset * 1000).toLocaleTimeString().slice(-11, -6) + 'PM'
    console.log(sunset)


    return (

        <section className="vh-100">
            <div className="container py-5 h-100">

                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6 col-xl-4">


                        <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>

                        <div className="input-group rounded mb-3">
                            <input type="search" className="form-control rounded" placeholder="City" aria-label="Search"
                                aria-describedby="search-addon" onChange={(e)=>value.setcity(e.target.value)}/>
                            <a href="#!" type="button">
                                <span className="input-group-text border-0 fw-bold" id="search-addon" onClick={get}>
                                    Check!
                                </span>
                            </a>
                        </div>

                        <div className="card shadow-0 border">
                            <div className="card-body p-4">

                                <h4 className="mb-1 sfw-normal">{value.info.name},{value.info.sys.country}</h4>
                                <p className="mb-2">Current temperature: <strong>{crr?.temp}°C</strong></p>
                                <p>Max: <strong>{day[0]?.temp.max}°C</strong>, Min: <strong>{day[0]?.temp.min}°C</strong></p>

                                <div className="d-flex flex-row align-items-center">
                                    <p className="mb-0 me-4">{crr?.weather[0].description}</p>
                                    <i className="fas fa-cloud fa-3x" ><img src={`http://openweathermap.org/img/w/${crr?.weather[0].icon}.png`} alt='...' /></i>
                                </div>
                                <div>
                                    {check ? <>
                                        <p className="mb-2">Humidity: <strong>{crr?.humidity}</strong></p>
                                        <p className="mb-2">Wind Speed: <strong>{crr?.wind_speed}</strong></p>
                                        <p className="mb-2">Pressure: <strong>{crr?.pressure}</strong></p>
                                        <p className="mb-2">Sunrise/Sunset: <strong>{sunrise}/{sunset}</strong></p>
                                    </> : null}
                                    <button className='btn btn-primary' onClick={() => setcheck(!check)}>{check ? 'Show Less' : 'Show More'}</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Card
