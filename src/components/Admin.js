import Iframe from 'react-iframe'
import React from 'react'

export default function Admin() {
    return (
        <div style={{
            position: 'absolute', left: '25%', top: '10%'
        }}>
            <Iframe url="https://app.jetadmin.io/app/votesource_admin/prod/page/firebase_politicians_list"
                    width="900px"
                    height="750px"
                    position="absolute"
                    />
        </div>
    )
}
