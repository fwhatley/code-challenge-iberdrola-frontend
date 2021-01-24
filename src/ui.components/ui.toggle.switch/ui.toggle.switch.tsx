import React from 'react';

import './_ui.toggle.switch.css';

type Props = {
    value?: boolean,
    onChange?: (val: boolean) => void,
};

function UiToggleSwitch(props: Props) {
    const {
        value = false,
        onChange = (val: boolean) => {},
    } = props;

    const handleChange = (e: any) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        onChange(value);
    };

    return (
        <div className="ui-toggle-switch custom-switch">
            <input
                checked={value}
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
                onChange={handleChange}
            />
                <label className="custom-control-label" htmlFor="customSwitch1">
                    Use API Mocks (allowing to use API mocks because Apple's API is not CORS enabled)
                </label>
        </div>
    );
}

export default UiToggleSwitch;
