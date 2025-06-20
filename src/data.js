export const projects = [
  {
    id: 1,
    title: "Epic Short Film",
    description: "A short film showcasing dramatic editing...",
    videoUrl: "/videos/short_film.mp4", // Path from public/
    thumbnailUrl: "/thumbnails/short_film_thumb.jpg", // Path from public/
    position: [2, 0, 0], // 3D position in the scene
    rotation: [0, Math.PI / 8, 0], // 3D rotation (optional)
  },
  {
    id: 2,
    title: "Client Promo",
    description: "Fast-paced promo video for X brand...",
    videoUrl: "/videos/promo.mp4",
    thumbnailUrl: "/thumbnails/promo_thumb.jpg",
    position: [-2, 1, -3],
    rotation: [0, -Math.PI / 6, 0],
  },
  // Add more projects...
];
