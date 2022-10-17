import React from 'react';
import './ApplicationsBar.css'
import image from '../../../assets/22logo-jr.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';

function ApplicationsBar() {
    return (
        <div className="appl-bar">
            <div className="greeting">
                <h1>Hello John Bayer,</h1>
                <h2>You have 8 New Applications Today!</h2>
            </div>
            <div className="img-box">
                <img src={image} alt="delivery" />
            </div>
            <div className="new-applicants">
                <h3>New Applicants</h3>
                <KeyboardArrowRightIcon />
            </div>
            <div className="details">
                <ul>
                    <li>
                        <a href="#home" className="item">
                            <AccountCircleOutlinedIcon className="avatar" />
                            <div className="text">
                                <h3>Rosie Metts</h3>
                                <h4>Applied for <span>Web Developer</span></h4>
                            </div>
                            <EmailTwoToneIcon className="message" />
                            <LocalPhoneTwoToneIcon className="call" />
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="item">
                            <AccountCircleOutlinedIcon className="avatar" />
                            <div className="text">
                                <h3>James Scott</h3>
                                <h4>Applied for <span>Graphic Designer</span></h4>
                            </div>
                            <EmailTwoToneIcon className="message" />
                            <LocalPhoneTwoToneIcon className="call" />
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="item">
                            <AccountCircleOutlinedIcon className="avatar" />
                            <div className="text">
                                <h3>Jamie Laurenson</h3>
                                <h4>Applied for <span>Marketing Manager</span></h4>
                            </div>
                            <EmailTwoToneIcon className="message" />
                            <LocalPhoneTwoToneIcon className="call" />
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="item">
                            <AccountCircleOutlinedIcon className="avatar" />
                            <div className="text">
                                <h3>Elizabeth Hurton</h3>
                                <h4>Applied for <span>Product Manager</span></h4>
                            </div>
                            <EmailTwoToneIcon className="message" />
                            <LocalPhoneTwoToneIcon className="call" />
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="item">
                            <AccountCircleOutlinedIcon className="avatar" />
                            <div className="text">
                                <h3>Danny Watson</h3>
                                <h4>Applied for <span>Android Developer</span></h4>
                            </div>
                            <EmailTwoToneIcon className="message" />
                            <LocalPhoneTwoToneIcon className="call" />
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="item">
                            <AccountCircleOutlinedIcon className="avatar" />
                            <div className="text">
                                <h3>Reha Scarlett</h3>
                                <h4>Applied for <span>iOS Developer</span></h4>
                            </div>
                            <EmailTwoToneIcon className="message" />
                            <LocalPhoneTwoToneIcon className="call" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ApplicationsBar
