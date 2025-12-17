// import React, { useEffect, useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import type { EmblaCarouselType } from "embla-carousel";
// import "./embla.css";

// const EmblaCarousel: React.FC = () => {
//   // 👇 Slides array ab yahi par hai
//   const slides = [
//     "https://picsum.photos/id/1018/600/400",
//     "https://picsum.photos/id/1015/600/400",
//     "https://picsum.photos/id/1019/600/400",
//     "https://picsum.photos/id/1020/600/400",
//   ];

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: "center" },
//     [Autoplay({ delay: 3000 })]
//   );

//   const applyScale = useCallback((embla: EmblaCarouselType) => {
//     const nodes = embla.slideNodes();
//     const snaps = embla.scrollSnapList();
//     const scrollProgress = embla.scrollProgress();

//     nodes.forEach((slide, index) => {
//       const distance = Math.abs(scrollProgress - snaps[index]);
//       const scale = Math.max(0.8, 1 - distance * 0.15);
//       slide.style.transform = `scale(${scale})`;
//       slide.style.zIndex = `${100 - Math.round(distance * 10)}`;
//     });
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;
//     applyScale(emblaApi);

//     emblaApi.on("scroll", () => applyScale(emblaApi));
//     emblaApi.on("resize", () => applyScale(emblaApi));
//   }, [emblaApi, applyScale]);

//   const scrollPrev = () => emblaApi?.scrollPrev();
//   const scrollNext = () => emblaApi?.scrollNext();

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((src, i) => (
//             <div className="embla__slide" key={i}>
//               <img className="embla__slide__img" src={src} alt={`slide-${i}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="embla__buttons">
//         <button onClick={scrollPrev} className="embla__prev">Prev</button>
//         <button onClick={scrollNext} className="embla__next">Next</button>
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;
