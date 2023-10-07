import { Button } from "@mui/material";
import React, { useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
const CreateNote = (props)=>{
    const [expand,setExpand] = useState(false);

    const [note,setNote]  =useState({
        title:"",
        content:"",
    });

const InputEvent = (event)=>{
 const {name,value} = event.target;
 setNote((prevData)=>{
    return{
        ...prevData,
        [name]:value
    };
 });
};
const addEvent = ()=>{
    props.passNote(note);
    setNote({
        title:"",
        content:"",
    });
};
const expandIt=()=>{
    setExpand(true);
};
const bactonormal=()=>{
    setExpand(false);
};


    return(
        <>
            <div className="main_note" onDoubleClick={bactonormal}   >
                <form>
                    {expand?
                <input name="title" type="text" value ={note.title} 
                onChange={InputEvent} placeholder="Title" autoComplete="off"/>:null}
                <textarea name="content" cols="" rows="" value ={note.content} 
                onChange={InputEvent} placeholder="Write a note..." onClick={expandIt}
             ></textarea>
{expand?
<Button onClick={addEvent}>
                    < AddBoxIcon className="plus_sign"/>
                </Button>:null}
                </form>
               
            </div>
        </>
    );
};

export default CreateNote;