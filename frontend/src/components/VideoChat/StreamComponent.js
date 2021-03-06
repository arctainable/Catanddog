import React, { Component } from 'react';
import './StreamComponent.css';
import OvVideoComponent from './OvVideo';

import MicOff from '@material-ui/icons/MicOff';
import VideocamOff from '@material-ui/icons/VideocamOff';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import HighlightOff from '@material-ui/icons/HighlightOff';
import FormHelperText from '@material-ui/core/FormHelperText';

export default class StreamComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { nickname: this.props.user.getNickname(), showForm: false, mutedSound: false, isFormValid: true };
        this.handlePressKey = this.handlePressKey.bind(this);
        this.toggleSound = this.toggleSound.bind(this);
    }


    toggleSound() {
        // console.log(this.props.user)
        this.setState({ mutedSound: !this.state.mutedSound });
    }

    handlePressKey(event) {
        if (event.key === 'Enter') {
            // console.log(this.state.nickname);
            if (this.state.nickname.length >= 3 && this.state.nickname.length <= 20) {
                this.props.handleNickname(this.state.nickname);
                this.toggleNicknameForm();
                this.setState({ isFormValid: true });
            } else {
                this.setState({ isFormValid: false });
            }
        }
    }

    render() {
        return (
            <div className="OT_widget-container">
                <div className="pointer nickname">
                    <div onClick={this.toggleNicknameForm}>
                        <span id="nickname">{this.props.user.getNickname()}</span>
                        { this.props.user.isLocal() && <span id=""> (나)</span>}
                        { this.props.user.isEmojiActive() && <span>이모지 시작</span>}
                    </div>
                </div>

                {this.props.user !== undefined && this.props.user.getStreamManager() !== undefined ? (
                    <div className="streamComponent">
                        <OvVideoComponent user={this.props.user} mutedSound={this.state.mutedSound} />
                        <div id="statusIcons">
                            {!this.props.user.isVideoActive() ? (
                                <div id="camIcon">
                                    <VideocamOff id="statusCam" />
                                </div>
                            ) : null}

                            {!this.props.user.isAudioActive() ? (
                                <div id="micIcon">
                                    <MicOff id="statusMic" />
                                </div>
                            ) : null}
                        </div>
                        <div>
                            {!this.props.user.isLocal() && (
                                <IconButton id="volumeButton" onClick={this.toggleSound}>
                                    {this.state.mutedSound ? <VolumeOff color="secondary" /> : <VolumeUp />}
                                </IconButton>
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}
