import React, { Component } from 'react';
import './ToolbarComponent.css';


import Mic from '@material-ui/icons/Mic';
import MicOff from '@material-ui/icons/MicOff';
import Videocam from '@material-ui/icons/Videocam';
import VideocamOff from '@material-ui/icons/VideocamOff';
import Fullscreen from '@material-ui/icons/Fullscreen';
import FullscreenExit from '@material-ui/icons/FullscreenExit';
import PictureInPicture from '@material-ui/icons/PictureInPicture';
import ScreenShare from '@material-ui/icons/ScreenShare';
import StopScreenShare from '@material-ui/icons/StopScreenShare';
import Tooltip from '@material-ui/core/Tooltip';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import PetsIcon from '@material-ui/icons/Pets';
import DateRangeIcon from '@material-ui/icons/DateRange';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import IconButton from '@material-ui/core/IconButton';

export default class ToolbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { fullscreen: false };
        this.camStatusChanged = this.camStatusChanged.bind(this);
        this.micStatusChanged = this.micStatusChanged.bind(this);
        this.screenShare = this.screenShare.bind(this);
        this.stopScreenShare = this.stopScreenShare.bind(this);
        this.toggleFullscreen = this.toggleFullscreen.bind(this);
        this.leaveSession = this.leaveSession.bind(this);
        this.toggleChat = this.toggleChat.bind(this);
        this.togglecalender = this.togglecalender.bind(this)
        this.emojiChange = this.emojiChange.bind(this)
        this.camDisplayChange = this.camDisplayChange.bind(this)
    }

    emojiChange() {
        this.props.emojiChange();
    }
    camDisplayChange() {
        this.props.camDisplayChange()
    }
    micStatusChanged() {
        this.props.micStatusChanged();
    }

    camStatusChanged() {
        this.props.camStatusChanged();
    }

    screenShare() {
        this.props.screenShare();
    }

    stopScreenShare() {
        this.props.stopScreenShare();
    }

    toggleFullscreen() {
        this.setState({ fullscreen: !this.state.fullscreen });
        this.props.toggleFullscreen();
    }

    togglecalender() {
        console.log()
        this.props.togglecalender()
    }

    
    leaveSession() {
        this.props.leaveSession();
    }

    toggleChat() {
        this.props.toggleChat();
    }

    render() {
        const mySessionId = this.props.sessionId;
        const localUser = this.props.user;
        return (
            <div id="header">
                <div  className="toolbar">
                    <div className="buttonsContent">
                        <IconButton color="secondary" className="outButton" onClick={this.leaveSession} id="navLeaveButton">
                            <PowerSettingsNew />
                            <div className='outFont'>?????????</div>
                        </IconButton>
                            {/* <div className='roomName'>
                                {this.props.sessionId && <div id="titleContent">
                                    <span id="session-title">?????????: {mySessionId}</span>
                                </div>}
                            </div> */}
                            {
                                this.props.isDisplayButton !== 'display' &&
                                <IconButton color="inherit" className="whasangButton" onClick={this.camDisplayChange}>
                                    {localUser !== undefined ?  <div><AccountBoxIcon /><div className='font'>????????????</div></div> :  <div><AccountBoxIcon /><div className='font'>????????????</div></div>}
                                </IconButton>
                            }
                        <IconButton color="inherit" className="muteButton" onClick={this.micStatusChanged}>
                            {localUser !== undefined && localUser.isAudioActive() ? <div><Mic /> <div className='font'>?????????</div></div> : <div><MicOff color="secondary" /><div className='font'>????????? ??????</div></div>}
                        </IconButton>

                        <IconButton color="inherit" className="navButton" id="navCamButton" onClick={this.camStatusChanged}>
                            {localUser !== undefined && localUser.isVideoActive() ? (
                                <div><Videocam /><div className='font'>????????? ??????</div></div>
                            ) : (
                                <div><VideocamOff color="secondary" /><div className='font'>????????? ??????</div></div>
                            )}
                        </IconButton>

                        <IconButton color="inherit" className="navButton" onClick={this.screenShare}>
                            {localUser !== undefined && localUser.isScreenShareActive() ? <div><PictureInPicture /><div className='font'>?????? ??????</div></div> : <div><ScreenShare /><div className='font'>?????? ??????</div></div>}
                        </IconButton>

                        {localUser !== undefined &&
                            localUser.isScreenShareActive() && (
                                <div>                                
                                    <IconButton onClick={this.stopScreenShare} id="navScreenButton">
                                    <StopScreenShare color="secondary" />
                                    </IconButton>
                                    <div className='font'>?????? ??????</div>
                                </div>
                            )}

                        {/* <IconButton color="inherit" className="navButton" onClick={this.toggleFullscreen}>
                            {localUser !== undefined && this.state.fullscreen ?  <div><FullscreenExit /><div className='font'>?????? ??????</div></div> :  <div><Fullscreen /><div className='font'>?????? ??????</div></div>}
                        </IconButton> */}

                        <IconButton color="inherit" className="navButton" onClick={this.emojiChange}>
                            {localUser !== undefined ?  <div><PetsIcon /><div className='font'>?????? ??????</div></div> :  <div><PetsIcon /><div className='font'>?????? ??????</div></div>}
                        </IconButton>

                        <IconButton color="inherit" className="navButton" onClick={this.togglecalender}>
                            {localUser !== undefined ?  <div><DateRangeIcon /><div className='font'>?????????</div></div> :  <div><DateRangeIcon /><div className='font'>?????????</div></div>}
                        </IconButton>

                        {/* <IconButton color="inherit" className="navButton" >
                            {localUser !== undefined ?  <div><WallpaperIcon /><div className='font'>????????????</div></div> :  <div><WallpaperIcon /><div className='font'>????????????</div></div>}
                        </IconButton> */}


                        <IconButton color="inherit" onClick={this.toggleChat} className="chatButton">
                            {this.props.showNotification && <div id="point" className="" />}
                            <div>
                                <Tooltip >
                                    <QuestionAnswer />
                                </Tooltip>
                                <div className='font'>??????</div>
                            </div>                   
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    }
}
