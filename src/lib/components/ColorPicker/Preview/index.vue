<template>
    <div class="color-preview-area">
        <div class="input-group">
            <Hex
                :red="red"
                :green="green"
                :blue="blue"
                :updateColor="updateColor"
            />
            <RGB
                :red="red"
                :green="green"
                :blue="blue"
                :alpha="alpha"
                :updateColor="updateColor"
            />
        </div>
    </div>
</template>

<script src="./script.js" />
