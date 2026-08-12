import { useState } from 'react';
import './excuseForm.scss';

function ExcuseForm({onSubmit}) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e)=> {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (!inputValue.trim()) return

        onSubmit(inputValue);
        setInputValue('');
    };

    return(
        <div className='excuse-form-container'>
            <form onSubmit={handleSubmit} className='input-wrapper'>
                <input 
                    className="input-field"
                    value={inputValue} 
                    type="text" 
                    placeholder='Введи свою відмазку' 
                    onChange={handleChange}
                />
                <button 
                    className="btn-add"
                    type='submit'>
                        Додати
                </button>
            </form>
        </div>

    );
};

export default ExcuseForm;