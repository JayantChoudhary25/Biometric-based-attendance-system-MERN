import React from 'react'
import Teacher from './teacher';
import Student from './student';
import Biometric from './biometric';
import Welcome from './welcome';

const RenderMyState = props =>{
    const myState = props;
    if(myState === "1"){
        return <div className="text"><Teacher /></div>;
    }else if(myState === "2"){
        return <div className="text"><Student /></div>;
    }else if(myState === "3"){
        return <div className="text"><Biometric/></div>;
    }else{
        return <div className="text"><Welcome /></div>;
    }
}

export default RenderMyState;
