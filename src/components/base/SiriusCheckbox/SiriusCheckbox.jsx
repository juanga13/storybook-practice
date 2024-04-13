import {Checkbox} from "antd";
import PropTypes from "prop-types";
import { SiriusText } from "../SiriusText/SiriusText";

export const SiriusCheckbox = ({text, checked, onChange, style}) => {

    return (
        <div className='flex flex-row gap-2'>
            <Checkbox checked={checked} onChange={onChange} style={style} />
            <SiriusText>{text}</SiriusText>
        </div>
    )
}

SiriusCheckbox.propTypes = {
    checked: PropTypes.boolean,
    onChange: PropTypes.func,
    style: PropTypes.object,
    text: PropTypes.text,
}
