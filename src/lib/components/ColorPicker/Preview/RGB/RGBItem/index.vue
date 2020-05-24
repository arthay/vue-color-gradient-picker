<template>
    <div>
        <Input
            :value="inputValue"
            :type="type"
            :label="label"
            @input="onChangeHandler"
            :onFocus="() => inProgress = true"
            :onBlur="onBlur"
            :inProgress="inProgress"
            classes="rgb"
        />
    </div>
</template>

<script src="./script.js" />

<style scoped>

</style>
