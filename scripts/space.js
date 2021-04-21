const headline = document.getElementById('headline');
const strapline = document.getElementById('strapline');
const straplineTwo = document.getElementById('strapline-two');
const straplineThree = document.getElementById('strapline-three');

const ship = document.getElementById('space-ship');
const planet = document.getElementById('space-planet');
const alien = document.getElementById('space-alien');

const star001 = document.getElementById('star-001');
const star002 = document.getElementById('star-002');
const star003 = document.getElementById('star-003');
const star004 = document.getElementById('star-004');

gsap.set(
  [
    headline,
    strapline,
    straplineTwo,
    straplineThree,
    ship,
    planet,
    alien,
    star001,
    star002,
    star003,
    star004,
  ],
  {
    autoAlpha: 0,
  },
);

const headlineReveal = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    headline,
    {
      x: 40,
      y: 255,
      autoAlpha: 0,
    },
    {
      x: 40,
      y: -95,
      duration: 2,
      ease: 'back.inOut(1.7)',
      autoAlpha: 1,
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
      ease: 'circ.inOut',
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
      x: 430,
      y: 40,
      autoAlpha: 1,
      rotate: 0,
      transformOrigin: '50% 50%',
    },
    {
      x: 430,
      y: 40,
      rotate: 360,
      duration: 180,
      transformOrigin: '50% 50%',
      autoAlpha: 1,
      repeat: -1,
    },
  );
  return tl;
};

planetSpin();

const alienPop = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    alien,
    {
      autoAlpha: 0,
      x: 110,
      y: 255,
      scaleX: 0.5,
      scaleY: 0.5,
    },
    {
      x: 110,
      y: 185,
      autoAlpha: 1,
      duration: 1,
      scaleX: 0.5,
      scaleY: 0.5,
      ease: 'back.inOut(3)',
    },
  );
  return tl;
};

const starA = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    star001,
    {
      x: 100,
      y: 160,
      scaleX: 0.1,
      scaleY: 0.1,
      autoAlpha: 0.5,
    },
    {
      x: 100,
      y: 160,
      scaleX: 0.1,
      scaleY: 0.1,
      autoAlpha: 0.1,
      duration: 1.5,
      repeat: -1,
      repeatDelay: 2,
      ease: 'bounce.out',
    },
  );
  return tl;
};
starA();

const starB = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    star002,
    {
      x: 190,
      y: 190,
      scaleX: 0.1,
      scaleY: 0.1,
      autoAlpha: 0.5,
    },
    {
      x: 190,
      y: 190,
      scaleX: 0.1,
      scaleY: 0.1,
      autoAlpha: 0.1,
      duration: 1.5,
      repeat: -1,
      repeatDelay: 2.5,
      ease: 'back.out(1.7)',
    },
  );
  return tl;
};
starB();

const starC = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    star003,
    {
      x: 320,
      y: 130,
      scaleX: 0.1,
      scaleY: 0.1,
      autoAlpha: 0.6,
    },
    {
      x: 320,
      y: 130,
      scaleX: 0.1,
      scaleY: 0.1,
      autoAlpha: 0.1,
      duration: 2,
      repeat: -1,
      repeatDelay: 3,
      ease: 'elastic.out(1, 0.3)',
    },
  );
  return tl;
};
starC();

const shootingStar = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    star004,
    {
      x: -10,
      y: -10,
      scaleX: 0.1,
      scaleY: 0.1,
      autoAlpha: 0,
    },
    {
      x: 240,
      y: 180,
      scaleX: 0,
      scaleY: 0,
      autoAlpha: 1,
      duration: 3,
    },
  );
  return tl;
};

const master = gsap.timeline({ repeat: 0 });

// Stars
master.add(shootingStar());

// Planet spin
// master.add(planetSpin(), '-=4');

// Text
master.add(headlineReveal(), '-=3');
master.add(straplineReveal(), '+=0.5');
master.add(straplineTwoReveal(), '+=0.5');
master.add(straplineThreeReveal(), '+=0.5');

// Ship in
master.add(shipLand(), '-=8');

// Alien pop up
master.add(alienPop());
