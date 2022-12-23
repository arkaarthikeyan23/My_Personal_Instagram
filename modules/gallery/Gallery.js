const Gallery = ()=>{
    return `
        <div class='gallery-nav'></div>
        <input type="file" name="photo" id="addPhotoInput" />
        <label for="addPhotoInput">
            <i class="add-photo fa-solid fa-plus"></i>
        </label>
        <section class="gallery">
            <div class="gallery-loader">
                <img src="../../assets/galleryLoader.svg"  alt="" >
            </div>
        </section>
    `
}

export default Gallery;