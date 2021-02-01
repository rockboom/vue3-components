<template>
    <app-navigator defaultPath="normal/button">
    <div>
        <AppNavigatorPage/>
    </div>
    </app-navigator>
</template>

<script>
import { AppNavigator } from './components/navigator/app-navigator.tsx'
import { AppNavigatorPage } from './components/navigator/app-navigator-page'
export default {
    name: 'App',
    components: {
        AppNavigator,
        AppNavigatorPage,
    },
}
</script>

<style>
</style>