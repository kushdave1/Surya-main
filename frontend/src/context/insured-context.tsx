import {
    agent,
    classificationMap,
    coverageTerm,
    entityType,
    lineOfBusiness,
    policyCategory,
    policyLineItem,
    states,
    statesOptions,
    underwritingCode,
} from '../utils/policies'
import { auto } from '../utils/coverage/getAutoSymbolEntry'
import {
    bodyPerAccident,
    bodyPerPerson,
    limits,
    propertyDamage,
} from '../utils/coverage/getLimit'
import {
    bussinessUseClasses,
    classCodes,
    radius,
    secondaryCategory,
} from '../utils/policies/getCommercial'
import { createContext, useState } from 'react'
import { reinsurer } from '../utils/reinsurance/getReinsurer'
import fuelTypeOptions from '../utils/vehicle/fuelType'
import getWeightSelects from '../utils/vehicle/getWeightSelects'
import vehicleCategoryOptions, {
    optionsMap,
} from '../utils/vehicle/getVehicleCategory'
import vehicleTypes from '../utils/vehicle/getVehicleType'

export const yesNoOptions = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
]

export const policyInitialState = {
    name: '',
    policyNum: null,
    states: states[0],
    classification: classificationMap[policyCategory[0]].value,
    lineOfBusiness: lineOfBusiness[0],
    policyLineItem: policyLineItem[0],
    coverageTerm: coverageTerm[0],
    policyCategory: policyCategory[0],
    underwritingCode: underwritingCode[0],
    agent: agent[0],
    effectiveDate: null,
    expirationDate: null,
    radius: radius[0],
    classCode: classCodes[0],
    businessUseClass: bussinessUseClasses[0],
    secondaryCategory: secondaryCategory[0],
}

export const insuredInitialState = {
    agent: agent[0],
    entity: entityType[0],
    firstName: null,
    lastName: null,
    middleName: null,
    dob: null,
    suffix: null,
    gender: 'Male',
    ssn: null,
    address1: null,
    address2: null,
    city: null,
    state: states[0],
    zipCode: null,
    email: null,
    phoneNumber: null,
    licenseState: states[0],
    licenseNumber: null,
    licenseEff: null,
    licenseExp: null,
    contactName: null,
    contactNumber: null,
    contactEmail: null,
    corporationName: null,
    taxIdNumber: null,
    additionalInsured: {
        values: [
            {
            insName: "None",
            address: null,
            city: null,
            zipCode: null,
            state: "TX",
            isWaiver: false,
            isAddPremium: false
            },
        ],
    },
}

export const driversInitialState = {
    driverFirstName: null,
    driverMiddleName: null,
    driverLastName: null,
    states: states[0],
    licenseNumber: null,
    licenseEffDate: null,
    licenseExpDate: null,
    driverEffDate: null,
    driverExpDate: null,
    driverBirthDate: null
}



export interface Driver {
    driverLastName: string
    driverFirstName: string
    driverMiddleName: string
    states: string
    licenseNumber: string
    licenseEffDate: string
    licenseExpDate: string
    driverEffDate: string
    driverExpDate: string
    driverBirthDate: string

}

export const lossHistoryState = {
    accidentDate: null,
    reportedDate: null,
    claimNumber: null,
    claimType: 'Body Injury',
    subClaimNumber: null,
    totalIncurred: null,
    liabilityPaid: null,
    openReserve: null,
    status: yesNoOptions[0].value,
    previousPolicyNumber: null,
    priorCarrierName: null,
    originalInceptionDate: null,
    expirationDate: null,
    isExperienceMode: yesNoOptions[0].value,
    isPolicyTransferred: yesNoOptions[0].value,
}

export const underwritingState = {
    creditsDebits: '',
    remarks: '',
    isCamera: false
}
export const coverageState = {
    overall: 'Combined Single Limit',
    deductable: null,
    deductableAmount: null,
    deductableAutoEntry: null,
    combinedSectionLimit: limits[0],
    combinedSectionEntry: auto[0],
    splitSectionBodyPerPerson: bodyPerPerson[0],
    splitSectionBodyPerAccidentOptions: bodyPerAccident[0],
    splitSectionPropertyDamageOptions: propertyDamage[0],
    splitSectionAutoEntryOptions: auto[0],
    pIProtectionSingleLimit: limits[0],
    pIProtectionSingleEntry: auto[0],
    pIProtectionSplitBodyPerPerson: bodyPerPerson[0],
    pIProtectionSplitBodyPerAccident: bodyPerAccident[0],
    pIProtectionSplitPropertyDamage: propertyDamage[0],
    pIProtectionSplitAutoEntry: auto[0],
    pedPipSingleLimit: "yes",
    medicalSingleLimit: limits[0],
    medicalSingleEntry: auto[0],
    medicalSplitBodyPerPerson: bodyPerPerson[0],
    medicalSplitBodyPerAccident: bodyPerAccident[0],
    medicalSplitPropertyDamage: propertyDamage[0],
    medicalSplitAutoEntry: auto[0],
    underinsuredMotoristSingleLimit: limits[0],
    underinsuredMotoristSingleAutoEntry: auto[0],
    underMotoristBodyPerPerson: bodyPerPerson[0],
    underMotoristBodyPerAccident: bodyPerAccident[0],
    underMotoristProperty: propertyDamage[0],
    underMotoristAuto: auto[0],
    cslSingleLimit: limits[0],
    cslBodyPerAccident: bodyPerAccident[0],
    cslBodyPerPerson: bodyPerPerson[0],
    cslSingleAuto: auto[0],
    cslProperty: propertyDamage[0],
    cslSplitAuto: auto[0],
    nonCslBodyPerAccident: bodyPerAccident[0],
    nonCslBodyPerPerson: bodyPerPerson[0],
    nonCslProperty: propertyDamage[0],
    nonCslSingleAuto: auto[0],
    nonCslSingleLimit: limits[0],
    nonCslSplitAuto: auto[0],
    unMotoristAuto: auto[0],
    unMotoristBodyPerAccident: bodyPerAccident[0],
    unMotoristBodyPerPerson: bodyPerPerson[0],
    unMotoristProperty: propertyDamage[0],
    uninsuredMotoristSingleAutoEntry: auto[0],
    uninsuredMotoristSingleLimit: limits[0],
    personalInjury: 'Combined Single Limit',
    medicalPayments: 'Combined Single Limit',
    underinsuredMotorist: 'Combined Single Limit',
    uninsuredMotorist: 'Combined Single Limit',
    csl: 'Yes',
    nonOwnedCSL: 'Yes',

    overallPremium: '',
    personalInjuryProtectionPremium: '',
    pedPipProtectionPremium: '',
    medicalPaymentsPremium: '',
    underinsuredMotoristPremium: '',
    uninsuredMotoristPremium: '',
    hiredCSLPremium: '',
    nonOwnedCSLPremium: '',
}

const defaultValue = 'No'
const yesNoValues = ['Yes', defaultValue]

export const uploadState = {

}
export const vehicleState = {
    yesNo: defaultValue,
    category: vehicleCategoryOptions[0].value,
    classification: null,
    vehicleCategory: optionsMap[Object.keys(optionsMap)[0]][0].value,
    vehicleType: vehicleTypes[0].value,
    state: states[0],
    vehicleState: null,
    vehicleWeight: getWeightSelects[0].value,
    fuelType: fuelTypeOptions[0].value,
    fleet: yesNoOptions[0].value,
    vin: null,
    make: null,
    model: null,
    modelYear: null,
    seating: null,
    wheelChair: yesNoOptions[0].value,
    plateNumber: null,
    garageZipCode: null,
    zoneCode: null,
    rateClassCode: null,
    baseName: null,
    baseType: 'Black Car',
    baseNumber: null,
    baseExpDate: null,
    shl: null,
    garageAddress1: null,
    garageAddress2: null,
    garageZipCode2: null,
    garageCity: null,
    garageCounty: null,
    garageState: statesOptions[0].value,
    garageCountry: null,
    overallPremium: '',
    personalInjuryProtectionPremium: '',
    pedPipProtectionPremium: '',
    medicalPaymentsPremium: '',
    underinsuredMotoristPremium: '',
    uninsuredMotoristPremium: '',
    hiredCSLPremium: '',
    nonOwnedCSLPremium: '',
}

export const reinsuranceState = {
    reinsuranceType: reinsurer[0],
    resInsAmount: null,
}

export const paymentState = {
    paymentType: '100% DEPOSIT',
}

export const FormContext = createContext(null)

export const FormContextProvider = ({ children }) => {
    const [policyValues, setPolicyValues] = useState(policyInitialState)
    const [insuredValues, setInsuredValues] = useState(insuredInitialState)
    //const [additionalInsuredValues, setAdditionalInsuredValues] = useState([{ ...additionalInsuredInitialState }])
    const [isAddActive, setAddActive] = useState(false)
    const [driverValues, setDriverValues] = useState([
        { ...driversInitialState },
    ])
    const [lossValues, setLossValues] = useState([{ ...lossHistoryState }])
    const [coverageValues, setCoverageValues] = useState(coverageState)
    const [coverageErrors, setCoverageErrors] = useState([])
    const [document, setDocument] = useState(undefined)
    const [vehicleValues, setVehicleValues] = useState([{ ...vehicleState }])
    const [reinsuranceValues, setReinsuranceValues] = useState(reinsuranceState)
    const [paymentValues, setPaymentValues] = useState(paymentState)
    const [underwritingValues, setUnderwritingValues] = useState(underwritingState)
    const [uploadValues, setUploadValues] = useState(uploadState)

    const store = {
        policy: { values: policyValues, setValues: setPolicyValues },
        coverage: {
            values: coverageValues,
            setValues: setCoverageValues,
            errors: coverageErrors,
            setErrors: setCoverageErrors,
        },
        insured: {
            values: insuredValues,
            setValues: setInsuredValues,
            isAddActive,
            setAddActive
        },
        Uploads: {
            values: uploadValues,
            setValues: setUploadValues,
            isAddActive,
            setAddActive
        },
        drivers: {
            values: driverValues,
            setValues: setDriverValues,
            defaults: driversInitialState,
        },
        lossHistory: {
            values: lossValues,
            setValues: setLossValues,
            defaults: lossHistoryState,
        },
        documents: { values: document, setValues: setDocument },
        vehicles: {
            values: vehicleValues,
            setValues: setVehicleValues,
            defaultValue,
            yesNoValues,
            yesNoOptions,
            defaults: vehicleState,
        },
        payments: { values: paymentValues, setValues: setPaymentValues },
        reinsurance: {
            values: reinsuranceValues,
            setValues: setReinsuranceValues,
        },
        underwriting: {
            values: underwritingValues,
            setValues: setUnderwritingValues
        },
        reset: () => {
            setPolicyValues(policyInitialState)
            setInsuredValues(insuredInitialState)
            setAddActive(false)
            setDriverValues([{ ...driversInitialState }])
            setLossValues([{ ...lossHistoryState }])
            setCoverageValues(coverageState)
            setCoverageErrors([])
            setDocument(undefined)
            setVehicleValues([{ ...vehicleState }])
            setReinsuranceValues(reinsuranceState)
            setPaymentValues(paymentState)
            setUnderwritingValues(underwritingState)
            setUploadValues(uploadState)
            return
        },
    }

    return <FormContext.Provider value={store}>{children}</FormContext.Provider>
}
