
import { FC, useRef } from 'react';
import styles from './input-dropdown.module.scss'

interface InputDropdownProps {
    value: string;
    placeholder: string;
    showList: boolean;
    setShowList: (show: boolean) => void;
    setValue: (value: string) => void;
    options: string[];
    onSelect: (value: string) => void;
}

const InputDropdownComponent: FC<InputDropdownProps> = ({ value, placeholder, showList, setShowList, setValue, options, onSelect }) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div ref={ref} className={`${styles.listFiltr} flex items-center justify-between`}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                onFocus={() => setShowList(true)}
            />
            {value && (
                <button type="button" onClick={() => setValue('')}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9 9M1 9L9 1" stroke="#BFBFBF" strokeWidth="2" />
                    </svg>
                </button>
            )}
            <button type="button" onClick={() => setShowList(!showList)}>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.00001 4.28145L8.30001 0.981445L9.24267 1.92411L5.00001 6.16678L0.757339 1.92411L1.70001 0.981445L5.00001 4.28145Z"
                        fill="#BFBFBF" />
                </svg>
            </button>
            {showList && options.length > 0 && (
                <ul className={`${styles.dropdownList}`}>
                    {options.filter(item => item.toLowerCase().startsWith(value.toLowerCase())).map((item, index) => (
                        <li key={index} onClick={() => onSelect(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default InputDropdownComponent;
