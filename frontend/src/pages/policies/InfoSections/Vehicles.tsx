import { Section, Flex,  Title, TileItem, SubSection } from "../shared";

const Vehicles = ({ vehiclesList }) => {            

    return (
        <Section>
        <Title>Vehicles</Title>
        {vehiclesList.map((vehicle, i) => {
                const {  
                    category, state,classification,
                    
                    baseName, baseType, baseExpDate, vehicleCategory, vehicleType, vehicleState,vehicleWeight,fuelType, vin,
                    make, model, modelYear, seating, wheelChair, plateNumber,
            
                    shl, zoneCode, rateClassCode, 
            
                    garageAddress1, garageAddress2, garageZipCode, garageZipCode2, garageCity, garageCounty, garageState, garageCountry,
            
                    fleet,
            
                
                } = vehicle;

            return (<SubSection key={i}>
            <Flex>
                    <TileItem title="Category" value={category} />
                    <TileItem title="State" value={state} />
                    <TileItem title="Classification" value={classification} />
                </Flex><Flex>
                        <TileItem title="Base Name" value={baseName} />
                        <TileItem title="Base Type" value={baseType} />
                        <TileItem title="Base Expiration Date" value={baseExpDate} />
                        <TileItem title="Vehicle Category" value={vehicleCategory} />
                        <TileItem title="Vehicle Type" value={vehicleType} />
                        <TileItem title="Vehicle State" value={vehicleState} />
                        <TileItem title="Vehicle Weight" value={vehicleWeight} />
                        <TileItem title="Fuel Type" value={fuelType} />
                        <TileItem title="Vin" value={vin} />
                        <TileItem title="Make" value={make} />
                        <TileItem title="Make" value={model} />
                        <TileItem title="Make" value={modelYear} />
                        <TileItem title="Seating" value={seating} />
                        <TileItem title="Wheelchair" value={wheelChair} />
                        <TileItem title="Plate Number" value={plateNumber} />
                    </Flex><Flex>
                        <TileItem title="shl" value={shl} />
                        <TileItem title="Zone Code" value={zoneCode} />
                        <TileItem title="Rate Class Code" value={rateClassCode} />
                    </Flex><Flex>
                        <TileItem title="shl" value={shl} />
                        <TileItem title="Zone Code" value={zoneCode} />
                        <TileItem title="Rate Class Code" value={rateClassCode} />
                    </Flex><Flex>
                        <TileItem title="Garage Address" value={garageAddress1 + ', ' + garageAddress2 + ', ' +
                            garageZipCode + ', ' + garageCity + ', ' + garageCounty + ', ' + garageState + ', ' + garageCountry} />
                        <TileItem title="Garage Zip Code 3" value={garageZipCode2} />
                    </Flex><Flex>
                        <TileItem title="Fleet" value={fleet} />
                    </Flex></SubSection>)

        })

          }
    </Section>
    );
}

export default Vehicles;