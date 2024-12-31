


import React from 'react'

const PopupNotesComponent = () => {
    return (
        <>
            <div className="profileNote">
                <div className="txtHead">Notes</div>
                <textarea name="message"></textarea>
                <div className="oldNoteBlock">
                    <div className="txtHead">Notes -</div>
                    <div className="dateBy">
                        <div className="addedOn">Added On - Mar/15/2017</div>
                        <div className="addedBy">Added By - Kishor Kumar K</div>
                    </div>
                    <div className="noteTxt">Candidate asked to call in another 15 days</div>
                </div>
            </div>
        </>
    )
}

export default PopupNotesComponent
