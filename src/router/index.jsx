import {createBrowserRouter} from 'react-router-dom'
import UserLogin from "@/pages/Auth/Login.jsx";
// import UserLogin from "@/pages/Auth/Login.jsx";


const router = createBrowserRouter([
    {

        path: '/',
        lazy: async () => {
            const AppShell = await import('../components/app-shell.jsx')
            return { Component: AppShell.default }
        },
        children: [
            {
                index: true,
                lazy: async () => ({
                    Component: (await import('../pages/Dahsboard/index.jsx')).default,
                }),
            },
            {
                path: '/manageUsers',
                lazy: async () => ({
                    Component: (await import('../pages/Users/index.jsx')).default,
                }),
            },

            {
                path: '/medicaments',
                lazy: async () => ({
                    Component: (await import('../pages/Medicament/index.jsx')).default,
                }),
            },

            {
                path: '/ligne_budgetaire',  // Renamed to match the previous naming
                lazy: async () => ({
                    Component: (await import('../pages/Medicament/index.jsx')).default,
                }),
            },

            {
                path: '/pharmacies',
                lazy: async () => ({
                    Component: (await import('../pages/New/index.jsx')).default,
                }),
            },
            {
                path: '/payment',
                lazy: async () => ({
                    Component: (await import('../pages/payement/index.jsx')).default,
                }),
            },
            {
                path: '/notifications',
                lazy: async () => ({
                    Component: (await import('../pages/Dahsboard/Notifications.jsx')).default,
                }),
            },
            {
                path: '/chatbot',
                lazy: async () => ({
                    Component: (await import('../pages/Dahsboard/CahtBot.jsx')).default,
                }),
            },

            {
                path: '/getAnalysis',
                lazy: async () => ({
                    Component: (await import('../pages/DEPMARCHES/Analysis.jsx')).default,
                }),
            },
            {
                path: '/events',
                lazy: async () => ({
                    Component: (await import('../pages/Event/index.jsx')).default,
                }),
            },
            {
                path: '/DEP_MARCHE',
                lazy: async () => ({
                    Component: (await import('../pages/DEPMARCHES/index.jsx')).default,
                }),
            },
            {
                path: '/Budget_Manager',
                lazy: async () => ({
                    Component: (await import('../pages/Budget/index.jsx')).default,
                }),
            },
            // {
            //     path: '/groups',
            //     lazy: async () => ({
            //         Component: (await import('../pages/group/index.jsx')).default,
            //     }),
            // },
            // {
            //     path: '/trainers',
            //     lazy: async () => ({
            //         Component: (await import('../pages/trainer/index.jsx')).default,
            //     }),
            // },
            // {
            //     path: '/rooms',
            //     lazy: async () => ({
            //         Component: (await import('../pages/room/index.jsx')).default,
            //     }),
            // },
            // {
            //     path: '/filieres',
            //     lazy: async () => ({
            //         Component: (await import('../pages/filiere/index.jsx')).default,
            //     }),
            // },
            // {
            //     path: '/sectors',
            //     lazy: async () => ({
            //         Component: (await import('../pages/sectors/index.jsx')).default,
            //     }),
            // },
            // {
            //     path: '/modules',
            //     lazy: async () => ({
            //         Component: (await import('../pages/modules/index.jsx')).default,
            //     }),
            // },
            // {
            //     path: 'dashboard/timeTables',
            //     lazy: async () => ({
            //         Component: (await import('../pages/Dahsboard/VariousTimeTables.jsx')).default,
            //     }),
            // },

        ],
    },
    {
        path:'login',
         element: <UserLogin/>
    }
])
export default router
