'use client';

import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <div>{t('hello')}</div>
    </main>
  );
}
