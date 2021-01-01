import React from 'react';

function MissionItem({ dragon, ...rest }) {

    return (
        <div className="mt-2">
            <article class="message is-info">
                <div class="message-header">
                    <p>{dragon.name}</p>
                </div>
                <div class="message-body">
                    {dragon.description}  </div>
            </article>
        </div>
    );
}

export default MissionItem;