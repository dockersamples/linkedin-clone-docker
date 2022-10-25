import React from 'react'
import '../css/Widget.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const newsArticle = (heading, subtitle) => {
   return <div className="widgets__article">
        <div className="widgets__articleLeft">
        <FiberManualRecordIcon/>
        </div>

        <div className="widgets__articleRight">
           <h4>{heading}</h4>
           <p>{subtitle}</p>

        </div>
    </div> 
};

export default function Widgets() {

    

return (
    <div className="widgets">

        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle('Happy Easter','The Corona Virus has ended')}
        {newsArticle('Happy Easter','The Corona Virus has ended')}
        {newsArticle('Lorem Imspum','The Corona Virus has ended')}
        {newsArticle('Lorem Imspum','The Corona Virus has ended')}

    </div>


);

}
