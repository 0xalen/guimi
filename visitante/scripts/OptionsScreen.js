function OptionsScreen (opt) {
    var options = opt;

    this.displayOptionsScreen = function() {
        openOptionsScreen();

    }

    var openOptionsScreen = function() {
        var optionDiv = document.getElementById("optionsScreenID");
        // Add option screen display

    }

    var loadOptionImage = function() {

            document.getElementById().src = "visitante/images/icons/icon_cont-audio.png";
            document.getElementById().src = "visitante/images/icons/icon_cont-audio.png";

            document.getElementById().src = "visitante/images/icons/icon_cont-imagen.png";
            document.getElementById().src = "visitante/images/icons/icon_cont-imagen.png";

            document.getElementById().src = "visitante/images/icons/icon_cont-texto.png";
            document.getElementById().src = "visitante/images/icons/icon_cont-texto.png";

            document.getElementById().src = "visitante/images/icons/icon_cont-video.png";
            document.getElementById().src = "visitante/images/icons/icon_cont-video.png";
    }

    this.addEventListeners = function() {
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
    }

    var openContentGallery = function() {

    }
}


