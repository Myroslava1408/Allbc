import { NextPage } from 'next'
import FirstSectionComponent from "@/app/modules/layout/elements/firstSection/firstSection.component";


const Page: NextPage = async () => {
    const settings = {};
   return (
       <>
           <FirstSectionComponent settings={settings} />
       </>
   )
}

export default Page
