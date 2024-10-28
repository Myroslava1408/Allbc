import Image from 'next/image';

import React, { FC } from 'react';

import { Facebook, Instagram, Linkedin, Twiter } from '@/app/shared/images';

const SocialsComponent: FC = () => {
  const icons = {
    Instagram: Instagram,
    Facebook: Facebook,
    Twiter: Twiter,
    Linkedin: Linkedin,
  };

  return (
    <div className="flex pt-3 gap-2">
      {icons && typeof icons === 'object' && Object.keys(icons).length > 0 ? (
        Object.entries(icons).map(([icon, iconSrc]) => (
          <button key={icon}>
            <Image src={iconSrc.src} alt="icon" width={32} height={32} />
          </button>
        ))
      ) : (
        <p>Немає доступних іконок</p>
      )}
    </div>
  );
};

export default SocialsComponent;
