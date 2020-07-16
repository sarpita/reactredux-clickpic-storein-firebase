import React, {useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cameraActions } from '../actions/camera.actions';
import {connect} from 'react-redux';

const HomePage=(props)=> {
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    const myimage = useRef();
    useEffect(()=>{
        handleStart();
    })
    const takePhoto = (imageCapture,i) => {
        imageCapture.takePhoto().then(function(blob) {
            var image = new File([blob], `pic${i}`, {type: `image/png`});
            dispatch(cameraActions.add_snapshot(image));
        }).catch(function(error) {
            console.log('takePhoto() error: ', error);
      });
    }
    const handleStart =()=>{
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(function(mediaStream) {
                let i=0;
                const track = mediaStream.getVideoTracks()[0];
                let imageCapture = new ImageCapture(track);
                takePhoto(imageCapture,i++);
                var session = setInterval(()=>{
                    takePhoto(imageCapture,i++);
                    },30000);
            });
        }
    }
    
    return (
        <div>
            <nav class="navbar"> 
                <ul class="navbar-nav ml-auto"> 
                    <li class="nav-item"> 
                        <Link class="nav-link" to="/login">Logout</Link>
                    </li> 
                </ul> 
            </nav> 
            <h1 class="m-3">Hi {user.firstName}!</h1>
            <ul className="mx-auto col-lg-6">
                {props.camera.map((url)=>
                    <img class="m-2 rounded mx-auto" src={url}/>
                )}
            </ul>
                {/* <video id="video" width="640" height="480" autoPlay ref={myvideo}></video> */}
        </div>
    );
}

function mapStateToProps(state){
    return {
        camera:state.camera
    }
}
export default connect(mapStateToProps)(HomePage);