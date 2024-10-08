import { useAlert } from 'react-alert'
import { useCallback, useState } from 'react'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(() => ({
    labelLogo: {
        display: 'flex',
        flexDirection: 'row-reverse',
        width: '292px',
        margin: 'auto',
        justifyContent: 'space-between',
        color: '#9A9A9C',
        font: 'inherit',
        fontSize: '1.18676em',
    },
    logoContainer: {
        margin: 'auto',
        marginTop: '40px',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
    },
    buttonText: {
        margin: 'auto',
    },
    pictureContainer: {
        height: '100px',
        background: 'white',
        width: '100px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'contain',
        border: '1px solid black',
        margin: 'auto',
    },
    picture: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
}))

const ImagePicker = () => {
    const [logo, setLogo] = useState('')
    const alert = useAlert()

    const classes = useStyles()

    const handleCreateBase64 = useCallback(async (e) => {
        const file = e.target.files[0]
        const base64 = await convertToBase64(file)
        // @ts-ignore
        setLogo(base64)
        e.target.value = ''
    }, [])

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            if (!file) {
                alert.error('Please select an image')
            } else {
                fileReader.readAsDataURL(file)
                fileReader.onload = () => {
                    resolve(fileReader.result)
                }
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const deleteImage = (e) => {
        e.preventDefault()
        setLogo(null)
    }

    return (
        <div>
            <div className={classes.logoContainer}>
                <label
                    className={classes.labelLogo}
                    htmlFor="contained-button-file"
                >
                    <div className={classes.buttonContainer}>
                        <div className={classes.button}>
                            <p className={classes.buttonText}>Choose Image</p>
                        </div>
                        {logo ? (
                            <div className={classes.button}>
                                <p
                                    className={classes.buttonText}
                                    onClick={deleteImage}
                                >
                                    Delete Image
                                </p>
                            </div>
                        ) : null}
                    </div>
                    {logo ? (
                        <span>
                            <div className={classes.pictureContainer}>
                                <img
                                    alt="logo"
                                    className={classes.picture}
                                    src={logo}
                                />
                            </div>
                        </span>
                    ) : null}
                </label>
            </div>
            <input
                accept="image/*, png, jpeg, jpg"
                id="contained-button-file"
                name="logo"
                onChange={handleCreateBase64}
                style={{ display: 'none' }}
                type="file"
            />
        </div>
    )
}

export default ImagePicker
