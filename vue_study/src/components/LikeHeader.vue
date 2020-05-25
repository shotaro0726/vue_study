<template>
    <div>
        <slot  :user="user" text="text">
            <slot></slot>
            <hr>
        </slot>
        <slot name="number"></slot>
        <slot name="title"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                firstName: 'Shotaro',
                lastName: 'Ooki',
            }
        }
    }
}
</script>