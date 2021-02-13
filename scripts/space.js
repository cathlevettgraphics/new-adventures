const headline = document.getElementById("headline");
const strapline = document.getElementById("strapline");
const straplineTwo = document.getElementById("strapline-two");
const straplineThree = document.getElementById("strapline-three");

const ship = document.getElementById("space-ship");
const planet = document.getElementById("space-planet");
const alien = document.getElementById("space-alien");

const headlineReveal = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    headline,
    {
      x: 40,
      y: 255,
    },
    {
      x: 40,
      y: -95,
      duration: 2,
      ease: "back.inOut(1.7)",
    },
  );
  return tl;
};

const straplineReveal = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    strapline,
    {
      x: 40,
      y: -90,
      autoAlpha: 0,
    },
    {
      x: 40,
      y: -90,
      duration: 1.2,
      autoAlpha: 1,
      // ease: 'back.inOut(3)',
    },
  );
  return tl;
};

const straplineTwoReveal = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    straplineTwo,
    {
      x: 40,
      y: -75,
      autoAlpha: 0,
    },
    {
      x: 40,
      y: -75,
      duration: 1.2,
      autoAlpha: 1,
      // ease: 'back.inOut(3)',
    },
  );
  return tl;
};

const straplineThreeReveal = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    straplineThree,
    {
      x: 40,
      y: -60,
      autoAlpha: 0,
    },
    {
      x: 40,
      y: -60,
      duration: 1.2,
      autoAlpha: 1,
      // ease: 'back.inOut(1.7)',
    },
  );
  return tl;
};

const shipLand = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    ship,
    {
      autoAlpha: 1,
      x: 370,
      y: -600,
    },
    {
      ease: "circ.inOut",
      x: 370,
      y: 10,
      duration: 3,
    },
  );
  return tl;
};

const planetSpin = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    planet,
    {
      x: 435,
      y: 50,
      rotate: -38,
    },
    {
      x: 435,
      y: 50,
      rotate: 0,
      duration: 5,
      ease: "power3.inOut",
    },
  );
  return tl;
};

const alienPop = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    alien,
    {
      autoAlpha: 0,
      x: 110,
      y: 255,
    },
    {
      x: 110,
      y: 185,
      autoAlpha: 1,
      duration: 1,
      ease: "back.inOut(3)",
    },
  );
  return tl;
};

const master = gsap.timeline({ repeat: 0 });

// Planet spin
master.add(planetSpin());

// Text
master.add(headlineReveal(), "-=3");
master.add(straplineReveal(), "+=1");
master.add(straplineTwoReveal(), "+=1");
master.add(straplineThreeReveal(), "+=1");

// Ship in
master.add(shipLand(), "-=9");

// Alien pop up
master.add(alienPop(), "+=2");
