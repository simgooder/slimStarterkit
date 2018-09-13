
// Check if an element is in the viewport
// ---------------------------------------------
// @return - returns a boolean
// @param (required) - `element` - a reference to the target DOM element
// @param (optional) - `offset` - a pixel offset


function isInViewport(element, offset) {

    var rect = element.getBoundingClientRect();
    var html = document.documentElement;

    if (offset !== undefined) {
        var pxOffset = element.clientHeight + offset;
    } else {
        var pxOffset = element.clientHeight;
    }

    return (

        rect.top >= -pxOffset &&
        rect.bottom <= (window.innerHeight + pxOffset || html.clientHeight + pxOffset)

    );
}