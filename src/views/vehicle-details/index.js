import React, { useEffect, useState } from "react";
import {
   VehicleDetailsBox,
   VehicleDetailsNavBar,
   NavBarButton,
   ContainerBox,
} from "./vehicle.styles";
import VehicleMonitoring from "./vehicleMonitoring";
import PredictiveIntelligence from "./predictiveIntelligence";
import { useParams } from "react-router-dom";
import { GET_SINGLE_VEHICLE_DATA } from "../../services";

const VehicleDetails = () => {
   let { dvid } = useParams();
   const [activeTab, setActiveTab] = useState("vehicleMonitoring");
   const [vehicleData, setVehicleData] = useState({});

   useEffect(() => {
      const getSingleVehicleData = (dvid) => {
         GET_SINGLE_VEHICLE_DATA(dvid)
            .then((res) => {
               setVehicleData(res.data);
            })
            .catch((err) => {
               console.log(err);
            });
      };
      if (dvid) {
         getSingleVehicleData(dvid);
      }
   }, [dvid]);

   return (
      <VehicleDetailsBox>
         {/* navbar  */}
         <ContainerBox>
            <VehicleDetailsNavBar>
               <NavBarButton
                  active={activeTab === "vehicleMonitoring"}
                  onClick={() => setActiveTab("vehicleMonitoring")}
               >
                  Vehicle Monitoring
               </NavBarButton>
               <NavBarButton
                  active={activeTab === "predictiveIntelligence"}
                  onClick={() => setActiveTab("predictiveIntelligence")}
               >
                  Predictive Intelligence
               </NavBarButton>
            </VehicleDetailsNavBar>
            {/* rendering the active Tab Content */}
            {activeTab === "vehicleMonitoring" ? (
               <VehicleMonitoring vehicleData={vehicleData} />
            ) : (
               <PredictiveIntelligence vehicleData={vehicleData} />
            )}
         </ContainerBox>
      </VehicleDetailsBox>
   );
};

export default VehicleDetails;
