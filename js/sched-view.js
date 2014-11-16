.viewer {
    height: 1075px;
    overflow: hidden;
    position: relative;
}


.viewer.is-loading:after {
    content: url(images/load.gif);
    position: absolute;
    right: 0;
    top: 0;
}


.viewer img {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    top: 50%;
    left: 50%;
}


a.active {
    opacity: 0.3;
}