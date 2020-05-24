<template>
    <div class="ui-color-picker">
        <Gradient
            v-if="isGradient"
            :type="gradient.type"
            :degree="gradient.degree"
            :onChange="onChange"
            :onStartChange="onStartChange"
            :onEndChange="onEndChange"
        />

        <Solid
            v-else
            :red="color.red"
            :green="color.green"
            :blue="color.blue"
            :alpha="color.alpha"
            :onChange="onChange"
            :onStartChange="onStartChange"
            :onEndChange="onEndChange"
        />
    </div>
</template>

<script src="./script.js" />
