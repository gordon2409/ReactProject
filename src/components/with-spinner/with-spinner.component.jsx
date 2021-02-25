import React from 'react'
import './with-spinner.styles.scss'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {

    const Spinner = () => (
        <div className='spinnerOverlay'>
            <div className='spinnerContainer' />
        </div>
    )

    return (

        isLoading ?
            <Spinner />
            :
            <WrappedComponent {...otherProps} />

    )
}

export default WithSpinner