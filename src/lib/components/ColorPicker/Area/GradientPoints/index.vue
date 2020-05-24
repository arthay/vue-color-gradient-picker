<template>
    <div
        class="gradient"
        :style="pointsStyle"
        @click="pointsContainerClick"
    >
        <div
            class="gradient-slider-container"
            ref="pointsContainerRef"
        >
            <GradientPoint
                v-for="(point, index) in points"
                :key="index"
                :activePointIndex="activePointIndex"
                :index="index"
                :point="point"
                :width="width"
                :positions="positions"
                :changeActivePointIndex="changeActivePointIndex"
                :updateGradientLeft="updateGradientLeft"
                :removePoint="removePoint"
            />
        </div>
    </div>
</template>

<script src="./script.js" />
