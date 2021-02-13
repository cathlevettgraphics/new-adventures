const astro = document.getElementById('astronaut');

const spaceWalk = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    astro,
    {
      x: 5,
      y: 8,
      rotate: 0,
    },
    {
      x: 10,
      y: 15,
      yoyo: true,
      repeat: -1,
      ease: 'back.inOut(3)',
      duration: 3,
      rotate: 8,
    },
  );
  return tl;
};

spaceWalk();
