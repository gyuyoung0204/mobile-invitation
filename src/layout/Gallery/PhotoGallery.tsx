import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  return (
    <Gallery
      options={{
        zoom: false,
        maxZoomLevel: 1,
        wheelToZoom: false,
        clickToCloseNonZoomable: true,
      }}
    >
      <div className="gallery-grid">
        {images.map((image, index) => (
          <Item
            key={index}
            cropped
            original={image.source}
            thumbnail={image.source}
            width={image.width}
            height={image.height}
          >
            {({ ref, open }) => (
              <img
                className="gallery-item"
                alt={image.alt}
                src={image.source}
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open}
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
