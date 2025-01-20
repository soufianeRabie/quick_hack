import {TimerIcon} from "lucide-react";
import {IconChecklist, IconLayoutDashboard} from "@tabler/icons-react";


export const GlobalSideLinks = [
  {
    title: 'manage users',
    label: '2',
    href: 'manageUsers',
    icon: <IconChecklist size={18} />,
  },

  // {
  //   title: 'Pharmacies',
  //   label: '3',
  //   href: 'pharmacies',
  //   icon: <IconChecklist size={18} />,
  // },

  {
    title: 'budget line',
    label: '3',
    href: 'ligne_budgetaire',
    icon: <IconChecklist size={18} />,
  },



  // {
  //   title: 'Pharmacies',
  //   label: '3',
  //   href: 'pharmacies',
  //   icon: <IconChecklist size={18} />,
  // },
  //
  // {
  //   title: 'medicaments',
  //   label: '3',
  //   href: 'medicaments',
  //   icon: <IconChecklist size={18} />,

]


export const EngagedSideLinks = [
  // {
  //   title: 'events',
  //   label: '3',
  //   href: 'events',
  //   icon: <IconChecklist size={18} />,
  // },
]

export const SuperAdminSideLinks = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard size={18} />,
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
    title: 'getAnalysis',
    label: '3',
    href: 'getAnalysis',
    icon: <IconChecklist size={18} />,
  },
    {
        title: 'chatbot',
        label: '4',
        href: 'chatbot',
        icon: <IconChecklist size={18} />,
    },
    {
        title: 'notifications',
        label: '3',
        href: 'notifications',
        icon: <IconChecklist size={18} />,
    },
    {
        title: 'payment',
        label: '1',
        href: 'payment',
        icon: <IconChecklist size={18} />,
    },

    {
        title: 'expenses',
        label: '2',
        href: 'DEP_MARCHE',
        icon: <IconChecklist size={18} />,
    },
    {
        title: 'budget Manager',
        label: '6',
        href: 'Budget_Manager',
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
  // {
  //   title: 'modules',
  //   label: '3',
  //   href: 'modules',
  //   icon: <IconChecklist size={18} />,
  // },
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
    case 'engaged':
      return EngagedSideLinks

    default :
      return GlobalSideLinks
  }
}
