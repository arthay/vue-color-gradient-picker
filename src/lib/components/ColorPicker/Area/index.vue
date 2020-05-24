<template>
    <div class="picker-area">
        <Picker
            :red="red"
            :green="green"
            :blue="blue"
            :hue="hue"
            :saturation="saturation"
            :value="value"
            :updateColor="updateColor"
        />

        <GradientPoints
            v-if="isGradient"
            :type="type"
            :degree="degree"
            :points="points"
            :activePointIndex="activePointIndex"
            :changeActivePointIndex="changeActivePointIndex"
            :updateGradientLeft="updateGradientLeft"
            :addPoint="addPoint"
            :removePoint="removePoint"
        />

        <div class="preview">
            <Preview
                :red="red"
                :green="green"
                :blue="blue"
                :alpha="alpha"
                :isGradient="isGradient"
                :points="points"
                :gradientDegree="degree"
                :gradientType="type"
            />

            <div class="color-hue-alpha">
                <Hue
                    :hue="hue"
                    :saturation="saturation"
                    :value="value"
                    :updateColor="updateColor"
                />
                <Alpha
                    :alpha="alpha"
                    :red="red"
                    :green="green"
                    :blue="blue"
                    :updateColor="updateColor"
                />
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />
