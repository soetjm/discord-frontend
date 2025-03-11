import React,{useState} from "react";
import CustomPrimaryButton from '../../shared/components/CustomePrimaryButton'
import AddFriendDialog from "./AddFriendDialog";

const additionalStyles = {
    marginTop: '10px',
    marginLeft: '5px',
    width: "80%",
    height: "30px",
    background: '#3ba55d',
  };
  
const AddFriendButton = ()=>{
    const [isDialogOpen,setIsDialogOpen] = useState(false)

    const handelOpenAddFriendDialog = ()=>{
        setIsDialogOpen(true);
    };

    const handelCloseAddFriendDialog = ()=>{
        setIsDialogOpen(false);
    }

    return(
       <>
            <CustomPrimaryButton
                additionalStyles={additionalStyles}
                label="Add Friend"
                onClick = {handelOpenAddFriendDialog}
            />
            <AddFriendDialog
                isDialogOpen = {isDialogOpen}
                closeDialogHandler = {handelCloseAddFriendDialog}
            />
       </>
    );
}

export default AddFriendButton;