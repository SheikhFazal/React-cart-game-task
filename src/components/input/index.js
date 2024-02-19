import React from 'react'

const Input = ({ ...rest }) => {
    return (
        <input {...rest} style={styles.input} />
    )
}

export default Input

const styles = {
    input: {
        borderRadius: '5px',
        padding: '10px',
    }
}