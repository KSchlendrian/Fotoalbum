document.addEventListener('DOMContentLoaded', function () {
  const imageSources = ['./images/alpakas.jpg', './images/eichhoernchen.jpg', './images/elefanten.jpg', './images/esel.jpg', './images/eule.jpg', './images/frosch.jpg', './images/gecko.jpg', './images/geparden.jpg', './images/kaninchen.jpg', './images/lamas.jpg', './images/makaks.jpg', './images/mobs.jpg', './images/nilpferde.jpg', './images/panda.jpg', './images/papagei.jpg', './images/seehund.jpg', './images/tucan.jpg', './images/wolf.jpg'];

  const gallery = document.getElementById('gallery');

  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');

  function showImagesForPage(pageIndex, imagesPerPage) {
    gallery.innerHTML = '';

    const startIndex = pageIndex * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    for (let i = startIndex; i < endIndex && i < imageSources.length; i++) {
      const img = document.createElement('img');
      img.classList.add('image');
      img.src = imageSources[i];
      img.alt = `Image ${i + 1}`;
      gallery.appendChild(img);
    }
  }

  showImagesForPage(0, 8);

  let currentPage = 0;

  nextPageButton.addEventListener('click', function () {
    currentPage++;
    showImagesForPage(currentPage, 8);
  });
  prevPageButton.addEventListener('click', function () {
    if (currentPage > 0) {
      currentPage--;
      showImagesForPage(currentPage, 8);
    }
  });
});
