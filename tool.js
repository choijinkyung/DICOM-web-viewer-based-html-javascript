
/*Cornerstone Tools*/
function handleWWWC(element){
    const WwwcTool = cornerstoneTools.WwwcTool;

    addActiveClass(element);
    if (loaded) {
        cornerstoneTools.addTool(WwwcTool);
        cornerstoneTools.setToolActive('Wwwc', {mouseButtonMask: 1});
    } else {
        cornerstoneTools.removeTool('WwwcTool');
    }
}
function handleZoom(element){
    const ZoomTool = cornerstoneTools.ZoomTool;

    addActiveClass(element);
    if (loaded) {
        cornerstoneTools.addTool(ZoomTool,{
            configuration: {
                invert: false,
                preventZoomOutsideImage: false,
                minScale: .1,
                maxScale: 20.0,
            }
        });
        cornerstoneTools.setToolActive('Zoom', {mouseButtonMask: 1});
    } else {
        cornerstoneTools.removeTool('ZoomTool');
    }
}
function handlePan(element){
    const PanTool = cornerstoneTools.PanTool;

    addActiveClass(element);
    if (loaded) {
        cornerstoneTools.addTool(PanTool);
        cornerstoneTools.setToolActive('Pan', {mouseButtonMask: 1});
    } else {
        cornerstoneTools.removeTool('PanTool');
    }
}
function handleMagnify(element){
    const MagnifyTool = cornerstoneTools.MagnifyTool;

    addActiveClass(element);
    if (loaded) {
        cornerstoneTools.addTool(MagnifyTool);
        cornerstoneTools.setToolActive('Magnify', {mouseButtonMask: 1});
    } else {
        cornerstoneTools.removeTool('MagnifyTool');
    }
}
function handlePlay(element){

}
function handleBidirectional(element){
    const BidirectionalTool = cornerstoneTools.BidirectionalTool;
    addActiveClass(element);
    if (loaded) {
        cornerstoneTools.addTool(BidirectionalTool);
        cornerstoneTools.setToolActive('Bidirectional', {mouseButtonMask: 1});
    } else {
        cornerstoneTools.removeTool('BidirectionalTool');
    }
}
function handleChangeLayout(element){

}
function handleSortPlus(){
    imageId1 = imageId1.reverse();
    loadAndViewImage(imageId1);
}
function handleSortMinus(){
    imageId1 = imageId1.reverse();
    loadAndViewImage(imageId1);
}
function handleEllipticalRoi(element) {
    const EllipticalRoiTool = cornerstoneTools.EllipticalRoiTool;

    addActiveClass(element);

    if (loaded) {
        cornerstoneTools.addTool(EllipticalRoiTool);
        cornerstoneTools.setToolActive('EllipticalRoi', {mouseButtonMask: 1});

    } else {
        cornerstoneTools.removeTool('EllipticalRoiTool');
    }
}

function handleRectangleROI(element) {
    const RectangleRoiTool = cornerstoneTools.RectangleRoiTool;

    addActiveClass(element);
    if (loaded) {
        cornerstoneTools.addTool(RectangleRoiTool);
        cornerstoneTools.setToolActive('RectangleRoi', {mouseButtonMask: 1});

    } else {
        cornerstoneTools.removeTool('RectangleRoiTool');
    }
}
function handleFreehand(element) {
    const FreehandRoiTool = cornerstoneTools.FreehandRoiTool;

    addActiveClass(element);
    if (loaded) {

        cornerstoneTools.addTool(FreehandRoiTool);
        cornerstoneTools.setToolActive('FreehandRoi', {mouseButtonMask: 1});

    } else {
        cornerstoneTools.removeTool('LengthTool');
    }
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
function handleReferenceLine(){
    const elements = cornerstone.getEnabledElements()
    const synchronizer = new cornerstoneTools.Synchronizer(
        'cornerstonenewimage',
        cornerstoneTools.updateImageSynchronizer
    )
    elements.forEach(value => {
        const { element } = value
        synchronizer.add(element)
    })
    synchronizer.enabled = true
    cornerstoneTools.addTool(cornerstoneTools.ReferenceLinesTool)
    cornerstoneTools.setToolEnabled('ReferenceLines', {
        synchronizationContext: synchronizer,
    })
}
function handleStackScrollTool(htmlElement){
    const element = document.getElementById('dicomImage');
    const StackScrollTool = cornerstoneTools.StackScrollTool;

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

    cornerstoneTools.addTool(StackScrollTool);
    cornerstoneTools.setToolActive('StackScrollTool', {mouseButtonMask:1});
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

function handleReset(){
    const element =  document.getElementById('dicomImage');
    const viewport = cornerstone.getViewport(element);
    cornerstone.reset(element);
}

