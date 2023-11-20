document.addEventListener('DOMContentLoaded', function () {
  const imageSources = ['./images/alpakas.jpg', './images/eichhoernchen.jpg', './images/elefanten.jpg', './images/esel.jpg', './images/eule.jpg', './images/frosch.jpg', './images/gecko.jpg', './images/geparden.jpg', './images/kaninchen.jpg', './images/lamas.jpg', './images/makaks.jpg', './images/mobs.jpg', './images/nilpferde.jpg', './images/panda.jpg', './images/papagei.jpg', './images/seehund.jpg', './images/tucan.jpg', './images/wolf.jpg'];
  const gallery = document.getElementById('gallery');

  function showImagesForPage(pageIndex, imagesPerPage) {
    gallery.innerHTML = '';

    const startIndex = pageIndex * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    for (let i = startIndex; i < endIndex && i < imageSources.length; i++) {
      const img = document.createElement('img');
      img.classList.add('image');
      img.src = imageSources[i];
      img.alt = `Image ${i + 1}`;
      img.draggable = true;
      img.id = `image-${i + 1}`;
      gallery.appendChild(img);
    }

    const images = document.querySelectorAll('.image');
    images.forEach((img) => {
      img.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', img.id);
      });
      img.addEventListener('dragover', (event) => {
        event.preventDefault();
      });
      img.addEventListener('dragenter', (event) => {
        event.preventDefault();
      });
      img.addEventListener('drop', onDrop);
    });
  }

  showImagesForPage(0, 18);

  const draggableElement = document.querySelectorAll('.drag');
  draggableElement.forEach((draggableElement) => {
    draggableElement.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', draggableElement.textContent);
    });
  });

  const dropElement = document.querySelectorAll('.drop-target');
  dropElement.forEach((dropElement) => {
    dropElement.addEventListener('dragenter', (event) => {
      event.preventDefault();
    });

    dropElement.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    dropElement.addEventListener('drop', onDrop);
  });
});

function onDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const droppedElement = document.getElementById(data);
  const dropTarget = event.target.closest('.drop-target.counter');
  const existingImage = dropTarget.querySelector('.image');

  if (droppedElement && dropTarget && !existingImage) {
    const newImage = document.createElement('img');
    newImage.src = droppedElement.src;
    newImage.alt = droppedElement.alt;
    newImage.classList.add('image');

    dropTarget.appendChild(newImage);

    const gallery = document.getElementById('gallery');
    gallery.removeChild(droppedElement);
  }
}
