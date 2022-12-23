import EditBioForm from "./EditBio.js"
import {getEntryFromDb} from '../../Database.js'
const Bio = async () =>{
    const userInfo = await getEntryFromDb('bio')   
    return `
    <section class="bio">
        <div class="profile-photo">
            <img src="https://lh3.googleusercontent.com/a/ALm5wu0DpuJFN6w-Epa8mzoh1yiq40jmcKiAjXouyEQf=s96-c" alt="profile-photo">
        </div>
        <div class="profile-info">
            <p class="name">${userInfo[0]? userInfo[0].bioName: ' '}</p>
            <p class="about">${userInfo[0]? userInfo[0].bioDescription:' '}</p>
            <button class="edit-bio-button">Edit Bio</button>
        </div>
        ${EditBioForm()}
    </section>
`
}

export default Bio