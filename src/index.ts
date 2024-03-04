/**
 * Init zoom container
 * @param container
 */
function initElementZoom(container: HTMLElement) {
  let active = false;
  const trigger: string | undefined =
    container.dataset.jeziTrigger != undefined
      ? container.dataset.jeziTrigger
      : "click";
  const largeImageUrl: string | undefined = container.dataset.jeziSrc;
  const largeImageContainer: HTMLDivElement = document.createElement("div");

  container.style.cursor = "zoom-in";

  largeImageContainer.className = "jezi-big-image";
  largeImageContainer.style.position = "absolute";
  largeImageContainer.style.top = "0";
  largeImageContainer.style.left = "0";
  largeImageContainer.style.opacity = "0";
  largeImageContainer.style.width = "100%";
  largeImageContainer.style.height = "100%";
  largeImageContainer.style.transition = "all .3s";
  largeImageContainer.style.pointerEvents = "none";
  largeImageContainer.style.backgroundColor = "#FFFFFF";
  largeImageContainer.style.backgroundImage = `url(${largeImageUrl})`;

  container.appendChild(largeImageContainer);

  const handleMouseMove = (event: any) => {
    if (active) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const containerRect = largeImageContainer.getBoundingClientRect();
      const offsetX = mouseX - containerRect.left;
      const offsetY = mouseY - containerRect.top;

      const percentageX = (offsetX / containerRect.width) * 100;
      const percentageY = (offsetY / containerRect.height) * 100;

      largeImageContainer.style.backgroundPosition = `${percentageX}% ${percentageY}%`;
    }
  };

  const handleImageEnter = (event: any) => {
    active = !active;
    if (active) {
      if (trigger === "click") {
        container.style.cursor = "zoom-out";
      } else {
        // trigger === hover
        container.style.cursor = "crosshair";
      }
      largeImageContainer.style.opacity = "1";
      largeImageContainer.style.transition = "";

      handleMouseMove(event);
    } else {
      handleImageLeave();
    }
  };

  const handleImageLeave = () => {
    active = false;
    container.style.cursor = "zoom-in";
    largeImageContainer.style.opacity = "0";
    largeImageContainer.style.transition = "all .3s";
  };

  if (trigger === "click") {
    container.addEventListener("click", handleImageEnter);
  } else {
    // trigger === hover
    container.addEventListener("mouseenter", handleImageEnter);
  }
  container.addEventListener("mouseleave", handleImageLeave);
  container.addEventListener("mousemove", handleMouseMove);
}

/**
 * Just Easy Zoom for Images
 */
const jezi = () => {
  const elements: NodeListOf<HTMLElement> =
    document.querySelectorAll("[data-jezi-src]");

  elements.forEach((el) => {
    initElementZoom(el);
  });
};

export default jezi;

export { jezi };
