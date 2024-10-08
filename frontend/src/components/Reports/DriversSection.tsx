import { Container, useStyles } from './shared'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Checkbox from '../Form/Checkbox'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'

const DriversSection = ({ drivers, setDrivers, makeAllTrue, ...rest }) => {
    const classes = useStyles()
    return (
        <div>
            <Accordion {...rest}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    expandIcon={<ExpandMoreIcon />}
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Drivers</Typography>
                </AccordionSummary>

                
                <AccordionDetails>
                    <Checkbox
                            checked={drivers.driverFirstName}
                            labelText="Select All"
                            onChange={() => {
                                if (drivers.driverFirstName) {
                                    setDrivers(makeAllTrue(drivers, false))
                                } else {
                                    setDrivers(makeAllTrue(drivers, true))
                                }
                                
                            }}
                        />
                    <Container>

                        <Checkbox
                            checked={drivers.driverFirstName}
                            labelText="First Name"
                            onChange={() => {
                                setDrivers({
                                    ...drivers,
                                    driverFirstName: !drivers.driverFirstName,
                                })
                            }}
                        />
                        <Checkbox
                            checked={drivers.driverMiddleName}
                            labelText="Middle Name"
                            onChange={() => {
                                setDrivers({
                                    ...drivers,
                                    driverMiddleName: !drivers.driverMiddleName,
                                })
                            }}
                        />
                        <Checkbox
                            checked={drivers.driverLastName}
                            labelText="Last Name"
                            onChange={() => {
                                setDrivers({
                                    ...drivers,
                                    driverLastName: !drivers.driverLastName,
                                })
                            }}
                        />

                        <Checkbox
                            checked={drivers.states}
                            labelText="State"
                            onChange={() => {
                                setDrivers({
                                    ...drivers,
                                    states: !drivers.states,
                                })
                            }}
                        />

                        <Checkbox
                            checked={drivers.licenseNumber}
                            labelText="License Number"
                            onChange={() => {
                                setDrivers({
                                    ...drivers,
                                    licenseNumber: !drivers.licenseNumber,
                                })
                            }}
                        />

                        <Checkbox
                            checked={drivers.licenseEffDate}
                            labelText="Effective Date"
                            onChange={() => {
                                setDrivers({
                                    ...drivers,
                                    licenseEffDate: !drivers.licenseEffDate,
                                })
                            }}
                        />

                        <Checkbox
                            checked={drivers.licenseExpDate}
                            labelText="Expiration Date"
                            onChange={() => {
                                setDrivers({
                                    ...drivers,
                                    licenseExpDate: !drivers.licenseExpDate,
                                })
                            }}
                        />
                    </Container>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default DriversSection
