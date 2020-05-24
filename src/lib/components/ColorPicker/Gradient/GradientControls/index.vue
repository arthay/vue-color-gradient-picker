<template>
    <div class="gradient-controls">
        <div class="gradient-type">
            <div
                :class="`gradient-type-item liner-gradient ${type === 'linear' ? 'active' : ''}`"
                    @click="() => changeGradientControl({ type: 'linear' })"
            />
            <div
                :class="`gradient-type-item radial-gradient ${type === 'radial' ? 'active' : ''}`"
                @click="() => changeGradientControl({ type: 'radial' })"
            />
        </div>
        <div class="gradient-degrees-options" v-if="type === 'linear'">
            <div
                class="gradient-degrees"
                @mousedown="mouseEvents"
                @click="onClickGradientDegree"
            >
                <div class="gradient-degree-center" :style="degreesStyle">
                    <div class="gradient-degree-pointer" />
                </div>
            </div>
            <div class="gradient-degree-value">
                <p>
                    {{degree}}&#176;
                </p>
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />
