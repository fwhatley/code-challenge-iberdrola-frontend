import React from 'react';

import './_ui.loading.spinner.css';

type Props = {
    title?: string
};

function UiLoadingSpinner(props: Props) {
    const {
        title = 'Loading...',
    } = props;

    return (
        <div className="ui-loading-spinner row py-4">
            <div className="col-12">
                <p>{title}</p>
            </div>
        </div>
    );
}

export default UiLoadingSpinner;
