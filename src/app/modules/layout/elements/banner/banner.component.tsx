"use client";

import {FC, ReactNode, useState, FormEvent} from 'react'

import HeaderComponent from "@/app/modules/layout/elements/header/header.component"

import Image from 'next/image'
import {Emblem} from "@/app/shared/images";
import {Banner} from "@/app/shared/images";


import styles from './banner.module.scss'
import { styled } from '@mui/material/styles'

import StatisticsBlockComponent from "@/app/shared/components/statistics-block/statistics-block.component";
import {Autocomplete, TextField} from "@mui/material";
import {useRouter} from "next/navigation";

interface Option {
    id: number|null
    label: string
}

interface IBannerProps {
    settings: ReactNode
    areasList: Option[]
    pricesList: Option[]
    categoriesList: Option[]
}

const BannerComponent: FC<Readonly<IBannerProps>> = ({ settings, areasList, pricesList, categoriesList }) => {

    const router = useRouter();

    const [selectedCategory, setSelectedCategory] = useState<Option>(null);
    const [selectedArea, setSelectedArea] = useState<Option>(null);
    const [selectedPrice, setSelectedPrice] = useState<Option>(null);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const queryString =
            'categoryId=' + (selectedCategory ? selectedCategory.id : '')
            + '&area=' + (selectedArea ? selectedArea.id : '')
            + '&price=' + (selectedPrice ? selectedPrice.id : '');

        return router.push(`/search?${queryString}`);
    };

    const CustomTextField = styled(TextField)({
        '& .MuiInputLabel-root': {
            transition: 'all 0.3s ease',
        },
        '& .MuiInputLabel-root.MuiFormLabel-filled': {
            display: 'none',
        },
    });

    return (
        <section
            className={`${styles.sectionFirst} flex flex-col m-auto w-full`}
            style={{background: `url(${Banner.src})`}}
        >

            <HeaderComponent settings={settings}/>

            <div className={`${styles.firstText} flex flex-col`}>
                <h1>
                    Лише <span>актуальні</span><br />офіси в твоєму місті
                </h1>
                <form onSubmit={onSubmit}
                    className={`${styles.containSearch} flex containSearch`}>
                        <div className={`${styles.whiteWrap} flex lg:flex-row flex-col`}>
                            <div className={`${styles.listFiltr} flex items-center justify-between`}>
                                <Autocomplete
                                    disablePortal
                                    options={categoriesList}
                                    sx={{
                                        width: 165,
                                        '& .MuiOutlinedInput-root': {
                                            width: 160,
                                            '& fieldset': {
                                                border: 'none',
                                            },
                                        },
                                    }}
                                    renderInput={(params) =>
                                        <CustomTextField
                                            {...params}
                                            label="Категорія"
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                        />}
                                    name="categoryId"
                                    className=""
                                    onChange={(event, value) => setSelectedCategory(value)}
                                />
                                <div className={styles.line}></div>
                                <Autocomplete
                                    disablePortal
                                    options={areasList}
                                    sx={{
                                        width: 165,
                                        '& .MuiOutlinedInput-root': {
                                            width: 160,
                                            '& fieldset': {
                                                border: 'none',
                                            },
                                        },
                                    }}
                                    renderInput={(params) =>
                                        <CustomTextField {...params}
                                                         label="Площа"
                                                         InputLabelProps={{
                                                             shrink: false,
                                                         }}
                                        />}
                                    name="area"
                                    className=""
                                    onChange={(event, value) => setSelectedArea(value)}
                                />
                                <div className={styles.line}></div>
                                <Autocomplete
                                    disablePortal
                                    options={pricesList}
                                    sx={{
                                        width: 100,
                                        '& .MuiOutlinedInput-root': {
                                            width: 160,
                                            '& fieldset': {
                                                border: 'none',
                                            },
                                        },
                                    }}
                                    renderInput={(params) =>
                                        <CustomTextField {...params}
                                                         label="Ціна"
                                                         InputLabelProps={{
                                                             shrink: false,
                                                         }}
                                        />}
                                    name="price"
                                    className=""
                                    onChange={(event, value) => setSelectedPrice(value)}
                                />
                            </div>
                        </div>
                    <button className={styles.btnSearch} type="submit">
                        Шукати
                    </button>
                </form>
                <div className={`${styles.rowParts} flex sm:flex-row flex-col`}>
                    <StatisticsBlockComponent title="Вільних" count={75040} subtitle="офісів" color="green" />
                    <StatisticsBlockComponent title="Бізнес центрів" count={2508} subtitle="у Києві" color="blue" />
                </div>
                <div className={`${styles.darkBlock} flex sm:flex-row flex-col`}>
                    <Image
                        src={Emblem}
                        alt="icon"
                        width={106}
                        height={84}
                    />
                    <div className="flex flex-col">
                        <h5 className="text-white">Люблінський парк</h5>
                        <h6 className="text-white">15 хв пішки до м “Братиславська”</h6>
                    </div>
                    <button className={styles.darkBtn}>Дізнатися ціни</button>
                </div>
            </div>
        </section>
    )
}

export default BannerComponent
