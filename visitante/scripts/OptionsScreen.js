



/* Option menu events */
    document.getElementById("typeImage").addEventListener("click", function() {
        console.log('Image content selected');
        openContentGallery(0);
    });
    document.getElementById("typeText").addEventListener("click", function() {
        console.log('Text content selected');
        openContentGallery(1);
    });
    document.getElementById("typeVideo").addEventListener("click", function() {
        console.log('Video content selected');
        openContentGallery(2);
    });
    document.getElementById("typeAudio").addEventListener("click", function() {
        console.log('Audio content selected');
        openContentGallery(3);
    });

    document.getElementById("goBack").addEventListener("click", function() {
        console.log('Close menu');
        closeContentGallery();
    });
