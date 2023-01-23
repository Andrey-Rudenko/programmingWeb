import React from 'react';
import Button from '@mui/material/Button';
import AuthInput from '../obejcts/AuthInput';
import authRepository from '../Repositories/AuthRepository';
import { Autocomplete, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';

const ProfileForm = () => {

    return (
        <div className="profile">
            <form className="form">
                <h1>Анкета</h1>
                <TextField id="outlined-basic" label="Почта" variant="outlined" />
                <Autocomplete className="autocomplete"
                    multiple
                    id="tags-outlined"
                    options={tasklist}
                    getOptionLabel={(option) => option.title}
                   
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="Знаю:"
                            placeholder="Интересы"
                        />
                    )}
                />
                <Autocomplete className="autocomplete"
                    multiple
                    id="tags-outlined"
                    options={tasklist}
                    getOptionLabel={(option) => option.title}
                  
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="Хочу узнать"
                            placeholder="Интересы"
                        />
                    )}
                />
            
                <FormControlLabel control={<Checkbox defaultChecked />} label="Ищу собеседника" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Хочу быть ментором" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ищу ментора" />

                <button className="blackButton">Сохранить</button>
        
            </form>
        </div>
    );
}

const tasklist = [
    { title: 'Говорить' },
    { title: 'Петь' },
    { title: 'Танцевать'},
    { title: 'Программировать' },
    { title: 'Зарабатывать' }
];

export default ProfileForm;
