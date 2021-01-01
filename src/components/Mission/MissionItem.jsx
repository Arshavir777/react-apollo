import React from 'react';

function MissionItem({ title, details, ...rest }) {

    return (
        <div className="mt-2">
            <article className="message is-info">
                <div className="message-header">
                    <p>{title}</p>
                </div>
                <div className="message-body">
                    {details}  </div>
            </article>
        </div>
    );
}

export default MissionItem;