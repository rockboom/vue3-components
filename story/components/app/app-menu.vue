<template>
    <div class="app-menu-list">
        <ul>
            <li v-for="menuGroup in menu" :key="menuGroup.name">
                <div class="app-menu-group-name">
                    <span>{{ menuGroup.name }}</span>
                </div>
                <ul>
                    <li
                        v-for="menu in menuGroup.children"
                        :key="menu.title"
                        @click="handleClickMenu(menu)"
                        :class="{ 'app-menu-active': currentPath }"
                    >
                        <div class="app-menu-name">
                            <span>{{ menu.name }}</span>
                            <span>{{ menu.title }}</span>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { injectAppNavigator } from '../navigator/app-navigator'
import { AppMenu, MENUS } from './menus'
export default {
    name: 'app-menu',
    props: {
        currentPath: { type: String },
    },
    setup() {
        const navigator = injectAppNavigator()

        return {
            menu: MENUS,
            handleClickMenu: (menu: AppMenu) => {
                navigator.methods.go(menu.page)
            },
        }
    },
}
</script>

<style>
</style>