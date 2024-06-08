import {TimerIcon} from "lucide-react";
import {IconChecklist, IconLayoutDashboard} from "@tabler/icons-react";


export const GlobalSideLinks = [
  {
    title: 'emploi',
    label: '3',
    href: 'emploi',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'manage users',
    label: '3',
    href: 'manageUsers',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'Pharmacies',
    label: '3',
    href: 'pharmacies',
    icon: <IconChecklist size={18} />,
  },
]


export const SuperAdminSideLinks = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Groups',
    label: '',
    href: 'groups',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'Trainers',
    label: '',
    href: 'trainers',
    icon: <TimerIcon size={18} />,
  },
  {
    title: 'Rooms',
    label: '3',
    href: 'rooms',
    icon: <IconChecklist size={18} />,
  },



  {
    title: 'Filieres',
    label: '3',
    href: 'filieres',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'Sectors',
    label: '3',
    href: 'sectors',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'modules',
    label: '3',
    href: 'modules',
    icon: <IconChecklist size={18} />,
  },
]

export const AdminSideLinks = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Groups',
    label: '',
    href: 'groups',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'Trainers',
    label: '',
    href: 'trainers',
    icon: <TimerIcon size={18} />,
  },
  {
    title: 'Rooms',
    label: '3',
    href: 'rooms',
    icon: <IconChecklist size={18} />,
  },
  // {
  //     title: 'Filieres',
  //     label: '3',
  //     href: 'filieres',
  //     icon: <IconChecklist size={18} />,
  // },
  // {
  //     title: 'Sectors',
  //     label: '3',
  //     href: 'sectors',
  //     icon: <IconChecklist size={18} />,
  // },
  {
    title: 'modules',
    label: '3',
    href: 'modules',
    icon: <IconChecklist size={18} />,
  },
]
export const sidelinks =  (role)=>
{
  switch (role)
  {
    case 'admin':
      return [GlobalSideLinks , AdminSideLinks].flat()
    case 'superAdmin':
      return [GlobalSideLinks , SuperAdminSideLinks].flat()
    case 'user':
      return GlobalSideLinks
  }
}
