<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <script src="https://unpkg.com/hammerjs@2.0.8/hammer.js"></script>
    <script src="https://unpkg.com/dicom-parser@1.8.3/dist/dicomParser.min.js"></script>
    <script src="https://unpkg.com/cornerstone-core"></script>
    <script src="https://unpkg.com/cornerstone-math"></script>
    <script src="https://unpkg.com/cornerstone-wado-image-loader"></script>
    <script src="https://unpkg.com/cornerstone-tools"></script>
    <title>DICOM Viewer</title>
</head>
<body>
<style>
    .left {
        width: 12%;
        height: 700px;
        float: left;
        background-color: black;
        color: white;
        position: relative;
    }

    .right {
        width: 88%;
        height: 700px;
        float: right;
        background-color: #080808;
        position: relative;

    }

    .dicom-wrapper {
        border-style: solid;
        width: 99%;
        height: 93%;
        color: navy;

    }

    .wrapper {
        background-color: black;

    }

    .dicom-viewer {
        width: 100%;
        height: 100%;
    }

    .Toolbar {
        width: 1000px;
        height: 60px;
        background-color: black;
        position: relative;
        margin-left: 500px;
    }

    .toolButton {
        width: 100px;
        height: 40px;
        color: navy;
        margin-top: 10px;
    }

    .overlay {
        height: 100%;
        width: 100%;
        /* prevent text selection on overlay */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        /* ignore pointer event on overlay */
        pointer-events: none;
    }

    .bottomleft {
        float: left;
        bottom: 0;
        left: 0;
        position: absolute;
        color: rgb(255, 255, 204);
    }

    .bottomright {
        float: right;
        bottom: 0;
        right: 0;
        position: absolute;
        color: rgb(255, 255, 204);
    }

    .stack {
        width: 150px;
        height: 150px;
        color: navy;
        margin: 20px;
        border-style: solid;
    }

    .stack-wrapper {
        height: 700px;
        width: 100%;
        overflow: scroll;
    }

    .center {
        text-align: center;
        bottom: 0;

        color: rgb(255, 255, 204);
    }

</style>

</body>
<div class="wrapper">
    <div class="Toolbar">
        <button id='stackScrollButton' class="toolButton" onclick="handleStackScrollMouseWheel(this)">Stack scroll</button>
        <button class="toolButton" onclick="handleInvert()">Invert</button>
        <button class="toolButton" onclick="handleEllipticalRoi(this)">Eliptical ROI</button>
        <button class="toolButton" onclick="handleLength(this)">Length</button>
        <button class="toolButton" onclick="handleArrowAnnotate(this)">Arrow</button>
        <button class="toolButton" onclick="handleAngle(this)">Angle</button>
        <button class="toolButton" onclick="handleProbe(this)">Probe</button>
        <button class="toolButton" onclick="handleEraser(this)">Eraser</button>

    </div>
    <div class="left">
        <div class="stack-wrapper">
            <div id='thumbnail1' class="stack" onclick="loadAndViewImage(imageId1)" ></div>
            <div id='thumbnail2' class="stack" onclick="loadAndViewImage(imageId2)"></div>
            <div id='thumbnail3' class="stack" onclick="loadAndViewImage(imageId1)"></div>
            <div id='thumbnail4' class="stack" onclick="loadAndViewImage(imageId2)"></div>
            <div id='thumbnail5' class="stack" onclick="loadAndViewImage(imageId1)"></div>
        </div>
    </div>

    <div class="right">
        <div class="dicom-wrapper">
            <div id="dicomImage" class='dicom-viewer'>
            </div>
            <div id='bottomleft' class="bottomleft">
            </div>
            <div id='bottomright' class="bottomright">
                <div id="bottomright1"></div>
                <div id="bottomright2"></div>
            </div>
        </div>
    </div>
</div>

<script>
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneTools.init({
        showSVGCursors: true
    });

    let loaded = false;
    let series = [];

    const imageId1 = [
        'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.7.dcm',
        'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.8.dcm',
        'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.9.dcm',
        'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.10.dcm',
        'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.11.dcm',
        'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.12.dcm',
    ];

    const imageId2 = [
        'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.9.dcm',
        'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.10.dcm',
        'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.11.dcm',
    ];


    const element = document.getElementById('dicomImage');
    cornerstone.enable(element);

    loadAndViewImage(imageId1);

    let thumbnail = [
        document.getElementById('thumbnail1'),
        document.getElementById('thumbnail2'),
        document.getElementById('thumbnail3'),
        document.getElementById('thumbnail4'),
        document.getElementById('thumbnail5'),
    ];

    for (let i = 0; i < thumbnail.length; i++) {
        if (i === 0) {
            handleThumbnail(imageId1, thumbnail[0])
        } else if (i === 1) {
            handleThumbnail(imageId2, thumbnail[1])
        } else if (i === 2) {
            handleThumbnail(imageId1, thumbnail[2])
        } else if (i === 3) {
            handleThumbnail(imageId2, thumbnail[3])
        } else if (i === 4) {
            handleThumbnail(imageId1, thumbnail[4])
        }
    }

    function handleThumbnail(imageId, thumbnail) {
        const thumnail_img = thumbnail;
        cornerstone.enable(thumnail_img);
        cornerstone.loadImage(imageId[0]).then(function (image) {

            const viewport = cornerstone.getDefaultViewportForImage(thumnail_img, image);

            cornerstone.displayImage(thumnail_img, image, viewport);
            loaded = true;
        }).catch(function (err) {
            alert(err);
        });
    }

    function updateImage(imageId){
        cornerstone.disable(element);
        cornerstone.enable(element);
        cornerstone.loadImage(imageId).then(function (image) {
            const viewport = cornerstone.getDefaultViewportForImage(element, image);
            cornerstone.displayImage(element, image, viewport);
            loaded = true;
        }).catch(function (err) {
            alert(err);
        });
    }

    function loadAndViewImage(imageId) {
        //clean canvas and add new elements.
        cornerstone.disable(element);
        cornerstone.enable(element);
        let imgNum = 0;
        cornerstone.loadImage(imageId[imgNum]).then(function (image) {

            const viewport = cornerstone.getDefaultViewportForImage(element, image);

            cornerstone.displayImage(element, image, viewport);
            loaded = true;
            series = imageId;

            document.getElementById('bottomleft').textContent = 'Image #' + imgNum + '/' + (series.length-1);

            element.onwheel = wheelE;
            function wheelE(e) {
                e.stopPropagation();
                e.preventDefault();
                if (e.wheelDelta < 0 || e.detail > 0) {
                    if (imgNum < series.length) {
                        if(imgNum!==series.length-1){
                            imgNum++;
                            document.getElementById('bottomleft').textContent = 'Image #' + imgNum + '/' + (series.length-1);
                        }
                    }
                } else {
                    if (imgNum > 0) {
                        imgNum--;
                        document.getElementById('bottomleft').textContent = 'Image #' + imgNum + '/' + (series.length-1);
                    } else {
                        imgNum = 0;
                        document.getElementById('bottomleft').textContent = 'Image #' + imgNum + '/' + (series.length-1);
                        return false;
                    }
                }
                return false;
            }


            document.getElementById('bottomright1').textContent = "WW/WC:" + Math.round(viewport.voi.windowWidth)
                + "/" + Math.round(viewport.voi.windowCenter);
            document.getElementById('bottomright2').textContent = "Zoom:" + (viewport.scale + "x");

            element.addEventListener('mousedown', function (e) {
                let lastX = e.pageX;
                let lastY = e.pageY;
                const mouseButton = e.which;


                function mouseMoveHandler(e) {
                    const deltaX = e.pageX - lastX;
                    const deltaY = e.pageY - lastY;
                    lastX = e.pageX;
                    lastY = e.pageY;


                    if (mouseButton === 2) {
                        let viewport = cornerstone.getViewport(element);
                        viewport.voi.windowWidth += (deltaX / viewport.scale);
                        viewport.voi.windowCenter += (deltaY / viewport.scale);
                        cornerstone.setViewport(element, viewport);

                        document.getElementById('bottomright1').textContent = "WW/WC:" + Math.round(viewport.voi.windowWidth)
                            + "/" + Math.round(viewport.voi.windowCenter);
                    } else if (mouseButton === 3) {
                        let viewport = cornerstone.getViewport(element);
                        viewport.scale += (deltaY / 100);
                        cornerstone.setViewport(element, viewport);
                        document.getElementById('bottomright2').textContent = "Zoom:" + (viewport.scale + "x");
                    }
                }

                function mouseUpHandler() {
                    document.removeEventListener('mousemove', mouseMoveHandler);
                    document.removeEventListener('mouseup', mouseUpHandler);
                }

                document.addEventListener('mousemove', mouseMoveHandler);
                document.addEventListener('mouseup', mouseUpHandler);
            });
            handleStackScrollMouseWheel(element);



            window.onkeydown = function keyE(e){
                if(e.keyCode===37){
                    if (imgNum > 0) {
                        imgNum--;
                        updateImage(series[imgNum]);
                        document.getElementById('bottomleft').textContent = 'Image #' + imgNum + '/' + (series.length-1);
                    }
                }
                else if(e.keyCode===38){
                    if (imgNum < series.length) {
                        imgNum++;
                        updateImage(series[imgNum]);
                        document.getElementById('bottomleft').textContent = 'Image #' + imgNum + '/' + (series.length-1);
                    }

                }
                else if(e.keyCode===39){
                    if (imgNum < series.length) {
                        imgNum++;
                        updateImage(series[imgNum]);
                        document.getElementById('bottomleft').textContent = 'Image #' + imgNum + '/' + (series.length-1);
                    }
                }
                else if(e.keyCode===40){
                    if (imgNum > 0) {
                        imgNum--;
                        updateImage(series[imgNum]);
                        document.getElementById('bottomleft').textContent = 'Image #' + imgNum + '/' +(series.length-1);
                    }
                }

            }
        }).catch(function (err) {
            alert(JSON.stringfy(err));
        });
    }



    function handleLength(element) {

        const LengthTool = cornerstoneTools.LengthTool;

        addActiveClass(element);
        if (loaded) {

            cornerstoneTools.addTool(LengthTool)
            cornerstoneTools.setToolActive('Length', {mouseButtonMask: 1})

        } else {
            cornerstoneTools.removeTool('LengthTool');
        }
    }

    function handleAngle(element) {

        const AngleTool = cornerstoneTools.AngleTool;

        addActiveClass(element);

        if (loaded) {

            cornerstoneTools.addTool(AngleTool)
            cornerstoneTools.setToolActive('Angle', {
                mouseButtonMask: 1
            });

        } else {
            cornerstoneTools.removeTool('Angle');
        }
    }

    function handleEraser(element) {
        const EraserTool = cornerstoneTools.EraserTool;

        addActiveClass(element);

        if (loaded) {

            cornerstoneTools.addTool(EraserTool)
            cornerstoneTools.setToolActive('Eraser', {
                mouseButtonMask: 1
            });

        } else {
            cornerstoneTools.removeTool('Eraser');
        }
    }

    function handleProbe(element) {
        const ProbeTool = cornerstoneTools.ProbeTool;

        addActiveClass(element);

        if (loaded) {

            cornerstoneTools.addTool(ProbeTool)
            cornerstoneTools.setToolActive('Probe', {
                mouseButtonMask: 1
            });

        } else {
            cornerstoneTools.removeTool('Probe');
        }
    }

    function handleStackScrollMouseWheel(htmlElement) {
        const element = document.getElementById('dicomImage');
        const StackScrollMouseWheelTool = cornerstoneTools.StackScrollMouseWheelTool;

        if (series.length < 1) {
            alert('upload several DICOM.');
            return false;
        }

        addActiveClass(htmlElement);

        const imageIds = series.map(seriesImage => seriesImage);
        const stack = {
            currentImageIdIndex: 0,
            imageIds
        };

        cornerstoneTools.addStackStateManager(element, ['stack']);
        cornerstoneTools.addToolState(element, 'stack', stack);

        cornerstoneTools.addTool(StackScrollMouseWheelTool);
        cornerstoneTools.setToolActive('StackScrollMouseWheel', {});
    }

    function handleKeyboard(element){
        // Enable keyboard input
        cornerstoneTools.keyboardInput.enable(element);


    }

    function addActiveClass(element) {
        let elements = document.querySelectorAll('.button');

        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active');
        }

        element.classList.add('active');
    }

    function handleInvert() {
        const element = document.getElementById('dicomImage');
        const viewport = cornerstone.getViewport(element);
        viewport.invert = !viewport.invert;
        cornerstone.setViewport(element, viewport);
    }

    function handleArrowAnnotate(element) {
        const ArrowAnnotateTool = cornerstoneTools.ArrowAnnotateTool;

        addActiveClass(element);

        if (loaded) {

            cornerstoneTools.addTool(ArrowAnnotateTool);
            cornerstoneTools.setToolActive('ArrowAnnotate', {mouseButtonMask: 1});

        } else {
            cornerstoneTools.removeTool('ArrowAnnotate');
        }
    }

    function handleArrow(element) {
        const ArrowTool = cornerstoneTools.ArrowTool;

        addActiveClass(element);

        if (loaded) {

            cornerstoneTools.addTool(ArrowTool);
            cornerstoneTools.setToolActive('Arrow', {mouseButtonMask: 1});

        } else {
            cornerstoneTools.removeTool('Arrow');
        }
    }

    function handleEllipticalRoi(element) {
        const EllipticalRoiTool = cornerstoneTools.EllipticalRoiTool;

        addActiveClass(element);

        if (loaded) {
            cornerstoneTools.addTool(EllipticalRoiTool)
            cornerstoneTools.setToolActive('EllipticalRoi', {mouseButtonMask: 1})

        } else {
            cornerstoneTools.removeTool('EllipticalRoiTool');
        }
    }
</script>

</html>
