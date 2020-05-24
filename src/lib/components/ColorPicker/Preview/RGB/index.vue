<template>
<fragment>
    <RGBItem
        :value="red"
        type="number"
        label="R"
        :onChange="value => changeValue('red', value)"
    />
    <RGBItem
        :value="green"
        type="number"
        label="G"
        :onChange="value => changeValue('green', value)"
    />
    <RGBItem
        :value="blue"
        type="number"
        label="B"
        :onChange="value => changeValue('blue', value)"
    />
    <RGBItem
        :value="parseInt(alpha * 100, 10)"
        type="number"
        label="Alpha"
        :onChange="value => changeValue('alpha', value)"
    />
</fragment>
</template>

<script src="./script.js" />

<style scoped>

</style>
