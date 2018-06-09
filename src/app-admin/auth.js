import axios from 'axios';
import { firebaseAuth } from '../constants';
let adminAppId = 'abc';
export function setAdminIdToken(adminIdKey){
    console.log('adminIdKey', adminIdKey);
    adminAppId = adminIdKey;
}
export function getAdminIdToken(){
    return adminAppId;
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
export function adminLogin() {
    const matches = window.location.pathname.match(/apps-public\/(.*)\/rels\//);
    let appId;
    if(matches && matches.length===2 && matches[1]){
        appId = matches[1];
    }else{
        // this can be used in development
        appId = getParameterByName('app');
        console.log(getParameterByName('app'));
    }
    let userId = getParameterByName('u');
    let perimeterId = getParameterByName('p');
    console.log(appId,userId,perimeterId);
    return axios.post("https://us-central1-augle-prod-1.cloudfunctions.net/login", {}, {params:{a:appId,u:userId,p:perimeterId}})
        .then((response) => {
            return firebaseAuth().signInWithCustomToken(response.data.cust_token).then(()=>{
                setAdminIdToken(response.data.appId);
                return response.data.appId;
            });
        });
}

    