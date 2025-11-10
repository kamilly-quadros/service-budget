import Filter from "@/components/Filter"
import { createDrawerNavigator, DrawerScreenProps } from "@react-navigation/drawer"

export type DrawerRoutesList = {
    filter: undefined
}
export type DrawerRoutesProps<T extends keyof DrawerRoutesList> = DrawerScreenProps<DrawerRoutesList, T>
const Drawer = createDrawerNavigator<DrawerRoutesList>()
export function DrawerRoutes() {
    return (
        <Drawer.Navigator
            initialRouteName="filter"
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="filter" component={Filter}/>
        </Drawer.Navigator>
    )
}