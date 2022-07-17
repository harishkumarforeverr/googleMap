/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// The following example creates a marker in Stockholm, Sweden using a DROP
// animation. Clicking on the marker will toggle the animation between a BOUNCE
// animation and no animation.
let marker;

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 59.325, lng: 18.07 }
  });

  marker = new google.maps.Marker({
    map,
    draggable: true,
    // type: "info",
    animation: google.maps.Animation.DROP,
    position: { lat: 59.327, lng: 18.067 }
    /*  icon:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png"
      */
  });
  marker.addListener("click", toggleBounce);
}

const ID = setInterval(
  () => marker.setAnimation(google.maps.Animation.BOUNCE),
  1000
);
setTimeout(() => {
  marker.setAnimation(null);
  clearInterval(ID);
}, 6000);
window.initMap = initMap;
