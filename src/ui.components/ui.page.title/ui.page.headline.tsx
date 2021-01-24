import React from 'react';

import './_ui.page.headline.css';

type Props = {
    title?: string
};

function UiPageHeadline(props: Props) {
    const {
        title = '',
    } = props;

    return (
        <div className="ui-page-headline row mt-3">
            <div className="col-12">
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default UiPageHeadline;
