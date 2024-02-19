import React from 'react'

const Button = ({ title, ...rest }) => {
    return (
        <button style={styles.button(rest.disabled)} {...rest}>{title}</button>
    )
}

export default Button

const styles = {
    button: (disabled) => ({
        backgroundColor: 'transparent',
        border: '1px solid #fff',
        color: '#fff',
        borderRadius: '5px',
        padding: '10px',
        cursor: disabled ? '' : 'pointer',
        textAlign: 'center',
        opacity: disabled ? 0.5 : 1,
        textTransform: 'capitalize'
    })
}