<template>
    <div
        class="hue"
        @mousedown="mouseEvents"
    >
        <div
            class="hue-area"
             ref="hueRef"
        >
            <div
                class="picker-pointer"
                :style="pointerStyle"
            />
        </div>
    </div>
</template>

<script src="./script.js" />
