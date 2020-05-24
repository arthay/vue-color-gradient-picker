<template>
    <fragment>
        <Input
            :value="hexValue"
            label="hex"
            @input="changeHex"
            :onFocus="() => inProgress = true"
            :onBlur="() => inProgress = false"
            :inProgress="inProgress"
            classes="hex"
        />
    </fragment>
</template>

<script src="./script.js" />
