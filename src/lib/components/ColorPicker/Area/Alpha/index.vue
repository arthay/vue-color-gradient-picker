<template>
    <div
        @mousedown="mouseEvents"
        class="alpha"
    >
        <div class="gradient" :style="style" />
        <div class="alpha-area">
            <div class="alpha-mask" ref="alphaMaskRef">
                <div class="picker-pointer" :style="pointerStyle" />
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />
