import React, { useEffect, useRef } from 'react';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LocalBasemapsSource from '@arcgis/core/widgets/BasemapGallery/support/LocalBasemapsSource';
import baseMaps from '../../../configs/basemapConfig';
import { view } from '../../../hooks/MapProvider';

const BaseMapGalery = () => {
  const refBaseMapGalery = useRef(null);

  useEffect(() => {
    const localSource = new LocalBasemapsSource({
      basemaps: baseMaps,
    });
    new BasemapGallery({
      view,
      source: localSource,
      container: refBaseMapGalery.current,
    });
  }, []);
  return <div className="basemap-galery" ref={refBaseMapGalery} />;
};

export default BaseMapGalery;
