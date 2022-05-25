import React from 'react';

import * as Style from './Style';

interface IContent {
  children: React.ReactElement;
}

export const Content = ({ children }: IContent): JSX.Element => (
  <Style.MainComponent>{children}</Style.MainComponent>
);
