<template>
    <div
        :class="`picker-pointer${activeClassName}`"
        :style="pointStyle"
        @mousedown="mouseEvents"
        @dblclick="() => removePoint(index)"
        @click.stop
    >
        <span :class="`child-point${activeClassName}`" />
    </div>
</template>

<script src="./script.js" />
