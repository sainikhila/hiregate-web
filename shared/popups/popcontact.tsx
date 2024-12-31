

import React from 'react';
import { Email as EmailIcon, Phone as PhoneIcon } from '@mui/icons-material';

const PopupContactComponent = () => {
    return (
        <>
            <div className="contactDetails">
                <div className="detailHead">Candidate -</div>
                <div className="detailBlock">
                    <div className="name">Robert Mathew</div>
                    <div className="phoneBlock">
                        <div className="phIcon"><PhoneIcon /></div>
                        <div className="phone">+918884442460</div>
                    </div>
                    <div className="emailBlock">
                        <div className="emailIcon"><EmailIcon /></div>
                        <div className="email">robert@faceinterview.com</div>
                    </div>
                </div>

                <div className="detailHead">Interviewer -</div>
                <div className="detailBlock">
                    <div className="name">Barak Obama</div>
                    <div className="phoneBlock">
                        <div className="phIcon"><PhoneIcon /></div>
                        <div className="phone">+918884442460</div>
                    </div>
                    <div className="emailBlock">
                        <div className="emailIcon"><EmailIcon /></div>
                        <div className="email">obama@faceinterview.com</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopupContactComponent;
