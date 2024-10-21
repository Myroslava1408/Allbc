import React, { FC } from 'react'
import { Facebook } from '@/app/shared/images'
import { Twiter } from '@/app/shared/images'
import { Linkedin } from '@/app/shared/images'
import { Instagram } from '@/app/shared/images'
import Image from "next/image"


const SocialsComponent: FC = () => {

  const icons =  {
        Instagram: Instagram,
        Facebook: Facebook,
        Twiter: Twiter,
        Linkedin: Linkedin
    }

    return (
        <div className="flex pt-3 gap-2">
            {Object.entries(icons).map(([icon, iconSrc]) => (
                <button key={icon}>
                    <Image
                        src={iconSrc.src}
                        alt="icon"
                        width={32}
                        height={32}
                    />
                </button>
            ))}
        </div>
    )
}

export default SocialsComponent