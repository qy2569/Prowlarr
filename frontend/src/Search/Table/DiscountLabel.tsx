import React from 'react';
import Label from 'Components/Label';
import { kinds } from 'Helpers/Props';

interface DiscountLabelProps {
  downloadVolumeFactor?: number;
}

function DiscountLabel({ downloadVolumeFactor }: DiscountLabelProps) {
  if (downloadVolumeFactor == null) {
    return null;
  }

  const label =
    downloadVolumeFactor === 0
      ? 'free'
      : `${Math.round((1 - downloadVolumeFactor) * 100)}%`;

  return <Label kind={kinds.PRIMARY}>{label}</Label>;
}

export default DiscountLabel;
