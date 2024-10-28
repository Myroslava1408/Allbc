import { ReactNode } from 'react';

import '@/styles/globals.scss';

import { RootLayoutComponent } from '@/app/modules/layout';
import { mainFont } from '@/fonts';

interface ISetting {
  id: number;
}

interface ProvidersProps {
  children: ReactNode;
}

const Providers: ({
  children,
}: ProvidersProps) => Promise<JSX.Element> = async ({ children }) => {
  const settings: ISetting[] = [];

  const renderSettings = () => {
    return settings.map((setting) => <div key={setting.id}></div>);
  };

  return (
    <html>
      <body className={mainFont.className}>
        <RootLayoutComponent settings={renderSettings()}>
          {children}
        </RootLayoutComponent>
      </body>
    </html>
  );
};

export default Providers;
