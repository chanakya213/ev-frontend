import React from 'react'
import { ReactComponent as MapImage } from "../../../assets/icons/map.svg";
export const HeadingTag = ({ title }) => {
    return (
        <p style={{ backgroundColor: 'white', padding: '1.2rem', width: '260px', borderRadius: '1rem', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', textAlign: 'center', alignSelf: 'center' }}>
            {title}
        </p>
    )
}

export const DataInfoBox = ({ title, value }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '2rem', width: '110px', borderRadius: '1rem', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height: 'auto' }}>
            <p style={{ fontWeight: '500', fontSize: '0.7rem', whiteSpace: 'nowrap' }}>{title}</p>
            <p style={{ fontWeight: '700', fontSize: '1.3rem' }}>{value}</p>
        </div>
    )
}

export const DataColorStipBox = ({ title, value, backgroundColor }) => {
    return (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor, padding: '2.5rem 3.5rem', width: 'fit-content', borderRadius: '1rem', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
            {value}
            <p style={{ fontSize: "0.8rem", fontWeight: '500', position: 'absolute', backgroundColor: 'white', opacity: '0.7', padding: '0.2rem 0.5rem', bottom: '0px', borderRadius: "5px 5px 0px 0px" }}>{title}</p>
        </div>
    )
}

export const DistanceContainer = ({ value }) => {
    return (
        <div style={{
            backgroundColor: 'white', flexDirection: 'column', padding: '1.2rem 1.5rem',
            width: 'fit-content', borderRadius: '1rem', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            justifyContent: 'center', alignItems: 'center',
            display: 'flex',
            gap: '1rem'
        }} >
            <p style={{ fontSize: '0.9rem' }}>Total Distance</p>
            <div style={{ backgroundColor: '#73EBC0', borderRadius: '50%', padding: '1rem' }}>
                <MapImage />
            </div>
            <p style={{ fontWeight: "500", fontSize: '1.1rem' }}>{value}</p>
        </div>
    )
}
