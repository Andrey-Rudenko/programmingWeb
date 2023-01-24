import { Autocomplete, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';

const ProfileForm = () => {

    return (
        <div className="profile">
            <form className="form">
                <h1>Анкета</h1>
                <TextField
                    variant='filled'
                    size='small'
                    label='E-mail'
                    sx={{ m: 2 }}
                >
                </TextField>
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

                <div className="formDiv">
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ищу собеседника" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Хочу быть ментором" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ищу ментора" />
                </div>
                

                <TextField
                    variant='filled'
                    multiline
                    label='О себе'
                    sx={{ m: 2 }}
                >
                </TextField>

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
