import Bio from './modules/bio/Bio.js'
import addBioEventListners from './modules/bio/events.js'
import Gallery from './modules/gallery/Gallery.js'
import {addGalleryEventListeners, addImagesToGallery} from './modules/gallery/events.js'
import Nav from './modules/nav/Nav.js'
import { request, addEntryToDb, getEntryFromDb } from './Database.js'


const App = async () => {
    return `
        ${Nav()}
        <div class="container">
            ${await Bio()}
            ${Gallery()}
        </div>
    `
}

request.onsuccess = async ()=>{
    document.getElementById('root').innerHTML = await App();
    addBioEventListners()
    addGalleryEventListeners()
    addImagesToGallery()
}
