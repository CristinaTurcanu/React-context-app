import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Avatar from "@mui/material/Avatar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import {LanguageContext} from "./contexts/LanguageContext";

const words = {
    english: {
        signIn: "Sign In",
        email: "Email Address",
        password: "Password",
        remember: "Remember Me"
    },
    french: {
        signIn: "Se Connecter",
        email: "Adresse Électronique",
        password: "Mot de Passe",
        remember: "Souviens-toi De Moi"
    },
    spanish: {
        signIn: "Registrarse",
        email: "Correo Electrónico",
        password: "Contraseña",
        remember: "Recuérdame"
    }
};

function Form (props) {
    const { language, changeLanguage } = useContext(LanguageContext)
    const { email, signIn, password, remember } = words[language]
    return (
        <Card sx={{ maxWidth: 345, margin: "50px auto 0 auto" }}>
            <CardContent>
                <Grid xs display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Avatar>
                        <LoginIcon />
                    </Avatar>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <Select value={language} onChange={changeLanguage}>
                            <MenuItem value='english'>English</MenuItem>
                            <MenuItem value='french'>French</MenuItem>
                            <MenuItem value='spanish'>Spanish</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <form>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='email'>{email}</InputLabel>
                        <Input id='email' name='email' autoFocus />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>{password}</InputLabel>
                        <Input id='password' name='password' autoFocus />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox color='primary' />}
                        label={remember}
                    />
                    <Button
                        variant='contained'
                        type='submit'
                        fullWidth
                        color='primary'
                    >
                        {signIn}
                    </Button>
                </form>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    )
}

export default Form;