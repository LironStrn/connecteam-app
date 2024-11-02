import { merriweather, inter } from '@/app/ui/fonts';
import Form from 'next/form'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MultiSelect from '@/app/ui/multi-select';
import ActionButton from '@/app/ui/action-button';

export default async function FooterForm({ formContent }) {

    const inputStyle = {
        borderRadius: '50%'
    }

    const sxStyle = {
        width: '341px',
        color: 'black',
        '& .MuiInputBase-root': {
            borderRadius: '25px !important',
        },
        '& .Mui-focused fieldset': {
            borderColor: '#FF9900 !important'
        },
        '& .MuiInputLabel-root': { color: 'black', fontWeight: '600', fontSize: '16px', fontFamily: 'inter' },
        '& label.Mui-focused': {
            color: '#FF9900 !important'
        },
        '& .MuiFormControl-root.MuiTextField-root': {
            width: '341px !important'
        },
        '& .MuiInputBase-input': {
            fontFamily: 'inter', // Apply custom font to the input text
        }
    };

    const sxTextAreaStyle = {
        width: {
            xs: '100%',
            lg: '700px'
        },
        //height: '160px',
        color: 'black',
        '& .MuiInputBase-root': {
            borderRadius: '25px !important',
        },
        '& .Mui-focused fieldset': {
            borderColor: '#FF9900 !important'
        },
        '& .MuiInputLabel-root': { color: 'black', fontWeight: '600', fontSize: '16px', fontFamily: 'inter' },
        '& label.Mui-focused': {
            color: '#FF9900 !important'
        },
        '& .MuiFormControl-root.MuiTextField-root': {
            width: '341px !important'
        },
        '& .MuiInputBase-input': {
            fontFamily: 'inter',
        }
    };



    return (
        <>
            <span className={`${inter.className}`}>{formContent.title}</span>
            <Form action='#'>
                <div className='flex items-center flex-col md:flex-row mt-3'>
                    <TextField sx={sxStyle} className={`mr-3`} label={formContent.fields[0].name} variant="outlined" />
                    <TextField sx={sxStyle} label={formContent.fields[1].name} variant="outlined" />
                </div>
                <div className='flex items-center flex-col md:flex-row mt-3'>
                    <TextField sx={sxStyle} className={`mr-3`} id="outlined-basic" label={formContent.fields[2].name} variant="outlined" />
                    <Box sx={sxStyle}>
                        <FormControl fullWidth>
                            <InputLabel id="footer-form-select-label" className={`${inter.className}`}>{formContent.fields[3].name}</InputLabel>
                            <Select
                                labelId="footer-form-select-label"
                                id="footer-form-simple-select"
                                label={formContent.fields[3].name}
                            >
                                {formContent.fields[3].options.map((option, i) => {
                                    return (
                                        <MenuItem key={i + 1} value={option.value} className={`${inter.className}`}>{option.label}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div>
                    <MultiSelect selectContent={formContent.fields[4]} />
                </div>
                <div>
                    <TextField multiline
                        rows={5}
                        sx={sxTextAreaStyle}
                        label={formContent.fields[5].name}
                        variant="outlined"
                    />
                </div>
                <div className='mt-5 w-[250px]'>
                    <ActionButton href={'#'} >
                        {formContent.submitLabel}
                    </ActionButton>
                </div>
            </Form>
        </>
    )
}