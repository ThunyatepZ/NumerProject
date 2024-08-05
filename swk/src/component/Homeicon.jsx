import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import * as React from 'react';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsSize() {
  return (
    <Stack direction="row" spacing={3} alignItems="flex-end">
      <HomeIcon sx={{ fontSize: 40 }} />
    </Stack>
  );
}
