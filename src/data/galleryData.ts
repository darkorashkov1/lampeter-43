export interface GalleryCategory {
  id: string;
  titleKey: string;
  displayUrl: string;
  images: { url: string; caption?: string }[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'living_room',
    titleKey: 'Living Room',
    displayUrl: 'images/living_room/living_room_2.avif',
    images: [
      { url: 'images/living_room/living_room_1.avif' },
      { url: 'images/living_room/living_room_2.avif' },
      { url: 'images/living_room/living_room_3.avif' },
      { url: 'images/living_room/living_room_4.avif' },
      { url: 'images/living_room/living_room_5.avif' },
      { url: 'images/living_room/living_room_6.avif' },
      { url: 'images/living_room/tv_1.avif' },
      { url: 'images/living_room/tv_2.avif' },
      { url: 'images/living_room/tv_3.avif' },
    ]
  },
  {
    id: 'bedroom',
    titleKey: 'Bedroom',
    displayUrl: 'images/bedroom/bedroom_6.avif',
    images: [
      { url: 'images/bedroom/bedroom_1.avif' },
      { url: 'images/bedroom/bedroom_2.avif' },
      { url: 'images/bedroom/bedroom_3.avif' },
      { url: 'images/bedroom/bedroom_4.avif' },
      { url: 'images/bedroom/bedroom_5.avif' },
      { url: 'images/bedroom/bedroom_6.avif' },
      { url: 'images/bedroom/bedroom_7.avif' },
      { url: 'images/bedroom/bedroom_8.avif' },
      { url: 'images/bedroom/bedroom_9.avif' },
      { url: 'images/bedroom/bedroom_10.avif' },
    ]
  },
  {
    id: 'kitchen',
    titleKey: 'Kitchen',
    displayUrl: 'images/kitchen/kitchen_1.avif',
    images: [
      { url: 'images/kitchen/kitchen_1.avif' },
      { url: 'images/kitchen/kitchen_2.avif' },
      { url: 'images/kitchen/sink.avif' },
      { url: 'images/kitchen/washing_machine.avif' },
      { url: 'images/kitchen/microwave.avif' },
      { url: 'images/kitchen/kitchen_bin.avif' },
      { url: 'images/kitchen/amenities.avif' },
      { url: 'images/kitchen/cabinet_1.avif' },
      { url: 'images/kitchen/cabinet_2.avif' },
      { url: 'images/kitchen/cabinet_3.avif' },
      { url: 'images/kitchen/cabinet_4.avif' },
    ]
  },
  {
    id: 'bathroom',
    titleKey: 'Bathroom',
    displayUrl: 'images/bathroom/bathroom_2.avif',
    images: [
      { url: 'images/bathroom/bathroom_1.avif' },
      { url: 'images/bathroom/bathroom_2.avif' },
      { url: 'images/bathroom/bathroom_3.avif' },
      { url: 'images/bathroom/bathroom_4.avif' },
      { url: 'images/bathroom/bathroom_5.avif' },
      { url: 'images/bathroom/bathroom_6.avif' },
      { url: 'images/bathroom/bathroom_7.avif' },
    ]
  },
  {
    id: 'storage',
    titleKey: 'Storage',
    displayUrl: 'images/storage/storage_1.avif',
    images: [
      { url: 'images/storage/storage_1.avif' },
      { url: 'images/storage/storage_2.avif' },
      { url: 'images/storage/storage_3.avif' },
      { url: 'images/storage/storage_4.jpeg' },
      { url: 'images/storage/storage_5.avif' },
      { url: 'images/storage/storage_6.avif' },
      { url: 'images/storage/storage_7.avif' },
    ]
  },
  {
    id: 'exterior',
    titleKey: 'Exterior & Nearby',
    displayUrl: 'images/exterior/exterior_1.avif',
    images: [
      { url: 'images/exterior/exterior_1.avif' },
      { url: 'images/exterior/exterior_2.avif' },
      { url: 'images/exterior/exterior_3.avif' },
      { url: 'images/exterior/exterior_4.avif' },
      { url: 'images/exterior/exterior_5.webp' },
      { url: 'images/exterior/exterior_6.avif' },
      { url: 'images/exterior/exterior_7.avif' },
      { url: 'images/exterior/exterior_8.avif' },
      { url: 'images/exterior/exterior_9.avif' },
      { url: 'images/exterior/exterior_view_balcony.avif' },
    ]
  }
];