<template>
    <div
        class="picking-area"
        ref="pickerAreaRef"
        :style="pickerStyle"
        @mousedown="mouseEvents"
    >
        <div class="picking-area-overlay1">
            <div class="picking-area-overlay2">
                <div class="picker-pointer" :style="pointerStyle" />
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />
