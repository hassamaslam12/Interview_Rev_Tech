import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'cities',
        path: '/all-cities',
        title: 'All Cities',
        translateKey: 'allcities',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'addNewCity',
        path: '/add-new-city',
        title: 'Add New City',
        translateKey: 'addNewCity',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    
]

export default navigationConfig
