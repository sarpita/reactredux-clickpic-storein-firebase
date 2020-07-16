import {cameraConstants} from '../constants';
import {storage} from '../firebase';

export const cameraActions = {
    add_snapshot
};
function add_snapshot(image){
    return dispatch => {
        var uploadImage = storage.ref(`images/${image.name}`).put(image).then((res)=>{
            if(res.state =='success'){
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                   dispatch(success(url));  
                })
            }
            else{
                dispatch(failure(msg))
                throw(error);
            }
        }).catch(()=>{
            debugger;
        });
    }
    function success(url) { return { type: cameraConstants.SNAPSHOT_SUCCESS, url } }
    function failure(msg) { return { type: cameraConstants.SNAPSHOT_FAILURE,msg  } }
}