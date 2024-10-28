'use client';

import Image from 'next/image';

interface BannerRightProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  inputPlaceholder?: string;
  onButtonClick: () => void;
  secondButtonText?: string;
  iconSrc?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  buttonClassName?: string;
  secondButtonClassName?: string;
  inputClassName?: string;
  style?: React.CSSProperties & { [key: string]: string };
}

const BannerRightComponent: React.FC<BannerRightProps> = ({
  title,
  subtitle,
  buttonText,
  inputPlaceholder,
  onButtonClick,
  secondButtonText,
  iconSrc,
  containerClassName = '',
  titleClassName = '',
  buttonClassName = '',
  secondButtonClassName = '',
  inputClassName = '',
  style,
}) => {
  return (
    <div
      className={`${containerClassName} flex flex-col items-center justify-center`}
      style={style}
    >
      <div className="flex m-auto flex-col items-center justify-center gap-6">
        <h4
          className={`${titleClassName} text-white text-2xl font-bold leading-8`}
        >
          {title}
        </h4>
        {subtitle && (
          <h6 className="text-white font-medium text-sm text-center">
            {subtitle}
          </h6>
        )}
        <div className="flex flex-col p-3 gap-2">
          {inputPlaceholder && (
            <input
              type="email"
              name="email"
              placeholder={inputPlaceholder}
              className={inputClassName}
            />
          )}
          <button className={`${buttonClassName}`} onClick={onButtonClick}>
            {buttonText}
          </button>
          {secondButtonText && (
            <button
              className={`${secondButtonClassName} flex gap-2.5 text-white`}
            >
              {secondButtonText}
              {iconSrc && (
                <Image src={iconSrc} alt="icon" width={20} height={20} />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerRightComponent;
