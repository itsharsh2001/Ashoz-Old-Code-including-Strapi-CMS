import classes from "./ThreeDVideo.module.css";
// import dynamic from "next/dynamic";
// import "aframe"
// const aframe = dynamic(()=> import('aframe'), {ssr: false});
// import React from "react";
// import { ReactDOM } from "react";
// import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene} from 'aframe-react'
// const {Box, Sphere, Cylinder, Plane, Sky, Text, Scene} = dynamic(() => import('aframe-react'), { ssr: false });
// const Scene = dynamic(() => import('aframe-react'), { ssr: false });
// const Box = dynamic(() => import('aframe-react'), { ssr: false });

export default function ThreeDVideo() {
    return (
        <iframe className={classes.threedvideo} width="1270" height="641" src="https://www.google.com/maps/embed?pb=!4v1632216401251!6m8!1m7!1sCAoSLEFGMVFpcE5VTEdZekkzRkd3VDhNSER1TUEzMkVhdTR2SHdSVVhOTkpmaE5w!2m2!1d16.30459125322088!2d80.44222648342429!3f20!4f10!5f0.7820865974627469?autoplay=1" allowfullscreen  allow="camera; gyroscope; accelerometer; magnetometer; fullscreen;autoplay"></iframe>
        // <Scene  className={classes.threedvideo}>
        //    <Box position="-1 0.5 -3" rotation="0 45 0" color="#4cc3d9" shadow />
        //    {/* <Sphere position="0 1.25 -5" radius="1.25" color="#ef2d5e" shadow />
        //    <Cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#ffc65d" shadow />
        //    <Plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7bc8a4" shadow />
        //    <Sky color="#ECECEC" />
        //    <Text value="Hello world, react-aframe-ar!" align="center" position="0 2.3 -1.5" color="#7bc8a4" /> */}

        // </Scene>
    )
}
