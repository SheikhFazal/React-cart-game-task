import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button'
import Input from '../../components/input'

const LogIn = () => {
    const navigate = useNavigate();

    const [details, setDetails] = useState({ email: 'abc@gmail.com', password: 'password' });
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDetails({ ...details, [name]: value })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!details.email || !details.password) {
            setErrorMsg('Enter email or password')
        }
        else {
            try {
                setIsLoading(true);
                await fetch('https://netflix-clone-apis.vercel.app/api/v1/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(details)
                }).then(res => res.json()).then(data => {
                    if (data?.success) {
                        setIsLoading(false);
                        localStorage.setItem('token', data?.token);
                        navigate('/home')
                    }
                    else {
                        setErrorMsg(data?.message);
                        setIsLoading(false);
                    }
                })
            } catch (error) {
                setErrorMsg('Cannot login please try again')
            }
        }
    }


    return (
        <div style={styles.wrapper}>
            <div style={{ width: '40%' }}>
                <p style={styles.errorMsg}>{errorMsg}</p>
                <form style={styles.loginWrapper} onSubmit={handleLogin}>
                    <Input
                        placeholder='Enter Email'
                        name='email'
                        type='text'
                        value={details.email}
                        onChange={handleChange}
                    />
                    <Input
                        placeholder='Enter Password'
                        name='password'
                        type='password'
                        value={details.password}
                        onChange={handleChange}
                    />
                    <Button title={isLoading ? 'Loading...' : 'Login'} type='submit' disabled={isLoading} />
                </form>
            </div>
        </div>
    )
}

export default LogIn

const styles = {
    wrapper: {
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorMsg: {
        color: 'red',
        marginBottom: '5px'
    },
    loginWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    }
}