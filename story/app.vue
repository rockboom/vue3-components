<template>
    <app-navigator defaultPath="normal/button">
        <article class="app-home">
            <section class="app-header">
                app-header
            </section>
            <section class="app-menu">
                <app-menu/>
            </section>
            <section class="app-content">
                <AppNavigatorPage/>
            </section>
        </article>
    </app-navigator>
</template>

<script>
import { AppNavigator } from './components/navigator/app-navigator.tsx'
import { AppNavigatorPage } from './components/navigator/app-navigator-page'
import AppMenu from './components/app/app-menu'
export default {
    name: 'App',
    components: {
        AppNavigator,
        AppNavigatorPage,
        AppMenu
    },
}
</script>

<style lang="scss">
    $headSize:60px;
    $menuSize:300px;
    .app-home{
        .app-header{
            height: $headSize;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            border-bottom: solid 1px #ccc;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-items: space-between;
            font-size: 20px;
            font-weight: bold;
            font-style: italic;
            padding: 0 40px;
            color: #42b981;
        }
        .app-menu{
            position: fixed;
            top: $headSize;
            left: 0;
            width: $menuSize;
            bottom: 0;
            overflow-y: auto;
            overflow-x: hidden;
            border-right: solid 1px #ccc;
        }
        .app-content{
            padding-top: $headSize+20px;
            padding-left: $menuSize+20px;
            box-sizing: border-box;
        }
    }
</style>