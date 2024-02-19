import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button'
import Input from '../../components/input';
import './styles.css';

const Home = () => {
    const navigate = useNavigate();
    const [inputVal, setInputVal] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const [data, setData] = useState([
        { id: 1, cards: [] },
        { id: 2, cards: [] },
        { id: 3, cards: [] },
        { id: 4, cards: [] },
    ]);

    const handleChange = (e) => {
        setInputVal(e.target.value);
    }

    const handleAdd = () => {
        if (inputVal) {
            const newArr = [...data];
            if (editIndex !== null) {
                newArr[editIndex.i].cards[editIndex.j].text = inputVal;
                setEditIndex(null);
            } else {
                newArr[0].cards.push({ id: newArr[0].cards.length + 1, text: inputVal });
            }
            setData(newArr);
            setInputVal('');
        }
    }

    const handleNext = (i, j) => {
        if (i < data?.length - 1) {
            const newArr = [...data];
            const sliceObj = newArr[i].cards[j];
            newArr[i].cards.splice(j, 1);
            newArr[i + 1].cards.push(sliceObj);
            setData(newArr);
        }
    }

    const handlePrev = (i, j) => {
        if (i > 0 && j < data[i].cards.length) {
            const newArr = [...data];
            const sliceObj = newArr[i].cards[j];
            newArr[i].cards.splice(j, 1);
            newArr[i - 1].cards.push(sliceObj);
            setData(newArr);
        }
    }

    const handleEdit = (i, j) => {
        setEditIndex({ i, j });
        setInputVal(data[i].cards[j].text);
    }

    const handleDelete = (i, j) => {
        const newArr = [...data];
        newArr[i].cards.splice(j, 1);
        setData(newArr);
    }

    const handleLogout = () => {
        localStorage.setItem('token', '');
        navigate('/');
    }

    return (
        <div className='home_wrapper'>
            <div className='logout_wrapper'>
                <Button title='Logout' onClick={handleLogout} />
            </div>
            <div className='input_wrapper'>
                <Input placeholder='Enter title' onChange={handleChange} value={inputVal} />
                <Button title={`${editIndex === null ? 'Add' : 'Edit'} Card`} onClick={handleAdd} disabled={!inputVal} />
            </div>
            <div className='card_wrapper'>
                {data?.map((obj, i) => (
                    <div className='card_box' key={obj?.id}>
                        {obj?.cards?.map((card, j) => (
                            <div className='card_inner_box' key={j}>
                                <p className='card_title'>{card?.text}</p>
                                <div className='card_action'>
                                    <Button title='pre' onClick={() => handlePrev(i, j)} disabled={i === 0} />
                                    <Button title='edit' onClick={() => handleEdit(i, j)} />
                                    <Button title='delete' onClick={() => handleDelete(i, j)} />
                                    <Button title='next' onClick={() => handleNext(i, j)} disabled={i === data.length - 1} />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home