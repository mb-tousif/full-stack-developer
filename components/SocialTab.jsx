import React, {useState} from "react";
import { Box } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import { EditIcon } from '@mui/icons-material';

const actions = [
  { icon: <Link href={"https://github.com/mb-tousif"}><BsGithub /></Link>, name: 'Github' },
  // { icon: <SaveIcon />, name: 'Save' },
  // { icon: <PrintIcon />, name: 'Print' },
  // { icon: <ShareIcon />, name: 'Share' },
];

export default function SocialTab() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 , position: "relative"}}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}
