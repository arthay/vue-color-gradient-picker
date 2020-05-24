<template>
    <fragment>
        <GradientControls
            :type="gradientType"
            :degree="gradientDegree"
            :changeGradientControl="changeGradientControl"
        />

        <Area
            :red="colorRed"
            :green="colorGreen"
            :blue="colorBlue"
            :alpha="colorAlpha"
            :hue="colorHue"
            :saturation="colorSaturation"
            :value="colorValue"
            :updateColor="updateColor"
            :is-gradient="true"
            :type="gradientType"
            :degree="gradientDegree"
            :points="gradientPoints"
            :activePointIndex="activePointIndex"
            :changeGradientControl="changeGradientControl"
            :changeActivePointIndex="changeActivePointIndex"
            :updateGradientLeft="updateGradientLeft"
            :addPoint="addPoint"
            :removePoint="removePoint"
        />

        <Preview
            :red="colorRed"
            :green="colorGreen"
            :blue="colorBlue"
            :alpha="colorAlpha"
            :updateColor="updateColor"
        />
    </fragment>
</template>

<script src="./script.js" />
