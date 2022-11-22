function setTransform3D (el, degree, perspective, z) {
  degree = Math.max(Math.min(degree, 90), -90)
  z -= 5
  el.style['-webkit-perspective'] = el.style['perspective'] = el.style['-moz-perspective'] = perspective + 'px'
  el.style['-webkit-transform'] = el.style['transform'] = 'rotateY(' + degree + 'deg) translateZ(' + z + 'px)'
}

// var test = 1;
function displayIndex (imgSize, spacing, left, imgs, index, flat, width, titleBox, vnode) {
  var mLeft = (width - imgSize) * 0.5 - spacing * (index + 1) - imgSize * 0.5
  var i = 0;

  console.log('left', left);


  imgs.forEach((img, index) => {
    img.style.left = (left + i * spacing + spacing) + 'px'
    img.style.marginLeft = mLeft + 'px'
    img.style['-webkit-filter'] = 'brightness(0.65)'
    img.style.zIndex = i + 1
    setTransform3D(
      img, 
      ((index - i) * 10 + 45),
      300, 
      (-(index - i) * 30 - 20)
    )
    i++;
  });

  let img = imgs.find(c => c.id === 'coverflow' + index);
  // let itemIndex = img.getAttribute('data-id');

  img.style['-webkit-filter'] = 'none'
  img.style.marginLeft = (mLeft + imgSize * 0.5) + 'px'
  img.style.zIndex = imgs.length
  titleBox.style.visibility = 'hidden'

  setTransform3D(img, 0, 0, 5)

  // if (imgsCount > 2) {
  //   for (let j1 = 1; j1 < imgs.length; ++j1) {
  //     imgs[j1].style.left = (left + j1 * spacing + spacing) + 'px'
  //     imgs[j1].style.marginLeft = (mLeft + imgSize) + 'px'
  //     imgs[j1].style['-webkit-filter'] = 'brightness(0.7)'
  //     imgs[j1].style.zIndex = imgs.length - j1
  //     setTransform3D(imgs[j1], flat ? 0 : ((itemIndex - j1) * 10 - 45), 300, flat ? (itemIndex - j1) * 10 : ((itemIndex - j1) * 30 - 20))
  //   }
  // } else {
    for (var j = index + 1; j < imgs.length; ++j) {
      imgs[j].style.left = (left + j * spacing + spacing) + 'px'
      imgs[j].style.marginLeft = (mLeft + imgSize) + 'px'
      imgs[j].style['-webkit-filter'] = 'brightness(0.7)'
      imgs[j].style.zIndex = imgs.length - j
      setTransform3D(
        imgs[j], 
        ((index - j) * 10 - 45), 
        300, 
        ((index - j) * 30 - 20)
      )
    }
  // }

  if (vnode.context.coverIndex !== index) {
    vnode.context.handleChange(index)
  }



  // for (var i = 0; i <= index; i++) {
  //   try {

  //   } catch (error) {
  //     console.error(error);
  //     console.error(imgs);
  //     console.error(index);
  //     // expected output: ReferenceError: nonExistentFunction is not defined
  //     // Note - error messages will vary depending on browser
  //   }
  // }

}

export default {
  bind: function (el, binding, vnode) {
    var imgSize = parseInt(vnode.context.coverWidth)
    var spacing = parseInt(vnode.context.coverSpace)
    var flat = vnode.context.coverFlat
    var width = vnode.context.width
    var index = vnode.context.index
    vnode.context.coverIndex = index
    var imgHeight = Math.max(vnode.context.coverHeight, vnode.context.coverWidth)
    var imgs = []

    for (var i = 0; i < el.childNodes.length; ++i) {
      imgs.push(el.childNodes[i])
    }

    for (var j = 0; j < imgs.length; j++) {
      imgs[j].style.position = 'absolute'
      imgs[j].style.width = imgSize + 'px'
      imgs[j].style.height = 'auto'
      imgs[j].style.bottom = '60px'
      imgs[j].style.transition = 'transform .4s ease, margin-left .4s ease, -webkit-filter .4s ease'
    }

    el.style.overflowX = 'hidden'

    var titleBox = document.createElement('SPAN')

    setTransform3D(el, 0, 600, 0)

    el.style.width = width + 'px'

    el.style.height = (imgHeight + 80) + 'px'

    el.style.position = 'relative'

    displayIndex(imgSize, spacing, el.scrollLeft, imgs, index, flat, parseInt(el.style.width), titleBox, vnode)

    function handleClick (event) {

      if (event.target && event.target.nodeName.toUpperCase() === 'IMG') {
        var index = parseInt(event.target.getAttribute('index'))
        imgs = [];

        for (var i = 0; i < el.childNodes.length; ++i) {
          imgs.push(el.childNodes[i])
        }

        if (index > 4) {
          console.log('shift', imgs.length);
          imgs.shift();
          console.log('shift', imgs.length);
        }
        console.log('handleClick');
        // console.log(event.target.getAttribute('index'));
        console.log(imgs, index);

        displayIndex(imgSize, spacing, el.scrollLeft, imgs, index, flat, parseInt(el.style.width), titleBox, vnode)
      }
    }

    el.addEventListener('click', handleClick, false)

    el.$destroy = () => {
      el.removeEventListener('click', handleClick, false)
    }
  },
  unbind: function (el) {
    el.$destroy()
  }
}
