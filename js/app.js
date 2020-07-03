new Vue({
    el: '#app',
    data: {
        page: 1,
        phase: 1,
        onMenu: false,
        dialogVisible: false
    },
    methods: {
        nextPage() {
            this.page += 1;
        },
        prev() {
            if (this.phase !== 1) {
                this.phase -= 1;
            }
        },
        next() {
            if (this.phase !== 3) {
                this.phase += 1;
            }
        },
        openCam() {
            this.page = 3;
            setTimeout(() => {
                const video = document.querySelector('#videoElement');
                var localStream;
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
                if (navigator.getUserMedia) {
                    navigator.getUserMedia({ video: true },
                        function (stream) {
                            localStream = stream;
                            video.srcObject = localStream;

                            document.querySelector('.face-shape').classList.remove('hide');
                        }
                        , videoError);
                }
                function videoError(e) {
                    console.log(e);
                }
            }, 500)
        }
    },
    mounted() {
        const burger = document.querySelector('.dropdown-trigger');
        burger.onclick = function () {
            document.querySelector('.dropdown').classList.toggle('is-active');
        }
    }
})


