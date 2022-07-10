document.addEventListener('DOMContentLoaded', () => {
  const $lazyImages = document.querySelectorAll(".lazy");

  const setImageSrc = (entries, observer)=> {
    entries.forEach(entry=> {
      if (entry.isIntersecting) {
        const $target = entry.target;
        $target.src = $target.dataset.src;
        $target.srcset = $target.dataset.srcset;
        $target.classList.remove('lazy');
        observer.unobserve($target);
      }
    });
  }
  
  const options = {
    root: null,
    rootMargin: "20px 0px",
    threshold: 0
  }

  const lazyImagesObserver = new IntersectionObserver(setImageSrc, options)
  $lazyImages.forEach($lazyImage => lazyImagesObserver.observe($lazyImage))
})



