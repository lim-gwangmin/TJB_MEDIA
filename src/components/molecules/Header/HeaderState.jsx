import React from 'react';

import { LogoButton } from '@components/atoms/Button';
import { HeaderTitle } from '@components/atoms/Title';

export default function HeaderState({ title, titleAlign }) {
  return <>{title ? <HeaderTitle titleAlign={titleAlign}>{title}</HeaderTitle> : <LogoButton />}</>;
}
