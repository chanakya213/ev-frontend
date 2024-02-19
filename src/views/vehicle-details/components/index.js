import React from 'react'
import redBikeImage from '../../../assets/images/redbike.png'
import { COLORS } from '../../../theme/colors'
import moment from "moment";

export const VehicleDetailsWithImage = ({ name }) => {
    return (
        <div style={{
            backgroundColor: 'white', flexDirection: 'column', padding: '1rem 1.4rem',
            width: 'fit-content', borderRadius: '1rem', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            justifyContent: 'center', alignItems: 'center',
            display: 'flex',
            gap: '0.5rem'
        }} >
            <div>
                <img src={redBikeImage} alt='bikeIMage' height={'187px'} />
            </div>
            <p style={{
                backgroundColor: COLORS.grey03,
                color: "black", width: '100%',
                textAlign: "center", padding: '0.3rem',
                borderRadius: "0.5rem",
                fontWeight: 'bold',
            }}>
                {name}
            </p>
        </div>
    )
}

export const VehicleDetailsStripedBox = ({ title, value }) => {
    return (
        <div style={{
            display: "flex", justifyContent: "flex-start",
            backgroundColor: 'white', flexDirection: 'column',
            width: '100%', borderRadius: '1rem', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            overflow: 'hidden'
        }}>
            <div style={{ fontSize: "0.7rem", backgroundColor: '#80C9FF', padding: '0.3rem 0px', textAlign: "center", color: "white", fontWeight: "600" }}>
                {title}
            </div>
            <div style={{ fontWeight: "700", display: "flex", justifyContent: 'center', alignItems: "center", height: "95px" }}>{value}</div>
        </div>
    )
}

export const VehicleMultipleDetailsStripedBox = ({ title, value }) => {
    return (
        <div style={{
            display: "flex", justifyContent: "flex-start",
            backgroundColor: 'white', flexDirection: 'column',
            width: '100%', borderRadius: '1rem', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            overflow: 'hidden',
        }}>
            <div style={{ fontSize: "0.8rem", backgroundColor: '#80C9FF', padding: '0.3rem 0px', textAlign: "center", color: "white", fontWeight: "700" }}>
                {title}
            </div>
            <div style={{ fontWeight: "700", height: "75px", padding: "1rem", display: "flex", justifyContent: 'space-around', alignItems: 'center', gap: "1rem" }}>
                <div style={{ backgroundColor: "#F8F8F8", width: "100%", gap: "0.5rem", height: '100%', flexDirection: "column", display: "flex", justifyContent: 'center', alignItems: "center", borderRadius: "0.5rem" }}>
                    <p style={{ fontSize: "0.6rem", fontWeight: "600" }}>Instantaneous Current</p>
                    <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>{value.packCurrent}</p>
                </div>
                <div style={{ backgroundColor: "#F8F8F8", width: "100%", gap: "0.5rem", height: '100%', flexDirection: "column", display: "flex", justifyContent: 'center', alignItems: "center", borderRadius: "0.5rem" }}>
                    <p style={{ fontSize: "0.6rem", fontWeight: "600" }}>Avg Pack Current</p>
                    <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>{value.avgPackCurrent}</p>
                </div>
                <div style={{ backgroundColor: "#F8F8F8", width: "100%", gap: "0.5rem", height: '100%', flexDirection: "column", display: "flex", justifyContent: 'center', alignItems: "center", borderRadius: "0.5rem" }}>
                    <p style={{ fontSize: "0.6rem", fontWeight: "600" }}>Max Pack Current</p>
                    <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>{value.maxPackCurrent}</p>
                </div>
            </div>
        </div>
    )
}

export const VehicleDetailsDetailsBox = ({ vehicleData }) => {
    return (
        <div style={{
            backgroundColor: 'white', flexDirection: 'column', padding: '0.9rem 1.2rem',
            width: 'fit-content', borderRadius: '1rem', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            justifyContent: 'center', alignItems: 'start',
            display: 'flex',
            gap: '0.8rem'
        }} >
            <p style={{ fontWeight: "600", fontSize: "0.9rem" }}>VehicleDetails</p>
            <p style={{ fontSize: "0.7rem", fontWeight: "600" }}><span style={{ fontWeight: "400" }}>Customer:</span> {vehicleData?.driverName}</p>
            <p style={{ fontSize: "0.7rem", fontWeight: "600" }}><span style={{ fontWeight: "400" }}>Registration:</span>  {vehicleData?.regNumber}</p>
            <p style={{ fontSize: "0.7rem", fontWeight: "600" }}><span style={{ fontWeight: "400" }}>Manufactured: </span> {moment(vehicleData?.purchaseDate).format("DD/MM/YYYY")}</p>
            <p style={{ fontSize: "0.7rem", fontWeight: "600" }}><span style={{ fontWeight: "400" }}>Purchased:</span> {moment(vehicleData?.purchaseDate).format("DD/MM/YYYY")}</p>
            <p style={{ fontSize: "0.7rem", fontWeight: "600" }}><span style={{ fontWeight: "400" }}>IOT Firmware:</span> ABT-A0-1.7.3.3</p>
            <p style={{ fontSize: "0.7rem", fontWeight: "600" }}><span style={{ fontWeight: "400" }}>IOT Hardware: </span>PC80-60189748 v1.0</p>
            <p style={{ fontSize: "0.7rem", fontWeight: "600" }}><span style={{ fontWeight: "400" }}>BMS Firmware:</span> 7M.5.029</p>
            <p style={{ fontSize: "0.7rem", fontWeight: "600" }}><span style={{ fontWeight: "400" }}>BMS Hardware: </span>1.5-2.6</p>
        </div>
    )
}
