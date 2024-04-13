import {SiriusCard} from "../../base/SiriusCard/SiriusCard.jsx";
import {SiriusTitle} from "../../base/SiriusTitle/SiriusTitle.jsx";
import {SiriusImage} from "../../base/SiriusImage/SiriusImage.jsx";
import {SiriusTextInput} from "../../base/SiriusTextInput/SiriusTextInput.jsx";
import {SiriusButton} from "../../base/SiriusButton/SiriusButton.jsx";
import ReactLogo from '../../../assets/react.svg';
import {useState} from "react";
import { SiriusCheckbox } from "../../base/SiriusCheckbox/SiriusCheckbox.jsx";

export const SiriusSignUp = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    const handleSignUp = () => {
        alert('Sign up successful!')
    }

    return (
        <SiriusCard style={{width: 400}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SiriusImage src={ReactLogo} height={100} width={100} />
                <SiriusTitle level={2} title={'Sirius sign up'} />
                <SiriusTextInput placeholder={'Full name'} onChange={(e) => setFullName(e.target.value)} />
                <SiriusTextInput placeholder={'Email'} onChange={(e) => setEmail(e.target.value)} />
                <SiriusTextInput type={'password'} placeholder={'Password'} onChange={(e) => setPassword(e.target.value)} />
                <SiriusTextInput type={'password'} placeholder={'Confirm password'} onChange={(e) => setConfirmPassword(e.target.value)} />
                <SiriusCheckbox text={'I accept the terms and conditions.'} checked={checkbox} onChange={() => setCheckbox(!checkbox)} style />
                <SiriusButton disabled={!fullName || !email || !password || !confirmPassword || !checkbox} onClick={handleSignUp}>Sign up</SiriusButton>
            </div>
        </SiriusCard>
    )
}
